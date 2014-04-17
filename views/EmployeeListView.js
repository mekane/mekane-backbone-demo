var app = app || {};

(function(){

    app.EmployeeListView = Backbone.View.extend({

        tagName: 'li',

        initialize : function initialize( ){
            this.model.on('change', this.render, this);

            this.render();

            $('#listViews').append( this.$el );
        },

        render : function render(){
            this.$el.text( this.model.get('name')+' the '+this.model.get('role' )+' drinks '+this.model.get('drink') );

            return this;
        }
    });
}());
