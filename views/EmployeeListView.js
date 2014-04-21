var app = app || {};

(function(){

    app.EmployeeListView = Backbone.View.extend({

        tagName: 'li',

        initialize : function initialize( ){

            this.template = Handlebars.compile( $('#employeeListViewTemplate').html() );

            this.model.on('change', this.render, this);

            this.render();

            $('#listViews').append( this.$el );
        },

        render : function render(){
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        }
    });
}());
