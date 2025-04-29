const express = require('express');
const router = express.Router();


const { getAllJobs, getJob, createJob, updateJob, deletJob} = require('../controllers/jobs');


router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').get(getJob).delete(deletJob).patch(updateJob);


module.exports = router;