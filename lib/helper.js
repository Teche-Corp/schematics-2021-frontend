export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function numberCurrency(e) {
  return e.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
