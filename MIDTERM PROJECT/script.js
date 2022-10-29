const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://car-data.p.rapidapi.com/cars?limit=50&page=0");
xhr.setRequestHeader("X-RapidAPI-Key", "3f249e16d2msha999c4bde240a02p1d256bjsnc3b3139ce933");
xhr.setRequestHeader("X-RapidAPI-Host", "car-data.p.rapidapi.com");




///alert("Hi Human");

xhr.onload = function(){
    var response = xhr.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData);

///VOLVO 
    var make = parsedData[2].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);


    ///volvo.html
    var v = document.createElement('a'); ///link
    var vlink = document.createTextNode("Volvo Sample Car");
    var vhr = document.createElement("HR");
    v.appendChild(vlink);
    v.title = "Volvo Model Year Type";  
    v.href = "volvo.html"; 
    document.body.appendChild(v); 
    document.body.appendChild(vhr);

    

///FORD
    var make = parsedData[3].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);



     ///ford.html
     var v = document.createElement('a'); ///link
     var vlink = document.createTextNode("Ford Sample Car");
     var vhr = document.createElement("HR");
     v.appendChild(vlink);
     v.title = "Ford Model Year Type";  
    v.href = "ford.html"; 
     document.body.appendChild(v); 
     document.body.appendChild(vhr);

    
///SUBARU
    var make = parsedData[8].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);
    

    ///subaru.html
    var v = document.createElement('a'); ///link
    var vlink = document.createTextNode("Subaru Sample Car");
    var vhr = document.createElement("HR");
    v.appendChild(vlink); 
    v.title = "Subaru Model Year Type";  
    v.href = "subaru.html"; 
    document.body.appendChild(v); 
    document.body.appendChild(vhr);


    
///MITSUBISHI
    var make = parsedData[9].make;
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);

     ///mitsubishi.html
     var v = document.createElement('a'); ///link
     var vlink = document.createTextNode("Mitsubishi Sample Car");
     var vhr = document.createElement("HR");
     v.appendChild(vlink); 
     v.title = "Mitsubishi Model Year Type";  
     v.href = "mitsubishi.html"; 
     document.body.appendChild(v); 
     document.body.appendChild(vhr);
 

       
///NISSAN
    var make = parsedData[11].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);
    
    ///mitsubishi.html
    var v = document.createElement('a'); ///link
    var vlink = document.createTextNode("Nissan Sample Car");
    var vhr = document.createElement("HR");
    v.appendChild(vlink); 
    v.title = "Nissan Model Year Type";  
    v.href = "nissan.html"; 
    document.body.appendChild(v); 
    document.body.appendChild(vhr);

    
///HONDA
    var make = parsedData[12].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);
   
    ///honda.html
    var v = document.createElement('a'); ///link
    var vlink = document.createTextNode("Honda Sample Car");
    var vhr = document.createElement("HR");
    v.appendChild(vlink); 
    v.title = "Honda Model Year Type";  
    v.href = "honda.html"; 
    document.body.appendChild(v); 
    document.body.appendChild(vhr);
    

    
///HYUNDAI
    var make = parsedData[16].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);
   
   ///hyundai.html
   var v = document.createElement('a'); ///link
   var vlink = document.createTextNode("Hyundai Sample Car");
   var vhr = document.createElement("HR");
   v.appendChild(vlink); 
   v.title = "Hyundai Model Year Type";  
   v.href = "hyundai.html"; 
   document.body.appendChild(v); 
   document.body.appendChild(vhr);


    
///BMW
    var make = parsedData[17].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);

      
   ///bmw.html
   var v = document.createElement('a'); ///link
   var vlink = document.createTextNode("BMW Sample Car");
   var vhr = document.createElement("HR");
   v.appendChild(vlink); 
   v.title = "BMW Model Year Type";  
   v.href = "bmw.html"; 
   document.body.appendChild(v); 
   document.body.appendChild(vhr);
   
   

    
///CHEVROLET
    var make = parsedData[26].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);

   ///chev.html
   var v = document.createElement('a'); ///link
   var vlink = document.createTextNode("Chevrolet Sample Car");
   var vhr = document.createElement("HR");
   v.appendChild(vlink); 
   v.title = "Chevrolet Model Year Type";  
   v.href = "chev.html"; 
   document.body.appendChild(v); 
   document.body.appendChild(vhr);
   

    
///KIA
    var make = parsedData[46].make; 
    var disp_make = document.createElement('li'); 
    disp_make.innerHTML = make; 
    document.body.appendChild(disp_make);
    
   ///kia.html
   var v = document.createElement('a'); ///link
   var vlink = document.createTextNode("Kia Sample Car");
   var vhr = document.createElement("HR");
   v.appendChild(vlink); 
   v.title = "Kia Model Year Type";  
   v.href = "kia.html"; 
   document.body.appendChild(v); 
   document.body.appendChild(vhr);
   


}

xhr.send(data);