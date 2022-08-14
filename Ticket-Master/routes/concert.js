var express = require('express');
var router = express.Router();

let concertController = require('../controllers/concert');

// Helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    
    // ADD YOUR CODE HERE      
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();  

}
/* GET list of items */
router.get('/list', requireAuth, concertController.concertList);

// Route for Details
router.get('/details/:id', requireAuth, concertController.details);

// Routers for edit
router.get('/edit/:id', requireAuth,concertController.displayEditPage);
router.post('/edit/:id', requireAuth,concertController.processEditPage );

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth,concertController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth,concertController.processAddPage);


router.get('/delete/:id', requireAuth,concertController.performDelete);


module.exports = router;