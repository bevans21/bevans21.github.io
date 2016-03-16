

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = "<ul>" + "<li><ul><li></li><li></li>/ul></li></ul>"
    $.each(data, function(index, item){
      html += "<ul>" +
      "<li>" + item.name + "</li>" +
      "<li>" + item.gender + "</li>" +
      "<li>" + item.phone + "</li>" +
      "</li>" + "</ul>";
    })

    html += "</ul>";
    $("#results").append(html);
  })
})
});
