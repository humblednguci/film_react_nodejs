import Category from "../models/category";
import Product from "../models/products";
export const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        if (categories.length === 0) {
            res.status(404).json({
                message: "Không có danh mục nào",
            });
        }
        return res.status(200).json(categories);
    } catch (error) {
        // Nếu có lỗi thì trả về 500 và lỗi
        return res.status(500).json({
            message: error,
        });
    }
};
export const get = async (req, res) => {
    try {
        // const category = await Category.findById(req.params.id);
        // console.log("category", category);
        const category = await Category.findById(req.params.id).populate("products")
        if (!category) {
            return res.status(404).json({
                message: "Không tìm thấy danh mục",
            });
        }
        const products = await Product.find({ categoryId: req.params.id });
        console.log("products", products);
        // return res.status(200).json({
        //     ...category.toObject(),
        //     products,
        // });
        return res.status(200).json(category)
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server",
        });
    }
};
