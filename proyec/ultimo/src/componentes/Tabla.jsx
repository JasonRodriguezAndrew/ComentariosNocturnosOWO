import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function OpinionTable({ opi, editarOpi, deleteOpi }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Pelicula</th>
          <th>Resumen</th>
          <th>Calificacion</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>

      <tbody>
        {opi.map((val, key) => (
          <tr key={key}>
            <td>{val.id}</td>
            <td>{val.pelicula}</td>
            <td>{val.resumen}</td>
            <td>{val.calificacion}</td>
            <td>
              <Button
                variant="warning"
                onClick={() => {
                  editarOpi(val);
                }}
              >
                Editar
              </Button>
            </td>
            <td>
              <Button
                variant="danger"
                onClick={() => {
                  deleteOpi(val.id);
                }}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default OpinionTable;
