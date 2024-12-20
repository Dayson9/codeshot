import { Nugget } from 'queflow';


const Button = new Nugget('Button', {
  template: (data) => {
    return `<button ${ data.bottom ? "margin-bottom={{ bottom }}px'" : ""} ${ data.w ? 'width={{ w }}' : '' } background="${ data.bg ? '{{ bg }}' : 'linear-gradient(120deg, rgb(249, 186, 51), rgb(252, 223, 80))' }" onclick={{ click }} ${ data.icon? 'width="90%"' : '' }>${data.icon ? '<i class={{ icon }}></i> ' : ''}{{ label }}</button>
          `
  },

  stylesheet: {
    'button': `
       border: none;
       border-radius: 15px;
       font-size: 17px;
       font-weight: 550;
       color: rgb(15, 15, 20);
       background: linear-gradient(135deg, rgb(249, 166, 51), rgb(252, 223, 80));
       padding: 10px 38px;
       box-sizing: border-box;
       margin: 20px 0px 0px;
       transform: translateX(5%);
          `
  }
});

export default Button;
