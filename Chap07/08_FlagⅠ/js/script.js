// 청기 내려
$('#btn1').on('click', downBlueFlag)

function downBlueFlag() {
    $('.flag.blue').addClass('down')
}

// 청기 내리지 말고 백기 내려
$('#btn2').on('click', downWhiteFlag)

function downWhiteFlag() {
    $('.flag.white').addClass('down')
}

// 점선 청기 내려
$('#btn3').on('click',downBlueDot)

function downBlueDot() {
    $('.flag.blue.dot').addClass('down')
}