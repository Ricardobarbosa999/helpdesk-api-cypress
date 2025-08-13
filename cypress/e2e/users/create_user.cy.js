describe('POST /users - Create new user', () => {

  beforeEach(() => {
    cy.fixture('users.json').as('usersData');
  });
  it('should create a new user successfully', () => {
    //alterar a massa a cada requisição para evitar conflito de email
    const user = {
      name: 'Ricardo Carlor Barbosa',
      email: 'ricardobarbosa231@gmail.com'
    };

    cy.createUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id'); 
      expect(response.body).to.include({
        name: user.name,
        email: user.email
      });
    });
  });

  // Cenário negativo - email inválido
  it('should return 409 when email format is invalid', () => {
    const invalidUser = {
      name: 'Maria Betanea',
      email: 'email-invalido'
    };

    cy.createUser(invalidUser).then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body).to.have.property('error', 'A user with this name or email already exists.');
    });
  });

  // Cenário negativo - email já cadastrado
  it('should return 409 when email already exists', () => {
    const existingUser = {
      name: 'Maria Betanea',
      email: 'mariabetaanea@gmail.com' 
    };

    cy.createUser(existingUser).then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body).to.have.property('error', 'A user with this name or email already exists.');
    });
  });

});
