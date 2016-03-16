$(document).ready(function(){
  $("#getFriends").on("click", function(){

$.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
  var html = "<table class='table table-hover table-striped'>" + "<tr><th>Name</th><th>Gender</th><th>Phone Number</th></tr>";

  $.each(data, function(index, item){
    html += "<tr>" +
    "<td>" + item.name + "</td>" +
    "<td>" + item.gender + "</td>" +
    "<td>" + item.phone + "</td>" +
    "</tr>";
  })

  html += "</table>";
  $("#friends").append(html);
})
})
});
