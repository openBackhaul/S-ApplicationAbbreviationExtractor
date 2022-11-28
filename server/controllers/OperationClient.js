'use strict';

var utils = require('../utils/writer.js');
var OperationClient = require('../service/OperationClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getOperationClientDetailedLoggingIsOn = function getOperationClientDetailedLoggingIsOn(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationClient.getOperationClientDetailedLoggingIsOn(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getOperationClientLifeCycleState = function getOperationClientLifeCycleState(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationClient.getOperationClientLifeCycleState(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getOperationClientOperationKey = function getOperationClientOperationKey(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationClient.getOperationClientOperationKey(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getOperationClientOperationName = function getOperationClientOperationName(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationClient.getOperationClientOperationName(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getOperationClientOperationalState = function getOperationClientOperationalState(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationClient.getOperationClientOperationalState(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putOperationClientDetailedLoggingIsOn = function putOperationClientDetailedLoggingIsOn(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  OperationClient.putOperationClientDetailedLoggingIsOn(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putOperationClientOperationKey = function putOperationClientOperationKey(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  OperationClient.putOperationClientOperationKey(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putOperationClientOperationName = function putOperationClientOperationName(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  OperationClient.putOperationClientOperationName(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
