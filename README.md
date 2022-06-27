# Tech Talk Serverless

Esse projeto foi utilizado na [Tech Talk de Serverless](https://slides.com/rafaeldoering/tech-talk-serverless). Ele busca introduzir a arquitetura serverless com auxílio do serverless framework.

### Instalação e uso

***Pré-requisitos:***

Clone esse repositório:

```
git clone git@github.com:RafaelDoering/tech-talk-serverless.git
```

Instale os pacotes npm:

```
npm install
```

Distribua a aplicação:

```
serverless deploy
```

### Estrutura do projeto
    /tech-talk-serverless
    |--- node_modules/                            <-- gerada com o npm install
    |---/src
        |---/adapters
            |--- create-pix.js                    <-- handler do Lambda de criar pix
            |--- mercado-pago-payment-service.js  <-- serviço que comunica com a API de pagamentos do Mercado Pago
    |--- package.json                             <-- define os scripts e dependências
    |--- serverless.yml                           <-- define as configurações do serverless framework
