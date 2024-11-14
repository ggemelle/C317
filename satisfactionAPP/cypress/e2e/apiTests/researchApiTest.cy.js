describe('API research test', () => {
    let createdResearchId; // Variável para armazenar o ID do recurso criado
  
    // Teste para a requisição POST
    it('POST - Deve criar uma nova pesquisa e retornar status 201', () => {
      
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/researches', // substitua pelo endpoint de criação de recurso da sua API
        body: {
          date: "2024-11-14",
          name: "Teste api nova pesquisa",
          employee_id: "5" // Verifica se o valor é enviado no corpo
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('insertId');
        createdResearchId = response.body.insertId; // Armazena o ID da pesquisa criada
      });
    });
  
    // Teste para a requisição GET
    it('GET - Deve obter a pesquisa criada e retornar status 200', () => {
      cy.request({
        method: 'GET',
        url: `http://localhost:3333/researches?employee_id=5`, // substitua pelo endpoint de consulta de recurso da sua API
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    // Teste para a requisição PUT
    it('PUT - Deve atualizar a pesquisa criada e retornar status 200', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:3333/researches`, // substitua pelo endpoint de atualização de recurso da sua API
        body: {
            date : "2024-10-30",
            name: "Test update research",
            research_id: createdResearchId
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
    // Teste para a requisição DELETE
    it('DELETE - Deve deletar a pesquisa criada e retornar status 200', () => {
      cy.request({
        method: 'DELETE',
        url: `http://localhost:3333/researches?research_id=${createdResearchId}`, // substitua pelo endpoint de exclusão de recurso da sua API
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  