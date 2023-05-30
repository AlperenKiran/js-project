//let equal_pressed = 0;

let inputBtn=document.querySelectorAll(".input-button")

let input=document.getElementById("input")
let equal=document.getElementById("equal")
let clear=document.getElementById("clear")
let erase=document.getElementById("erase")



window.onload = ()=>{
    input.value= " "
}

equal.addEventListener("click", ()=>{
    
    //equal_pressed=1;
    let inVal = input.value;


    try {
        var solution = eval(inVal);
        console.log(solution)

    if(Number.isInteger(solution)) {
        input.value= solution;
    }else{
        input.value= solution.toFixed(2);
    }
    }catch(err) {
        alert("Invalid Input")
        console.log(err)
    }
    
})

inputBtn.forEach((btnClass)=>{
    btnClass.addEventListener("click",()=>{
        // if(equal_pressed==1){
        //     input.value=" ";
        //     equal_pressed=0;
        // }
        input.value += btnClass.value;
    })
})

clear.addEventListener("click",()=>{
    input.value=" "
})

erase.addEventListener("click",()=>{
    input.value=input.value.slice(0,-1)
})