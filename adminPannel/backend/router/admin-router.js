const express = require('express')
const router =express.Router()
const main = require('../controller/admin-controller')
const authMiddleWare = require('../middleware/authmiddleware')
const adminmiddleware =require('../middleware/adminmiddileware')


router.route('/users').get(authMiddleWare,adminmiddleware,main.getUserStats)
router.route('/users/:id').get(authMiddleWare,adminmiddleware,main.getUserbyid)
router.route('/users/ubdate/:id').patch(authMiddleWare,adminmiddleware,main.ubdateuserbyId)

router.route('/users/delete/:id').delete(authMiddleWare, adminmiddleware, main.deleteuserbyid);
 



module.exports = router