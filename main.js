/*main varaibles*/
const lis=[...document.querySelectorAll('header nav ul li a')];
const input=document.querySelector('input');
const form=document.querySelector('.form i');
const menu=document.querySelector('.toggle-menu');
const ulS=document.querySelector('nav ul');
const backdrop=document.querySelector('.backdrop');
let popUp=document.querySelector('#form')
let ButtonPopUp=document.querySelector('.btn');
let cxlBtn=document.querySelector('.cancelbtn')
 //get slider Items
 let sliderImges=[...document.querySelectorAll('.landing img')];
//select the bulltes 
let bullets=document.getElementById('bullets');
//get numbers of sliderItems
let sliderCount=sliderImges.length;
//set currentSlide
let currentSlide=1;
//right and left Arrow
let arrowRight=document.getElementById('arrow-right');
let arrowLeft=document.getElementById('arrow-left');

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
    if(ulS.classList.contains('openUl')){
        backdrop.style.display="block";
    } else{
        backdrop.style.display="none";
    }
 })
 
 backdrop.onclick=function(){
    this.style.display="none";
 }


 /*start work with change background image*/
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
/*start with log in*/
function zoom(){
    popUp.classList.toggle('zoom');
}
cxlBtn.addEventListener('click',()=>{
    zoom()
})
ButtonPopUp.addEventListener("click",function(){
    zoom()
})
/*end with log in*/
/*start with design section*/
let shuffleLis=Array.from(document.querySelectorAll('.shuffle li'));
let boxs=Array.from(document.querySelectorAll('.box'));
shuffleLis.forEach((li)=>{
    li.addEventListener('click',(e)=>{
        shuffleLis.forEach((li)=>{
            li.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
        boxs.forEach((box)=>{
            if(e.currentTarget.dataset.cont==box.dataset.cont){
                box.style.scale="1";
                box.style.transition=".8s"
            } else if (e.currentTarget.dataset.cont==="all"){
                box.style.scale="1"
                box.style.transition=".8s"
            }
            else{
                box.style.scale="0";
                box.style.transition=".8s"
            }
        });

    })
})
// end with design section
//start with static//

let numbers=[...document.querySelectorAll('.number')];
let stats=document.querySelector('.stats');
let start=false;
function count(){
    if(window.scrollY >= stats.offsetTop-500){
        if(!start){
            numbers.forEach((ele)=>{
                let goal=ele.dataset.goal;
                let count=setInterval(()=>{
                ele.textContent++
                if(ele.textContent == goal){
                clearInterval(count)
            }
            },6000/goal)
            })   
        }
        start=true;
        
     }
}
window.onscroll=()=> {
    count()
    scrollUp()
 }

//end with static//
//work with skills//
let skills=document.querySelector('.our-skills');
let progress=Array.from(document.querySelectorAll('.prog span'));

window.addEventListener('scroll',skillsScroll)


    function skillsScroll(){
        if(window.scrollY >= skills.offsetTop){
            progress.forEach((prog)=>{
                prog.style.width=prog.dataset.progress;
                prog.style.transition="2s ease-in-out";
            })
    }
}

//wor with bulltes
let bulltesSkills=[...document.querySelectorAll('.content ~ .bullets >li')];
bulltesSkills.forEach((bullet)=>{
  bullet.addEventListener(('click'),()=>{
    bulltesSkills.forEach((bullet)=>{
        bullet.style.backgroundColor="transparent"
    })
    bullet.style.backgroundColor=bullet.dataset.color;
    progress.forEach((prog)=>{
        prog.style.backgroundColor=bullet.dataset.color;
    })
  })
})

/*start with up*/
let jump=document.querySelector('.up');

window.addEventListener('load',scrollUp)
function scrollUp(){
    if(window.scrollY >= 45){
        jump.style.display="block";
    } else{
        jump.style.display="none";
    }
    jump.addEventListener(('click'),()=>{
        window.scrollTo({
            top:0,
            left:0,
        })
    })
}