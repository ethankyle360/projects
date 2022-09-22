// Import express & set up its router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User List');
})

router.get('/new', (req, res) => {
    res.send('User New Form');
})

router.post('/', (req, res) => {
    res.send('Create User');
})

// Get dynamic url
router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User With ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`);
    })


// router.get('/:id', (req, res) => {
//     res.send(`Get User With ID ${req.params.id}`);
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User With ID ${req.params.id}`);
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User With ID ${req.params.id}`);
// })

module.exports = router;