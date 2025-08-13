describe('GET /users/:id - Fetch user by ID', () => {

  beforeEach(() => {
    cy.fixture('users').as('usersData');
  });

  // Cenário positivo
  it('should return the correct user when a valid ID is provided', function () {
    const expectedUser = this.usersData[0]; 
    cy.getUserById(expectedUser.id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', expectedUser.id);
      expect(response.body).to.have.property('name', expectedUser.name);
      expect(response.body).to.have.property('email', expectedUser.email);
    });
  });

  // Cenário negativo - usuário inexistente
  it('should return 404 when user ID does not exist', () => {
    cy.getUserById(9999).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error', 'User not found.');
    });
  });
});
