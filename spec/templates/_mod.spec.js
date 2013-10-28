'use strict';

describe('<%= moduleName %>', function() {

  var <%= moduleName %>;
  beforeEach(function() {
    <%= moduleName %> = require('../lib/<%= moduleName %>');
  });

  describe('Your first test', function() {

    it('does something meaningful', function() {
      expect(<%= moduleName %>).toBeDefined();
    });

  });

});
