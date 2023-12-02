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
        client.sendMessage(message.from, 'Seja Bem Vindo! Meu nome é *Fabi*, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso te ajudar? Digite o *numero* da opção🌟\n\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento\n4 - Possui Estacionamento?\n5 - Falar Conosco');
    }
   
    if (message.body.toLocaleLowerCase() === 'bom dia') {
        client.sendMessage(message.from, 'Seja Bem Vindo! Meu nome é *Fabi* sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso te ajudar? Digite o *numero* da opção🌟\n\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento\n4 - Possui Estacionamento?\n5 - Falar Conosco');
    }
   
    if (message.body.toLocaleLowerCase() === 'boa tarde') {
        client.sendMessage(message.from, 'Seja Bem Vindo! Meu nome é *Fabi* sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso te ajudar? Digite o *numero* da opção🌟\n\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento\n4 - Possui Estacionamento?\n5 - Falar Conosco');
    }
   
    if (message.body.toLocaleLowerCase() === 'boa noite') {
        client.sendMessage(message.from, 'Seja Bem Vindo! Meu nome é *Fabi*, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso te ajudar? Digite o *numero* da opção🌟\n\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento\n4 - Possui Estacionamento?\n5 - Falar Conosco');
    }
   
    if (message.body.toLocaleLowerCase() === 'ola') {
        client.sendMessage(message.from, 'Seja Bem Vindo! Meu nome é *Fabi*, sua assistente virtual da Lojas Fabricia. 🙋‍♀️');
        client.sendMessage(message.from, 'Como posso te ajudar? Digite o *numero* da opção🌟\n\n1 - Endereço da Loja\n2 - Crediário\n3 - Horário De Funcionamento\n4 - Possui Estacionamento?\n5 - Falar Conosco');
    }
   
    if (message.body.toLocaleLowerCase() === '1') {
        client.sendMessage(message.from, 'Loja Fabrícia fica em Blumenau - SC, Rua 2 de Setembro n 3649. 🏬\n\nAo lado da antiga empresa de ônibus da Glória defronte ao Banco do Brasil da Itoupava Norte. 🏦\n\nAo lado da lojinha Portal BAZAR de $ 10 20 ... 😘');
    }
   
    if (message.body.toLocaleLowerCase() === '2') {
        client.sendMessage(message.from, 'Caso ainda não seja cadastrada(o) junto ao sistema de crediário *CREDILOJA*, basta enviar fotos bem legíveis do seu CPF, RG, comprovantes de renda e residência. 😊');
        client.sendMessage(message.from, 'Caso seja *autônoma(o)*, apenas informe a profissão e a data desde quando está nela.');
        client.sendMessage(message.from, 'Caso seja *casada(o)*, também apenas preciso que me passe o nome completo do marido/esposa.');
        client.sendMessage(message.from, 'Caso não saiba se já é cadastrada(o), basta apenas me passar o número do seu CPF que já consulto para você, ok... 👍');
        client.sendMessage(message.from, '*Caso tenha restrição junto ao SPC, a venda no crediário fica bloqueada, até que consiga solucionar esta situação...*');
    }
   
    if (message.body.toLocaleLowerCase() === '3') {
        client.sendMessage(message.from, 'Horário de Funcionamento:\n\nSegunda a Sexta das 8:30 às 18:00 hrs\nSábados das 8:30 às 17:00 hrs\n\n*Todos os dias sem fechar para o almoço.* 🕒🛍️');
        client.sendMessage(message.from, 'Venha apenas nos fazer uma visitinha! Já estamos te esperando 🤗😘');
    }


    if (message.body.toLocaleLowerCase() === '4') {
        client.sendMessage(message.from, '*Sim  !!!* Pode estacionar em qualquer vaga defronte ao prédio, pois as mesmas são públicas.🤗👍');
    }


    if (message.body.toLocaleLowerCase() === '5') {
        client.sendMessage(message.from, 'Ola amiga(o), responderemos sua mensagem assim que possível.🤗👍');
    }
}); 

client.initialize();
 