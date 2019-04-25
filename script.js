$("#images").hide();






$("#button").click(function() {
    var emotion = $("#mood").val();
    $("#images").show();
    if (emotion === "happy") {
        happy(emotion);
    } else if (emotion === "unhappy") {
        unhappy(emotion);
    } else if (emotion === "depressed") {
        depressed(emotion);
    } else if (emotion === "starvation") {
        starvation(emotion);
    }
});

function happy(emotion) {
    $("body").css("background-color", "yellow");
    $("#dog").show();
    $("#frown").hide();
    $("#cry").hide();
    $("#child").hide();
}
function unhappy(emotion) {
    $("body").css("background-color", "teal");
    $("#dog").hide();
    $("#frown").show();
    $("#cry").hide();
    $("#child").hide();
}
function depressed(emotion) {
    $("body").css("background-color", "gray");
    $("#dog").hide();
    $("#frown").hide();
    $("#cry").show();
    $("#child").hide();
}
function starvation(emotion) {
    $("body").css("background-color","orange");
    $("#dog").hide();
    $("#frown").hide();
    $("#cry").hide();
    $("#child").show();
}