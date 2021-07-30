/*
var a= prompt('enter your value')
result = a*a*a
console.log(result)
*/



/*var m=1
for(let a=m;a<=10;a++){
    console.log(a)
}

*/


/*var a= prompt('enter a word')
function ab(str){


    var x =str.split("");
    var y = x.reverse();
     var z = y.join('');
     
     if (a==z){
         console.log('given is pallendrome')
     } else{
     console.log('given is not pallendrome')
     }

}
ab(a) 
*/




/*var a= prompt('enter the number')

function ab(){
    let b=1;

    if (a==0 || a==1){
        console.log(b);
    }if (a<0){
        console.log('the number entered cant be negative')       
    }

    else{
        for (var c=a;c>=1;c--){
            b=b*c;
        }
        console.log(b)
    }
}
 ab(a)
 */

 


  /*var a= prompt('enter the first array without space')
 var b= prompt('enter ther second array without sapce')

 function ab(){

    var c=a.split("");
    var d=b.split(""); 

    if(c.length!=d.length){
     console.log('not equal')
    }
    
    if(c.lenght==d.lenght){

    var p=c.sort()
    var q=d.sort()

    if (p=q){
    console.log('equal')

    }}

 }
ab(a,b)
*/



/*var a=prompt('enter the RTPCR number')
 function AB(){
      
    if (a>=31){
    console.log('NEGATIVE')
    }

    if ((a>=28) && (a<=30)){
        console.log('POSITIVE, THE RISK LEVEL IS MODERATE')
    }
    if  ((a<28) && (a>24)){
        console.log('POSITIVE, THE RISK LEVEL IS HIGH')
    }
    if ((a<=24) && (a>0)){
        console.log('POSITIVE, THE RISK LEVEL IS VERY HIGH, DANGER')

    } 
}
AB(ab)
*/


/*
let students = [
    {
        fullname : "modi",
        idnumber : 123,
        marks : "70/100",
    },{
        fullname :"kcr",
        idnumber : 234,
        marks : "80/100",
    },{
            fullname : "jagan",
            idnumber : 345,
            marks : "90/100",
     }
]
let a = prompt ('enter your idnumber')
var b = students.find (function(students,index){
    if(students.idnumber==a)
    return true
}
)
console.log(b)
*/



/*var a= prompt('enter your values without spacing')
var b= a.split("")
var c= b.sort(function (p,q){return p-q})
var d= b.length
let e= b[0]

function ab (a){
    for (var f=e;f<d;f++){
    if(a[f]- a[f-1]!=1){
        i = parseInt(a[f-1])+1
        console.log(i)
    }
}
}
ab(a)
*/



/*var a= prompt('enter your value without spacing')
var b= a.split("")
var c= b.sort(function(a,b){return b-a})
var d= c.join("")
console.log(d)
*/


/*let a =[
    {
     value : 30,
     geographytype : "rural",
     worker : true,
    },{
        value :20,
        geographytype : "rural",
        worker : false,
    },{
        value : 60,
        geographytype : "urban", 
        worker : true,
    },{
        value : 50,
        geographytype : "urban",
        worker : false ,
    }
]
 
 let b = true 
 let e = "rural"
 var c = a.find( function(a,index){
     if( (a.geographytype==e)&&( a.worker==b))
     
     return true
 })
 console.log (c.value)
 */



 

 