function convertTemp(){
    let scale = prompt("Enter F for enter Farenheit or C for entering Celsius:");
    let temperature = prompt("Enter the temperature:");

    if(scale=="C"){
        let f = (temperature * 9/5) + 32;
        document.getElementById("tempResult").innerHTML = `<p> Converting ${temperature} C to ${f} F </p>`;
    }else if(scale=="F"){
        let  c = (temperature - 32) * 5/9
        document.getElementById("tempResult").innerHTML = `<p>  Converting ${temperature} F to ${c} C </p>`;
       
    }else{
        document.getElementById("tempResult").innerHTML =`Your submission was incorrect!`;
    }
}