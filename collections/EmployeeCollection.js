var app = app || {};

(function(){

    app.EmployeeCollection = Backbone.Collection.extend({

        model: app.Employee,

        initialize: function initialize(){
            this.on('add', this.employeeAdded );

            this.boxViews  = [];
            this.listViews = [];
            this.editViews = [];
        },

        employeeAdded: function employeeAdded( employee ){
            this.boxViews.push( new app.EmployeeView({ model: employee }) );
            this.listViews.push(new app.EmployeeListView({ model: employee }));
            this.editViews.push(new app.EmployeeEditView({ model: employee }));
        },


        resetViews : function resetViews( newList ){
            _.invoke( this.boxViews,  'remove' );
            _.invoke( this.listViews, 'remove' );
            _.invoke( this.editViews, 'remove' );

            var list = newList || this.models;

            _.each( list, function(e){ this.employeeAdded(e) }, this );
        }
    });
}());
