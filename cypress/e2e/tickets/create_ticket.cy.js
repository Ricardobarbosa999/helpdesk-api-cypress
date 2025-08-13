describe('POST /tickets', () => {

  it('should create a new ticket successfully', () => {
    // Pode usar fixture ou definir diretamente
    const ticket = {
      userId: 2,
      description: "The printer is not printing.",
      status: "Open"
    };
    
    cy.createTicket(ticket).then((response) => {
      expect(response.status).to.eq(201);

      expect(response.body).to.have.property('id');

      expect(response.body.userId).to.eq(ticket.userId);
      expect(response.body.description).to.eq(ticket.description);
      expect(response.body.status).to.eq(ticket.status);

      expect(response.body.createdAt).to.match(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
      );
    });
  });

  it('should return error when required fields are missing', () => {
    const incompleteTicket = {
      userId: 2 // Falta a description
    };

    cy.createTicket(incompleteTicket, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.eq('The fields userId and description are required.');
    });
  });

});
