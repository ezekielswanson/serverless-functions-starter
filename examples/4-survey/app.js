const title = document.querySelector('.title h2')
const result = document.querySelector('.result')


//display the votes

/*
1. fetch data from sf


dsiplaying here
 <ul class="result"></ul>


*/


const fetchVotes = async () => {
    try {
        //fetch data from serverless

        /*
        const {data} = await axios.get('/api/4-survey');
        const res = votes(vote => {
        */

        const res = await axios.get('/api/4-survey');

        //store data in var
        const votes = res.data;

        //do something w/ the data
        const votesHTML = votes(vote => {
            const {id, room, votes } = vote

            return `
                <li>
                    <div class="key">
                        ${room.toUpperCase().substring(0,2)}
                    </div>
                    <div>
                        <h4>
                            ${room}
                        </h4>
                        <p class="vote-${id}" data-votes="${votes}">${votes}</p>
                    </di>
                </li>
            `
        }).join('');
        
        result.innerHTML = votesHTML;




    } catch (error) {
        result.innerHTML = `<h4>Error fetching data</h4>`
    }

}



fetchVotes();

