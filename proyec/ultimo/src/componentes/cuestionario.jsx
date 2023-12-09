import React from "react";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import OpinionTable from "./Tabla";
import CuestionarioCard from "./Card";


function Cuestionario() {
  const[id,setId]= useState('');
  const[pelicula,setPelicula]= useState('');
  const[resumen,setResumen]= useState('');
  const[calificacion,setCalificacion]= useState('');
  const[opi,setOpi]= useState([]);
  const[editar,setEditar]= useState(false);
    
    const add = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3001/create',
        {
          pelicula:pelicula,
          resumen: resumen,
          calificacion: calificacion
        }).then(()=>{
          alert('Opinion registrada')
        })
    }
  
    const update = (e) =>{
      e.preventDefault();
      Axios.put('http://localhost:3001/update',
      {
        id:id,
        pelicula:pelicula,
        resumen:resumen,
        calificacion:calificacion
      }).then(()=>{
        alert('Opinion Actualizada')
      })
    }
  
    const editarOpi= (val) =>{
      setEditar(true);
      setPelicula(val.pelicula);
      setResumen(val.resumen);
      setCalificacion(val.calificacion);
      setId(val.id);
    }
  
    const getOpi = () =>{
      Axios.get('http://localhost:3001/opiniones').then((response)=>{
        setOpi(response.data);
      })
    }
  
    const limpiar= ()=>{
      setEditar(false);
      setPelicula('');
      setResumen('');
      setCalificacion('');
      setId('');
    }
  
    const deleteOpi=(id) => {
      let confirmacion=window.confirm("esta seguro que desea eliminar estos datos?")
      if(confirmacion)
      {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response)=>{
          alert(response.data);
          getOpi();
          limpiar();
        })
      }
    }
  
    //getOpi();
  
    return (
      <>
        <div className="form-container">
          <Form.Control 
          type="text" 
          placeholder="ingresa el nombre de la pelicula" 
          value={pelicula}
          onChange={(event)=>{
            setPelicula(event.target.value)
          }}
          />
    
          <br />
    
          <Form.Control 
          type="text" 
          placeholder="ingresa el resumen de la pelicula" 
          value={resumen}
          onChange={(event)=>{
            setResumen(event.target.value)
          }}
          />

          <br />

          <Form.Control 
          type="text" 
          placeholder="ingresa la calificacion de la pelicula" 
          value={calificacion}
          onChange={(event)=>{
            setCalificacion(event.target.value)
          }}
          />
        </div>

        {
          editar?
  
      
          <div>
          <Button 
        onClick={update} 
        variant="warning">
          Actualizar
          </Button>
  
          <Button 
        onClick={limpiar} 
        variant="warning">
          Cancelar
          </Button>
          </div>
          :
          
        <Button 
          onClick={add} 
          variant="primary">
          Enviar
        </Button>
  
  
        }

        <Button onClick={getOpi} variant="primary">
          Listar
        </Button>
          

        <br />

        <OpinionTable opi={opi} editarOpi={editarOpi} deleteOpi={deleteOpi} />
        

      </>
    );
  }
  
  
  
  export default Cuestionario;