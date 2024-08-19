const title = document.querySelector('.title h2')
const result = document.querySelector('.result')


//display the votes

/*
1. fetch data from sf




*/


const fetchVotes = async () => {
    try {
        const res = await axios.get('/api/4-survey');

        const votes = res.data;
        console.log(votes);



    } catch (error) {

    }

}



fetchVotes();