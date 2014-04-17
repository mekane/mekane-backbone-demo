var app = app || {};

(function(){

    app.EmployeeView = Backbone.View.extend({

        el: '#employee',

        initialize : function initialize(){
            this.model.on('change', this.render, this);
            this.render();
        },

        render : function render(){
            // this.$ is scoped to this element, i.e. $('selector', this.$el); 
            this.$('.name').text(  this.model.get('name') );
            this.$('.role').text(  this.model.get('role') );
            this.$('.drink').text( this.model.get('drink'));

            return this;
        }
    });
}());
