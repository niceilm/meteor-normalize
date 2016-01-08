Normalize = {
  date: date
};

/**
 *
 * @param {Date} date
 * @param {String} format
 */
function date(date, format) {
  return new Date(moment(date).format(format || "YYYY-MM-DD"));
}
