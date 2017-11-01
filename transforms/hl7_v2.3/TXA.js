// TXA
var txa = {};

// TXA.1, setID
if (msg['TXA']['TXA.1']['TXA.1.1'].toString() != "") { txa.setID = msg['TXA']['TXA.1']['TXA.1.1']; }

// TXA.2, documentType
if (msg['TXA']['TXA.2']['TXA.2.1'].toString() != "") { txa.documentType = msg['TXA']['TXA.2']['TXA.2.1']; }

// TXA.3, documentContentPresentation
if (msg['TXA']['TXA.3']['TXA.3.1'].toString() != "") { txa.documentContentPresentation = msg['TXA']['TXA.3']['TXA.3.1']; }

// TXA.4, activityDateTime
if (msg['TXA']['TXA.4']['TXA.4.1'].toString() != "") { txa.activityDateTime = msg['TXA']['TXA.4']['TXA.4.1']; }

// TXA.5, primaryActivityProviderCodeName
txa.primaryActivityProviderCodeName = {};
if (msg['TXA']['TXA.5']['TXA.5.1'].toString() != "") { txa.primaryActivityProviderCodeName.id = msg['TXA']['TXA.5']['TXA.5.1']; }
if (msg['TXA']['TXA.5']['TXA.5.2'].toString() != "") { txa.primaryActivityProviderCodeName.lastName = msg['TXA']['TXA.5']['TXA.5.2']; }
if (msg['TXA']['TXA.5']['TXA.5.3'].toString() != "") { txa.primaryActivityProviderCodeName.firstName = msg['TXA']['TXA.5']['TXA.5.3']; }
if (msg['TXA']['TXA.5']['TXA.5.4'].toString() != "") { txa.primaryActivityProviderCodeName.middleInitOrName = msg['TXA']['TXA.5']['TXA.5.4']; }
if (msg['TXA']['TXA.5']['TXA.5.5'].toString() != "") { txa.primaryActivityProviderCodeName.suffix = msg['TXA']['TXA.5']['TXA.5.5']; }
if (msg['TXA']['TXA.5']['TXA.5.6'].toString() != "") { txa.primaryActivityProviderCodeName.prefix = msg['TXA']['TXA.5']['TXA.5.6']; }
if (msg['TXA']['TXA.5']['TXA.5.7'].toString() != "") { txa.primaryActivityProviderCodeName.degree = msg['TXA']['TXA.5']['TXA.5.7']; }
if (msg['TXA']['TXA.5']['TXA.5.8'].toString() != "") { txa.primaryActivityProviderCodeName.sourceTable = msg['TXA']['TXA.5']['TXA.5.8']; }
txa.primaryActivityProviderCodeName.assigningAuthority = {};
if (msg['TXA']['TXA.5']['TXA.5.9']['TXA.5.9.1'].toString() != "") { txa.primaryActivityProviderCodeName.assigningAuthority.id = msg['TXA']['TXA.5']['TXA.5.9']['TXA.5.9.1']; }
if (msg['TXA']['TXA.5']['TXA.5.9']['TXA.5.9.2'].toString() != "") { txa.primaryActivityProviderCodeName.assigningAuthority.universalId = msg['TXA']['TXA.5']['TXA.5.9']['TXA.5.9.2']; }
if (msg['TXA']['TXA.5']['TXA.5.9']['TXA.5.9.3'].toString() != "") { txa.primaryActivityProviderCodeName.assigningAuthority.universalIdType = msg['TXA']['TXA.5']['TXA.5.9']['TXA.5.9.3']; }
if (Object.keys(txa.primaryActivityProviderCodeName.assigningAuthority).length == 0) {
	delete txa.primaryActivityProviderCodeName.assigningAuthority;
}
if (msg['TXA']['TXA.5']['TXA.5.10'].toString() != "") { txa.primaryActivityProviderCodeName.nameTypeCode = msg['TXA']['TXA.5']['TXA.5.10']; }
if (msg['TXA']['TXA.5']['TXA.5.11'].toString() != "") { txa.primaryActivityProviderCodeName.identifierCheckDigit = msg['TXA']['TXA.5']['TXA.5.11']; }
if (msg['TXA']['TXA.5']['TXA.5.12'].toString() != "") { txa.primaryActivityProviderCodeName.codeIdentifyingCheckDigitScheme = msg['TXA']['TXA.5']['TXA.5.12']; }
if (msg['TXA']['TXA.5']['TXA.5.13'].toString() != "") { txa.primaryActivityProviderCodeName.identifierTypeCode = msg['TXA']['TXA.5']['TXA.5.13']; }
txa.primaryActivityProviderCodeName.assigningFacility = {};
if (msg['TXA']['TXA.5']['TXA.5.14']['TXA.5.14.1'].toString() != "") { txa.primaryActivityProviderCodeName.assigningFacility.id = msg['TXA']['TXA.5']['TXA.5.14']['TXA.5.14.1']; }
if (msg['TXA']['TXA.5']['TXA.5.14']['TXA.5.14.2'].toString() != "") { txa.primaryActivityProviderCodeName.assigningFacility.universalId = msg['TXA']['TXA.5']['TXA.5.14']['TXA.5.14.2']; }
if (msg['TXA']['TXA.5']['TXA.5.14']['TXA.5.14.3'].toString() != "") { txa.primaryActivityProviderCodeName.assigningFacility.universalIdType = msg['TXA']['TXA.5']['TXA.5.14']['TXA.5.14.3']; }
if (Object.keys(txa.primaryActivityProviderCodeName.assigningFacility).length == 0) {
	delete txa.primaryActivityProviderCodeName.assigningFacility;
}
if (Object.keys(txa.primaryActivityProviderCodeName).length == 0) {
	delete txa.primaryActivityProviderCodeName;
}

// TXA.6, originationDateTime
if (msg['TXA']['TXA.6']['TXA.6.1'].toString() != "") { txa.originationDateTime = msg['TXA']['TXA.6']['TXA.6.1']; }

// TXA.7, transcriptionDateTime
if (msg['TXA']['TXA.7']['TXA.7.1'].toString() != "") { txa.transcriptionDateTime = msg['TXA']['TXA.7']['TXA.7.1']; }

// TXA.8, editDateTime
txa.editDateTime = [];
for each (field in msg['TXA']['TXA.8']) {
	if (field['TXA.8.1'].toString() != "") {
		txa.editDateTime.push(field['TXA.8.1']);
	}
}

// TXA.9, originatorCodeName
txa.originatorCodeName = {};
if (msg['TXA']['TXA.9']['TXA.9.1'].toString() != "") { txa.originatorCodeName.id = msg['TXA']['TXA.9']['TXA.9.1']; }
if (msg['TXA']['TXA.9']['TXA.9.2'].toString() != "") { txa.originatorCodeName.lastName = msg['TXA']['TXA.9']['TXA.9.2']; }
if (msg['TXA']['TXA.9']['TXA.9.3'].toString() != "") { txa.originatorCodeName.firstName = msg['TXA']['TXA.9']['TXA.9.3']; }
if (msg['TXA']['TXA.9']['TXA.9.4'].toString() != "") { txa.originatorCodeName.middleInitOrName = msg['TXA']['TXA.9']['TXA.9.4']; }
if (msg['TXA']['TXA.9']['TXA.9.5'].toString() != "") { txa.originatorCodeName.suffix = msg['TXA']['TXA.9']['TXA.9.5']; }
if (msg['TXA']['TXA.9']['TXA.9.6'].toString() != "") { txa.originatorCodeName.prefix = msg['TXA']['TXA.9']['TXA.9.6']; }
if (msg['TXA']['TXA.9']['TXA.9.7'].toString() != "") { txa.originatorCodeName.degree = msg['TXA']['TXA.9']['TXA.9.7']; }
if (msg['TXA']['TXA.9']['TXA.9.8'].toString() != "") { txa.originatorCodeName.sourceTable = msg['TXA']['TXA.9']['TXA.9.8']; }
txa.originatorCodeName.assigningAuthority = {};
if (msg['TXA']['TXA.9']['TXA.9.9']['TXA.9.9.1'].toString() != "") { txa.originatorCodeName.assigningAuthority.id = msg['TXA']['TXA.9']['TXA.9.9']['TXA.9.9.1']; }
if (msg['TXA']['TXA.9']['TXA.9.9']['TXA.9.9.2'].toString() != "") { txa.originatorCodeName.assigningAuthority.universalId = msg['TXA']['TXA.9']['TXA.9.9']['TXA.9.9.2']; }
if (msg['TXA']['TXA.9']['TXA.9.9']['TXA.9.9.3'].toString() != "") { txa.originatorCodeName.assigningAuthority.universalIdType = msg['TXA']['TXA.9']['TXA.9.9']['TXA.9.9.3']; }
if (Object.keys(txa.originatorCodeName.assigningAuthority).length == 0) {
	delete txa.originatorCodeName.assigningAuthority;
}
if (msg['TXA']['TXA.9']['TXA.9.10'].toString() != "") { txa.originatorCodeName.nameTypeCode = msg['TXA']['TXA.9']['TXA.9.10']; }
if (msg['TXA']['TXA.9']['TXA.9.11'].toString() != "") { txa.originatorCodeName.identifierCheckDigit = msg['TXA']['TXA.9']['TXA.9.11']; }
if (msg['TXA']['TXA.9']['TXA.9.12'].toString() != "") { txa.originatorCodeName.codeIdentifyingCheckDigitScheme = msg['TXA']['TXA.9']['TXA.9.12']; }
if (msg['TXA']['TXA.9']['TXA.9.13'].toString() != "") { txa.originatorCodeName.identifierTypeCode = msg['TXA']['TXA.9']['TXA.9.13']; }
txa.originatorCodeName.assigningFacility = {};
if (msg['TXA']['TXA.9']['TXA.9.14']['TXA.9.14.1'].toString() != "") { txa.originatorCodeName.assigningFacility.id = msg['TXA']['TXA.9']['TXA.9.14']['TXA.9.14.1']; }
if (msg['TXA']['TXA.9']['TXA.9.14']['TXA.9.14.2'].toString() != "") { txa.originatorCodeName.assigningFacility.universalId = msg['TXA']['TXA.9']['TXA.9.14']['TXA.9.14.2']; }
if (msg['TXA']['TXA.9']['TXA.9.14']['TXA.9.14.3'].toString() != "") { txa.originatorCodeName.assigningFacility.universalIdType = msg['TXA']['TXA.9']['TXA.9.14']['TXA.9.14.3']; }
if (Object.keys(txa.originatorCodeName.assigningFacility).length == 0) {
	delete txa.originatorCodeName.assigningFacility;
}
if (Object.keys(txa.originatorCodeName).length == 0) {
	delete txa.originatorCodeName;
}

// TXA.10, assignedDocumentAuthenticator
txa.assignedDocumentAuthenticator = [];
for each (field in msg['TXA']['TXA.10']) {
	var block = {};
	if (field['TXA.10.1'].toString() != "") { block.id = field['TXA.10.1']; }
	if (field['TXA.10.2'].toString() != "") { block.lastName = field['TXA.10.2']; }
	if (field['TXA.10.3'].toString() != "") { block.firstName = field['TXA.10.3']; }
	if (field['TXA.10.4'].toString() != "") { block.middleInitOrName = field['TXA.10.4']; }
	if (field['TXA.10.5'].toString() != "") { block.suffix = field['TXA.10.5']; }
	if (field['TXA.10.6'].toString() != "") { block.prefix = field['TXA.10.6']; }
	if (field['TXA.10.7'].toString() != "") { block.degree = field['TXA.10.7']; }
	if (field['TXA.10.8'].toString() != "") { block.sourceTable = field['TXA.10.8']; }
	block.assigningAuthority = {};
	if (field['TXA.10.9']['TXA.10.9.1'].toString() != "") { block.assigningAuthority.id = field['TXA.10.9']['TXA.10.9.1']; }
	if (field['TXA.10.9']['TXA.10.9.2'].toString() != "") { block.assigningAuthority.universalId = field['TXA.10.9']['TXA.10.9.2']; }
	if (field['TXA.10.9']['TXA.10.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['TXA.10.9']['TXA.10.9.3']; }
	if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['TXA.10.9'].toString() != "") { block.assigningAuthority.id = field['TXA.10.9']; }
				else delete block.assigningAuthority;
	}
	if (field['TXA.10.10'].toString() != "") { block.nameTypeCode = field['TXA.10.10']; }
	if (field['TXA.10.11'].toString() != "") { block.identifierCheckDigit = field['TXA.10.11']; }
	if (field['TXA.10.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['TXA.10.12']; }
	if (field['TXA.10.13'].toString() != "") { block.identifierTypeCode = field['TXA.10.13']; }
	block.assigningFacility = {};
	if (field['TXA.10.14']['TXA.10.14.1'].toString() != "") { block.assigningFacility.id = field['TXA.10.14']['TXA.10.14.1']; }
	if (field['TXA.10.14']['TXA.10.14.2'].toString() != "") { block.assigningFacility.universalId = field['TXA.10.14']['TXA.10.14.2']; }
	if (field['TXA.10.14']['TXA.10.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['TXA.10.14']['TXA.10.14.3']; }
	if (Object.keys(block.assigningFacility).length == 0) {
				if (field['TXA.10.14'].toString() != "") { block.assigningFacility.id = field['TXA.10.14']; }
				else delete block.assigningFacility;
	}
	if (Object.keys(block).length > 0) {
		txa.assignedDocumentAuthenticator.push(block);
	}
}
if (txa.assignedDocumentAuthenticator.length == 0) {
	delete txa.assignedDocumentAuthenticator;
}

// TXA.11, transcriptionistCodeName
txa.transcriptionistCodeName = {};
if (msg['TXA']['TXA.11']['TXA.11.1'].toString() != "") { txa.transcriptionistCodeName.id = msg['TXA']['TXA.11']['TXA.11.1']; }
if (msg['TXA']['TXA.11']['TXA.11.2'].toString() != "") { txa.transcriptionistCodeName.lastName = msg['TXA']['TXA.11']['TXA.11.2']; }
if (msg['TXA']['TXA.11']['TXA.11.3'].toString() != "") { txa.transcriptionistCodeName.firstName = msg['TXA']['TXA.11']['TXA.11.3']; }
if (msg['TXA']['TXA.11']['TXA.11.4'].toString() != "") { txa.transcriptionistCodeName.middleInitOrName = msg['TXA']['TXA.11']['TXA.11.4']; }
if (msg['TXA']['TXA.11']['TXA.11.5'].toString() != "") { txa.transcriptionistCodeName.suffix = msg['TXA']['TXA.11']['TXA.11.5']; }
if (msg['TXA']['TXA.11']['TXA.11.6'].toString() != "") { txa.transcriptionistCodeName.prefix = msg['TXA']['TXA.11']['TXA.11.6']; }
if (msg['TXA']['TXA.11']['TXA.11.7'].toString() != "") { txa.transcriptionistCodeName.degree = msg['TXA']['TXA.11']['TXA.11.7']; }
if (msg['TXA']['TXA.11']['TXA.11.8'].toString() != "") { txa.transcriptionistCodeName.sourceTable = msg['TXA']['TXA.11']['TXA.11.8']; }
txa.transcriptionistCodeName.assigningAuthority = {};
if (msg['TXA']['TXA.11']['TXA.11.9']['TXA.11.9.1'].toString() != "") { txa.transcriptionistCodeName.assigningAuthority.id = msg['TXA']['TXA.11']['TXA.11.9']['TXA.11.9.1']; }
if (msg['TXA']['TXA.11']['TXA.11.9']['TXA.11.9.2'].toString() != "") { txa.transcriptionistCodeName.assigningAuthority.universalId = msg['TXA']['TXA.11']['TXA.11.9']['TXA.11.9.2']; }
if (msg['TXA']['TXA.11']['TXA.11.9']['TXA.11.9.3'].toString() != "") { txa.transcriptionistCodeName.assigningAuthority.universalIdType = msg['TXA']['TXA.11']['TXA.11.9']['TXA.11.9.3']; }
if (Object.keys(txa.transcriptionistCodeName.assigningAuthority).length == 0) {
			if (seg['TXA.11']['TXA.11.9'].toString() != "") { txa[index].transcriptionistCodeName.assigningAuthority.id = seg['TXA.11']['TXA.11.9']; }
			else delete txa[index].transcriptionistCodeName.assigningAuthority;
}
if (msg['TXA']['TXA.11']['TXA.11.10'].toString() != "") { txa.transcriptionistCodeName.nameTypeCode = msg['TXA']['TXA.11']['TXA.11.10']; }
if (msg['TXA']['TXA.11']['TXA.11.11'].toString() != "") { txa.transcriptionistCodeName.identifierCheckDigit = msg['TXA']['TXA.11']['TXA.11.11']; }
if (msg['TXA']['TXA.11']['TXA.11.12'].toString() != "") { txa.transcriptionistCodeName.codeIdentifyingCheckDigitScheme = msg['TXA']['TXA.11']['TXA.11.12']; }
if (msg['TXA']['TXA.11']['TXA.11.13'].toString() != "") { txa.transcriptionistCodeName.identifierTypeCode = msg['TXA']['TXA.11']['TXA.11.13']; }
txa.transcriptionistCodeName.assigningFacility = {};
if (msg['TXA']['TXA.11']['TXA.11.14']['TXA.11.14.1'].toString() != "") { txa.transcriptionistCodeName.assigningFacility.id = msg['TXA']['TXA.11']['TXA.11.14']['TXA.11.14.1']; }
if (msg['TXA']['TXA.11']['TXA.11.14']['TXA.11.14.2'].toString() != "") { txa.transcriptionistCodeName.assigningFacility.universalId = msg['TXA']['TXA.11']['TXA.11.14']['TXA.11.14.2']; }
if (msg['TXA']['TXA.11']['TXA.11.14']['TXA.11.14.3'].toString() != "") { txa.transcriptionistCodeName.assigningFacility.universalIdType = msg['TXA']['TXA.11']['TXA.11.14']['TXA.11.14.3']; }
if (Object.keys(txa.transcriptionistCodeName.assigningFacility).length == 0) {
			if (seg['TXA.11']['TXA.11.14'].toString() != "") { txa[index].transcriptionistCodeName.assigningFacility.id = seg['TXA.11']['TXA.11.14']; }
			else delete txa[index].transcriptionistCodeName.assigningFacility;
}
if (Object.keys(txa.transcriptionistCodeName).length == 0) {
	delete txa.transcriptionistCodeName;
}

// TXA.12, uniqueDocumentNumber
txa.uniqueDocumentNumber = {};
if (msg['TXA']['TXA.12']['TXA.12.1'].toString() != "") { txa.uniqueDocumentNumber.id = msg['TXA']['TXA.12']['TXA.12.1']; }
if (msg['TXA']['TXA.12']['TXA.12.2'].toString() != "") { txa.uniqueDocumentNumber.namespaceId = msg['TXA']['TXA.12']['TXA.12.2']; }
if (msg['TXA']['TXA.12']['TXA.12.3'].toString() != "") { txa.uniqueDocumentNumber.universalId = msg['TXA']['TXA.12']['TXA.12.3']; }
if (msg['TXA']['TXA.12']['TXA.12.4'].toString() != "") { txa.uniqueDocumentNumber.universalIdType = msg['TXA']['TXA.12']['TXA.12.4']; }
if (Object.keys(block.uniqueDocumentNumber).length == 0) {
	delete block.uniqueDocumentNumber;
}

// TXA.13, parentDocumentNumber
txa.parentDocumentNumber = {};
if (msg['TXA']['TXA.13']['TXA.13.1'].toString() != "") { txa.parentDocumentNumber.id = msg['TXA']['TXA.13']['TXA.13.1']; }
if (msg['TXA']['TXA.13']['TXA.13.2'].toString() != "") { txa.parentDocumentNumber.namespaceId = msg['TXA']['TXA.13']['TXA.13.2']; }
if (msg['TXA']['TXA.13']['TXA.13.3'].toString() != "") { txa.parentDocumentNumber.universalId = msg['TXA']['TXA.13']['TXA.13.3']; }
if (msg['TXA']['TXA.13']['TXA.13.4'].toString() != "") { txa.parentDocumentNumber.universalIdType = msg['TXA']['TXA.13']['TXA.13.4']; }
if (Object.keys(block.parentDocumentNumber).length == 0) {
	delete block.parentDocumentNumber;
}

// TXA.14, placerOrderNumber
txa.placerOrderNumber = [];
for each (field in msg['TXA']['TXA.14']) {
	var block = {};
	if (field['TXA.14.1'].toString() != "") { block.id = field['TXA.14.1']; }
	if (field['TXA.14.2'].toString() != "") { block.namespaceId = field['TXA.14.2']; }
	if (field['TXA.14.3'].toString() != "") { block.universalId = field['TXA.14.3']; }
	if (field['TXA.14.4'].toString() != "") { block.universalIdType = field['TXA.14.4']; }
	if (Object.keys(block).length > 0) {
		txa.placerOrderNumber.push(block);
	}
}
if (txa.placerOrderNumber.length == 0) {
	delete txa.placerOrderNumber;
}

// TXA.15, fillerOrderNumber
txa.fillerOrderNumber = {};
if (msg['TXA']['TXA.15']['TXA.15.1'].toString() != "") { txa.fillerOrderNumber.id = msg['TXA']['TXA.15']['TXA.15.1']; }
if (msg['TXA']['TXA.15']['TXA.15.2'].toString() != "") { txa.fillerOrderNumber.namespaceId = msg['TXA']['TXA.15']['TXA.15.2']; }
if (msg['TXA']['TXA.15']['TXA.15.3'].toString() != "") { txa.fillerOrderNumber.universalId = msg['TXA']['TXA.15']['TXA.15.3']; }
if (msg['TXA']['TXA.15']['TXA.15.4'].toString() != "") { txa.fillerOrderNumber.universalIdType = msg['TXA']['TXA.15']['TXA.15.4']; }
if (Object.keys(block.fillerOrderNumber).length == 0) {
	delete block.fillerOrderNumber;
}

// TXA.16, uniqueDocumentFileName
if (msg['TXA']['TXA.16']['TXA.16.1'].toString() != "") { txa.uniqueDocumentFileName = msg['TXA']['TXA.16']['TXA.16.1']; }

// TXA.17, documentCompletionStatus
if (msg['TXA']['TXA.17']['TXA.17.1'].toString() != "") { txa.documentCompletionStatus = msg['TXA']['TXA.17']['TXA.17.1']; }

// TXA.18, documentConfidentialityStatus
if (msg['TXA']['TXA.18']['TXA.18.1'].toString() != "") { txa.documentConfidentialityStatus = msg['TXA']['TXA.18']['TXA.18.1']; }

// TXA.19, documentAvailabilityStatus
if (msg['TXA']['TXA.19']['TXA.19.1'].toString() != "") { txa.documentAvailabilityStatus = msg['TXA']['TXA.19']['TXA.19.1']; }

// TXA.20, documentStorageStatus
if (msg['TXA']['TXA.20']['TXA.20.1'].toString() != "") { txa.documentStorageStatus = msg['TXA']['TXA.20']['TXA.20.1']; }

// TXA.21, documentChangeReason
if (msg['TXA']['TXA.21']['TXA.21.1'].toString() != "") { txa.documentChangeReason = msg['TXA']['TXA.21']['TXA.21.1']; }

// TXA.22, authenticationPersonTimeStamp
txa.authenticationPersonTimeStamp = [];
for each (field in msg['TXA']['TXA.22']) {
	var block = {};
	if (field['TXA.22.1'].toString() != "") { block.id = field['TXA.22.1']; }
	if (field['TXA.22.2'].toString() != "") { block.lastName = field['TXA.22.2']; }
	if (field['TXA.22.3'].toString() != "") { block.firstName = field['TXA.22.3']; }
	if (field['TXA.22.4'].toString() != "") { block.middleInitOrName = field['TXA.22.4']; }
	if (field['TXA.22.5'].toString() != "") { block.suffix = field['TXA.22.5']; }
	if (field['TXA.22.6'].toString() != "") { block.prefix = field['TXA.22.6']; }
	if (field['TXA.22.7'].toString() != "") { block.degree = field['TXA.22.7']; }
	if (field['TXA.22.8'].toString() != "") { block.sourceTable = field['TXA.22.8']; }
	block.assigningAuthority = {};
	if (field['TXA.22.9']['TXA.22.9.1'].toString() != "") { block.assigningAuthority.id = field['TXA.22.9']['TXA.22.9.1']; }
	if (field['TXA.22.9']['TXA.22.9.2'].toString() != "") { block.assigningAuthority.universalId = field['TXA.22.9']['TXA.22.9.2']; }
	if (field['TXA.22.9']['TXA.22.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['TXA.22.9']['TXA.22.9.3']; }
	if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['TXA.22.9'].toString() != "") { block.assigningAuthority.id = field['TXA.22.9']; }
				else delete block.assigningAuthority;
	}
	if (field['TXA.22.10'].toString() != "") { block.nameTypeCode = field['TXA.22.10']; }
	if (field['TXA.22.11'].toString() != "") { block.identifierCheckDigit = field['TXA.22.11']; }
	if (field['TXA.22.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['TXA.22.12']; }
	if (field['TXA.22.13'].toString() != "") { block.identifierTypeCode = field['TXA.22.13']; }
	block.assigningFacility = {};
	if (field['TXA.22.14']['TXA.22.14.1'].toString() != "") { block.assigningFacility.id = field['TXA.22.14']['TXA.22.14.1']; }
	if (field['TXA.22.14']['TXA.22.14.2'].toString() != "") { block.assigningFacility.universalId = field['TXA.22.14']['TXA.22.14.2']; }
	if (field['TXA.22.14']['TXA.22.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['TXA.22.14']['TXA.22.14.3']; }
	if (Object.keys(block.assigningFacility).length == 0) {
				if (field['TXA.22.14'].toString() != "") { block.assigningFacility.id  = field['TXA.22.14']; }
				else delete block.assigningFacility;
	}
	if (Object.keys(block).length > 0) {
		txa.authenticationPersonTimeStamp.push(block);
	}
}
if (txa.authenticationPersonTimeStamp.length == 0) {
	delete txa.authenticationPersonTimeStamp;
}

// TXA.23, distributedCopiesCodeAndNameOfRecipients
txa.distributedCopiesCodeAndNameOfRecipients = [];
for each (field in msg['TXA']['TXA.23']) {
	var block = {};
	if (field['TXA.23.1'].toString() != "") { block.id = field['TXA.23.1']; }
	if (field['TXA.23.2'].toString() != "") { block.lastName = field['TXA.23.2']; }
	if (field['TXA.23.3'].toString() != "") { block.firstName = field['TXA.23.3']; }
	if (field['TXA.23.4'].toString() != "") { block.middleInitOrName = field['TXA.23.4']; }
	if (field['TXA.23.5'].toString() != "") { block.suffix = field['TXA.23.5']; }
	if (field['TXA.23.6'].toString() != "") { block.prefix = field['TXA.23.6']; }
	if (field['TXA.23.7'].toString() != "") { block.degree = field['TXA.23.7']; }
	if (field['TXA.23.8'].toString() != "") { block.sourceTable = field['TXA.23.8']; }
	block.assigningAuthority = {};
	if (field['TXA.23.9']['TXA.23.9.1'].toString() != "") { block.assigningAuthority.id = field['TXA.23.9']['TXA.23.9.1']; }
	if (field['TXA.23.9']['TXA.23.9.2'].toString() != "") { block.assigningAuthority.universalId = field['TXA.23.9']['TXA.23.9.2']; }
	if (field['TXA.23.9']['TXA.23.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['TXA.23.9']['TXA.23.9.3']; }
	if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['TXA.23.9'].toString() != "") { block.assigningAuthority.id = field['TXA.23.9']; }
				else delete block.assigningAuthority;
	}
	if (field['TXA.23.10'].toString() != "") { block.nameTypeCode = field['TXA.23.10']; }
	if (field['TXA.23.11'].toString() != "") { block.identifierCheckDigit = field['TXA.23.11']; }
	if (field['TXA.23.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['TXA.23.12']; }
	if (field['TXA.23.13'].toString() != "") { block.identifierTypeCode = field['TXA.23.13']; }
	block.assigningFacility = {};
	if (field['TXA.23.14']['TXA.23.14.1'].toString() != "") { block.assigningFacility.id = field['TXA.23.14']['TXA.23.14.1']; }
	if (field['TXA.23.14']['TXA.23.14.2'].toString() != "") { block.assigningFacility.universalId = field['TXA.23.14']['TXA.23.14.2']; }
	if (field['TXA.23.14']['TXA.23.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['TXA.23.14']['TXA.23.14.3']; }
	if (Object.keys(block.assigningFacility).length == 0) {
				if (field['TXA.23.14'].toString() != "") { block.assigningFacility.id = field['TXA.23.14']; }
				else delete block.assigningFacility;
	}
	if (Object.keys(block).length > 0) {
		txa.distributedCopiesCodeAndNameOfRecipients.push(block);
	}
}
if (txa.distributedCopiesCodeAndNameOfRecipients.length == 0) {
	delete txa.distributedCopiesCodeAndNameOfRecipients;
}

// OBX (TXA)
var obxGroup = getSegmentsAfter(msg,seg,'OBX',true);
if (obxGroup.length > 0) {
	txa.obx = [];
	var indexOBX = 0;
	for each (obxSeg in obxGroup) {
		txa.obx[indexOBX] = {};

		// OBX.1, setId
		if (obxSeg['OBX.1']['OBX.1.1'].toString() != "") { txa.obx[indexOBX].setId = obxSeg['OBX.1']['OBX.1.1']; }

		// OBX.2, valueType
		if (obxSeg['OBX.2']['OBX.2.1'].toString() != "") { txa.obx[indexOBX].valueType = obxSeg['OBX.2']['OBX.2.1']; }
		
		// OBX.3, identifier
		txa.obx[indexOBX].identifier = {};
		if (obxSeg['OBX.3']['OBX.3.1'].toString() != "") { txa.obx[indexOBX].identifier.id = obxSeg['OBX.3']['OBX.3.1']; }
		if (obxSeg['OBX.3']['OBX.3.2'].toString() != "") { txa.obx[indexOBX].identifier.text = obxSeg['OBX.3']['OBX.3.2']; }
		if (obxSeg['OBX.3']['OBX.3.3'].toString() != "") { txa.obx[indexOBX].identifier.codingSystem = obxSeg['OBX.3']['OBX.3.3']; }
		if (obxSeg['OBX.3']['OBX.3.4'].toString() != "") { txa.obx[indexOBX].identifier.altId = obxSeg['OBX.3']['OBX.3.4']; }
		if (obxSeg['OBX.3']['OBX.3.5'].toString() != "") { txa.obx[indexOBX].identifier.altText = obxSeg['OBX.3']['OBX.3.5']; }
		if (obxSeg['OBX.3']['OBX.3.6'].toString() != "") { txa.obx[indexOBX].identifier.altCodingSystem = obxSeg['OBX.3']['OBX.3.6']; }
		if (Object.keys(txa.obx[indexOBX].identifier).length == 0) {
			delete txa.obx[indexOBX].identifier;
		}

		// OBX.4, subId
		if (obxSeg['OBX.4']['OBX.4.1'].toString() != "") { txa.obx[indexOBX].subId = obxSeg['OBX.4']['OBX.4.1']; }
		
		// OBX.5, observationValue
		txa.obx[indexOBX].observationValue = [];
		for each (field in obxSeg['OBX.5']) {
			if (field['OBX.5.1'].toString() != "") { 
				txa.obx[indexOBX].observationValue.push(field['OBX.5.1']); 
			}
		}
				if (txa.OBX[indexOBX].observationValue.length == 0) {
					delete txa.OBX[indexOBX].observationValue;
				}

		// OBX.6, units
		txa.obx[indexOBX].units = {};
		if (obxSeg['OBX.6']['OBX.6.1'].toString() != "") { txa.obx[indexOBX].units.id = obxSeg['OBX.6']['OBX.6.1']; }
		if (obxSeg['OBX.6']['OBX.6.2'].toString() != "") { txa.obx[indexOBX].units.text = obxSeg['OBX.6']['OBX.6.2']; }
		if (obxSeg['OBX.6']['OBX.6.3'].toString() != "") { txa.obx[indexOBX].units.codingSystem = obxSeg['OBX.6']['OBX.6.3']; }
		if (obxSeg['OBX.6']['OBX.6.4'].toString() != "") { txa.obx[indexOBX].units.altId = obxSeg['OBX.6']['OBX.6.4']; }
		if (obxSeg['OBX.6']['OBX.6.5'].toString() != "") { txa.obx[indexOBX].units.altText = obxSeg['OBX.6']['OBX.6.5']; }
		if (obxSeg['OBX.6']['OBX.6.6'].toString() != "") { txa.obx[indexOBX].units.altCodingSystem = obxSeg['OBX.6']['OBX.6.6']; }
		if (Object.keys(txa.obx[indexOBX].units).length == 0) {
			delete txa.obx[indexOBX].units;
		}

		// OBX.7, referenceRange
		if (obxSeg['OBX.7']['OBX.7.1'].toString() != "") { txa.obx[indexOBX].referenceRange = obxSeg['OBX.7']['OBX.7.1']; }
		
		// OBX.8, abnormalFlag
		txa.obx[indexOBX].abnormalFlag = [];
		for each (field in obxSeg['OBX.9']) {
			if (field['OBX.9.1'].toString() != "") { 
				txa.obx[indexOBX].abnormalFlag.push(field['OBX.9.1']); 
			}
		}
			if (txa.OBX[indexOBX].abnormalFlag.length == 0) {
				delete txa.OBX[indexOBX].abnormalFlag;
			}

		// OBX.9, probability
		if (obxSeg['OBX.9']['OBX.9.1'].toString() != "") { txa.obx[indexOBX].probability = obxSeg['OBX.9']['OBX.9.1']; }
		
		// OBX.10, natureOfAbnormal
		txa.obx[indexOBX].natureOfAbnormal = [];
		for each (field in obxSeg['OBX.10']) {
			if (field['OBX.10.1'].toString() != "") { 
				txa.obx[indexOBX].natureOfAbnormal.push(field['OBX.10.1']); 
			}
		}
				if (txa.OBX[indexOBX].natureOfAbnormal.length == 0) {
					delete txa.OBX[indexOBX].natureOfAbnormal;
				}

		// OBX.11, observeResultStatus
		if (obxSeg['OBX.11']['OBX.11.1'].toString() != "") { txa.obx[indexOBX].observeResultStatus = obxSeg['OBX.11']['OBX.11.1']; }
		
		// OBX.12, effectiveDateLastNormalValue
		if (obxSeg['OBX.12']['OBX.12.1'].toString() != "") { txa.obx[indexOBX].effectiveDateLastNormalValue = obxSeg['OBX.12']['OBX.12.1']; }
		
		// OBX.13, definedAccessChecks
		if (obxSeg['OBX.13']['OBX.13.1'].toString() != "") { txa.obx[indexOBX].definedAccessChecks = obxSeg['OBX.13']['OBX.13.1']; }
		
		// OBX.14, observationDateTime
		if (obxSeg['OBX.14']['OBX.14.1'].toString() != "") { txa.obx[indexOBX].observationDateTime = obxSeg['OBX.14']['OBX.14.1']; }
		
		// OBX.15, producersId
		txa.obx[indexOBX].producersId = {};
		if (obxSeg['OBX.15']['OBX.15.1'].toString() != "") { txa.obx[indexOBX].producersId.id = obxSeg['OBX.15']['OBX.15.1']; }
		if (obxSeg['OBX.15']['OBX.15.2'].toString() != "") { txa.obx[indexOBX].producersId.text = obxSeg['OBX.15']['OBX.15.2']; }
		if (obxSeg['OBX.15']['OBX.15.3'].toString() != "") { txa.obx[indexOBX].producersId.codingSystem = obxSeg['OBX.15']['OBX.15.3']; }
		if (obxSeg['OBX.15']['OBX.15.4'].toString() != "") { txa.obx[indexOBX].producersId.altId = obxSeg['OBX.15']['OBX.15.4']; }
		if (obxSeg['OBX.15']['OBX.15.5'].toString() != "") { txa.obx[indexOBX].producersId.altText = obxSeg['OBX.15']['OBX.15.5']; }
		if (obxSeg['OBX.15']['OBX.15.6'].toString() != "") { txa.obx[indexOBX].producersId.altCodingSystem = obxSeg['OBX.15']['OBX.15.6']; }
		if (Object.keys(txa.obx[indexOBX].producersId).length == 0) {
			delete txa.obx[indexOBX].producersId;
		}

		// OBX.16, responsibleObserver
		txa.obx[indexOBX].responsibleObserver = {};
		if (obxSeg['OBX.16']['OBX.16.1'].toString() != "") { txa.obx[indexOBX].responsibleObserver.id = obxSeg['OBX.16']['OBX.16.1']; }
		if (obxSeg['OBX.16']['OBX.16.2'].toString() != "") { txa.obx[indexOBX].responsibleObserver.lastName = obxSeg['OBX.16']['OBX.16.2']; }
		if (obxSeg['OBX.16']['OBX.16.3'].toString() != "") { txa.obx[indexOBX].responsibleObserver.firstName = obxSeg['OBX.16']['OBX.16.3']; }
		if (obxSeg['OBX.16']['OBX.16.4'].toString() != "") { txa.obx[indexOBX].responsibleObserver.middleInitOrName = obxSeg['OBX.16']['OBX.16.4']; }
		if (obxSeg['OBX.16']['OBX.16.5'].toString() != "") { txa.obx[indexOBX].responsibleObserver.suffix = obxSeg['OBX.16']['OBX.16.5']; }
		if (obxSeg['OBX.16']['OBX.16.6'].toString() != "") { txa.obx[indexOBX].responsibleObserver.prefix = obxSeg['OBX.16']['OBX.16.6']; }
		if (obxSeg['OBX.16']['OBX.16.7'].toString() != "") { txa.obx[indexOBX].responsibleObserver.degree = obxSeg['OBX.16']['OBX.16.7']; }
		if (obxSeg['OBX.16']['OBX.16.8'].toString() != "") { txa.obx[indexOBX].responsibleObserver.sourceTable = obxSeg['OBX.16']['OBX.16.8']; }
		txa.obx[indexOBX].responsibleObserver.assigningAuthority = {};
		if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1'].toString() != "") { txa.obx[indexOBX].responsibleObserver.assigningAuthority.id = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1']; }
		if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2'].toString() != "") { txa.obx[indexOBX].responsibleObserver.assigningAuthority.universalId = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2']; }
		if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3'].toString() != "") { txa.obx[indexOBX].responsibleObserver.assigningAuthority.universalIdType = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3']; }
		if (Object.keys(txa.obx[indexOBX].responsibleObserver.assigningAuthority).length == 0) {
					if (obxSeg['OBX.16']['OBX.16.9'].toString() != "") { txa[index].OBX[indexOBX].responsibleObserver.assigningAuthority.id = obxSeg['OBX.16']['OBX.16.9']; }
					else delete txa[index].OBX[indexOBX].responsibleObserver.assigningAuthority;
		}
		if (obxSeg['OBX.16']['OBX.16.10'].toString() != "") { txa.obx[indexOBX].responsibleObserver.nameTypeCode = obxSeg['OBX.16']['OBX.16.10']; }
		if (obxSeg['OBX.16']['OBX.16.11'].toString() != "") { txa.obx[indexOBX].responsibleObserver.identifierCheckDigit = obxSeg['OBX.16']['OBX.16.11']; }
		if (obxSeg['OBX.16']['OBX.16.12'].toString() != "") { txa.obx[indexOBX].responsibleObserver.codeIdentifyingCheckDigitScheme = obxSeg['OBX.16']['OBX.16.12']; }
		if (obxSeg['OBX.16']['OBX.16.13'].toString() != "") { txa.obx[indexOBX].responsibleObserver.identifierTypeCode = obxSeg['OBX.16']['OBX.16.13']; }
		txa.obx[indexOBX].responsibleObserver.assigningFacility = {};
		if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1'].toString() != "") { txa.obx[indexOBX].responsibleObserver.assigningFacility.id = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1']; }
		if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2'].toString() != "") { txa.obx[indexOBX].responsibleObserver.assigningFacility.universalId = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2']; }
		if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3'].toString() != "") { txa.obx[indexOBX].responsibleObserver.assigningFacility.universalIdType = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3']; }
		if (Object.keys(txa.obx[indexOBX].responsibleObserver.assigningFacility).length == 0) {
					if (obxSeg['OBX.16']['OBX.16.14'].toString() != "") { txa[index].OBX[indexOBX].responsibleObserver.assigningFacility.id = obxSeg['OBX.16']['OBX.16.14']; }
					else delete txa[index].OBX[indexOBX].responsibleObserver.assigningFacility;
		}
		if (Object.keys(txa.obx[indexOBX].responsibleObserver).length == 0) {
			delete txa.obx[indexOBX].responsibleObserver;
		}

		// OBX.17, observationMethod
		txa.obx[indexOBX].observationMethod = [];
		for each (field in obxSeg['OBX.17']) {
			var block = {};
			if (field['OBX.17.1'].toString() != "") { block.id = field['OBX.17.1']; }
			if (field['OBX.17.2'].toString() != "") { block.text = field['OBX.17.2']; }
			if (field['OBX.17.3'].toString() != "") { block.codingSystem = field['OBX.17.3']; }
			if (field['OBX.17.4'].toString() != "") { block.altId = field['OBX.17.4']; }
			if (field['OBX.17.5'].toString() != "") { block.altText = field['OBX.17.5']; }
			if (field['OBX.17.6'].toString() != "") { block.altCodingSystem = field['OBX.17.6']; }
			if (Object.keys(block).length > 0) {
				txa.obx[indexOBX].observationMethod.push(block);
			}
		}
		if (txa.obx[indexOBX].observationMethod.length == 0) {
			delete txa.obx[indexOBX].observationMethod;
		}

		// NTE (OBX)
		var nteGroup = getSegmentsAfter(msg,obxSeg,'NTE',true);
		if (nteGroup.length > 0) {
			txa.obx[indexOBX].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				txa.obx[indexOBX].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { txa.obx[indexOBX].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { txa.obx[indexOBX].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				txa.obx[indexOBX].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						txa.obx[indexOBX].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
						if (txa.OBX[indexOBX].NTE[indexNTE].comment.length == 0) {
							delete txa.OBX[indexOBX].NTE[indexNTE].comment;
						}

				// clean up NTE and increment index
				if (Object.keys(nte[indexNTE]).length == 0) {
					delete nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// clean up OBX and increment index
		if (Object.keys(txa.obx[indexOBX]).length == 0) {
			delete txa.obx[indexOBX];
		} else {
			indexOBX++;
		}
	}
}