// OBX
var obx;
if (msg['OBX'].length() > 0) {
	obx = [];
	var index = 0;
	for each (seg in msg.OBX) {
		obx[index] = {};

		// OBX.1, setId
		if (seg['OBX.1']['OBX.1.1'].toString() != "") { obx[index].setId = seg['OBX.1']['OBX.1.1']; }

		// OBX.2, valueType
		if (seg['OBX.2']['OBX.2.1'].toString() != "") { obx[index].valueType = seg['OBX.2']['OBX.2.1']; }
		
		// OBX.3, identifier
		obx[index].identifier = {};
		if (seg['OBX.3']['OBX.3.1'].toString() != "") { obx[index].identifier.id = seg['OBX.3']['OBX.3.1']; }
		if (seg['OBX.3']['OBX.3.2'].toString() != "") { obx[index].identifier.text = seg['OBX.3']['OBX.3.2']; }
		if (seg['OBX.3']['OBX.3.3'].toString() != "") { obx[index].identifier.codingSystem = seg['OBX.3']['OBX.3.3']; }
		if (seg['OBX.3']['OBX.3.4'].toString() != "") { obx[index].identifier.altId = seg['OBX.3']['OBX.3.4']; }
		if (seg['OBX.3']['OBX.3.5'].toString() != "") { obx[index].identifier.altText = seg['OBX.3']['OBX.3.5']; }
		if (seg['OBX.3']['OBX.3.6'].toString() != "") { obx[index].identifier.altCodingSystem = seg['OBX.3']['OBX.3.6']; }
		if (Object.keys(obx[index].identifier).length == 0) {
			delete obx[index].identifier;
		}

		// OBX.4, subId
		if (seg['OBX.4']['OBX.4.1'].toString() != "") { obx[index].subId = seg['OBX.4']['OBX.4.1']; }
		
		// OBX.5, observationValue
		obx[index].observationValue = [];
		for each (field in seg['OBX.5']) {
			if (field['OBX.5.1'].toString() != "") { 
				obx[index].observationValue.push(field['OBX.5.1']); 
			} else if (field['OBX.5.5'].toString() != "") { 
				obx[index].observationValue.push(field['OBX.5.5']); 
			}
		}
		if (obx[index].observationValue.length == 0) {
			delete obx[index].observationValue;
		}

		// OBX.6, units
		obx[index].units = {};
		if (seg['OBX.6']['OBX.6.1'].toString() != "") { obx[index].units.id = seg['OBX.6']['OBX.6.1']; }
		if (seg['OBX.6']['OBX.6.2'].toString() != "") { obx[index].units.text = seg['OBX.6']['OBX.6.2']; }
		if (seg['OBX.6']['OBX.6.3'].toString() != "") { obx[index].units.codingSystem = seg['OBX.6']['OBX.6.3']; }
		if (seg['OBX.6']['OBX.6.4'].toString() != "") { obx[index].units.altId = seg['OBX.6']['OBX.6.4']; }
		if (seg['OBX.6']['OBX.6.5'].toString() != "") { obx[index].units.altText = seg['OBX.6']['OBX.6.5']; }
		if (seg['OBX.6']['OBX.6.6'].toString() != "") { obx[index].units.altCodingSystem = seg['OBX.6']['OBX.6.6']; }
		if (Object.keys(obx[index].units).length == 0) {
			delete obx[index].units;
		}

		// OBX.7, referenceRange
		if (seg['OBX.7']['OBX.7.1'].toString() != "") { obx[index].referenceRange = seg['OBX.7']['OBX.7.1']; }
		
		// OBX.8, abnormalFlag
		obx[index].abnormalFlag = [];
		for each (field in seg['OBX.9']) {
			if (field['OBX.9.1'].toString() != "") { 
				obx[index].abnormalFlag.push(field['OBX.9.1']); 
			}
		}
		if (obx[index].abnormalFlag.length == 0) {
			delete obx[index].abnormalFlag;
		}

		// OBX.9, probability
		if (seg['OBX.9']['OBX.9.1'].toString() != "") { obx[index].probability = seg['OBX.9']['OBX.9.1']; }
		
		// OBX.10, natureOfAbnormal
		obx[index].natureOfAbnormal = [];
		for each (field in seg['OBX.10']) {
			if (field['OBX.10.1'].toString() != "") { 
				obx[index].natureOfAbnormal.push(field['OBX.10.1']); 
			}
		}
		if (obx[index].natureOfAbnormal.length == 0) {
			delete obx[index].natureOfAbnormal;
		}

		// OBX.11, observeResultStatus
		if (seg['OBX.11']['OBX.11.1'].toString() != "") { obx[index].observeResultStatus = seg['OBX.11']['OBX.11.1']; }
		
		// OBX.12, effectiveDateLastNormalValue
		if (seg['OBX.12']['OBX.12.1'].toString() != "") { obx[index].effectiveDateLastNormalValue = seg['OBX.12']['OBX.12.1']; }
		
		// OBX.13, definedAccessChecks
		if (seg['OBX.13']['OBX.13.1'].toString() != "") { obx[index].definedAccessChecks = seg['OBX.13']['OBX.13.1']; }
		
		// OBX.14, observationDateTime
		if (seg['OBX.14']['OBX.14.1'].toString() != "") { obx[index].observationDateTime = seg['OBX.14']['OBX.14.1']; }
		
		// OBX.15, producersId
		obx[index].producersId = {};
		if (seg['OBX.15']['OBX.15.1'].toString() != "") { obx[index].producersId.id = seg['OBX.15']['OBX.15.1']; }
		if (seg['OBX.15']['OBX.15.2'].toString() != "") { obx[index].producersId.text = seg['OBX.15']['OBX.15.2']; }
		if (seg['OBX.15']['OBX.15.3'].toString() != "") { obx[index].producersId.codingSystem = seg['OBX.15']['OBX.15.3']; }
		if (seg['OBX.15']['OBX.15.4'].toString() != "") { obx[index].producersId.altId = seg['OBX.15']['OBX.15.4']; }
		if (seg['OBX.15']['OBX.15.5'].toString() != "") { obx[index].producersId.altText = seg['OBX.15']['OBX.15.5']; }
		if (seg['OBX.15']['OBX.15.6'].toString() != "") { obx[index].producersId.altCodingSystem = seg['OBX.15']['OBX.15.6']; }
		if (Object.keys(obx[index].producersId).length == 0) {
			delete obx[index].producersId;
		}

		// OBX.16, responsibleObserver
		obx[index].responsibleObserver = {};
		if (seg['OBX.16']['OBX.16.1'].toString() != "") { obx[index].responsibleObserver.id = seg['OBX.16']['OBX.16.1']; }
		if (seg['OBX.16']['OBX.16.2'].toString() != "") { obx[index].responsibleObserver.lastName = seg['OBX.16']['OBX.16.2']; }
		if (seg['OBX.16']['OBX.16.3'].toString() != "") { obx[index].responsibleObserver.firstName = seg['OBX.16']['OBX.16.3']; }
		if (seg['OBX.16']['OBX.16.4'].toString() != "") { obx[index].responsibleObserver.middleInitOrName = seg['OBX.16']['OBX.16.4']; }
		if (seg['OBX.16']['OBX.16.5'].toString() != "") { obx[index].responsibleObserver.suffix = seg['OBX.16']['OBX.16.5']; }
		if (seg['OBX.16']['OBX.16.6'].toString() != "") { obx[index].responsibleObserver.prefix = seg['OBX.16']['OBX.16.6']; }
		if (seg['OBX.16']['OBX.16.7'].toString() != "") { obx[index].responsibleObserver.degree = seg['OBX.16']['OBX.16.7']; }
		if (seg['OBX.16']['OBX.16.8'].toString() != "") { obx[index].responsibleObserver.sourceTable = seg['OBX.16']['OBX.16.8']; }
		obx[index].responsibleObserver.assigningAuthority = {};
		if (seg['OBX.16']['OBX.16.9']['OBX.16.9.1'].toString() != "") { obx[index].responsibleObserver.assigningAuthority.id = seg['OBX.16']['OBX.16.9']['OBX.16.9.1']; }
		if (seg['OBX.16']['OBX.16.9']['OBX.16.9.2'].toString() != "") { obx[index].responsibleObserver.assigningAuthority.universalId = seg['OBX.16']['OBX.16.9']['OBX.16.9.2']; }
		if (seg['OBX.16']['OBX.16.9']['OBX.16.9.3'].toString() != "") { obx[index].responsibleObserver.assigningAuthority.universalIdType = seg['OBX.16']['OBX.16.9']['OBX.16.9.3']; }
		if (Object.keys(obx[index].responsibleObserver.assigningAuthority).length == 0) {
			delete obx[index].responsibleObserver.assigningAuthority;
		}
		if (seg['OBX.16']['OBX.16.10'].toString() != "") { obx[index].responsibleObserver.nameTypeCode = seg['OBX.16']['OBX.16.10']; }
		if (seg['OBX.16']['OBX.16.11'].toString() != "") { obx[index].responsibleObserver.identifierCheckDigit = seg['OBX.16']['OBX.16.11']; }
		if (seg['OBX.16']['OBX.16.12'].toString() != "") { obx[index].responsibleObserver.codeIdentifyingCheckDigitScheme = seg['OBX.16']['OBX.16.12']; }
		if (seg['OBX.16']['OBX.16.13'].toString() != "") { obx[index].responsibleObserver.identifierTypeCode = seg['OBX.16']['OBX.16.13']; }
		obx[index].responsibleObserver.assigningFacility = {};
		if (seg['OBX.16']['OBX.16.14']['OBX.16.14.1'].toString() != "") { obx[index].responsibleObserver.assigningFacility.id = seg['OBX.16']['OBX.16.14']['OBX.16.14.1']; }
		if (seg['OBX.16']['OBX.16.14']['OBX.16.14.2'].toString() != "") { obx[index].responsibleObserver.assigningFacility.universalId = seg['OBX.16']['OBX.16.14']['OBX.16.14.2']; }
		if (seg['OBX.16']['OBX.16.14']['OBX.16.14.3'].toString() != "") { obx[index].responsibleObserver.assigningFacility.universalIdType = seg['OBX.16']['OBX.16.14']['OBX.16.14.3']; }
		if (Object.keys(obx[index].responsibleObserver.assigningFacility).length == 0) {
			delete obx[index].responsibleObserver.assigningFacility;
		}
		if (Object.keys(obx[index].responsibleObserver).length == 0) {
			delete obx[index].responsibleObserver;
		}

		// OBX.17, observationMethod
		obx[index].observationMethod = [];
		for each (field in seg['OBX.17']) {
			var block = {};
			if (field['OBX.17.1'].toString() != "") { block.id = field['OBX.17.1']; }
			if (field['OBX.17.2'].toString() != "") { block.text = field['OBX.17.2']; }
			if (field['OBX.17.3'].toString() != "") { block.codingSystem = field['OBX.17.3']; }
			if (field['OBX.17.4'].toString() != "") { block.altId = field['OBX.17.4']; }
			if (field['OBX.17.5'].toString() != "") { block.altText = field['OBX.17.5']; }
			if (field['OBX.17.6'].toString() != "") { block.altCodingSystem = field['OBX.17.6']; }
			if (Object.keys(block).length > 0) {
				obx[index].observationMethod.push(block);
			}
		}
		if (obx[index].observationMethod.length == 0) {
			delete obx[index].observationMethod;
		}

		// NTE (OBX)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			obx[index].NTE = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				obx[index].NTE[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { obx[index].NTE[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { obx[index].NTE[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				obx[index].NTE[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						obx[index].NTE[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				if (obx[index].NTE[indexNTE].comment.length == 0) {
					delete obx[index].NTE[indexNTE].comment;
				}

				// clean up NTE and increment index
				if (obx[index].NTE.length == 0) {
					delete obx[index].NTE;
				} else {
					indexNTE++;
				}
			}
		}

		// clean up OBX and increment index
		if (Object.keys(obx[index]).length == 0) {
			delete obx[index];
		} else {
			index++;
		}
	}
}