/*main varaibles*/
const lis=[...document.querySelectorAll('header nav ul li a')];
const input=document.querySelector('input');
const form=document.querySelector('.form i');
const menu=document.querySelector('.toggle-menu');
const ulS=document.querySelector('nav ul');
const backdrop=document.querySelector('.backdrop');
 //get slider Items
 let sliderImges=[...document.querySelectorAll('.landing img')];
//select the bulltes 
let bullets=document.getElementById('bullets');

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

//get numbers of sliderItems
let sliderCount=sliderImges.length;
//set currentSlide
let currentSlide=1;
//right and left Arrow
let arrowRight=document.getElementById('arrow-right');
let arrowLeft=document.getElementById('arrow-left');
//handle with arrowBtns
arrowLeft.onclick=previouseSlide;
arrowRight.onclick=nextslide;
//create List items based on slides count
for(var i = 1; i <= sliderCount ;i++){
    let PageSequence=document.createElement('li');
    //set custom attribute to each li
    PageSequence.setAttribute('date-index',i)
  //append li  items to ul
  bullets.appendChild(PageSequence);
}

 //deal with previouse slide
 function previouseSlide(){
    if(this.classList.contains('disabled')){
        return false;
    } else{
        currentSlide--;
        check();
    }
    
 }
  //deal with next slide
  function nextslide(){
    if(this.classList.contains('disabled')){
        return false;
    } else{
        currentSlide++;
        check();
    }
 }
 let ArrayofBullets=Array.from(document.querySelectorAll('#bullets li'))
 //loop on bullets
 for(var i=0 ; i <ArrayofBullets.length;i++){
      ArrayofBullets[i].onclick= function(){
      currentSlide=parseInt(this.getAttribute('date-index'));
      check();
      }
 }
check();
//create check  function
function check (){
    //remove classe active on bulltes and  images
    removeAllActivce()
    //add classe active to current slide image
    sliderImges[currentSlide-1].classList.add('active');
    //add classe active to current bullets
    bullets.children[currentSlide-1].classList.add('active');
    //check first and last slider item 
    if(currentSlide == sliderCount){
        arrowRight.classList.add('disabled')
    }else{
        arrowRight.classList.remove('disabled')
    }
    if(currentSlide == 1){
        arrowLeft.classList.add('disabled')
    }else{
        arrowLeft.classList.remove('disabled')
    }
}
//remove classe active on bulltes and  images
function removeAllActivce(){
     //loop on all images
     sliderImges.forEach((image)=>{
     image.classList.remove('active');
    })
     //loop on all bullets
     ArrayofBullets.forEach((bullet)=>{
         bullet.classList.remove('active');
     })
}
 /*end work with change background Image*/

