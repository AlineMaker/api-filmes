/****************************************************************************************************************************************************************************************** */
/* OBJETIVO : aRQUIVO RESPONSÁVEL PELA realização do CRUD de filme no Banco de Dados MySQL
/*Data: 01/10/2025
Aiutor Aline Alves
versão: 1.0/*
/*
/****************************************************************************************************************************************************************************************** */


/*Dependencias do node para o Banco Raelaciona
/*sequelize   => foi uma biblioteca para acesso a banco de dados
Prisma é uma biblioteca atual para acesso e manipulacao de dados,utilizando SQl ou ORM mysql, postgresql sqlserver oracle 
kenex  sql(mysql)

// banco de dados nao relacional
                Mongoose => é uma bibloteca para acesso a bancode dados nao relacional (mongoDB)

Instalação do prisma nom install prisma --save              ->realiza a conexxao com o bd
npm install @prisma/client  --save   Permite executar scripst sql no bd



$query RawUnsafe()  -> Permite executa apenas scrpt sql que tornsm dados do BD(select),permite tambem executa 

$executeRawUnsafe(0 -> Permite)

*///////////////////////////////////////////////////////////////////////////////////////////////////////
//order by id asc desc 
//import da biblioteca do Prisma
const {PrismaClient}= require('@prisma/client')
//cria um objeto do prisma client para manipular os scripts SQl
const prisma = new PrismaClient()
//Retorna todos os filmes do banco de dados
const getSelectAllFilms = async function(){
    let sql = `select *from tbl_filme order by id desc`

    let result = prisma.$queryRAwUnsafe(sql)
}

//Retorna um filme filtrando pelo ID do Banco de dados
const getSelectByIdFilms = async function(id){

}

//Insere um filme no banco de dados
const setInserFilms = async function (filme){

}
//Atualiza um filme existente no banco de dados filtrando pelo ID
const setUpdateFilms = async function(filme){

}
//Apaga um filme existente no banco de dados filtrando pelo id
const setDeleteFilms= async function(id){}