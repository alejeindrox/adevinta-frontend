import ControlButtons from '../../../../src/components/forms/controlButtons';

const newButton = new ControlButtons('Nuevo Boton');

describe('Should return the values of the properties of a Object ControlButtons', () => {
  it('Should return the property className', () => {
    expect(newButton.className).toBe('Nuevo Boton');
  });
  it('Should return the property text defined', () => {
    expect(newButton.text).toBe('Cambiar Color');
  });
});

describe('Should return parts of the Object ControlButtons', () => {
  it('Should return a part of the string of the property className', () => {
    expect(newButton.className).toMatch(/Boton/);
  });
  it('Should return a part of the string of the property text', () => {
    expect(newButton.text).toMatch(/Color/);
  });
});

describe('Should return the types properties of the Object ControlButtons', () => {
  it('Should return if the object is an instace of ControlButtons', () => {
    expect(newButton).toBeInstanceOf(ControlButtons);
    expect(typeof newButton).toBe('object');
  });
  it('Should return a value defined for className', () => {
    expect(newButton.className).toBeDefined;
    expect(typeof newButton.className).toBe('string');
  });
  it('Should return a string instead of null for text', () => {
    expect(newButton.text).not.toBeNull;
    expect(typeof newButton.text).toBe('string');
  });
});

describe('Should return complete tags of structure object ControlButtons', () => {
  it('Should return a tag <div> for button', () => {
    const tag = '<div class="Nuevo Boton" id="Nuevo Boton"><span>Cambiar Color</span></div>';
    expect(newButton.generateTag()).toBe(tag);
  });
});
