import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';

function CuestionarioCard() {
  const [opi, setOpi] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/opiniones').then((response) => {
      setOpi(response.data);
    });
  }, []);

  return (
    <div>
      {opi.map((val) => (
        <Card key={val.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Body>
            <Card.Title className='text-light'>{val.pelicula}</Card.Title>
            <Card.Text>
              <strong>Resumen:</strong> {val.resumen}
              <br />
              <strong>Calificación:</strong> {val.calificacion}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CuestionarioCard;
