var isOpen = false;

function openNav() {
  if(isOpen == false) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    isOpen=true;
  } else {
    closeNav();
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  
  isOpen=false;
}