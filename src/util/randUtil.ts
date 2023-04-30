export const randInt = (length: number) => {
	return Math.floor(
		Math.pow(10, length - 1) +
			Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
	);
};

export const randStr = (len: number) =>
	[...Array(len)].reduce(
		(a) =>
			a +
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"[
				~~(
					Math.random() *
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
						.length
				)
			],
		""
	);
