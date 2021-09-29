### Exrcício 1

a) Deletará a coluna 'salary'
b) Mudará o nome da coluna 'gender' para 'sex'
c) Mudará o limite de carateres da coluna 'gender'


### Exercício 2

a) update Actor set name='Fernanda Torres', birth_date='1965-09-15' where id=003;

b) update Actor set name= upper('juliana Paes') where id=7;
update Actor set name= lower('juliana Paes') where id=7;

c) update Actor set name='Moacyr de Oliveira Franco', salary=50000, birth_date='1930-09-10', gender='female' where id=5;

d) "Query OK, 0 rows affected (1,79 sec)
Rows matched: 0  Changed: 0  Warnings: 0", está indicando que que não houve erros na sintaxe do código, no entanto nada na tabela foi afetado, ou seja, pelo fato de não existir o determinado id o código não surtiu efeito apesar de não ter sido quebrado.

### Exercício 3

a) delete from Actor where name='Fernanda Montenegro';
b) delete from Actor where salary > 10000 and gender='male';

### Exercício 4;

a) select max(salary) from Actor;
b) select min(salary) from Actor where gender='female';
c) select count(*) from Actor where gender='female';
d) select sum(salary) from Actor;
### Exercício 5

a) Seleciona a contagem de todos os itens da tabela e os organiza por gênero. O retorno é uma nova tabela com duas colunas uma para o número da contagem dos itens e outra para o gênero. Cada um com sua quantidade total correspondente.

b) select id, name from Actor order by name desc;
c) select * from Actor where gender='male' order by salary;
d) select * from Actor where gender='male' order by salary limit 3 
e) select avg(salary), gender from Actor group by gender;

