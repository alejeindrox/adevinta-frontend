class ModalItems {
  constructor(header, body, footer) {
    this.header = header.toString();
    this.body = body.toString();
    this.footer = footer.toString();
  }

  getModalHeaderTag() {
    const close = '<span class="modalClose" id="modalClose">&times;</span>';
    return (`<div class="modalHeader themeOne" id="modalHeader">${close}${this.header}</div>`);
  }

  getModalBodyTag() {
    return (`<div class="modalBody">${this.body}</div>`);
  }

  getModalFooterTag() {
    return (`<div class="modalFooter themeOne" id="modalFooter">${this.footer}</div>`);
  }

  generateModalTag() {
    return (
      `<div class="modalContent">
        ${this.getModalHeaderTag() + this.getModalBodyTag() + this.getModalFooterTag()}
      </div>`
    );
  }

}

export default ModalItems;
