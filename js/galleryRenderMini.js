import {userMessages, userNames, aimObjectNumber} from './variabledata.js'; // входные данные
import {createPhotoInfo} from './galleryDataObjects.js'; // генерация объектов с данными галереи

//шаблон
const picTemplate = document.querySelector('#picture').content;
const pictureSample = picTemplate.querySelector('.picture');
//таргет
const container = document.querySelector('.pictures'); // сюда

const fragment = document.createDocumentFragment(); // "коробочка"

//заполнение шаблона
const renderMini = function(sample, {url, description, comments, likes}) { //(sample, {id}) Заполн6яет шаблон
  const picture = sample.cloneNode(true); //дубль шаблона для заполнения
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__info').children[0].textContent = comments.length;
  picture.querySelector('.picture__info').children[1].textContent = likes;
  return picture;
};

//сбор фрагмента и заполение галереи
const renderMinis = function () {
  for (let i = 0; i < aimObjectNumber; i++){
    const mini = renderMini(pictureSample, createPhotoInfo(userNames, userMessages));
    fragment.append(mini);
  }
  container.append(fragment);
};

export{renderMinis};


/*
**таргет --> source** //(pictureSample(элемент) --> picData(объект))
img('.picture__img'):
src --> url
alt --> description
p('.picture__info'):
 span 0 (comments) --> comments(array!) *только lehgth
 span 1 (likes) -->- likes
*/
