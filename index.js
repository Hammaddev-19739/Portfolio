let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-content");
// var sidemenu = document.getElementById("sidemenu")

let body = document.body;



function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for (let tabcontent of tabcontents) {

    tabcontent.classList.remove("active-skills")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-skills")

}
 
// function openmenu(){
//   sidemenu.style.right = "0";
  

// }
// function closemenu(){
//   sidemenu.style.right = "-200px";


// }

  function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
  }

  function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
  }



  // const hexcolor = ()=>{
  //   let color = "123456789abcdef"
  //   hash = "#"
  //   for (let i = 0; i<6;i++){
  //     hash = hash + color[Math.floor(Math.random()*16)]
  //   }
  //   return hash
  // }


  
  // setInterval(()=>{
  //   body.style.background = hexcolor()
    
  // },1000)




