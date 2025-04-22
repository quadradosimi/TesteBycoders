import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import configData from "../../config.json";

const reportFinancialMovement = () => {

  const root = configData.SERVER_URL;
  const reportFinancialMovementApi = root;
  const [report, setReport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    getReportFinancialMovement();
  }, []);

  const getReportFinancialMovement = () => {
      setIsLoading(true);
      axios
        .get(reportFinancialMovementApi.concat("FinancialMovementbyEachStore"))
        .then((res) => {
          setReport(res.data);        
          setIsLoading(false);
        })
        .catch((error) => {
          document.getElementById('errorMessage').innerHTML = error.message;
        });
  };

const previewFile = (event) => {
    event.preventDefault();

    let fileText = "";
    var file = document.querySelector("input[type=file]").files;

    let reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
      fileText = reader.result;
      treatData(fileText);
      },false,
    );

    if(file)
      reader.readAsText(file[0]);
}

const treatData = async (documentText) => {
  //convert text into array
  var arrayString = documentText.split('\n');	

  arrayString.forEach(async function(item, index) {

    var financialMovement = 
                    '{"idTransaction": "'+item.substring(0,1)+'",'+
                    '"date": "'+item.substring(1,9)+'",'+
                      '"value":"'+item.substring(10,19)+'",'+
                      '"cpf": "'+item.substring(19,30)+'",'+
                      '"card": "'+item.substring(30,45)+'",'+
                      '"hour": "'+item.substring(42,48)+'",'+
                      '"owner": "'+item.substring(48,59)+'",'+
                      '"name": "'+item.substring(62, item.length + 1)+'"}';

    const response = await fetch(reportFinancialMovementApi + 'InsertFileData', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: financialMovement 

    });
    getReportFinancialMovement();
  });

  getReportFinancialMovement();
}

    return (
        <div className="container">
          <div className="row">
           <form name="process">	
              <fieldset>
                <label htmlFor="upload">Selecione um arquivo para inserir dados de movimentação financeira:</label> 
              </fieldset>
              <fieldset>
                <input type="file" id="upload" onChange={previewFile}/>  
              </fieldset>
            </form>
          </div>
           <div className="row">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container-fluid">
                <div className="navbar-brand" href="#">
                  <span className="navbar-text">Relatório Fluxo de Caixa por Loja</span>
                </div>
              </div>
            </nav>
          </div>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nome da loja</th>
                  <th>Tipo movimentação</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                {report?.map((item, i) => {
                  return (
                    <tr key={i + 1}>
                      <td>{item.Name}</td>
                      <td>{item.Description}</td>
                      <td>R$ {item.Total}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row mb-4">
              <div className="text-danger text-center font-weight-bold" id="errorMessage"></div>
          </div>     
      </div>
    )
}

export default reportFinancialMovement;