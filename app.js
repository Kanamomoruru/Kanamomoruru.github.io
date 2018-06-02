
$(function() {

    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden');
    }, 4000);

});

$(function(){
    $('#fading').hide().fadeIn(5000);
});


$(function () {
    $("#name_error_message").hide();
    $("#email_error_message").hide();


    var error_name = false;
    var error_email = false;

    $("#form_name").focusout(function(){
        check_name();
    });

    $("#form_email").focusout(function(){
        check_email();
    });

    function check_name() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#form_name").val();
        if (pattern.test(name) && name !== '') {
            $("#name_error_message").hide();
            $("#form_name").css("border-bottom", "2px solid #34f458");
        } else {
            $("#name_error_message").html("Should contain only characters");
            $("#name_error_message").show();
            $("#form_name").css("border-bottom", "2px solid #90a0a");
            error_name = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#form_email").val();
        if (pattern.test(email) && email !== '') {
            $("#email_error_message").hide();
            $("#form_email").css("border-bottom", "2px solid #34f458");
        } else {
            $("#email_error_message").html("Invalid Email");
            $("#email_error_message").show();
            $("#form_email").css("border-bottom", "2px solid #90a0a");
            error_email = true;
        }
    }

    $("#register_form").submit(function () {
        error_name = false;
        error_email = false;

        check_name();
        check_email();

        if (error_name === false && error_name === false && error_email === false) {
            alert("Registration Successful");
            return true;
        } else {
            alert("Please fill the form correctly");
            return false;
        }
    });

});


var text = $(".about");
var about = new AboutText(text);

function random(min, max) {
    return (Math.random() * (max - min)) + min;
}

$(about.chars).each(function (i) {
    TweenMax.from($(this), 2.5, {
        opacity:0,
        x: random(-500, 500),
        y: random(-500, 500),
        z: random(-500, 500),
        scale: .1,
        delay: i * .02,
        yoyo: true,
        repeat: -1,
        repeatDelay: 10
    });
});