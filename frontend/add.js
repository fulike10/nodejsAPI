
function sendPost(){
    const data = document.getElementById("gyarto").value+";"+document.getElementById("tipus").value+";"+document.getElementById("szin").value+";"+document.getElementById("ajtok_szama").value;
    console.log(data);
      navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
      console.log(data);
    }
