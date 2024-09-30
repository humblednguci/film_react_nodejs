import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    image: String,
    video:String,
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
},
    { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);
export default mongoose.model("Product", productSchema);