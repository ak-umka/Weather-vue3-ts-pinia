function formatTemperature(value: number, format: 'F' | 'C') {
  return `${Math.round(value)} ${format}`;
}

export default formatTemperature;