import WrapperDom from '../../../../src/components/wrappers/wrapperDom';

describe('Should return parts of the Object WrapperDom', () => {
  it('Should return the class of the function generateWrapperControl', () => {
    expect(WrapperDom.generateWrapperControl()).toMatch(/controlWrapper/);
  });
  it('Should return the class of the function generateWrapperAccordion', () => {
    expect(WrapperDom.generateWrapperAccordion()).toMatch(/accordionWrapper/);
  });
  it('Should return the class of the function generateWrapperModal', () => {
    expect(WrapperDom.generateWrapperModal()).toMatch(/modal/);
  });
});

describe('Should return all of the functions of the Object WrapperDom', () => {
  it('Should return if the functions of the instace of WrapperDom are wrappers of the Dom', () => {
    expect(typeof WrapperDom.generateWrapperControl).toBe('function');
    expect(typeof WrapperDom.generateWrapperAccordion).toBe('function');
    expect(typeof WrapperDom.generateWrapperModal).toBe('function');
  });
});
