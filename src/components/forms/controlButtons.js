class controlButtons {
  constructor(className, text = 'Cambiar Color') {
    this.className = className.toString();
    this.text = text.toString();
  }

  generateTag() {
    return (
      `<div class="${this.className}" id="${this.className}"><span>${this.text}</span></div>`
    );
  }

}

export default controlButtons;
