<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

# Livraria gRPC

Projeto do exemplo prático de como criar um client gRPC usando Node.js. Apresentado por [Lucas Santos](https://info.lsantos.dev).

> __Atenção__: Este é o projeto completo, se você está procurando o projeto template, vá para [este repositório](https://github.com/rocketseat-experts-club/grpc-bookstore-client-template)

## Leitura complementar

- https://blog.lsantos.dev/guia-grpc-1/

## Instalação e execução

### Pré requisitos

- Para rodar este projeto você precisa ter o Docker instalado na máquina
- Instale o [protoc](https://github.com/protocolbuffers/protobuf/releases) e o [grpc-web transformer](https://github.com/grpc/grpc-web/releases) na sua máquina seguindo as instruções
  - Se você estiver em um MacOS, basta copiar os arquivos da pasta `bin` para `/usr/local/bin` e depois executar `chmod +x /usr/local/bin/<nome do arquivo>`

### Instalação

1. Execute o comando `npm install` dentro das pastas `client` e `server`
2. Os arquivos `.proto` já estão compilados, então não existe a necessidade de compilar novamente, no entanto se você quiser testar siga o passo abaixo:
  1. Execute o comando `npm run compile` na raiz do projeto, se você seguiu os passos corretamente para instalar o protoc e o grpc-web, isso irá compilar os arquivos `.proto` para `.js`
3. Na raiz do projeto, execute `docker compose up -d` para iniciar o servidor gRPC e o proxy do Envoy na porta 8080
4. Na pasta `client` execute o comando `npm run build:web` para compilar o cliente gRPC web usando o webpack

### Execução

O servidor está rodando no endereço `localhost:8080`.

Para executar o cliente local, execute o comando `node client.js` dentro da pasta `client`.
Para executar o cliente web, abra o arquivo `index.html` presente na pasta `client`.

## Expert

| [<img src="https://github.com/khaosdoctor.png" width="75px;"/>](http://info.lsantos.dev) |
| :-: |
|[Lucas Santos](https://info.lsantos.dev)|
