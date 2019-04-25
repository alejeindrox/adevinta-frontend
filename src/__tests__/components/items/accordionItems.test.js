import AccordionItems from '../../../../src/components/items/accordionItems';

const newItem = new AccordionItems('Nuevo Item', '<h1>Cuerpo del Item</h1>');

describe('Should return the values of the properties of a Object AccordionItems', () => {
  it('Should return the property title', () => {
    expect(newItem.title).toBe('Nuevo Item');
  });
  it('Should return the property content', () => {
    expect(newItem.content).toBe('<h1>Cuerpo del Item</h1>');
  });
  it('Should return the property theme defined', () => {
    expect(newItem.theme).toBe('themeOne');
  });
});

describe('Should return parts of the Object AccordionItems', () => {
  it('Should return a part of the string of the property title', () => {
    expect(newItem.title).toMatch(/Nuevo/);
  });
  it('Should return a part of the string of the property content', () => {
    expect(newItem.content).toMatch(/<h1>/);
  });
  it('Should return a part of the string of the property theme', () => {
    expect(newItem.theme).toMatch(/One/);
  });
});

describe('Should return the types properties of the Object AccordionItems', () => {
  it('Should return if the object is an instace of AccordionItems', () => {
    expect(newItem).toBeInstanceOf(AccordionItems);
    expect(typeof newItem).toBe('object');
  });
  it('Should return a value defined for title', () => {
    expect(newItem.title).toBeDefined;
    expect(typeof newItem.title).toBe('string');
  });
  it('Should return a value defined for content', () => {
    expect(newItem.content).toBeDefined;
    expect(typeof newItem.content).toBe('string');
  });
  it('Should return a string instead of null for theme', () => {
    expect(newItem.theme).not.toBeNull;
    expect(typeof newItem.theme).toBe('string');
  });
});

describe('Should return complete tags of structure object AccordionItem', () => {
  it('Should return a tag <dt> with title', () => {
    expect(newItem.getItemTitleTag()).toBe('<dt class="accordionItemHeading themeOne">Nuevo Item</dt>');
  });
  it('Should return a tag <dd> with content', () => {
    expect(newItem.getItemContentTag()).toBe('<dd class="accordionItemContent"><h1>Cuerpo del Item</h1></dd>');
  });
  it('Should return a tag <div> with title and content', () => {
    const tag = `<div class="accordionItem close">${newItem.getItemTitleTag()+newItem.getItemContentTag()}</div>`;
    expect(newItem.getItemTag()).toBe(tag);
  });
});
