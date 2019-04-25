import { toggleItem, displayModal, changeColor, addItemAccordion } from './actions';

export const addListenerItems = () => {
  const listenItems = document.getElementsByClassName('accordionItemHeading');

  for (let i = 0; i < listenItems.length; i++) {
    listenItems[i].addEventListener('click', () => { toggleItem(i) }, false);
  }
};

export const addListenerControls = () => {
  const changeColorOne = document.getElementById('buttonControlOne');
  const changeColoTwo = document.getElementById('buttonControlTwo');
  const changeColorThree = document.getElementById('buttonControlThree');

  changeColorOne.addEventListener('click', () => { changeColor('themeOne') }, false);
  changeColoTwo.addEventListener('click', () => { changeColor('themeTwo') }, false);
  changeColorThree.addEventListener('click', () => { changeColor('themeThree') }, false);
};

export const addListenerModals = () => {
  const addItem = document.getElementById('buttonControlAdd');
  const addItemModal = document.getElementById('buttonControlModal');
  const closeModal = document.getElementById('modalClose');

  addItem.addEventListener('click', () => { displayModal('open') }, false);
  addItemModal.addEventListener('click', () => { addItemAccordion() }, false);
  closeModal.addEventListener('click', () => { displayModal('close') }, false);
};

export const initListener = () => {
  addListenerItems();
  addListenerControls();
  addListenerModals();
};
