import ProductModel, { ProductModelType } from "@/models/ProductModel";
import { NextRequest,NextResponse } from "next/server";
import { ConnectToDb } from "@/db/ConnectToDb";
import mongoose from "mongoose";


//Get List
export async function GET(req:NextRequest){
    try{
        console.log('its hereeeeeeeeee');
        await ConnectToDb();
        const products = await ProductModel.find({});
        const typedProducts = products as ProductModelType[];
        return NextResponse.json(typedProducts,{status:200});
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
        const updatedProduct = await ProductModel.findByIdAndUpdate(id,body,{new:true});
        if(!updatedProduct){
            return NextResponse.json({error:"Product not found"},{status:404});
        }
        return NextResponse.json(updatedProduct,{status:200});
    }catch(error){
        return NextResponse.json({error:error},{status:500});
    }
}


//Delete
export async function DELETE(req:NextRequest){
    try{
        const id = req.nextUrl.searchParams.get('id');
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if(!deletedProduct){
            return NextResponse.json("Product not found");
        }
        return NextResponse.json(deletedProduct,{status:200});
    }catch(err){
        return NextResponse.json({error:err},{status:500});
    }
}


//Create
export async function POST(req: NextRequest) {
    try {
      let body = await req.json();
  
      if (!body?.categoryId) {
        return NextResponse.json({ error: "Category ID is required" }, { status: 400 });
      }
  
      body.categoryId = new mongoose.Types.ObjectId(body.categoryId);
  
      const newProduct = new ProductModel(body);
  
      await newProduct.save();
  
      return NextResponse.json(newProduct, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: err || "An error occurred" }, { status: 500 });
    }
  }
