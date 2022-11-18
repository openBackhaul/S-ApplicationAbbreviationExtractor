'use strict';

var utils = require('../utils/writer.js');
var TcpServer = require('../service/TcpServerService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');

module.exports.getTcpServerLocalAddress = function getTcpServerLocalAddress(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  Core.getControlConstruct()
  TcpServer.getTcpServerLocalAddress(uuid)
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
  Core.getControlConstruct()
  TcpServer.getTcpServerLocalPort(uuid)
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
  Core.getControlConstruct()
  TcpServer.putTcpServerLocalAddress(body, uuid)
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
  TcpServer.putTcpServerLocalPort(body, uuid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
