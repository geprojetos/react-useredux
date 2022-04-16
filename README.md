# React useReducer

Esse projeto foi criado para mostrar um exemplo bem simples do uso do hook do react useReducer que você pode conferir na [documentação oficial do react](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer) para mais detalhes.

## Acessando o projeto

- como o projeto foi criado pelo codesandbox ver o código e fazer alterações [acessando essa url](https://codesandbox.io/s/github/geprojetos/react-useredux?file=/src/App.tsx).
- ou caso queira ver apenas o projeto pode acessar diretamente [acessando essa url](https://5vfrmd.csb.app/).

## Entendendo a separação de pastas

A parte importante onde devemos focar é a seguinte:

```
counter/
├── actions/
│   ├── increment.ts
│   ├── decrement.ts
│   ├── multiplier.ts
│   ├── divisor.ts
│   ├── reset.ts
│   ├── types.ts
│   └── index.ts
│
├── counterReducer.ts
└── index.tsx
```

- o arquivo `counter -> index.tsx` é onde importamos o useReducer e colocamos os botões com as suas ações.
- o arquivo `counter -> counterReducer.ts` é onde iniciamos o estado da nossa aplicação criamos a função reducer que vai manipular o estado pelas nossas actions.
- o arquivo `actions -> index.ts` é onde exportamos tudo o que temos dentro de `actions`
- o arquivo `actions -> types.ts` é onde colocamos todas as actions que nosso component `counter` vai utilizar
- o arquivo `actions -> reset.ts` é onde manipulamos o reset.
- o arquivo `actions -> divisor.ts` é onde manipulamos a divisão.
- o arquivo `actions -> multiplier.ts` é onde manipulamos a multiplicação.
- o arquivo `actions -> decrement.ts` é onde manipulamos a subtração.
- o arquivo `actions -> increment.ts` é onde manipulamos a adição.

Dessa forma temos o arquivo `counterReducer` que recebe uma ação disparada pela aplicação e a regra para essa ação fica em um arquivo seperado dessa forma conseguimos seperar bem cada regra da nossa aplicação.

Essa é uma abordagem interessante quando estamos estamos lidando com muitos `state` em nossa aplicação, cabe ao desenvolvedor saber qual melhor cenário para usar.

Deixo aqui mais uma vez o link da [documentação oficial do react](https://pt-br.reactjs.org/docs/hooks-reference.html#usereducer).
