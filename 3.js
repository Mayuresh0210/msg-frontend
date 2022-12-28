


window.addEventListener("load", () => {

    loadmsg();
});



async function ats(){

    let textref = document.querySelector("#textid");
    let noref = document.querySelector("#noid");

    let url = `http://localhost:3002/message`;
    
     const data = {
      id : noref.value, 
    
      name: textref.value, 
      
      reply : reply ? 1 : 0
    
     };

    let response = await axios.post(url,data);

    console.log(response);


    textref.value="";
    noref.value="";

    loadmsg();

}

function enter(event){
if(event.keyCode == 13){

ats();
}
}
    

async function loadmsg(){
    let url = `http://localhost:3002/messages`;

   let response  = await axios.get(url);
   let parent = document.querySelector("#parent")


   for( item of response.data){

    let messagetimestr = item.mayurTime;
    let msgtime = new Date( messagetimestr);
    let hour = msgtime.getHours();
    let min = msgtime.getMinutes();

    
    let dclass = item.reply ? "justify-content-end" : "justify-content-start";
    
    let newElemnet = `<div class="d-flex ${dclass}">
    <div class="d-flex justify-content-between align-items-center">
    <div class="badge text-bg-secondary">
        ${item.id}  ${item.name}
       <span class="ms-4">${hour}:${min}</span>
    </div>`;

    parent.innerHTML =  newElemnet + parent.innerHTML;

   }

   console.log(response);
}