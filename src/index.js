import AccordionItems from './components/items/accordionItems';
import ControlButtons from './components/forms/controlButtons';
import ControlInputs from './components/forms/controlInputs';
import ModalItems from './components/items/modalItems';
import { dataInit, controlInit, modalInit } from './data/data';
import { initWrappers, generateWrappers } from './utils/wrappers';
import { initListener } from './utils/listeners';
import { addFavicon } from './utils/actions';
import './styles/app.scss';

const itemsData = dataInit.map((data) => {
  return (new AccordionItems(data.title, data.content));
});

const controlsData = controlInit.map((control) => {
  return (new ControlButtons(control.className, control.text));
});

const modalsData = modalInit.body.map((modal) => {
  return (new ControlInputs(modal.inputTitle, modal.inputType, modal.inputId));
});
const modalBody = generateWrappers(modalsData, 'Modal');
const modalFooter = new ControlButtons(modalInit.footer.className, modalInit.footer.text);
const modalTag = new ModalItems(modalInit.header, modalBody, modalFooter.generateTag());

document.addEventListener('DOMContentLoaded', () => {
  initWrappers(itemsData, controlsData, modalTag.generateModalTag());
  initListener();
  addFavicon();
});
