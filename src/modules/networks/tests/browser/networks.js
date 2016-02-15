module.exports = {
    "Section - Networks" : function (browser) {
        browser
            .verify.elementPresent("section.networks", "Section 'Networks' wrapper is present")
            .verify.elementPresent("section.networks .network-list", "Section 'Networks' list of networks is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(1)", "1st list item is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(2)", "2nd list item is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(3)", "3rd list item is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(4)", "4th list item is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(1) a", "1st list item's link is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(2) a", "2nd list item's link is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(3) a", "3rd list item's link is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(4) a", "4th list item's link is present")
            .verify.elementPresent("section.networks .network-list li:nth-child(1) a i.icon-fa-github", "1st list item has the GitHub icon")
            .verify.elementPresent("section.networks .network-list li:nth-child(2) a i.icon-fa-twitter", "2nd list item has the Twitter icon")
            .verify.elementPresent("section.networks .network-list li:nth-child(3) a i.icon-fa-linkedin-square", "3rd list item has the LinkedIn icon")
            .verify.elementPresent("section.networks .network-list li:nth-child(4) a i.icon-fa-stack-overflow", "4th list item has the Stack Overflow icon")
            .click("section.networks .network-list li:nth-child(1) a")
            .pause(browser.globals.wait.pause)
            .verify.urlEquals("https://github.com/dreamyguy/", "The correct URL was opened when clicking on the link -> https://github.com/dreamyguy/")
            .back()
            .pause(browser.globals.wait.pause)
            .click("section.networks .network-list li:nth-child(2) a")
            .pause(browser.globals.wait.pause)
            .verify.urlEquals("https://twitter.com/dreamyguy", "The correct URL was opened when clicking on the link -> https://twitter.com/dreamyguy")
            .back()
            .pause(browser.globals.wait.pause)
            .click("section.networks .network-list li:nth-child(3) a")
            .pause(browser.globals.wait.pause)
            .verify.urlEquals("https://www.linkedin.com/in/dreamyguy", "The correct URL was opened when clicking on the link -> https://www.linkedin.com/in/dreamyguy")
            .back()
            .pause(browser.globals.wait.pause)
            .click("section.networks .network-list li:nth-child(4) a")
            .pause(browser.globals.wait.pause)
            .verify.urlEquals("http://stackoverflow.com/users/909777/wallace-sidhr%C3%A9e", "The correct URL was opened when clicking on the link -> http://stackoverflow.com/users/909777/wallace-sidhr%C3%A9e")
            .back()
    }
};