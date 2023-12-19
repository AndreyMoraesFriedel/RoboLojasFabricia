const qrcode = require('qrcode-terminal');


const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      headless: true,
      args: ["--no-sandbox"],
    },
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Client is ready!');
});

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

client.on('message', message => {
    const str = removerAcentos(message.body.toLowerCase());




    // Verificar se a mensagem é de um grupo
    if (message.author || message.fromMe || message.isForwarded || message.broadcast) {
        // Ignorar mensagens que são de grupos ou encaminhadas
        return;
    }




    // Possíveis saudações
    if (/oii/i.test(str) || /tudo bem?/i.test(str) || /bom dia/i.test(str) || /boa tarde/i.test(str) || /boa noite/i.test(str)) {
        client.sendMessage(message.from, 'Seja Bem Vindo! Meu nome é *Fabi*, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso te ajudar?\n\n*Lembramos que durante este Domingo dia 24 de Dezembro estaremos atendendo das 9:00 às 14:00 hrs*\n\nDigite o *numero* da opção🌟\n\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento\n4 - Possui Estacionamento?\n5 - Falar Conosco');
    }




    // Localização da Loja
    if (str == '1' || /onde fica/i.test(str) || /local/i.test(str) || /localização/i.test(str)) {
        client.sendMessage(message.from, 'Loja Fabrícia fica em Blumenau - SC, Rua 2 de Setembro n 3649. 🏬\n\nAo lado da antiga empresa de ônibus da Glória defronte ao Banco do Brasil da Itoupava Norte. 🏦\n\nAo lado da antiga loja quase tudo $10 (agora PORTAL) 😘');
    }




    // Crediário da Loja
    if (str == '2') {
        client.sendMessage(message.from, 'Você é cadastrado(a)? Digite o *numero* da opção🌟\n\n6 - Sou Cadastrado(a)\n7 - Não sei ou Não sou Cadastrado(a)');
    }




    if (str == '6' || /pagar a conta/i.test(str) || /tenho crediario/i.test(str)) {
        client.sendMessage(message.from, 'Digite seu número de CPF:');
    }




    if (str == '7' || /fazer o crediario/i.test(str) || /faço o crediario/i.test(str) || /funciona o crediario/i.test(str)) {
        client.sendMessage(message.from, 'Caso ainda não seja cadastrada(o) junto ao sistema de crediário *CREDILOJA*, basta enviar fotos bem legíveis do seu CPF, RG, comprovantes de renda e residência. 😊');
        client.sendMessage(message.from, 'Caso seja *autônoma(o)*, apenas informe a profissão e a data desde quando está nela.');
        client.sendMessage(message.from, 'Caso seja *casada(o)*, também apenas preciso que me passe o nome completo do marido/esposa.');
        client.sendMessage(message.from, 'Caso não saiba se já é cadastrada(o), basta apenas me passar o número do seu CPF que já consulto para você, ok... 👍');
        client.sendMessage(message.from, '*Caso tenha restrição junto ao SPC, a venda no crediário fica bloqueada, até que consiga solucionar esta situação...*');
    }




    // Horario da Loja
    if (str == '3' || /horas/i.test(str) || /horario/i.test(str)) {
        client.sendMessage(message.from, 'Horário de Funcionamento:\n\nSegunda a Sexta das 8:30 às 18:00 hrs\nSábados das 9:00 às 17:00 hrs\nDomingo das 9:00 às 14:00 hrs\n\n*Todos os dias sem fechar para o almoço.* 🕒🛍️');
        client.sendMessage(message.from, 'Venha apenas nos fazer uma visitinha! Já estamos te esperando 🤗😘');
    }




    // Estacionamento da Loja
    if (str == '4' || /estacionamento/i.test(str)) {
        client.sendMessage(message.from, '*Sim  !!!* Pode estacionar em qualquer vaga defronte ao prédio, pois as mesmas são públicas.🤗👍');
    }




    // Opção 'Falar Conosco'
    if (str == '5') {
        client.sendMessage(message.from, 'Olá amiga(o), responderemos sua mensagem assim que possível.🤗👍');
    }


});


client.initialize();
 
