
const userMessages = [ // массив сообщений для генерации комментариев
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];
const userNames = [ // массив для генерации случайного имя пользователя
  'Марианна', 'Александр', 'Егор', 'Андрей', 'Леонид', 'Дарья', 'Максим', 'Милана', 'Артём'
];

const aimObjectNumber = 25; // кол-во итоговых объектов

function getNumFromRangeGenerator(min, max, type = 2) { // Функция случайное число

  min -= 1;
  const usedNums = [];
  const getRandomNum = function() {
    const a = Math.ceil(Math.random() * (max - min) + min);
    return a;
  };
  let lastGeneratedId = min;


  return function() {
    if(max < min) {
      return 'Неверно задан диапазон';
    }

    if(type === 1) { // случайное в интервале без повторов.
      if(usedNums.length === max - min) {
        return 'Все идентификаторы использованы';
      }
      lastGeneratedId = getRandomNum();
      while(usedNums.includes(lastGeneratedId)) {
        lastGeneratedId = getRandomNum();
      }
      usedNums.push(lastGeneratedId);
      return lastGeneratedId;
    } else if(type === 2) { //любое из диапазона, есть повторы (default)
      return getRandomNum();
    } else if(type === 3) { // по порядку с минимального до макс
      return lastGeneratedId >= max ? 'Все ид-торы использованы' : lastGeneratedId += 1;
    }
  }; // конец ф-ии возврата
} // конец
//const arrLen = (arr) => arr.length - 1; //длинна массива -1

const getRandomItemFromArr = function(arr) { //случайный индекс массива
  const ind = getNumFromRangeGenerator(0, arr.length - 1);
  return arr[ind()];
};

////////счетчики:
const generateMainObjectId = getNumFromRangeGenerator(1, 25, 3); //id+url, числа 1-25 по порядку
const generateLikesNumber = getNumFromRangeGenerator(15, 200); //likes, рандом
const generateAvaId = getNumFromRangeGenerator(1, 6); //avatarId, рандом
//const generateRandomUserName = getNumFromRangeGenerator(0, arrLen(userNames)); //для случайного имени пользователя, случайное по массиву*/
const generateCommentId = getNumFromRangeGenerator(1, 999, 1); //comment.id ид коммента, случайное без повторов
//const generateRandomMessage = getNumFromRangeGenerator(0, arrLen(userMessages)); //для выбора сообщения в комментарий, случайное по массиву*/
const generatePhraseNumber = getNumFromRangeGenerator(0, 2); // messageNum для количества  сообщений в комментарии случайное 0-2
const generateComentNumber = getNumFromRangeGenerator(0, 30); //commentNum число коментариев под фото, случайное 0-30
////-------------------------------------


const createMessage = function(messageArr, messageNum) { //генерирует сообщение с 0-2 предложениями из заданного массива
  let message = '';
  for(let i = 0; i <= messageNum; i++) {
    message += getRandomItemFromArr(messageArr); // arr[generateRandomMessage()];
  }
  return message;
};


const createComment = function (usersArr, messageArr) { // создает объект "комментарий"
  return {
    'id': generateCommentId(),
    'avatar': `img/avatar-${generateAvaId()}.svg`,
    'message': createMessage(messageArr, generatePhraseNumber()),
    'name': getRandomItemFromArr(usersArr) //users[generateRandomUserName()]
  };
};


const getArrOfCommentsFromGenerator = function(num, userArr, MessageArr) { // создает массив комментариев со случайным количеством от 0 до 30 шт.
  const objArr = [];
  for(let i = 0; i <= num; i++) {
    objArr.push(createComment(userArr, MessageArr));
  }
  return objArr;
};
/*  *спросить*
const commentArrForPhoto = Array.from({length:generateComentNumber()}, createComment())// не работает - почему?
console.log(commentArrForPhoto) //-> object is not a function    и стрелочная и function // не может обработать параметры?
*/

const createPhotoInfo = function(userArr, MessageArr) { //итоговый объект
  const photoNum = generateMainObjectId();
  return {
    'id': photoNum,
    'url': `photos/${photoNum}.jpg`,
    'description': `Фотография ${photoNum}`,
    'likes': generateLikesNumber(),
    'comments': getArrOfCommentsFromGenerator(generateComentNumber(), userArr, MessageArr)
  };
};

const getArrForPhotoInfoFromGenerator = function(num, userArr, MessageArr) {//создает финальный массив
  const objArr = [];
  for(let i = 1; i <= num; i++) {
    objArr.push(createPhotoInfo(userArr, MessageArr));
  }
  return objArr;
};


getArrForPhotoInfoFromGenerator(aimObjectNumber, userNames, userMessages);
