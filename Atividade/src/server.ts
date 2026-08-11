import express, { Application } from "express";
import { AppDataSource } from "./config/dataSource";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import categoryRoutes from './routes/categoryRoutes'
import productsRouter from './routes/productRouter'
import { errorHandler } from "./middlewares/errorHardler";

const app: Application = express();
const PORT: number = Number(process.env.PORT || "3000");

app.use(express.json());

// Utilizando as rotas na aplicação
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use('/api', categoryRoutes)
app.use('/api', productsRouter)

app.use(errorHandler);

// Inicializando conexão com o banco de dados
AppDataSource.initialize().then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error("Error connecting to database.", err);
});