var app = app || {};

(function(){

    var demoRouter = Backbone.Router.extend({

        routes: {
            "": "index",
            "employees/all":            "showAll",
            "employees/role/:role":     "filterByRole",
            "employees/drinks/:drink" : "filterByDrink"
        },

        index: function() {
            console.log("INDEX");
        },

        showAll: function(){
            console.log("SHOW ALL");
            app.employeeList.resetViews();
        },

        filterByRole: function( role ){
            console.log("SHOW ALL "+role+"s");
            app.employeeList.resetViews( employeeList.where({role:role}) );
        },

        filterByDrink: function( drink ){
            console.log("SHOW ALL "+drink+" drinkers");
            employeeList.resetViews( employeeList.where({drink:drink}) );
        }
    
    });

    app.router = new demoRouter();

}()); 
