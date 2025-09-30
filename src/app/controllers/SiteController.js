class SiteController {
  // GET home
  home(req, res) {
    res.render("home");
  }

  //GET / site/contact
  contact(req, res) {
    res.render("contact");
  }

  //GET /site/search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
