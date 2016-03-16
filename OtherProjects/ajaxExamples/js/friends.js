

$(document).ready(function(){
$("#getFriends").on("click", function(){

  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/friends.json",function(data) {
    var html = "<ul>Friends<li><ul class="name"></li>li></li>li></ul></li></ul>"
    $.each(data, function(index, item){
      html += "<tr>" +
      "<ul class="name">" + item.name + "</ul>" +
      "<li>" + item.gender + "</li>" +
      "<li>" + item.phone + "</li>" +


      "</tr>";
    })

    html += "</table>";
    $("#results").append(html);
  })
})
});
