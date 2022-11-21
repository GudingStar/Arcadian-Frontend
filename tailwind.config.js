module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'light-blue': '#2BC6F6',
        green: '#10C900',
        'pure-blue': '#0099FF',
        'primary-pink': '#9659FB !important',
        pink : '#6608C1',
        'light-gray': '#777777',
        'dark-grey': '#ACACAC',
        dark: '#272727',
        'black-dark': '#141621',
        'back-grey': '#1E1E1E',
        'game-grey': '#D8D8D8',
        'pure-ping': '#B004F6',
        'nft-shadow': 'rgb(0,0,255,0.05);',
        background: '#1C1E2A',
        'card-back': '#141621',
        'filter-back': "#2E3140",
        'pure-pink': 'rgba(177, 34, 227, 0.2)',
        purple : '#6400FF',
        'pink': '#FF03F5'
      },
      fontFamily: {
        orbitron : 'orbitron !important',
        'Space-Grotesk' : 'Space Grotesk !important',
        poppins: 'Poppins !important'
      },
      width:{
        contentWidth : '1100px',
        "md-gameWidth": '400px',
        "sm-gameWidth": '350px',
        "xs-gameWidth": '260px',
        'emailSignUp-width': '400px',
        'xl-affiliateBottomWidth':'616px',
        'lg-affiliateBottomWidth':'550px',
        'md-affiliateBottomWidth':'450px'
      },
      height: {
        gameHeight: '480px',
        affiliatesHeight: '458px'
      },
      fontSize:{
        userAddress:'10px !important'
      },
      borderWidth: {
        '1' : '1px'
      },
      boxShadow: {
        'nft' : '2px 2px 100px rgb(0,0,255); '
      },
      skew: {
        'minus-45': '-45deg',
      },
      gradientColorStops: theme => ({
       ...theme('colors'),
       'pink': '#BE08C1',
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [],
}
