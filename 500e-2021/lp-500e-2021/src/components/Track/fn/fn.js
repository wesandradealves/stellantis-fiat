function isFn(value) {
  return (
    typeof value === 'function' || value instanceof Function
  );
}

module.exports = isFn;
