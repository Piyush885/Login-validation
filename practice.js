let email=document.getElementById('email')
let mob=document.getElementById('phone')
email.addEventListener('blur', ()=> {
    let regx=/^[a-zA-Z]([a-zA-Z0-9@]){2,12}$/
    let str=email.value
    if(regx.test(str))
    {
        console.log("matched")
        email.classList.remove('is-invalid')
        
    }
    else
    {
        email.classList.add('is-invalid')
    }
})
phone.addEventListener('blur', ()=> {
    let regx=/([0-9]{10})/
    let str=phone.value
    if (regx.test(str))
    {
        phone.classList.remove('is-invalid')
    }
    else
    {
        phone.classList.add('is-invalid')
    }
})

