///Вспомогательные функции для генерации данных - случайные числа, элементы массива.  порядковые номера

const getSerialNumberGenerator = function (min = 1, max) { // генерация порядковых номеров от  (опц: до)

  let nextNum = min - 1;

  return function () {
    if(nextNum >= max) {
      return 'Все идентификаторы диапазона использованы';
    }

    nextNum += 1;
    return nextNum;
  };
};

//TO DO: попробовать сложить двумя методами в объект. тут оставить вызов в зав-ти от типа. ...А зачем? ... проще разбить на 2 ф-ии. тогда случайное преезжает отдельно и переиспользуется. слетает замыкание(?). переиспользуется впрямую.
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
        return 'Все идентификаторы диапазона использованы';
      }
      while(usedNums.includes(nextNum)) {
        nextNum = getRandomNum();
      }
      usedNums.push(nextNum);
      return nextNum;

    } else { // любое число диапазона в любых количествах
      return getRandomNum();
    }
  };
};


const getRandomItemFromArr = function(arr) { //случайный  элемент  массива
  const ind = getRandomNumberFromRangeGenerator(0, arr.length - 1);
  return arr[ind()];
};


export {getRandomItemFromArr, getRandomNumberFromRangeGenerator, getSerialNumberGenerator};

