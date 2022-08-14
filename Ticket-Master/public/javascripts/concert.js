// create a reference to the model
let ConcertModel = require('../models/concert');

module.exports.ConcertList = function(req, res, next) {  

    ConcertModel.find((err, concertList) => {
        
        if(err)
        {
            return console.error(err);
        }
        else
        {
            // console.log(concertList);
            res.render('concert/list', {
                title: 'concert List', 
                ConcertList: concertList
            })            
        }
    });

}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    ConcertModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('concert/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = ConcertModel({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    // console.log(updatedItem);

    ConcertModel.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/concert/list');
        }
    });
}


module.exports.displayAddPage = (req, res, next) => {
    let newItem = ConcertModel();

    res.render('concert/add_edit', {
        title: 'Add a new Item',
        item: newItem
    })          
}

module.exports.processAddPage = (req, res, next) => {

    let newItem = ConcertModel({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size : {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split(",").map(word => word.trim())
    });

    ConcertModel.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
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
