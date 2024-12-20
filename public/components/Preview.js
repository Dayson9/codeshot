import { subComponent } from 'queflow';


const Preview = new subComponent('Preview', {
  data: {
    display: 'none',
    x: 5,
    blur: 0,
    code: ""
  },
  template: () => {
    return `
      <div display={{ this.data.display }} id='main' filter={{ 'blur('+this.data.blur+'px)' }}>
        <div class="pxp-el0">
          <span class="bx bx-x pxp-el1" onclick={{ history.go(-1); }}></span>
          <h1 class="pxp-el2">Preview</h1>
          <span class="pxp-el3"></span>
        </div>
      <div class="pxp-el4" id='out' transform={{ 'translateX('+this.data.x+'%)' }}>
        <div class="pxp-el5">
          <div class="pxp-el6">
            <div class="pxp-el7">
              <span class="pxp-el8"></span>
              <span class="pxp-el9"></span>
              <span class="pxp-el10"></span>
            </div>
          <div class="pxp-el11">
            <span class="bx bxl-javascript pxp-el12" color='gold'></span>
          </div>
        </div>
        <div class="pxp-el14">
            <pre>{{ this.data.code }}</pre>
        </div>
      </div>
    </div>
    <Button { label: 'Download', click: 'saveAsImage()', icon: 'bx bxs-download' } />
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
      width: auto;
      min-width: 100vw;
      padding: 0px;
      border-radius: 10px;
      background: transparent;
      box-sizing: content-box;
      `,

    '.pxp-el5': `  
      width: 100%;
      background: rgb(51, 62, 66);
      border-radius: inherit;
      height: auto;
      padding: 5px 0px 0px;
      letter-spacing: 2px;
      box-sizing: content-box;
      `,

    '.pxp-el6': `  
      height: 32px;
      display: flex;
      flex-direction: row;
      align-items: center;
      `,

    '.pxp-el7': `  
      width: 75px;
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
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(37, 50, 56);
      border-radius: 8px 8px 0px 0px;
      width: auto;
      transform: translate(10px, 0px);
      padding-inline: 12px;
      `,
    '.pxp-el14': `  
      width: 100%;
      min-width: 100%;
      height: auto;
      background: rgb(37, 50, 56);
      border-radius: 0px 0px 10px 10px;
      display: flex;
      align-items: start;
      padding-inline: 10px;
      box-sizing: content-box;
      `,
      
    'pre' : `
      padding-inline: 10px;
    `
  },
  useStrict: false
});

export default Preview;
