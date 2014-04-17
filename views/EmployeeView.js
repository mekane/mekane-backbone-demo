var app = app || {};

(function(){

    app.EmployeeView = Backbone.View.extend({

        tagName: 'div',
        className: 'employee',

        initialize : function initialize(){
            this.model.on('change', this.render, this);

            this.render();

            $('body').append( this.$el );
            //convention - can pass in an option for 'parent', or let the app handle this
        },

        render : function render(){
            //Not best practice - almost worst practice
            this.$el.empty();

            this.$el.append( $('<div></div>').addClass('name').text( this.model.get('name' )));
            this.$el.append( $('<div></div>').addClass('role').text( this.model.get('role' )));
            this.$el.append( $('<div></div>').addClass('drink').text(this.model.get('drink')));

            return this;
        }
    });
}());
