describe('API answer test', () => {
  
    // Teste para a requisição POST
    it('POST - Deve criar uma nova resposta e retornar status 201', () => {
      
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/answers', // substitua pelo endpoint de criação de recurso da sua API
        body: {
            "answer_value":"1",
            "question_id":"27",
            "research_id":"13",
            "employee_id":"3"
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('insertId');
      });
    });
  
    // Teste para a requisição GET
    it('GET - Deve obter a resposta criada passando como parâmetro a pergunta e o funcionário, e retornar status 200', () => {
      cy.request({
        method: 'GET',
        url: `http://localhost:3333/answers?question_id=27&employee_id=3`, // substitua pelo endpoint de consulta de recurso da sua API
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

        // Teste para a requisição GET
        it('GET - Deve obter a resposta criada passando como parâmetro o funcionário, e retornar status 200', () => {
            cy.request({
              method: 'GET',
              url: `http://localhost:3333/answers/employee?employee_id=3`, // substitua pelo endpoint de consulta de recurso da sua API
            }).then((response) => {
              expect(response.status).to.eq(200);
            });
          });
  
    // Teste para a requisição PUT
    it('PUT - Deve atualizar a resposta e retornar status 200', () => {
      cy.request({
        method: 'PUT',
        url: `http://localhost:3333/answers`, // substitua pelo endpoint de atualização de recurso da sua API
        body: {
            answer_value:"5",
            question_id:"27",
            employee_id:"3"
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
  