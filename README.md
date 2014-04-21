# Backbone Demo App #

A simple demo of some of the features of Backbone.

## Branches ##

Branches are bookmarks to different parts of the demo. Check them out in order to follow the project's progress and show off more and more features of Backbone.

### P1 ###
A barebones web page with just a generic Model and some getters. 

*Demonstrates:*
   1. Basic setup of a hand-built page, library requirements (jQuery, Underscore) 
   2. Simple example of creating a model. Demo getters and setters.

### P2 ###
Add more models. Call displayEmployee with different ones. 

*Demonstrates:*
   1. Using multiple models with one view.

### P3 ###
Adds a View object. Replaces the displayEmployee function with the view render function. 

*Demonstrates:*
   1. Declaration and structure of a Backbone View.
   2. Application namespace convention (app).
   3. Using a View to update an element that already exist on the page.
   4. Using a View to track changes to a model (call set on the Model and see automatic updates).

### P4 ###
Adds a Model class for Employees with default values. Changes the EmployeeView to use individual elements, automatically added to the DOM on creation.

*Demonstrates:*
   1. Declaration and structure of a Backbone Model class. Default values.
   2. Using a View that sets up and updates its own element.
   3. Multiple views and multiple models - views listen to their own models.

### P5 ###
Adds a ListView. Set up multiple views for each Employee

*Demonstrates:*
   1. Multiple views of the same Model. All update when the model updates.

### P6 ###
Adds an EditView. Changes to the inputs set properties on the Model.

*Demonstrates:*
   1. Event binding in the View. 
   2. Yet another view of the same model. (Call set from console and the edit view updates too).
   3. Bonus: private function in the EditView (makeInput).

### P7 ###
Adds a Collection. Use it to keep track of the views.  

*Demonstrates:*
   1. Declaration and structure of a Collection. Collection methods.
   2. Collection events.
   3. Collection underscore methods - filter and sort. 

### P8 ###
Adds Handlebars.js library for rendering views instead of jQuery DOM manipulations. Added inline templates. 

*Demonstrates:*
   1. Inline Handlebars templates
   2. How to process a model's values through a template into HTML.

### P9 ###
Adds a URL to the employee collection to load employees from a JSON API.

*Demonstrates:*
   1. How easy it is to fetch() models and populate a collection.
   2. The power of the implicit connection between Backbone and a JSON API.
   3. A sample REST API written in Node.js

### P10 ###
Adds a few little connections that tie the update form to save back to the API (via PUT), and adds a "delete" button that sends a DELETE request to the API. Adds a "new 

*Demonstrates:*
   1. Collection.create to make and POST a new Model.
   2. Model.save to PUT changes to a Model to the API.
   3. Model.destroy to send a DELETE to the server.
   4. Model events that are sent to the views to remove themselves.

### Tips ###

   1. Use `git config alias.co checkout` for less verbose switching between branches.
