'use strict';

var utils = require('../utils/writer.js');
var OperationClient = require('../service/OperationClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getOperationClientDetailedLoggingIsOn = function getOperationClientDetailedLoggingIsOn(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  OperationClient.getOperationClientDetailedLoggingIsOn(uuid)
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
  OperationClient.getOperationClientLifeCycleState(uuid)
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
  OperationClient.getOperationClientOperationKey(uuid)
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
  OperationClient.getOperationClientOperationName(uuid)
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
  OperationClient.getOperationClientOperationalState(uuid)
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
  OperationClient.putOperationClientDetailedLoggingIsOn(body, uuid)
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
  OperationClient.putOperationClientOperationKey(body, uuid)
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
  OperationClient.putOperationClientOperationName(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
