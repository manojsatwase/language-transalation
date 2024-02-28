function LanguageSelector({ onChange }) {
    const handleLanguageChange = (e) => {
      const selectedLanguage = e.target.value;
      onChange(selectedLanguage);
    };
  
    return (
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    );
  }
  
  export default LanguageSelector;