import { prisma } from "../prisma.js";

export const middlewareRegister = async (req, res, next) => {
	const { email } = req.body;
	try {
		const isHaveUser = await prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (isHaveUser) {
			throw new Error("Пользователь с таким email уже зарегистрирован");
		} else {
			next();
		}
	} catch (err) {
		next(err);
	}
	// res.status(200).json({
	// 	message: req.body,
	// 	test: "test",
	// });
};
