// IN3
var in3;
if (msg['IN3'].length() > 0) {
	in3 = [];
	var index = 0;
	for each (seg in msg.IN3) {
		in3[index] = {};

		// IN3.1, setID
		if (seg['IN3.1']['IN3.1.1'].toString() != "") { in3[index].setID = seg['IN3.1']['IN3.1.1']; }

		// IN3.2, certificationNumber
		in3[index].certificationNumber = {};
		if (seg['IN3.2']['IN3.2.1'].toString() != "") { in3[index].certificationNumber.id = seg['IN3.2']['IN3.2.1']; }
		if (seg['IN3.2']['IN3.2.2'].toString() != "") { in3[index].certificationNumber.identifierCheckDigit = seg['IN3.2']['IN3.2.2']; }
		if (seg['IN3.2']['IN3.2.3'].toString() != "") { in3[index].certificationNumber.codeIdentifyingCheckDigitScheme = seg['IN3.2']['IN3.2.3']; }
		in3[index].certificationNumber.assigningAuthority = {};
		if (seg['IN3.2']['IN3.2.4']['IN3.2.4.1'].toString() != "") { in3[index].certificationNumber.assigningAuthority.namespaceId = seg['IN3.2']['IN3.2.4']['IN3.2.4.1']; }
		if (seg['IN3.2']['IN3.2.4']['IN3.2.4.2'].toString() != "") { in3[index].certificationNumber.assigningAuthority.universalId = seg['IN3.2']['IN3.2.4']['IN3.2.4.2']; }
		if (seg['IN3.2']['IN3.2.4']['IN3.2.4.3'].toString() != "") { in3[index].certificationNumber.assigningAuthority.universalIdType = seg['IN3.2']['IN3.2.4']['IN3.2.4.3']; }
		if (Object.keys(in3[index].certificationNumber.assigningAuthority).length == 0) {
			if (seg['IN3.2']['IN3.2.4'].toString() != "") { in3[index].certificationNumber.assigningAuthority.namespaceId = seg['IN3.2']['IN3.2.4']; }
			else delete in3[index].certificationNumber.assigningAuthority;
		}
		if (seg['IN3.2']['IN3.2.5'].toString() != "") { in3[index].certificationNumber.idTypeCode = seg['IN3.2']['IN3.2.5']; }
		in3[index].certificationNumber.assigningFacility = {};
		if (seg['IN3.2']['IN3.2.6']['IN3.2.6.1'].toString() != "") { in3[index].certificationNumber.assigningFacility.namespaceId = seg['IN3.2']['IN3.2.6']['IN3.2.6.1']; }
		if (seg['IN3.2']['IN3.2.6']['IN3.2.6.2'].toString() != "") { in3[index].certificationNumber.assigningFacility.universalId = seg['IN3.2']['IN3.2.6']['IN3.2.6.2']; }
		if (seg['IN3.2']['IN3.2.6']['IN3.2.6.3'].toString() != "") { in3[index].certificationNumber.assigningFacility.universalIdType = seg['IN3.2']['IN3.2.6']['IN3.2.6.3']; }
		if (Object.keys(in3[index].certificationNumber.assigningFacility).length == 0) {
			if (seg['IN3.2']['IN3.2.6'].toString() != "") { in3[index].certificationNumber.assigningFacility.namespaceId = seg['IN3.2']['IN3.2.6']; }
			else delete in3[index].certificationNumber.assigningFacility;
		}
		if (Object.keys(in3[index].certificationNumber).length == 0) {
			delete in3[index].certificationNumber;
		}

		// IN3.3, certifiedBy
		in3[index].certifiedBy = [];
		for each (field in seg['IN3.3']) {
			var block = {};
			if (field['IN3.3.1'].toString() != "") { block.id = field['IN3.3.1']; }
			if (field['IN3.3.2'].toString() != "") { block.lastName = field['IN3.3.2']; }
			if (field['IN3.3.3'].toString() != "") { block.firstName = field['IN3.3.3']; }
			if (field['IN3.3.4'].toString() != "") { block.middleInitOrName = field['IN3.3.4']; }
			if (field['IN3.3.5'].toString() != "") { block.suffix = field['IN3.3.5']; }
			if (field['IN3.3.6'].toString() != "") { block.prefix = field['IN3.3.6']; }
			if (field['IN3.3.7'].toString() != "") { block.degree = field['IN3.3.7']; }
			if (field['IN3.3.8'].toString() != "") { block.sourceTable = field['IN3.3.8']; }
			block.assigningAuthority = {};
			if (field['IN3.3.9']['IN3.3.9.1'].toString() != "") { block.assigningAuthority.id = field['IN3.3.9']['IN3.3.9.1']; }
			if (field['IN3.3.9']['IN3.3.9.2'].toString() != "") { block.assigningAuthority.universalId = field['IN3.3.9']['IN3.3.9.2']; }
			if (field['IN3.3.9']['IN3.3.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN3.3.9']['IN3.3.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN3.3.9'].toString() != "") { block.assigningAuthority.id = field['IN3.3.9']; }
				else delete block.assigningAuthority;
			}
			if (field['IN3.3.10'].toString() != "") { block.nameTypeCode = field['IN3.3.10']; }
			if (field['IN3.3.11'].toString() != "") { block.identifierCheckDigit = field['IN3.3.11']; }
			if (field['IN3.3.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN3.3.12']; }
			if (field['IN3.3.13'].toString() != "") { block.identifierTypeCode = field['IN3.3.13']; }
			block.assigningFacility = {};
			if (field['IN3.3.14']['IN3.3.14.1'].toString() != "") { block.assigningFacility.id = field['IN3.3.14']['IN3.3.14.1']; }
			if (field['IN3.3.14']['IN3.3.14.2'].toString() != "") { block.assigningFacility.universalId = field['IN3.3.14']['IN3.3.14.2']; }
			if (field['IN3.3.14']['IN3.3.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN3.3.14']['IN3.3.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN3.3.14'].toString() != "") { block.assigningFacility.id = field['IN3.3.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in3[index].certifiedBy.push(block);
			}
		}
		if (in3[index].certifiedBy.length == 0) {
			delete in3[index].certifiedBy;
		}

		// IN3.4, certificationRequired
		if (seg['IN3.4']['IN3.4.1'].toString() != "") { in3[index].certificationRequired = seg['IN3.4']['IN3.4.1']; }

		// IN3.5, penalty
		in3[index].penalty = {};
		if (seg['IN3.5']['IN3.5.1'].toString() != "") { in3[index].penalty.penaltyType = seg['IN3.5']['IN3.5.1']; }
		if (seg['IN3.5']['IN3.5.2'].toString() != "") { in3[index].penalty.penaltyCode = seg['IN3.5']['IN3.5.2']; }
		if (Object.keys(in3[index].penalty).length > 0) {
			delete in3[index].penalty;
		}

		// IN3.6, certificationDateTime
		if (seg['IN3.6']['IN3.6.1'].toString() != "") { in3[index].certificationDateTime = seg['IN3.6']['IN3.6.1']; }

		// IN3.7, certificationModifyDateTime
		if (seg['IN3.7']['IN3.7.1'].toString() != "") { in3[index].certificationModifyDateTime = seg['IN3.7']['IN3.7.1']; }

		// IN3.8, operator
		in3[index].operator = [];
		for each (field in seg['IN3.8']) {
			var block = {};
			if (field['IN3.8.1'].toString() != "") { block.id = field['IN3.8.1']; }
			if (field['IN3.8.2'].toString() != "") { block.lastName = field['IN3.8.2']; }
			if (field['IN3.8.3'].toString() != "") { block.firstName = field['IN3.8.3']; }
			if (field['IN3.8.4'].toString() != "") { block.middleInitOrName = field['IN3.8.4']; }
			if (field['IN3.8.5'].toString() != "") { block.suffix = field['IN3.8.5']; }
			if (field['IN3.8.6'].toString() != "") { block.prefix = field['IN3.8.6']; }
			if (field['IN3.8.7'].toString() != "") { block.degree = field['IN3.8.7']; }
			if (field['IN3.8.8'].toString() != "") { block.sourceTable = field['IN3.8.8']; }
			block.assigningAuthority = {};
			if (field['IN3.8.9']['IN3.8.9.1'].toString() != "") { block.assigningAuthority.id = field['IN3.8.9']['IN3.8.9.1']; }
			if (field['IN3.8.9']['IN3.8.9.2'].toString() != "") { block.assigningAuthority.universalId = field['IN3.8.9']['IN3.8.9.2']; }
			if (field['IN3.8.9']['IN3.8.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN3.8.9']['IN3.8.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN3.8.9'].toString() != "") { block.assigningAuthority.id = field['IN3.8.9']; }
				else delete block.assigningAuthority;
			}
			if (field['IN3.8.10'].toString() != "") { block.nameTypeCode = field['IN3.8.10']; }
			if (field['IN3.8.11'].toString() != "") { block.identifierCheckDigit = field['IN3.8.11']; }
			if (field['IN3.8.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN3.8.12']; }
			if (field['IN3.8.13'].toString() != "") { block.identifierTypeCode = field['IN3.8.13']; }
			block.assigningFacility = {};
			if (field['IN3.8.14']['IN3.8.14.1'].toString() != "") { block.assigningFacility.id = field['IN3.8.14']['IN3.8.14.1']; }
			if (field['IN3.8.14']['IN3.8.14.2'].toString() != "") { block.assigningFacility.universalId = field['IN3.8.14']['IN3.8.14.2']; }
			if (field['IN3.8.14']['IN3.8.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN3.8.14']['IN3.8.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN3.8.14'].toString() != "") { block.assigningFacility.id = field['IN3.8.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in3[index].operator.push(block);
			}
		}
		if (in3[index].operator.length == 0) {
			delete in3[index].operator;
		}

		// IN3.9, certificationBeginDate
		if (seg['IN3.9']['IN3.9.1'].toString() != "") { in3[index].certificationBeginDate = seg['IN3.9']['IN3.9.1']; }

		// IN3.90, certificationEndDate
		if (seg['IN3.10']['IN3.10.1'].toString() != "") { in3[index].certificationEndDate = seg['IN3.10']['IN3.10.1']; }

		// IN3.11, days
		in3[index].days = {};
		if (seg['IN3.11']['IN3.11.1'].toString() != "") { in3[index].days.dayType = seg['IN3.11']['IN3.11.1']; }
		if (seg['IN3.11']['IN3.11.2'].toString() != "") { in3[index].days.numberOfDays = seg['IN3.11']['IN3.11.2']; }
		if (Object.keys(in3[index].days).length > 0) {
			delete in3[index].days;
		}

		// IN3.12, nonConcurCodeDescription
		in3[index].nonConcurCodeDescription = {};
		if (seg['IN3.12']['IN3.12.1'].toString() != "") { in3[index].nonConcurCodeDescription.id = seg['IN3.12']['IN3.12.1']; }
		if (seg['IN3.12']['IN3.12.2'].toString() != "") { in3[index].nonConcurCodeDescription.namespaceId = seg['IN3.12']['IN3.12.2']; }
		if (seg['IN3.12']['IN3.12.3'].toString() != "") { in3[index].nonConcurCodeDescription.universalId = seg['IN3.12']['IN3.12.3']; }
		if (seg['IN3.12']['IN3.12.4'].toString() != "") { in3[index].nonConcurCodeDescription.unniveralIdType = seg['IN3.12']['IN3.12.4']; }
		if (Object.keys(in3[index].nonConcurCodeDescription).length == 0) {
			delete in3[index].nonConcurCodeDescription;
		}

		// IN3.13, nonConcurEffectiveDateTime
		if (seg['IN3.13']['IN3.13.1'].toString() != "") { in3[index].nonConcurEffectiveDateTime = seg['IN3.13']['IN3.13.1']; }

		// IN3.14, physicianReviewer
		in3[index].physicianReviewer = [];
		for each (field in seg['IN3.14']) {
			var block = {};
			if (field['IN3.14.1'].toString() != "") { block.id = field['IN3.14.1']; }
			if (field['IN3.14.2'].toString() != "") { block.lastName = field['IN3.14.2']; }
			if (field['IN3.14.3'].toString() != "") { block.firstName = field['IN3.14.3']; }
			if (field['IN3.14.4'].toString() != "") { block.middleInitOrName = field['IN3.14.4']; }
			if (field['IN3.14.5'].toString() != "") { block.suffix = field['IN3.14.5']; }
			if (field['IN3.14.6'].toString() != "") { block.prefix = field['IN3.14.6']; }
			if (field['IN3.14.7'].toString() != "") { block.degree = field['IN3.14.7']; }
			if (field['IN3.14.8'].toString() != "") { block.sourceTable = field['IN3.14.8']; }
			block.assigningAuthority = {};
			if (field['IN3.14.9']['IN3.14.9.1'].toString() != "") { block.assigningAuthority.id = field['IN3.14.9']['IN3.14.9.1']; }
			if (field['IN3.14.9']['IN3.14.9.2'].toString() != "") { block.assigningAuthority.universalId = field['IN3.14.9']['IN3.14.9.2']; }
			if (field['IN3.14.9']['IN3.14.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN3.14.9']['IN3.14.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN3.14.9'].toString() != "") { block.assigningAuthority.id = field['IN3.14.9']; }
				else delete block.assigningAuthority;
			}
			if (field['IN3.14.10'].toString() != "") { block.nameTypeCode = field['IN3.14.10']; }
			if (field['IN3.14.11'].toString() != "") { block.identifierCheckDigit = field['IN3.14.11']; }
			if (field['IN3.14.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN3.14.12']; }
			if (field['IN3.14.13'].toString() != "") { block.identifierTypeCode = field['IN3.14.13']; }
			block.assigningFacility = {};
			if (field['IN3.14.14']['IN3.14.14.1'].toString() != "") { block.assigningFacility.id = field['IN3.14.14']['IN3.14.14.1']; }
			if (field['IN3.14.14']['IN3.14.14.2'].toString() != "") { block.assigningFacility.universalId = field['IN3.14.14']['IN3.14.14.2']; }
			if (field['IN3.14.14']['IN3.14.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN3.14.14']['IN3.14.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN3.14.14'].toString() != "") { block.assigningFacility.id = field['IN3.14.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in3[index].physicianReviewer.push(block);
			}
		}
		if (in3[index].physicianReviewer.length == 0) {
			delete in3[index].physicianReviewer;
		}
		// IN3.15, certificationContact
		if (seg['IN3.15']['IN3.15.1'].toString() != "") { in3[index].certificationContact = seg['IN3.15']['IN3.15.1']; }

		// IN3.16, certificationContactPhoneNumber
		in3[index].certificationContactPhoneNumber = [];
		for each (field in seg['IN3.16']) {
			var block = {};
			if (field['IN3.16.1'].toString() != "") { block.number = field['IN3.16.1']; }
			if (field['IN3.16.2'].toString() != "") { block.telecommunicationUseCode = field['IN3.16.2']; }
			if (field['IN3.16.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN3.16.3']; }
			if (field['IN3.16.4'].toString() != "") { block.emailAddress = field['IN3.16.4']; }
			if (field['IN3.16.5'].toString() != "") { block.countryCode = field['IN3.16.5']; }
			if (field['IN3.16.6'].toString() != "") { block.areaCityCode = field['IN3.16.6']; }
			if (field['IN3.16.7'].toString() != "") { block.phoneNumber = field['IN3.16.7']; }
			if (field['IN3.16.8'].toString() != "") { block.extension = field['IN3.16.8']; }
			if (field['IN3.16.9'].toString() != "") { block.text = field['IN3.16.9']; }
			if (Object.keys(block).length > 0) {
				in3[index].certificationContactPhoneNumber.push(block);
			}
		}
		if (in3[index].certificationContactPhoneNumber.length == 0) {
			delete in3[index].certificationContactPhoneNumber;
		}

		// IN3.17, appealReason
		in3[index].appealReason = {};
		if (seg['IN3.17']['IN3.17.1'].toString() != "") { in3[index].appealReason.id = seg['IN3.17']['IN3.17.1']; }
		if (seg['IN3.17']['IN3.17.2'].toString() != "") { in3[index].appealReason.namespaceId = seg['IN3.17']['IN3.17.2']; }
		if (seg['IN3.17']['IN3.17.3'].toString() != "") { in3[index].appealReason.universalId = seg['IN3.17']['IN3.17.3']; }
		if (seg['IN3.17']['IN3.17.4'].toString() != "") { in3[index].appealReason.unniveralIdType = seg['IN3.17']['IN3.17.4']; }
		if (Object.keys(in3[index].appealReason).length == 0) {
			delete in3[index].appealReason;
		}

		// IN3.18, certificationAgency
		in3[index].certificationAgency = {};
		if (seg['IN3.18']['IN3.18.1'].toString() != "") { in3[index].certificationAgency.id = seg['IN3.18']['IN3.18.1']; }
		if (seg['IN3.18']['IN3.18.2'].toString() != "") { in3[index].certificationAgency.namespaceId = seg['IN3.18']['IN3.18.2']; }
		if (seg['IN3.18']['IN3.18.3'].toString() != "") { in3[index].certificationAgency.universalId = seg['IN3.18']['IN3.18.3']; }
		if (seg['IN3.18']['IN3.18.4'].toString() != "") { in3[index].certificationAgency.unniveralIdType = seg['IN3.18']['IN3.18.4']; }
		if (Object.keys(in3[index].certificationAgency).length == 0) {
			delete in3[index].certificationAgency;
		}

		// IN3.19, certificationAgencyPhoneNumber
		in3[index].certificationAgencyPhoneNumber = [];
		for each (field in seg['IN3.19']) {
			var block = {};
			if (field['IN3.19.1'].toString() != "") { block.number = field['IN3.19.1']; }
			if (field['IN3.19.2'].toString() != "") { block.telecommunicationUseCode = field['IN3.19.2']; }
			if (field['IN3.19.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN3.19.3']; }
			if (field['IN3.19.4'].toString() != "") { block.emailAddress = field['IN3.19.4']; }
			if (field['IN3.19.5'].toString() != "") { block.countryCode = field['IN3.19.5']; }
			if (field['IN3.19.6'].toString() != "") { block.areaCityCode = field['IN3.19.6']; }
			if (field['IN3.19.7'].toString() != "") { block.phoneNumber = field['IN3.19.7']; }
			if (field['IN3.19.8'].toString() != "") { block.extension = field['IN3.19.8']; }
			if (field['IN3.19.9'].toString() != "") { block.text = field['IN3.19.9']; }
			if (Object.keys(block).length > 0) {
				in3[index].certificationAgencyPhoneNumber.push(block);
			}
		}
		if (in3[index].certificationAgencyPhoneNumber.length == 0) {
			delete in3[index].certificationAgencyPhoneNumber;
		}

		// IN3.20, preCertificationReqWindow
		in3[index].preCertificationReqWindow = [];
		for each (field in seg['IN3.20']) {
			var block = {};
			if (field['IN3.20.1'].toString() != "") { block.preCertificationPatientType = field['IN3.20.1']; }
			if (field['IN3.20.2'].toString() != "") { block.preCertificationRequired = field['IN3.20.2']; }
			if (field['IN3.20.3'].toString() != "") { block.preCertificationWindow = field['IN3.20.3']; }
			if (Object.keys(block).length > 0) {
				in3[index].preCertificationReqWindow.push(block);
			}
		}
		if (in3[index].preCertificationReqWindow.length == 0) {
			delete in3[index].preCertificationReqWindow.length;
		}

		// IN3.21, caseManager
		if (seg['IN3.21']['IN3.21.1'].toString() != "") { in3[index].caseManager = seg['IN3.21']['IN3.21.1']; }

		// IN3.22, secondOpinionDate
		if (seg['IN3.22']['IN3.22.1'].toString() != "") { in3[index].secondOpinionDate = seg['IN3.22']['IN3.22.1']; }

		// IN3.23, secondOpinionStatus
		if (seg['IN3.23']['IN3.23.1'].toString() != "") { in3[index].secondOpinionStatus = seg['IN3.23']['IN3.23.1']; }

		// IN3.24, secondOpinionDocumentationReceived
		in3[index].secondOpinionDocumentationReceived = [];
		for each (field in seg['IN3.24']) {
			if (field['IN3.24.1'].toString() != "") {
				in3[index].secondOpinionDocumentationReceived.push(field['IN3.24.1']);
			}
		}
		if (in3[index].secondOpinionDocumentationReceived.length == 0) {
			delete in3[index].secondOpinionDocumentationReceived;
		}
		
		// IN3.25, secondOpinionPhysician
		in3[index].secondOpinionPhysician = [];
		for each (field in seg['IN3.25']) {
			var block = {};
			if (field['IN3.25.1'].toString() != "") { block.id = field['IN3.25.1']; }
			if (field['IN3.25.2'].toString() != "") { block.lastName = field['IN3.25.2']; }
			if (field['IN3.25.3'].toString() != "") { block.firstName = field['IN3.25.3']; }
			if (field['IN3.25.4'].toString() != "") { block.middleInitOrName = field['IN3.25.4']; }
			if (field['IN3.25.5'].toString() != "") { block.suffix = field['IN3.25.5']; }
			if (field['IN3.25.6'].toString() != "") { block.prefix = field['IN3.25.6']; }
			if (field['IN3.25.7'].toString() != "") { block.degree = field['IN3.25.7']; }
			if (field['IN3.25.8'].toString() != "") { block.sourceTable = field['IN3.25.8']; }
			block.assigningAuthority = {};
			if (field['IN3.25.9']['IN3.25.9.1'].toString() != "") { block.assigningAuthority.id = field['IN3.25.9']['IN3.25.9.1']; }
			if (field['IN3.25.9']['IN3.25.9.2'].toString() != "") { block.assigningAuthority.universalId = field['IN3.25.9']['IN3.25.9.2']; }
			if (field['IN3.25.9']['IN3.25.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN3.25.9']['IN3.25.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN3.25.9'].toString() != "") { block.assigningAuthority.id = field['IN3.25.9']; }
				else delete block.assigningAuthority;
			}
			if (field['IN3.25.10'].toString() != "") { block.nameTypeCode = field['IN3.25.10']; }
			if (field['IN3.25.11'].toString() != "") { block.identifierCheckDigit = field['IN3.25.11']; }
			if (field['IN3.25.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN3.25.12']; }
			if (field['IN3.25.13'].toString() != "") { block.identifierTypeCode = field['IN3.25.13']; }
			block.assigningFacility = {};
			if (field['IN3.25.14']['IN3.25.14.1'].toString() != "") { block.assigningFacility.id = field['IN3.25.14']['IN3.25.14.1']; }
			if (field['IN3.25.14']['IN3.25.14.2'].toString() != "") { block.assigningFacility.universalId = field['IN3.25.14']['IN3.25.14.2']; }
			if (field['IN3.25.14']['IN3.25.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN3.25.14']['IN3.25.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN3.25.14'].toString() != "") { block.assigningFacility.id = field['IN3.25.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in3[index].secondOpinionPhysician.push(block);
			}
		}
		if (in3[index].secondOpinionPhysician.length == 0) {
			delete in3[index].secondOpinionPhysician;
		}

		// clean up IN3 and increment index
		if (Object.keys(in3[index]).length == 0) {
			delete in3[index];
		} else {
			index++;
		}
	}
}