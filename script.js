// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-kenzo';

// ### Criando o cliete MQTT do navegador, POREM ainda não estamos conectados ao BROKER
const cliente = mqtt.connect(MQTT_URL, {
    clienteId,
    clean: true,
    connectTimeout: 4000,
});

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


// ### chamando um evento de JS do tipo "DOMContentLoaded", que é o evento
// que acontece após toda a minha página de HTML ser carregada
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso ✅... Conectado ao Mosquitto")

    // ### Estabelecendo a conexão com o broker MQRR
    cliente.on("connect", () => {
        console.log("Conexão estabelecida com sucesso ✅!");
        console.log("Cliente conectado: ", clienteId);

        // ### criando um tópico para acessar mensagens do MQTT
        const topicoTeste = 'teste/kenzo';

        // ### recebendo mensagens do topico criado
        cliente.subscribe(topicoTeste);
    });

    // ### Preparando mensagem de errro caso algo aconteça
    cliente.on("error", () => {
        console.error("Erro ao conectar ao Broker MQTT ❌");
        console.error(erro);
    });

    // ### Recebend as mensagens dos tópicos assinados no MQTT pelo cliente
    cliente.on("message", (topico, mensagem) => {
        console.log("Topico recebido: ", topico);
        console.log("Mensagem recebida: ", mensagem.toString());
    });

    // ##### alterando estados dos dispositivos
    // pegando o evento de mudança do botão (ligado/desligado)
    // ###### SALA
    lampSalaInput.addEventListener("change", () => {
        const TOPICO_LAMP_SALA = 'casa-kenzo/sala/lamp';


        // Verifica se o botão está como ligado
        const ligado = lampSalaInput.checked === true;

        if (ligado === true) {
            // console.log("Lâmpada ligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Ligado');
            lampSalaTexto.innerHTML = "Ligado"
        } else {
            // console.log("Lâmpada desligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Desligado');
            lampSalaTexto.innerHTML = "Desligado"
        }
    });

    cortSalaInput.addEventListener("change", () => {
        const TOPICO_CORT_SALA = 'casa-kenzo/sala/cort';

        const ligado2 = cortSalaInput.checked === true;

        if (ligado2 === true) {
            // console.log("Cortina aberta");
            cliente.publish(TOPICO_CORT_SALA, 'Ligado');
            cortSalaTexto.innerHTML = "Aberta"
        } else {
            // console.log("Cortina fechada")
            cliente.publish(TOPICO_CORT_SALA, 'Desligado');
            cortSalaTexto.innerHTML = "Fechada"
        }
    });

    portSalaInput.addEventListener("change", () => {
        const TOPICO_PORT_SALA = 'casa-kenzo/sala/port';

        const ligado3 = portSalaInput.checked === true;

        if (ligado3 === true) {
            // console.log("Porta aberta");
            cliente.publish(TOPICO_PORT_SALA, 'Aberta');
            portSalaTexto.innerHTML = "Aberta"
        } else {
            // console.log("Porta fechada");
            cliente.publish(TOPICO_PORT_SALA, 'Fechada');
            portSalaTexto.innerHTML = "Fechada"
        }
    });

    // ###### COZINHA
    lampCozinhaInput.addEventListener("change", () => {
        const TOPICO_LAMP_COZINHA = 'casa-kenzo/cozinha/lamp';

        const ligado4 = lampCozinhaInput.checked === true;

        if (ligado4 === true) {
            // console.log("Lâmpada ligada")
            cliente.publish(TOPICO_LAMP_COZINHA, 'Ligada');
            lampCozinhaTexto.innerHTML = "Ligada"
        } else {
            // console.log("Lâmpada desligada");
            cliente.publish(TOPICO_LAMP_COZINHA, 'Desligada');
            lampCozinhaTexto.innerHTML = "Desligada"
        }
    });

    exausCozinhaInput.addEventListener("change", () => {
        const TOPICO_EXAUS_COZINHA = 'casa-kenzo/cozinha/exaus'

        const ligado5 = exausCozinhaInput.checked === true

        if (ligado5 === true) {
            // console.log("Exaustor ligado");
            cliente.publish(TOPICO_EXAUS_COZINHA, 'Ligado');
            exausCozinhaTexto.innerHTML = "Ligado"
        } else {
            // console.log("Exaustor desligado");
            cliente.publish(TOPICO_EXAUS_COZINHA, 'Desligado');
            exausCozinhaTexto.innerHTML = "Desligado"
        }
    });

    // ####### VARANDA/GARAGEM
    varVarandaInput.addEventListener("change", () => {
        const TOPICO_VAR_VARANDA = 'casa-kenzo/varanda/var'

        const ligado = varVarandaInput.checked === true

        if (ligado === true) {
            // console.log("Varal aberto");
            cliente.publish(TOPICO_VAR_VARANDA, 'Aberto');
            varVarandaTexto.innerHTML = "Aberto"
        } else {
            // console.log("Varal fechado");
            cliente.publish(TOPICO_VAR_VARANDA, 'Fechado');
            varVarandaTexto.innerHTML = "Fechado"
        }
    });

    irVarandaInput.addEventListener("change", () => {
        const TOPICO_IR_VARANDA = 'casa-kenzo/varanda/ir'

        const ligado = irVarandaInput.checked === true

        if (ligado === true) {
            // console.log("Irrigador ligado");
            cliente.publish(TOPICO_IR_VARANDA, 'Ligado');
            irVarandaTexto.innerHTML = "Ligado"
        } else {
            // console.log("Irrigador desligado");
            cliente.publish(TOPICO_IR_VARANDA, 'Desligado');
            irVarandaTexto.innerHTML = "Desligado"
        }
    });

    lampVarandaInput.addEventListener("change", () => {
        const TOPICO_LAMP_VARANDA = 'casa-kenzo/varanda/lamp'

        const ligado = lampVarandaInput.checked === true

        if (ligado === true) {
            // console.log("Lâmpada ligada");
            cliente.publish(TOPICO_LAMP_VARANDA, 'Ligada');
            lampVarandaTexto.innerHTML = "Ligada"
        } else {
            // console.log("Lâmpada desligada");
            cliente.publish(TOPICO_LAMP_VARANDA, 'Desligada');
            lampVarandaTexto.innerHTML = "Desligada"
        }
    });

    portVarandaInput.addEventListener("change", () => {
        const TOPICO_PORT_VARANDA = 'casa-kenzo/varanda/port'

        const ligado = portVarandaInput.checked === true

        if (ligado === true) {
            // console.log("Porta aberta");
            cliente.publish(TOPICO_PORT_VARANDA, 'Aberta');
            portVarandaTexto.innerHTML = "Aberta"
        } else {
            // console.log("Porta fechada");
            cliente.publish(TOPICO_PORT_VARANDA, 'Fechada');
            portVarandaTexto.innerHTML = "Fechada"
        }
    });

});