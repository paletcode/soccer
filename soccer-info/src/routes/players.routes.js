import {Router} from 'express';

const router = Router();

router.get("/", (req, res) =>{
    res.send('The glove does not fit');
});

// get all players (not recommended for production)
router.get("/players", (req, res) => {
    console.log('players query')
});

//get a player by id
router.get("/players/:id", (req, res) => {
    
});

//create a player
router.post("/players", (req, res) => {
    
})

//update a player
router.put('/players', (req, res) => {

});

//delete a player
router.delete('/players', (req, res) => {

});



export default router;