import CategoryModel from "@/models/CategoryModel";
import { NextRequest,NextResponse } from "next/server";
import { ConnectToDb } from "@/db/ConnectToDb";


//Get List
export async function GET(req:NextRequest){
    try{
        await ConnectToDb();
        const categories = await CategoryModel.find({});
        return NextResponse.json(categories,{status:200});
    }catch(error){
        return NextResponse.json({error:error},{status:500});
    }
}


//Edit
export async function PUT(req:NextRequest){
    try{
        await ConnectToDb();
        const id = req.nextUrl.searchParams.get('id');
        const body = await req.json();
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id,body,{new:true});
        if(!updatedCategory){
            return NextResponse.json({error:"Category not found"},{status:404});
        }
        return NextResponse.json(updatedCategory,{status:200});
    }catch(error){
        return NextResponse.json({error:error},{status:500});
    }
}


//Delete
export async function DELETE(req:NextRequest){
    try{
        const id = req.nextUrl.searchParams.get('id');
        const deletedCategory = await CategoryModel.findByIdAndDelete(id);
        if(!deletedCategory){
            return NextResponse.json("Category not found");
        }
        return NextResponse.json(deletedCategory,{status:200});
    }catch(err){
        return NextResponse.json({error:err},{status:500});
    }
}


//Create
export async function POST(req:NextRequest){
    try{
        const body = await req.json();
        const newCategory = new CategoryModel(body);
        await newCategory.save();
        return NextResponse.json(newCategory,{status:200});
    }catch(err){
        return NextResponse.json({error:err},{status:500});
    }
}
