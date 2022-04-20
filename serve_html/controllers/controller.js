const Book = require("../models/books");

exports.Allbooks = (req, res) => {
      Book.find().lean().then((books) => {
        res.render('home', { books });
      }).catch(() => {
      })
    };
exports.SingleBooks = (req, res) => {
      Book.findOne({ number: req.params.number }).lean().then((book) => {
        res.render('books', { book: book });
      }).catch(() => {
      })
    };
