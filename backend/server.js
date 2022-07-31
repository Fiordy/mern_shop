import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();

/*-----------------------------------------------------------------*/
/* Home base                                                       */
/*-----------------------------------------------------------------*/
app.get("/", (req, res) => {
  res.send("API is running....");
});


/*-----------------------------------------------------------------*/
/* Route registering                                               */
/*-----------------------------------------------------------------*/
app.use("/api/products", productRoutes);


/*-----------------------------------------------------------------*/
/* Middleware registering                                          */
/*-----------------------------------------------------------------*/
app.use(notFound)

app.use(errorHandler)


/*-----------------------------------------------------------------*/
/* Server launch                                                   */
/*-----------------------------------------------------------------*/
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
