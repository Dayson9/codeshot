import { subComponent } from 'queflow';


const Preview = new subComponent('Preview', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
    <div display={{ this.data.display }} id='main'>
      <div class="pxp-el0">
        <span class="bx bx-x pxp-el1" onclick={{ history.go(-1); }}></span>
        <h1 class="pxp-el2">Preview</h1>
        <span class="pxp-el3"></span>
      </div>
    <div class="pxp-el4">
      <div class="pxp-el5">
        <div class="pxp-el6">
        <div class="pxp-el7">
          <span class="pxp-el8"></span>
          <span class="pxp-el9"></span>
          <span class="pxp-el10"></span>
        </div>
        <div class="pxp-el11"><span class="bx bxl-javascript pxp-el12"></span>
        <span class="pxp-el13">index.js</span>
      </div>
    </div>
      <div class="pxp-el14"><span class="pxp-el15">const name = "Cole Palmer";</span>
        <span class="pxp-el16">console.log(name);</span>
      </div>
    </div>
  </div>
  <button class="pxp-el17"><span class="bx bxs-download pxp-el18"></span>
    <span class="pxp-el19">Download</span>
  </button>
  </div>`;
  },

  stylesheet: {
    '#main': `
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    `,
    '*': 'box-sizing: border-box;',

    '.pxp-el0': `  
      color: white;
      width: 100%;
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 10px;
      margin: 20px 0px;
      `,

    '.pxp-el1': `  
      font-size: 30px;
      `,

    '.pxp-el2': `  
      font-family: Inter;
      transform: translateX(-12px);
      `,

    '.pxp-el3': `  
      box-sizing: border-box;
      `,

    '.pxp-el4': `  
      width: 90%;
      height: auto;
      padding: 30px 0px;
      margin: 20px auto 0px;
      border-radius: 10px;
      background: transparent;
      border: 1px solid silver;
      `,

    '.pxp-el5': `  
      width: 90%;
      margin: 0px auto;
      background: rgb(51, 62, 66);
      border-radius: inherit;
      height: auto;
      padding: 5px 0px 0px;
      `,

    '.pxp-el6': `  
      height: 32px;
      display: flex;
      flex-direction: row;
      align-items: center;
      `,

    '.pxp-el7': `  
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      transform: translateX(5px);
      `,

    '.pxp-el8': `  
      font-size: 30px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: rgb(250, 100, 75);
      `,

    '.pxp-el9': `  
      font-size: 30px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: rgb(241, 184, 40);
      `,

    '.pxp-el10': `  
      font-size: 30px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: rgb(43, 161, 56);
      `,

    '.pxp-el11': `  
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      background: rgb(37, 50, 56);
      border-radius: 8px 8px 0px 0px;
      width: auto;
      padding: 0px 15px;
      transform: translate(10px, 0px);
      `,

    '.pxp-el12': `  
      font-size: 17px;
      margin: 0px 5px 0px 0px;
      color: gold;
      `,

    '.pxp-el13': `  
      background: transparent;
      font-family: Inter;
      font-size: 13px;
      color: lightblue;
      `,

    '.pxp-el14': `  
      width: 100%;
      height: auto;
      padding: 20px 0px 20px 12px;
      background: rgb(37, 50, 56);
      border-radius: 0px 0px 10px 10px;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      `,

    '.pxp-el15': `  
      color: lightblue;
      font-family: Inter;
      font-size: 12px;
      display: block;
      `,

    '.pxp-el16': `  
      color: lightblue;
      font-family: Inter;
      font-size: 12px;
      display: block;
      margin: 5px 0px 0px;
      `,

    '.pxp-el17': `  
      color: rgb(15, 15, 20);
      background: linear-gradient(135deg, rgb(249, 166, 51), rgb(252, 223, 80));
      width: 90%;
      height: 40px;
      border-radius: 15px;
      border: none;
      margin: 20px 0px 0px;
      transform: translateX(5%);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      padding: 0px 110px;
      `,

    '.pxp-el18': `  
      font-weight: 500;
      font-size: 22px;
      `,

    '.pxp-el19': `  
      font-family: Inter;
      font-size: 17px;
      font-weight: 550;
      `,
  }
});

export default Preview;
