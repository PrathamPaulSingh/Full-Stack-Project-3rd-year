const {Router} = require('express');

const { viewApplications,
        acceptApplication,
        rejectApplication } = require('../controllers/application');


const router = Router();


router.get('/applications' ,viewApplications)

router.put('/applications/:appId' , acceptApplication);

router.put('/applications/reject/:appId' , rejectApplication);

module.exports = router;