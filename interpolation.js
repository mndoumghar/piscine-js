function interpolation({ step, start, end, callback, duration }) {
  let evrystep = duration / step;
  let z = start;
  let counter = 0;
  
  const increment = (end - start) / step;

  const res = setInterval(() => {
    let y = z;
    let x = counter * evrystep;

    callback([x, y]);

    z += increment;
    counter++;

    if (counter >= step) {
      clearInterval(res);
    }
  }, evrystep);
}


interpolation({
  step: 5,
  start: 0,
  end: 1,
  duration: 10,
  callback: ([x, y]) => {
    console.log(`x: ${x}, y: ${y}`);
  }
});
