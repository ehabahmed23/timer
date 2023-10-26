const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: node timer.js [timeInSeconds] [timeInSeconds] ...");
  process.exit(1);
}

args.forEach((timeInSeconds) => {
  if (!isNaN(timeInSeconds) && timeInSeconds >= 0) {
    setTimeout(() => {
      process.stdout.write(`Beep after ${timeInSeconds} seconds'\x07'`);
    }, timeInSeconds * 1000);
  } else {
    console.error(`Invalid time specified: ${timeInSeconds}`);
  }
});