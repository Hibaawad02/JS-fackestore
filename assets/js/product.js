const getProduct = async()=>{
     const urlParms =new URLSearchParams(window.location.search);
     const id = urlParms.get('id');
     const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`);
return data;
}

const displayProduct =async()=>{
    const product = await getProduct();
    
   const result = 
        `
        <div class="product-img">
        <img src="${product.image}"/>
        </div>
        <div class="product-info">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        <p>rating : ${product.rating.rate}</p>
        <p>count : ${product.rating.count}</p>
        <button class="add-to-cart">Add to Cart</button>
        </div>
       
        `;

        document.querySelector('.product-sec').innerHTML=result;
}

displayProduct();