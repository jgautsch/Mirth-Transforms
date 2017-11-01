// DRG
var drg;
if (msg['DRG'].length() > 0) {
	drg = [];
	var index = 0;
	for each (seg in msg.DRG) {
		drg[index] = {};

		// DRG.1, diagnosticRelatedGroup
		drg[index].diagnosticRelatedGroup = {};
		if (seg['DRG.1']['DRG.1.1'].toString() != "") { drg[index].diagnosticRelatedGroup.id = seg['DRG.1']['DRG.1.1']; }
		if (seg['DRG.1']['DRG.1.2'].toString() != "") { drg[index].diagnosticRelatedGroup.text = seg['DRG.1']['DRG.1.2']; }
		if (seg['DRG.1']['DRG.1.3'].toString() != "") { drg[index].diagnosticRelatedGroup.codingSystem = seg['DRG.1']['DRG.1.3']; }
		if (seg['DRG.1']['DRG.1.4'].toString() != "") { drg[index].diagnosticRelatedGroup.altId = seg['DRG.1']['DRG.1.4']; }
		if (seg['DRG.1']['DRG.1.5'].toString() != "") { drg[index].diagnosticRelatedGroup.altText = seg['DRG.1']['DRG.1.5']; }
		if (seg['DRG.1']['DRG.1.6'].toString() != "") { drg[index].diagnosticRelatedGroup.altCodingSystem = seg['DRG.1']['DRG.1.6']; }
		if (Object.keys(drg[index].diagnosticRelatedGroup).length == 0) {
			delete drg[index].diagnosticRelatedGroup;
		}

		// DRG.2, drgAssignedDateTime
		if (seg['DRG.2']['DRG.2.1'].toString() != "") { drg[index].drgAssignedDateTime =  seg['DRG.2']['DRG.2.1']; }

		// DRG.3, drgAprovalIndicator
		if (seg['DRG.2']['DRG.2.1'].toString() != "") { drg[index].drgApprovalIndicator =  seg['DRG.2']['DRG.2.1']; }
		
		// DRG.4, drgGrouperReviewCode
		if (seg['DRG.4']['DRG.4.1'].toString() != "") { drg[index].drgGrouperReviewCode = seg['DRG.4']['DRG.4.1']; }

		// DRG.5, outlierType
		drg[index].outlierType = {};
		if (seg['DRG.5']['DRG.5.1'].toString() != "") { drg[index].outlierType.id = seg['DRG.5']['DRG.5.1']; }
		if (seg['DRG.5']['DRG.5.2'].toString() != "") { drg[index].outlierType.text = seg['DRG.5']['DRG.5.2']; }
		if (seg['DRG.5']['DRG.5.3'].toString() != "") { drg[index].outlierType.codingSystem = seg['DRG.5']['DRG.5.3']; }
		if (seg['DRG.5']['DRG.5.4'].toString() != "") { drg[index].outlierType.altId = seg['DRG.5']['DRG.5.4']; }
		if (seg['DRG.5']['DRG.5.5'].toString() != "") { drg[index].outlierType.altText = seg['DRG.5']['DRG.5.5']; }
		if (seg['DRG.5']['DRG.5.6'].toString() != "") { drg[index].outlierType.altCodingSystem = seg['DRG.5']['DRG.5.6']; }
		if (Object.keys(drg[index].outlierType).length == 0) {
			delete drg[index].outlierType;
		}

		// DRG.6, outlierDays
		if (seg['DRG.6']['DRG.6.1'].toString() != "") { drg[index].outlierDays =  seg['DRG.6']['DRG.6.1']; }
		
		// DRG.7, outlierCost
		drg[index].outlierCost = {};
		drg[index].outlierCost.price = {};
		if (seg['DRG.7']['DRG.7.1']['DRG.7.1.1'].toString() != "") { drg[index].outlierCost.price.quantity = seg['DRG.7']['DRG.7.1']['DRG.7.1.1']; }
		if (seg['DRG.7']['DRG.7.1']['DRG.7.1.2'].toString() != "") { drg[index].outlierCost.price.denomination = seg['DRG.7']['DRG.7.1']['DRG.7.1.2']; }
		if (Object.keys(drg[index].outlierCost.price).length == 0) {
			delete drg[index].outlierCost.price;
		}
		if (seg['DRG.7']['DRG.7.2'].toString() != "") { drg[index].outlierCost.priceType = seg['DRG.7']['DRG.7.2']; }
		if (seg['DRG.7']['DRG.7.3'].toString() != "") { drg[index].outlierCost.fromValue = seg['DRG.7']['DRG.7.3']; }
		if (seg['DRG.7']['DRG.7.4'].toString() != "") { drg[index].outlierCost.toValue = seg['DRG.7']['DRG.7.4']; }
		if (seg['DRG.7']['DRG.7.5'].toString() != "") { drg[index].outlierCost.rangeUnits = seg['DRG.7']['DRG.7.5']; }
		drg[index].outlierCost.rangeType = {};
		if (seg['DRG.7']['DRG.7.6']['DRG.7.6.1'].toString() != "") { drg[index].outlierCost.rangeType.id = seg['DRG.7']['DRG.7.6']['DRG.7.6.1']; }
		if (seg['DRG.7']['DRG.7.6']['DRG.7.6.2'].toString() != "") { drg[index].outlierCost.rangeType.text = seg['DRG.7']['DRG.7.6']['DRG.7.6.2']; }
		if (seg['DRG.7']['DRG.7.6']['DRG.7.6.3'].toString() != "") { drg[index].outlierCost.rangeType.codingSystem = seg['DRG.7']['DRG.7.6']['DRG.7.6.3']; }
		if (seg['DRG.7']['DRG.7.6']['DRG.7.6.4'].toString() != "") { drg[index].outlierCost.rangeType.altId = seg['DRG.7']['DRG.7.6']['DRG.7.6.4']; }
		if (seg['DRG.7']['DRG.7.6']['DRG.7.6.5'].toString() != "") { drg[index].outlierCost.rangeType.altText = seg['DRG.7']['DRG.7.6']['DRG.7.6.5']; }
		if (seg['DRG.7']['DRG.7.6']['DRG.7.6.6'].toString() != "") { drg[index].outlierCost.rangeType.altCodingSystem = seg['DRG.7']['DRG.7.6']['DRG.7.6.6']; }
		if (Object.keys(drg[index].outlierCost.rangeType).length == 0) {
			delete drg[index].outlierCost.rangeType;
		}
		if (Object.keys(drg[index].outlierCost).length == 0) {
			delete drg[index].outlierCost;
		}		

		// DRG.8, drgPayor
		if (seg['DRG.8']['DRG.8.1'].toString() != "") { drg[index].drgPayor =  seg['DRG.8']['DRG.8.1']; }
		
		// DRG.9, outlierReimbursement
		drg[index].outlierReimbursement = {};
		drg[index].outlierReimbursement.price = {};
		if (seg['DRG.9']['DRG.9.1']['DRG.9.1.1'].toString() != "") { drg[index].outlierReimbursement.price.quantity = seg['DRG.9']['DRG.9.1']['DRG.9.1.1']; }
		if (seg['DRG.9']['DRG.9.1']['DRG.9.1.2'].toString() != "") { drg[index].outlierReimbursement.price.denomination = seg['DRG.9']['DRG.9.1']['DRG.9.1.2']; }
		if (Object.keys(drg[index].outlierReimbursement.price).length == 0) {
			delete drg[index].outlierReimbursement.price;
		}
		if (seg['DRG.9']['DRG.9.2'].toString() != "") { drg[index].outlierReimbursement.priceType = seg['DRG.9']['DRG.9.2']; }
		if (seg['DRG.9']['DRG.9.3'].toString() != "") { drg[index].outlierReimbursement.fromValue = seg['DRG.9']['DRG.9.3']; }
		if (seg['DRG.9']['DRG.9.4'].toString() != "") { drg[index].outlierReimbursement.toValue = seg['DRG.9']['DRG.9.4']; }
		if (seg['DRG.9']['DRG.9.5'].toString() != "") { drg[index].outlierReimbursement.rangeUnits = seg['DRG.9']['DRG.9.5']; }
		drg[index].outlierReimbursement.rangeType = {};
		if (seg['DRG.9']['DRG.9.6']['DRG.9.6.1'].toString() != "") { drg[index].outlierReimbursement.rangeType.id = seg['DRG.9']['DRG.9.6']['DRG.9.6.1']; }
		if (seg['DRG.9']['DRG.9.6']['DRG.9.6.2'].toString() != "") { drg[index].outlierReimbursement.rangeType.text = seg['DRG.9']['DRG.9.6']['DRG.9.6.2']; }
		if (seg['DRG.9']['DRG.9.6']['DRG.9.6.3'].toString() != "") { drg[index].outlierReimbursement.rangeType.codingSystem = seg['DRG.9']['DRG.9.6']['DRG.9.6.3']; }
		if (seg['DRG.9']['DRG.9.6']['DRG.9.6.4'].toString() != "") { drg[index].outlierReimbursement.rangeType.altId = seg['DRG.9']['DRG.9.6']['DRG.9.6.4']; }
		if (seg['DRG.9']['DRG.9.6']['DRG.9.6.5'].toString() != "") { drg[index].outlierReimbursement.rangeType.altText = seg['DRG.9']['DRG.9.6']['DRG.9.6.5']; }
		if (seg['DRG.9']['DRG.9.6']['DRG.9.6.6'].toString() != "") { drg[index].outlierReimbursement.rangeType.altCodingSystem = seg['DRG.9']['DRG.9.6']['DRG.9.6.6']; }
		if (Object.keys(drg[index].outlierReimbursement.rangeType).length == 0) {
			delete drg[index].outlierReimbursement.rangeType;
		}
		if (Object.keys(drg[index].outlierReimbursement).length == 0) {
			delete drg[index].outlierReimbursement;
		}	

		// DRG.10, confidentialIndicator
		if (seg['DRG.10']['DRG.10.1'].toString() != "") { drg[index].confidentialIndicator =  seg['DRG.10']['DRG.10.1']; }

		// PR1 (DRG)
		var pr1Group = getSegmentsAfter(msg,seg,'PR1',true);
		if (pr1Group.length > 0) {
			drg[index].PR1 = [];
			var indexPR1 = 0;
			for each (pr1Seg in pr1Group) {
				drg[index].PR1[indexPR1] = {};

				// PR1.1, setId
				if (pr1Seg['PR1.1']['PR1.1.1'].toString() != "") { drg[index].PR1[indexPR1].setId = pr1Seg['PR1.1.1']['PR1.1.1']; }

				// PR1.2, procedureCodingMethod
				if (pr1Seg['PR1.2']['PR1.2.1'].toString() != "") { drg[index].PR1[indexPR1].procedureCodingMethod = pr1Seg['PR1.2.1']['PR1.2.1']; }

				// PR1.3, procedureCode
				drg[index].PR1[indexPR1].procedureCode = {};
				if (pr1Seg['PR1.3']['PR1.3.1'].toString() != "") { drg[index].PR1[indexPR1].procedureCode.id = pr1Seg['PR1.3']['PR1.3.1']; }
				if (pr1Seg['PR1.3']['PR1.3.2'].toString() != "") { drg[index].PR1[indexPR1].procedureCode.text = pr1Seg['PR1.3']['PR1.3.2']; }
				if (pr1Seg['PR1.3']['PR1.3.3'].toString() != "") { drg[index].PR1[indexPR1].procedureCode.codingSystem = pr1Seg['PR1.3']['PR1.3.3']; }
				if (pr1Seg['PR1.3']['PR1.3.4'].toString() != "") { drg[index].PR1[indexPR1].procedureCode.altId = pr1Seg['PR1.3']['PR1.3.4']; }
				if (pr1Seg['PR1.3']['PR1.3.5'].toString() != "") { drg[index].PR1[indexPR1].procedureCode.altText = pr1Seg['PR1.3']['PR1.3.5']; }
				if (pr1Seg['PR1.3']['PR1.3.6'].toString() != "") { drg[index].PR1[indexPR1].procedureCode.altCodingSystem = pr1Seg['PR1.3']['PR1.3.6']; }
				if (Object.keys(drg[index].PR1[indexPR1].procedureCode).length == 0) {
					delete drg[index].PR1[indexPR1].procedureCode;
				}

				// PR1.4, procedureDescription
				if (pr1Seg['PR1.4']['PR1.4.1'].toString() != "") { drg[index].PR1[indexPR1].procedureDescription = pr1Seg['PR1.4.1']['PR1.4.1']; }

				// PR1.5, procedureDateTime
				if (pr1Seg['PR1.5']['PR1.5.1'].toString() != "") { drg[index].PR1[indexPR1].procedureDateTime = pr1Seg['PR1.5.1']['PR1.5.1']; }

				// PR1.6, procedureFunctionalType
				if (pr1Seg['PR1.6']['PR1.6.1'].toString() != "") { drg[index].PR1[indexPR1].procedureFunctionalType = pr1Seg['PR1.6.1']['PR1.6.1']; }

				// PR1.7, procedureMinutes
				if (pr1Seg['PR1.7']['PR1.7.1'].toString() != "") { drg[index].PR1[indexPR1].procedureMinutes = pr1Seg['PR1.7.1']['PR1.7.1']; }

				// PR1.8, anesthesiologist
				drg[index].PR1[indexPR1].anesthesiologist = [];
				for each (field in pr1Seg['PR1.8']) {
					var block = {};
					if (field['PR1.8.1'].toString() != "") { block.id = field['PR1.8.1']; }
					if (field['PR1.8.2'].toString() != "") { block.lastName = field['PR1.8.2']; }
					if (field['PR1.8.3'].toString() != "") { block.firstName = field['PR1.8.3']; }
					if (field['PR1.8.4'].toString() != "") { block.middleInitOrName = field['PR1.8.4']; }
					if (field['PR1.8.5'].toString() != "") { block.suffix = field['PR1.8.5']; }
					if (field['PR1.8.6'].toString() != "") { block.prefix = field['PR1.8.6']; }
					if (field['PR1.8.7'].toString() != "") { block.degree = field['PR1.8.7']; }
					if (field['PR1.8.8'].toString() != "") { block.sourceTable = field['PR1.8.8']; }
					block.assigningAuthority = {};
					if (field['PR1.8.9']['PR1.8.9.1'].toString() != "") { block.assigningAuthority.id = field['PR1.8.9']['PR1.8.9.1']; }
					if (field['PR1.8.9']['PR1.8.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PR1.8.9']['PR1.8.9.2']; }
					if (field['PR1.8.9']['PR1.8.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PR1.8.9']['PR1.8.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PR1.8.10'].toString() != "") { block.nameTypeCode = field['PR1.8.10']; }
					if (field['PR1.8.11'].toString() != "") { block.identifierCheckDigit = field['PR1.8.11']; }
					if (field['PR1.8.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PR1.8.12']; }
					if (field['PR1.8.13'].toString() != "") { block.identifierTypeCode = field['PR1.8.13']; }
					block.assigningFacility = {};
					if (field['PR1.8.14']['PR1.8.14.1'].toString() != "") { block.assigningFacility.id = field['PR1.8.14']['PR1.8.14.1']; }
					if (field['PR1.8.14']['PR1.8.14.2'].toString() != "") { block.assigningFacility.universalId = field['PR1.8.14']['PR1.8.14.2']; }
					if (field['PR1.8.14']['PR1.8.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PR1.8.14']['PR1.8.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						drg[index].PR1[indexPR1].anesthesiologist.push(block);
					}
				}
				if (drg[index].PR1[indexPR1].anesthesiologist.length == 0) {
					delete drg[index].PR1[indexPR1].anesthesiologist;
				}

				// PR1.9, anesthesiaCode
				if (pr1Seg['PR1.9']['PR1.9.1'].toString() != "") { drg[index].PR1[indexPR1].anesthesiaCode = pr1Seg['PR1.9.1']['PR1.9.1']; }

				// PR1.10, anesthesiaMinutes
				if (pr1Seg['PR1.10']['PR1.10.1'].toString() != "") { drg[index].PR1[indexPR1].anesthesiaMinutes = pr1Seg['PR1.10.1']['PR1.10.1']; }

				// PR1.11, surgeon
				drg[index].PR1[indexPR1].surgeon = [];
				for each (field in pr1Seg['PR1.11']) {
					var block = {};
					if (field['PR1.11.1'].toString() != "") { block.id = field['PR1.11.1']; }
					if (field['PR1.11.2'].toString() != "") { block.lastName = field['PR1.11.2']; }
					if (field['PR1.11.3'].toString() != "") { block.firstName = field['PR1.11.3']; }
					if (field['PR1.11.4'].toString() != "") { block.middleInitOrName = field['PR1.11.4']; }
					if (field['PR1.11.5'].toString() != "") { block.suffix = field['PR1.11.5']; }
					if (field['PR1.11.6'].toString() != "") { block.prefix = field['PR1.11.6']; }
					if (field['PR1.11.7'].toString() != "") { block.degree = field['PR1.11.7']; }
					if (field['PR1.11.8'].toString() != "") { block.sourceTable = field['PR1.11.8']; }
					block.assigningAuthority = {};
					if (field['PR1.11.9']['PR1.11.9.1'].toString() != "") { block.assigningAuthority.id = field['PR1.11.9']['PR1.11.9.1']; }
					if (field['PR1.11.9']['PR1.11.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PR1.11.9']['PR1.11.9.2']; }
					if (field['PR1.11.9']['PR1.11.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PR1.11.9']['PR1.11.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PR1.11.10'].toString() != "") { block.nameTypeCode = field['PR1.11.10']; }
					if (field['PR1.11.11'].toString() != "") { block.identifierCheckDigit = field['PR1.11.11']; }
					if (field['PR1.11.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PR1.11.12']; }
					if (field['PR1.11.13'].toString() != "") { block.identifierTypeCode = field['PR1.11.13']; }
					block.assigningFacility = {};
					if (field['PR1.11.14']['PR1.11.14.1'].toString() != "") { block.assigningFacility.id = field['PR1.11.14']['PR1.11.14.1']; }
					if (field['PR1.11.14']['PR1.11.14.2'].toString() != "") { block.assigningFacility.universalId = field['PR1.11.14']['PR1.11.14.2']; }
					if (field['PR1.11.14']['PR1.11.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PR1.11.14']['PR1.11.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						drg[index].PR1[indexPR1].surgeon.push(block);
					}
				}
				if (drg[index].PR1[indexPR1].surgeon.length == 0) {
					delete drg[index].PR1[indexPR1].surgeon;
				}

				// PR1.12, procedurePractitioner
				drg[index].PR1[indexPR1].procedurePractitioner = [];
				for each (field in pr1Seg['PR1.12']) {
					var block = {};
					if (field['PR1.12.1'].toString() != "") { block.id = field['PR1.12.1']; }
					if (field['PR1.12.2'].toString() != "") { block.lastName = field['PR1.12.2']; }
					if (field['PR1.12.3'].toString() != "") { block.firstName = field['PR1.12.3']; }
					if (field['PR1.12.4'].toString() != "") { block.middleInitOrName = field['PR1.12.4']; }
					if (field['PR1.12.5'].toString() != "") { block.suffix = field['PR1.12.5']; }
					if (field['PR1.12.6'].toString() != "") { block.prefix = field['PR1.12.6']; }
					if (field['PR1.12.7'].toString() != "") { block.degree = field['PR1.12.7']; }
					if (field['PR1.12.8'].toString() != "") { block.sourceTable = field['PR1.12.8']; }
					block.assigningAuthority = {};
					if (field['PR1.12.9']['PR1.12.9.1'].toString() != "") { block.assigningAuthority.id = field['PR1.12.9']['PR1.12.9.1']; }
					if (field['PR1.12.9']['PR1.12.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PR1.12.9']['PR1.12.9.2']; }
					if (field['PR1.12.9']['PR1.12.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PR1.12.9']['PR1.12.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PR1.12.10'].toString() != "") { block.nameTypeCode = field['PR1.12.10']; }
					if (field['PR1.12.11'].toString() != "") { block.identifierCheckDigit = field['PR1.12.11']; }
					if (field['PR1.12.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PR1.12.12']; }
					if (field['PR1.12.13'].toString() != "") { block.identifierTypeCode = field['PR1.12.13']; }
					block.assigningFacility = {};
					if (field['PR1.12.14']['PR1.12.14.1'].toString() != "") { block.assigningFacility.id = field['PR1.12.14']['PR1.12.14.1']; }
					if (field['PR1.12.14']['PR1.12.14.2'].toString() != "") { block.assigningFacility.universalId = field['PR1.12.14']['PR1.12.14.2']; }
					if (field['PR1.12.14']['PR1.12.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PR1.12.14']['PR1.12.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						drg[index].PR1[indexPR1].procedurePractitioner.push(block);
					}
				}
				if (drg[index].PR1[indexPR1].procedurePractitioner.length == 0) {
					delete drg[index].PR1[indexPR1].procedurePractitioner;
				}

				// PR1.13, consentCode
				drg[index].PR1[indexPR1].consentCode = {};
				if (pr1Seg['PR1.13']['PR1.13.1'].toString() != "") { drg[index].PR1[indexPR1].consentCode.id = pr1Seg['PR1.13']['PR1.13.1']; }
				if (pr1Seg['PR1.13']['PR1.13.2'].toString() != "") { drg[index].PR1[indexPR1].consentCode.text = pr1Seg['PR1.13']['PR1.13.2']; }
				if (pr1Seg['PR1.13']['PR1.13.3'].toString() != "") { drg[index].PR1[indexPR1].consentCode.codingSystem = pr1Seg['PR1.13']['PR1.13.3']; }
				if (pr1Seg['PR1.13']['PR1.13.4'].toString() != "") { drg[index].PR1[indexPR1].consentCode.altId = pr1Seg['PR1.13']['PR1.13.4']; }
				if (pr1Seg['PR1.13']['PR1.13.5'].toString() != "") { drg[index].PR1[indexPR1].consentCode.altText = pr1Seg['PR1.13']['PR1.13.5']; }
				if (pr1Seg['PR1.13']['PR1.13.6'].toString() != "") { drg[index].PR1[indexPR1].consentCode.altCodingSystem = pr1Seg['PR1.13']['PR1.13.6']; }
				if (Object.keys(drg[index].PR1[indexPR1].consentCode).length == 0) {
					delete drg[index].PR1[indexPR1].consentCode;
				}

				// PR1.14, procedurePriority
				if (pr1Seg['PR1.14']['PR1.14.1'].toString() != "") { drg[index].PR1[indexPR1].procedurePriority = pr1Seg['PR1.14.1']['PR1.14.1']; }

				// PR1.15, associatedDiagnosisCode
				drg[index].PR1[indexPR1].associatedDiagnosisCode = {};
				if (pr1Seg['PR1.15']['PR1.15.1'].toString() != "") { drg[index].PR1[indexPR1].associatedDiagnosisCode.id = pr1Seg['PR1.15']['PR1.15.1']; }
				if (pr1Seg['PR1.15']['PR1.15.2'].toString() != "") { drg[index].PR1[indexPR1].associatedDiagnosisCode.text = pr1Seg['PR1.15']['PR1.15.2']; }
				if (pr1Seg['PR1.15']['PR1.15.3'].toString() != "") { drg[index].PR1[indexPR1].associatedDiagnosisCode.codingSystem = pr1Seg['PR1.15']['PR1.15.3']; }
				if (pr1Seg['PR1.15']['PR1.15.4'].toString() != "") { drg[index].PR1[indexPR1].associatedDiagnosisCode.altId = pr1Seg['PR1.15']['PR1.15.4']; }
				if (pr1Seg['PR1.15']['PR1.15.5'].toString() != "") { drg[index].PR1[indexPR1].associatedDiagnosisCode.altText = pr1Seg['PR1.15']['PR1.15.5']; }
				if (pr1Seg['PR1.15']['PR1.15.6'].toString() != "") { drg[index].PR1[indexPR1].associatedDiagnosisCode.altCodingSystem = pr1Seg['PR1.15']['PR1.15.6']; }
				if (Object.keys(drg[index].PR1[indexPR1].associatedDiagnosisCode).length == 0) {
					delete drg[index].PR1[indexPR1].associatedDiagnosisCode;
				}

				// ROL (PR1)
				var rolGroup = getSegmentsAfter(msg,seg,'ROL',true);
				if (rolGroup.length > 0) {
					drg[index].PR1[indexPR1].ROL = [];
					var indexROL = 0;
					for each (rolSeg in rolGroup) {
						drg[index].PR1[indexPR1].ROL[indexROL] = {};

						// ROL.1, roleInstanceID
						drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID = {};
						if (msg['ROL']['ROL.1']['ROL.1.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID.id = msg['ROL']['ROL.1']['ROL.1.1']; }
						if (msg['ROL']['ROL.1']['ROL.1.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID.namespaceId = msg['ROL']['ROL.1']['ROL.1.2']; }
						if (msg['ROL']['ROL.1']['ROL.1.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID.universalId = msg['ROL']['ROL.1']['ROL.1.3']; }
						if (msg['ROL']['ROL.1']['ROL.1.4'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID.unniveralIdType = msg['ROL']['ROL.1']['ROL.1.4']; }
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].roleInstanceID;
						}

						// ROL.2, actionCode
						if (rolSeg['ROL.2']['ROL.2.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].actionCode = rolSeg['ROL.2.1']['ROL.2.1']; }

						// ROL.3, role
						drg[index].PR1[indexPR1].ROL[indexROL].role = {};
						if (msg['ROL']['ROL.3']['ROL.3.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].role.id = msg['ROL']['ROL.3']['ROL.3.1']; }
						if (msg['ROL']['ROL.3']['ROL.3.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].role.text = msg['ROL']['ROL.3']['ROL.3.2']; }
						if (msg['ROL']['ROL.3']['ROL.3.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].role.codingSystem = msg['ROL']['ROL.3']['ROL.3.3']; }
						if (msg['ROL']['ROL.3']['ROL.3.4'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].role.altId = msg['ROL']['ROL.3']['ROL.3.4']; }
						if (msg['ROL']['ROL.3']['ROL.3.5'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].role.altText = msg['ROL']['ROL.3']['ROL.3.5']; }
						if (msg['ROL']['ROL.3']['ROL.3.6'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].role.altCodingSystem = msg['ROL']['ROL.3']['ROL.3.6']; }
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].role).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].role;
						}

						// ROL.4, rolePerson
						drg[index].PR1[indexPR1].ROL[indexROL].rolePerson = {};
						if (msg['ROL']['ROL.4']['ROL.4.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.id = msg['ROL']['ROL.4']['ROL.4.1']; }
						if (msg['ROL']['ROL.4']['ROL.4.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.lastName = msg['ROL']['ROL.4']['ROL.4.2']; }
						if (msg['ROL']['ROL.4']['ROL.4.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.firstName = msg['ROL']['ROL.4']['ROL.4.3']; }
						if (msg['ROL']['ROL.4']['ROL.4.4'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.middleInitOrName = msg['ROL']['ROL.4']['ROL.4.4']; }
						if (msg['ROL']['ROL.4']['ROL.4.5'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.suffix = msg['ROL']['ROL.4']['ROL.4.5']; }
						if (msg['ROL']['ROL.4']['ROL.4.6'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.prefix = msg['ROL']['ROL.4']['ROL.4.6']; }
						if (msg['ROL']['ROL.4']['ROL.4.7'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.degree = msg['ROL']['ROL.4']['ROL.4.7']; }
						if (msg['ROL']['ROL.4']['ROL.4.8'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.sourceTable = msg['ROL']['ROL.4']['ROL.4.8']; }
						drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningAuthority = {};
						if (msg['ROL']['ROL.4']['ROL.4.9']['ROL.4.9.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningAuthority.id = msg['ROL']['ROL.4']['ROL.4.9']['ROL.4.9.1']; }
						if (msg['ROL']['ROL.4']['ROL.4.9']['ROL.4.9.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningAuthority.universalId = msg['ROL']['ROL.4']['ROL.4.9']['ROL.4.9.2']; }
						if (msg['ROL']['ROL.4']['ROL.4.9']['ROL.4.9.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningAuthority.universalIdType = msg['ROL']['ROL.4']['ROL.4.9']['ROL.4.9.3']; }
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningAuthority).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningAuthority;
						}
						if (msg['ROL']['ROL.4']['ROL.4.10'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.nameTypeCode = msg['ROL']['ROL.4']['ROL.4.10']; }
						if (msg['ROL']['ROL.4']['ROL.4.11'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.identifierCheckDigit = msg['ROL']['ROL.4']['ROL.4.11']; }
						if (msg['ROL']['ROL.4']['ROL.4.12'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.codeIdentifyingCheckDigitScheme = msg['ROL']['ROL.4']['ROL.4.12']; }
						if (msg['ROL']['ROL.4']['ROL.4.13'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.identifierTypeCode = msg['ROL']['ROL.4']['ROL.4.13']; }
						drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningFacility = {};
						if (msg['ROL']['ROL.4']['ROL.4.14']['ROL.4.14.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningFacility.id = msg['ROL']['ROL.4']['ROL.4.14']['ROL.4.14.1']; }
						if (msg['ROL']['ROL.4']['ROL.4.14']['ROL.4.14.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningFacility.universalId = msg['ROL']['ROL.4']['ROL.4.14']['ROL.4.14.2']; }
						if (msg['ROL']['ROL.4']['ROL.4.14']['ROL.4.14.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningFacility.universalIdType = msg['ROL']['ROL.4']['ROL.4.14']['ROL.4.14.3']; }
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningFacility).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].rolePerson.assigningFacility;
						}
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].rolePerson).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].rolePerson;
						}

						// ROL.5, roleBeginDateTime
						if (rolSeg['ROL.5']['ROL.5.1'].toString() != "") { pr1[indexPR1].roleBeginDateTime = rolSeg['ROL.5.1']['ROL.5.1']; }

						// ROL.6, roleEndDateTime
						if (rolSeg['ROL.6']['ROL.6.1'].toString() != "") { pr1[indexPR1].roleEndDateTime = rolSeg['ROL.6.1']['ROL.6.1']; }

						// ROL.7, roleDuration
						drg[index].PR1[indexPR1].ROL[indexROL].roleDuration = {};
						if (msg['ROL']['ROL.7']['ROL.7.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleDuration.id = msg['ROL']['ROL.7']['ROL.7.1']; }
						if (msg['ROL']['ROL.7']['ROL.7.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleDuration.text = msg['ROL']['ROL.7']['ROL.7.2']; }
						if (msg['ROL']['ROL.7']['ROL.7.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleDuration.codingSystem = msg['ROL']['ROL.7']['ROL.7.3']; }
						if (msg['ROL']['ROL.7']['ROL.7.4'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleDuration.altId = msg['ROL']['ROL.7']['ROL.7.4']; }
						if (msg['ROL']['ROL.7']['ROL.7.5'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleDuration.altText = msg['ROL']['ROL.7']['ROL.7.5']; }
						if (msg['ROL']['ROL.7']['ROL.7.6'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleDuration.altCodingSystem = msg['ROL']['ROL.7']['ROL.7.6']; }
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].roleDuration).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].roleDuration;
						}

						// ROL.8, roleActionReason
						drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason = {};
						if (msg['ROL']['ROL.8']['ROL.8.1'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason.id = msg['ROL']['ROL.8']['ROL.8.1']; }
						if (msg['ROL']['ROL.8']['ROL.8.2'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason.text = msg['ROL']['ROL.8']['ROL.8.2']; }
						if (msg['ROL']['ROL.8']['ROL.8.3'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason.codingSystem = msg['ROL']['ROL.8']['ROL.8.3']; }
						if (msg['ROL']['ROL.8']['ROL.8.4'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason.altId = msg['ROL']['ROL.8']['ROL.8.4']; }
						if (msg['ROL']['ROL.8']['ROL.8.5'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason.altText = msg['ROL']['ROL.8']['ROL.8.5']; }
						if (msg['ROL']['ROL.8']['ROL.8.6'].toString() != "") { drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason.altCodingSystem = msg['ROL']['ROL.8']['ROL.8.6']; }
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL].roleActionReason;
						}

						// clean up ROL and increment index
						if (Object.keys(drg[index].PR1[indexPR1].ROL[indexROL]).length == 0) {
							delete drg[index].PR1[indexPR1].ROL[indexROL];
						} else {
							indexROL++;
						}
					}
				}

				// clean up PR1 and increment index
				if (Object.keys(drg[index].PR1[indexPR1]).length == 0) {
					delete drg[index].PR1[indexPR1];
				} else {
					indexPR1++;
				}
			}
		}
		
		// clean up DRG and increment index
		if (Object.keys(drg[index]).length == 0) {
			delete drg[index];
		} else {
			index++;
		}	
	}
}