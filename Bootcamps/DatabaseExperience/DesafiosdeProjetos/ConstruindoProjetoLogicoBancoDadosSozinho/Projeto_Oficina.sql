-- INÍCIO DA CRIAÇÃO DO BANCO DE DADOS E DAS TABELAS DO PROJETO OFINA.
SHOW DATABASES;

-- CRIANDO O BD OFICINA.
CREATE DATABASE oficina;
USE oficina;
SHOW TABLES;

-- CRIANDO AS TABELAS.
CREATE TABLE clientes(
	cliente_id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    CPF CHAR(11) NOT NULL UNIQUE,
    logradouro VARCHAR(45) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(20),
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    UF CHAR(2) NOT NULL,
    contato VARCHAR(12) NOT NULL,
    nascimento DATE NOT NULL,
    CONSTRAINT pk_cliente PRIMARY KEY(cliente_id, CPF)
);
DESC clientes;

CREATE TABLE mecanicos(
	mecanico_id INT NOT NULL AUTO_INCREMENT,
    codigo INT NOT NULL UNIQUE,
    nome VARCHAR(45) NOT NULL,
    logradouro VARCHAR(45) NOT NULL,
    numero VARCHAR(5) NOT NULL,
    complemento VARCHAR(20),
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    UF CHAR(2) NOT NULL,
    contato VARCHAR(12) NOT NULL,
    nascimento DATE NOT NULL,
    CONSTRAINT pk_mecanico PRIMARY KEY(mecanico_id, codigo)
);
DESC mecanicos;

CREATE TABLE veiculos(
	veiculo_id INT NOT NULL AUTO_INCREMENT,
    placa CHAR(7) NOT NULL UNIQUE,
    marca VARCHAR(20) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    ano DATE,
    cliente_id INT NOT NULL,
    CONSTRAINT pk_veiculo PRIMARY KEY(veiculo_id, placa),
    CONSTRAINT fk_veiculo FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id)
);
DESC veiculos;

CREATE TABLE servicos(
	servicos_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    descricao VARCHAR(45) NOT NULL,
    valor FLOAT(7,2) NOT NULL,
    CONSTRAINT pk_servicos PRIMARY KEY(servicos_id)
);
DESC servicos;

CREATE TABLE ordemServicos(
	os_id INT NOT NULL AUTO_INCREMENT,
    numero INT NOT NULL,
    emissao DATE NOT NULL,
    conclusao DATE NOT NULL,
    cliente_id INT NOT NULL,
    mecanico_id INT NOT NULL,
    CONSTRAINT pk_os PRIMARY KEY(os_id, numero),
    CONSTRAINT fk_os_cliente FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id),
    CONSTRAINT fk_os_mecanico FOREIGN KEY(mecanico_id) REFERENCES mecanicos(mecanico_id)
);
DESC ordemServicos;

CREATE TABLE servicosGerados(
	servicoGerado_id INT NOT NULL AUTO_INCREMENT,
    os_id INT NOT NULL,
    cliente_id INT NOT NULL,
    mecanico_id INT NOT NULL,
    servico_id SMALLINT UNSIGNED NOT NULL,
    descricao VARCHAR(45) NOT NULL,
    valor FLOAT(7,2) NOT NULL,
    CONSTRAINT pk_sg PRIMARY KEY(servicoGerado_id),
    CONSTRAINT fk_sg_os FOREIGN KEY(os_id) REFERENCES ordemServicos(os_id),
    CONSTRAINT fk_sg_cliente FOREIGN KEY(cliente_id) REFERENCES clientes(cliente_id),
    CONSTRAINT fk_sg_mecanico FOREIGN KEY(mecanico_id) REFERENCES mecanicos(mecanico_id),
    CONSTRAINT fk_sg_servico FOREIGN KEY(servico_id) REFERENCES servicos(servicos_id)
);
DESC servicosGerados;

-- CREATE TABLE servicosRealizados(); POR ENQUANTO ACHEI MEHOR NÃO CRIAR UMA TABELA PARA GERAR GUARDAR ESSA INFORMAÇÃO.

-- FIM DO PROCESSO DE CRIAÇÃO DO BD E DAS TABELAS.