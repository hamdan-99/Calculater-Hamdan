const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const {add, subtract, divide, multiply}= require('./calc');
const OPERATIONS ={add, subtract, divide, multiply}
app.use(bodyParser.json())
const port = 3000;
app.use(express.static('static'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static','index.html')));

app.post('/api/:op',(req, res)=>{  
    let number1 = req.body.number1;
    let number2 = req.body.number2;
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    if(isNaN(number1)||isNaN(number2)){
        res.json({status:'error',message:'Give me numbers '})
        return;
    }
const op = req.params.op;
if(!Object.keys(OPERATIONS).includes(op)){
    res.json({status:'error',message:'Invalid Operation'})
    return;
};
const opFun = OPERATIONS[op];
const result = opFun(number1,number2);
res.json({status:'ok', result});
});
app.listen(port, () => console.log(`Calc. app listening on port ${port}!`))