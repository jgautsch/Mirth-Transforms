// PID
var pid;
if (msg['PID'].length() > 0) {
	pid = [];
	var index = 0;
	for each (seg in msg.PID) {
		pid[index] = {};

		// PID.1, setId
		if (seg['PID.1']['PID.1.1'].toString() != "") {pid[index].setId = seg['PID.1']['PID.1.1']; }

		// PID.2, externalId
		pid[index].externalId = {};
		if (seg['PID.2']['PID.2.1'].toString() != "") { pid[index].externalId.id = seg['PID.2']['PID.2.1']; }
		if (seg['PID.2']['PID.2.2'].toString() != "") { pid[index].externalId.identifierCheckDigit = seg['PID.2']['PID.2.2']; }
		if (seg['PID.2']['PID.2.3'].toString() != "") { pid[index].externalId.codeIdentifyingCheckDigitScheme = seg['PID.2']['PID.2.3']; }
		pid[index].externalId.assigningAuthority = {};
		if (seg['PID.2']['PID.2.4']['PID.2.4.1'].toString() != "") { pid[index].externalId.assigningAuthority.namespaceId = seg['PID.2']['PID.2.4']['PID.2.4.1']; }
		if (seg['PID.2']['PID.2.4']['PID.2.4.2'].toString() != "") { pid[index].externalId.assigningAuthority.universalId = seg['PID.2']['PID.2.4']['PID.2.4.2']; }
		if (seg['PID.2']['PID.2.4']['PID.2.4.3'].toString() != "") { pid[index].externalId.assigningAuthority.universalIdType = seg['PID.2']['PID.2.4']['PID.2.4.3']; }
		if (Object.keys(pid[index].externalId.assigningAuthority).length == 0) {
			delete pid[index].externalId.assigningAuthority;
		}
		if (seg['PID.2']['PID.2.5'].toString() != "") { pid[index].externalId.idTypeCode = seg['PID.2']['PID.2.5']; }
		pid[index].externalId.assigningFacility = {};
		if (seg['PID.2']['PID.2.6']['PID.2.6.1'].toString() != "") { pid[index].externalId.assigningFacility.namespaceId = seg['PID.2']['PID.2.6']['PID.2.6.1']; }
		if (seg['PID.2']['PID.2.6']['PID.2.6.2'].toString() != "") { pid[index].externalId.assigningFacility.universalId = seg['PID.2']['PID.2.6']['PID.2.6.2']; }
		if (seg['PID.2']['PID.2.6']['PID.2.6.3'].toString() != "") { pid[index].externalId.assigningFacility.universalIdType = seg['PID.2']['PID.2.6']['PID.2.6.3']; }
		if (Object.keys(pid[index].externalId.assigningFacility).length == 0) {
			delete pid[index].externalId.assigningFacility;
		}
		if (pid[index].externalId.length == 0) {
			delete pid[index].externalId;
		}

		// PID.3, internalId
		pid[index].internalId = [];
		for each (field in seg['PID.3']) {
			var block = {};
			if (field['PID.3.1'].toString() != "") { block.id = field['PID.3.1']; }
			if (field['PID.3.2'].toString() != "") { block.identifierCheckDigit = field['PID.3.2']; }
			if (field['PID.3.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PID.3.3']; }
			block.assigningAuthority = {};
			if (field['PID.3.4']['PID.3.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PID.3.4']['PID.3.4.1']; }
			if (field['PID.3.4']['PID.3.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PID.3.4']['PID.3.4.2']; }
			if (field['PID.3.4']['PID.3.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PID.3.4']['PID.3.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				delete block.assigningAuthority;
			}
			if (field['PID.3.5'].toString() != "") { block.idTypeCode = field['PID.3.5']; }
			block.assigningFacility = {};
			if (field['PID.3.6']['PID.3.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PID.3.6']['PID.3.6.1']; }
			if (field['PID.3.6']['PID.3.6.2'].toString() != "") { block.assigningFacility.universalId = field['PID.3.6']['PID.3.6.2']; }
			if (field['PID.3.6']['PID.3.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PID.3.6']['PID.3.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pid[index].internalId.push(block);
			}
		}
		if (pid[index].internalId.length == 0) {
			delete pid[index].internalId;
		}

		// PID.4, alternateId
		pid[index].alternateId = [];
		for each (field in seg['PID.4']) {
			var block = {};
			if (field['PID.4.1'].toString() != "") { block.id = field['PID.4.1']; }
			if (field['PID.4.2'].toString() != "") { block.identifierCheckDigit = field['PID.4.2']; }
			if (field['PID.4.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PID.4.3']; }
			block.assigningAuthority = {};
			if (field['PID.4.4']['PID.4.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PID.4.4']['PID.4.4.1']; }
			if (field['PID.4.4']['PID.4.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PID.4.4']['PID.4.4.2']; }
			if (field['PID.4.4']['PID.4.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PID.4.4']['PID.4.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				delete block.assigningAuthority;
			}
			if (field['PID.4.5'].toString() != "") { block.idTypeCode = field['PID.4.5']; }
			block.assigningFacility = {};
			if (field['PID.4.6']['PID.4.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PID.4.6']['PID.4.6.1']; }
			if (field['PID.4.6']['PID.4.6.2'].toString() != "") { block.assigningFacility.universalId = field['PID.4.6']['PID.4.6.2']; }
			if (field['PID.4.6']['PID.4.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PID.4.6']['PID.4.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pid[index].alternateId.push(block);
			}
		}
		if (pid[index].alternateId.length == 0) {
			delete pid[index].alternateId;
		}

		// PID.5, patientName
		pid[index].patientName = [];
		for each (field in seg['PID.5']) {
			var block = {};
			if (field['PID.5.1'].toString() != "") { block.lastName = field['PID.5.1']; }
			if (field['PID.5.2'].toString() != "") { block.firstName = field['PID.5.2']; }
			if (field['PID.5.3'].toString() != "") { block.middleInitOrName = field['PID.5.3']; }
			if (field['PID.5.4'].toString() != "") { block.suffix = field['PID.5.4']; }
			if (field['PID.5.5'].toString() != "") { block.prefix = field['PID.5.5']; }
			if (field['PID.5.6'].toString() != "") { block.degree = field['PID.5.6']; }
			if (field['PID.5.7'].toString() != "") { block.nameTypeCode = field['PID.5.7']; }
			if (Object.keys(block).length > 0) {
				pid[index].patientName.push(block);
			}	
		}
		if (pid[index].patientName.length == 0) {
			delete pid[index].patientName;
		}

		// PID.6, mothersMaidenName
		pid[index].mothersMaidenName = {};
		if (seg['PID.6']['PID.6.1'].toString() != "") { pid[index].mothersMaidenName.lastName = seg['PID.6']['PID.6.1']; }
		if (seg['PID.6']['PID.6.2'].toString() != "") { pid[index].mothersMaidenName.firstName = seg['PID.6']['PID.6.2']; }
		if (seg['PID.6']['PID.6.3'].toString() != "") { pid[index].mothersMaidenName.middleInitOrName = seg['PID.6']['PID.6.3']; }
		if (seg['PID.6']['PID.6.4'].toString() != "") { pid[index].mothersMaidenName.suffix = seg['PID.6']['PID.6.4']; }
		if (seg['PID.6']['PID.6.5'].toString() != "") { pid[index].mothersMaidenName.prefix = seg['PID.6']['PID.6.5']; }
		if (seg['PID.6']['PID.6.6'].toString() != "") { pid[index].mothersMaidenName.degree = seg['PID.6']['PID.6.6']; }
		if (seg['PID.6']['PID.6.7'].toString() != "") { pid[index].mothersMaidenName.nameTypeCode = seg['PID.6']['PID.6.7']; }
		if (pid[index].mothersMaidenName.length == 0) {
			delete pid[index].mothersMaidenName;
		}

		// PID.7, dateTimeBirth
		if (seg['PID.7']['PID.7.1'].toString() != "") {pid[index].dateTimeBirth = seg['PID.7']['PID.7.1']; }
		
		// PID.8, sex
		if (seg['PID.8']['PID.8.1'].toString() != "") {pid[index].sex = seg['PID.8']['PID.8.1']; }
		
		// PID.9, alias
		pid[index].alias = [];
		for each (field in seg['PID.9']) {
			var block = {};
			if (field['PID.9.1'].toString() != "") { block.lastName = field['PID.9.1']; }
			if (field['PID.9.2'].toString() != "") { block.firstName = field['PID.9.2']; }
			if (field['PID.9.3'].toString() != "") { block.middleInitOrName = field['PID.9.3']; }
			if (field['PID.9.4'].toString() != "") { block.suffix = field['PID.9.4']; }
			if (field['PID.9.5'].toString() != "") { block.prefix = field['PID.9.5']; }
			if (field['PID.9.6'].toString() != "") { block.degree = field['PID.9.6']; }
			if (field['PID.9.7'].toString() != "") { block.nameTypeCode = field['PID.9.7']; }
			if (Object.keys(block).length > 0) {
				pid[index].alias.push(block);
			}	
		}
		if (pid[index].alias.length == 0) {
			delete pid[index].alias;
		}

		// PID.10, race
		if (seg['PID.10']['PID.10.1'].toString() != "") {pid[index].race = seg['PID.10']['PID.10.1']; }
		
		// PID.11, address
		pid[index].address = [];
		for each (field in seg['PID.11']) {
			var block = {};
			if (field['PID.11.1'].toString() != "") { block.streetAddress = field['PID.11.1']; }
			if (field['PID.11.2'].toString() != "") { block.otherDesignation = field['PID.11.2']; }
			if (field['PID.11.3'].toString() != "") { block.city = field['PID.11.3']; }
			if (field['PID.11.4'].toString() != "") { block.stateOrProvince = field['PID.11.4']; }
			if (field['PID.11.5'].toString() != "") { block.zip = field['PID.11.5']; }
			if (field['PID.11.6'].toString() != "") { block.country = field['PID.11.6']; }
			if (field['PID.11.7'].toString() != "") { block.addressType = field['PID.11.7']; }
			if (field['PID.11.8'].toString() != "") { block.otherGeographicDesignation = field['PID.11.8']; }
			if (field['PID.11.9'].toString() != "") { block.countyOrParishCode = field['PID.11.9']; }
			if (field['PID.11.10'].toString() != "") { block.censusTract = field['PID.11.10']; }
			if (Object.keys(block).length > 0) {
				pid[index].address.push(block);
			}
		}
		if (pid[index].address.length == 0) {
			delete pid[index].address;
		}

		// PID.12, countyCode
		if (seg['PID.12']['PID.12.1'].toString() != "") {pid[index].countyCode = seg['PID.12']['PID.12.1']; }
		
		// PID.13, homePhone
		pid[index].homePhone = [];
		for each (field in seg['PID.13']) {
			var block = {};
			if (field['PID.13.1'].toString() != "") { block.number = field['PID.13.1']; }
			if (field['PID.13.2'].toString() != "") { block.telecommunicationUseCode = field['PID.13.2']; }
			if (field['PID.13.3'].toString() != "") { block.telecommunicationEquipmentType = field['PID.13.3']; }
			if (field['PID.13.4'].toString() != "") { block.emailAddress = field['PID.13.4']; }
			if (field['PID.13.5'].toString() != "") { block.countryCode = field['PID.13.5']; }
			if (field['PID.13.6'].toString() != "") { block.areaCityCode = field['PID.13.6']; }
			if (field['PID.13.7'].toString() != "") { block.phoneNumber = field['PID.13.7']; }
			if (field['PID.13.8'].toString() != "") { block.extension = field['PID.13.8']; }
			if (field['PID.13.9'].toString() != "") { block.text = field['PID.13.9']; }
			if (Object.keys(block).length > 0) {
				pid[index].homePhone.push(block);
			}
		}
		if (pid[index].homePhone.length == 0) {
			delete pid[index].homePhone;
		}

		// PID.14, businessPhone
		pid[index].businessPhone = [];
		for each (field in seg['PID.14']) {
			var block = {};
			if (field['PID.14.1'].toString() != "") { block.number = field['PID.14.1']; }
			if (field['PID.14.2'].toString() != "") { block.telecommunicationUseCode = field['PID.14.2']; }
			if (field['PID.14.3'].toString() != "") { block.telecommunicationEquipmentType = field['PID.14.3']; }
			if (field['PID.14.4'].toString() != "") { block.emailAddress = field['PID.14.4']; }
			if (field['PID.14.5'].toString() != "") { block.countryCode = field['PID.14.5']; }
			if (field['PID.14.6'].toString() != "") { block.areaCityCode = field['PID.14.6']; }
			if (field['PID.14.7'].toString() != "") { block.phoneNumber = field['PID.14.7']; }
			if (field['PID.14.8'].toString() != "") { block.extension = field['PID.14.8']; }
			if (field['PID.14.9'].toString() != "") { block.text = field['PID.14.9']; }
			if (Object.keys(block).length > 0) {
				pid[index].businessPhone.push(block);
			}
		}
		if (pid[index].businessPhone.length == 0) {
			delete pid[index].businessPhone;
		}

		// PID.15, primaryLanguage
		pid[index].primaryLanguage = {};
		if (seg['PID.15']['PID.15.1'].toString() != "") { pid[index].primaryLanguage.id = seg['PID.15']['PID.15.1']; }
		if (seg['PID.15']['PID.15.2'].toString() != "") { pid[index].primaryLanguage.text = seg['PID.15']['PID.15.2']; }
		if (seg['PID.15']['PID.15.3'].toString() != "") { pid[index].primaryLanguage.codingSystem = seg['PID.15']['PID.15.3']; }
		if (seg['PID.15']['PID.15.4'].toString() != "") { pid[index].primaryLanguage.altId = seg['PID.15']['PID.15.4']; }
		if (seg['PID.15']['PID.15.5'].toString() != "") { pid[index].primaryLanguage.altText = seg['PID.15']['PID.15.5']; }
		if (seg['PID.15']['PID.15.6'].toString() != "") { pid[index].primaryLanguage.altCodingSystem = seg['PID.15']['PID.15.6']; }
		if (Object.keys(pid[index].primaryLanguage).length == 0) {
			delete pid[index].primaryLanguage;
		}

		// PID.16, maritalStatus
		if (seg['PID.16']['PID.16.1'].toString() != "") {pid[index].maritalStatus = seg['PID.16']['PID.16.1']; }
		
		// PID.17, religion
		if (seg['PID.17']['PID.17.1'].toString() != "") {pid[index].religion = seg['PID.17']['PID.17.1']; }

		// PID.18, patientAccountNumber
		pid[index].patientAccountNumber = {};
		if (seg['PID.18']['PID.18.1'].toString() != "") { pid[index].patientAccountNumber.id = seg['PID.18']['PID.18.1']; }
		if (seg['PID.18']['PID.18.2'].toString() != "") { pid[index].patientAccountNumber.identifierCheckDigit = seg['PID.18']['PID.18.2']; }
		if (seg['PID.18']['PID.18.3'].toString() != "") { pid[index].patientAccountNumber.codeIdentifyingCheckDigitScheme = seg['PID.18']['PID.18.3']; }
		pid[index].patientAccountNumber.assigningAuthority = {};
		if (seg['PID.18']['PID.18.4']['PID.18.4.1'].toString() != "") { pid[index].patientAccountNumber.assigningAuthority.namespaceId = seg['PID.18']['PID.18.4']['PID.18.4.1']; }
		if (seg['PID.18']['PID.18.4']['PID.18.4.2'].toString() != "") { pid[index].patientAccountNumber.assigningAuthority.universalId = seg['PID.18']['PID.18.4']['PID.18.4.2']; }
		if (seg['PID.18']['PID.18.4']['PID.18.4.3'].toString() != "") { pid[index].patientAccountNumber.assigningAuthority.universalIdType = seg['PID.18']['PID.18.4']['PID.18.4.3']; }
		if (Object.keys(pid[index].patientAccountNumber.assigningAuthority).length == 0) {
			delete pid[index].patientAccountNumber.assigningAuthority;
		}
		if (seg['PID.18']['PID.18.5'].toString() != "") { pid[index].patientAccountNumber.idTypeCode = seg['PID.18']['PID.18.5']; }
		pid[index].patientAccountNumber.assigningFacility = {};
		if (seg['PID.18']['PID.18.6']['PID.18.6.1'].toString() != "") { pid[index].patientAccountNumber.assigningFacility.namespaceId = seg['PID.18']['PID.18.6']['PID.18.6.1']; }
		if (seg['PID.18']['PID.18.6']['PID.18.6.2'].toString() != "") { pid[index].patientAccountNumber.assigningFacility.universalId = seg['PID.18']['PID.18.6']['PID.18.6.2']; }
		if (seg['PID.18']['PID.18.6']['PID.18.6.3'].toString() != "") { pid[index].patientAccountNumber.assigningFacility.universalIdType = seg['PID.18']['PID.18.6']['PID.18.6.3']; }
		if (Object.keys(pid[index].patientAccountNumber.assigningFacility).length == 0) {
			delete pid[index].patientAccountNumber.assigningFacility;
		}
		if (pid[index].patientAccountNumber.length == 0) {
			delete pid[index].patientAccountNumber;
		}

		// PID.19, ssn
		if (seg['PID.19']['PID.19.1'].toString() != "") {pid[index].ssn = seg['PID.19']['PID.19.1']; }
		
		// PID.20, driversLicenseNumber
		pid[index].driversLicenseNumber = {};
		if (seg['PID.20']['PID.20.1'].toString() != "") {pid[index].driversLicenseNumber.licenseNumber = seg['PID.20']['PID.20.1']; }
		if (seg['PID.20']['PID.20.1'].toString() != "") {pid[index].driversLicenseNumber.issuingStateProvinceCountry = seg['PID.20']['PID.20.1']; }
		if (seg['PID.20']['PID.20.1'].toString() != "") {pid[index].driversLicenseNumber.expirationDate = seg['PID.20']['PID.20.1']; }
		if (new Object.keys(pid[index].driversLicenseNumber).length == 0) {
			delete pid[index].driversLicenseNumber;
		}

		// PID.21, mothersId
		pid[index].mothersId = [];
		for each (field in seg['PID.21']) {
			var block = {};
			if (field['PID.21.1'].toString() != "") { block.id = field['PID.21.1']; }
			if (field['PID.21.2'].toString() != "") { block.identifierCheckDigit = field['PID.21.2']; }
			if (field['PID.21.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PID.21.3']; }
			block.assigningAuthority = {};
			if (field['PID.21.4']['PID.21.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PID.21.4']['PID.21.4.1']; }
			if (field['PID.21.4']['PID.21.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PID.21.4']['PID.21.4.2']; }
			if (field['PID.21.4']['PID.21.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PID.21.4']['PID.21.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				delete block.assigningAuthority;
			}
			if (field['PID.21.5'].toString() != "") { block.idTypeCode = field['PID.21.5']; }
			block.assigningFacility = {};
			if (field['PID.21.6']['PID.21.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PID.21.6']['PID.21.6.1']; }
			if (field['PID.21.6']['PID.21.6.2'].toString() != "") { block.assigningFacility.universalId = field['PID.21.6']['PID.21.6.2']; }
			if (field['PID.21.6']['PID.21.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PID.21.6']['PID.21.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pid[index].mothersId.push(block);
			}
		}
		if (pid[index].mothersId.length == 0) {
			delete pid[index].mothersId;
		}

		// PID.22, ethnicGroup
		if (seg['PID.22']['PID.22.1'].toString() != "") {pid[index].ethnicGroup = seg['PID.22']['PID.22.1']; }
		
		// PID.23, birthPlace
		if (seg['PID.23']['PID.23.1'].toString() != "") {pid[index].birthPlace = seg['PID.23']['PID.23.1']; }
		
		// PID.24, multipleBirthIndicator
		if (seg['PID.24']['PID.24.1'].toString() != "") {pid[index].multipleBirthIndicator = seg['PID.24']['PID.24.1']; }
		
		// PID.25, birthOrder
		if (seg['PID.25']['PID.25.1'].toString() != "") {pid[index].birthOrder = seg['PID.25']['PID.25.1']; }
		
		// PID.26, citizenship
		pid[index].citizenship = [];
		for each (field in seg['PID.26']) {
			if (field['PID.26.1']) {
				pid[index].citizenship.push(field['PID.26.1']);
			}
		}
		// PID.27, veteranStatus
		pid[index].veteranStatus = {};
		if (seg['PID.27']['PID.27.1'].toString() != "") { pid[index].veteranStatus.id = seg['PID.27']['PID.27.1']; }
		if (seg['PID.27']['PID.27.2'].toString() != "") { pid[index].veteranStatus.text = seg['PID.27']['PID.27.2']; }
		if (seg['PID.27']['PID.27.3'].toString() != "") { pid[index].veteranStatus.codingSystem = seg['PID.27']['PID.27.3']; }
		if (seg['PID.27']['PID.27.4'].toString() != "") { pid[index].veteranStatus.altId = seg['PID.27']['PID.27.4']; }
		if (seg['PID.27']['PID.27.5'].toString() != "") { pid[index].veteranStatus.altText = seg['PID.27']['PID.27.5']; }
		if (seg['PID.27']['PID.27.6'].toString() != "") { pid[index].veteranStatus.altCodingSystem = seg['PID.27']['PID.27.6']; }
		if (Object.keys(pid[index].veteranStatus).length == 0) {
			delete pid[index].veteranStatus;
		}

		// PID.28, nationality
		pid[index].nationality = {};
		if (seg['PID.28']['PID.28.1'].toString() != "") { pid[index].nationality.id = seg['PID.28']['PID.28.1']; }
		if (seg['PID.28']['PID.28.2'].toString() != "") { pid[index].nationality.text = seg['PID.28']['PID.28.2']; }
		if (seg['PID.28']['PID.28.3'].toString() != "") { pid[index].nationality.codingSystem = seg['PID.28']['PID.28.3']; }
		if (seg['PID.28']['PID.28.4'].toString() != "") { pid[index].nationality.altId = seg['PID.28']['PID.28.4']; }
		if (seg['PID.28']['PID.28.5'].toString() != "") { pid[index].nationality.altText = seg['PID.28']['PID.28.5']; }
		if (seg['PID.28']['PID.28.6'].toString() != "") { pid[index].nationality.altCodingSystem = seg['PID.28']['PID.28.6']; }
		if (Object.keys(pid[index].nationality).length == 0) {
			delete pid[index].nationality;
		}

		// PID.29, deathDateTime
		if (seg['PID.29']['PID.29.1'].toString() != "") {pid[index].deathDateTime = seg['PID.29']['PID.29.1']; }
		
		// PID.30, deathIndicator
		if (seg['PID.30']['PID.30.1'].toString() != "") {pid[index].deathIndicator = seg['PID.30']['PID.30.1']; }
		
		// PD1 (PID)
		var pd1Group = getSegmentsAfter(msg,seg,'PD1',true);
		if (pd1Group.length > 0) {
			pid[index].pd1 = [];
			var indexPD1 = 0;
			for each (pd1Seg in pd1Group) {
				pid[index].pd1[indexPD1] = {};

				// PD1.1, livingDependency
				pid[index].pd1[indexPD1].livingDependency = [];
				for each (field in pd1Seg['PD1.1']) {
					if (field['PD1.1.1'].toString() != "") {
						pid[index].pd1[indexPD1].livingDependency.push(field['PD1.1.1']);
					}
				}
				// PD1.2, livingArrangement
				if (pd1Seg['PD1.2']['PD1.2.1'].toString() != "") { pid[index].pd1[indexPD1].livingArrangement = pd1Seg['PD1.2']['PD1.2.1']; }

				// PD1.3, patientPrimaryFacility
				pid[index].pd1[indexPD1].patientPrimaryFacility = [];
				for each (field in pd1Seg['PD1.3']) {
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
						delete block.assigningAuthority;
					}
					if (field['PD1.3.7'].toString() != "") { block.idTypeCode = field['PD1.3.7']; }
					block.assigningFacility = {};
					if (field['PD1.3.8']['PD1.3.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.3.8']['PD1.3.8.1']; }
					if (field['PD1.3.8']['PD1.3.8.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.3.8']['PD1.3.8.2']; }
					if (field['PD1.3.8']['PD1.3.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.3.8']['PD1.3.8.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].pd1[indexPD1].patientPrimaryFacility.push(block);
					}
				}
				if (pid[index].pd1[indexPD1].patientPrimaryFacility.length == 0) {
					delete pid[index].pd1[indexPD1].patientPrimaryFacility;
				}

				// PD1.4, primaryCareProvider
				pid[index].pd1[indexPD1].primaryCareProvider = [];
				for each (field in pd1Seg['PD1.4']) {
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
						delete block.assigningAuthority;
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
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].pd1[indexPD1].primaryCareProvider.push(block);
					}
				}
				if (pid[index].pd1[indexPD1].primaryCareProvider.length == 0) {
					delete pid[index].pd1[indexPD1].primaryCareProvider;
				}

				// PD1.5, studentIndicator
				if (pd1Seg['PD1.5']['PD1.5.1'].toString() != "") { pid[index].pd1[indexPD1].studentIndicator = pd1Seg['PD1.5']['PD1.5.1']; }
				
				// PD1.6, handicap
				if (pd1Seg['PD1.6']['PD1.6.1'].toString() != "") { pid[index].pd1[indexPD1].handicap = pd1Seg['PD1.6']['PD1.6.1']; }
				
				// PD1.7, livingWillCode
				if (pd1Seg['PD1.7']['PD1.7.1'].toString() != "") { pid[index].pd1[indexPD1].livingWillCode = pd1Seg['PD1.7']['PD1.7.1']; }
				
				// PD1.8, organDonorCode
				if (pd1Seg['PD1.8']['PD1.8.1'].toString() != "") { pid[index].pd1[indexPD1].organDonorCode = pd1Seg['PD1.8']['PD1.8.1']; }
				
				// PD1.9, separateBill
				if (pd1Seg['PD1.9']['PD1.9.1'].toString() != "") { pid[index].pd1[indexPD1].separateBill = pd1Seg['PD1.9']['PD1.9.1']; }
				
				// PD1.10, duplicatePatient
				pid[index].pd1[indexPD1].duplicatePatient = [];
				for each (field in pd1Seg['PD1.10']) {
					var block = {};
					if (field['PD1.10.1'].toString() != "") { block.id = field['PD1.10.1']; }
					if (field['PD1.10.2'].toString() != "") { block.identifierCheckDigit = field['PD1.10.2']; }
					if (field['PD1.10.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PD1.10.3']; }
					block.assigningAuthority = {};
					if (field['PD1.10.4']['PD1.10.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['PD1.10.4']['PD1.10.4.1']; }
					if (field['PD1.10.4']['PD1.10.4.2'].toString() != "") { block.assigningAuthority.universalId = field['PD1.10.4']['PD1.10.4.2']; }
					if (field['PD1.10.4']['PD1.10.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PD1.10.4']['PD1.10.4.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['PD1.10.5'].toString() != "") { block.idTypeCode = field['PD1.10.5']; }
					block.assigningFacility = {};
					if (field['PD1.10.6']['PD1.10.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['PD1.10.6']['PD1.10.6.1']; }
					if (field['PD1.10.6']['PD1.10.6.2'].toString() != "") { block.assigningFacility.universalId = field['PD1.10.6']['PD1.10.6.2']; }
					if (field['PD1.10.6']['PD1.10.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['PD1.10.6']['PD1.10.6.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						pid[index].pd1[indexPD1].duplicatePatient.push(block);
					}
				}
				if (pid[index].pd1[indexPD1].duplicatePatient.length == 0) {
					delete pid[index].pd1[indexPD1].duplicatePatient;
				}

				// PD1.11, publicityIndicator
				pid[index].pd1[indexPD1].universalServiceID = {};
				if (pd1Seg['PD1.11']['PD1.11.1'].toString() != "") { pid[index].pd1[indexPD1].universalServiceID.id = pd1Seg['PD1.11']['PD1.11.1']; }
				if (pd1Seg['PD1.11']['PD1.11.2'].toString() != "") { pid[index].pd1[indexPD1].universalServiceID.text = pd1Seg['PD1.11']['PD1.11.2']; }
				if (pd1Seg['PD1.11']['PD1.11.3'].toString() != "") { pid[index].pd1[indexPD1].universalServiceID.codingSystem = pd1Seg['PD1.11']['PD1.11.3']; }
				if (pd1Seg['PD1.11']['PD1.11.4'].toString() != "") { pid[index].pd1[indexPD1].universalServiceID.altId = pd1Seg['PD1.11']['PD1.11.4']; }
				if (pd1Seg['PD1.11']['PD1.11.5'].toString() != "") { pid[index].pd1[indexPD1].universalServiceID.altText = pd1Seg['PD1.11']['PD1.11.5']; }
				if (pd1Seg['PD1.11']['PD1.11.6'].toString() != "") { pid[index].pd1[indexPD1].universalServiceID.altCodingSystem = pd1Seg['PD1.11']['PD1.11.6']; }
				if (Object.keys(pid[index].pd1[indexPD1].universalServiceID).length == 0) {
					delete pid[index].pd1[indexPD1].universalServiceID;
				}
				
				// PD1.12, protectionIndicator
				if (pd1Seg['PD1.12']['PD1.12.1'].toString() != "") { pid[index].pd1[indexPD1].protectionIndicator = pd1Seg['PD1.12']['PD1.12.1']; }

				// clean up PD1 and increment index
				if (Object.keys(pid[index].pd1[indexPD1]).length == 0) {
					delete pid[index].pd1[indexPD1];
				} else {
					indexPD1++;
				}
			}
		}

		// NTE (PID)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			pid[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				pid[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { pid[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { pid[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				pid[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						pid[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}

				// clean up NTE and increment index
				if (Object.keys(pid[index].nte[indexNTE]).length == 0) {
					delete pid[index].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// clean up PID and increment index
		if (Object.keys(pid[index]).length == 0) {
			delete pid[index];
		} else {
			index++;
		}
	}
}