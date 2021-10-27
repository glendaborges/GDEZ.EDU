const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
    //Aqui estou fazendo um loop para que quando chegar na última imagem do carrossel volte para a primeira
    if(idx > img.length - 1){
        idx = 0;
    }
    //Aqui tô chamando o style, transformando para que as imagens volte de trás pra frente também
    imgs.style.transform = `translateX(${-idx * 475}px)`
}

setInterval(carrossel, 4000);

$(document).ready(function(){

    $("#inst1").click(function(){
        $("#inst1").attr('src', 'img/inst-maisBig.png');
        
        $("#inst1").click(function(){
            $("#inst1").attr('src', 'img/inst-mais.png');
        })
    })
});

$(document).ready(function(){

    $("#inst2").click(function(){
        $("#inst2").attr('src', 'img/inst-menosBig.png');
        
        $("#inst2").click(function(){
            $("#inst2").attr('src', 'img/inst-menos.png');
        })
    })
});

$(document).ready(function(){

    $("#inst3").click(function(){
        $("#inst3").attr('src', 'img/inst-vezesBig.png');
        
        $("#inst3").click(function(){
            $("#inst3").attr('src', 'img/inst-vezes.png');
        })
    })
});

$(document).ready(function(){

    $("#inst4").click(function(){
        $("#inst4").attr('src', 'img/inst-diviBig.png');
        
        $("#inst4").click(function(){
            $("#inst4").attr('src', 'img/inst-divi.png');
        })
    })
});

