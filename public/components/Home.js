import { subComponent } from 'queflow';


const Home = new subComponent('Home', {
  data: {
    display: 'block'
  },
  template: () => {
    return `
      <div id='main' display={{ this.data.display }}>
        <div class="pxp-el0">
          <div aria-label='CodeShot icon' class="pxp-el1">
            <h2>CS</h2>
          </div>
          <h1 class="pxp-el2">CodeShot</h1>
        </div>

        <div class="pxp-el3">
          <h1>Generate <span class="pxp-el5">Snapshots </span><span>of code snippets</span></h1>
          <Button { label: 'Get Started ➡️', click: "toPage('/get-started')" } />
        </div>

        <div class="pxp-el7">
          <span class="bx bxl-github pxp-el8"></span>
          <span class="bx bxl-twitter pxp-el8"></span>
        </div>
      </div>
        `
  },
  stylesheet: {
    '#main': `
      width: 100vw;
      height: 100vh;
      background: transparent;
    `,
    '.pxp-el0': `  
       width: 65%;
       height: 60px;
       margin: 0px auto;
       transform: translateY(60px) scale(0.8);
       background: transparent;
       border: 2px solid rgb(249, 186, 51);
       border-radius: 60px;
       display: flex;
       align-items: center;
       box-sizing: border-box;
       flex-direction: row;
       justify-content: space-between;
       padding: 0px 10px;
       `,

    '.pxp-el1': `  
       background: linear-gradient(120deg, rgb(249, 186, 51), rgb(252, 223, 80));
       width: 45px;
       height: 45px;
       border-radius: 50%;
       border: inherit;
       display: flex;
       align-items: center;
       box-sizing: border-box;
       justify-content: center; 
       `,
     '.pxp-el1 h1' : `
       -webkit-text-fill-color: transparent; 
       -webkit-background-clip: text;
     `,

    '.pxp-el2': `  
       color: white;
       `,

    '.pxp-el3': `  
       color: white;
       width: 100%;
       height: auto;
       padding: 20px 0px;
       text-align: center;
       box-sizing: border-box;
       margin: 10vh 0px 0px;
       `,

    '.pxp-el5': `  
       background: linear-gradient(120deg, rgb(249, 186, 51), rgb(252, 223, 80));
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       `,

    '.pxp-el7': `  
       width: 100%;
       height: auto;
       padding: 20px 30%;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-around;
       height: 70px;
       box-sizing: border-box;
       transform: translateY(15vh);
       color: white;
       `,

    '.pxp-el8': `  
       font-size: 45px;
       `
  }
});

export default Home;
