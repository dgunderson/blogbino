'use strict';

function Article() { }

Article.create = function (title, bodyCopy) {
    var article = new Article();
    article.title = title;
    article.bodyCopy = bodyCopy;
    return article;
};

var _p = Article.prototype;

_p.hello = function () {
    return this.title + ' ' + this.bodyCopy;
};

module.exports = Article;