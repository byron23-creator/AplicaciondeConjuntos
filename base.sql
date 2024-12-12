CREATE DATABASE BancoDB;
USE BancoDB;

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(255),
    ciudad VARCHAR(255)
);

CREATE TABLE cuentas (
    id_cuenta INT PRIMARY KEY,
    id_cliente INT,
    tipo_cuenta VARCHAR(255),
    saldo DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

INSERT INTO clientes (id_cliente, nombre, ciudad) VALUES(1, 'Pedro', 'Guatemala');
INSERT INTO clientes (id_cliente, nombre, ciudad) VALUES(2, 'Ana', 'Quetzaltenango');
INSERT INTO clientes (id_cliente, nombre, ciudad) VALUES(3, 'Luis', 'Escuintla');
INSERT INTO clientes (id_cliente, nombre, ciudad) VALUES(4, 'María', 'Antigua');

INSERT INTO cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES(1, 1, 'Monetaria', 1000);
INSERT INTO cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES(2, 2, 'Ahorro', 5000);
INSERT INTO cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES(3, 3, 'Corriente', 2000);
INSERT INTO cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES(4, 1, 'Ahorro', 3000);