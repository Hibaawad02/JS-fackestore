const getProducts = async()=>{
 const urlParms = new URLSearchParams(window.location.search);
 const category = urlParms.get('category');   
 const {data}=await axios.get(`https://fakestoreapi.com/products/category/${category}`);
 return data;
}

const displayProducts= async()=>{
    const products=await getProducts();
    
    const result= products.map(product=>
      `
      <div class="product">
      <img src="${product.image}"/>
      <p>${product.title}</p>
      <a href="product.html?id=${product.id}">details</a>
      </div>
      `
).join('');

document.querySelector('.products').innerHTML=result;
 }
displayProducts();