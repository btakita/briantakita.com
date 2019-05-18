const a1__month = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const a1__month__abbrev = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
function format__date__prose(date) {
	date = date || new Date();
	return `${a1__month[date.getMonth()]} ` +
		`${pad2(date.getDate())}, ` +
		date.getFullYear()
}
function toLocalDateString(date = new Date()) {
  return date.toLocaleDateString()
}
function _date__append__local_tz(txt__date) {
  return new Date(`${txt__date} (${toLocalDateString()})`)
}
function pad2(n) {	// always returns a string
	return (n < 10 ? '0' : '') + n
}

export { format__date__prose as a, _date__append__local_tz as b, a1__month__abbrev as c };
//# sourceMappingURL=chunk.cd7ed10c.js.map
