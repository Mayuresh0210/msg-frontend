async function backendfetch(){
  
    let url =` http://localhost:3002/messages`;

    let response = await fetch(url);
    
    let results = await response.json();

    console.log(results);

}

async function backendaxios(){
  
    let url =` http://localhost:3002/messages`;

    let response = await axios.get(url);
    
   

    console.log(response);

}

async function sendmsg(){
  
    let url =` http://localhost:3002/message`;

    const data = {

        id : "47",
        name :"messi",
    };

    let response = await axios.post(url, data);
    
   

    console.log(response);

}