/// <reference types="cypress" />

describe('Users API - GET', () => {

  // Cenário: GET /users
  it('should fetch all users successfully', () => {
    cy.fixture('users.json').then(expectedUsers => {
      cy.getUsers().then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        expectedUsers.forEach(expectedUser => {
          const user = response.body.find(u => u.id === expectedUser.id);
          // Garante que o usuário existe antes de validar propriedades
          expect(user, `User with id ${expectedUser.id} should exist`).to.not.be.undefined;
        });
      });
    });
  });

  // Cenário: GET /users/:id negativo (não encontrado)
  it('should return 404 for non-existent user', () => {
    cy.getUserById(9999, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.eq('User not found.');
    });
  });

  // Cenário: GET /users/:id positivo
  it('should fetch a user by ID successfully', () => {
    cy.fixture('users.json').then(expectedUsers => {
      const expectedUser = expectedUsers[0]; // pegando o primeiro usuário da fixture
      cy.getUserById(expectedUser.id).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', expectedUser.id);
        expect(response.body).to.have.property('name', expectedUser.name);
        expect(response.body).to.have.property('email', expectedUser.email);
      });
    });
  });
});
