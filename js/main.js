import {getRandomItemFromArr} from './util.js'; // все задаваемые данные и шаблоны
import {userMessages, userNames, aimObjectNumber} from './variabledata.js'; // входные данные
import {generateMainObjectId,generateCommentId, generateLikesNumber, generateNumOfPhrase, generateAvaId, generateNumOfComment} from './variabledata.js'; // счетчики

///Модуль генерящий итоговые объекты

const createMessage = function(messageArr, messageNum) { //генерирует сообщение с 0-2 уникальными предложениями из заданного массива

  let message = '';
  for(let i = 0; i <= messageNum; i++) {
    message += getRandomItemFromArr(messageArr); // воспользоваться ф-ией без повторов  ***!!!!!!
  }
  return message;
};


const createComment = function (usersArr, messageArr) { // создает объект "комментарий"
  return {
    id : generateCommentId(),
    avatar : `img/avatar-${generateAvaId()}.svg`,
    message : createMessage(messageArr, generateNumOfPhrase()),
    name : getRandomItemFromArr(usersArr)
  };
};


const getArrOfCommentsFromGenerator = function(num, userArr, MessageArr) { // создает массив комментариев со случайным количеством от 0 до 30 шт.
  const objArr = [];
  for(let i = 0; i <= num; i++) {
    objArr.push(createComment(userArr, MessageArr));
  }
  //const objArr = [...new Array(num+1)].map((e) => createComment(userArr, MessageArr))
  return objArr;
};


const createPhotoInfo = function(userArr, messageArr) { //итоговый объект
  const photoNum = generateMainObjectId();
  return {
    'id': photoNum,
    'url': `photos/${photoNum}.jpg`,
    'description': `Фотография ${photoNum}`,
    'likes': generateLikesNumber(),
    'comments': getArrOfCommentsFromGenerator(generateNumOfComment(), userArr, messageArr)
  };
};

const getArrForPhotoInfoFromGenerator = function(num, userArr, messageArr) {//создает финальный массив
  const objArr = [];
  for(let i = 1; i <= num; i++) {
    objArr.push(createPhotoInfo(userArr, messageArr));
  }
  return objArr;
};


getArrForPhotoInfoFromGenerator(aimObjectNumber, userNames, userMessages);
