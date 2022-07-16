/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//add menu button in order to show 
//and hide menu as requested in the last review

const header=document.querySelector('header');
const butt=document.createElement('button');
butt.id="button";
butt.innerText="Menu";
header.insertAdjacentElement('afterbegin',butt);


//create section4 and add it to view

const section4=document.createElement('section');
section4.setAttribute('id','section4');
const div=document.createElement('div');
div.classList.add('landing__container');
const h2=document.createElement('h2');
h2.innerText="Section4";
const parag1=document.createElement('p');
parag1.innerText="Lorem ipsum dolor sit amet, "+
"consectetur adipiscing elit. Morbi fermentum metus faucibus lectus/n"+
"pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi,"+
" ac euismod augue. Donec/n"+
"eget lacinia ex. Phasellus imperdiet porta orci eget mollis."+
" Sed convallis sollicitudin mauris ac/n"+
"tincidunt. Donec bibendum, nulla eget bibendum consectetur,"+
" sem nisi aliquam leo, ut pulvinar/n"+
"quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra."+
" Duis lectus mi, aliquam in mi/n"+
"quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc,"+
" pharetra et elementum non,/n"+
"faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie"+
" semper in tellus. Sed congue"+
"et odio sed euismod.";
const parag2=document.createElement('p');
parag2.innerText="Aliquam a convallis justo. Vivamus venenatis,"+
" erat eget pulvinar gravida, ipsum lacus aliquet velit,/n"+
"vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus."+
" Vestibulum fermentum/n"+
"consectetur porttitor. Suspendisse imperdiet porttitor tortor, "+
"eget elementum tortor mollis non.";

div.appendChild(h2);
div.appendChild(parag1);
div.appendChild(parag2);
section4.appendChild(div);
const section3 = document.querySelector('#section3');
section3.insertAdjacentElement('afterend',section4);

/**
 * Define Global Variables
 * 
*/
const ulID=document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment(); 
const sections=Array.from(document.querySelectorAll('section'));

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//function that helps activate class of section in view
function activateClass(){
    for(const section of sections){
        // Set sections as active
        if(section.classList.contains('your-active-class')){
            section.classList.remove('your-active-class');
        }
        if(section.getBoundingClientRect().top>=0 && 
            section.getBoundingClientRect().top<=300){
            section.classList.add('active');
           }
        else{
            section.classList.remove('active'); 
            }
    } 
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i =1; i<=sections.length;i++){
    const section= document.createElement('li');
    section.innerText='Section '+i;
   
    /* Style the links inside the navigation bar */
    section.classList.add("menu__link");
    const x=document.querySelector('#section'+i);
    fragment.appendChild(section);
    
    // Scroll to section on link click
    // Scroll to anchor ID using scrollTO event
    section.addEventListener('click',function(e){
        e.preventDefault();
        x.scrollIntoView({behavior:"smooth"}); 
        const navSec=Array.from(document.querySelectorAll('li'));
      
        //distinguish the pressed section in nav bar
      // and removing the selection from the
      // other section already pressed when 
      //pressing another one
        for(const nav of navSec){
          if(nav.classList.contains('active')){
              nav.classList.remove('active');
          }
      }
        section.classList.add('active');
    });
}


ulID.appendChild(fragment);

//hover over paragraph section and highlight it
document.addEventListener('mouseover',highlightText);

document.addEventListener('mouseout', function(e){
    if(e.target.tagName==='P')
        e.target.style.color="white";
});

function highlightText(e){
    if(e.target.tagName==='P')
        e.target.style.color="black";  
}

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',activateClass);
const nav=document.querySelector('.navbar__menu');
const button=document.querySelector('button');
button.addEventListener('click', function(){
    nav.classList.toggle('is-active');
  });