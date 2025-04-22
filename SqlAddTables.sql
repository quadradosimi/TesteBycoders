	-- create the table with the financial movements
	CREATE TABLE financialMovements (
	Id bigint,
	IdTransaction int,
	Date int,
	Value int,
	CPF varchar(50),
	Card varchar(50),
	Hour int,
	Owner varchar(50),
	Name varchar(50)
	);
    
     ALTER TABLE financialMovements
	ADD COLUMN createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	ADD COLUMN updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
    
	-- create table of transactions types
	CREATE TABLE transactions (
	Id bigint,
	Description varchar(22),
	Nature varchar(10)
	);

