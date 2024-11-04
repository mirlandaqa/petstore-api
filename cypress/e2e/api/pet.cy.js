describe('Petstore API - Pet', () => {
  const baseUrl = "https://petstore.swagger.io/v2";

  it('Deve adicionar um novo pet na loja ', () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/pet`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: 1001,
        name: "Doggo",
        status: "available"
      }

    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "Doggo");
    })
  })

  it('Atualizar um pet existente', () => {
    cy.request({
      method: "PUT",
      url: `${baseUrl}/pet`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: 1001,
        name: "magali",
        status: "available"
      }

    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("name", "magali");
    })
  })
})