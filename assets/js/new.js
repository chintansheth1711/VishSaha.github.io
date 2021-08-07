$(document).ready(function() {
    let val1 = false,
        val2 = false,
        val3 = false;
    $("#cbox1").click(function() {
        val1 = !val1;
    });
    $("#cbox2").click(function() {
        val2 = !val2;
    });
    $("#cbox3").click(function() {
        val3 = !val3;
    });
    $("#btnC").on("click", function() {
        let str = "You have selected:";
        if (!val1 && !val2 && !val3) str = "None ";
        if (val1) str += "Programming ";
        if (val2) str += "Cycling ";
        if (val3) str += "Swimming ";
        if (confirm(str)) {
            $("#allHobbies").css("display", "block");
            if (val1) {
                $("#programmingHobby").css("display", "block");
            } else {
                $("#programmingHobby").css("display", "none");
            }
            if (val2) {
                $("#cyclingHobby").css("display", "block");
            } else {
                $("#cyclingHobby").css("display", "none");
            }
            if (val3) {
                $("#swimmingHobby").css("display", "block");
            } else {
                $("#swimmingHobby").css("display", "none");
            }
        }
    });
});