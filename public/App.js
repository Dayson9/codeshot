import { QComponent } from 'queflow';
import Home from './components/Home.js'
import Form from './components/Form.js';
import Preview from './components/Preview.js';

import Button from './nuggets/Button.js';


const App = new QComponent('#app', {
  template: () => {
    return `
      <Home/>
      <Form/>
      <Preview/>
    `
  },
  
  stylesheet: {
    "@font-face": `
      font-family: 'Inter';
      font-display: swap;
      src: url('assets/Inter_18pt-Medium.ttf');
      font-weight: 400;
      font-style: normal;
    `,
    '*' : 'font-family: Inter;'
  },
  
  run: () => {
    Home.element.style.display = 'none';
    Form.element.style.display = 'none';
    console.log(Preview.dataQF)
  }
});

App.render();

//console.log(app.innerHTML);
