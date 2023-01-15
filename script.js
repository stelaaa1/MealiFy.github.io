 let formBtn=document.querySelector('#login-btn');
  let loginform=document.querySelector('.login-form-container');
  let formClose=document.querySelector('#form-close');

  document.onscroll = () => {
      if(window.scrollY > 0){
          document.querySelector('.header') .classList.add('active');
      } else{
          document.querySelector('.header') .classList.remove('active');
      }
  };

  document.onload = () => {
      if(window.scrollY > 0){
          document.querySelector('.header') .classList.add('active');
      } else{
          document.querySelector('.header') .classList.remove('active');
      }
  };
  
  const navbar = document.querySelector('.header .navbar');
  const menuButton = document.querySelector('.header .menu');
  

  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
 
  
  
  
  