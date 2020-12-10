const settings = {
  "name": "sankalp-realty",
  "state": {
    "frontity": {
      "url": "https://sankalprealty.us/",
      "title": "Sankalp Realty",
      "description": "Commercial Real Estate in North Texas"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Our Products",
              "/products"
            ],
            [
              "Get Directions",
              "/locations/"
            ],
            // [
            //   "Blog",
            //   "/category/blog/"
            // ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.sankalprealty.us/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast"
  ]
};

export default settings;


// [
//   "Japan",
//   "/tag/japan/"
// ],