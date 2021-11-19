import { connection } from "./connection"

connection.raw(`
  create table labook_users(id varchar(255) primary key not null,
  name varchar(50) not null,
  email varchar(50) not null unique,
  password varchar(255) not null,
  table_friends varchar(255)

  );

  create table labook_posts(id varchar(255) primary key not null,
  photo varchar(255),
  description varchar(100) not null,
  type enum('normal', 'event') not null,
  created_at date not null,
  author_id varchar(255) not null,
  foreign key(author_id) references labook_users(id))
`)
.then(()=>{
  console.log('Created!')
})
.catch(err=>{
  console.log('Something have failed:', err)
})
