const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');



const routes = express.Router();
//Rota de inserir dados na table Incidents
routes.post('/incidents', IncidentController.create);
//Listar os dados da table Incidents
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete );

//Listar os dados da table Ongs
routes.get('/ongs', OngController.index);
//Rota de inserir dados na table Ongs
routes.post('/ongs', OngController.create);


routes.get('/profile', ProfileController.index);

routes.post('/sessions',SessionController.create);

module.exports = routes;