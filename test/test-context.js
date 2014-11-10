'use strict';

var assert = require('chai').assert,
    testlib = require('../lib/test'),
    context = require('../lib/context.js');

describe('context', function () {
    it('.query should be a subtask creator', function (done) {
        assert.equal(true, testlib.isSubtaskCreator(testlib.getMockContext().query));
        done();
    });

    it('.param should be a subtask creator', function (done) {
        assert.equal(true, testlib.isSubtaskCreator(testlib.getMockContext().param));
        done();
    });

    it('.cookie should be a subtask creator', function (done) {
        assert.equal(true, testlib.isSubtaskCreator(testlib.getMockContext().cookie));
        done();
    });

    it('.data should be a subtask creator', function (done) {
        assert.equal(true, testlib.isSubtaskCreator(testlib.getMockContext().data));
        done();
    });

    it('.module should be a pipe', function (done) {
        assert.equal(true, testlib.isPipe(testlib.getMockContext().module));
        done();
    });

    it('.page should be a pipe', function (done) {
        assert.equal(true, testlib.isPipe(testlib.getMockContext().page));
        done();
    });

    it('.react should be a pipe', function (done) {
        assert.equal(true, testlib.isPipe(testlib.getMockContext().react));
        done();
    });

    it('.dreact should be a pipe', function (done) {
        assert.equal(true, testlib.isPipe(testlib.getMockContext().dreact));
        done();
    });

    it('.task should be a subtask creator', function (done) {
        assert.equal(true, testlib.isSubtaskCreator(testlib.getMockContext().task));
        done();
    });
});
