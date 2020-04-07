
$(window).load(function(){
  $('.loader').fadeOut();
  $('.body').fadeIn();
});
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      panel.style.maxHeight = null;
      panel.style.visibility = "hidden";
      this.style.borderBottomRightRadius = "10px";
      this.style.borderBottomLeftRadius = "10px";
      panel.style.borderTopRightRadius = "10px";
      panel.style.borderTopLeftRadius = "10px";
    } else {
      for (var counter = 0; counter < acc.length; counter++) {
        if (acc[counter].classList.contains("active")) {
          acc[counter].classList.remove("active");
          var vpanel = acc[counter].nextElementSibling;
          vpanel.style.maxHeight = null;
          vpanel.style.visibility = "hidden";
          acc[counter].style.borderBottomRightRadius = "10px";
          acc[counter].style.borderBottomLeftRadius = "10px";
          vpanel.style.borderTopRightRadius = "10px";
          vpanel.style.borderTopLeftRadius = "10px";
        }
      }
      this.classList.add("active");
      panel.style.maxHeight = (panel.scrollHeight - 20) + "px";
      panel.style.visibility = "visible";
      this.style.borderBottomRightRadius = "0px";
      this.style.borderBottomLeftRadius = "0px";
      panel.style.borderTopRightRadius = "0px";
      panel.style.borderTopLeftRadius = "0px";
    }
  });
}