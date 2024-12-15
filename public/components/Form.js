import { subComponent } from 'queflow';

const Form = new subComponent('Form', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
    <div display={{ this.data.display }} id='main'>
    
    </div>
`
  },
  stylesheet: {
    '#main': `
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    `,
    '.pxp-el0': `  
       color: white;
       text-align: center;
       font-family: Inter;
       `,

    '.pxp-el1': `  
       width: 100%;
       padding: 40px 0px;
       transform: translateY(5vh);
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       border-radius: 20px;
       height: 330px;
       `,

    '.pxp-el2': `  
       color: white;
       width: 100%;
       padding: 10px 0px;
       display: inherit;
       flex-direction: inherit;
       justify-content: space-evenly;
       height: 130px;
       `,

    '.pxp-el3': `  
       transform: translateX(20px);
       display: block;
       font-family: Inter;
       `,

    '.pxp-el4': `  
       background: transparent;
       border: 2px solid silver;
       width: 80%;
       transform: translate(20px, 10px);
       height: 120px;
       border-radius: 20px;
       color: white;
       box-sizing: border-box;
       padding: 10px;
       font-family: Inter;
       `,

    '.pxp-el5': `  
       width: 80%;
       height: 45px;
       transform: translateX(20px);
       background: inherit;
       border-radius: 10px;
       border: 2px solid silver;
       color: white;
       font-family: Inter;
       `,

    '.pxp-el7': `  
       height: 48px;
       border: none;
       border-radius: 10px;
       font-family: Inter;
       width: 90%;
       background: linear-gradient(120deg, rgb(249, 186, 51), rgb(252, 223, 80));
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-around;
       padding: 0px 22%;
       `,

    '.pxp-el8': `  
       font-size: 25px;
       `,

    '.pxp-el9': `  
       font-family: Inter;
       font-weight: 500;
       font-size: 15px;
       `
  }
});

export default Form;
