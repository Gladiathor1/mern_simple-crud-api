const router = require('express').Router();
let Url = require('../models/urls');

router.route('/').get((req,res)=>{
    Url.find().then(myurls=> res.json(myurls)).catch(err=>res.status(400).json('Error : '+err))
})

router.route('/add').post((req,res)=>{
    const urlName = req.body.urlName;

    const newUrl = new Url({urlName});

    newUrl.save().then(()=> res.json("url added")).catch(err=>res.status(400).json('Error : '+err))
})


// router.route('/:id').get((req, res) => {
//     Url.findById(req.params.id)
//       .then(exercise => res.json(exercise))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

router.route('/:name').get((req, res) => {
  Url.find({urlName:req.params.name})
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Url.findByIdAndDelete(req.params.id)
    .then(() => res.json('Url deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Url.findById(req.params.id)
    .then(MyUrl => {
      MyUrl.urlName = req.body.urlName;
      

      MyUrl.save()
        .then(() => res.json('Url updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;