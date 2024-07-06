const isRightHandedLang = (lng) => ['ar', 'he'].includes(lng);

/**
 * Optimize page for righthanded hebrew and arabic languages
 * @param {string} lang 
 */
const changeHTMLDirection = (lang) => {
    document.getElementsByTagName('html')[0].dir = isRightHandedLang(lang) ? 'rtl' : 'ltr';
};

export default changeHTMLDirection;