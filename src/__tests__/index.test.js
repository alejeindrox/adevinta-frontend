import AccordionItems from '../../src/components/items/accordionItems';
import ModalItems from '../../src/components/items/modalItems';
import ControlButtons from '../../src/components/forms/controlButtons';
import ControlInputs from '../../src/components/forms/controlInputs';

jest.mock('../../src/components/items/accordionItems');
jest.mock('../../src/components/items/modalItems');
jest.mock('../../src/components/forms/controlButtons');
jest.mock('../../src/components/forms/controlInputs');

beforeEach(() => {
  AccordionItems.mockClear();
  ModalItems.mockClear();
  ControlButtons.mockClear();
  ControlInputs.mockClear();
});

describe('Should return if the objects was created', () => {
  it('Should return how many times was called the constructor', () => {
    const newItem = new AccordionItems('Nuevo Item', '<h1>Cuerpo del Item</h1>');
    const newModal = new ModalItems('Nuevo Modal', '<h2>Cuerpo del Modal</h2>', 'Footer');
    const newButton = new ControlButtons('Nuevo Boton');
    const newInput = new ControlInputs('Nuevo Input', 'text', 'inputOne');
    const newText = new ControlInputs('Nuevo Text', 'textArea', 'inputTwo');

    console.log('eslint no-unused-vars: '+newItem+newModal+newButton+newInput+newText);

    expect(AccordionItems).toHaveBeenCalledTimes(1);
    expect(ModalItems).toHaveBeenCalledTimes(1);
    expect(ControlButtons).toHaveBeenCalledTimes(1);
    expect(ControlInputs).toHaveBeenCalledTimes(2);
  });
});
