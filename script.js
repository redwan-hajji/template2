let toggle_menu=document.querySelector(".toggle-menu");
let menu=document.querySelector(".links");
console.log(menu);
console.log(toggle_menu);
let menu_items=document.querySelectorAll(".links li");

toggle_menu.addEventListener("click", function(){
menu.classList.toggle("links_show");
})
for (let i=0;i<5;i++){
menu_items[i].addEventListener("click", function(){
menu.classList.toggle("links_show");
})}
