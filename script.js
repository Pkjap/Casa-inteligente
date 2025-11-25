// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-kenzo';

// ### Criando o cliete MQTT do navegador, POREM ainda não estamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, {
//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// });

// ####### Variaveis do dispositivo
const lampSalaInput = document.getElementById("lamp-sala");
const lampSalaTexto = document.getElementById("lamp-sala-texto");

const cortSalaInput = document.getElementById("cort-sala");
const cortSalaTexto = document.getElementById("cort-sala-texto");

const portSalaInput = document.getElementById("port-sala");
const portSalaTexto = document.getElementById("port-sala-texto");

const lampCozinhaInput = document.getElementById("lamp-cozinha");
const lampCozinhaTexto = document.getElementById("lamp-cozinha-texto");

const exausCozinhaInput = document.getElementById("exaus-cozinha");
const exausCozinhaTexto = document.getElementById("exaus-cozinha-texto");

const varVarandaInput = document.getElementById("var-varanda");
const varVarandaTexto = document.getElementById("var-varanda-texto");

const irVarandaInput = document.getElementById("ir-varanda");
const irVarandaTexto = document.getElementById("ir-varanda-texto");

const lampVarandaInput = document.getElementById("lamp-varanda");
const lampVarandaTexto = document.getElementById("lamp-varanda-texto");

const portVarandaInput = document.getElementById("port-varanda");
const portVarandaTexto = document.getElementById("port-varanda-texto")

// ##### alterando estados dos dispositivos

// pegando o evento de mudança do botão (ligado/desligado)
// ###### SALA
lampSalaInput.addEventListener("change", () => {
    // Verifica se o botão está como ligado
    const ligado = lampSalaInput.checked === true;

    if (ligado === true){
        console.log("Lâmpada ligada");
        lampSalaTexto.innerHTML = "Ligado"
    } else {
        console.log("Lâmpada desligada");
        lampSalaTexto.innerHTML = "Desligado"
    }
});

cortSalaInput.addEventListener("change", () => {
    const ligado2 = cortSalaInput.checked === true;

    if (ligado2 === true){
        console.log("Cortina aberta");
        cortSalaTexto.innerHTML = "Aberta"
    } else {
        console.log("Cortina fechada")
        cortSalaTexto.innerHTML = "Fechada"
    }
});

portSalaInput.addEventListener("change", () => {
    const ligado3 = portSalaInput.checked === true;

    if (ligado3 === true){
        console.log("Porta aberta");
        portSalaTexto.innerHTML = "Aberta"
    } else {
        console.log("Porta fechada");
        portSalaTexto.innerHTML = "Fechada"
    }
});

// ###### COZINHA
lampCozinhaInput.addEventListener("change", () => {
    const ligado4 = lampCozinhaInput.checked === true;

    if (ligado4 === true){
        console.log("Lâmpada ligada")
        lampCozinhaTexto.innerHTML = "Ligada"
    } else {
        console.log("Lâmpada desligada");
        lampCozinhaTexto.innerHTML = "Desligada"
    }
});

exausCozinhaInput.addEventListener("change", () => {
    const ligado5 = exausCozinhaInput.checked === true

    if (ligado5 === true){
        console.log("Exaustor ligado");
        exausCozinhaTexto.innerHTML = "Ligado"
    } else {
        console.log("Exaustor desligado");
        exausCozinhaTexto.innerHTML = "Desligado"
    }
});

// ####### VARANDA/GARAGEM
varVarandaInput.addEventListener("change", () => {
    const ligado = varVarandaInput.checked === true

    if (ligado === true){
        console.log("Varal aberto");
        varVarandaTexto.innerHTML = "Aberto"
    } else {
        console.log("Varal fechado");
        varVarandaTexto.innerHTML = "Fechado"
    }
});

irVarandaInput.addEventListener("change", () => {
    const ligado = irVarandaInput.checked === true

    if (ligado === true){
        console.log("Irrigador ligado");
        irVarandaTexto.innerHTML = "Ligado"
    } else {
        console.log("Irrigador desligado");
        irVarandaTexto.innerHTML = "Desligado"
    }
});

lampVarandaInput.addEventListener("change", () => {
    const ligado = lampVarandaInput.checked === true

    if (ligado === true){
        console.log("Lâmpada ligada");
        lampVarandaTexto.innerHTML = "Ligada"
    }else {
        console.log ("Lâmpada desligada");
        lampVarandaTexto.innerHTML = "Desligada"
    }
});

portVarandaInput.addEventListener("change", () => {
    const ligado = portVarandaInput.checked === true

    if (ligado === true){
        console.log("Porta aberta");
        portVarandaTexto.innerHTML = "Aberta"
    } else {
        console.log("Porta fechada");
        portVarandaTexto.innerHTML = "Fechada"
    }
});
// ### chamando um evento de JS do tipo "DOMContentLoaded", que é o evento
// que acontece após toda a minha página de HTML ser carregada
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso ✅... Conectado ao Mosquitto")

//     // ### Estabelecendo a conexão com o broker MQRR
//     cliente.on("connect", () => {
//         console.log("Conexão estabelecida com sucesso ✅!");
//         console.log("Cliente conectado: ", clienteId);

//         // ### criando um tópico para acessar mensagens do MQTT
//         const topicoTeste = 'teste/kenzo';

//         // ### recebendo mensagens do topico criado
//         cliente.subscribe(topicoTeste);
//     });

//     // ### Preparando mensagem de errro caso algo aconteça
//     cliente.on("error", () => {
//         console.error("Erro ao conectar ao Broker MQTT ❌");
//         console.error(erro);
//         });

//     // ### Recebend as mensagens dos tópicos assinados no MQTT pelo cliente
//     cliente.on("message", (topico, mensagem) => {
//         console.log("Topico recebido: ", topico);
//         console.log("Mensagem recebida: ", mensagem);
//     });
// });