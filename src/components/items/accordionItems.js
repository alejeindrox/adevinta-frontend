class AccordionItems {
  constructor(title, content, theme = 'themeOne') {
    this.title = title.toString();
    this.content = content.toString();
    this.theme = theme.toString();
  }

  getItemTitleTag() {
    return (`<dt class="accordionItemHeading ${this.theme}">${this.title}</dt>`);
  }

  getItemContentTag() {
    return (`<dd class="accordionItemContent">${this.content}</dd>`);
  }

  getItemTag() {
    return (`<div class="accordionItem close">${this.getItemTitleTag() + this.getItemContentTag()}</div>`);
  }

  generateTag() {
    const itemTag = this.getItemTag();
    return (itemTag);
  }

}

export default AccordionItems;
