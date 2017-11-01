// MSH
var msh = {};

// MSH.1, fieldSeparator
if (msg['MSH']['MSH.1']['MSH.1.1'].toString() != "") {msh.fieldSeparator = msg['MSH']['MSH.1']['MSH.1.1']; }

// MSH.2, encodingCharacters
if (msg['MSH']['MSH.2']['MSH.2.1'].toString() != "") {msh.fieldSeparator = msg['MSH']['MSH.2']['MSH.2.1']; }

// MSH.3, sendingApplication
msh.sendingApplication = {};
if (msg['MSH']['MSH.3']['MSH.3.1'].toString() != "") {msh.sendingApplication.namespaceId = msg['MSH']['MSH.3']['MSH.3.1']; }
if (msg['MSH']['MSH.3']['MSH.3.2'].toString() != "") {msh.sendingApplication.universalId = msg['MSH']['MSH.3']['MSH.3.2']; }
if (msg['MSH']['MSH.3']['MSH.3.3'].toString() != "") {msh.sendingApplication.universalIdType = msg['MSH']['MSH.3']['MSH.3.3']; }
if (Object.keys(msh.sendingApplication).length == 0) {
	delete msh.sendingApplication;
}

// MSH.4, sendingFacility
msh.sendingFacility = {};
if (msg['MSH']['MSH.4']['MSH.4.1'].toString() != "") {msh.sendingFacility.namespaceId = msg['MSH']['MSH.4']['MSH.4.1']; }
if (msg['MSH']['MSH.4']['MSH.4.2'].toString() != "") {msh.sendingFacility.universalId = msg['MSH']['MSH.4']['MSH.4.2']; }
if (msg['MSH']['MSH.4']['MSH.4.3'].toString() != "") {msh.sendingFacility.universalIdType = msg['MSH']['MSH.4']['MSH.4.3']; }
if (Object.keys(msh.sendingFacility).length == 0) {
	delete msh.sendingFacility;
}

// MSH.5, receivingApplication
msh.receivingApplication = {};
if (msg['MSH']['MSH.5']['MSH.5.1'].toString() != "") {msh.receivingApplication.namespaceId = msg['MSH']['MSH.5']['MSH.5.1']; }
if (msg['MSH']['MSH.5']['MSH.5.2'].toString() != "") {msh.receivingApplication.universalId = msg['MSH']['MSH.5']['MSH.5.2']; }
if (msg['MSH']['MSH.5']['MSH.5.3'].toString() != "") {msh.receivingApplication.universalIdType = msg['MSH']['MSH.5']['MSH.5.3']; }
if (Object.keys(msh.receivingApplication).length == 0) {
	delete msh.receivingApplication;
}

// MSH.6, receivingFacility
msh.receivingFacility = {};
if (msg['MSH']['MSH.6']['MSH.6.1'].toString() != "") {msh.receivingFacility.namespaceId = msg['MSH']['MSH.6']['MSH.6.1']; }
if (msg['MSH']['MSH.6']['MSH.6.2'].toString() != "") {msh.receivingFacility.universalId = msg['MSH']['MSH.6']['MSH.6.2']; }
if (msg['MSH']['MSH.6']['MSH.6.3'].toString() != "") {msh.receivingFacility.universalIdType = msg['MSH']['MSH.6']['MSH.6.3']; }
if (Object.keys(msh.receivingFacility).length == 0) {
	delete msh.receivingFacility;
}

// MSH.7, dateTimeOfMessage
if (msg['MSH']['MSH.7']['MSH.7.1'].toString() != "") {msh.dateTimeOfMessage = msg['MSH']['MSH.7']['MSH.7.1']; }

// MSH.8, security
if (msg['MSH']['MSH.8']['MSH.8.1'].toString() != "") {msh.security = msg['MSH']['MSH.8']['MSH.8.1']; }

// MSH.9, messageType
msh.messageType = {};
if (msg['MSH']['MSH.9']['MSH.9.1'].toString() != "") {msh.messageType.messageType = msg['MSH']['MSH.9']['MSH.9.1']; }
if (msg['MSH']['MSH.9']['MSH.9.2'].toString() != "") {msh.messageType.triggerEvent = msg['MSH']['MSH.9']['MSH.9.2']; }
if (Object.keys(msh.messageType).length == 0) {
	delete msh.messageType;
}

// MSH.10, messageControlID
if (msg['MSH']['MSH.10']['MSH.10.1'].toString() != "") {msh.messageControlID = msg['MSH']['MSH.10']['MSH.10.1']; }

// MSH.11, processingID
msh.processingID = {};
if (msg['MSH']['MSH.11']['MSH.11.1'].toString() != "") {msh.processingID.processingID = msg['MSH']['MSH.11']['MSH.11.1']; }
if (msg['MSH']['MSH.11']['MSH.11.2'].toString() != "") {msh.processingID.processingMode = msg['MSH']['MSH.11']['MSH.11.2']; }
if (Object.keys(msh.processingID).length == 0) {
	delete msh.processingID;
}

// MSH.12, versionID
if (msg['MSH']['MSH.12']['MSH.12.1'].toString() != "") {msh.versionID = msg['MSH']['MSH.12']['MSH.12.1']; }

// MSH.13, sequenceNumber
if (msg['MSH']['MSH.13']['MSH.13.1'].toString() != "") {msh.sequenceNumber = msg['MSH']['MSH.13']['MSH.13.1']; }

// MSH.14, continuationPointer
if (msg['MSH']['MSH.14']['MSH.14.1'].toString() != "") {msh.continuationPointer = msg['MSH']['MSH.14']['MSH.14.1']; }

// MSH.15, acceptAcknowledgmentType
if (msg['MSH']['MSH.15']['MSH.15.1'].toString() != "") {msh.acceptAcknowledgmentType = msg['MSH']['MSH.15']['MSH.15.1']; }

// MSH.16, applicationAcknowledgmentType
if (msg['MSH']['MSH.16']['MSH.16.1'].toString() != "") {msh.applicationAcknowledgmentType = msg['MSH']['MSH.16']['MSH.16.1']; }

// MSH.17, countryCode
if (msg['MSH']['MSH.17']['MSH.17.1'].toString() != "") {msh.countryCode = msg['MSH']['MSH.17']['MSH.17.1']; }

// MSH.18, characterSet
msh.characterSet = [];
for each (field in msg['MSH']['MSH.18']) {
	if (field['MSH.18.1'].toString() != "") {msh.characterSet.push(field['MSH.18.1']); }
}
if (msh.characterSet.length == 0) {
	delete msh.characterSet;
}

// MSH.19, principalLanguageOfMessage
msh.principalLanguageOfMessage = {};
if (msg['MSH']['MSH.19']['MSH.19.1'].toString() != "") {msh.principalLanguageOfMessage.id = msg['MSH']['MSH.19']['MSH.19.1']; }
if (msg['MSH']['MSH.19']['MSH.19.2'].toString() != "") {msh.principalLanguageOfMessage.text = msg['MSH']['MSH.19']['MSH.19.2']; }
if (msg['MSH']['MSH.19']['MSH.19.3'].toString() != "") {msh.principalLanguageOfMessage.codingSystem = msg['MSH']['MSH.19']['MSH.19.3']; }
if (msg['MSH']['MSH.19']['MSH.19.4'].toString() != "") {msh.principalLanguageOfMessage.altId = msg['MSH']['MSH.19']['MSH.19.4']; }
if (msg['MSH']['MSH.19']['MSH.19.5'].toString() != "") {msh.principalLanguageOfMessage.altText = msg['MSH']['MSH.19']['MSH.19.5']; }
if (msg['MSH']['MSH.19']['MSH.19.6'].toString() != "") {msh.principalLanguageOfMessage.altCodingSystem = msg['MSH']['MSH.19']['MSH.19.6']; }
if (Object.keys(msh.principalLanguageOfMessage).length == 0) {
	delete msh.principalLanguageOfMessage;
}