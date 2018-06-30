import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(params){
        return RSVP.hash({
            doctor: this.get('store').findRecord('doctor', params.doctor_id),
            doctors: this.get('store').findAll('doctor')
        })
    }
    
    //model(params){
    //    return this.get('store').findRecord('doctor', params.doctor_id);
    //}
    
    //,model() {
    //    return this.get('store').findAll('doctor');
    //}
});
