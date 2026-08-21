import {Router} from "express";
import {getProductById, createProduct, updateProduct, deleteProduct, getAllProducts} from "../controllers/productController.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;