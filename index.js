import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { prisma } from "./prismaClient.js";

import authRoute from "./auth/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const main = () => {
	if (process.env.NODE_ENV === "development") {
		app.use(morgan("dev"));
	}
	app.use(express.json());
	app.use("/api/auth", authRoute);

	app.get("/", (req, res) => {
		res.status(200).json({
			message: "nice",
		});
	});

	app.listen(PORT, () => {
		console.log(`Сервер успешно запущен на порту: ${PORT}`);
	});
};

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
