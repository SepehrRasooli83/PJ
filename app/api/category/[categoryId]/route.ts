import { NextRequest, NextResponse } from 'next/server';
import { ConnectToDb } from '@/db/ConnectToDb';
import CategoryModel from '@/models/CategoryModel';

// Get One Category
export async function GET(req: NextRequest, { params }: { params: { categoryId: string } }) {
    try {
        await ConnectToDb();
        const category = await CategoryModel.findById(params.categoryId);  // Fetch by categoryId

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}


//Edit One Category
export async function PUT(req: NextRequest, { params }: { params: { categoryId: string } }) {
    try {
        await ConnectToDb();
        const data = await req.json();
        const category = await CategoryModel.findByIdAndUpdate(params.categoryId, data, { new: true });

        if (!category) {
            return NextResponse.json({ error: "Category not found" }, { status: 404 });
        }

        return NextResponse.json(category, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
