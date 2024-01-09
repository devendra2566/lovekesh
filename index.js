const mobile_nav=document.querySelector(".mobile-n-btnavbar");
const nav_header=document.querySelector(".header")
// const body=document.querySelector(".body1")



const toggleNavbar=()=>{
   
    if(nav_header.style.display==="block"){
    nav_header.style.display="none";
    }else{
        nav_header.style.display="block";
    }
    
        
    
   }

//   //  document.body.addEventListener('click', function() {
//   //  if( nav_header.style.display="block"){
//   //   nav_header.style.display = 'block';}
//   //   else{
//   //     nav_header.style.display = 'none';
//   //   }
//   // });

// document.body.addEventListener('click', function(event) {
    
//     // Check if the clicked element is not part of the navbar
//     if (event.target !== nav_header && !nav_header.contains(event.target)) {
//       // If not, hide the navbar
//       nav_header.style.display = 'none';
//     }
//   })



    
   
mobile_nav.addEventListener("click",()=> toggleNavbar())
// body.addEventListener("click",()=> toggleNavbar1())




    