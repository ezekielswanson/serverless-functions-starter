const result = document.querySelector('.result');

const fetchProduct = async () => {
    try {
        const id = window.location.search;
        //console.log(id);
        /*
        const {data:{fields}} = await axios.get(`/api/3-product${id}`)
        const {name, desc, price, image} = fields;
        */

        const {
            data: { fields },
        } = await axios.get(`/api/3-z-complet${id}`);
        
        const { name, desc, price, image } = fields;

        result.innerHTML = `
            <h1 class="title">${name}</h1>
            <article class="product">
                <img class="product-img"
                src="${image[0].url}"
                alt="${name}"
                />
                <div class="product-info">
                <h5 class="title">${name}</h5>
                <h5 class="price">$${price}</h5>
                <p class="desc">${desc}</p>
                </div>
            </article>
        `;
        //console.log(data);
    } catch (error) {
        console.log(error);
    }
};

fetchProduct();