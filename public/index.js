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
  } else {
    Home.data.display = 'block';
    Form.data.display = 'none';
    Preview.data.display = 'none';
  }
}

window.addEventListener('popstate', () => toPage(window.location.pathname));
