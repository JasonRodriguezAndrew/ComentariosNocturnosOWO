const express= require('express');
const app=express();
const mysql=require('mysql');
const cors=require('cors');

app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'opi'
});

app.post('/create', (req,res)=>{
    const pelicula=req.body.pelicula;
    const resumen=req.body.resumen;
    const calificacion=req.body.calificacion;

    db.query('INSERT INTO opiniones (pelicula,resumen,calificacion) VALUES (?,?,?)', [pelicula,resumen,calificacion],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send('Opinion registrada con exito');
        }
    })
})

app.put('/update',(req,res)=>{
    const id=req.body.id;
    const pelicula=req.body.pelicula;
    const resumen=req.body.resumen;
    const calificacion=req.body.calificacion;

    db.query('UPDATE opiniones SET pelicula=?, resumen=?, calificacion=? WHERE id=?', [pelicula,resumen,calificacion,id],
    (err,result)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Error updating opinion');
          } else {
            res.send('Opinion actualizada con éxito');
          }
    })
})

app.get('/opiniones', (req,res)=>{
    db.query('SELECT * FROM opiniones',
    (err,result)=>{
        if(err){
            console.log(err);
            res.status(500).send(error);
            return;
        }
        res.send(result);
    })
});

app.delete('/delete/:id', (req,res)=>{
    const id=req.params.id;
    db.query('DELETE FROM opiniones WHERE id=?', id,
        (err,result)=>{
            if(err){
                console.log;
            }else{
                res.send ('Opinion eliminada')
            }
        }
        )
})

app.listen(3001, ()=>{
    console.log('Corriendo en el puerto 3001');
})

