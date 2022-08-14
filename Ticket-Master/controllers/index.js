
exports.home = function(req, res, next) {
    res.render('index', { title: 'Home',
    userName: req.user ? req.user.username : '' });
}

exports.concert = function(req, res, next){
    res.render('index', { title: 'Concert',
    userName: req.user ? req.user.username : '' });
}
 
exports.about = function(req, res, next) {
    res.render('index', { title: 'About',
    userName: req.user ? req.user.username : '' });
}
exports.contact = function(req, res, next) {
    res.render('index', { title: 'Contact Me',
    userName: req.user ? req.user.username : '' });
}