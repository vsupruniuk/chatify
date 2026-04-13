import * as path from 'path';
import * as fs from 'fs';

interface ILocationPosition {
	line: number;
	column: number;
}

interface IStatementLocation {
	start: ILocationPosition;
	end: ILocationPosition;
}

interface IFileCoverage {
	path: string;
	statementMap: Record<string, IStatementLocation>;
	s: Record<string, number>;
}

type CoverageMap = Record<string, IFileCoverage>;

const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
const coverageOpenTag = '<coverage version="1">';
const coverageCloseTag = '</coverage>';
const fileCloseTag = '</file>';

const inputPath: string = path.resolve('coverage/coverage-final.json');
const outputPath: string = path.resolve('coverage/sonar-generic-coverage.xml');

const rawCoverage: string = fs.readFileSync(inputPath, 'utf8');
const parsedCoverage: CoverageMap = JSON.parse(rawCoverage);

const xmlLines: string[] = [];

xmlLines.push(xmlHeader);
xmlLines.push(coverageOpenTag);

for (const [filePath, fileCoverage] of Object.entries(parsedCoverage)) {
	if (!filePath.endsWith('.html')) {
		continue;
	}

	const relativePath: string = path.relative(process.cwd(), filePath).replace(/\\/g, '/');

	const lines = new Map<number, boolean>();

	for (const [statementId, location] of Object.entries(fileCoverage.statementMap)) {
		const lineNumber: number = location.start.line;
		const isCovered: boolean = (fileCoverage.s[statementId] || 0) > 0;

		lines.set(lineNumber, (lines.get(lineNumber) ?? false) || isCovered);
	}

	xmlLines.push(`<file path="${relativePath}">`);

	const sortedLines: [number, boolean][] = [...lines.entries()].sort(
		(first: [number, boolean], second: [number, boolean]) => first[0] - second[0],
	);

	for (const [lineNumber, isCovered] of sortedLines) {
		xmlLines.push(`<lineToCover lineNumber="${lineNumber}" covered="${isCovered}"/>`);
	}

	xmlLines.push(fileCloseTag);
}

xmlLines.push(coverageCloseTag);

fs.writeFileSync(outputPath, xmlLines.join('\n'), 'utf8');
