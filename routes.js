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
        },

        filterByRole: function( role ){
            console.log("SHOW ALL "+role+"s");
        },

        filterByDrink: function( drink ){
            console.log("SHOW ALL "+drink+" drinkers");
        }
    
    });

    app.router = new demoRouter();

}()); 
