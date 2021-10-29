import { con } from "./connection";

con.raw(`
CREATE TABLE users(id varchar(50) PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
password VARCHAR(50) NOT NULL);

CREATE TABLE recipes(id VARCHAR(50) PRIMARY KEY NOT NULL,
title VARCHAR(50) NOT NULL,
description varchar(255) NOT NULL,
date DATE NOT NULL,
user_id VARCHAR(50) NOT NULL,
FOREIGN KEY(user_id) REFERENCES users(id));
`)
.then(()=>{
    console.log('Tabelas criadas')
})
.catch(err=>{
    console.log(err)
})
.finally(()=>{
    con.destroy()
})