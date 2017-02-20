'use strict';

var Article = require('./Article');
var Article2 = require('./Article2');
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

    it("should create a new Article2", function () {
        var article = Article2.create(title, body);
        
        expect(article.title).to.equal(title);
        expect(article.bodyCopy).to.equal(body);
    });

    it("should have a correct toString", function () {
        var article = Article.create(title, body);
        console.log(article.hello());
        expect(article.hello()).to.equal(title + ' ' + body);
    });
});