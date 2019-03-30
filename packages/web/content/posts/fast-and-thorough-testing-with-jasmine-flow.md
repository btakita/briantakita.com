---
title: Fast and Thorough Testing with Jasmine Flow
author: Brian Takita
date: 9/14/13 7:00 PM
---

Automated testing helps to ensure that your software does not have regressions as you make changes. These changes include refactorings, new features, bug fixes, etc. A Software product has an intricate set of behavior which includes a large number of edge cases.

I'm a [fan of black box](/posts/automated-black-box-testing/) testing, because it is decoupled from the implementation. The implication is the <a href="http://briantakita.wordpress.com/2013/09/15/why-its-better-to-strive-toward-accomplishment-rather-than-method/" target="_blank">**what** is verified, rather than the **how**</a>.

<hr class="more"/>

Spec frameworks such as rspec and jasmine give you the constructs to perform edge case testing. Unfortunately, the same setup is repeated when verifying different aspects of the state of the system. This leads to long test suites and even to the motivation to skip edge case testing (sacrificing test coverage) or combining tests (sacrificing clarity of intent of the test).

This juxtaposition led me to create jasmine-flow. The premise of jasmine-flow is to organize tests into a series of steps which you can make assertions up reaching a certain state.

```js
flow("visit /login|invalid login|valid login", function(fl) {
  fl.step("visit /login", function() {
      // I'm assuming the usage a JSDOM here
      window.location.href = "http://yoursite.com/login";
      // setupPage is defined elsewhere to set up your page framework.
      setupPage();
    })
    .aver("shows a login form", function() {
      var $login = $("#login");
      expect($login.length).toEqual(1);
    })

    .step("fill out login form with invalid login credentials and submit", function() {
      $("#login .name").val("user@example.com");
      $("#login .password").val("wrong-password");
      $("#login button").click();
      $("#login").submit();
    })
    .aver("sends a POST /login with the name and password", function() {
      // Using http://github.com/pivotal/jasmine-ajax
      expect(ajaxRequests.length).toEqual(1);
      expect(mostRecentAjaxRequest.method).toEqual("POST");
      expect(mostRecentAjaxRequest.url).toEqual("/login");
      expect(JSON.parse(mostRecentAjaxRequest.params)).toEqual({name: "user@example.com", password: "wrong-password"});
    })
    .step("POST /login 403", function() {
      mostRecentAjaxRequest.response({
        status: 403,
        responseText: JSON.stringify({
          message: "Invalid email/password combination"
        })
      })
    })
    .aver("does not redirect to the home page", function() {
      expect(window.location.href).toEqual("http://yoursite.com/login");
    })
    .aver("shows an error", function() {
      expect($("#login .error").text()).toContain("Invalid email/password combination");
    })

    .step("fill out login form with valid login credentials and submit", function() {
      $("#login .name").val("user@example.com");
      $("#login .password").val("12345");
      $("#login button").click();
      $("#login").submit();
    })
    .aver("sends a POST /login with the name and password", function() {
      // Using http://github.com/pivotal/jasmine-ajax
      expect(ajaxRequests.length).toEqual(2);
      expect(mostRecentAjaxRequest.method).toEqual("POST");
      expect(mostRecentAjaxRequest.url).toEqual("/login");
      expect(JSON.parse(mostRecentAjaxRequest.params)).toEqual({name: "user@example.com", password: "12345"});
    })
    .step("POST /login 200", function() {
      mostRecentAjaxRequest.response({
        status: 200,
        responseText: JSON.stringify({
          name: "User",
          email: "user@example.com"
        })
      })
    .aver("redirects to the home page", function() {
      expect(window.location.href).toEqual("/");
    })
  ;
});
```

Compare this with the traditional nested describe solution in Jasmine...

```js
describe("Someone visits /login", function() {
  beforeEach(function() {
    // I'm assuming the usage a JSDOM here
    window.location.href = "http://yoursite.com/login";
    // setupPage is defined elsewhere to set up your page framework.
    setupPage();
  });

  it("shows a login form", function() {
    var $login = $("#login");
    expect($login.length).toEqual(1);
  });

  describe("fill out and submitting the login form", function() {
    beforeEach(function() {
      $("#login .name").val("user@example.com");
      $("#login .password").val("12345");
      $("#login button").click();
      $("#login").submit();
    });

    it("sends a POST /login with the name and password", function() {
      // Using http://github.com/pivotal/jasmine-ajax
      expect(ajaxRequests.length).toEqual(1);
      expect(mostRecentAjaxRequest.method).toEqual("POST");
      expect(mostRecentAjaxRequest.url).toEqual("/login");
      expect(JSON.parse(mostRecentAjaxRequest.params)).toEqual({name: "user@example.com", password: "12345"});
    });

    describe("POST /login 200", function() {
      beforeEach(function() {
        mostRecentAjaxRequest.response({
          status: 200,
          responseText: JSON.stringify({
            name: "User",
            email: "user@example.com"
          })
        });
      });

      it("redirects to the home page", function() {
        expect(window.location.href).toEqual("/");
      });
    });

    describe("POST /login 403", function() {
      beforeEach(function() {
        mostRecentAjaxRequest.response({
          status: 403,
          responseText: JSON.stringify({
            message: "Invalid email/password combination"
          })
        });
      });

      it("does not redirect to the home page", function() {
        expect(window.location.href).toEqual("http://yoursite.com/login");
      });

      it("shows an error", function() {
        expect($("#login .error").text()).toContain("Invalid email/password combination");
      });
    });
  });
});
```

In the nested describe solution, each it requires identical setup code execution which is repeated for each test. This effectively creates a (n log n) test suite for each setup * it. In the jasmine-flow example, the setup code is executed one time, with assertions interspersed (n).

From a personal experience, I've found that it is also easier to organize all of the edge cases since the structure is simpler as a linear flow, opposed to a tree. It's a bit less pure, but more relevant to linear user actions.

On my current project, it yielded close to a 10x performance boost to my test suite (400 seconds to 40 seconds). I plan on using this pattern more often, since it also scales in complexity better than a describe (context) tree.
