'use strict';

const tcpServerInterface = require('onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/TcpServerInterface');
const logicalTerminationPoint = require('onf-core-model-ap/applicationPattern/onfModel/models/LogicalTerminationPoint');
const httpClientInterface = require('onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/HttpClientInterface');
const controlConstruct = require('onf-core-model-ap/applicationPattern/onfModel/models/ControlConstruct');
const layerProtocol = require('onf-core-model-ap/applicationPattern/onfModel/models/LayerProtocol');
const onfAttributes = require('onf-core-model-ap/applicationPattern/onfModel/constants/OnfAttributes');
const operationServerInterface = require('onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationServerInterface');
const consequentAction = require('onf-core-model-ap/applicationPattern/rest/server/responseBody/ConsequentAction');
const httpServerInterface = require('onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/HttpServerInterface');
const responseValue = require('onf-core-model-ap/applicationPattern/rest/server/responseBody/ResponseValue');
const onfAttributeFormatter = require('onf-core-model-ap/applicationPattern/onfModel/utility/OnfAttributeFormatter');

/**
 * Initiates process of embedding a new release
 *
 * body V1_bequeathyourdataanddie_body 
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.bequeathYourDataAndDie = function (body, user, originator, xCorrelator, traceIndicator, customerJourney, url) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Provides list of applications abbreviation that are available in the current application
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns List
 **/
exports.listApplications = function (user, originator, xCorrelator, traceIndicator, customerJourney, url) {
  return new Promise(async function (resolve, reject) {

    var response = {};
    response['application/json'] = [];
    let logicalTerminationPointList = await controlConstruct.getLogicalTerminationPointListAsync(layerProtocol.layerProtocolNameEnum.HTTP_CLIENT);
    if (logicalTerminationPointList != undefined) {
      for (let i = 0; i < logicalTerminationPointList.length; i++) {

        let logicalTerminationPoint = logicalTerminationPointList[i];
        let layerProtocol = logicalTerminationPoint[
          onfAttributes.LOGICAL_TERMINATION_POINT.LAYER_PROTOCOL][0];
        let httpClientPac = layerProtocol[
          onfAttributes.LAYER_PROTOCOL.HTTP_CLIENT_INTERFACE_PAC];
        if (httpClientPac != undefined) {
          let httpClientCapability = httpClientPac[onfAttributes.HTTP_CLIENT.CAPABILITY];
          let httpClientConfiguration = httpClientPac[onfAttributes.HTTP_CLIENT.CONFIGURATION];
          let _applicationName = httpClientCapability[onfAttributes.HTTP_CLIENT.APPLICATION_NAME];
          response['application/json'].push({
            "application-name": _applicationName,
            "application-name-abbreviation": _applicationName.replace(/[^A-Z]+/g, "")
          })
        }
      }
    }

    if (Object.keys(response).length > 0) {
      resolve(response[Object.keys(response)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Starts application in generic representation
 *
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-capability/application-name]' 
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * returns inline_response_200_1
 **/
exports.startApplicationInGenericRepresentation = function (user, originator, xCorrelator, traceIndicator, customerJourney, url) {
  return new Promise(async function (resolve, reject) {
    let response = {};
    try {
      /****************************************************************************************
       * Preparing consequent-action-list for response body
       ****************************************************************************************/
      let consequentActionList = [];

      let protocol = "http";
      let applicationAddress = await tcpServerInterface.getLocalAddress();
      let applicationPort = await tcpServerInterface.getLocalPort();
      let baseUrl = protocol + "://" + applicationAddress + ":" + applicationPort;

      let LabelForInformAboutApplication = "Inform about Application";
      let requestForInformAboutApplication = baseUrl + await operationServerInterface.getOperationNameAsync("aae-1-0-0-op-s-bs-002");
      let consequentActionForInformAboutApplication = new consequentAction(
        LabelForInformAboutApplication,
        requestForInformAboutApplication,
        false
      );
      consequentActionList.push(consequentActionForInformAboutApplication);

      /****************************************************************************************
       * Preparing response-value-list for response body
       ****************************************************************************************/
      let responseValueList = [];
      let applicationName = await httpServerInterface.getApplicationNameAsync();
      let reponseValue = new responseValue(
        "applicationName",
        applicationName,
        typeof applicationName
      );
      responseValueList.push(reponseValue);

      /****************************************************************************************
       * Setting 'application/json' response body
       ****************************************************************************************/
      response['application/json'] = onfAttributeFormatter.modifyJsonObjectKeysToKebabCase({
        consequentActionList,
        responseValueList
      });
    } catch (error) {
      console.log(error);
    }
    if (Object.keys(response).length > 0) {
      resolve(response[Object.keys(response)[0]]);
    } else {
      resolve();
    }
  });
}

