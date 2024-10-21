
for (let i = 3; i<=19; i++) {
    
document.getElementsByTagName("input")[i].addEventListener("click", function(){
    
    // The code below is to the value of the button and store it inside a variable called button
    let btnValue = document.getElementsByTagName("input")[i].value; 
    // The code below is to add the value of the button
                 document.getElementsByTagName("input")[0].value += btnValue; 
    
})
    
}

// code to progrsm eqaul-to (=) button

document.getElementsByTagName("input")[20].addEventListener("click", function(){
    document.getElementsByTagName("input")[0].value =
    eval( document.getElementsByTagName("input")[0].value)
})

// This code is used for the clear all button (AC)
document.getElementsByTagName("input")[1].addEventListener("click", function(){
    document.getElementsByTagName("input")[0].value = '';
})


document.getElementsByTagName("input")[2].addEventListener("click", function(){
    document.getElementsByTagName("input")[0].value =
    document.getElementsByTagName("input")[0].value.slice(0, -1)
})




