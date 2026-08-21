import { products, getNextId } from "../data/products.js";

export const getAllProducts = (req,res) =>{
    res.status(200).json(products)
}

export const getProductById = (req,res) =>{
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ message: `Product with id ${id} not found` });
    }

    res.status(200).json(product);
}

export const createProduct = (req,res)=>{
    const { name, description, price, category, stock, imageUrl } = req.body;

    if(!name || price === undefined){
        return res.status(400).json({message:"Name and price are required fields."})
    }

    const id = getNextId();
    const newProduct = {
    id,
    name,
    description: description || "",
    price: Number(price),
    category: category || "Uncategorized",
    stock: stock !== undefined ? Number(stock) : 0,
    imageUrl: imageUrl || "https://via.placeholder.com/300x300?text=No+Image",
  };
    products.push(newProduct);
    res.status(201).json(newProduct);
}

export const updateProduct = (req,res)=>{
    const id = Number(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ message: `Product with id ${id} not found` });
    }

    const { name, description, price, category, stock, imageUrl } = req.body;

    products[productIndex] = {
        ...products[productIndex],
        name: name || products[productIndex].name,
        description: description || products[productIndex].description,
        price: price !== undefined ? Number(price) : products[productIndex].price,
        category: category || products[productIndex].category,
        stock: stock !== undefined ? Number(stock) : products[productIndex].stock,
        imageUrl: imageUrl || products[productIndex].imageUrl,
    };

    res.status(200).json(products[productIndex]);
}

export const deleteProduct = (req,res)=>{
    const id = Number(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ message: `Product with id ${id} not found` });
    }

    const deleted=products.splice(productIndex, 1);
    res.status(200).json({ message: "Product deleted", product: deleted[0] });
}