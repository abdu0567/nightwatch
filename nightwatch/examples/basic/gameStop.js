describe('Ecosia.org Demo', function() {
  before(browser => browser.navigateTo('https://www.gamestop.com/'));

  it('Demo test ecosia.org', function(browser) {
    browser
      .waitForElementVisible('#searchRedesignTemplateInput')
      .setValue('#searchRedesignTemplateInput', 'mario strikers')
      .click('#searchRedesignTemplateInput')
      //.keys(browser.Keys.ENTER)
      .sendKeys('#searchRedesignTemplateInput', browser.Keys.ENTER)
      .pause(5000)
      .waitForElementVisible('article[class="table-cell"]:nth-of-type(1) div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(1)')
      .assert.textContains('article[class="table-cell"]:nth-of-type(1) div:nth-of-type(2) > div:nth-of-type(2) > div > div:nth-of-type(1)',"Mario Strikers: Battle League - Nintendo Switch");
  });

  after(browser => browser.end());
});
//navigate to gamestop website
//go into the search box
//type super mario striker for the nintendo switch
//press enter
//verify that super mario striker for the nintendo switch is visible
