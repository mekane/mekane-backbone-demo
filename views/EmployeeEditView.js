var app = app || {};

(function(){

    function makeInput( name, value ){
        return $('<input/>').attr({
            name: name,
            type: 'text',
            value: value
        });
    }


    app.EmployeeEditView = Backbone.View.extend({

        tagName: 'div',
        className: 'employee edit',

        events: {
            'change input' : 'updateModel'
        },

        initialize: function initialize(){
            this.model.on('change', this.render, this);

            this.render();
            $('#editViews').append( this.$el );
        },

        render: function render(){
            this.$el.empty();

            this.$el.append( makeInput( 'name', this.model.get('name') ));
            this.$el.append( makeInput( 'role', this.model.get('role') ));
            this.$el.append( makeInput('drink', this.model.get('drink')));

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
