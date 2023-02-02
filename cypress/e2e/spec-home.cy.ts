describe("Home", () => {
  it("The home component to load the cards", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#content-cards").should("be.visible");
    cy.get("#content-cards").should("include.text", "Endurance by Kelsey");
  });

  it("when we click on a card we are redirected to the card's details", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#image-1").click();
    cy.get(".react-player").should("be.visible");
  });
});
