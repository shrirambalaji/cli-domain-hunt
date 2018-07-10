var r=require("ora"),e=require("chalk").gray,s=require("ansi-escapes").eraseLines;module.exports=function(o,t){void 0===t&&(t=300);var i=!1,n=null,a=!1;setTimeout(function(){a||((n=r(e(o))).color="gray",n.start(),i=!0)},t);var u=function(){a=!0,i&&(n.stop(),process.stderr.write(s(1)),i=!1),process.removeListener("dhExit",u)};return process.on("dhExit",u),u};
//# sourceMappingURL=wait.js.map
