import ModalItems from '../../../../src/components/items/modalItems';

const newModal = new ModalItems('Nuevo Modal', '<h2>Cuerpo del Modal</h2>', 'Footer');

describe('Should return the values of the properties of a Object ModalItems', () => {
  it('Should return the property header', () => {
    expect(newModal.header).toBe('Nuevo Modal');
  });
  it('Should return the property body', () => {
    expect(newModal.body).toBe('<h2>Cuerpo del Modal</h2>');
  });
  it('Should return the property footer', () => {
    expect(newModal.footer).toBe('Footer');
  });
});

describe('Should return parts of the Object ModalItems', () => {
  it('Should return a part of the string of the property header', () => {
    expect(newModal.header).toMatch(/Modal/);
  });
  it('Should return a part of the string of the property body', () => {
    expect(newModal.body).toMatch(/<h2>/);
  });
  it('Should return a part of the string of the property footer', () => {
    expect(newModal.footer).toMatch(/oo/);
  });
});

describe('Should return the types properties of the Object ModalItems', () => {
  it('Should return if the object is an instace of ModalItems', () => {
    expect(newModal).toBeInstanceOf(ModalItems);
    expect(typeof newModal).toBe('object');
  });
  it('Should return a value defined for header', () => {
    expect(newModal.header).toBeDefined;
    expect(typeof newModal.header).toBe('string');
  });
  it('Should return a value defined for body', () => {
    expect(newModal.body).toBeDefined;
    expect(typeof newModal.body).toBe('string');
  });
  it('Should return a value defined for footer', () => {
    expect(typeof newModal.footer).toBe('string');
  });
});

describe('Should return complete tags of structure object ModalItems', () => {
  it('Should return a tag <div> with header', () => {
    const close = '<span class="modalClose" id="modalClose">&times;</span>';
    const tag = `<div class="modalHeader themeOne" id="modalHeader">${close}Nuevo Modal</div>`;
    expect(newModal.getModalHeaderTag()).toBe(tag);
  });
  it('Should return a tag <div> with body', () => {
    expect(newModal.getModalBodyTag()).toBe('<div class="modalBody"><h2>Cuerpo del Modal</h2></div>');
  });
  it('Should return a tag <div> with footer', () => {
    const tag = `<div class="modalFooter themeOne" id="modalFooter">Footer</div>`;
    expect(newModal.getModalFooterTag()).toBe(tag);
  });
  it('Should return a tag <div> with title and content', () => {
    const tag = `<div class="modalContent">
        ${newModal.getModalHeaderTag() + newModal.getModalBodyTag() + newModal.getModalFooterTag()}
      </div>`;
    expect(newModal.generateModalTag()).toBe(tag);
  });
});
