var app = app || {};

(function(){

    app.Employee = Backbone.Model.extend({
    
        idAttribute: '_id',

        defaults: {
            name: 'New Employee',
            role: 'developer',
            years: 0,
            drink: 'unknown', 
        }

    });
}());
