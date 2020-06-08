import express from 'express';

const app = express();

// use acopla plugins no express, neste caso dando os poderes para entender json
app.use(express.json());

// Rota: Endereço completo do sistema

// Recurso: Entidade

// GET: Buscar uma ou mais informações
// POST: Criar uma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Remover uma informação

// POST http://localhost:3333/users = Criar usuarios
// GET http://localhost:3333/users = Todos usuarios
// GET http://localhost:3333/users/5 = Buscar usuario 5


// Request params: Parametros da propria rota que identificam um recurso
// Query params: Parametros opcionais, ex: Filtros, Paginacao ?search=on
// Request Body: Parametros para criação/atualização de informações, enviados geralmente em POST/PUT (gravacao no server), mais comum JSON

const users = [
    'Saint Clair', // 0
    'Fulano', // 1
    'Beltrano' // 2
];

app.get('/users',(request, response)=>{
    //console.log('Listagem de usuarios');
    const search = String(request.query.search);
    
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
    return response.json(filteredUsers);
});

app.get('/users/:id',(request, response)=>{
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

app.post('/users',(request, response) => {
    
    const data = request.body;
    
    const user = {
        name: data.name,
        email: data.email
    };
    
    return response.json(user);
});

app.listen(3333);