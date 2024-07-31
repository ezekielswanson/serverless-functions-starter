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
                    src="https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg"
                    alt="utopia sofa"
                />
                <div class="info">
                    <h5>utopia sofa</h5>
                    <h5 class="price">$39.95</h5>
                </div>
            </article>
        `
      })

      //console.log(data);
      result.innerHTML = `<h2>GOD is good</h2>`
    } catch (error) {
      result.innerHTML = `<h4>Error, try again later</h4>`
      console.error('Error:', error)
    }
  }
  
  fetchData()
  
