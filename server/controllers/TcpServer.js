'use strict';

var utils = require('../utils/writer.js');
var TcpServer = require('../service/TcpServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');

module.exports.getTcpServerLocalAddress = function getTcpServerLocalAddress(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  TcpServer.getTcpServerLocalAddress(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getTcpServerLocalPort = function getTcpServerLocalPort(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  TcpServer.getTcpServerLocalPort(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putTcpServerLocalAddress = function putTcpServerLocalAddress(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  TcpServer.putTcpServerLocalAddress(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putTcpServerLocalPort = function putTcpServerLocalPort(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  TcpServer.putTcpServerLocalPort(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
