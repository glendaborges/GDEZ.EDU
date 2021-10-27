const fields = document.querySelectorAll("[required]")


function ValidateField(field) {
    // logica para verificar se existem erros
    var cpfValid = isValidCPF();
    var dataValid = isValidData();
    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            // se não for customError
            // então verifica se   tem erro
            if (field.validity[error] && !field.validity.valid) {
                foundError = error;


            }


        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Preencha este campo"
            },
            number: {
                valueMissing: "Preencha este campo"
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")

        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
        } else {
            spanError.classList.remove("active")
            spanError.innerHTML = ""
        }
    }

    return function () {

        const error = verifyErrors()


        if (error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)

        } else if (!cpfValid && field == document.forms[0].cpf) {
            field.style.borderColor = "red"
            setCustomMessage("Informe um CPF válido");

        } else if (!dataValid && field == document.forms[0].date) {
            field.style.borderColor = "red"
            setCustomMessage("Informe uma data válida");
        }

        else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}


function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for (field of fields) {
    field.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}



// ************ script para a aparição do modal popup ***************

//Criei uma função que chama meu modal-PopUP
function modalPopup(popupID) { //Estou passando um parâmetro qualquer
    //seleção da id do popup
    const popupModal = document.getElementById(popupID);
    console.log(popupModal); // É esperado que exiba no console a div que estou chamando na função
    popupModal.classList.add('mostrar');
    // adicionando o evento de saida do popup
    popupModal.addEventListener("click", (e) => {
        //caso eu queira saber se está dando certo, adiciono console.log("string qualquer")
        // o parâmetro evento(e) mostra o que tá rolando
        if (e.target.id == popupID || e.target.className == "btn-closed") {
            popupModal.classList.remove("mostrar");
        }
    })
}

const cac = document.querySelector("#btn");
cac.addEventListener("click", () => modalPopup('modal-promocao')); //ativando a função, passando o parâmetro do id do popup);

// **********  função para apresentar o cpf e a o email como login e senha  *************************

var res = document.querySelector(".clientname");
var res2 = document.querySelector(".login");
var res3 = document.querySelector(".password");
var ClientNome = '';
var Clientlogin = '';
var Clientsenha = '';
var botao = document.querySelector("#btn");
botao.onclick = function () {
    ClientNome = document.querySelector("#nome").value;
    res.innerHTML = ClientNome

    Clientlogin = document.querySelector("#email").value;
    res2.innerHTML = Clientlogin

    Clientsenha = document.querySelector("#cpf").value;
    res3.innerHTML = Clientsenha

}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('logradouro').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('localidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('logradouro').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('localidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);

    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('logradouro').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('localidade').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

// ************************************************* Validação da data de nascimento *****************



function isValidData() {
    let inputNasc = document.getElementById("date");
    console.log(inputNasc);
    //obter array com [ano,mes,dia] através de split("-") e convertendo em numero com Map
    let nasc = inputNasc.value.split("-").map(Number);
    //construir data 18 anos a seguir a data dada pelo usuario
    let depois130Anos = new Date(nasc[0]+130, nasc[1]-1, nasc[2]);
    console.log(depois130Anos);
    let agora = new Date();
    console.log(agora);

    if (depois130Anos <= agora) {
        return true;
    }
    else {
        return false;
    }


};


// ************************************************* Validação do CPF *****************

function isValidCPF() {
    let cpf = document.getElementById("cpf").value;
    console.log(cpf);
    // Verificar se o 
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false
    }
    // Validar se é String
    if (typeof cpf !== 'string') return false

    // Tirar formatação
    cpf = cpf.replace(/[^\d]+/g, '')

    // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

    // String para Array
    cpf = cpf.split('')

    const validator = cpf
        // Pegar os últimos 2 digitos de validação
        .filter((digit, index, array) => index >= array.length - 2 && digit)
        // Transformar digitos em números
        .map(el => +el)

    const toValidate = pop => cpf
        // Pegar Array de items para validar
        .filter((digit, index, array) => index < array.length - pop && digit)
        // Transformar digitos em números
        .map(el => +el)

    const rest = (count, pop) => (toValidate(pop)
        // Calcular Soma dos digitos e multiplicar por 10
        .reduce((soma, el, i) => soma + el * (count - i), 0) * 10)
        // Pegar o resto por 11
        % 11
        // transformar de 10 para 0
        % 10
    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
}


