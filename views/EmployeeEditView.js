var app = app || {};

(function(){

    app.EmployeeEditView = Backbone.View.extend({

        tagName: 'div',
        className: 'employee edit',

        events: {
            'change input' : 'updateModel'
        },

        initialize: function initialize(){

            this.template = Handlebars.compile( $('#employeeEditViewTemplate').html() );
    
            this.model.on('change', this.render, this);

            this.render();
            $('#editViews').append( this.$el );
        },

        render: function render(){
            this.$el.html( this.template( this.model.toJSON() ));
            return this;
        },

        updateModel: function updateModel( e ){
            var input = $(e.target),
                 attr = input.attr('name'),
                value = input.val();

            this.model.set( attr, value );
        }

    });
}());
