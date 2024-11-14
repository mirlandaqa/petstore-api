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

  it('Deve encontrar um pet por ID', () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/pet/13`,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it('Deve deletar um PET', () => {
    cy.request({
      method: "DELETE",
      url: `${baseUrl}/pet/13`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    })
  })

  it.only('Deve encontrar um Pet por status', () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/pet/findByStatus?status=sold`,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      response.body.forEach((pet) => {
        expect(pet).to.have.property('status', 'sold');
      });
    })
  })
})