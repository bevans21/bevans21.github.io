

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = "<ul>Friends<li></li>li></li>li></li></ul>"
    $.each(data, function(index, item){
      html += "<tr>" +
      "<li>" + item.name + "</li>" +
      "<li>" + item.gender + "</li>" +
      "<li>" + item.phone + "</li>" +


      "</tr>";
    })

    html += "</table>";
    $("#results").append(html);
  })
})
});
