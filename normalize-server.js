Normalize.limit = limit;

/**
 *
 * @param {Number} limit
 * @param {Number} unit
 * @returns {Number}
 */
function limit(limit, unit) {
  check(limit, Number);
  check(unit, Match.Optional(Number));
  unit = unit || 30;

  if(limit < unit) {
    limit = unit;
  }

  var diff = limit % unit;

  if(diff != 0) {
    limit = limit - diff + unit;
  }

  return limit;
}

