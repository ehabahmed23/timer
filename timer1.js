const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: node timer.js [timeInSeconds] [timeInSeconds] ...");
  process.exit(1);
}

args.forEach((timeInSeconds) => {
  const time = parseInt(timeInSeconds, 10);

  if (!isNaN(time) && time >= 0) {
    setTimeout(() => {
      console.log(`Beep after ${time} seconds`);
    }, time * 1000);
  } else if (isNaN(time)) {
    console.error(`Invalid input: "${timeInSeconds}" is not a number`);
  } else if (time < 0) {
    console.error(`Invalid input: "${timeInSeconds}" is a negative number`);
  }
});