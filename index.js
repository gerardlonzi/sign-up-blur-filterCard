const email = document.querySelector(".email")
const password = document.querySelector(".password")
const names = document.querySelector(".name")

const email_error = document.querySelector(".email-error")
const password_error = document.querySelector(".password-error")
const name_error = document.querySelector(".name-error")
const btn1 = document.querySelector(".btn1")

const name_result = document.querySelector(".name-result")
const email_result = document.querySelector(".email-result")

const form_in = document.querySelector(".form-in")
const card = document.querySelector(".card")
const sign_in = document.querySelector(".sign-in")

const btn2 = document.querySelector(".btn2")
const sucess = document.querySelector(".sucess")

const email_second = document.querySelector(".email-second")
const pass_second = document.querySelector(".pass-second")
const btn3 = document.querySelector(".btn3")

const email_back = document.querySelector(".email-back")
const password_back = document.querySelector(".pass-back")


btn1.addEventListener("click",()=>{{
    if(names.value ==""){
        names.classList.toggle("border")
        name_error.innerHTML="Add name"

    }
    else if(email.value =="" ){
        email.classList.toggle("border")
        email_error.innerHTML="Add email"
    }
    else if(password.value=="") {
        password.classList.toggle("border")
        password_error.innerHTML="Pw"
    }
    else{
        names.style.border = "1px solid green"
        email.style.border = "1px solid green"
        password.style.border = "1px solid green"
        name_error.innerHTML=""
        password_error.innerHTML=""
        email_error.innerHTML=""

        form_in.style.display = "none"
        card.style.display ="block"
        name_result.innerHTML=`${names.value}`
        email_result.innerHTML=`${email.value}`


        sucess.addEventListener("click",()=>{
            card.style.display ="none"
            form_in.style.display = "block"
            // names.value=""
            // email.value=""
            // password.value=""
            names.classList.toggle("nobor")
            email.classList.toggle("nobor")
            password.classList.toggle("nobor")

        })

        btn2.addEventListener("click",()=>{
            form_in.style.display = "none"
            sign_in.style.display="block"
           
        })
        btn3.addEventListener("click",(e)=>{

            if(email_second.value != email.value){
                email_back.innerHTML="incorrect"
                email_second.classList.toggle("border")
            }
            if(pass_second.value != password.value){
                password_back.innerHTML="pw"
                pass_second.classList.toggle("border")
            }
            else{
                pass_second.style.border = "1px solid green"
                email_second.style.border = "1px solid green"
                password_back.innerHTML=""
                email_back.innerHTML=""
                alert("vous etes connectéé")

            }
        })    
    }

}})

