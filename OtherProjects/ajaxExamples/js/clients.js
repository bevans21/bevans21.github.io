

$(document).ready(function(){
$("#getClients").on("click", function(){
  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/clients.json",function(data) {
    var html = "<table>" + "<tr><th>Name</th><th>Email</th><th><Company/th></tr>";
    $.each(data, function(index, item){
      $("#results").append(item.name);
    })
    html += "</table>";
    $("#results").append(html);
    //alert(data);
    //console.dir(data);
  })
})
});
