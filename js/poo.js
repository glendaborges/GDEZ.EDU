
class Pedido{

    //definição dos atributos da classe
    constructor(){
        this.id = 1;
        this.box = "";
        this.nomeFilho = "";
        this.plano = "";
        this.mensagem = "";
        this.preco = 0;
        this.arrayBox = [];

        //propriedade para testar qual método deve ser executado pelo botão btn1
        this.testeBtn = 0;
    }

    //após ler os dados dos inputs, os valida, salva e limpa os input
    salvar(){
        let pedido = this.lerDados();

        //chamamos o método para validar o conteúdo dos inputs (somente verificou inputs vazios)
        if(this.validarCampos(pedido)){
            if(this.testeBtn == 0){
                this.adicionar(pedido);
            }else {
                this.atualizar(this.testeBtn);
            }
            this.listarDados();
            this.limpar();
        }        
    }

    //exibe na tabela os pedidos (e seuss atributos) salvos
    listarDados(){
        
        // declaração de uma variável para referenciar o tbody da tabela
        let tbody = document.getElementById("tbody");

        // limpar a tabela antes de ser mostrada 
        tbody.innerText = "";

        //loop para percorrer o array de pedidos
        for(let i = 0; i< this.arrayBox.length; i++){

            // inserir um nova linha no tbody
            let novaLinha = tbody.insertRow();

            // criar cada coluna(célula) de cada linha
            let td_acoes = novaLinha.insertCell();
            let td_nomeFilho = novaLinha.insertCell();
            let td_box = novaLinha.insertCell();
            let td_plano = novaLinha.insertCell();
            let td_mensagem = novaLinha.insertCell();
            let td_preco = novaLinha.insertCell();

            //alimentar as células
            td_nomeFilho.innerText = this.arrayBox[i].nomeFilho;
            td_box.innerText = this.arrayBox[i].box;
            td_plano.innerText = this.arrayBox[i].plano;
            td_mensagem.innerText = this.arrayBox[i].mensagem;
            td_preco.innerText = this.arrayBox[i].preco;

            //adiciona classe para centralizar ações na tabela
            td_acoes.classList.add("center");
            // criando um elemento de imagem para ser colocado na primeira da linha
            let imgEdit = document.createElement("img");

            // atribuindo a esse elemento o caminho
            imgEdit.src = "img/editar.png";
            
            //adicionando um filho para a primeira coluna
            td_acoes.appendChild(imgEdit);

            // criando um elemento de imagem para ser colocado na primeira coluna da linha
            let imgDelete = document.createElement("img");

            // atribuindo a esse elemento o caminho
            imgDelete.src = "img/delete.png";
          

            //adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgDelete);

            //atribuir um método para imgDelete através do setAttribute como os parâmetros: ("evento", método)
            imgDelete.setAttribute("onclick","pedido.deletar("+this.arrayBox[i].id+")");
            
            //atribuir um método para mostrar os dados do pedido selecionado para posterior edição (evento, método)
            imgEdit.setAttribute("onclick","pedido.mostrarDados("+JSON.stringify(this.arrayBox[i])+")");
        } 
    }

    //adiciona(empurra) o pedido ao array e incrementa em 1 o id
    adicionar(pedido){
        this.arrayBox.push(pedido);
        this.id++;
    }

    //método para limpar os inputs
    limpar(){
        var seletorLimpo = document.getElementsByName("selecBox")
        for(let i=0;i<seletorLimpo.length;i++){
            seletorLimpo[i].checked = false;
        }
        document.getElementById("nomeFilho").value = "";
        document.getElementById("plano").value = "";
        document.getElementById("mensagem").value = "";
    }

    //cruza condições de plano e box para calcular o valor do pedido.
    calcularPreco(box , plano){

        //valores
        let valor1 = "50";
        let valor2 = "135";
        let valor3 = "500";
        let valor4 = "60";
        let valor5 = "160";
        let valor6 = "600";
        let valor7 = "70";
        let valor8 = "190";
        let valor9 = "700";

        //ifs para detectar box e plano para definir valor do pedido
        if (box == "Box 1"){
            if (plano == "Mensal"){
                return valor1;
            }else if(plano == "Trimestral"){
                return valor2;
            }else{
                return valor3;
            }
        }else if(box == "Box 2"){
            if (plano == "Mensal"){
                return valor4;
            }else if(plano == "Trimestral"){
                return valor5;
            }else{
                return valor6;
            }
        }else{
            if (plano == "Mensal"){
                return valor7;
            }else if(plano == "Trimestral"){
                return valor8;
            }else{
                return valor9;
            }
        }

    }

    //capturar o que foi digitado pelo usuário nos inputs
    lerDados(){
        let pedido = new Pedido();

        pedido.id = this.id;        
        
        let seletorBox = document.getElementsByName("selecBox")
        for(let i=0;i<seletorBox.length;i++){
            if (seletorBox[i].checked){
                pedido.box = seletorBox[i].value;
            }
        }

        pedido.nomeFilho = document.getElementById("nomeFilho").value;
        pedido.plano = document.getElementById("plano").value;
        pedido.mensagem = document.getElementById("mensagem").value;
        pedido.preco = this.calcularPreco(pedido.box , pedido.plano );
        
        return pedido;
    }



    //validação dos conteúdos dos inputs (impedindo input vazio)
    validarCampos(pedido){
        let msg = "";

        //validação radio
        let soma = false;
        let seletor = document.getElementsByName("selecBox")
        for(let i=0;i<seletor.length;i++){
            soma = (soma || seletor[i].checked);
        }
        if (!soma){
            msg += "Selecione uma box \n";
        }

        //validação nome filho
        if(pedido.nomeFilho == ""){
            msg += "Informe o nome do seu filho \n";
        }

        //validação plano
        if(pedido.plano == ""){
            msg += "Informe o plano desejado \n"
        }

        //validação mensagem
        if(pedido.mensagem == ""){
            msg += "Informe detalhes sobre seu filho \n"
        }

        if(msg != ""){
            alert(msg);
            return false;
        }
        return true;
    }

    //deleta pedido do array com confirmação em caixa de texto popup padrão
    deletar(idProcurado){
        if(confirm("Deseja realmente deletar o " + idProcurado + "° pedido?"))
        {
            for(let i = 0; i<this.arrayBox.length; i++){
                if(this.arrayBox[i].id == idProcurado){
                    this.arrayBox.splice(i,1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

    //mostrar as propriedades dos pedidos nos inputs ao clicar em editar
    mostrarDados(dados) {
        
        let seletor = document.getElementsByName("selecBox")
        for(let i=0;i<seletor.length;i++){
            if (seletor[i].value == dados.box){
                seletor[i].checked = true;
            }            
        }

        document.getElementById("nomeFilho").value = dados.nomeFilho;
        document.getElementById("plano").value = dados.plano;
        document.getElementById("mensagem").value = dados.mensagem;
        //modificar o texto do botão "Salvar"
        document.getElementById("btn1").innerText = "Atualizar";

        this.testeBtn = dados.id;
    }

    //salva as alterações feitas nos inputs no item do array de pedidos
    atualizar(id){
        for(let i=0; i<this.arrayBox.length; i++){
            if(id == this.arrayBox[i].id){
                let seletor = document.getElementsByName("selecBox")
                for(let j=0;j<seletor.length;j++){
                    if (seletor[j].checked == true){
                        this.arrayBox[i].box = seletor[j].value;
                    }            
                }
                this.arrayBox[i].nomeFilho = document.getElementById("nomeFilho").value;
                this.arrayBox[i].plano = document.getElementById("plano").value;
                this.arrayBox[i].mensagem = document.getElementById("mensagem").value;
                this.arrayBox[i].preco = this.calcularPreco( this.arrayBox[i].box , this.arrayBox[i].plano);
            }
        }
        document.getElementById("btn1").innerText = "Salvar";
        this.testeBtn = 0;
    }
}
var pedido = new Pedido();

//função executada ao clicar no botão prosseguir que levará à pag de formulário
function abrirFormulario(){
    let url = 'register.html';
    window.open(url, "_blank");
}