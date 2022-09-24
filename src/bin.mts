#!/usr/bin/env node

import type { Config } from './config.mjs';
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';

(async () => {
	const config = await (async projectDir => {
		const files = fs.readdirSync(projectDir);
		const match = /^pentry\.config\.[me]?js$/;
		const configPath = files.find(RegExp.prototype.test.bind(match));
		return (await import(path.resolve(projectDir, configPath))).default as Config;
	})(process.cwd());

	const server = http.createServer(function(req, res) {
		res.writeHead(200);
		res.write('hello, world');
		res.end();
	});
	server.listen(config.port);
	console.log(`Listening on http://localhost:${config.port}`);
})();