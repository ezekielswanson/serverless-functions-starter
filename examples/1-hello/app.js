
const subHeader = document.querySelector('.result');


const fetchData = async () => {
    try {

        //const {data} = await axios.get('/.netlify/functions/1-hello');
        const {data} = await axios.get('/api/1-hello');
        //console.log(data);

        subHeader.textContent = data;

    } catch (error) {
        console.log(error.response)
    }


}

fetchData()