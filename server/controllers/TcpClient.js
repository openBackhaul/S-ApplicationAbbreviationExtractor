'use strict';

var utils = require('../utils/writer.js');
var TcpClient = require('../service/TcpClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getTcpClientRemoteAddress = function getTcpClientRemoteAddress(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  TcpClient.getTcpClientRemoteAddress(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getTcpClientRemotePort = function getTcpClientRemotePort(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  TcpClient.getTcpClientRemotePort(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putTcpClientRemoteAddress = function putTcpClientRemoteAddress(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  TcpClient.putTcpClientRemoteAddress(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putTcpClientRemotePort = function putTcpClientRemotePort(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  TcpClient.putTcpClientRemotePort(req.url, body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
