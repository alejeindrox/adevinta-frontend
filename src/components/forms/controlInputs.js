class controlInputs {
  constructor(label, type, id) {
    this.label = label.toString();
    this.type = type.toString();
    this.id = id.toString();
  }

  generateInput() {
    if (this.type === 'text') {
      return (
        `<input type="text" class="formField" id="${this.id}" placeholder="${this.label}">`
      );
    }
    return (
      `<textarea class="formField" id="${this.id}" placeholder="${this.label}" rows="6"></textarea>`
    );
  }

  generateLabel() {
    return (
      `<label class="formLabel">${this.label}</label>`
    );
  }

  generateTag() {
    return (
      `<div class="formControl">${this.generateInput() + this.generateLabel()}</div>`
    );
  }

}

export default controlInputs;
