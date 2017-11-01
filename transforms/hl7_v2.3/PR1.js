// PR1
var pr1;
if (msg['PR1'].length() > 0) {
	pr1 = [];
	var index = 0;
	for each (seg in msg['PR1']) {
		pr1[index] = {};

		// PR1.1, setId
		if (seg['PR1.1']['PR1.1.1'].toString() != "") { pr1[index].setId = seg['PR1.1.1']['PR1.1.1']; }

		// PR1.2, procedureCodingMethod
		if (seg['PR1.2']['PR1.2.1'].toString() != "") { pr1[index].procedureCodingMethod = seg['PR1.2.1']['PR1.2.1']; }

		// PR1.3, procedureCode
		pr1[index].procedureCode = {};
		if (seg['PR1.3']['PR1.3.1'].toString() != "") { pr1[index].procedureCode.id = seg['PR1.3']['PR1.3.1']; }
		if (seg['PR1.3']['PR1.3.2'].toString() != "") { pr1[index].procedureCode.text = seg['PR1.3']['PR1.3.2']; }
		if (seg['PR1.3']['PR1.3.3'].toString() != "") { pr1[index].procedureCode.codingSystem = seg['PR1.3']['PR1.3.3']; }
		if (seg['PR1.3']['PR1.3.4'].toString() != "") { pr1[index].procedureCode.altId = seg['PR1.3']['PR1.3.4']; }
		if (seg['PR1.3']['PR1.3.5'].toString() != "") { pr1[index].procedureCode.altText = seg['PR1.3']['PR1.3.5']; }
		if (seg['PR1.3']['PR1.3.6'].toString() != "") { pr1[index].procedureCode.altCodingSystem = seg['PR1.3']['PR1.3.6']; }
		if (Object.keys(pr1[index].procedureCode).length == 0) {
			delete pr1[index].procedureCode;
		}

		// PR1.4, procedureDescription
		if (seg['PR1.4']['PR1.4.1'].toString() != "") { pr1[index].procedureDescription = seg['PR1.4.1']['PR1.4.1']; }

		// PR1.5, procedureDateTime
		if (seg['PR1.5']['PR1.5.1'].toString() != "") { pr1[index].procedureDateTime = seg['PR1.5.1']['PR1.5.1']; }

		// PR1.6, procedureFunctionalType
		if (seg['PR1.6']['PR1.6.1'].toString() != "") { pr1[index].procedureFunctionalType = seg['PR1.6.1']['PR1.6.1']; }

		// PR1.7, procedureMinutes
		if (seg['PR1.7']['PR1.7.1'].toString() != "") { pr1[index].procedureMinutes = seg['PR1.7.1']['PR1.7.1']; }

		// PR1.8, anesthesiologist
		pr1[index].anesthesiologist = [];
		for each (field in seg['PR1.8']) {
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
				pr1[index].anesthesiologist.push(block);
			}
		}
		if (pr1[index].anesthesiologist.length == 0) {
			delete pr1[index].anesthesiologist;
		}

		// PR1.9, anesthesiaCode
		if (seg['PR1.9']['PR1.9.1'].toString() != "") { pr1[index].anesthesiaCode = seg['PR1.9.1']['PR1.9.1']; }

		// PR1.10, anesthesiaMinutes
		if (seg['PR1.10']['PR1.10.1'].toString() != "") { pr1[index].anesthesiaMinutes = seg['PR1.10.1']['PR1.10.1']; }

		// PR1.11, surgeon
		pr1[index].surgeon = [];
		for each (field in seg['PR1.11']) {
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
				pr1[index].surgeon.push(block);
			}
		}
		if (pr1[index].surgeon.length == 0) {
			delete pr1[index].surgeon;
		}

		// PR1.12, procedurePractitioner
		pr1[index].procedurePractitioner = [];
		for each (field in seg['PR1.12']) {
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
				pr1[index].procedurePractitioner.push(block);
			}
		}
		if (pr1[index].procedurePractitioner.length == 0) {
			delete pr1[index].procedurePractitioner;
		}

		// PR1.13, consentCode
		pr1[index].consentCode = {};
		if (seg['PR1.13']['PR1.13.1'].toString() != "") { pr1[index].consentCode.id = seg['PR1.13']['PR1.13.1']; }
		if (seg['PR1.13']['PR1.13.2'].toString() != "") { pr1[index].consentCode.text = seg['PR1.13']['PR1.13.2']; }
		if (seg['PR1.13']['PR1.13.3'].toString() != "") { pr1[index].consentCode.codingSystem = seg['PR1.13']['PR1.13.3']; }
		if (seg['PR1.13']['PR1.13.4'].toString() != "") { pr1[index].consentCode.altId = seg['PR1.13']['PR1.13.4']; }
		if (seg['PR1.13']['PR1.13.5'].toString() != "") { pr1[index].consentCode.altText = seg['PR1.13']['PR1.13.5']; }
		if (seg['PR1.13']['PR1.13.6'].toString() != "") { pr1[index].consentCode.altCodingSystem = seg['PR1.13']['PR1.13.6']; }
		if (Object.keys(pr1[index].consentCode).length == 0) {
			delete pr1[index].consentCode;
		}

		// PR1.14, procedurePriority
		if (seg['PR1.14']['PR1.14.1'].toString() != "") { pr1[index].procedurePriority = seg['PR1.14.1']['PR1.14.1']; }

		// PR1.15, associatedDiagnosisCode
		pr1[index].associatedDiagnosisCode = {};
		if (seg['PR1.15']['PR1.15.1'].toString() != "") { pr1[index].associatedDiagnosisCode.id = seg['PR1.15']['PR1.15.1']; }
		if (seg['PR1.15']['PR1.15.2'].toString() != "") { pr1[index].associatedDiagnosisCode.text = seg['PR1.15']['PR1.15.2']; }
		if (seg['PR1.15']['PR1.15.3'].toString() != "") { pr1[index].associatedDiagnosisCode.codingSystem = seg['PR1.15']['PR1.15.3']; }
		if (seg['PR1.15']['PR1.15.4'].toString() != "") { pr1[index].associatedDiagnosisCode.altId = seg['PR1.15']['PR1.15.4']; }
		if (seg['PR1.15']['PR1.15.5'].toString() != "") { pr1[index].associatedDiagnosisCode.altText = seg['PR1.15']['PR1.15.5']; }
		if (seg['PR1.15']['PR1.15.6'].toString() != "") { pr1[index].associatedDiagnosisCode.altCodingSystem = seg['PR1.15']['PR1.15.6']; }
		if (Object.keys(pr1[index].associatedDiagnosisCode).length == 0) {
			delete pr1[index].associatedDiagnosisCode;
		}

		// ROL (PR1)
		var rolGroup = getSegmentsAfter(msg,seg,'ROL',true);
		if (rolGroup.length > 0) {
			pr1[index].rol = [];
			var indexROL = 0;
			for each (rolSeg in rolGroup) {
				pr1[index].rol[indexROL] = {};

				// ROL.1, roleInstanceID
				pr1[index].rol[indexROL].roleInstanceID = {};
				if (rolSeg['ROL.1']['ROL.1.1'].toString() != "") { pr1[index].rol[indexROL].roleInstanceID.id = rolSeg['ROL.1']['ROL.1.1']; }
				if (rolSeg['ROL.1']['ROL.1.2'].toString() != "") { pr1[index].rol[indexROL].roleInstanceID.namespaceId = rolSeg['ROL.1']['ROL.1.2']; }
				if (rolSeg['ROL.1']['ROL.1.3'].toString() != "") { pr1[index].rol[indexROL].roleInstanceID.universalId = rolSeg['ROL.1']['ROL.1.3']; }
				if (rolSeg['ROL.1']['ROL.1.4'].toString() != "") { pr1[index].rol[indexROL].roleInstanceID.unniveralIdType = rolSeg['ROL.1']['ROL.1.4']; }
				if (Object.keys(pr1[index].rol[indexROL].roleInstanceID).length == 0) {
					delete pr1[index].rol[indexROL].roleInstanceID;
				}

				// ROL.2, actionCode
				if (rolSeg['ROL.2']['ROL.2.1'].toString() != "") { pr1[indexPR1].actionCode = rolSeg['ROL.2.1']['ROL.2.1']; }

				// ROL.3, role
				pr1[index].rol[indexROL].role = {};
				if (rolSeg['ROL.3']['ROL.3.1'].toString() != "") { pr1[index].rol[indexROL].role.id = rolSeg['ROL.3']['ROL.3.1']; }
				if (rolSeg['ROL.3']['ROL.3.2'].toString() != "") { pr1[index].rol[indexROL].role.text = rolSeg['ROL.3']['ROL.3.2']; }
				if (rolSeg['ROL.3']['ROL.3.3'].toString() != "") { pr1[index].rol[indexROL].role.codingSystem = rolSeg['ROL.3']['ROL.3.3']; }
				if (rolSeg['ROL.3']['ROL.3.4'].toString() != "") { pr1[index].rol[indexROL].role.altId = rolSeg['ROL.3']['ROL.3.4']; }
				if (rolSeg['ROL.3']['ROL.3.5'].toString() != "") { pr1[index].rol[indexROL].role.altText = rolSeg['ROL.3']['ROL.3.5']; }
				if (rolSeg['ROL.3']['ROL.3.6'].toString() != "") { pr1[index].rol[indexROL].role.altCodingSystem = rolSeg['ROL.3']['ROL.3.6']; }
				if (Object.keys(pr1[index].rol[indexROL].role).length == 0) {
					delete pr1[index].rol[indexROL].role;
				}

				// ROL.4, rolePerson
				pr1[index].rol[indexROL].rolePerson = {};
				if (rolSeg['ROL.4']['ROL.4.1'].toString() != "") { pr1[index].rol[indexROL].rolePerson.id = rolSeg['ROL.4']['ROL.4.1']; }
				if (rolSeg['ROL.4']['ROL.4.2'].toString() != "") { pr1[index].rol[indexROL].rolePerson.lastName = rolSeg['ROL.4']['ROL.4.2']; }
				if (rolSeg['ROL.4']['ROL.4.3'].toString() != "") { pr1[index].rol[indexROL].rolePerson.firstName = rolSeg['ROL.4']['ROL.4.3']; }
				if (rolSeg['ROL.4']['ROL.4.4'].toString() != "") { pr1[index].rol[indexROL].rolePerson.middleInitOrName = rolSeg['ROL.4']['ROL.4.4']; }
				if (rolSeg['ROL.4']['ROL.4.5'].toString() != "") { pr1[index].rol[indexROL].rolePerson.suffix = rolSeg['ROL.4']['ROL.4.5']; }
				if (rolSeg['ROL.4']['ROL.4.6'].toString() != "") { pr1[index].rol[indexROL].rolePerson.prefix = rolSeg['ROL.4']['ROL.4.6']; }
				if (rolSeg['ROL.4']['ROL.4.7'].toString() != "") { pr1[index].rol[indexROL].rolePerson.degree = rolSeg['ROL.4']['ROL.4.7']; }
				if (rolSeg['ROL.4']['ROL.4.8'].toString() != "") { pr1[index].rol[indexROL].rolePerson.sourceTable = rolSeg['ROL.4']['ROL.4.8']; }
				pr1[index].rol[indexROL].rolePerson.assigningAuthority = {};
				if (rolSeg['ROL.4']['ROL.4.9']['ROL.4.9.1'].toString() != "") { pr1[index].rol[indexROL].rolePerson.assigningAuthority.id = rolSeg['ROL.4']['ROL.4.9']['ROL.4.9.1']; }
				if (rolSeg['ROL.4']['ROL.4.9']['ROL.4.9.2'].toString() != "") { pr1[index].rol[indexROL].rolePerson.assigningAuthority.universalId = rolSeg['ROL.4']['ROL.4.9']['ROL.4.9.2']; }
				if (rolSeg['ROL.4']['ROL.4.9']['ROL.4.9.3'].toString() != "") { pr1[index].rol[indexROL].rolePerson.assigningAuthority.universalIdType = rolSeg['ROL.4']['ROL.4.9']['ROL.4.9.3']; }
				if (Object.keys(pr1[index].rol[indexROL].rolePerson.assigningAuthority).length == 0) {
					delete pr1[index].rol[indexROL].rolePerson.assigningAuthority;
				}
				if (rolSeg['ROL.4']['ROL.4.10'].toString() != "") { pr1[index].rol[indexROL].rolePerson.nameTypeCode = rolSeg['ROL.4']['ROL.4.10']; }
				if (rolSeg['ROL.4']['ROL.4.11'].toString() != "") { pr1[index].rol[indexROL].rolePerson.identifierCheckDigit = rolSeg['ROL.4']['ROL.4.11']; }
				if (rolSeg['ROL.4']['ROL.4.12'].toString() != "") { pr1[index].rol[indexROL].rolePerson.codeIdentifyingCheckDigitScheme = rolSeg['ROL.4']['ROL.4.12']; }
				if (rolSeg['ROL.4']['ROL.4.13'].toString() != "") { pr1[index].rol[indexROL].rolePerson.identifierTypeCode = rolSeg['ROL.4']['ROL.4.13']; }
				pr1[index].rol[indexROL].rolePerson.assigningFacility = {};
				if (rolSeg['ROL.4']['ROL.4.14']['ROL.4.14.1'].toString() != "") { pr1[index].rol[indexROL].rolePerson.assigningFacility.id = rolSeg['ROL.4']['ROL.4.14']['ROL.4.14.1']; }
				if (rolSeg['ROL.4']['ROL.4.14']['ROL.4.14.2'].toString() != "") { pr1[index].rol[indexROL].rolePerson.assigningFacility.universalId = rolSeg['ROL.4']['ROL.4.14']['ROL.4.14.2']; }
				if (rolSeg['ROL.4']['ROL.4.14']['ROL.4.14.3'].toString() != "") { pr1[index].rol[indexROL].rolePerson.assigningFacility.universalIdType = rolSeg['ROL.4']['ROL.4.14']['ROL.4.14.3']; }
				if (Object.keys(pr1[index].rol[indexROL].rolePerson.assigningFacility).length == 0) {
					delete pr1[index].rol[indexROL].rolePerson.assigningFacility;
				}
				if (Object.keys(pr1[index].rol[indexROL].rolePerson).length == 0) {
					delete pr1[index].rol[indexROL].rolePerson;
				}

				// ROL.5, roleBeginDateTime
				if (rolSeg['ROL.5']['ROL.5.1'].toString() != "") { pr1[indexPR1].roleBeginDateTime = rolSeg['ROL.5.1']['ROL.5.1']; }

				// ROL.6, roleEndDateTime
				if (rolSeg['ROL.6']['ROL.6.1'].toString() != "") { pr1[indexPR1].roleEndDateTime = rolSeg['ROL.6.1']['ROL.6.1']; }

				// ROL.7, roleDuration
				pr1[index].rol[indexROL].roleDuration = {};
				if (rolSeg['ROL.7']['ROL.7.1'].toString() != "") { pr1[index].rol[indexROL].roleDuration.id = rolSeg['ROL.7']['ROL.7.1']; }
				if (rolSeg['ROL.7']['ROL.7.2'].toString() != "") { pr1[index].rol[indexROL].roleDuration.text = rolSeg['ROL.7']['ROL.7.2']; }
				if (rolSeg['ROL.7']['ROL.7.3'].toString() != "") { pr1[index].rol[indexROL].roleDuration.codingSystem = rolSeg['ROL.7']['ROL.7.3']; }
				if (rolSeg['ROL.7']['ROL.7.4'].toString() != "") { pr1[index].rol[indexROL].roleDuration.altId = rolSeg['ROL.7']['ROL.7.4']; }
				if (rolSeg['ROL.7']['ROL.7.5'].toString() != "") { pr1[index].rol[indexROL].roleDuration.altText = rolSeg['ROL.7']['ROL.7.5']; }
				if (rolSeg['ROL.7']['ROL.7.6'].toString() != "") { pr1[index].rol[indexROL].roleDuration.altCodingSystem = rolSeg['ROL.7']['ROL.7.6']; }
				if (Object.keys(pr1[index].rol[indexROL].roleDuration).length == 0) {
					delete pr1[index].rol[indexROL].roleDuration;
				}

				// ROL.8, roleActionReason
				pr1[index].rol[indexROL].roleActionReason = {};
				if (rolSeg['ROL.8']['ROL.8.1'].toString() != "") { pr1[index].rol[indexROL].roleActionReason.id = rolSeg['ROL.8']['ROL.8.1']; }
				if (rolSeg['ROL.8']['ROL.8.2'].toString() != "") { pr1[index].rol[indexROL].roleActionReason.text = rolSeg['ROL.8']['ROL.8.2']; }
				if (rolSeg['ROL.8']['ROL.8.3'].toString() != "") { pr1[index].rol[indexROL].roleActionReason.codingSystem = rolSeg['ROL.8']['ROL.8.3']; }
				if (rolSeg['ROL.8']['ROL.8.4'].toString() != "") { pr1[index].rol[indexROL].roleActionReason.altId = rolSeg['ROL.8']['ROL.8.4']; }
				if (rolSeg['ROL.8']['ROL.8.5'].toString() != "") { pr1[index].rol[indexROL].roleActionReason.altText = rolSeg['ROL.8']['ROL.8.5']; }
				if (rolSeg['ROL.8']['ROL.8.6'].toString() != "") { pr1[index].rol[indexROL].roleActionReason.altCodingSystem = rolSeg['ROL.8']['ROL.8.6']; }
				if (Object.keys(pr1[index].rol[indexROL].roleActionReason).length == 0) {
					delete pr1[index].rol[indexROL].roleActionReason;
				}

				// clean up ROL and increment index
				if (Object.keys(pr1[index].rol[indexROL]).length == 0) {
					delete pr1[index].rol[indexROL];
				} else {
					indexROL++;
				}
			}
		}

		// clean up PR1 and increment index
		if (Object.keys(pr1[index]).length == 0) {
			delete pr1[index];
		} else {
			index++;
		}
	}
}