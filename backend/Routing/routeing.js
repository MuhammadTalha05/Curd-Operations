import express from 'express';
import {addUser, alldata,singleuser, editUser,deleteUser} from '../Controllers/userControllers.js'
const router = express.Router();

router.route('/add').post(addUser);
router.route('/alldata').get(alldata);
router.route('/:id').get(singleuser);
router.route('/:id').put(editUser);
router.route('/:id').delete(deleteUser)

export default router;