$(document).ready(function() {
//this prints mouseenter and mouseleave every time the mouse enters and exits
//the button
$("#myButton").on("mouseenter", function(){
  $("#log").append("<br>Button mouseenter");
  $(this).text("ORDER NOW!!!");
})
.on("mouseleave", function(){
  $("#log").append("<br>Button mouseleave");
  $(this).text("Click Me!");
});

$("#submitButton").on("mouseenter", function() {
              // $("#log").append("<br>Button mouseenter");
              $(this).text("RETRO!");
            })

            .on("mouseleave", function() {
              //$("#log").append("<br>Button mouseleave");
              $(this).text("Order Now");
            });
//this makes the background of the name box turn baby blue when it's clicked
//and turns back to normal when you unclick it
  $("#mySingleLineText").on("focus", function() 
    $("#log").append("<br>input focus");
      $(this).css("background-color", "#CCFFFF")
    })
    .on("blur", function() {
      $("#log").append("<br>input blur");
      $(this).css("background-color", "#FFFFFF")
    });
//this is the accompanying JS that makes the value of the style print to the screen
  $("#mySelect").on("change", function() {
    $("#log").append("<br>input change");
    var val = $(this).val();
    $("#mySelectMessage").html(val + "! comin right up!");
  });

  $("#myButton").on("click", function() {
//this is what will be printed to the screen after the button is clicked
    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("#myTextArea").val();
    var mySelect = $("#mySelect").val();
    var address = $("#address").val();
    var email = $("#email").val();
    var province = $("#province").val();
    var myRadio = $("[name='size']:checked").val();
    var quantity = $("#quantity").val();
    var myCheckValues = $("[name='payment']:checked").val();
    var myCheckValues = [];
    //each is a jquery loop for objects/arrays
    $("[name='payment']:checked").each(function() {
      myCheckValues.push($(this).val());
    });
//this is the exact thing that will print to the screen when you click the button
  });


});
