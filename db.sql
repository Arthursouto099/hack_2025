CREATE DATABASE db_centenario;
USE db_centenario;

CREATE TABLE setores (
    id_setor INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipoDeSetor ENUM('UTI','LEITO_NORMAL','EMERGENCIA','MATERNIDADE','PSIQUIATRICO','POS_CIRURGIA')
);

CREATE TABLE usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    CPF VARCHAR(11) UNIQUE,
    senha VARCHAR(10) NOT NULL
);

CREATE TABLE leitos (
    id_leito INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_setor INT NOT NULL,
    id_usuario INT,
    quantidade_leitos INT,

    FOREIGN KEY (id_setor) REFERENCES setores(id_setor) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);