fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data=>{
    console.log(data);

    let productContainer = document.getElementById("productContainer");

    let body = "";
    data.forEach(element =>{
        body += `
                            <div class="col">
                    <div class="card shadow-sm"> 
                        <img src="${element.image}" alt="" class="card-img img-thumbnail">
                        <div class="card-body">
                            <h1 class="card-title">${element.title}</h1>
                            <p class="card-text">${element.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class=""> <button type="button"
                                        class="btn btn-success">Buy Now   ${element.price} $</button> 
                                         
                                </div> 
                                        <small class="text-body-secondary">${element.rating.rate}/${element.rating.count}</small>
                            </div>
                        </div>
                    </div>
                </div>
        `
    });
    productContainer.innerHTML = body;

});