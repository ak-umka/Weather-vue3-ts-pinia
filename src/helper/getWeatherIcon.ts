
function getWeatherIcon(iconName: string, size: '2x' | '4x') {
  return `https://openweathermap.org/img/wn/${iconName}@${size}.png`;
}

export default getWeatherIcon;