function chunkyMonkey(values, size) {
  const result = [];
  while (values.length) {
    result.push(values.splice(0, size));
  }
  return result;
}
