// DG1
var dg1;
if (msg['DG1'].length() > 0) {
	dg1 = [];
	var index = 0;
	for each (seg in msg.DG1) {
		dg1[index] = {};

		// DG1.1, setId
		if (seg['DG1.1']['DG1.1.1'].toString() != "") { dg1[index].setId = seg['DG1.1']['DG1.1.1']; }

		// DG1.2, diagnosisCodingMethod
		if (seg['DG1.2']['DG1.2.1'].toString() != "") { dg1[index].diagnosisCodingMethod = seg['DG1.2']['DG1.2.1']; }
		
		// DG1.3, diagnosisCode
		dg1[index].diagnosisCode = {};
		if (seg['DG1.3']['DG1.3.1'].toString() != "") { dg1[index].diagnosisCode.id = seg['DG1.3']['DG1.3.1']; }
		if (seg['DG1.3']['DG1.3.2'].toString() != "") { dg1[index].diagnosisCode.text = seg['DG1.3']['DG1.3.2']; }
		if (seg['DG1.3']['DG1.3.3'].toString() != "") { dg1[index].diagnosisCode.codingSystem = seg['DG1.3']['DG1.3.3']; }
		if (seg['DG1.3']['DG1.3.4'].toString() != "") { dg1[index].diagnosisCode.altId = seg['DG1.3']['DG1.3.4']; }
		if (seg['DG1.3']['DG1.3.5'].toString() != "") { dg1[index].diagnosisCode.altText = seg['DG1.3']['DG1.3.5']; }
		if (seg['DG1.3']['DG1.3.6'].toString() != "") { dg1[index].diagnosisCode.altCodingSystem = seg['DG1.3']['DG1.3.6']; }
		if (Object.keys(dg1[index].diagnosisCode).length == 0) {
			delete dg1[index].diagnosisCode;
		}
		
		// DG1.4, diagnosisDescription
		if (seg['DG1.4']['DG1.4.1'].toString() != "") { dg1[index].diagnosisDescription = seg['DG1.4']['DG1.4.1']; }
				
		// DG1.5, diagnosisDateTime
		if (seg['DG1.5']['DG1.5.1'].toString() != "") { dg1[index].diagnosisDateTime = seg['DG1.5']['DG1.5.1']; }
				
		// DG1.6, diagnosisType
		if (seg['DG1.6']['DG1.6.1'].toString() != "") { dg1[index].diagnosisType = seg['DG1.6']['DG1.6.1']; }
				
		// DG1.7, majorDiagnosticCategory
		dg1[index].majorDiagnosticCategory = {};
		if (seg['DG1.7']['DG1.7.1'].toString() != "") { dg1[index].majorDiagnosticCategory.id = seg['DG1.7']['DG1.7.1']; }
		if (seg['DG1.7']['DG1.7.2'].toString() != "") { dg1[index].majorDiagnosticCategory.text = seg['DG1.7']['DG1.7.2']; }
		if (seg['DG1.7']['DG1.7.3'].toString() != "") { dg1[index].majorDiagnosticCategory.codingSystem = seg['DG1.7']['DG1.7.3']; }
		if (seg['DG1.7']['DG1.7.4'].toString() != "") { dg1[index].majorDiagnosticCategory.altId = seg['DG1.7']['DG1.7.4']; }
		if (seg['DG1.7']['DG1.7.5'].toString() != "") { dg1[index].majorDiagnosticCategory.altText = seg['DG1.7']['DG1.7.5']; }
		if (seg['DG1.7']['DG1.7.6'].toString() != "") { dg1[index].majorDiagnosticCategory.altCodingSystem = seg['DG1.7']['DG1.7.6']; }
		if (Object.keys(dg1[index].majorDiagnosticCategory).length == 0) {
			delete dg1[index].majorDiagnosticCategory;
		}

		// DG1.8, diagnosticRelatedGroup
		dg1[index].diagnosticRelatedGroup = {};
		if (seg['DG1.8']['DG1.8.1'].toString() != "") { dg1[index].diagnosticRelatedGroup.id = seg['DG1.8']['DG1.8.1']; }
		if (seg['DG1.8']['DG1.8.2'].toString() != "") { dg1[index].diagnosticRelatedGroup.text = seg['DG1.8']['DG1.8.2']; }
		if (seg['DG1.8']['DG1.8.3'].toString() != "") { dg1[index].diagnosticRelatedGroup.codingSystem = seg['DG1.8']['DG1.8.3']; }
		if (seg['DG1.8']['DG1.8.4'].toString() != "") { dg1[index].diagnosticRelatedGroup.altId = seg['DG1.8']['DG1.8.4']; }
		if (seg['DG1.8']['DG1.8.5'].toString() != "") { dg1[index].diagnosticRelatedGroup.altText = seg['DG1.8']['DG1.8.5']; }
		if (seg['DG1.8']['DG1.8.6'].toString() != "") { dg1[index].diagnosticRelatedGroup.altCodingSystem = seg['DG1.8']['DG1.8.6']; }
		if (Object.keys(dg1[index].diagnosticRelatedGroup).length == 0) {
			delete dg1[index].diagnosticRelatedGroup;
		}

		// DG1.9, drgApprovalIndicator
		if (seg['DG1.9']['DG1.9.1'].toString() != "") { dg1[index].drgApprovalIndicator = seg['DG1.9']['DG1.9.1']; }
				
		// DG1.10, drgGrouperReviewCode
		if (seg['DG1.10']['DG1.10.1'].toString() != "") { dg1[index].drgGrouperReviewCode = seg['DG1.10']['DG1.10.1']; }
				
		// DG1.11, outlierType
		dg1[index].outlierType = {};
		if (seg['DG1.11']['DG1.11.1'].toString() != "") { dg1[index].outlierType.id = seg['DG1.11']['DG1.11.1']; }
		if (seg['DG1.11']['DG1.11.2'].toString() != "") { dg1[index].outlierType.text = seg['DG1.11']['DG1.11.2']; }
		if (seg['DG1.11']['DG1.11.3'].toString() != "") { dg1[index].outlierType.codingSystem = seg['DG1.11']['DG1.11.3']; }
		if (seg['DG1.11']['DG1.11.4'].toString() != "") { dg1[index].outlierType.altId = seg['DG1.11']['DG1.11.4']; }
		if (seg['DG1.11']['DG1.11.5'].toString() != "") { dg1[index].outlierType.altText = seg['DG1.11']['DG1.11.5']; }
		if (seg['DG1.11']['DG1.11.6'].toString() != "") { dg1[index].outlierType.altCodingSystem = seg['DG1.11']['DG1.11.6']; }
		if (Object.keys(dg1[index].outlierType).length == 0) {
			delete dg1[index].outlierType;
		}
		// DG1.12, outlierDays
		if (seg['DG1.12']['DG1.12.1'].toString() != "") { dg1[index].outlierDays = seg['DG1.12']['DG1.12.1']; }
				
		// DG1.13, outlierCost
		dg1[index].outlierCost = {};
		dg1[index].outlierCost.price = {};
		if (seg['DG1.13']['DG1.13.1']['DG1.13.1.1'].toString() != "") { dg1[index].outlierCost.price.quantity = seg['DG1.13']['DG1.13.1']['DG1.13.1.1']; }
		if (seg['DG1.13']['DG1.13.1']['DG1.13.1.2'].toString() != "") { dg1[index].outlierCost.price.denomination = seg['DG1.13']['DG1.13.1']['DG1.13.1.2']; }
		if (Object.keys(dg1[index].outlierCost.price).length == 0) {
			if (seg['DG1.13']['DG1.13.1'].toString() != "") { dg1[index].outlierCost.price.quantity = seg['DG1.13']['DG1.13.1']; }
			else delete dg1[index].outlierCost.price;
		}
		if (seg['DG1.13']['DG1.13.2'].toString() != "") { dg1[index].outlierCost.priceType = seg['DG1.13']['DG1.13.2']; }
		if (seg['DG1.13']['DG1.13.3'].toString() != "") { dg1[index].outlierCost.fromValue = seg['DG1.13']['DG1.13.3']; }
		if (seg['DG1.13']['DG1.13.4'].toString() != "") { dg1[index].outlierCost.toValue = seg['DG1.13']['DG1.13.4']; }
		if (seg['DG1.13']['DG1.13.5'].toString() != "") { dg1[index].outlierCost.rangeUnits = seg['DG1.13']['DG1.13.5']; }
		dg1[index].outlierCost.rangeType = {};
		if (seg['DG1.13']['DG1.13.6']['DG1.13.6.1'].toString() != "") { dg1[index].outlierCost.rangeType.id = seg['DG1.13']['DG1.13.6']['DG1.13.6.1']; }
		if (seg['DG1.13']['DG1.13.6']['DG1.13.6.2'].toString() != "") { dg1[index].outlierCost.rangeType.text = seg['DG1.13']['DG1.13.6']['DG1.13.6.2']; }
		if (seg['DG1.13']['DG1.13.6']['DG1.13.6.3'].toString() != "") { dg1[index].outlierCost.rangeType.codingSystem = seg['DG1.13']['DG1.13.6']['DG1.13.6.3']; }
		if (seg['DG1.13']['DG1.13.6']['DG1.13.6.4'].toString() != "") { dg1[index].outlierCost.rangeType.altId = seg['DG1.13']['DG1.13.6']['DG1.13.6.4']; }
		if (seg['DG1.13']['DG1.13.6']['DG1.13.6.5'].toString() != "") { dg1[index].outlierCost.rangeType.altText = seg['DG1.13']['DG1.13.6']['DG1.13.6.5']; }
		if (seg['DG1.13']['DG1.13.6']['DG1.13.6.6'].toString() != "") { dg1[index].outlierCost.rangeType.altCodingSystem = seg['DG1.13']['DG1.13.6']['DG1.13.6.6']; }
		if (Object.keys(dg1[index].outlierCost.rangeType).length == 0) {
			if (seg['DG1.13']['DG1.13.6'].toString() != "") { dg1[index].outlierCost.rangeType.id = seg['DG1.13']['DG1.13.6']; }
			else delete dg1[index].outlierCost.rangeType;
		}
		if (Object.keys(dg1[index].outlierCost).length == 0) {
			delete dg1[index].outlierCost;
		}

		// DG1.14, grouperVersionAndType
		if (seg['DG1.14']['DG1.14.1'].toString() != "") { dg1[index].grouperVersionAndType = seg['DG1.14']['DG1.14.1']; }
				
		// DG1.15, diagnosisPriority
		if (seg['DG1.15']['DG1.15.1'].toString() != "") { dg1[index].diagnosisPriority = seg['DG1.15']['DG1.15.1']; }
				
		// DG1.16, diagnosingClinician
		dg1[index].diagnosingClinician = [];
		for each (field in seg['DG1.16']) {
			var block = {};
			if (field['DG1.16.1'].toString() != "") { block.id = field['DG1.16.1']; }
			if (field['DG1.16.2'].toString() != "") { block.lastName = field['DG1.16.2']; }
			if (field['DG1.16.3'].toString() != "") { block.firstName = field['DG1.16.3']; }
			if (field['DG1.16.4'].toString() != "") { block.middleInitOrName = field['DG1.16.4']; }
			if (field['DG1.16.5'].toString() != "") { block.suffix = field['DG1.16.5']; }
			if (field['DG1.16.6'].toString() != "") { block.prefix = field['DG1.16.6']; }
			if (field['DG1.16.7'].toString() != "") { block.degree = field['DG1.16.7']; }
			if (field['DG1.16.8'].toString() != "") { block.sourceTable = field['DG1.16.8']; }
			block.assigningAuthority = {};
			if (field['DG1.16.9']['DG1.16.9.1'].toString() != "") { block.assigningAuthority.id = field['DG1.16.9']['DG1.16.9.1']; }
			if (field['DG1.16.9']['DG1.16.9.2'].toString() != "") { block.assigningAuthority.universalId = field['DG1.16.9']['DG1.16.9.2']; }
			if (field['DG1.16.9']['DG1.16.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['DG1.16.9']['DG1.16.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['DG1.16.9'].toString() != "") { block.assigningAuthority.id = field['DG1.16.9']; }
				else delete block.assigningAuthority;
			}
			if (field['DG1.16.10'].toString() != "") { block.nameTypeCode = field['DG1.16.10']; }
			if (field['DG1.16.11'].toString() != "") { block.identifierCheckDigit = field['DG1.16.11']; }
			if (field['DG1.16.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['DG1.16.12']; }
			if (field['DG1.16.13'].toString() != "") { block.identifierTypeCode = field['DG1.16.13']; }
			block.assigningFacility = {};
			if (field['DG1.16.14']['DG1.16.14.1'].toString() != "") { block.assigningFacility.id = field['DG1.16.14']['DG1.16.14.1']; }
			if (field['DG1.16.14']['DG1.16.14.2'].toString() != "") { block.assigningFacility.universalId = field['DG1.16.14']['DG1.16.14.2']; }
			if (field['DG1.16.14']['DG1.16.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['DG1.16.14']['DG1.16.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['DG1.16.14'].toString() != "") { block.assigningFacility.id = field['DG1.16.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				dg1[index].diagnosingClinician.push(block);
			}
		}
		if (dg1[index].diagnosingClinician.length == 0) {
			delete dg1[index].diagnosingClinician;
		}

		// DG1.17, diagnosisClassification
		if (seg['DG1.17']['DG1.17.1'].toString() != "") { dg1[index].diagnosisClassification = seg['DG1.17']['DG1.17.1']; }
				
		// DG1.18, confidentialIndicator
		if (seg['DG1.18']['DG1.18.1'].toString() != "") { dg1[index].confidentialIndicator = seg['DG1.18']['DG1.18.1']; }
				
		// DG1.19, attestationDateTime
		if (seg['DG1.19']['DG1.19.1'].toString() != "") { dg1[index].attestationDateTime = seg['DG1.19']['DG1.19.1']; }

		// clean up DG1 and increment index
		if (Object.keys(dg1[index]).length == 0) {
			delete dg1[index];
		} else {
			index++;
		}
	}
}