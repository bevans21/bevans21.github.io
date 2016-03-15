$(document).ready(function(){
$("#getClients").on("click", function(){
  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/clients.json",function(data) {

    $.each(data, function(index, item){
      $("#results").append(item.name);
    })
    //alert(data);
    //console.dir(data);
  })
})
});
