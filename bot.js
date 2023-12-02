const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if (message.body.toLocaleLowerCase() === 'oi') {
        client.sendMessage(message.from, 'Seja Bem Vindo! 😊 Meu nome é Fabi, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso ajudar?🌟\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento');
    }
    
    if (message.body.toLocaleLowerCase() === 'bom dia') {
        client.sendMessage(message.from, 'Seja Bem Vindo! 😊 Meu nome é Fabi, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso ajudar?🌟\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento');
    }
    
    if (message.body.toLocaleLowerCase() === 'boa tarde') {
        client.sendMessage(message.from, 'Seja Bem Vindo! 😊 Meu nome é Fabi, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso ajudar?🌟\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento');
    }
    
    if (message.body.toLocaleLowerCase() === 'boa noite') {
        client.sendMessage(message.from, 'Seja Bem Vindo! 😊 Meu nome é Fabi, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso ajudar?🌟\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento');
    }
    
    if (message.body.toLocaleLowerCase() === 'ola') {
        client.sendMessage(message.from, 'Seja Bem Vindo! 😊 Meu nome é Fabi, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso ajudar?🌟\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento');
    }
    
    if (message.body.toLocaleLowerCase() === '1') {
        client.sendMessage(message.from, 'Loja Fabrícia fica em Blumenau, Itoupava Norte, Rua: 2 de Setembro n 3649. 🏬\n\nAo lado da antiga empresa de ônibus da Glória defronte ao Banco do Brasil da Itoupava Norte. 🏦\n\nAo lado da lojinha Portal BAZAR de R$10. 😘');
    }
    
    if (message.body.toLocaleLowerCase() === '2') {
        client.sendMessage(message.from, 'Caso ainda não esteja cadastrada(o) junto ao sistema de crediário CREDILOJA, basta enviar fotos bem legíveis do seu CPF, RG, comprovantes de renda e residência. 😊');
        client.sendMessage(message.from, 'Caso seja autônoma(o), apenas informe a profissão e a data desde quando está nela.');
        client.sendMessage(message.from, 'Caso seja casada(o), também apenas preciso que me passe o nome completo do marido/esposa.');
        client.sendMessage(message.from, 'Caso não saiba se já é cadastrada(o), basta apenas me passar o número do seu CPF que já consulto para você, ok... 👍💋');
        client.sendMessage(message.from, '*Caso tenha restrição junto ao SPC, a venda no crediário fica bloqueada, ok...*');
    }
    
    if (message.body.toLocaleLowerCase() === '3') {
        client.sendMessage(message.from, 'Horário de Funcionamento:\nSegunda a Sexta das 8:30 às 18:00 hrs\nSábados das 8:30 às 17:00 hrs\n*Todos os dias sem fechar para o almoço.* 🕒🛍️');
        client.sendMessage(message.from, 'Venha fazer uma visitinha! Já estamos te esperando 🤗😘');
    }
}); 

client.initialize();
 