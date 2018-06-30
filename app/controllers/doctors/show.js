import Controller from '@ember/controller';

export default Controller.extend({
    // Sorts by score.    
    sorting: ['score:desc'],
    sortedContent: Ember.computed.sort('model.doctors','sorting')
});
