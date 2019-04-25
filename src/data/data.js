export const dataInit =  [
  {
    title: 'Section 1',
    content: '<p>Section 1 Content...</p>',
  },
  {
    title: 'Section 2',
    content: '<p>Section 2 Content...</p>',
  },
  {
    title: 'Section 3',
    content: '<p>Section 3 Content...</p>',
  },
];

export const controlInit = [
  {
    className: 'buttonControlOne',
  },
  {
    className: 'buttonControlTwo',
  },
  {
    className: 'buttonControlThree',
  },
  {
    className: 'buttonControlAdd',
    text: 'Agregar',
  },
];

export const modalInit = {
  header: '<h3>Agregar Item al Accordion</h3>',
  body: [
    {
      inputTitle: 'Titulo del accordion',
      inputType: 'text',
      inputId: 'newTitleAccordion',
    },
    {
      inputTitle: 'Cuerpo del accordion',
      inputType: 'textArea',
      inputId: 'newBodyAccordion',
    },
  ],
  footer: {
    className: 'buttonControlModal',
    text: 'Agregar Nuevo',
  },
};
