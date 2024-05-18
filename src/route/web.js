import express from 'express';

import gameController from '../controller/gameController';


let router = express.Router();

let initWebRoutes = (app) => {

    //GAME

    router.post('/api/create-new-game', gameController.CreateNewGame)
    router.post('/api/create-new-account', gameController.CreateNewAccount)
    router.post('/api/delete-account', gameController.DeleteAccount)
    router.post('/api/delete-game', gameController.DeleteGame)
    router.post('/api/change-password-account', gameController.ChangPasswordAccount)
    router.post('/api/change-infor-account', gameController.ChangeInforAccount)
    router.post('/api/change-infor-game', gameController.ChangeInforGame)

    
    

    
    router.get('/api/get-top-game', gameController.getAllTopGame)
    router.get('/api/get-game-by-id', gameController.getGameById)
    router.get('/api/get-allcode', gameController.getAllCodeService)
    router.get('/api/get-all-taggame', gameController.getAllTagGame)
    router.get('/api/get-all-topgame-18', gameController.getAllTopGame18)
    router.get('/api/login-into-system', gameController.LoginIntoSystem)
    router.get('/api/find-game-by-keyword', gameController.findGameByKeyWord)
    router.get('/api/get-game-by-category', gameController.getGameByCategory)
    router.get('/api/get-category-by-tagid', gameController.getCategoryByTagId)
    router.get('/api/get-all-account', gameController.getAllAccount)
    router.get('/api/get-all-game', gameController.getAllGame)

    
    
    

    return app.use("/", router);
}

module.exports = initWebRoutes