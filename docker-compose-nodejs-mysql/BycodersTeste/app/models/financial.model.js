module.exports = (sequelize, Sequelize) => {

  const FinancialMovement = sequelize.define("financialMovement", {
    idTransaction: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.INTEGER
    },
    value: {
      type: Sequelize.INTEGER
    }    ,
    cpf: {
      type: Sequelize.STRING
    },
    card: {
      type: Sequelize.STRING
    },
    hour: {
      type: Sequelize.INTEGER
    },
    owner: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    }
  });

  const Transactions = sequelize.define("transactions", {
    description: {
      type: Sequelize.STRING
    },
    Nature: {
      type: Sequelize.STRING
    }
  });

  const transactions_data = [
    {description : "Débito", Nature: "Entrada"},
    {description : "Boleto", Nature: "Saída"},
    {description : "Financiamento", Nature: "Saida"},
    {description : "Crédito", Nature: "Entrada"},
    {description : "Recebimento Empréstimo", Nature: "Entrada"},
    {description : "Vendas", Nature: "Entrada"},
    {description : "Recebimento TED", Nature: "Entrada"},
    {description : "Recebimento DOC", Nature: "Entrada"},
    {description : "Aluguel", Nature: "Saida"}
 ]

  Transactions.bulkCreate(transactions_data, { validate: true })

  return Transactions, FinancialMovement;
};
