#!/usr/bin/env node
var a=require("meow"),e=require("chalk"),n=require("./app"),s=a("\n"+e.dim("Usage: ")+"\n\n"+e.cyan("$ domain-hunt name.com")+"\n\n"+e.dim("Options:")+"\n -c, --compare        Compare Domain Prices across namespace providers\n -s, --suggest        Suggest alternate domain names for a given domain\n",{flags:{compare:{type:"boolean",alias:"c"},suggest:{type:"boolean",alias:"s"}}});n(s.input[0],s.flags);
//# sourceMappingURL=cli.js.map
