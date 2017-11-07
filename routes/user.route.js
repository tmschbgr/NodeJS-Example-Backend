// Dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// ---------------------------------------------------------
// User Routes
// ---------------------------------------------------------

/** 
 * @apiGroup User
 * @api {get} /users get
 * @apiName GetUsers
 * @apiDescription Returns all the users
 * @apiPermission Read 1
 * @apiVersion 1.0.0
*/
router.get('/', function (req, res, next) {


    // MongoDB example
    // var User = req.locals.db.models.User;
    // User.find().select(selectQuery).then(users => res.json(users)).catch(err => next(err));

    return res.json([{
        active: true,
        name: "Peter Smith",
        givenName: "Peter",
        surname: "Smith",
        mail: "peter.smith@gmail.com"
    },
    {
        active: true,
        name: "Alan Brown",
        givenName: "Alan",
        surname: "Brown",
        mail: "alan.brown@gmail.com"
    },
    {
        active: true,
        name: "Alex Meyer",
        givenName: "Alex",
        surname: "Meyer",
        mail: "alex.meyer@gmail.com"
    }])

});

/** 
 * @apiGroup User
 * @api {get} /users/me me
 * @apiName Me
 * @apiDescription Returns the user object of the active user
 * @apiPermission Read
 * @apiVersion 1.0.0
*/
router.get('/me', function (req, res, next) {
    return res.json({
        active: true,
        name: "Peter Smith",
        givenName: "Peter",
        surname: "Smith",
        mail: "peter.smith@gmail.com"
    });
});


/** 
 * @apiGroup User
 * @api {post} /users
 * @apiName Add user
 * @apiDescription Adds a new user
 * @apiPermission Admin
 * @apiVersion 1.0.0
*/
router.post('/', function (req, res, next) {
   
   // MongoDB example

    // var User = req.locals.db.models.User;
    // var updateBody = {};
    // if (req.body.mail) {
    //     updateBody.mail = req.body.mail;
    //     updateBody.name = req.body.mail;
    // }
    // else return res.status(400).send();
    // User.create(updateBody, function (err, user) {
    //     if (err) return next(err);
    //     log.createLog(req.locals, 'user', 'insert', {}, user);
    //     res.json(user);
    // });
    return res.json(req.body);
});


// ---------------------------------------------------------
// User Detail Routes
// ---------------------------------------------------------

/** 
 * @apiGroup User
 * @api {get} /users/:id getOne
 * @apiName GetUser
 * @apiDescription Returns one user
 * @apiPermission Read
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id Unique User ID
*/
router.get('/:id', function (req, res, next) {

    // MongoDB example
    
    //var User = req.locals.db.models.User;
    //Check if params are valid ObjectIds
    // if (req.params.id && !mongoose.Types.ObjectId.isValid(req.params.id))
    //     return res.status(400).send();
    // var selectQuery = req.locals.user._id.equals(req.params.id)) ? {} : { mail: 1, name: 1 };
    // User.findById(req.params.id).select(selectQuery).then(user => res.json(user)).catch(err => next(err));

    return res.json({
        active: true,
        name: "Peter Smith",
        givenName: "Peter",
        surname: "Smith",
        mail: "peter.smith@gmail.com"
    });
});


/** 
 * @apiGroup User
 * @api {put} /users/:id update
 * @apiName PutUser
 * @apiDescription updates an existing user
 * @apiPermission Admin
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id Unique User ID
*/
router.put('/:id', function (req, res, next) {

    return res.json(req.body);

});

/** 
 * @apiGroup User
 * @api {delete} /users/:id delete
 * @apiName DeleteUser
 * @apiDescription Deletes an existing user
 * @apiPermission Admin
 * @apiVersion 1.0.0
 * 
 * @apiParam {String} id Unique User ID
*/
router.delete('/:id', function (req, res, next) {

    return res.json(req.params.id);

});




// Return Router
module.exports = router;