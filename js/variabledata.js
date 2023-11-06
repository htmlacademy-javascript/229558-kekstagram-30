import {getRandomNumberFromRangeGenerator, getSerialNumberGenerator} from './util.js'; // функции-генераторы

/// Входные данные, задаваемые  вручную.

const aimObjectNumber = 25; // кол-во итоговых объектов (фото)
const userMessages = [ // массив сообщений для генерации комментариев
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];
const userNames = [ // массив для генерации случайного имя пользователя
  'Марианна', 'Александр', 'Егор', 'Андрей', 'Леонид', 'Дарья', 'Максим', 'Милана', 'Артём'
];

//Счетчики с указанием границ(включительно)
const generateMainObjectId = getSerialNumberGenerator(1, aimObjectNumber); // последовательный номер целевого объекта
const generateCommentId = getRandomNumberFromRangeGenerator(1, 999, 'uniq'); // comment.id, случайное число без повторов
const generateAvaId = getRandomNumberFromRangeGenerator(1, 6); //avatarId, рандом
const generateLikesNumber = getRandomNumberFromRangeGenerator(15, 200); //likes, рандом
const generateNumOfPhrase = getRandomNumberFromRangeGenerator(0,2); // messageNum для количества  сообщений в комментарии случайное 0-2
const generateNumOfComment = getRandomNumberFromRangeGenerator(0, 30); //commentNum число коментариев под фото, случайное 0-30

//Экспорт
export{userMessages, userNames, aimObjectNumber};
export{generateMainObjectId,generateCommentId, generateLikesNumber, generateNumOfPhrase, generateAvaId, generateNumOfComment};
