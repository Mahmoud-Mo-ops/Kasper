/*main varaibles*/
const lis=[...document.querySelectorAll('header nav ul li a')];
const input=document.querySelector('input');
const form=document.querySelector('.form i');
const menu=document.querySelector('.toggle-menu');
const ulS=document.querySelector('nav ul');
const backdrop=document.querySelector('.backdrop');
const liBackground=[...document.querySelectorAll('.change-background')];
const bullets=[...document.querySelectorAll('.bullets li')];
const landing=document.querySelector('.landing');
console.log(liBackground)
/*loop on lis and makte active class*/
lis.forEach((a)=>{
    a.addEventListener(('click'),function(){
        //remove calss active
        lis.forEach((a)=>{
            a.classList.remove('active')
        })
        //add class active
        this.classList.add('active')
    })
})
/*input field*/
form.onclick=()=>{
    input.classList.toggle('open')
}
/*menu nav bar*/
menu.addEventListener('click',()=>{
    ulS.classList.toggle('openUl');
    backdrop.style.display="block";
 })
 
 backdrop.onclick=function(){
    this.style.display="none";
 }

 /*start work with change background image*/

 /*end work with change background Image*/