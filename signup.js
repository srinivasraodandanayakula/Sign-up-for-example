var a=document.getElementById("Firstname").value;
var b=document.getElementById("Email").value;
var c=document.getElementById("Workphone").value;
var d=document.getElementById("Homephone").value;
var e=document.getElementById("Workaddress").value;
var f=document.getElementById("Homeaddress").value;
var g=document.getElementById("City").value;


function form(){
    if(a==""){
            document.getElementById("Firstname").style.borderColor ="red";
        }
   if(b=="") {
            document.getElementById("Email").style.borderColor="red";
        }

      if(c==""){
            document.getElementById("Workphone").style.borderColor="red";
        }
        
     if(d==""){
        document.getElementById("Homephone").style.borderColor="red";
        }
        
      if(e==""){
          document.getElementById("Workaddress").style.borderColor="red";
        }
        
        if(f==""){
           document.getElementById("Homeaddress").style.borderColor="red";
        }
        
           if(g=="") {
            document.getElementById("City").style.borderColor="red";
        }


    }