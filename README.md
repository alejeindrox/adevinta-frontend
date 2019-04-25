# Adevinta Frontend
Adevinta FrontEnd accordion without UX framework.


## Getting Started


### Prerequisites

Adevinta Frontend requires [Node.js](https://nodejs.org/) v6+ to run.


### Installing

Clone repository:
```sh
$  git clone https://github.com/alejeindrox/adevinta-frontend.git adevinta
$ cd adevinta/
```
And install dependencies
```sh
$ npm install
```
Or using Yarn (preferable)
```sh
$ yarn
```
And it's ready to work.


### Development Environment

Inside of the folder from project use:
```sh
$ npm dev
```
Or using Yarn
```sh
$ yarn dev
```
Open your browser and enter in https://localhost:3000/


### Production Environment

In the production enviroment use the command:
```sh
$ npm prod
```
Or using Yarn
```sh
$ yarn prod
```
And now it's already compiled for deployment.


### Test Environment

In the production enviroment use the command:
```sh
$ npm test
```
Or using Yarn
```sh
$ yarn test
```
And now it's already testing with Jest.


## Resources

Brastlewark uses a number of open source projects to work properly:

* [Babel](https://babeljs.io) - It's a free open source JavaScript compiler, and a configurable transpiler used in web development.
* [ESLint](https://eslint.org) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
* [Jest](https://jestjs.io) - It's a delightful JavaScript Testing Framework with a focus on simplicity.
* [SASS](https://sass-lang.com) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [Webpack](https://webpack.js.org) - Group JavaScript files for use in a browser, but it is also capable of transforming, grouping or packaging almost any resource or asset.

And of course Adevinta Frontend itself is open source with a public repository on GitHub.

## Details
* GitHub Page: [https://alejeindrox.github.io/adevinta-frontend](https://alejeindrox.github.io/adevinta-frontend).

* When a new segment is added to the accordion, a form consisting of a title and a body must be filled to show both inputs are able to obtain values using HTML tags and display them in the accordion. An example is to enter the following tag inside the body:
```html
<img src="https://ob9a8415roh4djoj110c31a1-wpengine.netdna-ssl.com/wp-content/uploads/2013/02/barcelona-aerial-view.jpg" alt="Barcelona" width="600" height="400">
```

## Authors

* **Alejandro López** - *Initial work* - [alejeindrox](https://github.com/alejeindrox)


## License

This project is licensed under the MIT License.
