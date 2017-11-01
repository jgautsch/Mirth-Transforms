// PV2
var pv2;
if (msg['PV2'].length() > 0) {
	pv2 = [];
	var index = 0;
	for each (seg in msg.PV2) {
		pv2[index] = {};

		// PV2.1, priorPendingLocation
		pv2[index].priorPendingLocation = {};
		if (seg['PV2.1']['PV2.1.1'].toString() != "") { pv2[index].priorPendingLocation.pointOfCare = seg['PV2.1']['PV2.1.1']; }
		if (seg['PV2.1']['PV2.1.2'].toString() != "") { pv2[index].priorPendingLocation.room = seg['PV2.1']['PV2.1.2']; }
		if (seg['PV2.1']['PV2.1.3'].toString() != "") { pv2[index].priorPendingLocation.bed = seg['PV2.1']['PV2.1.3']; }
		pv2[index].priorPendingLocation.facility = {};
		if (seg['PV2.1']['PV2.1.4']['PV2.1.4.1'].toString() != "") { pv2[index].priorPendingLocation.facility.nameSpaceId =  seg['PV2.1']['PV2.1.4']['PV2.1.4.1']; }
		if (seg['PV2.1']['PV2.1.4']['PV2.1.4.2'].toString() != "") { pv2[index].priorPendingLocation.facility.universalId =  seg['PV2.1']['PV2.1.4']['PV2.1.4.2']; }
		if (seg['PV2.1']['PV2.1.4']['PV2.1.4.3'].toString() != "") { pv2[index].priorPendingLocation.facility.universalIdType =  seg['PV2.1']['PV2.1.4']['PV2.1.4.3']; }
		if (Object.keys(pv2[index].priorPendingLocation.facility).length == 0) {
			if (seg['PV2.1']['PV2.1.4'].toString() != "") { pv2[index].priorPendingLocation.facility.nameSpaceId = seg['PV2.1']['PV2.1.4']; }
			else delete pv2[index].priorPendingLocation.facility;
		}
		if (seg['PV2.1']['PV2.1.5'].toString() != "") { pv2[index].priorPendingLocation.locationStatus = seg['PV2.1']['PV2.1.5']; }
		if (seg['PV2.1']['PV2.1.6'].toString() != "") { pv2[index].priorPendingLocation.personLocationType = seg['PV2.1']['PV2.1.6']; }
		if (seg['PV2.1']['PV2.1.7'].toString() != "") { pv2[index].priorPendingLocation.building = seg['PV2.1']['PV2.1.7']; }
		if (seg['PV2.1']['PV2.1.8'].toString() != "") { pv2[index].priorPendingLocation.floor = seg['PV2.1']['PV2.1.8']; }
		if (seg['PV2.1']['PV2.1.9'].toString() != "") { pv2[index].priorPendingLocation.locationDescription = seg['PV2.1']['PV2.1.9']; }
		if (Object.keys(pv2[index].priorPendingLocation).length == 0) {
			delete pv2[index].priorPendingLocation;
		}

		// PV2.2, accommodationCode
		pv2[index].accommodationCode = {};
		if (seg['PV2.2']['PV2.2.1'].toString() != "") { pv2[index].accommodationCode.id = seg['PV2.2']['PV2.2.1']; }
		if (seg['PV2.2']['PV2.2.2'].toString() != "") { pv2[index].accommodationCode.text = seg['PV2.2']['PV2.2.2']; }
		if (seg['PV2.2']['PV2.2.3'].toString() != "") { pv2[index].accommodationCode.codingSystem = seg['PV2.2']['PV2.2.3']; }
		if (seg['PV2.2']['PV2.2.4'].toString() != "") { pv2[index].accommodationCode.altId = seg['PV2.2']['PV2.2.4']; }
		if (seg['PV2.2']['PV2.2.5'].toString() != "") { pv2[index].accommodationCode.altText = seg['PV2.2']['PV2.2.5']; }
		if (seg['PV2.2']['PV2.2.6'].toString() != "") { pv2[index].accommodationCode.altCodingSystem = seg['PV2.2']['PV2.2.6']; }
		if (Object.keys(pv2[index].accommodationCode).length == 0) {
			delete pv2[index].accommodationCode;
		}

		// PV2.3, admitReason
		pv2[index].admitReason = {};
		if (seg['PV2.3']['PV2.3.1'].toString() != "") { pv2[index].admitReason.id = seg['PV2.3']['PV2.3.1']; }
		if (seg['PV2.3']['PV2.3.2'].toString() != "") { pv2[index].admitReason.text = seg['PV2.3']['PV2.3.2']; }
		if (seg['PV2.3']['PV2.3.3'].toString() != "") { pv2[index].admitReason.codingSystem = seg['PV2.3']['PV2.3.3']; }
		if (seg['PV2.3']['PV2.3.4'].toString() != "") { pv2[index].admitReason.altId = seg['PV2.3']['PV2.3.4']; }
		if (seg['PV2.3']['PV2.3.5'].toString() != "") { pv2[index].admitReason.altText = seg['PV2.3']['PV2.3.5']; }
		if (seg['PV2.3']['PV2.3.6'].toString() != "") { pv2[index].admitReason.altCodingSystem = seg['PV2.3']['PV2.3.6']; }
		if (Object.keys(pv2[index].admitReason).length == 0) {
			delete pv2[index].admitReason;
		}

		// PV2.4, transferReason
		pv2[index].transferReason = {};
		if (seg['PV2.4']['PV2.4.1'].toString() != "") { pv2[index].transferReason.id = seg['PV2.4']['PV2.4.1']; }
		if (seg['PV2.4']['PV2.4.2'].toString() != "") { pv2[index].transferReason.text = seg['PV2.4']['PV2.4.2']; }
		if (seg['PV2.4']['PV2.4.3'].toString() != "") { pv2[index].transferReason.codingSystem = seg['PV2.4']['PV2.4.3']; }
		if (seg['PV2.4']['PV2.4.4'].toString() != "") { pv2[index].transferReason.altId = seg['PV2.4']['PV2.4.4']; }
		if (seg['PV2.4']['PV2.4.5'].toString() != "") { pv2[index].transferReason.altText = seg['PV2.4']['PV2.4.5']; }
		if (seg['PV2.4']['PV2.4.6'].toString() != "") { pv2[index].transferReason.altCodingSystem = seg['PV2.4']['PV2.4.6']; }
		if (Object.keys(pv2[index].transferReason).length == 0) {
			delete pv2[index].transferReason;
		}

		// PV2.5, patientValuables
		pv2[index].patientValuables = [];
		for each (field in seg['PV2.5']) {
			if (field['PV2.5.1'].toString() != "") {
				pv2[index].patientValuables.push(field['PV2.5.1']);
			}
		}
		if (pv2[index].patientValuables.length == 0) {
			delete pv2[index].patientValuables;
		}

		// PV2.6, patientValuablesLocation
		if (seg['PV2.6']['PV2.6.1'].toString() != "") { pv2[index].patientValuablesLocation = seg['PV2.6']['PV2.6.1']; }

		// PV2.7, visitUserCode
		if (seg['PV2.7']['PV2.7.1'].toString() != "") { pv2[index].visitUserCode = seg['PV2.7']['PV2.7.1']; }
		
		// PV2.8, expectedAdmitDateTime
		if (seg['PV2.8']['PV2.8.1'].toString() != "") { pv2[index].expectedAdmitDateTime = seg['PV2.8']['PV2.8.1']; }
		
		// PV2.9, expectedDischargeDateTime
		if (seg['PV2.9']['PV2.9.1'].toString() != "") { pv2[index].expectedDischargeDateTime = seg['PV2.9']['PV2.9.1']; }
		
		// PV2.10, estimatedLengthInpatientStay
		if (seg['PV2.10']['PV2.10.1'].toString() != "") { pv2[index].estimatedLengthInpatientStay = seg['PV2.10']['PV2.10.1']; }
		
		// PV2.11, actualLengthInpatientStay
		if (seg['PV2.11']['PV2.11.1'].toString() != "") { pv2[index].actualLengthInpatientStay = seg['PV2.11']['PV2.11.1']; }
		
		// PV2.12, visitDescription
		if (seg['PV2.12']['PV2.12.1'].toString() != "") { pv2[index].visitDescription = seg['PV2.12']['PV2.12.1']; }
		
		// PV2.13, referralSourceCode
		pv2[index].referralSourceCode = {};
		if (seg['PV2.13']['PV2.13.1'].toString() != "") { pv2[index].referralSourceCode.id = seg['PV2.13']['PV2.13.1']; }
		if (seg['PV2.13']['PV2.13.2'].toString() != "") { pv2[index].referralSourceCode.lastName = seg['PV2.13']['PV2.13.2']; }
		if (seg['PV2.13']['PV2.13.3'].toString() != "") { pv2[index].referralSourceCode.firstName = seg['PV2.13']['PV2.13.3']; }
		if (seg['PV2.13']['PV2.13.4'].toString() != "") { pv2[index].referralSourceCode.middleInitOrName = seg['PV2.13']['PV2.13.4']; }
		if (seg['PV2.13']['PV2.13.5'].toString() != "") { pv2[index].referralSourceCode.suffix = seg['PV2.13']['PV2.13.5']; }
		if (seg['PV2.13']['PV2.13.6'].toString() != "") { pv2[index].referralSourceCode.prefix = seg['PV2.13']['PV2.13.6']; }
		if (seg['PV2.13']['PV2.13.7'].toString() != "") { pv2[index].referralSourceCode.degree = seg['PV2.13']['PV2.13.7']; }
		if (seg['PV2.13']['PV2.13.8'].toString() != "") { pv2[index].referralSourceCode.sourceTable = seg['PV2.13']['PV2.13.8']; }
		pv2[index].referralSourceCode.assigningAuthority = {};
		if (seg['PV2.13']['PV2.13.9']['PV2.13.9.1'].toString() != "") { pv2[index].referralSourceCode.assigningAuthority.id = seg['PV2.13']['PV2.13.9']['PV2.13.9.1']; }
		if (seg['PV2.13']['PV2.13.9']['PV2.13.9.2'].toString() != "") { pv2[index].referralSourceCode.assigningAuthority.universalId = seg['PV2.13']['PV2.13.9']['PV2.13.9.2']; }
		if (seg['PV2.13']['PV2.13.9']['PV2.13.9.3'].toString() != "") { pv2[index].referralSourceCode.assigningAuthority.universalIdType = seg['PV2.13']['PV2.13.9']['PV2.13.9.3']; }
		if (Object.keys(pv2[index].referralSourceCode.assigningAuthority).length == 0) {
			if (seg['PV2.13']['PV2.13.9'].toString() != "") { pv2[index].referralSourceCode.assigningAuthority.id = seg['PV2.13']['PV2.13.9']; }
			else delete pv2[index].referralSourceCode.assigningAuthority;
		}
		if (seg['PV2.13']['PV2.13.10'].toString() != "") { pv2[index].referralSourceCode.nameTypeCode = seg['PV2.13']['PV2.13.10']; }
		if (seg['PV2.13']['PV2.13.11'].toString() != "") { pv2[index].referralSourceCode.identifierCheckDigit = seg['PV2.13']['PV2.13.11']; }
		if (seg['PV2.13']['PV2.13.12'].toString() != "") { pv2[index].referralSourceCode.codeIdentifyingCheckDigitScheme = seg['PV2.13']['PV2.13.12']; }
		if (seg['PV2.13']['PV2.13.13'].toString() != "") { pv2[index].referralSourceCode.identifierTypeCode = seg['PV2.13']['PV2.13.13']; }
		pv2[index].referralSourceCode.assigningFacility = {};
		if (seg['PV2.13']['PV2.13.14']['PV2.13.14.1'].toString() != "") { pv2[index].referralSourceCode.assigningFacility.id = seg['PV2.13']['PV2.13.14']['PV2.13.14.1']; }
		if (seg['PV2.13']['PV2.13.14']['PV2.13.14.2'].toString() != "") { pv2[index].referralSourceCode.assigningFacility.universalId = seg['PV2.13']['PV2.13.14']['PV2.13.14.2']; }
		if (seg['PV2.13']['PV2.13.14']['PV2.13.14.3'].toString() != "") { pv2[index].referralSourceCode.assigningFacility.universalIdType = seg['PV2.13']['PV2.13.14']['PV2.13.14.3']; }
		if (Object.keys(pv2[index].referralSourceCode.assigningFacility).length == 0) {
			if (seg['PV2.13']['PV2.13.14'].toString() != "") { pv2[index].referralSourceCode.assigningFacility.id = seg['PV2.13']['PV2.13.14']; }
			else delete pv2[index].referralSourceCode.assigningFacility;
		}
		if (Object.keys(pv2[index].referralSourceCode).length == 0) {
			delete pv2[index].referralSourceCode;
		}

		// PV2.14, previousServiceDate
		if (seg['PV2.14']['PV2.14.1'].toString() != "") { pv2[index].previousServiceDate = seg['PV2.14']['PV2.14.1']; }
		
		// PV2.15, employmentIllnessRelatedIndicator
		if (seg['PV2.15']['PV2.15.1'].toString() != "") { pv2[index].employmentIllnessRelatedIndicator = seg['PV2.15']['PV2.15.1']; }
		
		// PV2.16, purgeStatusCode
		if (seg['PV2.16']['PV2.16.1'].toString() != "") { pv2[index].purgeStatusCode = seg['PV2.16']['PV2.16.1']; }
		
		// PV2.17, purgeStatusDate
		if (seg['PV2.17']['PV2.17.1'].toString() != "") { pv2[index].purgeStatusDate = seg['PV2.17']['PV2.17.1']; }
		
		// PV2.18, specialProgramCode
		if (seg['PV2.18']['PV2.18.1'].toString() != "") { pv2[index].specialProgramCode = seg['PV2.18']['PV2.18.1']; }
		
		// PV2.19, retentionIndicator
		if (seg['PV2.19']['PV2.19.1'].toString() != "") { pv2[index].retentionIndicator = seg['PV2.19']['PV2.19.1']; }
		
		// PV2.20, expectedNumInsurancePlans
		if (seg['PV2.20']['PV2.20.1'].toString() != "") { pv2[index].expectedNumInsurancePlans = seg['PV2.20']['PV2.20.1']; }
		
		// PV2.21, visitPublicityCode
		if (seg['PV2.21']['PV2.21.1'].toString() != "") { pv2[index].visitPublicityCode = seg['PV2.21']['PV2.21.1']; }
		
		// PV2.22, visitProtectionIndicator
		if (seg['PV2.22']['PV2.22.1'].toString() != "") { pv2[index].visitProtectionIndicator = seg['PV2.22']['PV2.22.1']; }
		
		// PV2.23, clinicOrganizationName
		pv2[index].clinicOrganizationName = [];
		for each (field in seg['PV2.23']) {
			var block = {};
			if (field['PV2.23.1'].toString() != "") { block.organizationName = field['PV2.23.1']; }
			if (field['PV2.23.2'].toString() != "") { block.organizationNameTypeCode = field['PV2.23.2']; }
			if (field['PV2.23.3'].toString() != "") { block.idNumber = field['PV2.23.3']; }
			if (field['PV2.23.4'].toString() != "") { block.identifierCheckDigit = field['PV2.23.4']; }
			if (field['PV2.23.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV2.23.5']; }
			block.assigningAuthority = {};
			if (field['PV2.23.6']['PV2.23.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PV2.23.6']['PV2.23.6.1']; }
			if (field['PV2.23.6']['PV2.23.6.2'].toString() != "") { block.assigningAuthority.universalId = field['PV2.23.6']['PV2.23.6.2']; }
			if (field['PV2.23.6']['PV2.23.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV2.23.6']['PV2.23.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PV2.23.6'].toString() != "") { block.assigningAuthority.namespaceId = field['PV2.23.6']; }
				else delete block.assigningAuthority;
			}
			if (field['PV2.23.7'].toString() != "") { block.idTypeCode = field['PV2.23.7']; }
			block.assigningFacility = {};
			if (field['PV2.23.8']['PV2.23.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['PV2.23.8']['PV2.23.8.1']; }
			if (field['PV2.23.8']['PV2.23.8.2'].toString() != "") { block.assigningFacility.universalId = field['PV2.23.8']['PV2.23.8.2']; }
			if (field['PV2.23.8']['PV2.23.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV2.23.8']['PV2.23.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PV2.23.8'].toString() != "") { block.assigningFacility.namespaceId = field['PV2.23.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pv2[index].clinicOrganizationName.push(block);
			}
		}
		if (pv2[index].clinicOrganizationName.length == 0) {
			delete pv2[index].clinicOrganizationName;
		}

		// PV2.24, patientStatusCode
		if (seg['PV2.24']['PV2.24.1'].toString() != "") { pv2[index].patientStatusCode = seg['PV2.24']['PV2.24.1']; }
		
		// PV2.25, visitPriorityCode
		if (seg['PV2.25']['PV2.25.1'].toString() != "") { pv2[index].visitPriorityCode = seg['PV2.25']['PV2.25.1']; }
		
		// PV2.26, previousTreatmentDate
		if (seg['PV2.26']['PV2.26.1'].toString() != "") { pv2[index].previousTreatmentDate = seg['PV2.26']['PV2.26.1']; }
		
		// PV2.27, expectedDischargeDisposition
		if (seg['PV2.27']['PV2.27.1'].toString() != "") { pv2[index].expectedDischargeDisposition = seg['PV2.27']['PV2.27.1']; }
		
		// PV2.28, signatureOnFileDate
		if (seg['PV2.28']['PV2.28.1'].toString() != "") { pv2[index].signatureOnFileDate = seg['PV2.28']['PV2.28.1']; }
		
		// PV2.29, firstSimilarIllnessDate
		if (seg['PV2.29']['PV2.29.1'].toString() != "") { pv2[index].firstSimilarIllnessDate = seg['PV2.29']['PV2.29.1']; }
		
		// PV2.30, patientChargeAdjustmentCode
		if (seg['PV2.30']['PV2.30.1'].toString() != "") { pv2[index].patientChargeAdjustmentCode = seg['PV2.30']['PV2.30.1']; }
		
		// PV2.31, recurringServiceCode
		if (seg['PV2.31']['PV2.31.1'].toString() != "") { pv2[index].recurringServiceCode = seg['PV2.31']['PV2.31.1']; }
		
		// PV2.32, billingMediaCode
		if (seg['PV2.32']['PV2.32.1'].toString() != "") { pv2[index].billingMediaCode = seg['PV2.32']['PV2.32.1']; }
		
		// PV2.33, expectedSurgeryDateTime
		if (seg['PV2.33']['PV2.33.1'].toString() != "") { pv2[index].expectedSurgeryDateTime = seg['PV2.33']['PV2.33.1']; }
		
		// PV2.34, militaryPartnershipCode
		if (seg['PV2.34']['PV2.34.1'].toString() != "") { pv2[index].militaryPartnershipCode = seg['PV2.34']['PV2.34.1']; }
		
		// PV2.35, militaryNonAvailabilityCode
		if (seg['PV2.35']['PV2.35.1'].toString() != "") { pv2[index].militaryNonAvailabilityCode = seg['PV2.35']['PV2.35.1']; }
		
		// PV2.36, newbornBabyIndicator
		if (seg['PV2.36']['PV2.36.1'].toString() != "") { pv2[index].newbornBabyIndicator = seg['PV2.36']['PV2.36.1']; }
		
		// PV2.37, babyDetainedIndicator
		if (seg['PV2.37']['PV2.37.1'].toString() != "") { pv2[index].babyDetainedIndicator = seg['PV2.37']['PV2.37.1']; }
		
		// clean up PV2 and increment index
		if (Object.keys(pv2[index]).length == 0) {
			delete pv2[index];
		} else {
			index++;
		}
	}
}
