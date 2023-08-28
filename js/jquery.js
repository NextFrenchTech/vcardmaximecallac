$( document ).ready(function() {

    $("#card").on("click", function() {
        $("#card").toggleClass("reverse");
    });

    console.log( "ready!" );
});