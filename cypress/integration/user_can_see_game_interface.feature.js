describe("User can see game interface", () => {
  it("successfully renders,", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Rock, paper and scissors Game");
    cy.get("button#rock").click();
  });
});
