//App.js sends req to servless function

const result = document.querySelector('.result')


const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/2-basic-api')

      //Map through products
      const products = data.map(product => {
        const {image:{url}, name, price} = product

        return `
            <article class="product">
                <img
                    src="${url}"
                    alt="${name}"
                />
                <div class="info">
                    <h5>${name}</h5>
                    <h5 class="price">${price}</h5>
                </div>
            </article>
        `
      }).join('');

      //console.log(data);
      result.innerHTML = products;

    } catch (error) {
      result.innerHTML = `<h4>Error, try again later</h4>`
      console.error('Error:', error)
    }
  }
  
  fetchData()
  
