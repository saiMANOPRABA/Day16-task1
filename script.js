let divcontainer = document.createElement("div");
divcontainer.setAttribute("class","container");

let divcalc = document.createElement("div");
divcalc.setAttribute("class","calc")

let sol = document.createElement("div")
sol.innerHTML="| | |";
sol.setAttribute("class","solr")
let inp = document.createElement("input");
inp.setAttribute("id","inputtext"); 
inp.setAttribute("type","text"); 
inp.setAttribute("placeholder","0");   


let btn1 = document.createElement("button")
btn1.innerHTML = "C";
btn1.setAttribute("id","clr")


let btn2 = document.createElement("button")
btn2.innerHTML = "DEL";
btn2.setAttribute("id","dlt")


let btn3 = document.createElement("button")
btn3.innerHTML = "%";
btn3.setAttribute("class","btn");
btn3.setAttribute("value","%")

let btn4 = document.createElement("button")
btn4.innerHTML = "/";
btn4.setAttribute("class","btn");
btn4.setAttribute("value","/")


let btn5 = document.createElement("button")
btn5.innerHTML = "7";
btn5.setAttribute("class","btn");
btn5.setAttribute("value","7")

let btn6 = document.createElement("button")
btn6.innerHTML = "8";
btn6.setAttribute("class","btn")
btn6.setAttribute("value","8")

let btn7 = document.createElement("button")
btn7.innerHTML = "9";
btn7.setAttribute("class","btn");
btn7.setAttribute("value","9");

let btn8 = document.createElement("button")
btn8.innerHTML = "*";
btn8.setAttribute("class","btn");
btn8.setAttribute("value","*");


let btn9 = document.createElement("button")
btn9.innerHTML = "4";
btn9.setAttribute("class","btn");
btn9.setAttribute("value","4");

let btn10 = document.createElement("button")
btn10.innerHTML = "5";
btn10.setAttribute("class","btn");
btn10.setAttribute("value","5");


let btn11 = document.createElement("button")
btn11.innerHTML = "6";
btn11.setAttribute("class","btn");
btn11.setAttribute("value","6");

let btn12 = document.createElement("button")
btn12.innerHTML = "-";
btn12.setAttribute("class","btn");
btn12.setAttribute("value","-");

let btn13 = document.createElement("button")
btn13.innerHTML = "1";
btn13.setAttribute("class","btn");
btn13.setAttribute("value","1");

let btn14 = document.createElement("button")
btn14.innerHTML = "2";
btn14.setAttribute("class","btn");
btn14.setAttribute("value","2");

let btn15 = document.createElement("button")
btn15.innerHTML = "3";
btn15.setAttribute("class","btn");
btn15.setAttribute("value","3");

let btn16 = document.createElement("button")
btn16.innerHTML = "+";
btn16.setAttribute("class","btn");
btn16.setAttribute("value","+");

let btn17 = document.createElement("button")
btn17.innerHTML = ".";
btn17.setAttribute("class","btn");
btn17.setAttribute("value",".");

let btn18 = document.createElement("button")
btn18.innerHTML = "0";
btn18.setAttribute("class","btn");
btn18.setAttribute("value","0");

let btn19 = document.createElement("button")
btn19.innerHTML = "=";
btn19.setAttribute("id","eql")

let btn20 = document.createElement("button")
btn20.innerHTML = "Ans";
btn20.setAttribute("id","answer")




divcalc.append(sol,inp,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16, btn17,btn18,btn19,btn20);
divcontainer.append(divcalc);
document.body.append(divcontainer)


let equal_pressed= 0;

let btn_inp = document.querySelectorAll(".btn");

let input = document.getElementById("inputtext");
let equal = document.getElementById("eql");
let ans = document.getElementById("answer")
let clear = document.getElementById("clr");
let del = document.getElementById("dlt");

window.onload = () =>{
    input.value = "";
}
btn_inp.forEach((btn_cls) => {
btn_cls.addEventListener("click",() =>{
    if (equal_pressed  == 1){
        input.value = "";
        equal_pressed=0;
    }
    input.value += btn_cls.value;
});    
});

equal.addEventListener("click",()=>{
    equal_pressed = 1;
    let inp_val = input.value;
    try{
        let solution = eval(inp_val);
        if (Number.isInteger(solution)){
            input.value = solution;
        } else{
            input.value = solution.toFixed(2);
        }
    }catch(error){
        alert("Enter Valid Input");
    }
});

ans.addEventListener("click",()=>{
    equal_pressed = 1;
    let inp_val = input.value;
    try{
        let solution = eval(inp_val);
        if (Number.isInteger(solution)){
            input.value = solution;
        } else{
            input.value = solution.toFixed(2);
        }
    }catch(error){
        alert("Enter Valid Input");
    }
});

clear.addEventListener("click", ()=>{
    input.value = "0";
});

del.addEventListener("click",()=>{
    input.value = input.value.substr(0, input.value.length - 1);
});