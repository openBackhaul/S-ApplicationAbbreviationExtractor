'use strict';

var utils = require('../utils/writer.js');
var HttpClient = require('../service/HttpClientService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getHttpClientApplicationName = function getHttpClientApplicationName(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpClient.getHttpClientApplicationName(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.getHttpClientReleaseNumber = function getHttpClientReleaseNumber(req, res, next, uuid) {
  let responseCode = responseCodeEnum.code.OK;
  HttpClient.getHttpClientReleaseNumber(req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};

module.exports.putHttpClientReleaseNumber = function putHttpClientReleaseNumber(req, res, next, body, uuid) {
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  HttpClient.putHttpClientReleaseNumber(body, req.url)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });
  oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);
};
