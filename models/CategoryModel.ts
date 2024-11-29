import mongoose from "mongoose";

//defining Schema
const CategoryModelSchema = new mongoose.Schema(
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
    },
    {
      timestamps: true,
    }
  );

  const CategoryModel = mongoose.models.categories || mongoose.model("categories", CategoryModelSchema);

  export default CategoryModel;