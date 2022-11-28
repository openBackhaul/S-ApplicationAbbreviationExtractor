'use strict';

var utils = require('../utils/writer.js');
var IndividualServices = require('../service/IndividualServicesService');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');

module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  IndividualServices.bequeathYourDataAndDie(body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseBody = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (response) {
      responseBody = response;
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    });
  executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
};

module.exports.listApplications = function listApplications(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  IndividualServices.listApplications(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseBody = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (response) {
      responseBody = response;
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    });
  executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
};

module.exports.startApplicationInGenericRepresentation = function startApplicationInGenericRepresentation(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  IndividualServices.startApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      responseBody = response;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    })
    .catch(async function (response) {
      responseBody = response;
      responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
    });
  executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
};
