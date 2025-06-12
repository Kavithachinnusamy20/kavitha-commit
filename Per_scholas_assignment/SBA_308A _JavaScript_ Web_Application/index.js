
// async function initialLoad() {

// let data = await response.json()
// let response = await fetch("https://mimic-server-api.vercel.app/quotes");
//  console.log ("data :", data)
// }
// initialLoad()

// const btn=document.getElementById("click");
const select = document.getElementById("choices");
async function initialLoad() {
    // let response = await fetch("https://mimic-server-api.vercel.app/quotes"); 
    // // `response` should be awaited first
    let url = ("https://app.ticketmaster.com/discovery/v2/events.json?apikey=K1X3XqQBZJp4oe79kFQSE2cjpWIY6t3B")
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log("if block.  ")
            throw new Error(`Response status: ${response.status}`);
        } else {
            console.log("else block ", response.ok)
        }

        const data = await response.json();
        console.log("data", data);

        console.log("data.events", data._embedded.events);
         eventDiv.addEventListener("click", () => {
       
        data._embedded.events.forEach((event) => {
            console.log(event);
             // let data = json
        let option = document.createElement("option")
        option.setAttribute("value", event.id)
        option.innerText = event.dates.start.localDate + " : " +event.name
        select.appendChild(option)
//create div for event
// Select the container where divs will be added
const container = document.getElementById("container");
 // Create a new div element
    let eventDiv = document.createElement("div");
    
    // Set attributes and content
    eventDiv.setAttribute("class", "event-container"); 
    eventDiv.innerText = `${event.dates.start.localDate} : ${event.name}`;

    // Add an event listener for clicks
    // eventDiv.addEventListener("click", () => {
    //     alert(`You clicked on: ${event.name}`);
    // });

    // Append the div to a parent element (make sure there's a container in your HTML)
    document.getElementById("container").appendChild(eventDiv);

});
 alert(`You clicked on: ${event.name}`);
    });





        // console.log(option)
        


       

    } catch (error) {
        console.log("final  catch block  ")
        console.error(error.message);
    }
}
initialLoad();
