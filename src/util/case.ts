export function camelToSnakeCase(text: string) {
	return text
		.replace(/(.)([A-Z][a-z]+)/, "$1_$2")
		.replace(/([a-z0-9])([A-Z])/, "$1_$2")
		.toLowerCase();
}
