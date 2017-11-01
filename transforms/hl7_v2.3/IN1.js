// IN1
var in1;
if (msg['IN1'].length() > 0) {
	in1 = [];
	var index = 0;
	for each (seg in msg.IN1) {
		in1[index] = {};
		
		// IN1.1, setId
		if (seg['IN1.1']['IN1.1.1'].toString() != "") { in1[index].setId = seg['IN1.1']['IN1.1.1']; }

		// IN1.2, planId
		in1[index].planId = {};
		if (seg['IN1.2']['IN1.2.1'].toString() != "") { in1[index].planId.id = seg['IN1.2']['IN1.2.1']; }
		if (seg['IN1.2']['IN1.2.2'].toString() != "") { in1[index].planId.text = seg['IN1.2']['IN1.2.2']; }
		if (seg['IN1.2']['IN1.2.3'].toString() != "") { in1[index].planId.codingSystem = seg['IN1.2']['IN1.2.3']; }
		if (seg['IN1.2']['IN1.2.4'].toString() != "") { in1[index].planId.altId = seg['IN1.2']['IN1.2.4']; }
		if (seg['IN1.2']['IN1.2.5'].toString() != "") { in1[index].planId.altText = seg['IN1.2']['IN1.2.5']; }
		if (seg['IN1.2']['IN1.2.6'].toString() != "") { in1[index].planId.altCodingSystem = seg['IN1.2']['IN1.2.6']; }
		if (Object.keys(in1[index].planId).length == 0) {
			delete in1[index].planId;
		}

		// IN1.3, companyId
		in1[index].companyId = [];
		for each (field in seg['IN1.3']) {
			var block = {};
			if (field['IN1.3.1'].toString() != "") { block.id = field['IN1.3.1']; }
			if (field['IN1.3.2'].toString() != "") { block.identifierCheckDigit = field['IN1.3.2']; }
			if (field['IN1.3.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN1.3.3']; }
			block.assigningAuthority = {};
			if (field['IN1.3.4']['IN1.3.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.3.4']['IN1.3.4.1']; }
			if (field['IN1.3.4']['IN1.3.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN1.3.4']['IN1.3.4.2']; }
			if (field['IN1.3.4']['IN1.3.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN1.3.4']['IN1.3.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN1.3.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.3.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN1.3.5'].toString() != "") { block.idTypeCode = field['IN1.3.5']; }
			block.assigningFacility = {};
			if (field['IN1.3.6']['IN1.3.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.3.6']['IN1.3.6.1']; }
			if (field['IN1.3.6']['IN1.3.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN1.3.6']['IN1.3.6.2']; }
			if (field['IN1.3.6']['IN1.3.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN1.3.6']['IN1.3.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN1.3.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.3.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in1[index].companyId.push(block);
			}
		}
		if (in1[index].companyId.length == 0) {
			delete in1[index].companyId;
		}

		// IN1.4, companyName
		in1[index].companyName = [];
		for each (field in seg['IN1.4']) {
			var block = {};
			if (field['IN1.4.1'].toString() != "") { block.organizationName = field['IN1.4.1']; }
			if (field['IN1.4.2'].toString() != "") { block.organizationNameTypeCode = field['IN1.4.2']; }
			if (field['IN1.4.3'].toString() != "") { block.idNumber = field['IN1.4.3']; }
			if (field['IN1.4.4'].toString() != "") { block.identifierCheckDigit = field['IN1.4.4']; }
			if (field['IN1.4.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN1.4.5']; }
			block.assigningAuthority = {};
			if (field['IN1.4.6']['IN1.4.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.4.6']['IN1.4.6.1']; }
			if (field['IN1.4.6']['IN1.4.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN1.4.6']['IN1.4.6.2']; }
			if (field['IN1.4.6']['IN1.4.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN1.4.6']['IN1.4.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN1.4.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.4.6']; }
				else delete block.assigningAuthority;
			}
			if (field['IN1.4.7'].toString() != "") { block.idTypeCode = field['IN1.4.7']; }
			block.assigningFacility = {};
			if (field['IN1.4.8']['IN1.4.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.4.8']['IN1.4.8.1']; }
			if (field['IN1.4.8']['IN1.4.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN1.4.8']['IN1.4.8.2']; }
			if (field['IN1.4.8']['IN1.4.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN1.4.8']['IN1.4.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN1.4.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.4.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in1[index].companyName.push(block);
			}
		}
		if (in1[index].companyName.length == 0) {
			delete in1[index].companyName;
		}
		
		// IN1.5, companyAddress
		in1[index].companyAddress = [];
		for each (field in seg['IN1.5']) {
			var block = {};
			if (field['IN1.5.1'].toString() != "") { block.streetAddress = field['IN1.5.1']; }
			if (field['IN1.5.2'].toString() != "") { block.otherDesignation = field['IN1.5.2']; }
			if (field['IN1.5.3'].toString() != "") { block.city = field['IN1.5.3']; }
			if (field['IN1.5.4'].toString() != "") { block.stateOrProvince = field['IN1.5.4']; }
			if (field['IN1.5.5'].toString() != "") { block.zip = field['IN1.5.5']; }
			if (field['IN1.5.6'].toString() != "") { block.country = field['IN1.5.6']; }
			if (field['IN1.5.7'].toString() != "") { block.addressType = field['IN1.5.7']; }
			if (field['IN1.5.8'].toString() != "") { block.otherGeographicDesignation = field['IN1.5.8']; }
			if (field['IN1.5.9'].toString() != "") { block.countyOrParishCode = field['IN1.5.9']; }
			if (field['IN1.5.10'].toString() != "") { block.censusTract = field['IN1.5.10']; }
			if (Object.keys(block).length > 0) {
				in1[index].companyAddress.push(block);
			}
		}
		if (in1[index].companyAddress.length == 0) {
			delete in1[index].companyAddress;
		}

		// IN1.6, companyContactPerson
		in1[index].companyContactPerson = [];
		for each (field in seg['IN1.6']) {
			var block = {};
			if (field['IN1.6.1'].toString() != "") { block.lastName = field['IN1.6.1']; }
			if (field['IN1.6.2'].toString() != "") { block.firstName = field['IN1.6.2']; }
			if (field['IN1.6.3'].toString() != "") { block.middleInitOrName = field['IN1.6.3']; }
			if (field['IN1.6.4'].toString() != "") { block.suffix = field['IN1.6.4']; }
			if (field['IN1.6.5'].toString() != "") { block.prefix = field['IN1.6.5']; }
			if (field['IN1.6.6'].toString() != "") { block.degree = field['IN1.6.6']; }
			if (field['IN1.6.7'].toString() != "") { block.nameTypeCode = field['IN1.6.7']; }
			if (Object.keys(block).length > 0) {
				in1[index].companyContactPerson.push(block);
			}	
		}
		if (in1[index].companyContactPerson.length == 0) {
			delete in1[index].companyContactPerson;
		}

		// IN1.7, companyPhoneNumber
		in1[index].companyPhoneNumber = [];
		for each (field in seg['IN1.7']) {
			var block = {};
			if (field['IN1.7.1'].toString() != "") { block.number = field['IN1.7.1']; }
			if (field['IN1.7.2'].toString() != "") { block.telecommunicationUseCode = field['IN1.7.2']; }
			if (field['IN1.7.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN1.7.3']; }
			if (field['IN1.7.4'].toString() != "") { block.emailAddress = field['IN1.7.4']; }
			if (field['IN1.7.5'].toString() != "") { block.countryCode = field['IN1.7.5']; }
			if (field['IN1.7.6'].toString() != "") { block.areaCityCode = field['IN1.7.6']; }
			if (field['IN1.7.7'].toString() != "") { block.phoneNumber = field['IN1.7.7']; }
			if (field['IN1.7.8'].toString() != "") { block.extension = field['IN1.7.8']; }
			if (field['IN1.7.9'].toString() != "") { block.text = field['IN1.7.9']; }
			if (Object.keys(block).length > 0) {
				in1[index].companyPhoneNumber.push(block);
			}
		}
		if (in1[index].companyPhoneNumber.length == 0) {
			delete in1[index].companyPhoneNumber;
		}

		// IN1.8, groupNumber
		if (seg['IN1.8']['IN1.8.1'].toString() != "") { in1[index].groupNumber = seg['IN1.8']['IN1.8.1']; }

		// IN1.9, groupName
		in1[index].groupName = [];
		for each (field in seg['IN1.9']) {
			var block = {};
			if (field['IN1.9.1'].toString() != "") { block.organizationName = field['IN1.9.1']; }
			if (field['IN1.9.2'].toString() != "") { block.organizationNameTypeCode = field['IN1.9.2']; }
			if (field['IN1.9.3'].toString() != "") { block.idNumber = field['IN1.9.3']; }
			if (field['IN1.9.4'].toString() != "") { block.identifierCheckDigit = field['IN1.9.4']; }
			if (field['IN1.9.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN1.9.5']; }
			block.assigningAuthority = {};
			if (field['IN1.9.6']['IN1.9.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.9.6']['IN1.9.6.1']; }
			if (field['IN1.9.6']['IN1.9.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN1.9.6']['IN1.9.6.2']; }
			if (field['IN1.9.6']['IN1.9.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN1.9.6']['IN1.9.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN1.9.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.9.6']; }
				else delete block.assigningAuthority;
			}
			if (field['IN1.9.7'].toString() != "") { block.idTypeCode = field['IN1.9.7']; }
			block.assigningFacility = {};
			if (field['IN1.9.8']['IN1.9.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.9.8']['IN1.9.8.1']; }
			if (field['IN1.9.8']['IN1.9.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN1.9.8']['IN1.9.8.2']; }
			if (field['IN1.9.8']['IN1.9.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN1.9.8']['IN1.9.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN1.9.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.9.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in1[index].groupName.push(block);
			}
		}
		if (in1[index].groupName.length == 0) {
			delete in1[index].groupName;
		}

		// IN1.10, groupEmpId
		in1[index].groupEmpId = [];
		for each (field in seg['IN1.10']) {
			var block = {};
			if (field['IN1.10.1'].toString() != "") { block.id = field['IN1.10.1']; }
			if (field['IN1.10.2'].toString() != "") { block.identifierCheckDigit = field['IN1.10.2']; }
			if (field['IN1.10.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN1.10.3']; }
			block.assigningAuthority = {};
			if (field['IN1.10.4']['IN1.10.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.10.4']['IN1.10.4.1']; }
			if (field['IN1.10.4']['IN1.10.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN1.10.4']['IN1.10.4.2']; }
			if (field['IN1.10.4']['IN1.10.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN1.10.4']['IN1.10.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN1.10.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.10.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN1.10.5'].toString() != "") { block.idTypeCode = field['IN1.10.5']; }
			block.assigningFacility = {};
			if (field['IN1.10.6']['IN1.10.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.10.6']['IN1.10.6.1']; }
			if (field['IN1.10.6']['IN1.10.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN1.10.6']['IN1.10.6.2']; }
			if (field['IN1.10.6']['IN1.10.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN1.10.6']['IN1.10.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN1.10.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.10.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in1[index].groupEmpId.push(block);
			}
		}
		if (in1[index].groupEmpId.length == 0) {
			delete in1[index].groupEmpId;
		}

		// IN1.11, groupEmpName
		in1[index].groupEmpName = [];
		for each (field in seg['IN1.11']) {
			var block = {};
			if (field['IN1.11.1'].toString() != "") { block.organizationName = field['IN1.11.1']; }
			if (field['IN1.11.2'].toString() != "") { block.organizationNameTypeCode = field['IN1.11.2']; }
			if (field['IN1.11.3'].toString() != "") { block.idNumber = field['IN1.11.3']; }
			if (field['IN1.11.4'].toString() != "") { block.identifierCheckDigit = field['IN1.11.4']; }
			if (field['IN1.11.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN1.11.5']; }
			block.assigningAuthority = {};
			if (field['IN1.11.6']['IN1.11.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.11.6']['IN1.11.6.1']; }
			if (field['IN1.11.6']['IN1.11.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN1.11.6']['IN1.11.6.2']; }
			if (field['IN1.11.6']['IN1.11.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN1.11.6']['IN1.11.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN1.11.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.11.6']; }
				else delete block.assigningAuthority;
			}
			if (field['IN1.11.7'].toString() != "") { block.idTypeCode = field['IN1.11.7']; }
			block.assigningFacility = {};
			if (field['IN1.11.8']['IN1.11.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.11.8']['IN1.11.8.1']; }
			if (field['IN1.11.8']['IN1.11.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN1.11.8']['IN1.11.8.2']; }
			if (field['IN1.11.8']['IN1.11.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN1.11.8']['IN1.11.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN1.11.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.11.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in1[index].groupEmpName.push(block);
			}
		}
		if (in1[index].groupEmpName.length == 0) {
			delete in1[index].groupEmpName;
		}

		// IN1.12, planEffectiveDate
		if (seg['IN1.12']['IN1.12.1'].toString() != "") { in1[index].planEffectiveDate = seg['IN1.12']['IN1.12.1']; }

		// IN1.13, planExpirationDate
		if (seg['IN1.13']['IN1.13.1'].toString() != "") { in1[index].planExpirationDate = seg['IN1.13']['IN1.13.1']; }

		// IN1.14, authorizationInformation
		in1[index].authorizationInformation = {};
		if (seg['IN1.14']['IN1.14.1'].toString() != "") { in1[index].authorizationInformation.authorizationNumber = seg['IN1.14']['IN1.14.1']; }
		if (seg['IN1.14']['IN1.14.2'].toString() != "") { in1[index].authorizationInformation.date = seg['IN1.14']['IN1.14.2']; }
		if (seg['IN1.14']['IN1.14.3'].toString() != "") { in1[index].authorizationInformation.source = seg['IN1.14']['IN1.14.3']; }
		if (Object.keys(in1[index].authorizationInformation).length == 0) {
			delete in1[index].authorizationInformation;
		}

		// IN1.15, planType
		if (seg['IN1.15']['IN1.15.1'].toString() != "") { in1[index].planType = seg['IN1.15']['IN1.15.1']; }
		
		// IN1.16, insuredName
		in1[index].companyContactPerson = [];
		for each (field in seg['IN1.16']) {
			var block = {};
			if (field['IN1.16.1'].toString() != "") { block.lastName = field['IN1.16.1']; }
			if (field['IN1.16.2'].toString() != "") { block.firstName = field['IN1.16.2']; }
			if (field['IN1.16.3'].toString() != "") { block.middleInitOrName = field['IN1.16.3']; }
			if (field['IN1.16.4'].toString() != "") { block.suffix = field['IN1.16.4']; }
			if (field['IN1.16.5'].toString() != "") { block.prefix = field['IN1.16.5']; }
			if (field['IN1.16.6'].toString() != "") { block.degree = field['IN1.16.6']; }
			if (field['IN1.16.7'].toString() != "") { block.nameTypeCode = field['IN1.16.7']; }
			if (Object.keys(block).length > 0) {
				in1[index].companyContactPerson.push(block);
			}	
		}
		if (in1[index].companyContactPerson.length == 0) {
			delete in1[index].companyContactPerson;
		}

		// IN1.17, insuredRelationshipToPatient
		if (seg['IN1.17']['IN1.17.1'].toString() != "") { in1[index].insuredRelationshipToPatient = seg['IN1.17']['IN1.17.1']; }
		
		// IN1.18, insuredDob
		if (seg['IN1.18']['IN1.18.1'].toString() != "") { in1[index].insuredDob = seg['IN1.18']['IN1.18.1']; }
		
		// IN1.19, insuredAddress
		in1[index].insuredAddress = [];
		for each (field in seg['IN1.19']) {
			var block = {};
			if (field['IN1.19.1'].toString() != "") { block.streetAddress = field['IN1.19.1']; }
			if (field['IN1.19.2'].toString() != "") { block.otherDesignation = field['IN1.19.2']; }
			if (field['IN1.19.3'].toString() != "") { block.city = field['IN1.19.3']; }
			if (field['IN1.19.4'].toString() != "") { block.stateOrProvince = field['IN1.19.4']; }
			if (field['IN1.19.5'].toString() != "") { block.zip = field['IN1.19.5']; }
			if (field['IN1.19.6'].toString() != "") { block.country = field['IN1.19.6']; }
			if (field['IN1.19.7'].toString() != "") { block.addressType = field['IN1.19.7']; }
			if (field['IN1.19.8'].toString() != "") { block.otherGeographicDesignation = field['IN1.19.8']; }
			if (field['IN1.19.9'].toString() != "") { block.countyOrParishCode = field['IN1.19.9']; }
			if (field['IN1.19.10'].toString() != "") { block.censusTract = field['IN1.19.10']; }
			if (Object.keys(block).length > 0) {
				in1[index].insuredAddress.push(block);
			}
		}
		if (in1[index].insuredAddress.length == 0) {
			delete in1[index].insuredAddress;
		}

		// IN1.20, assignmentOfBenefits
		if (seg['IN1.20']['IN1.20.1'].toString() != "") { in1[index].assignmentOfBenefits = seg['IN1.20']['IN1.20.1']; }
		
		// IN1.21, coordinationOfBenefits
		if (seg['IN1.21']['IN1.21.1'].toString() != "") { in1[index].coordinationOfBenefits = seg['IN1.21']['IN1.21.1']; }
		
		// IN1.22, coordinationOfBenefitsPriority
		if (seg['IN1.22']['IN1.22.1'].toString() != "") { in1[index].coordinationOfBenefitsPriority = seg['IN1.22']['IN1.22.1']; }
		
		// IN1.23, noticeOfAdmissionFlag
		if (seg['IN1.23']['IN1.23.1'].toString() != "") { in1[index].noticeOfAdmissionFlag = seg['IN1.23']['IN1.23.1']; }
		
		// IN1.24, noticeOfAdmissionDate
		if (seg['IN1.24']['IN1.24.1'].toString() != "") { in1[index].noticeOfAdmissionDate = seg['IN1.24']['IN1.24.1']; }
		
		// IN1.25, reportOfEligibilityFlag
		if (seg['IN1.25']['IN1.25.1'].toString() != "") { in1[index].reportOfEligibilityFlag = seg['IN1.25']['IN1.25.1']; }
		
		// IN1.26, reportOfEligibilityDate
		if (seg['IN1.26']['IN1.26.1'].toString() != "") { in1[index].reportOfEligibilityDate = seg['IN1.26']['IN1.26.1']; }
		
		// IN1.27, releaseInformationCode
		if (seg['IN1.27']['IN1.27.1'].toString() != "") { in1[index].releaseInformationCode = seg['IN1.27']['IN1.27.1']; }
		
		// IN1.28, preAdmitCert
		if (seg['IN1.28']['IN1.28.1'].toString() != "") { in1[index].preAdmitCert = seg['IN1.28']['IN1.28.1']; }
		
		// IN1.29, verificationDateTime
		if (seg['IN1.29']['IN1.29.1'].toString() != "") { in1[index].verificationDateTime = seg['IN1.29']['IN1.29.1']; }
		
		// IN1.30, verificationBy
		in1[index].verificationBy = {};
		if (seg['IN1.30']['IN1.30.1'].toString() != "") { in1[index].verificationBy.id = seg['IN1.30']['IN1.30.1']; }
		if (seg['IN1.30']['IN1.30.2'].toString() != "") { in1[index].verificationBy.lastName = seg['IN1.30']['IN1.30.2']; }
		if (seg['IN1.30']['IN1.30.3'].toString() != "") { in1[index].verificationBy.firstName = seg['IN1.30']['IN1.30.3']; }
		if (seg['IN1.30']['IN1.30.4'].toString() != "") { in1[index].verificationBy.middleInitOrName = seg['IN1.30']['IN1.30.4']; }
		if (seg['IN1.30']['IN1.30.5'].toString() != "") { in1[index].verificationBy.suffix = seg['IN1.30']['IN1.30.5']; }
		if (seg['IN1.30']['IN1.30.6'].toString() != "") { in1[index].verificationBy.prefix = seg['IN1.30']['IN1.30.6']; }
		if (seg['IN1.30']['IN1.30.7'].toString() != "") { in1[index].verificationBy.degree = seg['IN1.30']['IN1.30.7']; }
		if (seg['IN1.30']['IN1.30.8'].toString() != "") { in1[index].verificationBy.sourceTable = seg['IN1.30']['IN1.30.8']; }
		in1[index].verificationBy.assigningAuthority = {};
		if (seg['IN1.30']['IN1.30.9']['IN1.30.9.1'].toString() != "") { in1[index].verificationBy.assigningAuthority.id = seg['IN1.30']['IN1.30.9']['IN1.30.9.1']; }
		if (seg['IN1.30']['IN1.30.9']['IN1.30.9.2'].toString() != "") { in1[index].verificationBy.assigningAuthority.universalId = seg['IN1.30']['IN1.30.9']['IN1.30.9.2']; }
		if (seg['IN1.30']['IN1.30.9']['IN1.30.9.3'].toString() != "") { in1[index].verificationBy.assigningAuthority.universalIdType = seg['IN1.30']['IN1.30.9']['IN1.30.9.3']; }
		if (Object.keys(in1[index].verificationBy.assigningAuthority).length == 0) {
			if (seg['IN1.30']['IN1.30.9'].toString() != "") { in1[index].verificationBy.assigningAuthority.id = seg['IN1.30']['IN1.30.9']; }
			else delete in1[index].verificationBy.assigningAuthority;
		}
		if (seg['IN1.30']['IN1.30.10'].toString() != "") { in1[index].verificationBy.nameTypeCode = seg['IN1.30']['IN1.30.10']; }
		if (seg['IN1.30']['IN1.30.11'].toString() != "") { in1[index].verificationBy.identifierCheckDigit = seg['IN1.30']['IN1.30.11']; }
		if (seg['IN1.30']['IN1.30.12'].toString() != "") { in1[index].verificationBy.codeIdentifyingCheckDigitScheme = seg['IN1.30']['IN1.30.12']; }
		if (seg['IN1.30']['IN1.30.13'].toString() != "") { in1[index].verificationBy.identifierTypeCode = seg['IN1.30']['IN1.30.13']; }
		in1[index].verificationBy.assigningFacility = {};
		if (seg['IN1.30']['IN1.30.14']['IN1.30.14.1'].toString() != "") { in1[index].verificationBy.assigningFacility.id = seg['IN1.30']['IN1.30.14']['IN1.30.14.1']; }
		if (seg['IN1.30']['IN1.30.14']['IN1.30.14.2'].toString() != "") { in1[index].verificationBy.assigningFacility.universalId = seg['IN1.30']['IN1.30.14']['IN1.30.14.2']; }
		if (seg['IN1.30']['IN1.30.14']['IN1.30.14.3'].toString() != "") { in1[index].verificationBy.assigningFacility.universalIdType = seg['IN1.30']['IN1.30.14']['IN1.30.14.3']; }
		if (Object.keys(in1[index].verificationBy.assigningFacility).length == 0) {
			if (seg['IN1.30']['IN1.30.14'].toString() != "") { in1[index].verificationBy.assigningFacility.id = seg['IN1.30']['IN1.30.14']; }
			else delete in1[index].verificationBy.assigningFacility;
		}
		if (Object.keys(in1[index].verificationBy).length == 0) {
			delete in1[index].verificationBy;
		}

		// IN1.31, typeOfAgreementCode
		if (seg['IN1.31']['IN1.31.1'].toString() != "") { in1[index].typeOfAgreementCode = seg['IN1.31']['IN1.31.1']; }
		
		// IN1.32, billingStatus
		if (seg['IN1.32']['IN1.32.1'].toString() != "") { in1[index].billingStatus = seg['IN1.32']['IN1.32.1']; }
		
		// IN1.33, lifetimeReserveDays
		if (seg['IN1.33']['IN1.33.1'].toString() != "") { in1[index].lifetimeReserveDays = seg['IN1.33']['IN1.33.1']; }
		
		// IN1.34, delayBeforeLrDay
		if (seg['IN1.34']['IN1.34.1'].toString() != "") { in1[index].delayBeforeLrDay = seg['IN1.34']['IN1.34.1']; }
		
		// IN1.35, companyPlanCode
		if (seg['IN1.35']['IN1.35.1'].toString() != "") { in1[index].companyPlanCode = seg['IN1.35']['IN1.35.1']; }
		
		// IN1.36, policyNumber
		if (seg['IN1.36']['IN1.36.1'].toString() != "") { in1[index].policyNumber = seg['IN1.36']['IN1.36.1']; }
		
		// IN1.37, policyDeductible
		in1[index].policyDeductible = {};
		in1[index].policyDeductible.price = {};
		if (seg['IN1.37']['IN1.37.1']['IN1.37.1.1'].toString() != "") { in1[index].policyDeductible.price.quantity = seg['IN1.37']['IN1.37.1']['IN1.37.1.1']; }
		if (seg['IN1.37']['IN1.37.1']['IN1.37.1.2'].toString() != "") { in1[index].policyDeductible.price.denomination = seg['IN1.37']['IN1.37.1']['IN1.37.1.2']; }
		if (Object.keys(in1[index].policyDeductible.price).length == 0) {
			if (seg['IN1.37']['IN1.37.1'].toString() != "") { in1[index].policyDeductible.price.quantity = seg['IN1.37']['IN1.37.1']; }
			else delete in1[index].policyDeductible.price;
		}
		if (seg['IN1.37']['IN1.37.2'].toString() != "") { in1[index].policyDeductible.priceType = seg['IN1.37']['IN1.37.2']; }
		if (seg['IN1.37']['IN1.37.3'].toString() != "") { in1[index].policyDeductible.fromValue = seg['IN1.37']['IN1.37.3']; }
		if (seg['IN1.37']['IN1.37.4'].toString() != "") { in1[index].policyDeductible.toValue = seg['IN1.37']['IN1.37.4']; }
		if (seg['IN1.37']['IN1.37.5'].toString() != "") { in1[index].policyDeductible.rangeUnits = seg['IN1.37']['IN1.37.5']; }
		in1[index].policyDeductible.rangeType = {};
		if (seg['IN1.37']['IN1.37.6']['IN1.37.6.1'].toString() != "") { in1[index].policyDeductible.rangeType.id = seg['IN1.37']['IN1.37.6']['IN1.37.6.1']; }
		if (seg['IN1.37']['IN1.37.6']['IN1.37.6.2'].toString() != "") { in1[index].policyDeductible.rangeType.text = seg['IN1.37']['IN1.37.6']['IN1.37.6.2']; }
		if (seg['IN1.37']['IN1.37.6']['IN1.37.6.3'].toString() != "") { in1[index].policyDeductible.rangeType.codingSystem = seg['IN1.37']['IN1.37.6']['IN1.37.6.3']; }
		if (seg['IN1.37']['IN1.37.6']['IN1.37.6.4'].toString() != "") { in1[index].policyDeductible.rangeType.altId = seg['IN1.37']['IN1.37.6']['IN1.37.6.4']; }
		if (seg['IN1.37']['IN1.37.6']['IN1.37.6.5'].toString() != "") { in1[index].policyDeductible.rangeType.altText = seg['IN1.37']['IN1.37.6']['IN1.37.6.5']; }
		if (seg['IN1.37']['IN1.37.6']['IN1.37.6.6'].toString() != "") { in1[index].policyDeductible.rangeType.altCodingSystem = seg['IN1.37']['IN1.37.6']['IN1.37.6.6']; }
		if (Object.keys(in1[index].policyDeductible.rangeType).length == 0) {
			if (seg['IN1.37']['IN1.37.6'].toString() != "") { in1[index].policyDeductible.rangeType.id = seg['IN1.37']['IN1.37.6']; }
			else delete in1[index].policyDeductible.rangeType;
		}
		if (Object.keys(in1[index].policyDeductible).length == 0) {
			delete in1[index].policyDeductible;
		}

		// IN1.38, policyLimitAmount
		in1[index].policyLimitAmount = {};
		in1[index].policyLimitAmount.price = {};
		if (seg['IN1.38']['IN1.38.1']['IN1.38.1.1'].toString() != "") { in1[index].policyLimitAmount.price.quantity = seg['IN1.38']['IN1.38.1']['IN1.38.1.1']; }
		if (seg['IN1.38']['IN1.38.1']['IN1.38.1.2'].toString() != "") { in1[index].policyLimitAmount.price.denomination = seg['IN1.38']['IN1.38.1']['IN1.38.1.2']; }
		if (Object.keys(in1[index].policyLimitAmount.price).length == 0) {
			if (seg['IN1.38']['IN1.38.1'].toString() != "") { in1[index].policyLimitAmount.price.quantity = seg['IN1.38']['IN1.38.1']; }
			else delete in1[index].policyLimitAmount.price;
		}
		if (seg['IN1.38']['IN1.38.2'].toString() != "") { in1[index].policyLimitAmount.priceType = seg['IN1.38']['IN1.38.2']; }
		if (seg['IN1.38']['IN1.38.3'].toString() != "") { in1[index].policyLimitAmount.fromValue = seg['IN1.38']['IN1.38.3']; }
		if (seg['IN1.38']['IN1.38.4'].toString() != "") { in1[index].policyLimitAmount.toValue = seg['IN1.38']['IN1.38.4']; }
		if (seg['IN1.38']['IN1.38.5'].toString() != "") { in1[index].policyLimitAmount.rangeUnits = seg['IN1.38']['IN1.38.5']; }
		in1[index].policyLimitAmount.rangeType = {};
		if (seg['IN1.38']['IN1.38.6']['IN1.38.6.1'].toString() != "") { in1[index].policyLimitAmount.rangeType.id = seg['IN1.38']['IN1.38.6']['IN1.38.6.1']; }
		if (seg['IN1.38']['IN1.38.6']['IN1.38.6.2'].toString() != "") { in1[index].policyLimitAmount.rangeType.text = seg['IN1.38']['IN1.38.6']['IN1.38.6.2']; }
		if (seg['IN1.38']['IN1.38.6']['IN1.38.6.3'].toString() != "") { in1[index].policyLimitAmount.rangeType.codingSystem = seg['IN1.38']['IN1.38.6']['IN1.38.6.3']; }
		if (seg['IN1.38']['IN1.38.6']['IN1.38.6.4'].toString() != "") { in1[index].policyLimitAmount.rangeType.altId = seg['IN1.38']['IN1.38.6']['IN1.38.6.4']; }
		if (seg['IN1.38']['IN1.38.6']['IN1.38.6.5'].toString() != "") { in1[index].policyLimitAmount.rangeType.altText = seg['IN1.38']['IN1.38.6']['IN1.38.6.5']; }
		if (seg['IN1.38']['IN1.38.6']['IN1.38.6.6'].toString() != "") { in1[index].policyLimitAmount.rangeType.altCodingSystem = seg['IN1.38']['IN1.38.6']['IN1.38.6.6']; }
		if (Object.keys(in1[index].policyLimitAmount.rangeType).length == 0) {
			if (seg['IN1.38']['IN1.38.6'].toString() != "") { in1[index].policyLimitAmount.rangeType.id = seg['IN1.38']['IN1.38.6']; }
			else delete in1[index].policyLimitAmount.rangeType;
		}
		if (Object.keys(in1[index].policyLimitAmount).length == 0) {
			delete in1[index].policyLimitAmount;
		}

		// IN1.39, policyLimitDays
		if (seg['IN1.39']['IN1.39.1'].toString() != "") { in1[index].policyLimitDays = seg['IN1.39']['IN1.39.1']; }
		
		// IN1.40, roomRateSemiPrivate
		in1[index].roomRateSemiPrivate = {};
		in1[index].roomRateSemiPrivate.price = {};
		if (seg['IN1.40']['IN1.40.1']['IN1.40.1.1'].toString() != "") { in1[index].roomRateSemiPrivate.price.quantity = seg['IN1.40']['IN1.40.1']['IN1.40.1.1']; }
		if (seg['IN1.40']['IN1.40.1']['IN1.40.1.2'].toString() != "") { in1[index].roomRateSemiPrivate.price.denomination = seg['IN1.40']['IN1.40.1']['IN1.40.1.2']; }
		if (Object.keys(in1[index].roomRateSemiPrivate.price).length == 0) {
			if (seg['IN1.40']['IN1.40.1'].toString() != "") { in1[index].roomRateSemiPrivate.price.quantity = seg['IN1.40']['IN1.40.1']; }
			else delete in1[index].roomRateSemiPrivate.price;
		}
		if (seg['IN1.40']['IN1.40.2'].toString() != "") { in1[index].roomRateSemiPrivate.priceType = seg['IN1.40']['IN1.40.2']; }
		if (seg['IN1.40']['IN1.40.3'].toString() != "") { in1[index].roomRateSemiPrivate.fromValue = seg['IN1.40']['IN1.40.3']; }
		if (seg['IN1.40']['IN1.40.4'].toString() != "") { in1[index].roomRateSemiPrivate.toValue = seg['IN1.40']['IN1.40.4']; }
		if (seg['IN1.40']['IN1.40.5'].toString() != "") { in1[index].roomRateSemiPrivate.rangeUnits = seg['IN1.40']['IN1.40.5']; }
		in1[index].roomRateSemiPrivate.rangeType = {};
		if (seg['IN1.40']['IN1.40.6']['IN1.40.6.1'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.id = seg['IN1.40']['IN1.40.6']['IN1.40.6.1']; }
		if (seg['IN1.40']['IN1.40.6']['IN1.40.6.2'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.text = seg['IN1.40']['IN1.40.6']['IN1.40.6.2']; }
		if (seg['IN1.40']['IN1.40.6']['IN1.40.6.3'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.codingSystem = seg['IN1.40']['IN1.40.6']['IN1.40.6.3']; }
		if (seg['IN1.40']['IN1.40.6']['IN1.40.6.4'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.altId = seg['IN1.40']['IN1.40.6']['IN1.40.6.4']; }
		if (seg['IN1.40']['IN1.40.6']['IN1.40.6.5'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.altText = seg['IN1.40']['IN1.40.6']['IN1.40.6.5']; }
		if (seg['IN1.40']['IN1.40.6']['IN1.40.6.6'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.altCodingSystem = seg['IN1.40']['IN1.40.6']['IN1.40.6.6']; }
		if (Object.keys(in1[index].roomRateSemiPrivate.rangeType).length == 0) {
			if (seg['IN1.40']['IN1.40.6'].toString() != "") { in1[index].roomRateSemiPrivate.rangeType.id = seg['IN1.40']['IN1.40.6']; }
			else delete in1[index].roomRateSemiPrivate.rangeType;
		}
		if (Object.keys(in1[index].roomRateSemiPrivate).length == 0) {
			delete in1[index].roomRateSemiPrivate;
		}

		// IN1.41, roomRatePrivate
		in1[index].roomRatePrivate = {};
		in1[index].roomRatePrivate.price = {};
		if (seg['IN1.41']['IN1.41.1']['IN1.41.1.1'].toString() != "") { in1[index].roomRatePrivate.price.quantity = seg['IN1.41']['IN1.41.1']['IN1.41.1.1']; }
		if (seg['IN1.41']['IN1.41.1']['IN1.41.1.2'].toString() != "") { in1[index].roomRatePrivate.price.denomination = seg['IN1.41']['IN1.41.1']['IN1.41.1.2']; }
		if (Object.keys(in1[index].roomRatePrivate.price).length == 0) {
			if (seg['IN1.41']['IN1.41.1'].toString() != "") { in1[index].roomRatePrivate.price.quantity = seg['IN1.41']['IN1.41.1']; }
			else delete in1[index].roomRatePrivate.price;
		}
		if (seg['IN1.41']['IN1.41.2'].toString() != "") { in1[index].roomRatePrivate.priceType = seg['IN1.41']['IN1.41.2']; }
		if (seg['IN1.41']['IN1.41.3'].toString() != "") { in1[index].roomRatePrivate.fromValue = seg['IN1.41']['IN1.41.3']; }
		if (seg['IN1.41']['IN1.41.4'].toString() != "") { in1[index].roomRatePrivate.toValue = seg['IN1.41']['IN1.41.4']; }
		if (seg['IN1.41']['IN1.41.5'].toString() != "") { in1[index].roomRatePrivate.rangeUnits = seg['IN1.41']['IN1.41.5']; }
		in1[index].roomRatePrivate.rangeType = {};
		if (seg['IN1.41']['IN1.41.6']['IN1.41.6.1'].toString() != "") { in1[index].roomRatePrivate.rangeType.id = seg['IN1.41']['IN1.41.6']['IN1.41.6.1']; }
		if (seg['IN1.41']['IN1.41.6']['IN1.41.6.2'].toString() != "") { in1[index].roomRatePrivate.rangeType.text = seg['IN1.41']['IN1.41.6']['IN1.41.6.2']; }
		if (seg['IN1.41']['IN1.41.6']['IN1.41.6.3'].toString() != "") { in1[index].roomRatePrivate.rangeType.codingSystem = seg['IN1.41']['IN1.41.6']['IN1.41.6.3']; }
		if (seg['IN1.41']['IN1.41.6']['IN1.41.6.4'].toString() != "") { in1[index].roomRatePrivate.rangeType.altId = seg['IN1.41']['IN1.41.6']['IN1.41.6.4']; }
		if (seg['IN1.41']['IN1.41.6']['IN1.41.6.5'].toString() != "") { in1[index].roomRatePrivate.rangeType.altText = seg['IN1.41']['IN1.41.6']['IN1.41.6.5']; }
		if (seg['IN1.41']['IN1.41.6']['IN1.41.6.6'].toString() != "") { in1[index].roomRatePrivate.rangeType.altCodingSystem = seg['IN1.41']['IN1.41.6']['IN1.41.6.6']; }
		if (Object.keys(in1[index].roomRatePrivate.rangeType).length == 0) {
			if (seg['IN1.41']['IN1.41.6'].toString() != "") { in1[index].roomRatePrivate.rangeType.id = seg['IN1.41']['IN1.41.6']; }
			else delete in1[index].roomRatePrivate.rangeType;
		}
		if (Object.keys(in1[index].roomRatePrivate).length == 0) {
			delete in1[index].roomRatePrivate;
		}

		// IN1.42, insuredEmploymentStatus
		in1[index].insuredEmploymentStatus = {};
		if (seg['IN1.42']['IN1.42.1'].toString() != "") { in1[index].insuredEmploymentStatus.id = seg['IN1.42']['IN1.42.1']; }
		if (seg['IN1.42']['IN1.42.2'].toString() != "") { in1[index].insuredEmploymentStatus.text = seg['IN1.42']['IN1.42.2']; }
		if (seg['IN1.42']['IN1.42.3'].toString() != "") { in1[index].insuredEmploymentStatus.codingSystem = seg['IN1.42']['IN1.42.3']; }
		if (seg['IN1.42']['IN1.42.4'].toString() != "") { in1[index].insuredEmploymentStatus.altId = seg['IN1.42']['IN1.42.4']; }
		if (seg['IN1.42']['IN1.42.5'].toString() != "") { in1[index].insuredEmploymentStatus.altText = seg['IN1.42']['IN1.42.5']; }
		if (seg['IN1.42']['IN1.42.6'].toString() != "") { in1[index].insuredEmploymentStatus.altCodingSystem = seg['IN1.42']['IN1.42.6']; }
		if (Object.keys(in1[index].insuredEmploymentStatus).length == 0) {
			delete in1[index].insuredEmploymentStatus;
		}
		
		// IN1.43, insuredSex
		if (seg['IN1.43']['IN1.43.1'].toString() != "") { in1[index].insuredSex = seg['IN1.43']['IN1.43.1']; }
		
		// IN1.44, insuredEmployerAddress
		in1[index].insuredEmployerAddress = [];
		for each (field in seg['IN1.44']) {
			var block = {};
			if (field['IN1.44.1'].toString() != "") { block.streetAddress = field['IN1.44.1']; }
			if (field['IN1.44.2'].toString() != "") { block.otherDesignation = field['IN1.44.2']; }
			if (field['IN1.44.3'].toString() != "") { block.city = field['IN1.44.3']; }
			if (field['IN1.44.4'].toString() != "") { block.stateOrProvince = field['IN1.44.4']; }
			if (field['IN1.44.5'].toString() != "") { block.zip = field['IN1.44.5']; }
			if (field['IN1.44.6'].toString() != "") { block.country = field['IN1.44.6']; }
			if (field['IN1.44.7'].toString() != "") { block.addressType = field['IN1.44.7']; }
			if (field['IN1.44.8'].toString() != "") { block.otherGeographicDesignation = field['IN1.44.8']; }
			if (field['IN1.44.9'].toString() != "") { block.countyOrParishCode = field['IN1.44.9']; }
			if (field['IN1.44.10'].toString() != "") { block.censusTract = field['IN1.44.10']; }
			if (Object.keys(block).length > 0) {
				in1[index].insuredEmployerAddress.push(block);
			}
		}
		if (in1[index].insuredEmployerAddress.length == 0) {
			delete in1[index].insuredEmployerAddress;
		}

		// IN1.45, verificationStatus
		if (seg['IN1.45']['IN1.45.1'].toString() != "") { in1[index].verificationStatus = seg['IN1.45']['IN1.45.1']; }
		
		// IN1.46, priorInsurancePlanId
		if (seg['IN1.46']['IN1.46.1'].toString() != "") { in1[index].priorInsurancePlanId = seg['IN1.46']['IN1.46.1']; }
		
		// IN1.47, coverageType
		if (seg['IN1.47']['IN1.47.1'].toString() != "") { in1[index].coverageType = seg['IN1.47']['IN1.47.1']; }
		
		// IN1.48, handicap
		if (seg['IN1.48']['IN1.48.1'].toString() != "") { in1[index].handicap = seg['IN1.48']['IN1.48.1']; }
		
		// IN1.49, insuredIdNumber
		in1[index].insuredIdNumber = [];
		for each (field in seg['IN1.49']) {
			var block = {};
			if (field['IN1.49.1'].toString() != "") { block.id = field['IN1.49.1']; }
			if (field['IN1.49.2'].toString() != "") { block.identifierCheckDigit = field['IN1.49.2']; }
			if (field['IN1.49.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN1.49.3']; }
			block.assigningAuthority = {};
			if (field['IN1.49.4']['IN1.49.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.49.4']['IN1.49.4.1']; }
			if (field['IN1.49.4']['IN1.49.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN1.49.4']['IN1.49.4.2']; }
			if (field['IN1.49.4']['IN1.49.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN1.49.4']['IN1.49.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN1.49.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN1.49.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN1.49.5'].toString() != "") { block.idTypeCode = field['IN1.49.5']; }
			block.assigningFacility = {};
			if (field['IN1.49.6']['IN1.49.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.49.6']['IN1.49.6.1']; }
			if (field['IN1.49.6']['IN1.49.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN1.49.6']['IN1.49.6.2']; }
			if (field['IN1.49.6']['IN1.49.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN1.49.6']['IN1.49.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN1.49.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN1.49.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in1[index].insuredIdNumber.push(block);
			}
		}
		if (in1[index].insuredIdNumber.length == 0) {
			delete in1[index].insuredIdNumber;
		}

		// IN2 (IN1)
		var in2Group = getSegmentsAfter(msg,seg,'IN2',true);
		if (in2Group.length > 0 && in1) {
			in1[index].in2 = [];
			var indexIN2 = 0;
			for each (in2Seg in in2Group) {
				in1[index].in2[indexIN2] = {};

				// IN2.1, insuredEmployeeId
				in1[index].IN2[indexIN2].insuredEmployeeId = [];
				for each (field in in2Seg['IN2.1']) {
					var block = {};
					if (field['IN2.1.1'].toString() != "") { block.id = field['IN2.1.1']; }
					if (field['IN2.1.2'].toString() != "") { block.identifierCheckDigit = field['IN2.1.2']; }
					if (field['IN2.1.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.1.3']; }
					block.assigningAuthority = {};
					if (field['IN2.1.4']['IN2.1.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.1.4']['IN2.1.4.1']; }
					if (field['IN2.1.4']['IN2.1.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.1.4']['IN2.1.4.2']; }
					if (field['IN2.1.4']['IN2.1.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.1.4']['IN2.1.4.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.1.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.1.4']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.1.5'].toString() != "") { block.idTypeCode = field['IN2.1.5']; }
					block.assigningFacility = {};
					if (field['IN2.1.6']['IN2.1.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.1.6']['IN2.1.6.1']; }
					if (field['IN2.1.6']['IN2.1.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.1.6']['IN2.1.6.2']; }
					if (field['IN2.1.6']['IN2.1.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.1.6']['IN2.1.6.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.1.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.1.6']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredEmployeeId.push(block);
					}
				}
				if (Object.keys(in1[index].IN2[indexIN2].insuredEmployeeId).length == 0) {
					delete in1[index].IN2[indexIN2].insuredEmployeeId;
				}

				// IN2.2, insuredSSN
				if (in2Seg['IN2.2']['IN2.2.1'].toString() != "") { in1[index].IN2[indexIN2].insuredSSN = in2Seg['IN2.2']['IN2.2.1']; }

				// IN2.3, insuredEmployerName
				in1[index].IN2[indexIN2].insuredEmployerName = [];
				for each (field in in2Seg['IN2.3']) {
					var block = {};
					if (field['IN2.3.1'].toString() != "") { block.id = field['IN2.3.1']; }
					if (field['IN2.3.2'].toString() != "") { block.lastName = field['IN2.3.2']; }
					if (field['IN2.3.3'].toString() != "") { block.firstName = field['IN2.3.3']; }
					if (field['IN2.3.4'].toString() != "") { block.middleInitOrName = field['IN2.3.4']; }
					if (field['IN2.3.5'].toString() != "") { block.suffix = field['IN2.3.5']; }
					if (field['IN2.3.6'].toString() != "") { block.prefix = field['IN2.3.6']; }
					if (field['IN2.3.7'].toString() != "") { block.degree = field['IN2.3.7']; }
					if (field['IN2.3.8'].toString() != "") { block.sourceTable = field['IN2.3.8']; }
					block.assigningAuthority = {};
					if (field['IN2.3.9']['IN2.3.9.1'].toString() != "") { block.assigningAuthority.id = field['IN2.3.9']['IN2.3.9.1']; }
					if (field['IN2.3.9']['IN2.3.9.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.3.9']['IN2.3.9.2']; }
					if (field['IN2.3.9']['IN2.3.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.3.9']['IN2.3.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.3.9'].toString() != "") { block.assigningAuthority.id = field['IN2.3.9']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.3.10'].toString() != "") { block.nameTypeCode = field['IN2.3.10']; }
					if (field['IN2.3.11'].toString() != "") { block.identifierCheckDigit = field['IN2.3.11']; }
					if (field['IN2.3.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.3.12']; }
					if (field['IN2.3.13'].toString() != "") { block.identifierTypeCode = field['IN2.3.13']; }
					block.assigningFacility = {};
					if (field['IN2.3.14']['IN2.3.14.1'].toString() != "") { block.assigningFacility.id = field['IN2.3.14']['IN2.3.14.1']; }
					if (field['IN2.3.14']['IN2.3.14.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.3.14']['IN2.3.14.2']; }
					if (field['IN2.3.14']['IN2.3.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.3.14']['IN2.3.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.3.14'].toString() != "") { block.assigningFacility.id = field['IN2.3.14']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredEmployerName.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].insuredEmployerName.length == 0) {
					delete in1[index].IN2[indexIN2].insuredEmployerName;
				}

				// IN2.4, employerInfoData
				if (in2Seg['IN2.4']['IN2.4.1'].toString() != "") { in1[index].IN2[indexIN2].employerInfoData = in2Seg['IN2.4']['IN2.4.1']; }
				
				// IN2.5, mailClaimParty
				in1[index].IN2[indexIN2].mailClaimParty = [];
				for each (field in in2Seg['IN2.5']) {
					if (field['IN2.5.1'].toString() != "") {
						in1[index].IN2[indexIN2].mailClaimParty.push(field['IN2.5.1']);
					}
				}
				if (in1[index].IN2[indexIN2].mailClaimParty.length ==0) {
					delete in1[index].IN2[indexIN2].mailClaimParty
				}

				// IN2.6, medicareHealthInsCardNumber
				if (in2Seg['IN2.6']['IN2.6.1'].toString() != "") { in1[index].IN2[indexIN2].medicareHealthInsCardNumber = in2Seg['IN2.6']['IN2.6.1']; }
				
				// IN2.7, medicaidCaseName
				in1[index].IN2[indexIN2].medicaidCaseName = [];
				for each (field in in2Seg['IN2.7']) {
					var block = {};
					if (field['IN2.7.1'].toString() != "") { block.lastName = field['IN2.7.1']; }
					if (field['IN2.7.2'].toString() != "") { block.firstName = field['IN2.7.2']; }
					if (field['IN2.7.3'].toString() != "") { block.middleInitOrName = field['IN2.7.3']; }
					if (field['IN2.7.4'].toString() != "") { block.suffix = field['IN2.7.4']; }
					if (field['IN2.7.5'].toString() != "") { block.prefix = field['IN2.7.5']; }
					if (field['IN2.7.6'].toString() != "") { block.degree = field['IN2.7.6']; }
					if (field['IN2.7.7'].toString() != "") { block.nameTypeCode = field['IN2.7.7']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].medicaidCaseName.push(block);
					}	
				}
				if (in1[index].IN2[indexIN2].medicaidCaseName.length == 0) {
					delete in1[index].IN2[indexIN2].medicaidCaseName;
				}
				
				// IN2.8, medicaidCaseNumber
				if (in2Seg['IN2.8']['IN2.8.1'].toString() != "") { in1[index].IN2[indexIN2].medicaidCaseNumber = in2Seg['IN2.8']['IN2.8.1']; }

				// IN2.9, champusSponsorName
				in1[index].IN2[indexIN2].champusSponsorName = [];
				for each (field in in2Seg['IN2.9']) {
					var block = {};
					if (field['IN2.9.1'].toString() != "") { block.lastName = field['IN2.9.1']; }
					if (field['IN2.9.2'].toString() != "") { block.firstName = field['IN2.9.2']; }
					if (field['IN2.9.3'].toString() != "") { block.middleInitOrName = field['IN2.9.3']; }
					if (field['IN2.9.4'].toString() != "") { block.suffix = field['IN2.9.4']; }
					if (field['IN2.9.5'].toString() != "") { block.prefix = field['IN2.9.5']; }
					if (field['IN2.9.6'].toString() != "") { block.degree = field['IN2.9.6']; }
					if (field['IN2.9.7'].toString() != "") { block.nameTypeCode = field['IN2.9.7']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].champusSponsorName.push(block);
					}	
				}
				if (in1[index].IN2[indexIN2].champusSponsorName.length == 0) {
					delete in1[index].IN2[indexIN2].champusSponsorName;
				}
				
				// IN2.10, champusIdNumber
				if (in2Seg['IN2.10']['IN2.10.1'].toString() != "") { in1[index].IN2[indexIN2].champusIdNumber = in2Seg['IN2.10']['IN2.10.1']; }
				
				// IN2.11, dependentOfChampusRecipient
				in1[index].IN2[indexIN2].dependentOfChampusRecipient = {};
				if (in2Seg['IN2.11']['IN2.11.1'].toString() != "") { in1[index].IN2[indexIN2].dependentOfChampusRecipient.id = in2Seg['IN2.11']['IN2.11.1']; }
				if (in2Seg['IN2.11']['IN2.11.2'].toString() != "") { in1[index].IN2[indexIN2].dependentOfChampusRecipient.text = in2Seg['IN2.11']['IN2.11.2']; }
				if (in2Seg['IN2.11']['IN2.11.3'].toString() != "") { in1[index].IN2[indexIN2].dependentOfChampusRecipient.codingSystem = in2Seg['IN2.11']['IN2.11.3']; }
				if (in2Seg['IN2.11']['IN2.11.4'].toString() != "") { in1[index].IN2[indexIN2].dependentOfChampusRecipient.altId = in2Seg['IN2.11']['IN2.11.4']; }
				if (in2Seg['IN2.11']['IN2.11.5'].toString() != "") { in1[index].IN2[indexIN2].dependentOfChampusRecipient.altText = in2Seg['IN2.11']['IN2.11.5']; }
				if (in2Seg['IN2.11']['IN2.11.6'].toString() != "") { in1[index].IN2[indexIN2].dependentOfChampusRecipient.altCodingSystem = in2Seg['IN2.11']['IN2.11.6']; }
				if (Object.keys(in1[index].IN2[indexIN2].dependentOfChampusRecipient).length == 0) {
					delete in1[index].IN2[indexIN2].dependentOfChampusRecipient;
				}

				// IN2.12, champusOrganization
				if (in2Seg['IN2.12']['IN2.12.1'].toString() != "") { in1[index].IN2[indexIN2].champusOrganization = in2Seg['IN2.12']['IN2.12.1']; }
				
				// IN2.13, champusStation
				if (in2Seg['IN2.13']['IN2.13.1'].toString() != "") { in1[index].IN2[indexIN2].champusStation = in2Seg['IN2.13']['IN2.13.1']; }
				
				// IN2.14, champusService
				if (in2Seg['IN2.14']['IN2.14.1'].toString() != "") { in1[index].IN2[indexIN2].champusService = in2Seg['IN2.14']['IN2.14.1']; }
				
				// IN2.15, champusRankGrade
				if (in2Seg['IN2.15']['IN2.15.1'].toString() != "") { in1[index].IN2[indexIN2].champusRankGrade = in2Seg['IN2.15']['IN2.15.1']; }
				
				// IN2.16, champusStatus
				if (in2Seg['IN2.16']['IN2.16.1'].toString() != "") { in1[index].IN2[indexIN2].champusStatus = in2Seg['IN2.16']['IN2.16.1']; }
				
				// IN2.17, champusRetireDate
				if (in2Seg['IN2.17']['IN2.17.1'].toString() != "") { in1[index].IN2[indexIN2].champusRetireDate = in2Seg['IN2.17']['IN2.17.1']; }
				
				// IN2.18, champusNonAvailCertOnFile
				if (in2Seg['IN2.18']['IN2.18.1'].toString() != "") { in1[index].IN2[indexIN2].champusNonAvailCertOnFile = in2Seg['IN2.18']['IN2.18.1']; }
				
				// IN2.19, babyCoverage
				if (in2Seg['IN2.19']['IN2.19.1'].toString() != "") { in1[index].IN2[indexIN2].babyCoverage = in2Seg['IN2.19']['IN2.19.1']; }
				
				// IN2.20, combineBabyBill
				if (in2Seg['IN2.20']['IN2.20.1'].toString() != "") { in1[index].IN2[indexIN2].combineBabyBill = in2Seg['IN2.20']['IN2.20.1']; }
				
				// IN2.21, bloodDeductible
				if (in2Seg['IN2.21']['IN2.21.1'].toString() != "") { in1[index].IN2[indexIN2].bloodDeductible = in2Seg['IN2.21']['IN2.21.1']; }
				
				// IN2.22, specialCoverageApprovalName
				in1[index].IN2[indexIN2].specialCoverageApprovalName = [];
				for each (field in in2Seg['IN2.22']) {
					var block = {};
					if (field['IN2.22.1'].toString() != "") { block.lastName = field['IN2.22.1']; }
					if (field['IN2.22.2'].toString() != "") { block.firstName = field['IN2.22.2']; }
					if (field['IN2.22.3'].toString() != "") { block.middleInitOrName = field['IN2.22.3']; }
					if (field['IN2.22.4'].toString() != "") { block.suffix = field['IN2.22.4']; }
					if (field['IN2.22.5'].toString() != "") { block.prefix = field['IN2.22.5']; }
					if (field['IN2.22.6'].toString() != "") { block.degree = field['IN2.22.6']; }
					if (field['IN2.22.7'].toString() != "") { block.nameTypeCode = field['IN2.22.7']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].specialCoverageApprovalName.push(block);
					}	
				}
				if (in1[index].IN2[indexIN2].specialCoverageApprovalName.length == 0) {
					delete in1[index].IN2[indexIN2].specialCoverageApprovalName;
				}
				
				// IN2.23, specialCoverageApprovalTitle
				if (in2Seg['IN2.23']['IN2.23.1'].toString() != "") { in1[index].IN2[indexIN2].specialCoverageApprovalTitle = in2Seg['IN2.23']['IN2.23.1']; }
				
				// IN2.24, nonCoveredInsuranceCode
				in1[index].IN2[indexIN2].nonCoveredInsuranceCode = [];
				for each (field in in2Seg['IN2.24']) {
					if (field['IN2.24.1'].toString() != "") {
						in1[index].IN2[indexIN2].nonCoveredInsuranceCode.push(field['IN2.24.1']);
					}
				}
				if (in1[index].IN2[indexIN2].nonCoveredInsuranceCode.length ==0) {
					delete in1[index].IN2[indexIN2].nonCoveredInsuranceCode
				}

				// IN2.25, payorId
				in1[index].IN2[indexIN2].payorId = [];
				for each (field in in2Seg['IN2.25']) {
					var block = {};
					if (field['IN2.25.1'].toString() != "") { block.id = field['IN2.25.1']; }
					if (field['IN2.25.2'].toString() != "") { block.identifierCheckDigit = field['IN2.25.2']; }
					if (field['IN2.25.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.25.3']; }
					block.assigningAuthority = {};
					if (field['IN2.25.4']['IN2.25.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.25.4']['IN2.25.4.1']; }
					if (field['IN2.25.4']['IN2.25.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.25.4']['IN2.25.4.2']; }
					if (field['IN2.25.4']['IN2.25.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.25.4']['IN2.25.4.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.25.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.25.4']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.25.5'].toString() != "") { block.idTypeCode = field['IN2.25.5']; }
					block.assigningFacility = {};
					if (field['IN2.25.6']['IN2.25.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.25.6']['IN2.25.6.1']; }
					if (field['IN2.25.6']['IN2.25.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.25.6']['IN2.25.6.2']; }
					if (field['IN2.25.6']['IN2.25.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.25.6']['IN2.25.6.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.25.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.25.6']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].payorId.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].payorId.length == 0) {
					delete in1[index].IN2[indexIN2].payorId;
				}

				// IN2.26, payorSubscriberId
				in1[index].IN2[indexIN2].payorSubscriberId = [];
				for each (field in in2Seg['IN2.26']) {
					var block = {};
					if (field['IN2.26.1'].toString() != "") { block.id = field['IN2.26.1']; }
					if (field['IN2.26.2'].toString() != "") { block.identifierCheckDigit = field['IN2.26.2']; }
					if (field['IN2.26.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.26.3']; }
					block.assigningAuthority = {};
					if (field['IN2.26.4']['IN2.26.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.26.4']['IN2.26.4.1']; }
					if (field['IN2.26.4']['IN2.26.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.26.4']['IN2.26.4.2']; }
					if (field['IN2.26.4']['IN2.26.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.26.4']['IN2.26.4.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.26.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.26.4']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.26.5'].toString() != "") { block.idTypeCode = field['IN2.26.5']; }
					block.assigningFacility = {};
					if (field['IN2.26.6']['IN2.26.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.26.6']['IN2.26.6.1']; }
					if (field['IN2.26.6']['IN2.26.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.26.6']['IN2.26.6.2']; }
					if (field['IN2.26.6']['IN2.26.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.26.6']['IN2.26.6.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.26.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.26.6']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].payorSubscriberId.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].payorSubscriberId.length == 0) {
					delete in1[index].IN2[indexIN2].payorSubscriberId;
				}

				// IN2.27, eligibilitySource
				if (in2Seg['IN2.27']['IN2.27.1'].toString() != "") { in1[index].IN2[indexIN2].eligibilitySource = in2Seg['IN2.27']['IN2.27.1']; }
				
				// IN2.28, roomCoverageTypeAmount
				in1[index].IN2[indexIN2].roomCoverageTypeAmount = [];
				for each (field in in2Seg['IN2.28']) {
					var block = {};
					if (field['IN2.28.1'].toString() != "") { block.roomType =  field['IN2.28.1']; }
					if (field['IN2.28.2'].toString() != "") { block.amountType =  field['IN2.28.2']; }
					if (field['IN2.28.3'].toString() != "") { block.coverageAmount =  field['IN2.28.3']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].roomCoverageTypeAmount.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].roomCoverageTypeAmount.length == 0) {	
					delete in1[index].IN2[indexIN2].roomCoverageTypeAmount;
				}

				// IN2.29, policyTypeAmount
				in1[index].IN2[indexIN2].policyTypeAmount = [];
				for each (field in in2Seg['IN2.29']) {
					var block = {};
					if (field['IN2.29.1'].toString() != "") { block.policyType =  field['IN2.29.1']; }
					if (field['IN2.29.2'].toString() != "") { block.amountClass =  field['IN2.29.2']; }
					if (field['IN2.29.3'].toString() != "") { block.amount =  field['IN2.29.3']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].policyTypeAmount.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].policyTypeAmount.length == 0) {
					delete in1[index].IN2[indexIN2].policyTypeAmount;
				}
				// IN2.30, dailyDeductible
				in1[index].IN2[indexIN2].dailyDeductible = {};
				if(in2Seg['IN2.30']['IN2.30.1'].toString() != "") { in1[index].IN2[indexIN2].dailyDeductible.delayDays = in2Seg['IN2.30']['IN2.30.1']; }
				if(in2Seg['IN2.30']['IN2.30.2'].toString() != "") { in1[index].IN2[indexIN2].dailyDeductible.amount = in2Seg['IN2.30']['IN2.30.2']; }
				if(in2Seg['IN2.30']['IN2.30.3'].toString() != "") { in1[index].IN2[indexIN2].dailyDeductible.numberOfDays = in2Seg['IN2.30']['IN2.30.3']; }
				if (Object.keys(in1[index].IN2[indexIN2].dailyDeductible).length == 0) {
					delete in1[index].IN2[indexIN2].dailyDeductible;
				}

				// IN2.31, livingDependency
				if (in2Seg['IN2.31']['IN2.31.1'].toString() != "") { in1[index].IN2[indexIN2].livingDependency = in2Seg['IN2.31']['IN2.31.1']; }
				
				// IN2.32, ambulatoryStatus
				if (in2Seg['IN2.32']['IN2.32.1'].toString() != "") { in1[index].IN2[indexIN2].ambulatoryStatus = in2Seg['IN2.32']['IN2.32.1']; }
				
				// IN2.33, citizenship
				if (in2Seg['IN2.33']['IN2.33.1'].toString() != "") { in1[index].IN2[indexIN2].citizenship = in2Seg['IN2.33']['IN2.33.1']; }
				
				// IN2.34, primaryLanguage
				in1[index].IN2[indexIN2].primaryLanguage = {};
				if (in2Seg['IN2.34']['IN2.34.1'].toString() != "") { in1[index].IN2[indexIN2].primaryLanguage.id = in2Seg['IN2.34']['IN2.34.1']; }
				if (in2Seg['IN2.34']['IN2.34.2'].toString() != "") { in1[index].IN2[indexIN2].primaryLanguage.text = in2Seg['IN2.34']['IN2.34.2']; }
				if (in2Seg['IN2.34']['IN2.34.3'].toString() != "") { in1[index].IN2[indexIN2].primaryLanguage.codingSystem = in2Seg['IN2.34']['IN2.34.3']; }
				if (in2Seg['IN2.34']['IN2.34.4'].toString() != "") { in1[index].IN2[indexIN2].primaryLanguage.altId = in2Seg['IN2.34']['IN2.34.4']; }
				if (in2Seg['IN2.34']['IN2.34.5'].toString() != "") { in1[index].IN2[indexIN2].primaryLanguage.altText = in2Seg['IN2.34']['IN2.34.5']; }
				if (in2Seg['IN2.34']['IN2.34.6'].toString() != "") { in1[index].IN2[indexIN2].primaryLanguage.altCodingSystem = in2Seg['IN2.34']['IN2.34.6']; }
				if (Object.keys(in1[index].IN2[indexIN2].primaryLanguage).length == 0) {
					delete in1[index].IN2[indexIN2].primaryLanguage;
				}

				// IN2.35, livingArrangement
				if (in2Seg['IN2.35']['IN2.35.1'].toString() != "") { in1[index].IN2[indexIN2].livingArrangement = in2Seg['IN2.35']['IN2.35.1']; }
				
				// IN2.36, publicityIndicator
				in1[index].IN2[indexIN2].publicityIndicator = {};
				if (in2Seg['IN2.36']['IN2.36.1'].toString() != "") { in1[index].IN2[indexIN2].publicityIndicator.id = in2Seg['IN2.36']['IN2.36.1']; }
				if (in2Seg['IN2.36']['IN2.36.2'].toString() != "") { in1[index].IN2[indexIN2].publicityIndicator.text = in2Seg['IN2.36']['IN2.36.2']; }
				if (in2Seg['IN2.36']['IN2.36.3'].toString() != "") { in1[index].IN2[indexIN2].publicityIndicator.codingSystem = in2Seg['IN2.36']['IN2.36.3']; }
				if (in2Seg['IN2.36']['IN2.36.4'].toString() != "") { in1[index].IN2[indexIN2].publicityIndicator.altId = in2Seg['IN2.36']['IN2.36.4']; }
				if (in2Seg['IN2.36']['IN2.36.5'].toString() != "") { in1[index].IN2[indexIN2].publicityIndicator.altText = in2Seg['IN2.36']['IN2.36.5']; }
				if (in2Seg['IN2.36']['IN2.36.6'].toString() != "") { in1[index].IN2[indexIN2].publicityIndicator.altCodingSystem = in2Seg['IN2.36']['IN2.36.6']; }
				if (Object.keys(in1[index].IN2[indexIN2].publicityIndicator).length == 0) {
					delete in1[index].IN2[indexIN2].publicityIndicator;
				}

				// IN2.37, protectionIndicator
				if (in2Seg['IN2.37']['IN2.37.1'].toString() != "") { in1[index].IN2[indexIN2].protectionIndicator = in2Seg['IN2.37']['IN2.37.1']; }
				
				// IN2.38, studentIndicator
				if (in2Seg['IN2.38']['IN2.38.1'].toString() != "") { in1[index].IN2[indexIN2].studentIndicator = in2Seg['IN2.38']['IN2.38.1']; }
				
				// IN2.39, religion
				if (in2Seg['IN2.39']['IN2.39.1'].toString() != "") { in1[index].IN2[indexIN2].religion = in2Seg['IN2.39']['IN2.39.1']; }
				
				// IN2.40, motherMaidenName
				in1[index].IN2[indexIN2].motherMaidenName = {};
				if (in2Seg['IN2.40']['IN2.40.1'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.lastName = in2Seg['IN2.40']['IN2.40.1']; }
				if (in2Seg['IN2.40']['IN2.40.2'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.firstName = in2Seg['IN2.40']['IN2.40.2']; }
				if (in2Seg['IN2.40']['IN2.40.3'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.middleInitOrName = in2Seg['IN2.40']['IN2.40.3']; }
				if (in2Seg['IN2.40']['IN2.40.4'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.suffix = in2Seg['IN2.40']['IN2.40.4']; }
				if (in2Seg['IN2.40']['IN2.40.5'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.prefix = in2Seg['IN2.40']['IN2.40.5']; }
				if (in2Seg['IN2.40']['IN2.40.6'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.degree = in2Seg['IN2.40']['IN2.40.6']; }
				if (in2Seg['IN2.40']['IN2.40.7'].toString() != "") { in1[index].IN2[indexIN2].motherMaidenName.nameTypeCode = in2Seg['IN2.40']['IN2.40.7']; }
				if (Object.keys(in1[index].IN2[indexIN2].motherMaidenName).length == 0) {
					delete in1[index].IN2[indexIN2].motherMaidenName;
				}
				
				// IN2.41, nationality
				in1[index].IN2[indexIN2].nationality = {};
				if (in2Seg['IN2.41']['IN2.41.1'].toString() != "") { in1[index].IN2[indexIN2].nationality.id = in2Seg['IN2.41']['IN2.41.1']; }
				if (in2Seg['IN2.41']['IN2.41.2'].toString() != "") { in1[index].IN2[indexIN2].nationality.text = in2Seg['IN2.41']['IN2.41.2']; }
				if (in2Seg['IN2.41']['IN2.41.3'].toString() != "") { in1[index].IN2[indexIN2].nationality.codingSystem = in2Seg['IN2.41']['IN2.41.3']; }
				if (in2Seg['IN2.41']['IN2.41.4'].toString() != "") { in1[index].IN2[indexIN2].nationality.altId = in2Seg['IN2.41']['IN2.41.4']; }
				if (in2Seg['IN2.41']['IN2.41.5'].toString() != "") { in1[index].IN2[indexIN2].nationality.altText = in2Seg['IN2.41']['IN2.41.5']; }
				if (in2Seg['IN2.41']['IN2.41.6'].toString() != "") { in1[index].IN2[indexIN2].nationality.altCodingSystem = in2Seg['IN2.41']['IN2.41.6']; }
				if (Object.keys(in1[index].IN2[indexIN2].nationality).length == 0) {
					delete in1[index].IN2[indexIN2].nationality;
				}

				// IN2.42, ethnicGroup
				if (in2Seg['IN2.42']['IN2.42.1'].toString() != "") { in1[index].IN2[indexIN2].ethnicGroup = in2Seg['IN2.42']['IN2.42.1']; }
				
				// IN2.43, maritalStatus
				in1[index].IN2[indexIN2].maritalStatus = [];
				for each (field in in2Seg['IN2.43']) {
					if (field['IN2.43.1'].toString() != "") {
						in1[index].IN2[indexIN2].maritalStatus.push(field['IN2.43.1']);
					}
				}
				if (in1[index].IN2[indexIN2].maritalStatus.length ==0) {
					delete in1[index].IN2[indexIN2].maritalStatus
				}

				// IN2.44, insuredEmploymentStartDate
				if (in2Seg['IN2.44']['IN2.44.1'].toString() != "") { in1[index].IN2[indexIN2].insuredEmploymentStartDate = in2Seg['IN2.44']['IN2.44.1']; }
				
				// IN2.45, insuredEmploymentStopDate
				if (in2Seg['IN2.45']['IN2.45.1'].toString() != "") { in1[index].IN2[indexIN2].insuredEmploymentStopDate = in2Seg['IN2.45']['IN2.45.1']; }
				
				// IN2.46, jobTitle
				if (in2Seg['IN2.46']['IN2.46.1'].toString() != "") { in1[index].IN2[indexIN2].jobTitle = in2Seg['IN2.46']['IN2.46.1']; }
				
				// IN2.47, jobCodeClass
				in1[index].IN2[indexIN2].jobCodeClass = {};
				if (in2Seg['IN2.47']['IN2.47.1'].toString() != "") { in1[index].IN2[indexIN2].jobCodeClass.jobCode = in2Seg['IN2.47']['IN2.47.1']; }
				if (in2Seg['IN2.47']['IN2.47.2'].toString() != "") { in1[index].IN2[indexIN2].jobCodeClass.jobClass = in2Seg['IN2.47']['IN2.47.2']; }
				if (Object.keys(in1[index].IN2[indexIN2].jobCodeClass).length == 0) {
					delete in1[index].IN2[indexIN2].jobCodeClass;
				}

				// IN2.48, jobStatus
				if (in2Seg['IN2.48']['IN2.48.1'].toString() != "") { in1[index].IN2[indexIN2].jobStatus = in2Seg['IN2.48']['IN2.48.1']; }
				
				// IN2.49, employerContactPersonName
				in1[index].IN2[indexIN2].employerContactPersonName = [];
				for each (field in in2Seg['IN2.49']) {
					var block = {};
					if (field['IN2.49.1'].toString() != "") { block.lastName = field['IN2.49.1']; }
					if (field['IN2.49.2'].toString() != "") { block.firstName = field['IN2.49.2']; }
					if (field['IN2.49.3'].toString() != "") { block.middleInitOrName = field['IN2.49.3']; }
					if (field['IN2.49.4'].toString() != "") { block.suffix = field['IN2.49.4']; }
					if (field['IN2.49.5'].toString() != "") { block.prefix = field['IN2.49.5']; }
					if (field['IN2.49.6'].toString() != "") { block.degree = field['IN2.49.6']; }
					if (field['IN2.49.7'].toString() != "") { block.nameTypeCode = field['IN2.49.7']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].employerContactPersonName.push(block);
					}	
				}
				if (in1[index].IN2[indexIN2].employerContactPersonName.length == 0) {
					delete in1[index].IN2[indexIN2].employerContactPersonName;
				}
				
				// IN2.50, employerContactPersonPhone
				in1[index].IN2[indexIN2].employerContactPersonPhone = [];
				for each (field in in2Seg['IN2.50']) {
					var block = {};
					if (field['IN2.50.1'].toString() != "") { block.number = field['IN2.50.1']; }
					if (field['IN2.50.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.50.2']; }
					if (field['IN2.50.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.50.3']; }
					if (field['IN2.50.4'].toString() != "") { block.emailAddress = field['IN2.50.4']; }
					if (field['IN2.50.5'].toString() != "") { block.countryCode = field['IN2.50.5']; }
					if (field['IN2.50.6'].toString() != "") { block.areaCityCode = field['IN2.50.6']; }
					if (field['IN2.50.7'].toString() != "") { block.phoneNumber = field['IN2.50.7']; }
					if (field['IN2.50.8'].toString() != "") { block.extension = field['IN2.50.8']; }
					if (field['IN2.50.9'].toString() != "") { block.text = field['IN2.50.9']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].employerContactPersonPhone.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].employerContactPersonPhone.length == 0) {
					delete in1[index].IN2[indexIN2].employerContactPersonPhone;
				}

				// IN2.51, employerContactReason
				if (in2Seg['IN2.51']['IN2.51.1'].toString() != "") { in1[index].IN2[indexIN2].employerContactReason = in2Seg['IN2.51']['IN2.51.1']; }
				
				// IN2.52, insuredsContactPersonName
				in1[index].IN2[indexIN2].insuredsContactPersonName = [];
				for each (field in in2Seg['IN2.52']) {
					var block = {};
					if (field['IN2.52.1'].toString() != "") { block.lastName = field['IN2.52.1']; }
					if (field['IN2.52.2'].toString() != "") { block.firstName = field['IN2.52.2']; }
					if (field['IN2.52.3'].toString() != "") { block.middleInitOrName = field['IN2.52.3']; }
					if (field['IN2.52.4'].toString() != "") { block.suffix = field['IN2.52.4']; }
					if (field['IN2.52.5'].toString() != "") { block.prefix = field['IN2.52.5']; }
					if (field['IN2.52.6'].toString() != "") { block.degree = field['IN2.52.6']; }
					if (field['IN2.52.7'].toString() != "") { block.nameTypeCode = field['IN2.52.7']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredsContactPersonName.push(block);
					}	
				}
				if (in1[index].IN2[indexIN2].insuredsContactPersonName.length == 0) {
					delete in1[index].IN2[indexIN2].insuredsContactPersonName;
				}
				
				// IN2.53, insuredsContactPersonPhone
				in1[index].IN2[indexIN2].insuredsContactPersonPhone = [];
				for each (field in in2Seg['IN2.53']) {
					var block = {};
					if (field['IN2.53.1'].toString() != "") { block.number = field['IN2.53.1']; }
					if (field['IN2.53.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.53.2']; }
					if (field['IN2.53.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.53.3']; }
					if (field['IN2.53.4'].toString() != "") { block.emailAddress = field['IN2.53.4']; }
					if (field['IN2.53.5'].toString() != "") { block.countryCode = field['IN2.53.5']; }
					if (field['IN2.53.6'].toString() != "") { block.areaCityCode = field['IN2.53.6']; }
					if (field['IN2.53.7'].toString() != "") { block.phoneNumber = field['IN2.53.7']; }
					if (field['IN2.53.8'].toString() != "") { block.extension = field['IN2.53.8']; }
					if (field['IN2.53.9'].toString() != "") { block.text = field['IN2.53.9']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredsContactPersonPhone.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].insuredsContactPersonPhone.length == 0) {
					delete in1[index].IN2[indexIN2].insuredsContactPersonPhone;
				}

				// IN2.54, insuredsContactReason
				in1[index].IN2[indexIN2].insuredsContactReason = [];
				for each (field in in2Seg['IN2.54']) {
					if (field['IN2.54.1'].toString() != "") {
						in1[index].IN2[indexIN2].insuredsContactReason.push(field['IN2.54.1']);
					}
				}
				if (in1[index].IN2[indexIN2].insuredsContactReason.length == 0) {
					delete in1[index].IN2[indexIN2].insuredsContactReason
				}

				// IN2.55, relationshipToPersonStartDate
				if (in2Seg['IN2.55']['IN2.55.1'].toString() != "") { in1[index].IN2[indexIN2].relationshipToPersonStartDate = in2Seg['IN2.55']['IN2.55.1']; }
				
				// IN2.56, relationshipToPersonStopDate
				in1[index].IN2[indexIN2].relationshipToPersonStopDate = [];
				for each (field in in2Seg['IN2.56']) {
					if (field['IN2.56.1'].toString() != "") {
						in1[index].IN2[indexIN2].relationshipToPersonStopDate.push(field['IN2.56.1']);
					}
				}
				if (in1[index].IN2[indexIN2].relationshipToPersonStopDate.length == 0) {
					delete in1[index].IN2[indexIN2].relationshipToPersonStopDate
				}

				// IN2.57, insuranceCoContactReason
				if (in2Seg['IN2.57']['IN2.57.1'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactReason = in2Seg['IN2.57']['IN2.57.1']; }
				
				// IN2.58, insuranceCoContactPhone
				in1[index].IN2[indexIN2].insuranceCoContactPhone = {};
				if (in2Seg['IN2.58']['IN2.58.1'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.number = in2Seg['IN2.58']['IN2.58.1']; }
				if (in2Seg['IN2.58']['IN2.58.2'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.telecommunicationUseCode = in2Seg['IN2.58']['IN2.58.2']; }
				if (in2Seg['IN2.58']['IN2.58.3'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.telecommunicationEquipmentType = in2Seg['IN2.58']['IN2.58.3']; }
				if (in2Seg['IN2.58']['IN2.58.4'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.emailAddress = in2Seg['IN2.58']['IN2.58.4']; }
				if (in2Seg['IN2.58']['IN2.58.5'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.countryCode = in2Seg['IN2.58']['IN2.58.5']; }
				if (in2Seg['IN2.58']['IN2.58.6'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.areaCityCode = in2Seg['IN2.58']['IN2.58.6']; }
				if (in2Seg['IN2.58']['IN2.58.7'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.phoneNumber = in2Seg['IN2.58']['IN2.58.7']; }
				if (in2Seg['IN2.58']['IN2.58.8'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.extension = in2Seg['IN2.58']['IN2.58.8']; }
				if (in2Seg['IN2.58']['IN2.58.9'].toString() != "") { in1[index].IN2[indexIN2].insuranceCoContactPhone.text = in2Seg['IN2.58']['IN2.58.9']; }
				if (Object.keys(in1[index].IN2[indexIN2].insuranceCoContactPhone).length == 0) {
					delete in1[index].IN2[indexIN2].insuranceCoContactPhone;
				}

				// IN2.59, policyScope
				if (in2Seg['IN2.59']['IN2.59.1'].toString() != "") { in1[index].IN2[indexIN2].policyScope = in2Seg['IN2.59']['IN2.59.1']; }
				
				// IN2.60, policySource
				if (in2Seg['IN2.60']['IN2.60.1'].toString() != "") { in1[index].IN2[indexIN2].policySource = in2Seg['IN2.60']['IN2.60.1']; }
				
				// IN2.61, patientMemberNumber
				in1[index].IN2[indexIN2].patientMemberNumber = [];
				for each (field in in2Seg['IN2.61']) {
					var block = {};
					if (field['IN2.61.1'].toString() != "") { block.id = field['IN2.61.1']; }
					if (field['IN2.61.2'].toString() != "") { block.identifierCheckDigit = field['IN2.61.2']; }
					if (field['IN2.61.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.61.3']; }
					block.assigningAuthority = {};
					if (field['IN2.61.4']['IN2.61.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.61.4']['IN2.61.4.1']; }
					if (field['IN2.61.4']['IN2.61.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.61.4']['IN2.61.4.2']; }
					if (field['IN2.61.4']['IN2.61.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.61.4']['IN2.61.4.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.61.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.61.4']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.61.5'].toString() != "") { block.idTypeCode = field['IN2.61.5']; }
					block.assigningFacility = {};
					if (field['IN2.61.6']['IN2.61.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.61.6']['IN2.61.6.1']; }
					if (field['IN2.61.6']['IN2.61.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.61.6']['IN2.61.6.2']; }
					if (field['IN2.61.6']['IN2.61.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.61.6']['IN2.61.6.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.61.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.61.6']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].patientMemberNumber.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].patientMemberNumber.length == 0) {
					delete in1[index].IN2[indexIN2].patientMemberNumber;
				}

				// IN2.62, guarantorRelationshipToInsured
				if (in2Seg['IN2.62']['IN2.62.1'].toString() != "") { in1[index].IN2[indexIN2].guarantorRelationshipToInsured = in2Seg['IN2.62']['IN2.62.1']; }
				
				// IN2.63, insuredHomePhone
				in1[index].IN2[indexIN2].insuredHomePhone = [];
				for each (field in in2Seg['IN2.63']) {
					var block = {};
					if (field['IN2.63.1'].toString() != "") { block.number = field['IN2.63.1']; }
					if (field['IN2.63.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.63.2']; }
					if (field['IN2.63.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.63.3']; }
					if (field['IN2.63.4'].toString() != "") { block.emailAddress = field['IN2.63.4']; }
					if (field['IN2.63.5'].toString() != "") { block.countryCode = field['IN2.63.5']; }
					if (field['IN2.63.6'].toString() != "") { block.areaCityCode = field['IN2.63.6']; }
					if (field['IN2.63.7'].toString() != "") { block.phoneNumber = field['IN2.63.7']; }
					if (field['IN2.63.8'].toString() != "") { block.extension = field['IN2.63.8']; }
					if (field['IN2.63.9'].toString() != "") { block.text = field['IN2.63.9']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredHomePhone.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].insuredHomePhone.length == 0) {
					delete in1[index].IN2[indexIN2].insuredHomePhone;
				}

				// IN2.64, insuredEmployerPhone
				in1[index].IN2[indexIN2].insuredEmployerPhone = [];
				for each (field in in2Seg['IN2.64']) {
					var block = {};
					if (field['IN2.64.1'].toString() != "") { block.number = field['IN2.64.1']; }
					if (field['IN2.64.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.64.2']; }
					if (field['IN2.64.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.64.3']; }
					if (field['IN2.64.4'].toString() != "") { block.emailAddress = field['IN2.64.4']; }
					if (field['IN2.64.5'].toString() != "") { block.countryCode = field['IN2.64.5']; }
					if (field['IN2.64.6'].toString() != "") { block.areaCityCode = field['IN2.64.6']; }
					if (field['IN2.64.7'].toString() != "") { block.phoneNumber = field['IN2.64.7']; }
					if (field['IN2.64.8'].toString() != "") { block.extension = field['IN2.64.8']; }
					if (field['IN2.64.9'].toString() != "") { block.text = field['IN2.64.9']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredEmployerPhone.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].insuredEmployerPhone.length == 0) {
					delete in1[index].IN2[indexIN2].insuredEmployerPhone;
				}

				// IN2.65, militaryHandicappedProgram
				in1[index].IN2[indexIN2].militaryHandicappedProgram = {};
				if (in2Seg['IN2.65']['IN2.65.1'].toString() != "") { in1[index].IN2[indexIN2].militaryHandicappedProgram.id = in2Seg['IN2.65']['IN2.65.1']; }
				if (in2Seg['IN2.65']['IN2.65.2'].toString() != "") { in1[index].IN2[indexIN2].militaryHandicappedProgram.text = in2Seg['IN2.65']['IN2.65.2']; }
				if (in2Seg['IN2.65']['IN2.65.3'].toString() != "") { in1[index].IN2[indexIN2].militaryHandicappedProgram.codingSystem = in2Seg['IN2.65']['IN2.65.3']; }
				if (in2Seg['IN2.65']['IN2.65.4'].toString() != "") { in1[index].IN2[indexIN2].militaryHandicappedProgram.altId = in2Seg['IN2.65']['IN2.65.4']; }
				if (in2Seg['IN2.65']['IN2.65.5'].toString() != "") { in1[index].IN2[indexIN2].militaryHandicappedProgram.altText = in2Seg['IN2.65']['IN2.65.5']; }
				if (in2Seg['IN2.65']['IN2.65.6'].toString() != "") { in1[index].IN2[indexIN2].militaryHandicappedProgram.altCodingSystem = in2Seg['IN2.65']['IN2.65.6']; }
				if (Object.keys(in1[index].IN2[indexIN2].militaryHandicappedProgram).length == 0) {
					delete in1[index].IN2[indexIN2].militaryHandicappedProgram;
				}

				// IN2.66, suspendFlag
				if (in2Seg['IN2.66']['IN2.66.1'].toString() != "") { in1[index].IN2[indexIN2].suspendFlag = in2Seg['IN2.66']['IN2.66.1']; }
				
				// IN2.67, copayLimitFlag
				if (in2Seg['IN2.67']['IN2.67.1'].toString() != "") { in1[index].IN2[indexIN2].copayLimitFlag = in2Seg['IN2.67']['IN2.67.1']; }
				
				// IN2.68, stoplossLimitFlag
				if (in2Seg['IN2.68']['IN2.68.1'].toString() != "") { in1[index].IN2[indexIN2].stoplossLimitFlag = in2Seg['IN2.68']['IN2.68.1']; }
				
				// IN2.69, insuredOrganizationNameAndID
				in1[index].IN2[indexIN2].insuredOrganizationNameAndID = [];
				for each (field in in2Seg['IN2.69']) {
					var block = {};
					if (field['IN2.69.1'].toString() != "") { block.organizationName = field['IN2.69.1']; }
					if (field['IN2.69.2'].toString() != "") { block.organizationNameTypeCode = field['IN2.69.2']; }
					if (field['IN2.69.3'].toString() != "") { block.idNumber = field['IN2.69.3']; }
					if (field['IN2.69.4'].toString() != "") { block.identifierCheckDigit = field['IN2.69.4']; }
					if (field['IN2.69.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.69.5']; }
					block.assigningAuthority = {};
					if (field['IN2.69.6']['IN2.69.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.69.6']['IN2.69.6.1']; }
					if (field['IN2.69.6']['IN2.69.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.69.6']['IN2.69.6.2']; }
					if (field['IN2.69.6']['IN2.69.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.69.6']['IN2.69.6.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.69.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.69.6']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.69.7'].toString() != "") { block.idTypeCode = field['IN2.69.7']; }
					block.assigningFacility = {};
					if (field['IN2.69.8']['IN2.69.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.69.8']['IN2.69.8.1']; }
					if (field['IN2.69.8']['IN2.69.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.69.8']['IN2.69.8.2']; }
					if (field['IN2.69.8']['IN2.69.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.69.8']['IN2.69.8.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.69.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.69.8']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredOrganizationNameAndID.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].insuredOrganizationNameAndID.length == 0) {
					delete in1[index].IN2[indexIN2].insuredOrganizationNameAndID;
				}

				// IN2.70, insuredEmployerOrganizationNameAndID
				in1[index].IN2[indexIN2].insuredEmployerOrganizationNameAndID = [];
				for each (field in in2Seg['IN2.70']) {
					var block = {};
					if (field['IN2.70.1'].toString() != "") { block.organizationName = field['IN2.70.1']; }
					if (field['IN2.70.2'].toString() != "") { block.organizationNameTypeCode = field['IN2.70.2']; }
					if (field['IN2.70.3'].toString() != "") { block.idNumber = field['IN2.70.3']; }
					if (field['IN2.70.4'].toString() != "") { block.identifierCheckDigit = field['IN2.70.4']; }
					if (field['IN2.70.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.70.5']; }
					block.assigningAuthority = {};
					if (field['IN2.70.6']['IN2.70.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.70.6']['IN2.70.6.1']; }
					if (field['IN2.70.6']['IN2.70.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.70.6']['IN2.70.6.2']; }
					if (field['IN2.70.6']['IN2.70.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.70.6']['IN2.70.6.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						if (field['IN2.70.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.70.6']; }
						else delete block.assigningAuthority;
					}
					if (field['IN2.70.7'].toString() != "") { block.idTypeCode = field['IN2.70.7']; }
					block.assigningFacility = {};
					if (field['IN2.70.8']['IN2.70.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.70.8']['IN2.70.8.1']; }
					if (field['IN2.70.8']['IN2.70.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.70.8']['IN2.70.8.2']; }
					if (field['IN2.70.8']['IN2.70.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.70.8']['IN2.70.8.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						if (field['IN2.70.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.70.8']; }
						else delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						in1[index].IN2[indexIN2].insuredEmployerOrganizationNameAndID.push(block);
					}
				}
				if (in1[index].IN2[indexIN2].insuredEmployerOrganizationNameAndID.length == 0) {
					delete in1[index].IN2[indexIN2].insuredEmployerOrganizationNameAndID;
				}
				
				// IN2.71, race
				if (in2Seg['IN2.71']['IN2.71.1'].toString() != "") { in1[index].IN2[indexIN2].race = in2Seg['IN2.71']['IN2.71.1']; }
				
				// IN2.72, hcfaPatientRelationshipToInsured
				in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured = {};
				if (in2Seg['IN2.72']['IN2.72.1'].toString() != "") { in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured.id = in2Seg['IN2.72']['IN2.72.1']; }
				if (in2Seg['IN2.72']['IN2.72.2'].toString() != "") { in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured.text = in2Seg['IN2.72']['IN2.72.2']; }
				if (in2Seg['IN2.72']['IN2.72.3'].toString() != "") { in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured.codingSystem = in2Seg['IN2.72']['IN2.72.3']; }
				if (in2Seg['IN2.72']['IN2.72.4'].toString() != "") { in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured.altId = in2Seg['IN2.72']['IN2.72.4']; }
				if (in2Seg['IN2.72']['IN2.72.5'].toString() != "") { in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured.altText = in2Seg['IN2.72']['IN2.72.5']; }
				if (in2Seg['IN2.72']['IN2.72.6'].toString() != "") { in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured.altCodingSystem = in2Seg['IN2.72']['IN2.72.6']; }
				if (Object.keys(in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured).length == 0) {
					delete in1[index].IN2[indexIN2].hcfaPatientRelationshipToInsured;
				}

				// clean up IN2 and increment index
				if (Object.keys(in1[index].IN2[indexIN2]).length == 0) {
					delete in1[index].IN2[indexIN2];
				} else {
					indexIN2++;
				}
			}

			// Clean up the IN2 object if it's empty
			if (in1[index].IN2[0] == null){
				delete in1[index].IN2;
			}
		}

		// IN3 (IN1)
		var in3Group = getSegmentsAfter(msg,seg,'IN3',true);
		if (in3Group.length > 0 && in1) {
			in1[index].in3 = [];
			var indexIN3 = 0;
			for each (in3Seg in in3Group) {
				in1[index].in3[indexIN3] = {};

				// IN3.1, setID
				if (in3Seg['IN3.1']['IN3.1.1'].toString() != "") { in1[index].IN3[indexIN3].setID = in3Seg['IN3.1']['IN3.1.1']; }

				// IN3.2, certificationNumber
				in1[index].IN3[indexIN3].certificationNumber = {};
				if (in3Seg['IN3.2']['IN3.2.1'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.id = in3Seg['IN3.2']['IN3.2.1']; }
				if (in3Seg['IN3.2']['IN3.2.2'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.identifierCheckDigit = in3Seg['IN3.2']['IN3.2.2']; }
				if (in3Seg['IN3.2']['IN3.2.3'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.codeIdentifyingCheckDigitScheme = in3Seg['IN3.2']['IN3.2.3']; }
				in1[index].IN3[indexIN3].certificationNumber.assigningAuthority = {};
				if (in3Seg['IN3.2']['IN3.2.4']['IN3.2.4.1'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningAuthority.namespaceId = in3Seg['IN3.2']['IN3.2.4']['IN3.2.4.1']; }
				if (in3Seg['IN3.2']['IN3.2.4']['IN3.2.4.2'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningAuthority.universalId = in3Seg['IN3.2']['IN3.2.4']['IN3.2.4.2']; }
				if (in3Seg['IN3.2']['IN3.2.4']['IN3.2.4.3'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningAuthority.universalIdType = in3Seg['IN3.2']['IN3.2.4']['IN3.2.4.3']; }
				if (Object.keys(in1[index].IN3[indexIN3].certificationNumber.assigningAuthority).length == 0) {
					if (in3Seg['IN3.2']['IN3.2.4'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningAuthority.namespaceId = in3Seg['IN3.2']['IN3.2.4']; }
					else delete in1[index].IN3[indexIN3].certificationNumber.assigningAuthority;
				}
				if (in3Seg['IN3.2']['IN3.2.5'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.idTypeCode = in3Seg['IN3.2']['IN3.2.5']; }
				in1[index].IN3[indexIN3].certificationNumber.assigningFacility = {};
				if (in3Seg['IN3.2']['IN3.2.6']['IN3.2.6.1'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningFacility.namespaceId = in3Seg['IN3.2']['IN3.2.6']['IN3.2.6.1']; }
				if (in3Seg['IN3.2']['IN3.2.6']['IN3.2.6.2'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningFacility.universalId = in3Seg['IN3.2']['IN3.2.6']['IN3.2.6.2']; }
				if (in3Seg['IN3.2']['IN3.2.6']['IN3.2.6.3'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningFacility.universalIdType = in3Seg['IN3.2']['IN3.2.6']['IN3.2.6.3']; }
				if (Object.keys(in1[index].IN3[indexIN3].certificationNumber.assigningFacility).length == 0) {
					if (in3Seg['IN3.2']['IN3.2.6'].toString() != "") { in1[index].IN3[indexIN3].certificationNumber.assigningFacility.namespaceId = in3Seg['IN3.2']['IN3.2.6']; }
					else delete in1[index].IN3[indexIN3].certificationNumber.assigningFacility;
				}
				if (Object.keys(in1[index].IN3[indexIN3].certificationNumber).length == 0) {
					delete in1[index].IN3[indexIN3].certificationNumber;
				}

				// IN3.3, certifiedBy
				in1[index].IN3[indexIN3].certifiedBy = [];
				for each (field in in3Seg['IN3.3']) {
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
						in1[index].IN3[indexIN3].certifiedBy.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].certifiedBy.length == 0) {
					delete in1[index].IN3[indexIN3].certifiedBy;
				}

				// IN3.4, certificationRequired
				if (in3Seg['IN3.4']['IN3.4.1'].toString() != "") { in1[index].IN3[indexIN3].certificationRequired = in3Seg['IN3.4']['IN3.4.1']; }

				// IN3.5, penalty
				in1[index].IN3[indexIN3].penalty = {};
				if (in3Seg['IN3.5']['IN3.5.1'].toString() != "") { in1[index].IN3[indexIN3].penalty.penaltyType = in3Seg['IN3.5']['IN3.5.1']; }
				if (in3Seg['IN3.5']['IN3.5.2'].toString() != "") { in1[index].IN3[indexIN3].penalty.penaltyCode = in3Seg['IN3.5']['IN3.5.2']; }
				if (Object.keys(in1[index].IN3[indexIN3].penalty).length > 0) {
					delete in1[index].IN3[indexIN3].penalty;
				}

				// IN3.6, certificationDateTime
				if (in3Seg['IN3.6']['IN3.6.1'].toString() != "") { in1[index].IN3[indexIN3].certificationDateTime = in3Seg['IN3.6']['IN3.6.1']; }

				// IN3.7, certificationModifyDateTime
				if (in3Seg['IN3.7']['IN3.7.1'].toString() != "") { in1[index].IN3[indexIN3].certificationModifyDateTime = in3Seg['IN3.7']['IN3.7.1']; }

				// IN3.8, operator
				in1[index].IN3[indexIN3].operator = [];
				for each (field in in3Seg['IN3.8']) {
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
						in1[index].IN3[indexIN3].operator.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].operator.length == 0) {
					delete in1[index].IN3[indexIN3].operator;
				}

				// IN3.9, certificationBeginDate
				if (in3Seg['IN3.9']['IN3.9.1'].toString() != "") { in1[index].IN3[indexIN3].certificationBeginDate = in3Seg['IN3.9']['IN3.9.1']; }

				// IN3.90, certificationEndDate
				if (in3Seg['IN3.10']['IN3.10.1'].toString() != "") { in1[index].IN3[indexIN3].certificationEndDate = in3Seg['IN3.10']['IN3.10.1']; }

				// IN3.11, days
				in1[index].IN3[indexIN3].days = {};
				if (in3Seg['IN3.11']['IN3.11.1'].toString() != "") { in1[index].IN3[indexIN3].days.dayType = in3Seg['IN3.11']['IN3.11.1']; }
				if (in3Seg['IN3.11']['IN3.11.2'].toString() != "") { in1[index].IN3[indexIN3].days.numberOfDays = in3Seg['IN3.11']['IN3.11.2']; }
				if (Object.keys(in1[index].IN3[indexIN3].days).length > 0) {
					delete in1[index].IN3[indexIN3].days;
				}

				// IN3.12, nonConcurCodeDescription
				in1[index].IN3[indexIN3].nonConcurCodeDescription = {};
				if (in3Seg['IN3.12']['IN3.12.1'].toString() != "") { in1[index].IN3[indexIN3].nonConcurCodeDescription.id = in3Seg['IN3.12']['IN3.12.1']; }
				if (in3Seg['IN3.12']['IN3.12.2'].toString() != "") { in1[index].IN3[indexIN3].nonConcurCodeDescription.namespaceId = in3Seg['IN3.12']['IN3.12.2']; }
				if (in3Seg['IN3.12']['IN3.12.3'].toString() != "") { in1[index].IN3[indexIN3].nonConcurCodeDescription.universalId = in3Seg['IN3.12']['IN3.12.3']; }
				if (in3Seg['IN3.12']['IN3.12.4'].toString() != "") { in1[index].IN3[indexIN3].nonConcurCodeDescription.unniveralIdType = in3Seg['IN3.12']['IN3.12.4']; }
				if (Object.keys(in1[index].IN3[indexIN3].nonConcurCodeDescription).length == 0) {
					delete in1[index].IN3[indexIN3].nonConcurCodeDescription;
				}

				// IN3.13, nonConcurEffectiveDateTime
				if (in3Seg['IN3.13']['IN3.13.1'].toString() != "") { in1[index].IN3[indexIN3].nonConcurEffectiveDateTime = in3Seg['IN3.13']['IN3.13.1']; }

				// IN3.14, physicianReviewer
				in1[index].IN3[indexIN3].physicianReviewer = [];
				for each (field in in3Seg['IN3.14']) {
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
						in1[index].IN3[indexIN3].physicianReviewer.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].physicianReviewer.length == 0) {
					delete in1[index].IN3[indexIN3].physicianReviewer;
				}
				// IN3.15, certificationContact
				if (in3Seg['IN3.15']['IN3.15.1'].toString() != "") { in1[index].IN3[indexIN3].certificationContact = in3Seg['IN3.15']['IN3.15.1']; }

				// IN3.16, certificationContactPhoneNumber
				in1[index].IN3[indexIN3].certificationContactPhoneNumber = [];
				for each (field in in3Seg['IN3.16']) {
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
						in1[index].IN3[indexIN3].certificationContactPhoneNumber.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].certificationContactPhoneNumber.length == 0) {
					delete in1[index].IN3[indexIN3].certificationContactPhoneNumber;
				}

				// IN3.17, appealReason
				in1[index].IN3[indexIN3].appealReason = {};
				if (in3Seg['IN3.17']['IN3.17.1'].toString() != "") { in1[index].IN3[indexIN3].appealReason.id = in3Seg['IN3.17']['IN3.17.1']; }
				if (in3Seg['IN3.17']['IN3.17.2'].toString() != "") { in1[index].IN3[indexIN3].appealReason.namespaceId = in3Seg['IN3.17']['IN3.17.2']; }
				if (in3Seg['IN3.17']['IN3.17.3'].toString() != "") { in1[index].IN3[indexIN3].appealReason.universalId = in3Seg['IN3.17']['IN3.17.3']; }
				if (in3Seg['IN3.17']['IN3.17.4'].toString() != "") { in1[index].IN3[indexIN3].appealReason.unniveralIdType = in3Seg['IN3.17']['IN3.17.4']; }
				if (Object.keys(in1[index].IN3[indexIN3].appealReason).length == 0) {
					delete in1[index].IN3[indexIN3].appealReason;
				}

				// IN3.18, certificationAgency
				in1[index].IN3[indexIN3].certificationAgency = {};
				if (in3Seg['IN3.18']['IN3.18.1'].toString() != "") { in1[index].IN3[indexIN3].certificationAgency.id = in3Seg['IN3.18']['IN3.18.1']; }
				if (in3Seg['IN3.18']['IN3.18.2'].toString() != "") { in1[index].IN3[indexIN3].certificationAgency.namespaceId = in3Seg['IN3.18']['IN3.18.2']; }
				if (in3Seg['IN3.18']['IN3.18.3'].toString() != "") { in1[index].IN3[indexIN3].certificationAgency.universalId = in3Seg['IN3.18']['IN3.18.3']; }
				if (in3Seg['IN3.18']['IN3.18.4'].toString() != "") { in1[index].IN3[indexIN3].certificationAgency.unniveralIdType = in3Seg['IN3.18']['IN3.18.4']; }
				if (Object.keys(in1[index].IN3[indexIN3].certificationAgency).length == 0) {
					delete in1[index].IN3[indexIN3].certificationAgency;
				}

				// IN3.19, certificationAgencyPhoneNumber
				in1[index].IN3[indexIN3].certificationAgencyPhoneNumber = [];
				for each (field in in3Seg['IN3.19']) {
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
						in1[index].IN3[indexIN3].certificationAgencyPhoneNumber.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].certificationAgencyPhoneNumber.length == 0) {
					delete in1[index].IN3[indexIN3].certificationAgencyPhoneNumber;
				}

				// IN3.20, preCertificationReqWindow
				in1[index].IN3[indexIN3].preCertificationReqWindow = [];
				for each (field in in3Seg['IN3.20']) {
					var block = {};
					if (field['IN3.20.1'].toString() != "") { block.preCertificationPatientType = field['IN3.20.1']; }
					if (field['IN3.20.2'].toString() != "") { block.preCertificationRequired = field['IN3.20.2']; }
					if (field['IN3.20.3'].toString() != "") { block.preCertificationWindow = field['IN3.20.3']; }
					if (Object.keys(block).length > 0) {
						in1[index].IN3[indexIN3].preCertificationReqWindow.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].preCertificationReqWindow.length == 0) {
					delete in1[index].IN3[indexIN3].preCertificationReqWindow.length;
				}

				// IN3.21, caseManager
				if (in3Seg['IN3.21']['IN3.21.1'].toString() != "") { in1[index].IN3[indexIN3].caseManager = in3Seg['IN3.21']['IN3.21.1']; }

				// IN3.22, secondOpinionDate
				if (in3Seg['IN3.22']['IN3.22.1'].toString() != "") { in1[index].IN3[indexIN3].secondOpinionDate = in3Seg['IN3.22']['IN3.22.1']; }

				// IN3.23, secondOpinionStatus
				if (in3Seg['IN3.23']['IN3.23.1'].toString() != "") { in1[index].IN3[indexIN3].secondOpinionStatus = in3Seg['IN3.23']['IN3.23.1']; }

				// IN3.24, secondOpinionDocumentationReceived
				in1[index].IN3[indexIN3].secondOpinionDocumentationReceived = [];
				for each (field in in3Seg['IN3.24']) {
					if (field['IN3.24.1'].toString() != "") {
						in1[index].IN3[indexIN3].secondOpinionDocumentationReceived.push(field['IN3.24.1']);
					}
				}
				if (in1[index].IN3[indexIN3].secondOpinionDocumentationReceived.length == 0) {
					delete in1[index].IN3[indexIN3].secondOpinionDocumentationReceived;
				}
				
				// IN3.25, secondOpinionPhysician
				in1[index].IN3[indexIN3].secondOpinionPhysician = [];
				for each (field in in3Seg['IN3.25']) {
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
						in1[index].IN3[indexIN3].secondOpinionPhysician.push(block);
					}
				}
				if (in1[index].IN3[indexIN3].secondOpinionPhysician.length == 0) {
					delete in1[index].IN3[indexIN3].secondOpinionPhysician;
				}

				// clean up IN3 and increment index
				if (Object.keys(in1[index].IN3[indexIN3]).length == 0) {
					delete in1[index].IN3[indexIN3];
				} else {
					indexIN3++;
				}
			}

			// Clean up the IN3 object if it's empty
			if (in1[index].IN3[0] == null){
				delete in1[index].IN3;
			}
		}

		// clean up IN1 and increment index
		if (Object.keys(in1[index]).length == 0) {
			delete in1[index];
		} else {
			index++;
		}
	}
}