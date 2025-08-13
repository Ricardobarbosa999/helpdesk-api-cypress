describe('DELETE /tickets/:id', () => {
  it('should delete a ticket and return success message', () => {

    const ticketId = 12; 
    const status = response.body.ticket.status;
    const message = response.body.ticket.description;

    cy.deleteTicket(ticketId).then((response) => {

      expect(response.status).to.eq(200);
      
      expect(response.body).to.have.property('message', 'Ticket deleted successfully.');
      expect(response.body).to.have.property('ticket');
      expect(response.body.ticket).to.have.property('userId');
      expect(response.body.ticket).to.have.property('id', ticketId);
      expect(response.body.ticket).to.have.property('description', message);
      expect(response.body.ticket).to.have.property('status', status);

      expect(new Date(response.body.ticket.createdAt).toISOString()).to.eq(response.body.ticket.createdAt);


    });
  });

});
