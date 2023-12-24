export const notFound = async (req, res, next) => {
	res.status(404).json({
		message: "Страница отсутсвует",
	});
};

export const errorHandler = async (err, req, res, next) => {
	// console.error(err.stack);
	res.status(500).json({
		err: err.stack,
		message: err.message,
	});
};
