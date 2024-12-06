import { NextRequest, NextResponse } from 'next/server';
import { ConnectToDb } from '@/db/ConnectToDb';
import ProductModel from '@/models/ProductModel';

// Get One Product
export async function GET(req: NextRequest, { params }: { params: { productId: string } }) {
    try {
        await ConnectToDb();
        const Product = await ProductModel.findById(params.productId);  // Fetch by productId

        if (!Product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(Product, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}


//Edit One Product
export async function PUT(req: NextRequest, { params }: { params: { productId: string } }) {
    try {
        await ConnectToDb();
        const data = await req.json();
        const Product = await ProductModel.findByIdAndUpdate(params.productId, data, { new: true });

        if (!Product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(Product, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
