var buyBtns = document.querySelectorAll('.js-showticket');
var main = document.querySelector('.main');
var mainClose= document.querySelector('.close');
var menu = document.querySelector('.menu-btn');
var ocMenu= document.getElementById('header'); 
var headerHeight = ocMenu.clientHeight;
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',function(){
        main.classList.add('open')
    })
}
mainClose.addEventListener('click',function(){
    main.classList.remove('open')
}) 
menu.onclick = function(){
   var isClose = ocMenu.clientHeight === headerHeight;
  if(isClose){
    ocMenu.style.height = 'auto'
  }else{
    ocMenu.style.height = null;
  }
}
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i= 0; i < menuItems.length ; i++){
  var menuItem = menuItems[i];
  menuItem.onclick = function(){
    ocMenu.style.height = null;
  }
}