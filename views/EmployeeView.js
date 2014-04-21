var app = app || {};

(function(){

    app.EmployeeView = Backbone.View.extend({

        tagName: 'div',
        className: 'employee',

        initialize : function initialize(){

            this.template = Handlebars.compile( $('#employeeBoxViewTemplate').html() );

            this.model.on('change', this.render, this);
            this.model.on('remove', this.remove, this);

            this.render();
            $('#boxViews').append( this.$el );
        },

        render : function render(){
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        }
    });
}());
