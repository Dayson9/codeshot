function navigateTo(path) {
  history.pushState({}, '', path);
}

function toPage(path) {
  navigateTo(path);

  if (path === '/get-started') {
    Home.data.display = 'none';
    Form.data.display = 'block';
    Preview.data.display = 'none';
  } else if (path === '/preview') {
    Preview.data.display = 'block';
    Home.data.display = 'none';
    Form.data.display = 'none';
    hljs.highlightAll();
  } else {
    Home.data.display = 'block';
    Form.data.display = 'none';
    Preview.data.display = 'none';
  }
}

const saveAsImage = () => {
  Preview.data.x = 0;
  htmlToImage.toPng(document.getElementById("out"))
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "CodeShot.png";
      link.href = dataUrl;
      link.click();
      Preview.data.x = 5;
    })
    .catch((err) => {
      console.error("Could not download image\n", err);
    });
}

const processCode = (code) => {
  code = code.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const splitted = code.split('\n');
  
  const truncated = splitted.map((str) => {
    if(str.length > 62) {
      return str.slice(0, 50)+'\n  '+str.slice(50);
    } else {
      return str;
    }
  }).join('\n')
  
  Preview.data.code = "<code>" + truncated + "</code>";

  toPage('/preview');
}


window.addEventListener('popstate', () => toPage(window.location.pathname));