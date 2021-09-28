### Exercício 1
a) create table é o comando para criar uma tabela, varchar indica um caractere variado e o número entre parenteses é o limite de caracteres permitido e o not null indica que o campo é de preenchimento obrigatório.
b) Show database mostra o banco de dados em que você está trabalhando, show tables mostra as tabelas que estão no banco de dados em questão.
c) Describe mostra as especificações detalhadas da tabela.

### Exercício 2
b) "Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0,204 sec". Indica que o código tentou duplicar a entrada da chave primaria, o id. E isso não é permitido pois se trata de um número único para identificação.

c) "Error Code: 1136. Column count doesn't match value count at row 1	0,172 sec". Informa que o número de colunas da inserção de valores não corresponde com o da tabela para a qual esses valores estão indo. Há uma imcompatibilidade.
A solução esta na adição dos nomes das colunas que faltam para se igualar a tabela.
"17:46:12	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "004",    "Fernanda Montenegro",   300000,   "1929-10-19",    "female" )	1 row(s) affected	0,177 sec"

d) "Error Code: 1364. Field 'name' doesn't have a default value	0,172 sec". Informa que o campo 'name' da tabela não foi preenchido, mesmo que não tenha sido indicado também na inserção de valores, no entanto ele existe na tabela. E este campo não tem um valor padronizado para que podesse ser desconsiderado na inserção.

e) "Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0,172 sec". Informa que o valor númerico '1950' da coluna 'brithDate' não corresponde com o tipo Date dessa mesma coluna.

### Exercício 3

a) SELECT * FROM Actor WHERE gender = "female";
b) SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) O código não quebrou, e quando dei um select para verficar onde estaria o valor 'invalid' apareceu uma última linha com o valor 'null' em todas as colunas. Entendi que a resposta do sql foi que o valor não existe na tabela.
d) SELECT id, name, salary FROM Actor WHERE salary <= 5000;
e) "Error Code: 1054. Unknown column 'nome' in 'field list'	0,172 sec". A coluna da tabela está com a referência 'name' e não 'nome' como está no código em questão.

### Exercício 4

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000. A query pede ao sql que selecione todos os itens da tabela 'Actor' (SELECT * FROM Actor), onde a coluna 'name' contenha valores que possuam a letra 'A' ou a letra 'J' (name LIKE "A%" OR name LIKE "J%") e a coluna 'salary' seja maior que 300000.

b) SELECT * FROM Actor	WHERE name <> "A%" AND salary > 350000;

c) SELECT * FROM Actor	WHERE name LIKE "%G%" OR name LIKE "%g%";

d) SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE
"%G%") AND salary BETWEEN 350000 AND 900000;

### Exercício 5

a) Tabela de filmes criada com o comando create table e suas especificações para as colunas.

b, c, d, e) INSERT INTO Filmes (id, name, synopsis, premiere, evaluation) seguido dos valores especificados no exercício.

### Exercício 6

a) SELECT id, name, evaluation FROM Filmes WHERE id = 004;
b) SELECT * FROM Filmes WHERE name LIKE "%Dois%";
c) SELECT id, name, synopsis FROM Filmes WHERE evaluation < 7;

### Exercicio 7

a) SELECT * FROM Filmes WHERE name LIKE "%vida%";
b) SELECT * FROM Filmes WHERE name LIKE "%Flor%" OR synopsis LIKE "%dinheiro%";
c) SELECT * FROM Filmes WHERE premiere < '2021-09-27';
e) SELECT * FROM Filmes WHERE premiere < '2021-09-27' AND (name LIKE '%Coelhos%' OR synopsis LIKE '%Coelhos%') AND evaluation > 7;




