
var restify = require('restify'),
    mongojs = require('mongojs');

//Configurations
var mongoHost = 'mongodb://localhost:',
    mongoPort = 27017,
    mongoDb   = "/demo",
    mongoPath = mongoHost+mongoPort+mongoDb;
var serverPort = 3000;

// Connect to the db and init the collections
var db = mongojs(mongoPath, ['employees'] );


//Cross-Domain Requests
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


//Set up Server
var server = restify.createServer({
    name: 'Employees',
});
server.use( allowCrossDomain );
server.use( restify.bodyParser( {mapParams: false }) );
server.use( restify.queryParser({mapParams: false }) );

//Utility
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


/* ---------- REST API Actions ------------------------------------------
 * 
 *  /employees
 *    get: List all artists
 *    post: Add a new artist
 *
 *  /employees/?query
 *    get: List employees by properties in query params
 *    put: Update employee by query params 
 *
 *  /employees/:id
 *    get: Get details for a single employee
 *    put: Replace details for a single employee
 *    del: Delete the employee
 * 
 * ----------------------------------------------------------------------*/

server.get('/employees', function( req, res, next ){
    var query = isEmpty(req.query) ? {} : req.query;

    console.log('GET /employees/',query);

    db.employees.find(query, function(err, results){
        res.json( err ? err : results );
    });

    return next();
});

server.post('/employees', function( req, res, next ){

    console.log('POST /employees');
    console.log( req.body );
    console.log('---');

    if ( req.body ){
        if ( typeof(req.body) === 'string' ){
            req.body = JSON.parse(req.body);
        }

        db.employees.save( req.body, function(err, doc){
            if ( err ){
                res.send( 500, err );
            }
            else {
                res.json(doc); //echo back the new Employee, with ID
            }
        });
    }
    else {
        res.send( 500, "No POST Data" );
    }

    return next();
});


server.get('/employees/:id', function( req, res, next ){
    var employeeId = req.params['id'];

    console.log('GET /employees/'+employeeId);

    if ( employeeId ){
        db.artists.findOne({id:mongojs.ObjectId(employeeId)}, function(err, employee){
            res.json( err ? err : employee );
        });
    }
    else {
        res.json([]);
    }

    return next();
});

server.put('/employees/:id', function( req, res, next ){
    var employeeId = req.params['id'];

    console.log('PUT /employees/'+employeeId);
    console.log( req.body );
    console.log('---');

    if ( req.body ){
        if ( typeof(req.body) === 'string' ){
            req.body = JSON.parse(req.body);
        }
        delete req.body['_id'];
        req.body['_id'] = mongojs.ObjectId(employeeId);

        db.employees.save( req.body, function(err){
            if ( err ){
                res.send( 500, err );
            }
            else {
                res.send(200);
            }
        });
    }
    else {
        res.send(500, "No PUT Data");
    }
    return next();
});

server.del('/employees/:id', function( req, res, next ){
    var employeeId = req.params['id'];

    console.log('DELETE /employees/'+employeeId);
    db.employees.remove({_id: mongojs.ObjectId(employeeId)}, function(err){
        res.send( err ? 500 : 200 );
    });
    return next();
});


//Start server
server.listen(serverPort, function(){
    console.log('Server '+server.name+' listening on port '+serverPort);
});
