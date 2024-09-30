
import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import Products from "../models/products";
export const getAll = async (req, res) => {
    try {
        // gửi request từ server nodes -> json-server
        // const { data: products } = await axios.get(`${process.env.API_URL}`);
        const products = await Products.find();
        // Nếu mảng không có sản phẩm nào thì trả về 404
       
        if (products.length === 0) {
            res.status(404).json({
                message: "Không có sản phẩm nào",
            });
        }
        // Nếu có sản phẩm thì trả về 200 và mảng sản phẩm
        return res.status(200).json(products);
    } catch (error) {
        console.log(error , "err product controller")
        return res.status(500).json({
            message: error,
        });
    }
};
export const get = async (req, res) => {
    try {
        // Sử dụng findOne để tìm sản phẩm theo slug
        //.populate("categoryId");
        const product = await Products.findOne({ slug: req.params.slug })
        
        if (!product) {
            return res.status(404).json({
                message: "Không tìm thấy sản phẩm",
            });
        }

        return res.json(product);
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server",
        });
    }
};

