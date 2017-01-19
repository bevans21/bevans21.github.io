$(document).ready(function() {

    //get all the nav li, add click event
    $(".nav").find("li").on("click", function() {
        $("#pageContent").hide().html("");
        //this removes the active class
        $(".nav").find("li").removeClass("active");
        //this adds the active class to the selected nav list item
        $(this).addClass("active");

        //this gets the partial that the nav is linked to
        var page = $(this).attr("id");
        getPartial(page);

      }) /

    //this gets the partial, activates the jSon data, and then the rest of the
    //associated js is loaded
    function getPartial(partial) {

      if (partial == "homePage") { //ajax get home.html
        $.get("partials/home.html", function(data) {
          $("#pageContent").html(data);
          $('.carousel').carousel();
        })
      } else if (partial == "whatPage") {
        $.getJSON("jsonDatabase/final.json", function(data) {

            var html = "";
//this is where the js tells the page to retrieve certain items from the Json file
            $.each(data, function(index, item) {
                html += '<div class="col-xs-12 col-md-4 jsonCats">' +
                  '<img class="catImage" src="' + item.image +'"/>' +
                  '<img class="catImage2" src="' + item.image2 +'"/>' +
                  '<div class="panel panel-default">' + //added
                  '<div class="panel-heading">Reviews</div>'; //added
                $.each(item.comments, function(ind, i) {
                    html += '<div class="panel-body">' + //added
                      '<div class="renterName"><small>' + i.username + '</small></div>' +
                      '<div class="renterComment">' + i.comment + '</div>' +
                      '<div class="renterStars">';

                    for (var j = 1; j <= 5; j++) {
//here are the review stars
                      if (j <= i.stars) {
                        html += '<img src="images/fullstar.png"/>';
                      } else {
                        html += '<img src="images/emptystar.png"/>';
                      }
                    }
                    html += '</div>' + //end stars
                      '</div>'; //panel body
                  }) //each comment

                html += '</div>' + //panel
                  '</div>'; //col-md-4
              }) //each cat

            $("#pageContent").html(html);

          })
      } else if (partial == "orderPage") {
        $.get("partials/order2.html", function(data) {

            $("#pageContent").html(data);

            $('#startRentDate, #endRentDate').datepicker({});

            $("#submitButton").on("click", function() {

                //get all empty inputs and select
                //add error class to div container
                $("input, select").filter(function() {
                  return !this.value;
                }).closest("div").addClass("has-error");


                //remove error class for non empty ones
                $("input, select").filter(function() {
                  return this.value; //removed !
                }).closest("div").removeClass("has-error");

                var errors = $(".has-error");

                if (errors.length < 1) {
                  //alert("no errors");
                  sendConfirmation();
                }

              }) //click

//here is the jQuery event  that changes the background of an input box when it is
//focused on and then changes it back to white when it is deselected
              $("#mySingleLineText").on("focus", function() {
                $("#log").append("<br>input focus");
                  $(this).css("background-color", "#adc4a0")
                })
                .on("blur", function() {
                  $("#log").append("<br>input blur");
                  $(this).css("background-color", "#FFFFFF")
                });

//this changes what the submit button says when you hover over it and
//what it changes back to once it is not being hovered over anymore
                $("#submitButton").on("mouseenter", function() {
                              // $("#log").append("<br>Button mouseenter");
                              $(this).text("RETRO!");
                            })

                            .on("mouseleave", function() {
                              //$("#log").append("<br>Button mouseleave");
                              $(this).text("Order Now");
                            });
          }) //get
      }

      $("#pageContent").fadeIn();

    }

    function sendConfirmation() {
      var order = {};
      var formData = $("input, select");
      formData.each(function() {
        var id = $(this).attr("id");
      })

      alert("Sending to database " + JSON.stringify(order));
      $("#successMsg").html("Order Received!<br/><br/>" +
        order.catSelect + " will be delivered on " +
        order.endRentDate +
        "<img id='Cupcake' src='images/running-man.png'>");

    }

    //begin the program, get the homepage
    getPartial("homePage");

  })
