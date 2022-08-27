
const pass = document.getElementById("password")
const form = document.getElementById("form")



function passwordTog() {
if (pass.type === "text"){
    pass.type = "password"
      
    }else{
        
        pass.type = "text"
    }

}



pass.oninput = function Validator(){

   const uppercase = document.getElementById("uppercase")
   const twoMoreDigit = document.getElementById("twoMoreDigit")
   const nonWord = document.getElementById("nonWord")
   const hasNumber = document.getElementById("hasNumber")




//regex for validation
   const  userPassword = pass.value
   const checkUpperCase = /[A-Z]/g
   const checkMoreDigit = /[0-9]{2,}/g
   const nonWordChar =/(\W)/gi
   const hasNumberIN = /\d/g

    if (checkUpperCase.test(userPassword) == true){
        uppercase.style.color = "#7fff00"
        uppercase.style.transition = "3000ms"

       
    } else{
        uppercase.style.color = "white"
        uppercase.style.transition = "3000ms"

    }
     if (checkMoreDigit.test(userPassword) == true){
        twoMoreDigit.style.color = "#7fff00"
        twoMoreDigit.style.transition = "3000ms"
       
    }else{
        twoMoreDigit.style.color = "white"
        twoMoreDigit.style.transition = "3000ms"

    }
     if (nonWordChar.test(userPassword) == true){
        nonWord.style.color = "#7fff00"
        nonWord.style.transition = "3000ms"
        
    }else{
        nonWord.style.color = "white"
        nonWord.style.transition = "3000ms"

    }
    if(hasNumberIN.test(userPassword)){
        hasNumber.style.color = "#7fff00"
        hasNumber.style.transition = "3000ms"

    }else{
        hasNumber.style.color = "white"
        hasNumber.style.transition = "3000ms"

    }


    
   
}

// function ValidComp(){
//     if (checkUpperCase.test(userPassword) == true  && checkMoreDigit.test(userPassword) == true
//     && nonWordChar.test(userPassword) == true && hasNumberIN.test(userPassword)){
//         alert("Your user password is now Valid")
//     }else{
//         alert("Your user password is weak")
//     }

// }
form.addEventListener("submit", function(event){
    event.preventDefault();
    const uppercase = document.getElementById("uppercase")
    const twoMoreDigit = document.getElementById("twoMoreDigit")
    const nonWord = document.getElementById("nonWord")
    const hasNumber = document.getElementById("hasNumber")
 
 
 
 
 //regex for validation
    const  userPassword = pass.value
    const checkUpperCase = /[A-Z]/g
    const checkMoreDigit = /[0-9]{2,}/g
    const nonWordChar =/(\W)/gi
    const hasNumberIN = /\d/g
    if (checkUpperCase.test(userPassword) == true  && checkMoreDigit.test(userPassword) == true
    && nonWordChar.test(userPassword) == true && hasNumberIN.test(userPassword)){
        alert("Your user password is now Valid")
    }else{
        alert("Your user password is weak")
    }
    console.log("clicked") 
    // ValidComp()
    
  });

  



