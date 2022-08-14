// create a reference to the model
let ConcertModel = require('../models/concert');

module.exports.concertList = function(req, res, next) {  

    ConcertModel.find((err, ConcertList) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(concertList);
            res.render('concert/list', {
                title: 'Concert List', 
                ConcertList: ConcertList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });

}

// Gets a Concert by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    ConcertModel.findById(id, (err, ConcertToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('concert/details', {
                title: 'Concert Details', 
                Concert: ConcertToShow
            })
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    ConcertModel.findById(id, (err, ConcertToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('concert/add_edit', {
                title: 'Edit Concert', 
                Concert: ConcertToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedConcert = ConcertModel({
        _id: req.body.id,
        name: req.body.name,
        state: req.body.state,
        price: req.body.price
    });

    // console.log(updatedConcert);

    ConcertModel.updateOne({_id: id}, updatedConcert, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/concert/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newConcert = ConcertModel();

    res.render('concert/add_edit', {
        title: 'Add a new Concert',
        Concert: newConcert,
        userName: req.user ? req.user.username : ''
    })          
}

module.exports.processAddPage = (req, res, next) => {

    let newConcert = ConcertModel({
        _id: req.body.id,
        name: req.body.name,
        state: req.body.state,
        price: req.body.price
    });

    ConcertModel.create(newConcert, (err, Concert) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(Concert);
            res.redirect('/concert/list');
        }
    });

}


module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    ConcertModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/concert/list');
        }
    });
}
