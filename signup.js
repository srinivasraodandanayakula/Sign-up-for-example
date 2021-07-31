


function abc(){
   


    var Firstname=document.getElementById("Firstname").value;
var Email=document.getElementById("Email").value;
var Workphone=document.getElementById("Workphone").value;
var Homephone=document.getElementById("Homephone").value;
var Workaddress=document.getElementById("Workaddress").value;
var Homeaddress=document.getElementById("Homeaddress").value;
var City=document.getElementById("City").value;
var popup=[];
var popup2=[];





    if(Firstname==""){
            document.getElementById("Firstname").style.borderColor ="red";
            
        }

        else {
            document.getElementById("Firstname").style.borderColor ="green";
        }
   if(Email=="") {
            document.getElementById("Email").style.borderColor="red";
        }

        else{

          document.getElementById("Email").style.borderColor ="green";

        }
      if(Workphone==""){
            document.getElementById("Workphone").style.borderColor="red";

        }
        else {
            document.getElementById("Workphone").style.borderColor ="green";
        }
        
        if(Workphone.length<6){
            popup.push('phone number cant be less than digits')
            document.getElementById("Warning").innerText=popup.join(',')
            document.getElementById("Warning").style.color="red"
            document.getElementById("Workphone").style.borderColor ="red";
        }

     if(Homephone==""){
        document.getElementById("Homephone").style.borderColor="red";

        }
        
        else {
            document.getElementById("Homephone").style.borderColor ="green";
        }


        if(Homephone.length>13){
            popup2.push('phone number cant be more than 13 digits')
            document.getElementById("Alert").innerText=popup2.join(',')
            document.getElementById("Alert").style.color="red"
            document.getElementById("Homephone").style.borderColor ="red";
        }
        

      if(Workaddress==""){
          document.getElementById("Workaddress").style.borderColor="red";
        }
        

        else {
            document.getElementById("Workaddress").style.borderColor ="green";

        }
        if(Homeaddress==""){
           document.getElementById("Homeaddress").style.borderColor="red";
        }

        else {
            document.getElementById("Homeaddress").style.borderColor ="green";
        }
        
           if(City=="") {
            document.getElementById("City").style.borderColor="red";
           
        }
        else {
            document.getElementById("City").style.borderColor="green"
                
        }

      


    }




