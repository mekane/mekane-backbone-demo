var app = app || {};

(function(){

    app.Employee = Backbone.Model.extend({

        defaults: {
            name: 'New Employee',
            role: 'developer',
            years: 0,
            drink: 'unknown', 
        }

    });
}());
