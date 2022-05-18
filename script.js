
function carregar(){
   var mensagem = window.document.getElementById("msg");//recebe a mensagem da hora
   var imagem = window.document.getElementById("imagem");//recebe a imagem correspondente

   var pegaInputNum = window.document.getElementById("idNum"); // recebe o número digitado
   var pegaInputButton = window.document.getElementById("idButton");//recebe o chamado do botão

   var hora = Number(idNum.value); //recebe o número digitado

   mensagem.innerHTML = ` Agora são ${hora} horas `; //retorna o valor digitado na tela
 
   //Condições para mudar as imagens
   if(hora > 0 && hora < 12){
       
        imagem.src = "img/manha.png";
        document.body.style.backgroundImage = "url('img/manha1.jpg')";//Chamando o CSS através do DOM
        document.body.style.backgroundRepeat = "no-repeat";//Chamando o CSS através do DOM
        document.body.style.backgroundSize = "cover"; //Expandindo a imagem dentro da div
        document.body.style.height ="100vh"; //Colocando a imagem  com a altura da viewport
        mensagem.innerHTML = ` Agora são ${hora}h da manhã `;

        //document.body.style.background = "#e2cd9f";

   }else if(hora >= 12 && hora <= 18){
        imagem.src = "img/tarde.png";
        document.body.style.backgroundImage = "url('img/tarde1.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover"; 
        document.body.style.height ="100vh"; //Colocando a imagem do tamanho da viewport
        mensagem.innerHTML = ` Agora são ${hora}h da tarde`;

      // document.body.style.background = "#b9846f";

   }else if( hora > 18 && hora < 24 || hora === 0){
        imagem.src="img/noite.png";
        document.body.style.backgroundImage = "url('img/noite1.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.height ="100vh"; //Colocando a imagem do tamanho da viewport
        mensagem.innerHTML = ` Agora são ${hora}h da noite`;
       // document.body.style.background = "black";
   }
   else{
    mensagem.innerHTML = ` Está hora está incorreta! `;
    document.body.style.background = "red";
   }

}
   //var hora = data.getHours(); // recebe a hora atual
  // var hora = 1; //Para fazer o teste da hora
   //mensagem.innerHTML = ` Agora são ${hora} horas `;
// var data = new Date(); //recebe a data
  // var hora = data.getHours();