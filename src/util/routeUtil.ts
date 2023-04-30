import * as fs from "fs";

export function searchDirForTsFiles(dirPath: string): string[] {
	const files = fs.readdirSync(dirPath);

	let tsFiles: string[] = [];

	for (const file of files) {
		const filePath = `${dirPath}/${file}`;
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			// Recursively search subdirectory
			const subDirTsFiles = searchDirForTsFiles(filePath);
			tsFiles = tsFiles.concat(subDirTsFiles);
		} else if (filePath.endsWith(".ts")) {
			tsFiles.push(filePath);
		}
	}

	return tsFiles;
}
