$("#form").submit(function(e) {
    e.preventDefault();
});

$("#button").click(function (){
    console.log($("#user").val());
    $.post("",
        {
            user: $("#user").val(),
            password: $("#password").val(),
            email: $("#email").val()
        },
        function(data, status) {
            if (data === "password") {
                alert("password is wrong.");
            } else if (data === "user") {
                alert("user does not exist.");
            } else {
                window.location.replace(data);
            }
        }
    );
});