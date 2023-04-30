export function formatDate(date: Date) {
	const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthsOfYear = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const dayOfWeek = daysOfWeek[date.getUTCDay()];
	const dayOfMonth = date.getUTCDate().toString().padStart(2, "0");
	const monthOfYear = monthsOfYear[date.getUTCMonth()];
	const year = date.getUTCFullYear();
	const hours = date.getUTCHours().toString().padStart(2, "0");
	const minutes = date.getUTCMinutes().toString().padStart(2, "0");
	const seconds = date.getUTCSeconds().toString().padStart(2, "0");

	return `${dayOfWeek} ${monthOfYear} ${dayOfMonth} ${hours}:${minutes}:${seconds} +0000 ${year}`;
}
