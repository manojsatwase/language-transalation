const asyncHandler = require('express-async-handler');
const Languages = require('../models/languages');

// Create a new language
const createLanguage = asyncHandler(async(req,res)=>{
    try {
        const { lang_name,lang_value } = req.body;
        const langs = await Languages.find();
        const langExits = langs.length ? langs.some(lang=>lang.lang_value === lang_value) : false;

       // duplicate languages not allow
        if(!langExits){
          const language = await Languages.create({ lang_name,lang_value});
          res.status(201).json(language);
        }else{
          res.status(403).json({
            message:`${lang_name} languages are already exists!`
          });
        }
       
      } catch (error) {
        console.error('Error creating language:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}) 


// Get all languages
const getLanguages = asyncHandler(async(req,res)=>{
  try {
    const languages = await Languages.find();
    res.json(languages);
  } catch (error) {
    console.error('Error fetching languages:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

// Add other routes for updating, deleting, etc.

module.exports = {
  createLanguage,
  getLanguages
};
