const express = require('express');
const { createLanguage,getLanguages} = require('../controllers/languages');

const router = express.Router();

router.route('/').post(createLanguage).get(getLanguages);

module.exports = router;