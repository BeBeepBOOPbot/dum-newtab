function Time12() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
      
     let time = hh + ":" + mm + " " + session;
  
    document.getElementById("clock12").innerText = time; 
    // let t = setTimeout(function(){ Time12() }, 1000);
  }

Time12();

function Time24() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
    
   let time = hh + ":" + mm;

  document.getElementById("clock24").innerText = time; 
  // let t = setTimeout(function(){ Time24() }, 1000); 

}

Time24();