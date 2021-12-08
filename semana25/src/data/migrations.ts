import { con } from './connection'

con.raw(`
  create table pokemonGo(
    id varchar(255) primary key not null,
    Name varchar(255) not null,
    Pokedex_Number varchar(255) not null,
    Img_name varchar(255) not null,
    Generation varchar(255) not null,
    Evolution_Stage varchar(255) not null,
    Evolved varchar(255) not null,
    FamilyID varchar(255) not null,
    Cross_Gen varchar(255) not null,
    Type1 varchar(255) not null,
    Type2 varchar(255) not null,
    Weather1 varchar(255) not null,
    Weather2 varchar(255) not null,
    STAT_TOTAL varchar(255) not null,
    ATK varchar(255) not null,
    DEF varchar(255) not null,
    STA varchar(255) not null,
    Legendary varchar(255) not null,
    Aquireable varchar(255) not null,
    Spawns varchar(255) not null,
    Regional varchar(255) not null,
    Raidable varchar(255) not null,
    Hatchable varchar(255) not null,
    Shiny varchar(255) not null,
    Nest varchar(255) not null,
    New varchar(255) not null,
    NotGettable varchar(255) not null,
    Future_Evolve varchar(255) not null,
    CP40 varchar(255) not null,
    CP39 varchar(255) not null
  );
`)
.then(()=>{
  console.log('Table was created successfuly')
})
.catch(err=>{
  console.log('Something went wrong:', err)
})
.finally(()=>{
  con.destroy()
})
