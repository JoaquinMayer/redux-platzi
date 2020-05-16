import React from "react";

const App = () => {
  const putRows = () => [
    <tr>
      <td>Joaquin</td>
      <td>joaquinemayer@gmail.com</td>
      <td>www.joaquinmayer.com</td>
    </tr>,
    <tr>
      <td>Ezequiel</td>
      <td>jezequielmayer@gmail.com</td>
      <td>www.ezequielmayer.com</td>
    </tr>,
  ];

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>{putRows()}</tbody>
      </table>
    </div>
  );
};

export default App;
