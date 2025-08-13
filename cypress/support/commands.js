Cypress.Commands.add('createUser', (user) => {
  return cy.request({
    method: 'POST',
    url: '/users',
    body: user,
    failOnStatusCode: false
  });
});


Cypress.Commands.add('createTicket', (ticket) => {
  return cy.request({
    method: 'POST',
    url: '/tickets',
    body: ticket,
    failOnStatusCode: false 
  });
});

// Comando para deletar um ticket
Cypress.Commands.add('deleteTicket', (ticketId) => {
  return cy.request({
    method: 'DELETE',
    url: `/tickets/${ticketId}`,
    failOnStatusCode: false
  });
});

// Comando para deletar um usuário
Cypress.Commands.add('deleteUser', (userId) => {
  return cy.request({
    method: 'DELETE',
    url: `/users/${userId}`,
    failOnStatusCode: false
  });
});
Cypress.Commands.add('updateTicketStatus', (ticketId, statusBody, options = {}) => {
  return cy.request({
    method: 'PUT',
    url: `/tickets/${ticketId}/status`,
    body: statusBody,       
    ...options
  });
}); 

// GET todos os usuários
Cypress.Commands.add('getUsers', (options = {}) => {
  return cy.request({
    method: 'GET',
    failOnStatusCode: false,
    url: '/users',
    ...options
  });
});

// GET usuário por ID
Cypress.Commands.add('getUserById', (userId, options = {}) => {
  return cy.request({
    method: 'GET',
    failOnStatusCode: false,
    url: `/users/${userId}`,
    ...options
  });
});

// POST create user
Cypress.Commands.add('createUser', (userData) => {
  cy.request({
    method: 'POST',
    url: '/users',
    body: userData,
    failOnStatusCode: false
  });
});
Cypress.Commands.add('deleteUser', (userId) => {
  return cy.request({
    method: 'DELETE',
    url: `/users/${userId}`,
    failOnStatusCode: false // evita que Cypress quebre em erro HTTP
  });
});
Cypress.Commands.add('updateUser', (userId, userData) => {
  return cy.request({
    method: 'PUT',
    failOnStatusCode: false,
    url: `/users/${userId}`,
    body: userData,
    failOnStatusCode: false
  });
});
