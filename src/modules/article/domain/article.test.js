'use strict';

var Article = require('./Article');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe("Article", function () {
    var title = 'the title';
    var body = 'the body';

    it("should create a new Article", function () {
        var article = Article.create(title, body);

        expect(article.title).to.equal(title);
        expect(article.bodyCopy).to.equal(body);
    });
});