

//---------------------------Dark Mode--------------------------
const button=document.querySelector('button')
const toggleMode=()=>{
    if(document.body.className==='light'){
        document.body.className='dark'
    }else{
        document.body.className='light'
    }
}

button.onclick=toggleMode;