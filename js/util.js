///Вспомогательные функции

const getSerialNumberGenerator = function (min = 1, max) { // генерация порядковых номеров от  (опц: до)

  let nextNum = min - 1;

  return function () {
    if(nextNum >= max) {
      return 'Нет свободных номеров';
    }

    nextNum += 1;
    return nextNum;
  };
};


const getRandomNumberFromRangeGenerator = function (min, max, type) { //генерация случайного числа из диапазона ( опц: уникального)

  min -= 1;
  let nextNum;
  const usedNums = [undefined];
  const getRandomNum = function() {
    const a = Math.ceil(Math.random() * (max - min) + min);
    return a;
  };

  return function () {
    if(max <= min || isNaN(max)) {
      return 'Неверно задан диапазон';
    }

    if(type === 'uniq') { //выдача уникальных значений диапазона в случайном порадке
      if(usedNums.length - 1 === max - min) {
        return 'Все идентификаторы использованы';
      }
      while(usedNums.includes(nextNum)) {
        nextNum = getRandomNum();
      }
      usedNums.push(nextNum);
      return nextNum; // любое число диапазона
    } else {
      return getRandomNum();
    }
  };
};


const getRandomItemFromArr = function(arr) { //случайный  элемент  массива // варинант ренерации случайного числа из диапазона без счетчика
  const ind = getRandomNumberFromRangeGenerator(0, arr.length - 1);
  return arr[ind()];
};


export {getRandomItemFromArr, getRandomNumberFromRangeGenerator, getSerialNumberGenerator};

