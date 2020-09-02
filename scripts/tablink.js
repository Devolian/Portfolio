var currentMobileTab = 0;

function openTab(pageName, elmnt) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}
/**
function slideTab(increment, elmnt) {
  currentMobileTab += increment;
  if(currentMobileTab < 0) { currentMobileTab = 2;}
  if(currentMobileTab > 2) { currentMobileTab = 0;}
  switch (currentMobileTab) {
    case 0:
      document.getElementById("mobile-display").innerHTML = "About Us";
      openTab('about', elmnt);
      break;
    case 1:
      document.getElementById("mobile-display").innerHTML = "Gallery";
      openTab('gallery', elmnt);
      break;
    case 2:
      document.getElementById("mobile-display").innerHTML = "Contact Us";
      openTab('contact', elmnt);
      break;
  }
} */