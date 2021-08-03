# Minha Carteira Virtual

## Tecnologias utilizadas

1. [Node JS](https://nodejs.org/en/)
2. [Docker](https://www.docker.com/what-docker)
3. [PostgreSql](https://www.postgresql.org/)

## Rodando a aplicação

O projeto ultiliza a plataforma [Docker](https://www.docker.com/what-docker) para a configuração de ambiente, afim de evitar problemas de compatibilidade de sistema. Os passos abaixo podem ser seguidos para executar a aplicação usando a plataforma:

1) Instalação do [Docker](https://docs.docker.com/engine/installation/)
2) Instalação do [Docker Compose](https://docs.docker.com/compose/install/)
3) Siga as seguintes etapas:

Clone o repositório:

 ```
 git clone https://github.com/byronkamal/minha-carteira-api.git
 ```

Crie e inicie os containers dos serviços:

 ```
 docker-compose build
 docker-compose up
 ```

Em outra aba do terminal execute os seguinte comando para o banco de dados:

```
yarn typeorm migration:run

```

Acesse a aplicação na porta 3333 do seu `browser`: [http://localhost:3333]()


Ao terminar de usar os serviços, user o seguinte comando para pará-los:
 ```
 docker-compose down
 ```
