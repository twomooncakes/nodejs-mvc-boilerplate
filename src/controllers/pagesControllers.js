const pagesIndex = (req, res) => {
    const data = {
        title: 'Home page',
        currentPage: 'home',
    };
    res.render('index', data);
};
  
const pagesAbout = (req, res) => {
    res.render('about', {
      title: 'About Us',
      currentPage: 'about',
    });
};
  
module.exports = {
    pagesIndex,
    pagesAbout
};