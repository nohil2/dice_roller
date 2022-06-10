function roller(sides){
    var num = document.getElementById("d"+sides+"_#").value;
    var modifier = document.getElementById("d"+sides+"_+").value;

    var rolls = roll(num, parseInt(sides));
    var sum = rolls.reduce((a,b) => a+b) + parseInt(modifier);

    document.getElementById("d"+sides+"_result").value = sum;
    post(sides, sum, rolls, modifier);
    return;
}

function custom_roller(){
    var num = document.getElementById("custom_#").value;
    var modifier = document.getElementById("custom_+").value;
    var sides = document.getElementById("custom_sides").value;

    var rolls = roll(num, sides);
    var sum = rolls.reduce((a,b) => a+b) + parseInt(modifier);

    document.getElementById("custom_result").value = sum;
    post(sides, sum, rolls, modifier);
    return;
}

function roll(num, sides){
    var rolls = [];
    for (let i = 0; i < num; i++){
        rolls[i] = Math.floor(Math.random() * (sides)) + 1;
    }
    return rolls;
}

function post(sides, sum, rolls, modifier){
    var dice = rolls.length;
    var message = "<p><b>Roll</b>("+dice+"d"+sides+")+"+modifier+":<br>";
    for(let i=0; i<rolls.length; i++){
        message = message+rolls[i]+", ";
    }
    message = message+"+"+modifier+"<br>Total = "+sum+"</p>";

    document.getElementById("posthere").insertAdjacentHTML("beforeend",message);
    text_position = document.getElementById("results");
    text_position.scrollTop = text_position.scrollHeight;
    return;
}

function reset(){
    var ids = ["d2", "d3", "d4", "d6", "d8", "d10", "d12", "d20", "d100", "custom"];
    for(let i=0; i<ids.length; i++){
        document.getElementById(ids[i]+"_#").value = 1;
        document.getElementById(ids[i]+"_+").value = 0;
        document.getElementById(ids[i]+"_result").value = null;
    }
    document.getElementById("custom_sides").value = 1;
    document.getElementById("posthere").innerHTML = "";
    return;
}