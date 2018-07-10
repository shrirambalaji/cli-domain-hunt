#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const app = require('./app');
const helpText = `
${chalk.dim(`Usage: `)}

${chalk.cyan(`$ domain-hunt name.com`)}

${chalk.dim(`Options:`)}
 -c, --compare        Compare Domain Prices across namespace providers
 -s, --suggest        Suggest alternate domain names for a given domain
`;
const cli = meow(helpText, {
	flags: {
		compare: {
			type: 'boolean',
			alias: 'c'
		},
		suggest: {
			type: 'boolean',
			alias: 's'
		}
	}
});
app(cli.input[0], cli.flags);
