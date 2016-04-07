$.get("http://bevans21.github.io/OtherProjects/FinalProject/partials/nav.html", function(data){

  $(document).ready(function(){
  $(".container").prepend(data);
  $(".container").fadeIn();
  })
})
