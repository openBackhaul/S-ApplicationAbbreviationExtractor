'use strict';


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
exports.bequeathYourDataAndDie = function(body,user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
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
exports.listApplications = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "application-name" : "RegistryOffice",
  "application-name-abbreviation" : "RO"
}, {
  "application-name" : "AdministratorAdministration",
  "application-name-abbreviation" : "AA"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
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
exports.startApplicationInGenericRepresentation = function(user,originator,xCorrelator,traceIndicator,customerJourney) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "consequent-action-list" : [ {
    "label" : "Inform about Application",
    "request" : "https://10.118.125.157:1000/v1/inform-about-application-in-generic-representation",
    "display-in-new-browser-window" : false
  } ],
  "response-value-list" : [ {
    "field-name" : "applicationName",
    "value" : "OwnApplicationName",
    "datatype" : "string"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

