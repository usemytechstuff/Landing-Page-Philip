 // Scroll

 const rightButton = document.querySelector('button.right');
 const leftButton = document.querySelector('button.left');
 const categorieDiv = document.querySelector('div.categories .card-container');
 rightButton.addEventListener('mouseover', function(){
   setInterval(categorieDiv.scrollBy({
     top: 0,
     left: 200,
     behavior: 'smooth'
   }),0);
 })
 leftButton.addEventListener('mouseover', function(){
   return categorieDiv.scrollBy({
     top: 0,
     left: -200,
     behavior: 'smooth'
   });
 })
