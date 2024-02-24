function menubar_switch(){
   var navbar_list=document.getElementById('navbar_list');
   var list_div=document.getElementById('list_div');
   navbar_list.classList.add("navbar_list");
   list_div.classList.add("list_div");
}
function navbar_cancel(){
   var navbar_list=document.getElementById('navbar_list');
   var list_div=document.getElementById('list_div');
   navbar_list.classList.remove("navbar_list");
   list_div.classList.remove("list_div");

}
     











function skills(){
   document.getElementById('p1').innerHTML="UI/UX";
   document.getElementById('p2').innerHTML="Designing web/app applications with help the of web technologies like HTML,CSS,JAVA SCRIPT and REACT.JS";
   document.getElementById('p3').innerHTML="Web development";
   document.getElementById('p4').innerHTML="Web App development";
   document.getElementById('p5').innerHTML="App development";
   document.getElementById('p6').innerHTML="Building ITPS_HRMS app using React.js";





}
function education(){
    document.getElementById('p1').innerHTML="2023-current";
   document.getElementById('p2').innerHTML="UI/UX design / FRONTEND developer training at Digital Lync Institute";
   document.getElementById('p3').innerHTML="2020-2023";
   document.getElementById('p4').innerHTML="B-tech /Electrical and Electronics Engineering";
   document.getElementById('p5').innerHTML="2017";
   document.getElementById('p6').innerHTML="SSC with 9.5 CGPA";


}

function experience(){
    document.getElementById('p1').innerHTML="UI/UX";
   document.getElementById('p2').innerHTML="Designing web/app applications";
   document.getElementById('p3').innerHTML="2019-2023";
   document.getElementById('p4').innerHTML="Web app development";
   document.getElementById('p5').innerHTML="App Design";
   document.getElementById('p6').innerHTML="Building Android/ios apps";


}



document.getElementById("addbutton").addEventListener("click", function addsubmit() {
   var object = {
     name: document.getElementById("name").value,
     email: document.getElementById("mail").value,
     textarea: document.getElementById("textarea").value
   };
 
   localStorage.setItem("userdata", JSON.stringify(object));
 
   var storedData = localStorage.getItem("userdata");
 
   var parsedData = JSON.parse(storedData);
   var userDataElement = document.querySelector('.userdata');
 
   userDataElement.innerHTML = "Name: " + parsedData.name + "<br>Email: " + parsedData.email + "<br>Textarea: " + parsedData.textarea;
 });



 document.getElementById("addbutton").addEventListener("click", function addsubmit(){
   var importdata = {
     name: document.getElementById("name").value,
     email: document.getElementById("mail").value,
     textarea: document.getElementById("textarea").value
   };
   console.log(importdata);
   let httpRequest=new XMLHttpRequest();
   // Specify the Firebase Realtime Database URL with the desired path
   httpRequest.open('POST', "https://my-portfolio-website-6fd71-default-rtdb.firebaseio.com/data.json");
   // Specify content-type
   httpRequest.setRequestHeader('content-type','application/json');
   // Send the data as JSON
   httpRequest.send(JSON.stringify(importdata));
   httpRequest.onreadystatechange = function(){
      if(httpRequest.readyState === 4){
         if(httpRequest.status === 200){
            window.alert('post data successfully');
         } else {
            window.alert('error');
         }
      }
   };
});

 

 