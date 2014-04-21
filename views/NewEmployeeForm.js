var app = app || {};

(function(){

    app.NewEmployeeForm = Backbone.View.extend({

        el: '#newEmployeeForm',

        events: {
            'click button': 'addEmployee'
        },

        addEmployee: function addEmployee( e ){
        /* 
            var newEmployee = new app.Employee({
                name: this.$('input[name="name"]').val(),
                role: this.$('input[name="role"]').val(),
                drink:this.$('input[name="drink"]').val(),
            });

            newEmployee.save();
    
            app.employeeList.add( newEmployee );
        */

            app.employeeList.create({
                name: this.$('input[name="name"]').val(),
                role: this.$('input[name="role"]').val(),
                drink:this.$('input[name="drink"]').val()
            });

            this.el.reset();
        }

    });
}());
