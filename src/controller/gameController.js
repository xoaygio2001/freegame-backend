import gameService from "../services/gameService";


let getAllTopGame = async (req, res) => {
    try {
        let infor = await gameService.getAllTopGame(req.query.limit, req.query.type);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}



let getGameById = async (req, res) => {
    try {
        let infor = await gameService.getGameById(req.query.id);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}



let CreateNewGame = async (req, res) => {
    try {
        let infor = await gameService.CreateNewGame(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let CreateNewAccount = async (req, res) => {
    try {
        let infor = await gameService.CreateNewAccount(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let DeleteAccount = async (req, res) => {
    try {
        let infor = await gameService.DeleteAccount(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let DeleteGame = async (req, res) => {
    try {
        let infor = await gameService.DeleteGame(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}






let getAllCodeService = async (req, res) => {
    try {
        let infor = await gameService.getAllCodeService(req.query.type);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllTagGame = async (req, res) => {
    try {
        let infor = await gameService.getAllTagGame();
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}


let getAllTopGame18 = async (req, res) => {
    try {
        let infor = await gameService.getAllTopGame18(req.query.limit);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let LoginIntoSystem = async (req, res) => {
    try {
        let infor = await gameService.LoginIntoSystem(req.query.username, req.query.password);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let findGameByKeyWord = async (req, res) => {
    try {
        let infor = await gameService.findGameByKeyWord(req.query.keyword);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}



let getGameByCategory = async (req, res) => {
    try {
        let infor = await gameService.getGameByCategory(req.query.tagId, req.query.limit, req.query.pageNumber);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getCategoryByTagId = async (req, res) => {
    try {
        let infor = await gameService.getCategoryByTagId(req.query.tagId);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllAccount = async (req, res) => {
    try {
        let infor = await gameService.getAllAccount(req.query.limit, req.query.pageNumber);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getAllGame = async (req, res) => {
    try {
        let infor = await gameService.getAllGame(req.query.limit, req.query.pageNumber);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}





let ChangPasswordAccount = async (req, res) => {
    try {
        let infor = await gameService.ChangPasswordAccount(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let ChangeInforAccount = async (req, res) => {
    try {
        let infor = await gameService.ChangeInforAccount(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let ChangeInforGame = async (req, res) => {
    try {
        let infor = await gameService.ChangeInforGame(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getSuggestGame = async (req, res) => {
    try {
        let infor = await gameService.getSuggestGame();
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let getCommentByGameId = async (req, res) => {
    try {
        let infor = await gameService.getCommentByGameId(req.query.gameId,req.query.moreCommentNumber,req.query.type);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}



let CreateNewSoftware = async (req, res) => {
    try {
        let infor = await gameService.CreateNewSoftware(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}


let getAllSoftware = async (req, res) => {
    try {
        let infor = await gameService.getAllSoftware(req.query.limit,req.query.pageNumber);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let ChangeInforSoftware = async (req, res) => {
    try {
        let infor = await gameService.ChangeInforSoftware(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let DeleteSoftware = async (req, res) => {
    try {
        let infor = await gameService.DeleteSoftware(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}

let CreateNewComment = async (req, res) => {
    try {
        let infor = await gameService.CreateNewComment(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server'
        })
    }
}












module.exports = {
    CreateNewGame: CreateNewGame,
    getAllCodeService: getAllCodeService,
    getGameById: getGameById,
    getAllTopGame: getAllTopGame,
    getAllTagGame: getAllTagGame,
    getAllTopGame18: getAllTopGame18,
    CreateNewAccount: CreateNewAccount,
    LoginIntoSystem: LoginIntoSystem,
    findGameByKeyWord: findGameByKeyWord,
    getGameByCategory: getGameByCategory,
    getCategoryByTagId: getCategoryByTagId,
    ChangPasswordAccount: ChangPasswordAccount,
    DeleteAccount: DeleteAccount,
    getAllAccount: getAllAccount,
    ChangeInforAccount: ChangeInforAccount,
    getAllGame: getAllGame,
    DeleteGame: DeleteGame,
    ChangeInforGame: ChangeInforGame,
    getSuggestGame: getSuggestGame,
    getCommentByGameId: getCommentByGameId,
    CreateNewSoftware: CreateNewSoftware,
    getAllSoftware: getAllSoftware,
    ChangeInforSoftware: ChangeInforSoftware,
    DeleteSoftware: DeleteSoftware,
    CreateNewComment: CreateNewComment


}