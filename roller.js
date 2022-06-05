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
    console.log(rolls)
    return rolls;
}

function post(sides, sum, rolls, modifier){
    var dice = rolls.length;
    var message = "<p><b>Roll</b>("+dice+"d"+sides+")+"+modifier+":<br>";
    for(let i=0; i<rolls.length; i++){
        message = message+rolls[i]+", ";
    }
    message = message+"+"+modifier+"<br>Total = "+sum+'</p>';

    document.getElementById("posthere").insertAdjacentHTML("beforeend",message);
    text_position = document.getElementById("results");
    text_position.scrollTop = text_position.scrollHeight;
    return;

}