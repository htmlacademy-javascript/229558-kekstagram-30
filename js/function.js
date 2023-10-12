// 1. Функция для проверки длины строки
const lengthValidation = (string, maxLeng) => string.length <= maxLeng;
lengthValidation ('проверяемая строка', 20);

// 2. Функция для проверки на палиндром.

const isPalindrom = function (String) {
  String = String.replace(/\s+/g, '').toLowerCase();

  for(let i = 0; i < String.length / 2; i++){
    const leftChar = String[i];
    const rightChar = String[String.length - 1 - i];

    if(leftChar !== rightChar) {
      return false;
    }
  }

  return true;
};

isPalindrom('Лёша на полке клопа нашёл ');

// 3. Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 ; /if: forCheck[i]*1 = 0 -> false ** ECMAScript 2022 -> 222(-д.б. 2022-) //  forCheck[i] >= 0 :'пробел' = 0  **'я то мат'.length = 3 -> '   ' -> 0 (-д.б. NaN-)

const getNumbersFromStr = function (forCheck) {
  if (typeof(forCheck) === 'number') {
    return forCheck;
  }

  let Nums = '';

  for(let i = 0; i < forCheck.length; i++){
    if(forCheck[i].match(/\d/)) {
      Nums += forCheck[i];
    }
  }

  return Nums.length > 0 ? Number(Nums) : NaN;
};

getNumbersFromStr('агент 007');

// 3б

const getNumbersFromStr2 = (forCheck) => Number(forCheck.split('').filter((i) => i.match(/\d/)).join(''));

console.log(getNumbersFromStr2('2023 год'))

