function compute()
{
    p = Number(document.getElementById("principal").value);
    r = Number(document.getElementById("rate").value)/100;
    y = Number(document.getElementById("years").value);
    var amount= (p * r * y);
    var new_year = (Number(new Date().getFullYear())+y);
    document.getElementById("p1").innerHTML="If you deposit ";
    document.getElementById("p2").innerHTML="at an intrest rate of ";
    document.getElementById("p3").innerHTML="you will receive an amount of ";
    document.getElementById("p4").innerHTML="in the year ";

    document.getElementById("prin").innerHTML=document.getElementById("principal").value +",<br>";
    document.getElementById("s_rate").innerHTML=document.getElementById("rate").value +" %<br>";
    document.getElementById("result").innerHTML=String(amount) +",<br>";
    document.getElementById("s_year").innerHTML=String(new_year)+"<br>";
    
}
        