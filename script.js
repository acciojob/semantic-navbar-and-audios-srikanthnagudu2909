//your code here
describe('Audio Section Test', () => {
  beforeEach(() => {
    cy.visit('index.html'); // adjust path if running on a server
  });

  it('should have 3 audio elements with controls and correct sources', () => {
    // 1. Check there are exactly 3 <audio> elements
    cy.get('audio').should('have.length', 3);

    // 2. Ensure each <audio> has "controls" attribute
    cy.get('audio').each($el => {
      expect($el).to.have.attr('controls');
    });

    // 3. Verify the <source> tags inside <audio>
    const expected = [
      "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"
    ];

    cy.get('audio source').should('have.length', 3).then($sources => {
      const srcs = $sources.map((i, el) => Cypress.$(el).attr('src')).get();
      expect(srcs).to.deep.eq(expected);
    });
  });
});
describe('Audio Section Test', () => {
  beforeEach(() => {
    cy.visit('index.html'); // adjust path if running on a server
  });

  it('should have 3 audio elements with controls and correct sources', () => {
    // 1. Check there are exactly 3 <audio> elements
    cy.get('audio').should('have.length', 3);

    // 2. Ensure each <audio> has "controls" attribute
    cy.get('audio').each($el => {
      expect($el).to.have.attr('controls');
    });

    // 3. Verify the <source> tags inside <audio>
    const expected = [
      "http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3",
      "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg",
      "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3"
    ];

    cy.get('audio source').should('have.length', 3).then($sources => {
      const srcs = $sources.map((i, el) => Cypress.$(el).attr('src')).get();
      expect(srcs).to.deep.eq(expected);
    });
  });
});
