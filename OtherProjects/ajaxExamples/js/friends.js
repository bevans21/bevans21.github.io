

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = 

    $.each(data, function(index, item){
      html += "<ul>" +
      "<li>" + item.name + "</li>" +
      "<li>" + item.email + "</li>" +
      "<li>" + item.company + "</li>" +
      "</ul>";

    html += "</ul>";
    $("#results").append(html);
  })
})
});
