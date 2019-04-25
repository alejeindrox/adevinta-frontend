import WrapperDom from '../components/wrappers/wrapperDom';
import { addDom } from './actions';

export const generateWrappers = (data, type) => {
  const dataWrapper = data.reduce((acum, obj, index) => {
    if (index === 1) {
      acum = acum.generateTag();
    }
    return (acum + obj.generateTag());
  });

  let wrapper;
  switch (type) {
    case 'Accordion':
      wrapper = WrapperDom.generateWrapperAccordion(dataWrapper);
      break;
    case 'Control':
      wrapper = WrapperDom.generateWrapperControl(dataWrapper);
      break;
    case 'Modal':
      wrapper = dataWrapper;
      break;
    default:
      break;
  }
  return (wrapper);
};

export const initWrappers = (itemsData, controlsData, modalsData) => {
  const controls = generateWrappers(controlsData, 'Control');
  const accordions = generateWrappers(itemsData, 'Accordion');
  const modals = WrapperDom.generateWrapperModal(modalsData);

  const app = document.getElementById('app');
  const newDom = controls + accordions + modals;
  addDom(app, newDom);
};
