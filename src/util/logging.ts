import chalk from "chalk";

export function log(message?: any, ...optionalParams: any[]): void {
	optionalParams
		? console.log(`${chalk.green("[LOG]")} ${message} ${optionalParams}`)
		: console.log(`${chalk.green("[LOG]")} ${message}`);
}

export function warn(message?: any, ...optionalParams: any[]): void {
	optionalParams
		? console.log(`${chalk.yellow("[WARN]")} ${message} ${optionalParams}`)
		: console.log(`${chalk.yellow("[WARN]")} ${message}`);
}

export function error(message?: any, ...optionalParams: any[]): void {
	optionalParams
		? console.log(`${chalk.red("[ERR]")} ${message} ${optionalParams}`)
		: console.log(`${chalk.red("[ERR]")} ${message}`);
}
