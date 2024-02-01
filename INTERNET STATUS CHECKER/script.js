// listen to an event using windows object to the load and the checkInternetConnection
window.addEventListener("load",checkInternetConnection);

// creating function using declaration (anonymous function can also be used)
// Anonymous function:An anonymous function is a function that is not stored in a program file, but is associated with a variable whose data type is function_handle . Anonymous functions can accept multiple inputs and return one output. They can contain only a single executable statement.

function checkInternetConnection(){
    // fetching ids
    const statusText = document.getElementById('statusText');
    const ipAddressText = document.getElementById('ipAddressTex');
    const NetworkstrengthText = document.getElementById('NetworkstrengthText');

    //till the data is getting fetched we need to display the status as checking 
    statusText.textContent="Checking...";


    // if browser is online then if will be executed else ifthe browser is unavailable then the else is executed  
    if(navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=>response.json())  // then method : the response received through the above fetch is converted into json
        
        .then((data)=>{ // second then method is used to handle the data received
                ipAddressText.textContent=data.ip;
                statusText.textContent= "Connected"


                const connection = navigator.connection;


                const Networkstrength = connection ?connection.downlink
                +'Mbps': "Unknown";
                NetworkstrengthText.textContent= Networkstrength;
        })
        .catch(()=>{//if server down then this catch block will be execeuted
            statusText.textContent = "Disconnected...";
            ipAddressText.textContent = '-';
            NetworkstrengthText.textContent = '-';
        })


    }else{
        statusText.textContent = "Disconnected...";
        ipAddressText.textContent = '-';
        NetworkstrengthText.textContent = '-';
    }

}

