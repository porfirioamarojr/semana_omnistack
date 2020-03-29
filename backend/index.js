const express = require('express');

const app = express();

app.get('/', (request, Response) => {
    return Response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Amaro Júnior'
        
    });
});

app.listen(3333);