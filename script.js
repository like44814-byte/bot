const BOT_TOKEN = "8955419887:AAFmOJAtuvatk4_YMddXPMiaaNEsd8LxXqs";
const CHAT_ID = "6557159068";

document.getElementById("nameForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    if(name === ""){
        return;
    }

    document.getElementById("status").innerHTML = "Sending...";

    const message = `📩 New Name\n\n👤 ${name}`;

    try{

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                chat_id:CHAT_ID,
                text:message
            })
        });

        const data = await response.json();

        if(data.ok){
            document.getElementById("status").innerHTML="✅ Sent Successfully";
            document.getElementById("name").value="";
        }else{
            document.getElementById("status").innerHTML="❌ Failed";
            console.log(data);
        }

    }catch(error){
        document.getElementById("status").innerHTML="❌ Network Error";
        console.log(error);
    }

});