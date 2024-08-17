// Access point to display data here
const result = document.querySelector('.result');

// Fetch data from the serverless function
const fetchData = async () => {
    try {
        //const { data } = await axios.get('/api/3-airtable');
        const { data } = await axios.get('/api/3-z-complete');
        //console.log(data);

        const products = data.map(product => {
            const { id, url, name, price } = product;
            return `
                <a href="product.html?id=${id}" class="product">
                    <img 
                        src="${url}"
                        alt="${name}"
                    />
                    <h5>${name}</h5>
                    <h5 class="price">$${price}</h5>
                </a>
            `;
        }).join('');;

        // Insert the generated HTML into the result element
        result.innerHTML = products

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
