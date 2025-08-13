describe('DELETE /users', () => {
  let userId;

  before(() => {
    // Criar usuário para deletar
    const user = {
      name: `Delete Test ${Date.now()}`,
      email: `delete${Date.now()}@test.com`
    };

    cy.createUser(user).then((response) => {
      userId = response.body.id;
    });
  });

  it('Deve deletar um usuário existente', () => {
    cy.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'User deleted successfully.');
      expect(response.body.user).to.include({
        id: userId,
        name: response.body.user.name, 
        email: response.body.user.email
      });
    });
  });

  it('Deve retornar erro ao tentar deletar usuário inexistente', () => {
    cy.deleteUser(999999).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error', 'User not found.');
    });
  });
});
