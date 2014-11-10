/*jslint node: true */
'use strict';

var locate = require('./locate'),
    context = require('./context'),
    subtask = require('subtask'),

TestLib = {
    isSubtaskCreator: function (task, req, res) {
        return (task && task.apply) ? subtask.isSubtask(task.apply(TestLib.getMockContext(req, res))) : false;
    },
    isPipe: function (pipe, req, res) {
        var task = (pipe && pipe.apply) ? pipe.apply(TestLib.getMockContext(req, res)) : undefined;

        return task && TestLib.isSubtaskCreator(task);
    },
    getMockContext: function (req, res) {
        var mock = require('node-mocks-http');

        return new context(mock.createRequest(req), mock.createResponse(res));
    }
};

module.exports = TestLib;
