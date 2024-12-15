import { Nugget } from 'queflow';


const Button = new Nugget('Button', {
  template: (data) => {
    return `<button${ data.w ? 'width={{ w }}' : '' } background="${ data.bg ? '{{ bg }}' : 'linear-gradient(120deg, rgb(249, 186, 51), rgb(252, 223, 80))' }" onclick={{ click }}>{{ label }}</button>
          `
  },

  stylesheet: {
    'button': `
       border: none;
       border-radius: 15px;
       font-size: 17px;
       font-weight: 700;
       color: rgb(15, 15, 20);
       background: linear-gradient(120 deg, rgb(249, 186, 51), rgb(252, 223, 80));
       padding: 10px 38px;
       box-sizing: border-box;
          `
  }
});

export default Button;
