'use strict';

function Article2() {

    function create (title, bodyCopy) {
        var article = new Article2();
        article.title = title;
        article.bodyCopy = bodyCopy;
        return article;
    };

    return {
        create: create
    };
}

module.exports = Article2();