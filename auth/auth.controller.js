import { hash } from "argon2";
import { prisma } from "../prisma.js";

export const authLogin = async (req, res) => {
	res.status(200).json({
		message: "ok",
	});
};

export const authRegister = async (req, res) => {
	console.log("12345 not midle");
	const { email, name, password, tg, phone } = req.body;
	if (!!email && !!name && !!password && !!phone) {
		try {
			const passwordHash = await hash(password);

			const user = await prisma.user.create({
				data: {
					email,
					password: passwordHash,
					name,
					tg,
					phone,
				},
				select: {
					id: true,
					email: true,
					name: true,
					tg: true,
					phone: true,
				},
			});

			res.status(200).json({
				message: "ok",
				user,
			});
		} catch (err) {
			res.status(401).json({
				message: "Произошла ошибка",
			});
		}
	} else {
		res.status(401).json({
			message: "Не все поля были заполненые",
		});
	}
};
