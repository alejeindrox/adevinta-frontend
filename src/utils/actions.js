import AccordionItems from '../components/items/accordionItems';
import { addListenerItems } from './listeners';

export const addDom = (tag, value) => {
  tag.innerHTML += value;
};

export const toggleItem = (item) => {
  const accordionItems = document.getElementsByClassName('accordionItem');
  for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].className = 'accordionItem close';
  }
  if (accordionItems[item].className === 'accordionItem close') {
    accordionItems[item].className = 'accordionItem open';
  } else {
    accordionItems[item].className = 'accordionItem close';
  }
};

export const displayModal = (show) => {
  const modal = document.getElementById('modalItem');
  show === 'open' ?
    modal.style.display = 'block' :
    modal.style.display = 'none';
}

export const changeColor = (theme) => {
  const modalHeader = document.getElementById('modalHeader');
  const modalFooter = document.getElementById('modalFooter');
  const headingItems = document.getElementsByClassName('accordionItemHeading');

  modalHeader.className = `modalHeader ${theme}`;
  modalFooter.className = `modalFooter ${theme}`;
  for (let i = 0; i < headingItems.length; i++) {
    headingItems[i].className = `accordionItemHeading ${theme}`;
  }
};

export const addItemAccordion = () => {
  const accordion = document.getElementById('accordionWrapper');
  const color = document.getElementsByClassName('accordionItemHeading');
  const newTitle = document.getElementById('newTitleAccordion');
  const newBody = document.getElementById('newBodyAccordion');
  const newTheme = color[0].className.split(' ')[1];

  if (newTitle.value !== '' && newBody.value !== '') {
    const newItem = new AccordionItems(newTitle.value, newBody.value, newTheme);
  
    newTitle.value = '';
    newBody.value = '';
  
    addDom(accordion, newItem.generateTag());
    addListenerItems();
    displayModal('close');
  }
};

export const addFavicon = () => {
  const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'https://www.adevinta.com/wp-content/themes/scom/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
};
