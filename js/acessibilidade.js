// Chamo pelo o id o icone do menu mobile
let menuMobile = document.getElementById("mobile-menu");

//função para quando o nav estiver a classe ativo o menu vai aparecer
function toggleMenu() {
    //chamo pelo o id o nav
    let nav = document.getElementById('nav');
    //adiciono uma classe para o nav
    nav.classList.toggle('active');
}
//adiciona uma nova li no #menu
$('#menu').append('<li id="box"> Solicite sua box </li>').css({
    color: "#0C4E8D",
    textAlign: "center",
});
// função será ativada quando clicar no icone do menu mobile 
menuMobile.addEventListener('click', toggleMenu);


//*****SOBRE NÓS ******/
// $('#card1').click(function(){
//     $('.caixaTexto').show().fadeToggle()
// })
// $('#card1').append("<div class= 'caixaTexto'><h4>Glenda</h4><p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil porro quis labore tenetur harum dignissimos illum quaerat asperiores magnam commodi, excepturi est. Commodi ea et reiciendis dignissimos, impedit quidem quis!</p></div>")

//*****ACESSIBILIDADE ******/

// função para aumentar e diminuir as fontes através do click do botão 
function fonte(e) {
    // pega todos os elementos html que possuam a class ".acess"
    var elemento = $(".acess");
    var fonte = elemento.css('font-size');
    // quando o parametro da função for 'a' a fonte dos elementos que possuem a class ".acess" serão aumentadas
    if (e == 'a') {
        // calculo para aumentar a fonte
        elemento.css("fontSize", parseInt(fonte) + 1);
    // quando o parametro da função for 'b' a fonte dos elementos que possuem a class ".acess" serão reduzidas
    } else if ('d') {
         // calculo para reduzir a fonte
        elemento.css("fontSize", parseInt(fonte) - 1);
    }
}