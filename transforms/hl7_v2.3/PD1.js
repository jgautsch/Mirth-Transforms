// PD1
var pd1;
if (msg['PD1'].length() > 0) {
	pd1 = [];
	var index = 0;
	for each (seg in msg.PD1) {
		pd1[index] = {};

		// PD1.1, livingDependency
		pd1[index].livingDependency = [];
		for each (field in seg['PD1.1']) {
			if (field['PD1.1.1'].toString() != "") {
				pd1[index].livingDependency.push(field['PD1.1.1']);
			}
		}
		if (pd1[index].livingDependency.length == 0) {
			delete pd1[index].livingDependency;
		}
		
		// PD1.2, livingArrangement
		if (seg['PD1.2']['PD1.2.1'].toString() != "") { pd1[index].livingArrangement = seg['PD1.2']['PD1.2.1']; }

		// PD1.3, patientPrimaryFacility
		pd1[index].patientPrimaryFacility = [];
		for each (field in seg['PD1.3']) {
			var block = {};
			if (field['PD1.3.1'].toString() != "") { block.organizationName = field['PD1.3.1']; }
			if (field['PD1.3.2'].toString() != "") { block.organizationNameTypeCode = field['PD1.3.2']; }
			if (field['PD1.3.3'].toString() != "") { block.idNumber = field['PD1.3.3']; }
			if (field['PD1.3.4'].toString() != "") { block.identifierCheckDigit = field['PD1.3.4']; }
			if (field['PD1.3.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.3.5']; }
			block.assigningAuthority = {};
			if (field['PD1.3.6']['PD1.3.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.3.6']['PD1.3.6.1']; }
			if (field['PD1.3.6']['PD1.3.6.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.3.6']['PD1.3.6.2']; }
			if (field['PD1.3.6']['PD1.3.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.3.6']['PD1.3.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PD1.3.6'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.3.6']; }
				else delete block.assigningAuthority;
			}
			if (field['PD1.3.7'].toString() != "") { block.idTypeCode = field['PD1.3.7']; }
			block.assigningFacility = {};
			if (field['PD1.3.8']['PD1.3.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.3.8']['PD1.3.8.1']; }
			if (field['PD1.3.8']['PD1.3.8.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.3.8']['PD1.3.8.2']; }
			if (field['PD1.3.8']['PD1.3.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.3.8']['PD1.3.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PD1.3.8'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.3.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pd1[index].patientPrimaryFacility.push(block);
			}
		}
		if (pd1[index].patientPrimaryFacility.length == 0) {
			delete pd1[index].patientPrimaryFacility;
		}

		// PD1.4, primaryCareProvider
		pd1[index].primaryCareProvider = [];
		for each (field in seg['PD1.4']) {
			var block = {};
			if (field['PD1.4.1'].toString() != "") { block.id = field['PD1.4.1']; }
			if (field['PD1.4.2'].toString() != "") { block.lastName = field['PD1.4.2']; }
			if (field['PD1.4.3'].toString() != "") { block.firstName = field['PD1.4.3']; }
			if (field['PD1.4.4'].toString() != "") { block.middleInitOrName = field['PD1.4.4']; }
			if (field['PD1.4.5'].toString() != "") { block.suffix = field['PD1.4.5']; }
			if (field['PD1.4.6'].toString() != "") { block.prefix = field['PD1.4.6']; }
			if (field['PD1.4.7'].toString() != "") { block.degree = field['PD1.4.7']; }
			if (field['PD1.4.8'].toString() != "") { block.sourceTable = field['PD1.4.8']; }
			block.assigningAuthority = {};
			if (field['PD1.4.9']['PD1.4.9.1'].toString() != "") { block.assigningAuthority.id = field['PD1.4.9']['PD1.4.9.1']; }
			if (field['PD1.4.9']['PD1.4.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.4.9']['PD1.4.9.2']; }
			if (field['PD1.4.9']['PD1.4.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.4.9']['PD1.4.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PD1.4.9'].toString() != "") { block.assigningAuthority.id = field['PD1.4.9']; }
				else delete block.assigningAuthority;
			}
			if (field['PD1.4.10'].toString() != "") { block.nameTypeCode = field['PD1.4.10']; }
			if (field['PD1.4.11'].toString() != "") { block.identifierCheckDigit = field['PD1.4.11']; }
			if (field['PD1.4.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.4.12']; }
			if (field['PD1.4.13'].toString() != "") { block.identifierTypeCode = field['PD1.4.13']; }
			block.assigningFacility = {};
			if (field['PD1.4.14']['PD1.4.14.1'].toString() != "") { block.assigningFacility.id = field['PD1.4.14']['PD1.4.14.1']; }
			if (field['PD1.4.14']['PD1.4.14.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.4.14']['PD1.4.14.2']; }
			if (field['PD1.4.14']['PD1.4.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.4.14']['PD1.4.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PD1.4.14'].toString() != "") { block.assigningFacility.id = field['PD1.4.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pd1[index].primaryCareProvider.push(block);
			}
		}
		if (pd1[index].primaryCareProvider.length == 0) {
			delete pd1[index].primaryCareProvider;
		}

		// PD1.5, studentIndicator
		if (seg['PD1.5']['PD1.5.1'].toString() != "") { pd1[index].studentIndicator = seg['PD1.5']['PD1.5.1']; }
		
		// PD1.6, handicap
		if (seg['PD1.6']['PD1.6.1'].toString() != "") { pd1[index].handicap = seg['PD1.6']['PD1.6.1']; }
		
		// PD1.7, livingWillCode
		if (seg['PD1.7']['PD1.7.1'].toString() != "") { pd1[index].livingWillCode = seg['PD1.7']['PD1.7.1']; }
		
		// PD1.8, organDonorCode
		if (seg['PD1.8']['PD1.8.1'].toString() != "") { pd1[index].organDonorCode = seg['PD1.8']['PD1.8.1']; }
		
		// PD1.9, separateBill
		if (seg['PD1.9']['PD1.9.1'].toString() != "") { pd1[index].separateBill = seg['PD1.9']['PD1.9.1']; }
		
		// PD1.10, duplicatePatient
		pd1[index].duplicatePatient = [];
		for each (field in seg['PD1.10']) {
			var block = {};
			if (field['PD1.10.1'].toString() != "") { block.id = field['PD1.10.1']; }
			if (field['PD1.10.2'].toString() != "") { block.identifierCheckDigit = field['PD1.10.2']; }
			if (field['PD1.10.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.10.3']; }
			block.assigningAuthority = {};
			if (field['PD1.10.4']['PD1.10.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.10.4']['PD1.10.4.1']; }
			if (field['PD1.10.4']['PD1.10.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.10.4']['PD1.10.4.2']; }
			if (field['PD1.10.4']['PD1.10.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.10.4']['PD1.10.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PD1.10.4'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.10.4']; }
				else delete block.assigningAuthority;
			}
			if (field['PD1.10.5'].toString() != "") { block.idTypeCode = field['PD1.10.5']; }
			block.assigningFacility = {};
			if (field['PD1.10.6']['PD1.10.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.10.6']['PD1.10.6.1']; }
			if (field['PD1.10.6']['PD1.10.6.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.10.6']['PD1.10.6.2']; }
			if (field['PD1.10.6']['PD1.10.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.10.6']['PD1.10.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PD1.10.6'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.10.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pd1[index].duplicatePatient.push(block);
			}
		}
		if (pd1[index].duplicatePatient.length == 0) {
			delete pd1[index].duplicatePatient;
		}

		// PD1.11, publicityIndicator
		pd1[index].publicityIndicator = {};
		if (seg['PD1.11']['PD1.11.1'].toString() != "") { pd1[index].publicityIndicator.id = seg['PD1.11']['PD1.11.1']; }
		if (seg['PD1.11']['PD1.11.2'].toString() != "") { pd1[index].publicityIndicator.text = seg['PD1.11']['PD1.11.2']; }
		if (seg['PD1.11']['PD1.11.3'].toString() != "") { pd1[index].publicityIndicator.codingSystem = seg['PD1.11']['PD1.11.3']; }
		if (seg['PD1.11']['PD1.11.4'].toString() != "") { pd1[index].publicityIndicator.altId = seg['PD1.11']['PD1.11.4']; }
		if (seg['PD1.11']['PD1.11.5'].toString() != "") { pd1[index].publicityIndicator.altText = seg['PD1.11']['PD1.11.5']; }
		if (seg['PD1.11']['PD1.11.6'].toString() != "") { pd1[index].publicityIndicator.altCodingSystem = seg['PD1.11']['PD1.11.6']; }
		if (Object.keys(pd1[index].publicityIndicator).length == 0) {
			delete pd1[index].publicityIndicator;
		}
		
		// PD1.12, protectionIndicator
		if (seg['PD1.12']['PD1.12.1'].toString() != "") { pd1[index].protectionIndicator = seg['PD1.12']['PD1.12.1']; }

		// clean up PD1 and increment index
		if (Object.keys(pd1[index]).length == 0) {
			delete pd1[index];
		} else {
			index++;
		}
	}
}