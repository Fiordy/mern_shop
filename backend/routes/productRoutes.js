import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

/*-------------------------------------------------------------------
@desc Fetch all products
@route GET [/api/products]
@access universal
-------------------------------------------------------------------*/
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

/*-------------------------------------------------------------------
@desc Fetch product matching ID
@route GET [/api/products/:id]
@access universal
-------------------------------------------------------------------*/
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found!");
    }
    res.json(product);
  })
);

export default router;
