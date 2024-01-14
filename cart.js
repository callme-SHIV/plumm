let body = document.querySelector('body');
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.closee');
// let navv=document.querySelector('nav');
let navbarr =document.querySelector('.flex');
let divvv  =document.querySelector('#img')



let products=[];


iconCart.addEventListener('click' , ()=>{

 body.classList.toggle('showCart');
 console.log("hiiii")

} )




closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart');
  console.log("clickedd");
})



const addDataToHTML = () => {

products.forEach(product => {

let newid =  document.createElement('div')

// newid.dataset.id = product.id;


  let newproducts =document.getElementById('img')
  // let newproduct2=document.getElementById('img2')
  // let newproduct3=document.getElementById('img3')
  // let newproduct4=document.getElementById('img4')
  
newid.classList.add('pta-nhi')
  

  
  
     

  newproducts.dataset.id = product.id
  // newproduct2.dataset.id = product.id
  // newproduct3.dataset.id = product.id
  // newproduct4.dataset.id = product.id

  divvv.appendChild(newid)
})
  
}



navbarr.addEventListener('click', (event) => {

  let positionClick = event.target;
  // alert("hiiiiiii")
  // console.log(positionClick)
  if(positionClick.classList.contains('button1')){
    // alert('hhi')
      let id_product = positionClick.dataset.id
      // addToCart(id_product);
      console.log(id_product)
      alert(id_product)
  }
  else if(positionClick.classList.contains('button2')){
    
       alert(id_product)
  }
  else if(positionClick.classList.contains('button3')){
    
       alert(id_product)
  }
  else if(positionClick.classList.contains('button4')){
    let id_product = positionClick.dataset.id 
    console.log(id_product)
       alert(id_product)
  }
  
})





const initApp = () => {
  // get data product
  fetch('product-id.json')
  .then(response => response.json())
  .then(data => {
      products = data;
      addDataToHTML();

      
     
  })
}
initApp();