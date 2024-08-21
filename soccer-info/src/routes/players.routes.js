import {Router} from 'express';
import { getPlayers, getIdPlayer, createPlayer, updatePlayer, deletePlayer} from '../controllers/players.controllers.js'
const router = Router();

router.get("/", (req, res) =>{
    res.send('The glove does not fit');
});

// get all players (not recommended for production)
router.get("/players", getPlayers);

//get a player by id
router.get("/players/:id", getIdPlayer);

//create a player
router.post("/players", createPlayer)

//update a player
router.put('/players', updatePlayer);

//delete a player
router.delete('/players', deletePlayer);



export default router;