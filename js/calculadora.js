$(function() {

    var v1, v2, op;

    // função para quando clicar no botão
    $("button[name=btn]").click(function() {
        // aqui estou fazendo com que o value do input clicado apareça no visor result
        // e contatenando para que possa ser adicionado vários números ao mesmo tempo
        $("#result").val($("#result").val() + $(this).val());
    });

    // função btn ce (limpar tudo). mudando os valores para vazio
    $("button[name=ce]").click(function() {
        $("#result").val('');
        $("#op").text('');
    });

    

    //função soma
    $("button[name=soma]").click(function() {        
            // se o value do #result for diferente de "nada", efetue a soma 
            if ($("#result").val() != '') {
                v1 = parseFloat($("#result").val());
                // aqui torno o visor vazio quando pressionado o botão de operação
                $("#result").val('');
                // declaro a var op para essa operação em específico
                op = "soma"
                $("#op").text($(this).val());

                // se nenhum número tiver sido digitado quando clicarem na operação, alert:
            } else {
                alert('Insira um valor para efetuar a operação')
            }
    });

    // função subtração
    $("button[name=sub]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            // aqui torno o visor vazio quando pressionado o botão de operação
            $("#result").val('');
            // declaro a var op para essa operação em específico
            op = "sub"
            $("#op").text($(this).val());

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    // função multiplicação
    $("button[name=mult]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            // aqui torno o visor vazio quando pressionado o botão de operação
            $("#result").val('');
            // declaro a var op para essa operação em específico
            op = "mult"
            $("#op").text($(this).val());

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    // função divisão
    $("button[name=divi]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            // aqui torno o visor vazio quando pressionado o botão de operação
            $("#result").val('');
            // declaro a var op para essa operação em específico
            op = "divi"
            $("#op").text($(this).val());

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    //************************************************* Funções Extras para Calculadora Científica **************************************************/
    // função raiz quadrada
    $("button[name=raizq]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "raizq"
            $("#op").text($(this).val());

            if (op == "raizq") {
                $("#result").val(Math.sqrt(v1));
            }

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    // função raiz cúbica
    $("button[name=raizc]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "raizc"
            $("#op").text($(this).val());

            if (op == "raizc") {
                $("#result").val(Math.cbrt(v1));
            }

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    // função potência elevado 2
    $("button[name=pot2]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "pot2"
            $("#op").text($(this).val());

            if (op == "pot2") {
                $("#result").val(Math.pow(v1, 2));
            }

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    // função potência elevado 3
    $("button[name=pot3]").click(function() {
        // se o value do #result for diferente de "nada", efetue a soma 
        if ($("#result").val() != '') {
            v1 = parseFloat($("#result").val());
            $("#result").val('');
            op = "pot3"
            $("#op").text($(this).val());

            if (op == "pot3") {
                $("#result").val(Math.pow(v1, 3));
            }

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar a operação')
        }

    });

    //************************************************* Fim Calculadora Científica **************************************************/
    
    

    // função igual = resultado
    $("button[name=igual]").click(function() {
        if ($("#result").val() != '') {
            v2 = parseFloat($("#result").val());
            

            if (op == "soma") {
                $("#result").val(v1 + v2);
            }

            else if (op == "sub") {
                $("#result").val(v1 - v2);
            }

            else if (op == "mult") {
                $("#result").val(v1 * v2);
            }

            else if (op == "divi") {
                $("#result").val(v1 / v2);
            }

            // se nenhum número tiver sido digitado quando clicarem na operação, alert:
        } else {
            alert('Insira um valor para efetuar o calculo')
        }
        op = "igual"
        $("#op").text($(this).val());
    });

    // função para o botão c, backspace, que apaga os número de 1 em 1
    $("button[name=c]").click(function() {
        var len = $("#result").val().length;

        var valor = $("#result").val();

        // Aqui, pego a length e substituo o último número por vazio. -1 pois quero que comece a contar da posição 1 em vez de 0
        var valor = valor.replace(valor.charAt(len - 1), "");

        $("#result").val(valor);
    });

    
    $(".tog").hide();

    $("button[name=cient]").click(function() {
        $(".tog").toggle()

        // Por causa da disposição dos botões, aqui edito o tamanho do container para quando a científica esitver vísivel ou não
        if ($(".tog").is(":visible")) {
            $(".container").css({
                width: "630px"
            });
        } else {
            $(".container").css({
                width: "550px"
            });
        };
    });

});



