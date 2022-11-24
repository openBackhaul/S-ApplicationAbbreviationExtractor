'use strict';

var utils = require('../utils/writer.js');
var BasicServices = require('onf-core-model-ap-bs/basicServices/BasicServicesService');
var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');

module.exports.embedYourself = function embedYourself(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.embedYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.endSubscription = function endSubscription(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.endSubscription(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.informAboutApplication = function informAboutApplication(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  BasicServices.informAboutApplication(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.informAboutApplicationInGenericRepresentation = function informAboutApplicationInGenericRepresentation(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  BasicServices.informAboutApplicationInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.informAboutReleaseHistory = function informAboutReleaseHistory(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  BasicServices.informAboutReleaseHistory(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.informAboutReleaseHistoryInGenericRepresentation = function informAboutReleaseHistoryInGenericRepresentation(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  BasicServices.informAboutReleaseHistoryInGenericRepresentation(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.inquireOamRequestApprovals = function inquireOamRequestApprovals(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.inquireOamRequestApprovals(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.listLtpsAndFcs = function listLtpsAndFcs(req, res, next, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.OK;
  let responseBody = {};
  BasicServices.listLtpsAndFcs(user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.redirectOamRequestInformation = function redirectOamRequestInformation(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.redirectOamRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.redirectServiceRequestInformation = function redirectServiceRequestInformation(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.redirectServiceRequestInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.redirectTopologyChangeInformation = function redirectTopologyChangeInformation(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.redirectTopologyChangeInformation(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.registerYourself = function registerYourself(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.registerYourself(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.updateClient = function updateClient(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.updateClient(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.updateOperationClient = function updateOperationClient(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.updateOperationClient(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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

module.exports.updateOperationKey = function updateOperationKey(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();
  let responseCode = responseCodeEnum.code.NO_CONTENT;
  let responseBody = {};
  BasicServices.updateOperationKey(body, user, originator, xCorrelator, traceIndicator, customerJourney, req.url)
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
