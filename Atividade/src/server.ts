import express, { Application } from "express";
import { AppDataSource } from "./config/dataSource";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import authRoutes from "./routes/authRoutes"
import productRoutes from "./routes/productRouter";
import categoryRoutes from "./routes/categoryRoutes";
import { errorHandler } from "./middlewares/errorHardler";

const app: Application = express();
const PORT: number = Number(process.env.PORT || "3000");

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/login", authRoutes)
app.use(errorHandler)

  AppDataSource.initialize().then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error("Error connecting to database.", error);
});