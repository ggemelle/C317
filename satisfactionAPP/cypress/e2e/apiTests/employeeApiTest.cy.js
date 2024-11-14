describe('API employee test', () => {

  // Teste para a requisição POST
  it('POST - Deve criar um novo funcionário e retornar status 201', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3333/employee', // substitua pelo endpoint de criação de recurso da sua API
      body: {
        name:"teste api usuário",
        type: "user",
        email:"apitest@email.com.br",
        password:"senhaApiTeste"
    },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('insertId');
    });
  });

  // Teste para a requisição GET
  it('GET - Deve obter o funcionário criado e retornar status 200', () => {
    cy.request({
      method: 'GET',
      url: `http://localhost:3333/employee?email=apitest@email.com.br&password=senhaApiTeste`, // substitua pelo endpoint de consulta de recurso da sua API
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('employee_name', 'teste api usuário');
    });
  });

  // // Teste para a requisição PUT
  // it('PUT - Deve atualizar o recurso criado e retornar status 200', () => {
  //   cy.request({
  //     method: 'PUT',
  //     url: `https://suaapi.com/endpoint/${createdResourceId}`, // substitua pelo endpoint de atualização de recurso da sua API
  //     body: {
  //       nome: 'Recurso Atualizado',
  //       descricao: 'Descrição atualizada do recurso',
  //     },
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //     expect(response.body).to.have.property('nome', 'Recurso Atualizado');
  //   });
  // });

  // // Teste para a requisição DELETE
  // it('DELETE - Deve deletar o recurso criado e retornar status 200', () => {
  //   cy.request({
  //     method: 'DELETE',
  //     url: `https://suaapi.com/endpoint/${createdResourceId}`, // substitua pelo endpoint de exclusão de recurso da sua API
  //   }).then((response) => {
  //     expect(response.status).to.eq(200);
  //   });
  // });

  // // Verificação final para garantir que o recurso foi deletado
  // it('GET - Deve retornar 404 ao tentar acessar o recurso deletado', () => {
  //   cy.request({
  //     method: 'GET',
  //     url: `https://suaapi.com/endpoint/${createdResourceId}`, // tenta acessar o recurso excluído
  //     failOnStatusCode: false, // previne que o teste falhe em caso de status code 404
  //   }).then((response) => {
  //     expect(response.status).to.eq(404);
  //   });
  // });
});
