    let nome = 0, email = 0, mens = 0; 
    const form = document.getElementById('form');
    const campo = document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.span-required')
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const submit = document.getElementById('btn-submit');

    function setError(index){
        campo[index].style.border = '2px solid #e63636'
        spans[index].style.display = 'block'
    }

    function removeError(index){
        campo[index].style.border = ''
        spans[index].style.display = 'none'
    }

    function nameValidate(){
        if(campo[0].value.length<5){
            setError(0);
        }else{
            removeError(0);
            nome = 1;
        }
    }

    function emailValidate(){
        if(!emailRegex.test(campo[1].value)){
            setError(1);
        }else{
            removeError(1)
            email = 1;
        }
    }

    function mensageValidate(){
        if(campo[2].value.length<20){
            setError(2);
        }else{
            removeError(2);
            mens = 1;
        }
    }

        
    submit.addEventListener('click', (event)=>{
        if(nome==0 || email==0 || mens==0){
            event.preventDefault();
        }
    });
        


    

    
