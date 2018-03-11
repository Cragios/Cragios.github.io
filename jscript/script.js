function openPage(pageName, elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  //to make tabs go back to default background after clicking away
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  //to change background color of elements after clicking
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "black";
}
//to open a tab by default
document.getElementById("defaultOpen").click();

$(window).load(function() {      //Do the code in the {}s when the window has loaded
  $("#loader").fadeOut("fast");  //Fade out the #loader div
});
