import {pool} from '../db.js'
// get ALL players
export const getPlayers  = (req, res) => console.log('players query')
//get player bi Id.
export const getIdPlayer = (req, res) => console.log('players id query')

//get player bi Id.
export const createPlayer = (req, res) => {
    pool.query('INSERT INTO players () VALUES (?,?)', [])
}

//get player bi Id.
export const updatePlayer = (req, res) => console.log('update player query')
//get player bi Id.
export const deletePlayer = (req, res) => console.log('delete player query')