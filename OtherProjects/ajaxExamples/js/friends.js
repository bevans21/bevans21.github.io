

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = "<table class='table table-hover table-striped'>" + "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

    $.each(data, function(index, item){
      html += "<tr>" +
      "<td>" + item.name + "</td>" +
      "<td>" + item.email + "</td>" +
      "<td>" + item.company + "</td>" +
      "</tr>";
    })

    html += "</table>";
    $("#results").append(html);
  })
})
});
