let day = prompt("ITS A ELECTION DAY ?");
if(day==="yes")
{
    let name = prompt("YOUR NAME IN THE LIST ?");
    if(name==="Haseeb")
    {
        let age = prompt("HOW OLD ARE YOU ?");
        if(age>18)
        {
            alert("YOU CAN CAST A VOTE");
        }
        else{
            alert("YOU CAN NOT CAST A VOTE UNDER AGE");
        }
    }
    else{
        alert("YOUR NAME IS NOT IN THE LIST");
    }
}
else
{
    alert("ITS NOT A ELECTION DAY");
}