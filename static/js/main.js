async function  _Calclate (op) {
    const number1 = document.querySelector('#number1').value;
    const number2 = document.querySelector('#number2').value;
    document.querySelector('#result').textContent ='';
    document.querySelector('#error').textContent ='';
    const url = `api/${op}`;
    const res = await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify({number1, number2})
    });
    let json;
    try{
        json = await res.json();
    }catch{
    document.querySelector('#error').textContent =
    'Server returned a bad response. Try again later!'
    }
    if(json.status && json.status ==='ok'){
        document.querySelector('#result').textContent = json.result;
    }else{
        document.querySelector('#error').textContent =json.message;
    }
}
document.querySelector('#botton-add').addEventListener('click', ()=>{
    _Calclate(`add`);
});
document.querySelector('#botton-subtract').addEventListener('click', ()=>{
    _Calclate('subtract');
});document.querySelector('#botton-divide').addEventListener('click', ()=>{
    _Calclate('divide');
});document.querySelector('#botton-multiply').addEventListener('click', ()=>{
    _Calclate('multiply');
});