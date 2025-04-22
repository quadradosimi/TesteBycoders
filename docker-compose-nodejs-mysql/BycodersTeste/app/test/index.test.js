//index.test.js

var request = require('superagent');


test('Set dados de movimento financeiro', async () => {

  var resultado = await request.post('http://localhost:6868/api/financial/InsertFileData')
  .send({ idTransaction: '1', date: '20250422' , value: '100', cpf: '03475375955', card: '1234567890', hour: '1430', owner: 'teste', name: 'loja teste'});
  expect(resultado.statusCode).toBe(200);
})

test('Get resumo movimentos', async () => {

  var resultado = await request.get('http://localhost:6868/api/financial/FinancialMovementbyEachStore');
  expect(resultado.statusCode).toBe(200);
})



 