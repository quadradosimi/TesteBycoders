# React + Node.js + Docker Compose + MySql

## Teste Bycoders

Essa API faz o insert de dados de movimentações financeiras e gera relatórios de tipos de movimentação e saldo por loja.
O Frontend consome a API e nele é possível fazer o upload de um arquivo com dados de movimentações financeiras, para
serem salvas no banco de dados. Também é possível visualizar o relatório de movimentações financeiras e saldo em uma 
grid na tela.

Para rodar a aplicação é necessário fazer o download do projeto no GitHub

	https://github.com/quadradosimi/TesteBycoders

Rodar Back-end
	
	No cmd na pasta (.\TesteBycoders\docker-compose-nodejs-mysql) rode o comando abaixo para gerar os containers da API e do banco de dados MySql
	
		docker compose up --build 
	
	Se conecte ao MySql do container e no banco de dados financial_db rode os scripts SqlAddTables e SqlAddTransactionsTypes, que estão dentro da 
	pasta (.TesteBycoders\Scripts)	
	
Teste Back-end

	No cmd na pasta (.\TesteBycoders\docker-compose-nodejs-mysql\BycodersTeste\app\test) execute o comando abaixo para rodar os testes
	
		npm test

Arquitetura da API Restfull

	arquitetura de software
				
		- Arquitetura Monolitica
		- Arquitetura em Camadas
					
	arquitetura de código
				
		- uso de DDD 
		- Clean-Code
		- Solid Principles
		- Contar com pipelines automatizadas de CI/CD Pipelines usando por exemplo SonarCube e GitActions
		
Documentação da API

	URL Base
	
		api/financial/

	Endpoints
	
		* GET FinancialMovementbyEachStore {sem parâmetros}
		
			Response:
			{
				Name: "Loja Teste",
				Description: "Crédito",
				Total: "100"
			}
			
			curl -X GET http://"servidor":"porta"/api/financial/FinancialMovementbyEachStore
		
		* POST InsertFileData
		
			Body: 
			{
				"id": 1,
				"idTransaction":1,
				"date": 1234,
				"value": 12345,
				"cpf": "12346",
				"card": "12347",
				"hour": 12348,
				"owner": "teste",
				"name": "loja teste"
			}
			
			Response: (200 ok)
			{
				"id": 1,
				"idTransaction":1,
				"date": 1234,
				"value": 12345,
				"cpf": "12346",
				"card": "12347",
				"hour": 12348,
				"owner": "teste",
				"name": "loja teste"
			}
			
			curl -X POST -H "Content-Type: application/json" -d '{"id":"1","idTransaction":"1","date":1234,"value":12345,"cpf":"12346","card":"12346","hour":12348,"owner":"teste","name":"loja teste"}' http://"servidor":"porta"/api/financial/InsertFileData

			
		
	

	

	
			
