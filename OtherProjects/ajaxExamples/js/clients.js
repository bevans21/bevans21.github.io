$(document).ready(function(){
$("#getClients").on("click", function(){
  $.getJSON("http://bevans21.github.io/OtherProjects/ajaxExamples/jsondatabase/clients.json",function(data) {

    alert(data);
    console.dir(data);
  })
})
});
