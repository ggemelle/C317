describe('API question test', () => {
    let createdQuestionId; // Variável para armazenar o ID do recurso criado
  
    // Teste para a requisição POST
    it('POST - Deve criar uma nova pergunta e retornar status 201', () => {
      
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/questions', // substitua pelo endpoint de criação de recurso da sua API
        body: {
            description:"Pergunta teste",
            weight:"7",
            research_id:"13",
            employee_id:"5"
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('insertId');
        createdQuestionId = response.body.insertId; // Armazena o ID da pesquisa criada
      });
    });
  
    // Teste para a requisição GET
    it('GET - Deve obter a pergunta criada e retornar status 200', () => {
      cy.request({
        method: 'GET',
        url: `http://localhost:3333/questions?research_id=13`, // substitua pelo endpoint de consulta de recurso da sua API
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    // Teste para a requisição PUT
    it('PUT - Deve atualizar a pergunta criada e retornar status 200', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:3333/questions`, // substitua pelo endpoint de atualização de recurso da sua API
        body: {
            description:"Pergunta teste atualizada",
            weight:"8",
            question_id:createdQuestionId
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    // Teste para a requisição DELETE
    it('DELETE - Deve deletar a pergunta criada e retornar status 200', () => {
      cy.request({
        method: 'DELETE',
        url: `http://localhost:3333/questions?question_id=${createdQuestionId}`, // substitua pelo endpoint de exclusão de recurso da sua API
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  