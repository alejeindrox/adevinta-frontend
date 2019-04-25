class WrapperDom {

  static generateWrapperControl(control) {
    return (
      `<div class="controlWrapper">${control}</div>`
    );
  }

  static generateWrapperAccordion(accordion) {
    return (
      `<dl class="accordionWrapper" id="accordionWrapper">${accordion}</dl>`
    );
  }

  static generateWrapperModal(modal) {
    return (
      `<div class="modal" id="modalItem">${modal}</div>`
    );
  }

}

export default WrapperDom;
