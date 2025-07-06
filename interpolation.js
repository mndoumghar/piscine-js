function interpolation(step, start, end, callback, duration) {
    const stepDuration = duration / step;
    const increment = (end - start) / step;
    let currentValue = start;
    let currentStep = 0;

    const interval = setInterval(() => {
        currentValue += increment;
        currentStep++;

        if (currentStep >= step) {
            clearInterval(interval);
            const y = currentValue * 0.2;
            const x = currentStep * stepDuration + 2;
            callback([y, x]);
        }
    }, stepDuration * 1000);
}