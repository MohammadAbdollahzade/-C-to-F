let $ = document;

const firstValue = $.querySelector('.c')
const secondValue = $.querySelector('.f')
const inputTemp = $.querySelector('.temp')
const result = $.querySelector('.convert-output')
const convertBtn = $.querySelector('.convert')
const resetBtn = $.querySelector('.reset')
const changeBtn = $.querySelector('.change')

function convert(){
    if(inputTemp.value == ''){
        result.innerHTML = 'You did not enter temperature'
        result.style.textShadow = '1px 1px 20px red'
    } else{
        if (firstValue.innerHTML === '°C') {
           let resultValue = (inputTemp.value * 1.8) + 32
           result.innerHTML = inputTemp.value + '°C To ' + resultValue.toFixed(2) + '°F' 
           result.style.color = 'rgb(247, 247, 247)'
        } else{
            let resultValue  = (inputTemp.value - 32) * 5 / 9
           result.innerHTML = inputTemp.value + '°F To ' + resultValue.toFixed(2) + '°C ' 
           result.style.color = 'rgb(247, 247, 247)'
        }
    }
}

function reset(){
    result.innerHTML = '-'
    inputTemp.value = ''
}

function swap(){
    if(firstValue.innerHTML === '°C'){
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        $.title = '°F to °C'
        // inputTemp.setAttribute('placeholder','°F')
        inputTemp.placeholder ='°F'
    }
    else{
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        $.title = '°C to °F'
        // inputTemp.setAttribute('placeholder','°C')
        inputTemp.placeholder = '°C'
    }
}

convertBtn.addEventListener('click',convert)
resetBtn.addEventListener('click',reset)
changeBtn.addEventListener('click',swap)




