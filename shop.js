// function abc(){
//    let click= document.getElementById("range");
//        click.style.visibility="visible"
//        prop.add
//        let prop = document.getElementById("fruitt");
//        prop.style.visibility="hidden"
//            prop.remove()    
// };

// function neww(){
//     let clik = document.getElementById("range");
//     clik.style.visibility="hidden"
//     // clik.remove()
//     let propp = document.getElementById("fruitt");
//     propp.style.visibility="visible "
// }

// function showRoute(rangee) {
//     const routeContent = document.querySelectorAll(".rangee-neww");

//     routeContent.forEach((neww) => {
//       content.classList.remove("active");
//     });

//     document.getElementById(rangee).classList.add("active");
//   }

  function showRoute(rangee) {
    const routeContent = document.querySelectorAll(".rangee-content");

    routeContent.forEach((content) => {
      content.classList.remove("active");
    });

    document.getElementById(rangee).classList.add("active");
    
  }

function nav(){
    let nav = document.getElementById("navbar");
    nav.style.width="550px"
    nav.style.height="100vh"
    // nav.style.zIndex="2"
}
function closee(){
    let navv = document.getElementById("navbar");
    navv.style.width="0"
    // navv.style.display="none"
    console.log("nhi ho rha kya")
}


// filter


const search =  () =>{
     const searchbox = document.getElementById("search-items").value.toUpperCase();
     const container =document.getElementById("scrolll")
     const headings =document.querySelectorAll(".nav-shop")
     const span =document.querySelectorAll("#head2")
     
     for(   i=0; i<headings.length; i++){
      let match = headings[i].querySelectorAll('#head2')[0];
      
      if(match){
          let textvalue = match.textContent || match.innerHTML
        
        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
          headings[i].style.display= "";
          
        }
        else{   
          headings[i].style.display= "none";
         
        }
      }
     }
}





