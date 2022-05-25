function d20(){
    var num = document.getElementById('d20_#').value;
    var modifier = document.getElementById('d20_+').value;
    console.log(num, modifier);

    var results = roll(num, 20);
    var sum = results.reduce((a,b) => a+b) + parseInt(modifier);
    console.log(sum)
    document.getElementById("d20_result").value = sum;
}

function roll(num, sides){
    var results = [];
    for (let i = 0; i < num; i++){
        results[i] = Math.floor(Math.random() * (sides)) + 1;
    }
    console.log(results)
    return results;
}
