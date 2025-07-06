function interpolation(step, start, end, callback, duration) {
    let current = start;
    const stepTime = duration / step;
    const increment = (end - start) / step;
    let stepsCompleted = 0;

    const intervalId = setInterval(() => {
        current += increment;
        stepsCompleted++;

        if (stepsCompleted >= step) {
            clearInterval(intervalId);
            const y = current * 0.2;
            const x = stepsCompleted * stepTime + 2;
            callback([y, x]);
        }
    }, stepTime * 1000);
}