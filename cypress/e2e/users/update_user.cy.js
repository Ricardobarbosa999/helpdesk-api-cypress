describe('PUT /users', () => {
  let userId;

  before(() => {
    // Criar usuário para atualizar
    const user = {
      name: `Update Test ${Date.now()}`,
      email: `update${Date.now()}@test.com`
    };

    cy.createUser(user).then((response) => {
      userId = response.body.id;
    });
  });

  it('Must update an existing user', () => {
    const updatedUser = {
      name: "Jane Doe",
      email: "jane.doe@example.com"
    };

    cy.updateUser(userId, updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'User updated successfully.');
      expect(response.body.user).to.include({
        id: userId,
        name: updatedUser.name,
        email: updatedUser.email
      });
    });
  });

  it('Should return error when trying to update non-existent user', () => {
    const fakeUser = {
      name: "sem nome",
      email: "fake@teste.com"
    };

    cy.updateUser(999999, fakeUser).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error').and.to.be.a('string');
    });
  });
});
