const db = require("../models");
const FinancialMovement = db.financial;
const Op = db.Sequelize.Op;
const Sequelize = db.sequelize;

// Create and Save
exports.create = (req, res) => {
  // Validate request
  if (!req.body.idTransaction) {
    res.status(400).send({
      message: "Id da transação não pode ser vazio.!"
    });
    return;
  }

  const financialMovement = {
        idTransaction: req.body.idTransaction,
        date: req.body.date,
        value: req.body.value,
        cpf: req.body.cpf,
        card: req.body.card,
        hour: req.body.hour,
        owner: req.body.owner,
        name: req.body.name
      };


  // Save in the database
  FinancialMovement.create(financialMovement)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao salvar os dados."
      });
    });
};

exports.insertFileData = (req, res) => {  

  const financialMovement = {
    idTransaction: req.body.idTransaction,
    date: req.body.date,
    value: req.body.value,
    cpf: req.body.cpf,
    card: req.body.card,
    hour: req.body.hour,
    owner: req.body.owner,
    name: req.body.name
  };

  if(req.body.idTransaction != '')
    {
     FinancialMovement.create(financialMovement)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao salvar os dados."
        });
      });
    }

};

exports.findFinancialMovementbyEachStore = async (req, res) => {  
  var query = " select Name, SUM(Movimentacoes) as Total, GROUP_CONCAT(Description) AS Description from (SELECT fm.Name, t.Description, IF(t.Nature = 'Entrada', SUM(fm.Value), SUM(fm.Value) * -1)  AS Movimentacoes FROM financialMovements fm INNER JOIN transactions t ON fm.IdTransaction = t.Id GROUP BY fm.name, t.Description, t.Nature ORDER BY fm.Name) as t GROUP BY Name WITH ROLLUP";
  const [result, metadata] = await Sequelize.query(query);
  res.status(200).json(result);

};

