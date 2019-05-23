 // Scroll

 const rightButton = document.querySelector('button.right');
 const leftButton = document.querySelector('button.left');
 const categorieDiv = document.querySelector('div.categories .card-container');
 rightButton.addEventListener('click', function(){
   setInterval(categorieDiv.scrollBy({
     top: 0,
     left: 500,
     behavior: 'smooth'
   }),0);
 })
 leftButton.addEventListener('click', function(){
   return categorieDiv.scrollBy({
     top: 0,
     left: -500,
     behavior: 'smooth'
   });
 })
