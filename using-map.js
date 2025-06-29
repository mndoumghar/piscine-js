function citiesOnly(arr) {
  return arr.map(obj => obj.city);
  // return arr.map(obj => obj.city)
}

function upperCasingStates(arr) {
  return arr.map(state =>
    state.split(' ')
      .map(word => capitalizeFirstLetter(word))
      .join(' ')
  );
  
}
console.log(


upperCasingStates(['alabama', 'new jersey']) // -> ['Alabama', 'New Jersey']



)
function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
function fahrenheitToCelsius(temps) {
  return temps.map(temp => {
    const f = parseInt(temp.replace(/[^0-9-]/g, ''), 10);
    const c = Math.floor((f - 32) / 1.8);
    return `${c}°C`;
  });
}
function trimTemp(arr) {
  return arr.map(obj => ({
    ...obj,
    temperature: obj.temperature.replace(/\s+/g, '')
  }));
}


function tempForecasts(arr) {
  return arr.map(item => {
    const f = parseInt(item.temperature.replace(/\s+/g, ''), 10);
    const c = Math.floor((f - 32) / 1.8);
    const state = item.state
      .split(' ')
      .map(word => capitalizeFirstLetter(word))
      .join(' ');
    return `${c}°Celsius in ${item.city}, ${state}`;
  });
}