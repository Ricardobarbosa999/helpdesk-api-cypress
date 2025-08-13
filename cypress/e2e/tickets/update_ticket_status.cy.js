describe('PUT /tickets/:id/status', () => {

  let ticketId;
  const descricao = 'Sem serviço';
  const messageStatus = 'In Progress';

  // Antes de todos os testes, cria um ticket para atualizar
  before(() => {
    const ticket = {
      userId: 3,
      description: 'Sem serviço',
      status: 'Open'
    };

    cy.createTicket(ticket).then((response) => {
      ticketId = response.body.id; 
    });
  });

  it('should update ticket status successfully', () => {
    const newStatus = { status: 'In Progress' };

    cy.updateTicketStatus(ticketId, newStatus).then((response) => {
    
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Ticket status updated successfully.');
      expect(response.body).to.have.property('ticket');
      expect(response.body.ticket.id).to.eq(ticketId);
      expect(response.body.ticket.userId).to.eq(3);
      expect(response.body.ticket.description).to.eq(descricao);
      expect(response.body.ticket.status).to.eq(messageStatus);
      expect(response.body.ticket.createdAt).to.match(
        /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/
      );
    });
  });

  it('should fail if status field is missing', () => {
    cy.updateTicketStatus(ticketId, {},
      { failOnStatusCode: false }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
        expect(response.body.error).to.eq('Status is required.');
      });
  });

  it('should fail if ticket ID does not exist', () => {
    const newStatus = { status: 'In Progress' };

    cy.updateTicketStatus(9999, newStatus, { failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.have.property('error');
      expect(response.body.error).to.eq('Ticket not found.');
    });
  });
});

