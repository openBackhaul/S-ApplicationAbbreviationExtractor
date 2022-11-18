'use strict';

var utils = require('../utils/writer.js');
var OperationServer = require('../service/OperationServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getOperationServerLifeCycleState = function getOperationServerLifeCycleState(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationServer.getOperationServerLifeCycleState(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getOperationServerOperationKey = function getOperationServerOperationKey(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationServer.getOperationServerOperationKey(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getOperationServerOperationName = function getOperationServerOperationName(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationServer.getOperationServerOperationName(uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });

  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putOperationServerLifeCycleState = function putOperationServerLifeCycleState(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  OperationServer.putOperationServerLifeCycleState(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putOperationServerOperationKey = function putOperationServerOperationKey(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  OperationServer.putOperationServerOperationKey(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
