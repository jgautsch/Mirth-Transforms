// EVN
var evn;
if (msg['EVN'].length() > 0) {
	evn = [];
	var index = 0;
	for each (seg in msg.EVN) {
		evn[index] = {};

		// EVN.1, eventType
		if (seg['EVN.1']['EVN.1.1'].toString() != "") { evn[index].eventType = seg['EVN.1']['EVN.1.1']; }

		// EVN.2, recordedDateTime
		if (seg['EVN.2']['EVN.2.1'].toString() != "") { evn[index].recordedDateTime = seg['EVN.2']['EVN.2.1']; }

		// EVN.3, plannedEventDateTime
		if (seg['EVN.3']['EVN.3.1'].toString() != "") { evn[index].plannedEventDateTime = seg['EVN.3']['EVN.3.1']; }

		// EVN.4, eventReasonCode
		if (seg['EVN.4']['EVN.4.1'].toString() != "") { evn[index].eventReasonCode = seg['EVN.4']['EVN.4.1']; }

		// EVN.5, operatorId
		evn[index].operatorId = {};
		if (seg['EVN.5']['EVN.5.1'].toString() != "") { evn[index].operatorId.id = seg['EVN.5']['EVN.5.1']; }
		if (seg['EVN.5']['EVN.5.2'].toString() != "") { evn[index].operatorId.lastName = seg['EVN.5']['EVN.5.2']; }
		if (seg['EVN.5']['EVN.5.3'].toString() != "") { evn[index].operatorId.firstName = seg['EVN.5']['EVN.5.3']; }
		if (seg['EVN.5']['EVN.5.4'].toString() != "") { evn[index].operatorId.middleInitOrName = seg['EVN.5']['EVN.5.4']; }
		if (seg['EVN.5']['EVN.5.5'].toString() != "") { evn[index].operatorId.suffix = seg['EVN.5']['EVN.5.5']; }
		if (seg['EVN.5']['EVN.5.6'].toString() != "") { evn[index].operatorId.prefix = seg['EVN.5']['EVN.5.6']; }
		if (seg['EVN.5']['EVN.5.7'].toString() != "") { evn[index].operatorId.degree = seg['EVN.5']['EVN.5.7']; }
		if (seg['EVN.5']['EVN.5.8'].toString() != "") { evn[index].operatorId.sourceTable = seg['EVN.5']['EVN.5.8']; }
		evn[index].operatorId.assigningAuthority = {};
		if (seg['EVN.5']['EVN.5.9']['EVN.5.9.1'].toString() != "") { evn[index].operatorId.assigningAuthority.id = seg['EVN.5']['EVN.5.9']['EVN.5.9.1']; }
		if (seg['EVN.5']['EVN.5.9']['EVN.5.9.2'].toString() != "") { evn[index].operatorId.assigningAuthority.universalId = seg['EVN.5']['EVN.5.9']['EVN.5.9.2']; }
		if (seg['EVN.5']['EVN.5.9']['EVN.5.9.3'].toString() != "") { evn[index].operatorId.assigningAuthority.universalIdType = seg['EVN.5']['EVN.5.9']['EVN.5.9.3']; }
		if (Object.keys(evn[index].operatorId.assigningAuthority).length == 0) {
			if (seg['EVN.5']['EVN.5.9'].toString() != "") { evn[index].operatorId.assigningAuthority.id = seg['EVN.5']['EVN.5.9']; }
			else delete evn[index].operatorId.assigningAuthority;
		}
		if (seg['EVN.5']['EVN.5.10'].toString() != "") { evn[index].operatorId.nameTypeCode = seg['EVN.5']['EVN.5.10']; }
		if (seg['EVN.5']['EVN.5.11'].toString() != "") { evn[index].operatorId.identifierCheckDigit = seg['EVN.5']['EVN.5.11']; }
		if (seg['EVN.5']['EVN.5.12'].toString() != "") { evn[index].operatorId.codeIdentifyingCheckDigitScheme = seg['EVN.5']['EVN.5.12']; }
		if (seg['EVN.5']['EVN.5.13'].toString() != "") { evn[index].operatorId.identifierTypeCode = seg['EVN.5']['EVN.5.13']; }
		evn[index].operatorId.assigningFacility = {};
		if (seg['EVN.5']['EVN.5.14']['EVN.5.14.1'].toString() != "") { evn[index].operatorId.assigningFacility.id = seg['EVN.5']['EVN.5.14']['EVN.5.14.1']; }
		if (seg['EVN.5']['EVN.5.14']['EVN.5.14.2'].toString() != "") { evn[index].operatorId.assigningFacility.universalId = seg['EVN.5']['EVN.5.14']['EVN.5.14.2']; }
		if (seg['EVN.5']['EVN.5.14']['EVN.5.14.3'].toString() != "") { evn[index].operatorId.assigningFacility.universalIdType = seg['EVN.5']['EVN.5.14']['EVN.5.14.3']; }
		if (Object.keys(evn[index].operatorId.assigningFacility).length == 0) {
			if (seg['EVN.5']['EVN.5.14'].toString() != "") { evn[index].operatorId.assigningFacility.id = seg['EVN.5']['EVN.5.14']; }
			else delete evn[index].operatorId.assigningFacility;
		}
		if (Object.keys(evn[index].operatorId).length == 0) {
			delete evn[index].operatorId;
		}

		// EVN.6, eventOccurred
		if (seg['EVN.6']['EVN.6.1'].toString() != "") { evn[index].eventOccurred = seg['EVN.6']['EVN.6.1']; }

		// clean up EVN and increment index
		if (Object.keys(evn[index]).length == 0) {
			delete evn[index];
		} else {
			index++;
		}
	}
}