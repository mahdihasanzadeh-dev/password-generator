const pw = document.querySelector('#pw span')
const len =document.getElementById('len')
const upper=document.getElementById('upper')
const  lower=document.getElementById('lower')
const number=document.getElementById('number')
const symbol=document.getElementById('symbol')
const generate=document.getElementById('generate')
const copyToClipBoard=document.getElementById('copy')

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-=+|/<>?'

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random()*lowerLetters.length)]
}
function getUpperCase(){
    return upperLetters[Math.floor(Math.random()*upperLetters.length)]
}
function getNumber(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}
function getSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)]
}


function generatePassword(){
    let password = '';
    for(let i=0;i<len.value;i++){
        x = generateRandom()
        password+=x;
    }
    console.log(password)
    pw.innerText = password
}

function generateRandom(){
    const x = [];
    if(upper.checked){
        x.push(getUpperCase())
    }
    if(lower.checked){
        x.push(getLowerCase())
    }
    if(number.checked){
        x.push(getNumber())
    }
    if(symbol.checked){
        x.push(getSymbol())
    }
    if(x.length===0){
        return ""
    }
    //console.log(x)
    return x[Math.floor(Math.random()*x.length)]
}


generate.addEventListener('click',generatePassword)
copyToClipBoard.addEventListener('click',function(){
    navigator.clipboard.writeText(pw.innerText).then(function(){
        alert('متن کپی شد')
    },function(error){
        console.log(error)
    })
})