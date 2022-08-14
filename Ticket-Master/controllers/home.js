
module.exports.homelist = function(req, res, next) {  
   
    res.render('home', { 
        title: 'Home',
        userName: req.user ? req.user.username : ''
    })           
     
}
