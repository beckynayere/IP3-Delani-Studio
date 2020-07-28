
$(document).ready(function(event){
    $('.initiallyShown1').click(function(){
        $('.initiallyHiden1').toggle();
        $('.initiallyShown1').toggle();
    });
    $('.initiallyHiden1').click(function(){
        $('.initiallyShown1').toggle();
        $('.initiallyHiden1').toggle();
    });
    $('.initiallyShown2').click(function(){
        $('.initiallyHiden2').toggle();
        $('.initiallyShown2').toggle();
    });
    $('.initiallyHiden2').click(function(){
        $('.initiallyShown2').toggle();
        $('.initiallyHiden2').toggle();
    });
    $('.initiallyShown3').click(function(){
        $('.initiallyHiden3').toggle();
        $('.initiallyShown3').toggle();
    });
    $('.initiallyHiden3').click(function(){
        $('.initiallyShown3').toggle();
        $('.initiallyHiden3').toggle();
    });


// hover function for portfolio area
$("figure.portfolio-fig").hover(function () {
    $(this).find(".hoverable").show();
});

$("figure.portfolio-fig").mouseout(function () {
    $(this).find(".hoverable").hide();
});

$('.inittiallyHiddenMain2').hover(function () {
    $('.initiallyHidden2').toggle();
});
$('.inittiallyHiddenMain3').hover(function () {
    $('.initiallyHidden3').toggle();
});
$('.inittiallyHiddenMain4').hover(function () {
    $('.initiallyHidden4').toggle();
});
$('.inittiallyHiddenMain5').hover(function () {
    $('.initiallyHidden5').toggle();
});
$('.inittiallyHiddenMain6').hover(function () {
    $('.initiallyHidden6').toggle();
});
$('.inittiallyHiddenMain7').hover(function () {
    $('.initiallyHidden7').toggle();
});
$('.inittiallyHiddenMain8').hover(function () {
    $('.initiallyHidden8').toggle();
});
event.preventDefault();
});


//function to clear input fields after submisssion.

function myMessage() {
    //collect the name
    var name = document.getElementById("name").value;
    // collect the email
    var email = document.getElementById("exampleFormControlInput1").value;
    // collect the message
    var message = document.getElementById("exampleFormControlTextarea1").value;
    // The pop up message
    var myMessage = " we have received your message. Thank you for reaching out to us.*";
    // pop up the message with the name
    if (name == "" || email == "" || message == "") {
        document.getElementById("popUp").innerHTML = "Sorry! you did not enter a name or email or a message."
        alert("Sorry! you did not enter a name or email or a message.")
    } else {
        document.getElementById("popUp").innerHTML = "*" + name + myMessage; // 
        alert("*" + name + myMessage)
    }
}

// function to clear input fields after submisssion.
function clearForm() {
    document.getElementById("myForm").reset();
}