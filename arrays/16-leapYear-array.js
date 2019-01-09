/* Find the leap years in a given range of years.
year leap =  1952
each 4 years = 4
*/
function leapYear (num) {
  let allLeapYears = []
  for (let key of num) {
    if (key % 4 === 0) allLeapYears.push(key)
  }
  return allLeapYears
}

const num = [2000, 2001, 2002, 2003, 2004]
console.log(leapYear(num))
