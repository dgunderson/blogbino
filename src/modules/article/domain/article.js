'use strict';

function Article() {};

Article.create = function(title, bodyCopy) {
    var article = new Article();

    article.title = title;
    article.bodyCopy = bodyCopy;

    return article;
};

var _p = Article.prototype;

module.exports = Article;