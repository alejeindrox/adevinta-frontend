import ControlInputs from '../../../../src/components/forms/controlInputs';

const newInput = new ControlInputs('Nuevo Input', 'text', 'inputOne');
const newText = new ControlInputs('Nuevo Text', 'textArea', 'inputTwo');

describe('Should return the values of the properties of a Object ControlInputs', () => {
  it('Should return the property label of textInput', () => {
    expect(newInput.label).toBe('Nuevo Input');
  });
  it('Should return the property type of textInput', () => {
    expect(newInput.type).toBe('text');
  });
  it('Should return the property id of textInput', () => {
    expect(newInput.id).toBe('inputOne');
  });
  it('Should return the property label defined of textArea', () => {
    expect(newText.label).toBeDefined;
  });
});

describe('Should return parts of the Object ControlInputs', () => {
  it('Should return a part of the string of the property label of textInput', () => {
    expect(newInput.label).toMatch(/Input/);
  });
  it('Should return a part of the string of the property id of textInput', () => {
    expect(newInput.id).toMatch(/input/);
  });
  it('Should return a part of the string of the property label of textArea', () => {
    expect(newText.label).toMatch(/Text/);
  });
  it('Should return a part of the string of the property type of textArea', () => {
    expect(newText.type).toMatch(/text/);
  });
});

describe('Should return the types properties of the Object ControlInputs', () => {
  it('Should return if the object is an instace of ControlInputs', () => {
    expect(newInput).toBeInstanceOf(ControlInputs);
    expect(newText).toBeInstanceOf(ControlInputs);
    expect(typeof newInput).toBe('object');
    expect(typeof newText).toBe('object');
  });
  it('Should return a value defined for label', () => {
    expect(newInput.label).toBeDefined;
    expect(typeof newInput.label).toBe('string');
  });
  it('Should return a value defined for type', () => {
    expect(newInput.type).toBeDefined;
    expect(typeof newInput.type).toBe('string');
  });
  it('Should return a value defined for id', () => {
    expect(newText.id).toBeDefined;
    expect(typeof newText.id).toBe('string');
  });
});

describe('Should return complete tags of structure object ControlInputs', () => {
  it('Should return a tag <input> for input', () => {
    const tag = '<input type="text" class="formField" id="inputOne" placeholder="Nuevo Input">';
    expect(newInput.generateInput()).toBe(tag);
  });
  it('Should return a tag <textarea> for text', () => {
    const tag = '<textarea class="formField" id="inputTwo" placeholder="Nuevo Text" rows="6"></textarea>';
    expect(newText.generateInput()).toBe(tag);
  });
  it('Should return a tag <div> for label input', () => {
    expect(newInput.generateLabel()).toBe('<label class="formLabel">Nuevo Input</label>');
  });
  it('Should return a complete tag <div> for textarea', () => {
    const tag = `<div class="formControl">${newText.generateInput()+newText.generateLabel()}</div>`;
    expect(newText.generateTag()).toBe(tag);
  });
});
