import { subComponent } from 'queflow';

const Form = new subComponent('Form', {
  data: {
    display: 'none'
  },
  template: () => {
    return `
    <div display={{ this.data.display }} id='main'>
      <h1 class="pxp-el0">Get Started</h1>
      <div class="pxp-el1">
        <span class="pxp-el2">Code snippet:</span>
        <textarea class="pxp-el3" placeholder='//paste your code here' id='codeInput'>htmlToImage.toPng(document.getElementById("out"))
  .then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "CodeShot.png";
    link.href = dataUrl;
    link.click();
    Preview.data.x = 5;
  })
  .catch((err) => {
    console.error("Could not download image", err);
  });
        </textarea>
      </div>
      <div class="pxp-el1">
        <span class="pxp-el2">Language:</span>
        <select class="pxp-el4">
          <option>JavaScript</option>
          <option>Rust</option>
          <option>Golang</option>
          <option>C</option>
          <option>Kotlin</option>
          <option>Swift</option>
          <option>Dart</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>Python</option>
          <option>C#</option>
          <option>C++</option>
          <option>Java</option>
        </select>
      </div>
      <Button { label: 'Preview', click: "processCode(codeInput.value)", icon: "bx bxs-image", bottom: 40 } />
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
      margin: 20px auto 40px;
      `,

    '.pxp-el1': `  
      width: 90%;
      height: auto;
      margin: 10px 0px 0px 20px;
      padding: 20px 0px;
      display: flex;
      flex-direction: column;
      `,

    '.pxp-el2': `  
      color: white;
      font-family: Inter;
      `,

    '.pxp-el3': `  
      background: transparent;
      border-radius: 10px;
      border: 2px solid grey;
      margin: 10px 0px;
      height: 190px;
      width: 90%;
      color: white;
      box-sizing: border-box;
      padding: 10px;
      font-family: Inter;
      outline: none;
      `,

    '.pxp-el4': `  
      margin: 10px 0px;
      width: 90%;
      height: 45px;
      border-radius: 10px;
      background: transparent;
      color: white;
      font-family: Inter;
      border: 2px solid grey;
      outline: none;
      `,
      
    'textarea:focus' : `
      border: 1px solid white;
    `,
    
    'select:focus': `
      border: 1px solid white;
    `,
    
    'textarea::placeholder': `
      color: silver;
    `,
  }
});

export default Form;