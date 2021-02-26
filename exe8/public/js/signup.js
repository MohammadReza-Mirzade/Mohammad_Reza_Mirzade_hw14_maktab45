$("#button").click(function (){
    $.ajax({
        url: "",
        success: function (result){
            if (result === "user"){
                alert("this user exist.")
            }
        }
    });
});