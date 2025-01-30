const getCategories= async()=>{
    const {data} = await axios.get("https://fakestoreapi.com/products/categories");
    return  data;
}

const  disaplyCategories= async ()=>{
    const categories = await getCategories();
     
    const result = categories.map(category=>
        
        `
        <div class="category">
        <a href='categoryProd.html?category=${category}'>${category}</a>
        </div>
        `
    ).join('');

  document.querySelector('.categories').innerHTML=result;

}

disaplyCategories();