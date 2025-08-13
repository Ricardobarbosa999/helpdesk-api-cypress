describe('GET /tickets/:id', () => {
  let ticketId;
  let ticketData;
  const messageError = 'Ticket not found.';

  before(() => {
    ticketData = {
      userId: 3,
      description: 'I cant log into my email account.',
      status: 'Open'
    };

    cy.createTicket(ticketData).then((response) => {
      ticketId = response.body.id; 
    });
  });

  it('should fetch the ticket successfully by ID', () => {
    cy.getTicket(ticketId).then((response) => {
      expect(response.status).to.eq(200);

      // Usa ticketData para validação
      expect(response.body).to.have.property('id', ticketId);
      expect(response.body.userId).to.eq(ticketData.userId);
      expect(response.body.description).to.eq(ticketData.description);
      expect(response.body.status).to.eq(ticketData.status);

      expect(response.body.createdAt).to.match(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
      );
    });
  });

  it('should return 404 if ticket ID does not exist', () => {
    cy.getTicket(999).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.eq(messageError);
    });
  });
});
