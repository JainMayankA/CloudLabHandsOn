function compute()
{   
    // input
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    //  Validation
    if(principal>0){
        // formula for interest
    interest = principal*years*rate/100;
    // get the future year
    f_year = new Date().getFullYear() +  parseInt(years);

    //  Display results 
    document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+" </mark>, <br> at an interest rate of <mark> "+rate+"</mark>.<br>You will receive an amount of <mark> "+interest+"</mark>,<br>in the year <mark> "+f_year+"</mark> ";
        

    }
    if (principal<=0){
        alert("Enter a positive number");
    document.getElementById("principal").focus();
    document.getElementById("principal").click();

    }
    

    
}

// Update the current slider value (each time you drag the slider handle)
function sliderLogic() {    
    rate = document.getElementById("rate").value;
    document.getElementById("op").innerHTML = rate + "%";
}

     