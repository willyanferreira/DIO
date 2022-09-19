-- começando os desafios
show databases;

-- criando o banco de dados ecommerce
CREATE DATABASE ecommerce;

-- criando as tabelas
CREATE TABLE ecommerce.clientes(
	Cliente_id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(45) NOT NULL,
    CPF CHAR(11) NOT NULL UNIQUE,
    Endereco VARCHAR(45) NOT NULL,
    Nascimento DATE,
    CONSTRAINT pk_cliente PRIMARY KEY(Cliente_id, CPF)
);
SHOW TABLES FROM ecommerce;
DESC ecommerce.clientes;

CREATE TABLE ecommerce.fornecedores(
	Fornecedor_id INT NOT NULL AUTO_INCREMENT,
    RazaoSocial VARCHAR(45) NOT NULL,
    CNPJ CHAR(14) NOT NULL UNIQUE,
    Endereco VARCHAR(45) NOT NULL,
    Telefone VARCHAR(12) NOT NULL,
    CONSTRAINT pk_fornecedor PRIMARY KEY(Fornecedor_id, CNPJ)
);
DESC ecommerce.fornecedores;

CREATE TABLE ecommerce.produtos(
	Produto_id INT NOT NULL AUTO_INCREMENT,
    Descricao VARCHAR(20) NOT NULL,
    Categoria VARCHAR(20) NOT NULL,
    Qntd_estoque INT NOT NULL,
    Valor FLOAT(10,2) NOT NULL,
    CONSTRAINT pk_produto PRIMARY KEY(Produto_id)
);
DESC ecommerce.produtos;

CREATE TABLE ecommerce.estoques(
	Estoque_id INT NOT NULL AUTO_INCREMENT,
    Localizacao VARCHAR(45) NOT NULL,
    CONSTRAINT pk_estoque PRIMARY KEY(Estoque_id)
);
DESC ecommerce.estoques;

CREATE TABLE ecommerce.pedidos(
	Pedido_id INT NOT NULL AUTO_INCREMENT,
    Cliente_id INT NOT NULL,
    Descricao VARCHAR(45) NOT NULL,
    Status_pedido ENUM("Processando", "Separando", "Faturando", "Enviado", "Entregue") DEFAULT("Processando"),
    Valor FLOAT(10,2) NOT NULL,
    CONSTRAINT pk_pedido PRIMARY KEY(Pedido_id, Cliente_id)
);
-- esqueci de add a foreign key e irei fazer isso com o ALTER TABLE
DESC ecommerce.pedidos;
ALTER TABLE ecommerce.pedidos ADD(
	CONSTRAINT fk_pedido FOREIGN KEY(Cliente_id) REFERENCES clientes(Cliente_id)
);
-- vendo as constraints do schema
SHOW TABLES FROM information_schema;
DESC information_schema.table_constraints;
SELECT * FROM information_schema.table_constraints;

CREATE TABLE ecommerce.produtos_pedidos(
	Produto_id INT NOT NULL,
    Pedido_id INT NOT NULL,
    Qntd INT NOT NULL,
    CONSTRAINT pk_produtos_pedidos PRIMARY KEY(Produto_id, Pedido_id),
    CONSTRAINT fk_produtos_pedidos FOREIGN KEY(Produto_id) REFERENCES Produtos(Produto_id),
    CONSTRAINT fk_pedidos_produtos FOREIGN KEY(Pedido_id) REFERENCES Pedidos(Pedido_id)
);
DESC ecommerce.produtos_pedidos;

CREATE TABLE ecommerce.produtos_em_estoque(
	Produto_id INt NOT NULL,
    Estoque_id INT NOT NULL,
    Produto VARCHAR(20) NOT NULL,
    Qntd INT NOT NULL,
    CONSTRAINT pk_produtos_estoque PRIMARY KEY(Produto_id, Estoque_id),
    CONSTRAINT fk_estoque FOREIGN KEY(Estoque_id) REFERENCES estoques(Estoque_id),
    CONSTRAINT fk_produto FOREIGN KEY(Produto_id) REFERENCES produtos(produto_id)
);
DESC ecommerce.produtos_em_estoque;

CREATE TABLE ecommerce.produtos_fornecidos(
	Produto_id INT NOT NULL,
    Fornecedor_id INT NOT NULL,
    Produto VARCHAR(20) NOT NULL,
    Qntd INT NOT NULL,
    CONSTRAINT pk_produtos_fornecidos PRIMARY KEY(Produto_id, Fornecedor_id),
    CONSTRAINT fk_produto_fornecido FOREIGN KEY(Produto_id) REFERENCES produtos(Produto_id),
    CONSTRAINT fk_fornecedor FOREIGN KEY(Fornecedor_id) REFERENCES fornecedores(Fornecedor_id)
);
-- fica a dica: não posso ter duas foreign key com o mesmo nome, mesmo estando em tabelas diferentes.
DESC ecommerce.produtos_fornecidos;

-- FIM DO PROCESSO DE CRIAÇÃO DO DB E SUAS TABELAS.