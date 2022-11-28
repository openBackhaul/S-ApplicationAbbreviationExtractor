'use strict';

var utils = require('../utils/writer.js');
var HttpServer = require('../service/HttpServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getHttpServerApplicationName = function getHttpServerApplicationName(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerApplicationName(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpServerApplicationPurpose = function getHttpServerApplicationPurpose(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerApplicationPurpose(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpServerDataUpdatePeriode = function getHttpServerDataUpdatePeriode(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerDataUpdatePeriode(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpServerOwnerEmailAddress = function getHttpServerOwnerEmailAddress(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerOwnerEmailAddress(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpServerOwnerName = function getHttpServerOwnerName(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerOwnerName(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpServerReleaseList = function getHttpServerReleaseList(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerReleaseList(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpServerReleaseNumber = function getHttpServerReleaseNumber(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpServer.getHttpServerReleaseNumber(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
