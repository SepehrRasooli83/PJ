import mongoose from "mongoose";

//defining Schema
const ProductModelSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: false,
      },
      image_url: {
        type: String,
        required: false,
      },meta_title: {//SEO
        type: String,
        required: false,
      },
      meta_description: {//SEO
        type: String,
        required: false,
      },
      meta_keywords: {//SEO
        type: String,
        required: false,
      },
      categoryId:{
        type:mongoose.Types.ObjectId,
        required:true
      }
    },
    {
      timestamps: true,
    }
  );

  const ProductModel = mongoose.models.products || mongoose.model("products", ProductModelSchema);

  export default ProductModel;
  export type ProductModelType = mongoose.InferSchemaType<typeof ProductModelSchema>;