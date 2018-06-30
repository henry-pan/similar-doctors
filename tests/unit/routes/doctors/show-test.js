import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | doctors/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:doctors/show');
    assert.ok(route);
  });
});
