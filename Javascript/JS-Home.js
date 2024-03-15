
      //Burger Menu
      const menuBtn = document.querySelector('.menu-btn');
      const menu = document.querySelector('.titles');
      
      menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
     //Resise the writing in the 1st section
      // window.addEventListener('resize', function() {
      //   const width = window.innerWidth;
      
      //   if (width <= 750) {
      //     document.querySelector('.Learning').style.fontSize = '16px';
      //   } else if (width <= 1024) {
      //     document.querySelector('.Learning').style.fontSize = '70px';
      //   } else {
      //     document.querySelector('.Learning').style.fontSize = '56px';
      //   }
      // });