excute = document.getElementById("excute");
excute.addEventListener('click', getData);
savedInfo = localStorage.getItem("zoomLinkList");
console.log(savedInfo)


    function getData() {
        //info for first website
        name = document.getElementById("zoomname").value;
        link = document.getElementById("zoomlink").value;
        if(name != "" && link != ""){
        if(savedInfo==null){
          zoomInfo = String("Your Links<br><a href='"+link+"' target=_'blank'>"+name+"</a>") 
        } else{
            zoomInfo = String(savedInfo+"<br>"+"<a href='"+link+"' target=_'blank'>"+name+"</a>") 
            console.log(zoomInfo)
        }

        
        localStorage.setItem("zoomLinkList", zoomInfo);
        document.getElementById("linkDisplay").innerHTML = zoomInfo;
       


        }
    }
    
       if(savedInfo==null){
        document.getElementById("linkDisplay").innerHTML = "<p>Enter in a Zoom Link below</p>";
       } else{
          document.getElementById("linkDisplay").innerHTML = savedInfo;
       }
        



  // for(var i = 0; i < 4; i++){
            
  //   beforeCode = document.getElementById("linkDisplay").value;
  //   finalCode = String(beforeCode+"<br>"+publicZoomLink)
  //   document.getElementById("linkDisplay").innerHTML = finalCode;
          
  //     }