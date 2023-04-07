// // // $(selector).each(callback(index, domElement))
// // сортейбл
$('.sortable, .num').sortable({
    connectWith: '#start, #end, .num', 
    containment: '.container',
    placeholder: '.num'
})
let topblock = $("#start").position()
$(".bloc").css("top", `${topblock.top}px`)
$(".bloc").css("left", `${topblock.left}px`)


// // рандомайзер пазлов

let puzzle = [
    '  <div id="num"    class= " num1">1</div>',
    '  <div id="num"    class= " num2">2</div>',
    '  <div id="num"    class= " num3">3</div>',
    '  <div id="num"    class= " num4">4</div>',
    '  <div id="num"    class= " num5">5</div>',
    '  <div id="num"    class= " num6">6</div>',
    '  <div id="num"    class= " num7">7</div>',
    '  <div id="num"    class= " num8">8</div>',
    '  <div id="num"    class= " num9">9</div>',
    '<div id="num"    class= " num10">10</div>',
    '<div id="num"    class= " num11">11</div>',
    '<div id="num"    class= " num12">12</div>',
    '<div id="num"    class= " num13">13</div>',
    '<div id="num"    class= " num14">14</div>',
    '<div id="num"    class= " num15">15</div>',
    '<div id="num"    class= " num16">16</div>'
       
]
rand()
function rand(){
    let random = _.shuffle(_.range(0,16));
    let spisok = [];
    for(i = 0; i< 16; i++){
        spisok += puzzle[random[i]]
        
    }
    $('#start').html(spisok)
}




document.querySelector('#check').disabled = true

// // старт функция
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let s = 0;
let interval;
function start(){
    document.querySelector('.che').disabled = false

    $('.bloc').css('display', 'none')
    $('.info').text('You steel have time, you sure?')
    
    $('.min').text('0')
    $('.sec').text('59')
    $('.mins').text('0')
    $('.seconds').text('59')
    document.querySelector('#check').disabled = false

    document.querySelector('#startb').disabled = true
    interval = setInterval(function(){
        let sec = $('.sec').text()
        let secs = $('.seconds').text()
        if($('.sec').text() == 0 ){
            result()
            clearInterval(interval)
            document.querySelector('#check').disabled = true
        }else{
             $('.sec').text(sec - 1)
             $('.seconds').text(sec - 1)
        }
    }, 1000, function(){rand()})
}



// new game
$('#new').on('click', function(){
    document.querySelector('#check').disabled = true
    document.querySelector('#startb').disabled = false

    $('.bloc').css('display', 'block')
    $('.min').text('01')
    $('.sec').text('00')
    $('.num').html('')
    clearInterval(interval)
    rand()
})

    let e = 0;
    $('#check').on('click', function CheckResult(){
        e++
        if($('.seconds').text()!==0){
        $('.alert').css('display', 'block')
        $('.back').css('display', 'block')
        $('.alert').animate({
            top: 50,
            opacity: 1    
        }, 300)
        $('.seconds').text($('.sec').text() )       
        }
        else{
            // clearInterval(intAlert)
                result()
                $('.bloc').css('display', 'block')

                
        }
    }) 
$(".close").on('click', function(){
    $('.back').css('display', 'none')
    $('.alert').animate({
        top: 0,
        opacity: 0.1    
    }, 300, function(){
        $('.alert').css('display', 'none')
    })
})   
    let res;
    function result(){
        
        for(i = 0; i < numbers.length; i++){    
            if(document.querySelector("#end").children[i].children[0] == undefined){
                res = false
                break
            }else if(document.querySelector("#end").children[i].children[0].innerText != numbers[i]  ) {
                    res = false;
                    break   
                }else{
                    res  = true              
                }
            }
        if(res){
            $('.info').text('Wooho! You WIN!')
            $('.bloc').css('display', 'block')
                    clearInterval(interval)               
                    document.querySelector('#startb').disabled = false
                    $('.min').text('01')
                    $('.sec').text('00')
                    document.querySelector('.che').disabled = true
                    document.querySelector('#check').disabled = true            
        }else{
            $('.info').text('You loose, try again')
            $('.bloc').css('display', 'block')
                    $('.time').text('00')
                    clearInterval(interval)
                    document.querySelector('#check').disabled = true

                    document.querySelector('.che').disabled = true
                    document.querySelector('#startb').disabled = false
                    $('.min').text('01')
                    $('.sec').text('00')
        }
        document.querySelector('#startb').disabled = true
        $('.alert').css('display', 'block')
        $('.back').css('display', 'block')
        $('.alert').animate({
            top: 50,
            opacity: 1    
        }, 300)
    }



$('.che').on('click', function(){
    result()
})

$('.alert').css('left', (window.innerWidth - 400)/2)


