const ora = require("ora");
const { gray } = require("chalk");
const { eraseLines } = require("ansi-escapes");
const wait = (msg, timeOut = 300) => {
	let running = false;
	let spinner = null;
	let stopped = false;
	setTimeout(() => {
		if (stopped) return;
		spinner = ora(gray(msg));
		spinner.color = "gray";
		spinner.start();
		running = true;
	}, timeOut);
	const setText = msg => {
		spinner.text = msg;
	};

	const cancel = () => {
		stopped = true;
		if (running) {
			spinner.stop();
			// why is this needed
			process.stderr.write(eraseLines(1));
			running = false;
		}
		process.removeListener("dhExit", cancel);
	};
	process.on("dhExit", cancel);
	return cancel;
};

module.exports = wait;
