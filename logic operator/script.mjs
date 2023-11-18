//student details
let studend = prompt("Enter the name of student");
let rollno = prompt("Enter the roll number");
let coures = prompt("enter the name of couse");
let institude = prompt("Enter the name of institude");
//student marks
let html_score =Number(prompt("Enter score of html"));
let css_score = Number(prompt("Enter score of css"));
let js_score = Number(prompt("Enter score of js"));
let python_score = Number(prompt("Enter score of python"));
let react_score = Number(prompt("Enter score of react"));
//persentage
let obtained = html_score + css_score + js_score + python_score + react_score ;
let persentage = obtained/500*100;
let garde = "";

if(persentage>=90){
    garde = "A+";
}
else if(persentage>=80){
    garde = "A";
}
else if (persentage>=70)
{
    garde= "B";
}
else if (persentage>=60){
    garde= "C";
}
else if (persentage>=50){
    garde= "D";
}
else{
    garde = "F";
}
//results
alert(`#########${institude}##########
----------------------------------------
student name : ${studend} 
roll number : ${rollno}
course title :${coures}
marks : html css js react python
your have obtained :${obtained}
your grade: ${garde}
your persentage : ${persentage}




`)