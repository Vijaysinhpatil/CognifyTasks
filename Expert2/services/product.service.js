
import Product from "../models/product.js"

export const getAllProducts = async() => {
    return await Product.find();
}

export const createProduct = async(data) => {
    return await Product.create(data)
}