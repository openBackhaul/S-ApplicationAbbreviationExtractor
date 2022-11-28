'use strict';

var utils = require('../utils/writer.js');
var Core = require('../service/CoreService');
var oamLogService = require('onf-core-model-ap/applicationPattern/services/OamLogService');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.getControlConstruct = function getControlConstruct (req, res, next) {
  let responseCode = responseCodeEnum.code.OK;
  Core.getControlConstruct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      utils.writeJson(res, response);
    });

    oamLogService.recordOamRequest(req.url, req.body, responseCode, req.headers.authorization, req.method);

};
