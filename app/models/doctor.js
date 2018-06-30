import DS from 'ember-data';

export default DS.Model.extend({
    pic: DS.attr(),
    name: DS.attr('string'),
    specialty: DS.attr('string'),
    area: DS.attr('string'),
    score: DS.attr('number'),
    bio: DS.attr('string')
});
