import React, { useState } from "react";

interface cep {
  localidade: String,
  bairro: String;
  logradouro: String;
}

function App() {
  const [cepNumber, setCepNumber] = useState("");
  const [cepData, setCepData] = useState<cep>();

  const submmitHandler = () => {
    // const formData = new FormData(e.target);
    // const data = Object.fromEntries(formData);
    fetch(`https://viacep.com.br/ws/${cepNumber}/json/`)
      .then((response) => response.json())
      .then((data: cep) => {
        setCepData(data);
        console.log(data);
      });
  };

  return (
    <div className="container">
      <h1>Buscar CEP</h1>
      <div className="form-group">
        <input
          type="text"
          name="tracking"
          className="form-control"
          onChange={(e) => setCepNumber(e.target.value)}
        />
      </div>
      <button
        type="submit"
        name="track-cep"
        className="btn btn-primary"
        onClick={submmitHandler}
      >
        Buscar
      </button>
      <br />
      <br />
      {cepData && <h1>Cidade: {cepData.localidade}</h1>}
      {cepData && <h1>Bairro: {cepData.bairro}</h1>}
      {cepData && <h1>Rua: {cepData.logradouro}</h1>}
    </div>
  );
}

export default App;
