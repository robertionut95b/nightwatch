export const generateYearsArray = function (startYear: number = 1900) {
  var currentYear = new Date().getFullYear(), years = [];
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years.reverse();
};