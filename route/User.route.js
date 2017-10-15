const createUserController = require('./../controller/CreateNewUserController');
const detailUserController = require('./../controller/DetailUserController');
const getAllUserController = require('./../controller/GetAllUserController');
const deleteUserController = require('./../controller/DeleteUserController');
const updateUserController = require('./../controller/UpdateUserController');

/**
 * User route
 * @param server
 */
module.exports = function (server) {
    /**
     * Create new user
     */
    server.post('/user/create', createUserController);

    /**
     * Get all user
     */
    server.get('/user/all', getAllUserController);

    /**
     * Detail user
     */
    server.get('/user/detail/:userId', detailUserController);

    /**
     * Update user
     */
    server.put('/user/update/:userId', updateUserController);

    /**
     * Delete user
     */
    server.post('/user/delete', deleteUserController);
};