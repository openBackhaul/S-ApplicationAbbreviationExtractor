'use strict';


/**
 * Returns remote address
 *
 * uuid String 
 * returns inline_response_200_27
 **/
exports.getTcpClientRemoteAddress = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tcp-client-interface-1-0:ipv-4-address" : "10.118.125.157"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns target TCP port at server
 *
 * uuid String 
 * returns inline_response_200_28
 **/
exports.getTcpClientRemotePort = function(uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tcp-client-interface-1-0:remote-port" : 1000
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Configures remote address
 *
 * body Tcpclientinterfaceconfiguration_remoteaddress_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putTcpClientRemoteAddress = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Configures target TCP port at server
 *
 * body Tcpclientinterfaceconfiguration_remoteport_body 
 * uuid String 
 * no response value expected for this operation
 **/
exports.putTcpClientRemotePort = function(body,uuid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

