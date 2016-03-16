

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = "<ull>Friends<li><ul><li></li><li></li>/ul></li></ul>"
    $.each(data, function(index, item){
      html += "<ul>" +
      "<ul>" + item.name + "</ul>" +
      "<li>" + item.gender + "</li>" +
      "<li>" + item.phone + "</li>" +


      "</ul>";
    })

    html += "</ul>";
    $("#results").append(html);
  })
})
});
