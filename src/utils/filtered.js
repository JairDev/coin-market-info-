export function filtered(arr, compare, notEqual) {
  if (notEqual) {
    const filter = arr.filter((item) => item.id !== compare);
    return filter;
  } else {
    const filter = arr.filter((item) => item.id === compare);
    return filter;
  }
}
