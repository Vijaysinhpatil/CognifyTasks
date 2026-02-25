import { redisClient } from "../config/redis.js"
import { jobQueue } from "../queues/job.queue.js";
import { createProduct, getAllProducts } from "../services/product.service.js";

export const fetchProducts = async(req , res) => {

    const cache = await redisClient.get("product");

    if(cache){
        return res.json(JSON.parse(cache));
    }

    const products = await getAllProducts(); 
    await redisClient.set("products" , JSON.stringify(products) , {
        EX : 60
    });

    res.json(products);

}

export const addProduct = async(req , res) => {
    const product = await createProduct(req.body);

    await jobQueue.add({
        type : "LOG_PRODUCT" , 
        data : product
    });

    res.json(product)
}