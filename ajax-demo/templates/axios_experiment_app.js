

async function getData(){
    //requesting from API -- will return a "promise"
    const response = await axios.get("https://swapi.dev/api/planets");

    //destructure response.data.results and .next to make more manageable
    //.next is the next page url - a single string whereas
    //results is an array of objects
    const { next, results } = response.data;

    console.log(`next URL is ${next}`);  //the following URL


    for (let planet of results){
        console.log(planet.name);
    }

    //let's do a second request
    console.log('2nd set of planets');

    //notice I'm using await again
    const response2 = await axios.get(next);
    
    // console.log(response2.data.results);

    for (let planet of response2.data.results){
        console.log(planet.name);
    }
}


// getData();
// console.log("This line is after axios.get()");

//------------------------------------------------------------------

//SPACE-X API
const spaceXBaseURL = "https://api.spacexdata.com/v3";
const upcoming = spaceXBaseURL+"/launches/upcoming";

const url = "https://api.spacexdata.com/v3/launches/upcoming";


async function getLaunches() {
    const res = await axios.get("https://api.spacexdata.com/v3/launches/upcoming");
    console.log(res);

    ul = document.querySelector("#launches");

    for (let launch of res.data) {
        // document.getElementById('spaceX').innerText = "test";
        let newLi = document.createElement('li');
        let mission = document.createElement('B');
        mission.innerText = `Mission ${launch.mission_name}`;
        newLi.append(mission); //put bolded section inside li
      

        newLi.innerHTML += `<br>The ${launch.rocket.rocket_name} rocket will launch at ${launch.launch_date_local}<br><br>`;
        // let missionText =: ` rocket.`
        
        if (launch.details){
            newLi.innerHTML += `${launch.details}<BR>`;
        }
        ul.append(newLi);  //put li in the ul

        
        
        // console.log(launch.mission_name, launch.rocket.rocket_name, launch.details);
    }
}

const btn = document.querySelector("#launchBtn");
btn.addEventListener("click", getLaunches);

