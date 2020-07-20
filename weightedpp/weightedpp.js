function fill() {
    for(var i=0;i<=99;i++){
        var j=i+1;
        var scoreid="score"+j.toString();
        document.getElementById(scoreid).value=document.getElementById("fillValue").value;
    }
}

function calculate(){
    var weights= [1,0.95,0.9,0.86,0.81,0.77,0.74,0.7,0.66,0.63,0.6,0.57,0.54,0.51,0.49,0.46,0.44,0.42,0.4,0.38,0.36,0.34,0.32,0.31,0.29,0.28,0.26,0.25,0.24,0.23,0.21,0.2,0.19,0.18,0.17,0.17,0.16,0.15,0.14,0.14,0.13,0.12,0.12,0.11,0.1,0.01,0.09,0.09,0.09,0.08,0.08,0.07,0.07,0.07,0.06,0.06,0.06,0.05,0.05,0.05,0.05,0.04,0.04,0.04,0.04,0.04,0.03,0.03,0.03,0.03,0.03,0.03,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01];
   
    var total = 0;
    for(var i=0;i<100;i++){
        var j=i+1;
        var scoreid="score"+j.toString();
        console.log(weights[i]);
       total=total+(parseFloat(document.getElementById(scoreid).value)*weights[i]);
    }
    alert("Weighted PP="+total.toString()+" + Max Bonus PP (416)= "+(total+416).toString());
}