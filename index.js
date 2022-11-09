// expecting time to be a string in the format like '8:15' or '12:30'
const NUMBERS_IN_HOURS_WORDS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'quarter', // 15
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'half', // 30
];

function convertTimeToWords(time) {
  const hour = parseInt(time.split(':')[0]);
  const minutes = parseInt(time.split(':')[1]);

  if (time === '0:00') {
    return 'midnight';
  }

  if (minutes === 0) {
    return `${NUMBERS_IN_HOURS_WORDS[hour - 1]} o'clock`;
  }

  if (minutes > 30) {
    const minutesLeft = 60 - minutes;
    return `${NUMBERS_IN_HOURS_WORDS[minutesLeft - 1]} to ${NUMBERS_IN_HOURS_WORDS[hour]}`;
  }

  return `${NUMBERS_IN_HOURS_WORDS[minutes - 1]} past ${NUMBERS_IN_HOURS_WORDS[hour - 1]}`;
}

module.exports = { convertTimeToWords };