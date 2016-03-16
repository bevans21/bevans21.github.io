

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = "<ol>Friends<li><ul><li></li><li></li>/ul></li></ol>"
    $.each(data, function(index, item){
      html += "<ul>" +
      "<li>" + "Friend" + "</li>"
      "<ul>" + item.name + "</ul>" +
      "<li>" + item.gender + "</li>" +
      "<li>" + item.phone + "</li>" +


      "</ul>";
    })

    html += "</table>";
    $("#results").append(html);
  })
})
});
