// NK1
var nk1;
if (msg['NK1'].length() > 0) {
	nk1 = [];
	var index = 0;
	for each (seg in msg.NK1) {
		nk1[index] = {};

		// NK1.1, id
		if (seg['NK1.1']['NK1.1.1'].toString() != "") { nk1[index].id = seg['NK1.1']['NK1.1.1']; }

		// NK1.2, name
		nk1[index].name = [];
		for each (field in seg['NK1.2']) {
			var block = {};
			if (field['NK1.2.1'].toString() != "") { block.lastName = field['NK1.2.1']; }
			if (field['NK1.2.2'].toString() != "") { block.firstName = field['NK1.2.2']; }
			if (field['NK1.2.3'].toString() != "") { block.middleInitOrName = field['NK1.2.3']; }
			if (field['NK1.2.4'].toString() != "") { block.suffix = field['NK1.2.4']; }
			if (field['NK1.2.5'].toString() != "") { block.prefix = field['NK1.2.5']; }
			if (field['NK1.2.6'].toString() != "") { block.degree = field['NK1.2.6']; }
			if (field['NK1.2.7'].toString() != "") { block.nameTypeCode = field['NK1.2.7']; }
			if (Object.keys(block).length > 0) {
				nk1[index].name.push(block);
			}	
		}
		if (nk1[index].name.length == 0) {
			delete nk1[index].name;
		}

		// NK1.3, relationship
		nk1[index].relationship = {};
		if (seg['NK1.3']['NK1.3.1'].toString() != "") { nk1[index].relationship.id = seg['NK1.3']['NK1.3.1']; }
		if (seg['NK1.3']['NK1.3.2'].toString() != "") { nk1[index].relationship.text = seg['NK1.3']['NK1.3.2']; }
		if (seg['NK1.3']['NK1.3.3'].toString() != "") { nk1[index].relationship.codingSystem = seg['NK1.3']['NK1.3.3']; }
		if (seg['NK1.3']['NK1.3.4'].toString() != "") { nk1[index].relationship.altId = seg['NK1.3']['NK1.3.4']; }
		if (seg['NK1.3']['NK1.3.5'].toString() != "") { nk1[index].relationship.altText = seg['NK1.3']['NK1.3.5']; }
		if (seg['NK1.3']['NK1.3.6'].toString() != "") { nk1[index].relationship.altCodingSystem = seg['NK1.3']['NK1.3.6']; }
		if (Object.keys(nk1[index].relationship).length == 0) {
			delete nk1[index].relationship;
		}

		// NK1.4, address
		nk1[index].address = [];
		for each (field in seg['NK1.4']) {
			var block = {};
			if (field['NK1.4.1'].toString() != "") { block.streetAddress = field['NK1.4.1']; }
			if (field['NK1.4.2'].toString() != "") { block.otherDesignation = field['NK1.4.2']; }
			if (field['NK1.4.3'].toString() != "") { block.city = field['NK1.4.3']; }
			if (field['NK1.4.4'].toString() != "") { block.stateOrProvince = field['NK1.4.4']; }
			if (field['NK1.4.5'].toString() != "") { block.zip = field['NK1.4.5']; }
			if (field['NK1.4.6'].toString() != "") { block.country = field['NK1.4.6']; }
			if (field['NK1.4.7'].toString() != "") { block.addressType = field['NK1.4.7']; }
			if (field['NK1.4.8'].toString() != "") { block.otherGeographicDesignation = field['NK1.4.8']; }
			if (field['NK1.4.9'].toString() != "") { block.countyOrParishCode = field['NK1.4.9']; }
			if (field['NK1.4.10'].toString() != "") { block.censusTract = field['NK1.4.10']; }
			if (Object.keys(block).length > 0) {
				nk1[index].address.push(block);
			}
		}
		if (nk1[index].address.length == 0) {
			delete nk1[index].address;
		}

		// NK1.5, phone
		nk1[index].phone = [];
		for each (field in seg['NK1.5']) {
			var block = {};
			if (field['NK1.5.1'].toString() != "") { block.number = field['NK1.5.1']; }
			if (field['NK1.5.2'].toString() != "") { block.telecommunicationUseCode = field['NK1.5.2']; }
			if (field['NK1.5.3'].toString() != "") { block.telecommunicationEquipmentType = field['NK1.5.3']; }
			if (field['NK1.5.4'].toString() != "") { block.emailAddress = field['NK1.5.4']; }
			if (field['NK1.5.5'].toString() != "") { block.countryCode = field['NK1.5.5']; }
			if (field['NK1.5.6'].toString() != "") { block.areaCityCode = field['NK1.5.6']; }
			if (field['NK1.5.7'].toString() != "") { block.phoneNumber = field['NK1.5.7']; }
			if (field['NK1.5.8'].toString() != "") { block.extension = field['NK1.5.8']; }
			if (field['NK1.5.9'].toString() != "") { block.text = field['NK1.5.9']; }
			if (Object.keys(block).length > 0) {
				nk1[index].phone.push(block);
			}
		}
		if (nk1[index].phone.length == 0) {
			delete nk1[index].phone;
		}

		// NK1.6, businessPhone
		nk1[index].businessPhone = [];
		for each (field in seg['NK1.6']) {
			var block = {};
			if (field['NK1.6.1'].toString() != "") { block.number = field['NK1.6.1']; }
			if (field['NK1.6.2'].toString() != "") { block.telecommunicationUseCode = field['NK1.6.2']; }
			if (field['NK1.6.3'].toString() != "") { block.telecommunicationEquipmentType = field['NK1.6.3']; }
			if (field['NK1.6.4'].toString() != "") { block.emailAddress = field['NK1.6.4']; }
			if (field['NK1.6.5'].toString() != "") { block.countryCode = field['NK1.6.5']; }
			if (field['NK1.6.6'].toString() != "") { block.areaCityCode = field['NK1.6.6']; }
			if (field['NK1.6.7'].toString() != "") { block.phoneNumber = field['NK1.6.7']; }
			if (field['NK1.6.8'].toString() != "") { block.extension = field['NK1.6.8']; }
			if (field['NK1.6.9'].toString() != "") { block.text = field['NK1.6.9']; }
			if (Object.keys(block).length > 0) {
				nk1[index].businessPhone.push(block);
			}
		}
		if (nk1[index].businessPhone.length == 0) {
			delete nk1[index].businessPhone;
		}
		
		// NK1.7, contactRole
		nk1[index].contactRole = {};
		if (seg['NK1.7']['NK1.7.1'].toString() != "") { nk1[index].contactRole.id = seg['NK1.7']['NK1.7.1']; }
		if (seg['NK1.7']['NK1.7.2'].toString() != "") { nk1[index].contactRole.text = seg['NK1.7']['NK1.7.2']; }
		if (seg['NK1.7']['NK1.7.3'].toString() != "") { nk1[index].contactRole.codingSystem = seg['NK1.7']['NK1.7.3']; }
		if (seg['NK1.7']['NK1.7.4'].toString() != "") { nk1[index].contactRole.altId = seg['NK1.7']['NK1.7.4']; }
		if (seg['NK1.7']['NK1.7.5'].toString() != "") { nk1[index].contactRole.altText = seg['NK1.7']['NK1.7.5']; }
		if (seg['NK1.7']['NK1.7.6'].toString() != "") { nk1[index].contactRole.altCodingSystem = seg['NK1.7']['NK1.7.6']; }
		if (Object.keys(nk1[index].contactRole).length == 0) {
			delete nk1[index].contactRole;
		}
		
		// NK1.8, startDate
		if (seg['NK1.8']['NK1.8.1'].toString() != "") { nk1[index].startDate = seg['NK1.8']['NK1.8.1']; }

		// NK1.9, endDate
		if (seg['NK1.9']['NK1.9.1'].toString() != "") { nk1[index].endDate = seg['NK1.9']['NK1.9.1']; }

		// NK1.10, nextOfKinAssociatedPartiesJobTitle
		if (seg['NK1.10']['NK1.10.1'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesJobTitle = seg['NK1.10']['NK1.10.1']; }

		// NK1.11, nextOfKinAssociatedPartiesJobCodeClass
		nk1[index].nextOfKinAssociatedPartiesJobCodeClass = {};
		if (seg['NK1.11']['NK1.11.1'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesJobCodeClass.jobCode = seg['NK1.11']['NK1.11.1']; }
		if (seg['NK1.11']['NK1.11.2'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesJobCodeClass.jobClass = seg['NK1.11']['NK1.11.2']; }
		if (Object.keys(nk1[index].nextOfKinAssociatedPartiesJobCodeClass).length == 0) {
			delete nk1[index].nextOfKinAssociatedPartiesJobCodeClass;
		}

		// NK1.12, nextOfKinAssociatedPartiesEmployeeNumber
		nk1[index].nextOfKinAssociatedPartiesEmployeeNumber = {};
		if (seg['NK1.12']['NK1.12.1'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.id = seg['NK1.12']['NK1.12.1']; }
		if (seg['NK1.12']['NK1.12.2'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.identifierCheckDigit = seg['NK1.12']['NK1.12.2']; }
		if (seg['NK1.12']['NK1.12.3'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.codeIdentifyingCheckDigitScheme = seg['NK1.12']['NK1.12.3']; }
		nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority = {};
		if (seg['NK1.12']['NK1.12.4']['NK1.12.4.1'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority.namespaceId = seg['NK1.12']['NK1.12.4']['NK1.12.4.1']; }
		if (seg['NK1.12']['NK1.12.4']['NK1.12.4.2'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority.universalId = seg['NK1.12']['NK1.12.4']['NK1.12.4.2']; }
		if (seg['NK1.12']['NK1.12.4']['NK1.12.4.3'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority.universalIdType = seg['NK1.12']['NK1.12.4']['NK1.12.4.3']; }
		if (Object.keys(nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority).length == 0) {
			if (seg['NK1.12']['NK1.12.4'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority.namespaceId = seg['NK1.12']['NK1.12.4']; }
			else delete nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningAuthority;
		}
		if (seg['NK1.12']['NK1.12.5'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.idTypeCode = seg['NK1.12']['NK1.12.5']; }
		nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility = {};
		if (seg['NK1.12']['NK1.12.6']['NK1.12.6.1'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility.namespaceId = seg['NK1.12']['NK1.12.6']['NK1.12.6.1']; }
		if (seg['NK1.12']['NK1.12.6']['NK1.12.6.2'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility.universalId = seg['NK1.12']['NK1.12.6']['NK1.12.6.2']; }
		if (seg['NK1.12']['NK1.12.6']['NK1.12.6.3'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility.universalIdType = seg['NK1.12']['NK1.12.6']['NK1.12.6.3']; }
		if (Object.keys(nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility).length == 0) {
			if (seg['NK1.12']['NK1.12.6'].toString() != "") { nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility.namespaceId = seg['NK1.12']['NK1.12.6']; }
			else delete nk1[index].nextOfKinAssociatedPartiesEmployeeNumber.assigningFacility;
		}
		if (Object.keys(nk1[index].nextOfKinAssociatedPartiesEmployeeNumber).length == 0) {
			delete nk1[index].nextOfKinAssociatedPartiesEmployeeNumber;
		}

		// NK1.13, organizationName
		nk1[index].organizationName = [];
		for each (field in seg['NK1.13']) {
			var block = {};
			if (field['NK1.13.1'].toString() != "") { block.organizationName = field['NK1.13.1']; }
			if (field['NK1.13.2'].toString() != "") { block.organizationNameTypeCode = field['NK1.13.2']; }
			if (field['NK1.13.3'].toString() != "") { block.idNumber = field['NK1.13.3']; }
			if (field['NK1.13.4'].toString() != "") { block.identifierCheckDigit = field['NK1.13.4']; }
			if (field['NK1.13.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['NK1.13.5']; }
			block.assigningAuthority = {};
			if (field['NK1.13.6']['NK1.13.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['NK1.13.6']['NK1.13.6.1']; }
			if (field['NK1.13.6']['NK1.13.6.2'].toString() != "") { block.assigningAuthority.universalId = field['NK1.13.6']['NK1.13.6.2']; }
			if (field['NK1.13.6']['NK1.13.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['NK1.13.6']['NK1.13.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['NK1.13.6'].toString() != "") { block.assigningAuthority.namespaceId = field['NK1.13.6']; }
				else delete block.assigningAuthority;
			}
			if (field['NK1.13.7'].toString() != "") { block.idTypeCode = field['NK1.13.7']; }
			block.assigningFacility = {};
			if (field['NK1.13.8']['NK1.13.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['NK1.13.8']['NK1.13.8.1']; }
			if (field['NK1.13.8']['NK1.13.8.2'].toString() != "") { block.assigningFacility.universalId = field['NK1.13.8']['NK1.13.8.2']; }
			if (field['NK1.13.8']['NK1.13.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['NK1.13.8']['NK1.13.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['NK1.13.8'].toString() != "") { block.assigningFacility.namespaceId = field['NK1.13.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				nk1[index].organizationName.push(block);
			}
		}
		if (nk1[index].organizationName.length == 0) {
			delete nk1[index].organizationName;
		}
		
		// NK1.14, maritalStatus
		if (seg['NK1.14']['NK1.14.1'].toString() != "") { nk1[index].maritalStatus = seg['NK1.14']['NK1.14.1']; }

		// NK1.15, sex
		if (seg['NK1.15']['NK1.15.1'].toString() != "") { nk1[index].sex = seg['NK1.15']['NK1.15.1']; }

		// NK1.16, dateTimeofBirth
		if (seg['NK1.16']['NK1.16.1'].toString() != "") { nk1[index].dateTimeofBirth = seg['NK1.16']['NK1.16.1']; }

		// NK1.17, livingDependency
		nk1[index].livingDependency = [];
		for each (field in seg['NK1.17']) {
			if (field['NK1.17.1'].toString() != "") { nk1[index].livingDependency.push(field['NK1.17.1']); }
		}
		if (nk1[index].livingDependency.length == 0) { delete nk1[index].livingDependency; }

		// NK1.18, ambulatoryStatus
		nk1[index].ambulatoryStatus = [];
		for each (field in seg['NK1.18']) {
			if (field['NK1.18.1'].toString() != "") { nk1[index].ambulatoryStatus.push(field['NK1.18.1']); }
		}
		if (nk1[index].ambulatoryStatus.length == 0) { delete nk1[index].ambulatoryStatus; }
		
		// NK1.19, citizenship
		nk1[index].citizenship = [];
		for each (field in seg['NK1.19']) {
			if (field['NK1.19.1'].toString() != "") { nk1[index].citizenship.push(field['NK1.19.1']); }
		}
		if (nk1[index].citizenship.length == 0) { delete nk1[index].citizenship; }
		
		// NK1.20, primaryLanguage
		nk1[index].primaryLanguage = {};
		if (seg['NK1.20']['NK1.20.1'].toString() != "") { nk1[index].primaryLanguage.id = seg['NK1.20']['NK1.20.1']; }
		if (seg['NK1.20']['NK1.20.2'].toString() != "") { nk1[index].primaryLanguage.text = seg['NK1.20']['NK1.20.2']; }
		if (seg['NK1.20']['NK1.20.3'].toString() != "") { nk1[index].primaryLanguage.codingSystem = seg['NK1.20']['NK1.20.3']; }
		if (seg['NK1.20']['NK1.20.4'].toString() != "") { nk1[index].primaryLanguage.altId = seg['NK1.20']['NK1.20.4']; }
		if (seg['NK1.20']['NK1.20.5'].toString() != "") { nk1[index].primaryLanguage.altText = seg['NK1.20']['NK1.20.5']; }
		if (seg['NK1.20']['NK1.20.6'].toString() != "") { nk1[index].primaryLanguage.altCodingSystem = seg['NK1.20']['NK1.20.6']; }
		if (Object.keys(nk1[index].primaryLanguage).length == 0) {
			delete nk1[index].primaryLanguage;
		}
		
		// NK1.21, livingArrangement
		if (seg['NK1.21']['NK1.21.1'].toString() != "") { nk1[index].livingArrangement = seg['NK1.21']['NK1.21.1']; }

		// NK1.22, publicityIndicator
		nk1[index].publicityIndicator = {};
		if (seg['NK1.22']['NK1.22.1'].toString() != "") { nk1[index].publicityIndicator.id = seg['NK1.22']['NK1.22.1']; }
		if (seg['NK1.22']['NK1.22.2'].toString() != "") { nk1[index].publicityIndicator.text = seg['NK1.22']['NK1.22.2']; }
		if (seg['NK1.22']['NK1.22.3'].toString() != "") { nk1[index].publicityIndicator.codingSystem = seg['NK1.22']['NK1.22.3']; }
		if (seg['NK1.22']['NK1.22.4'].toString() != "") { nk1[index].publicityIndicator.altId = seg['NK1.22']['NK1.22.4']; }
		if (seg['NK1.22']['NK1.22.5'].toString() != "") { nk1[index].publicityIndicator.altText = seg['NK1.22']['NK1.22.5']; }
		if (seg['NK1.22']['NK1.22.6'].toString() != "") { nk1[index].publicityIndicator.altCodingSystem = seg['NK1.22']['NK1.22.6']; }
		if (Object.keys(nk1[index].publicityIndicator).length == 0) {
			delete nk1[index].publicityIndicator;
		}
		
		// NK1.23, protectionIndicator
		if (seg['NK1.23']['NK1.23.1'].toString() != "") { nk1[index].protectionIndicator = seg['NK1.23']['NK1.23.1']; }

		// NK1.24, studentIndicator
		if (seg['NK1.24']['NK1.24.1'].toString() != "") { nk1[index].studentIndicator = seg['NK1.24']['NK1.24.1']; }

		// NK1.25, religion
		if (seg['NK1.25']['NK1.25.1'].toString() != "") { nk1[index].religion = seg['NK1.25']['NK1.25.1']; }

		// NK1.26, mothersMaidenName
		nk1[index].mothersMaidenName = {};
		if (seg['NK1.26']['NK1.26.1'].toString() != "") { nk1[index].mothersMaidenName.lastName = seg['NK1.26']['NK1.26.1']; }
		if (seg['NK1.26']['NK1.26.2'].toString() != "") { nk1[index].mothersMaidenName.firstName = seg['NK1.26']['NK1.26.2']; }
		if (seg['NK1.26']['NK1.26.3'].toString() != "") { nk1[index].mothersMaidenName.middleInitOrName = seg['NK1.26']['NK1.26.3']; }
		if (seg['NK1.26']['NK1.26.4'].toString() != "") { nk1[index].mothersMaidenName.suffix = seg['NK1.26']['NK1.26.4']; }
		if (seg['NK1.26']['NK1.26.5'].toString() != "") { nk1[index].mothersMaidenName.prefix = seg['NK1.26']['NK1.26.5']; }
		if (seg['NK1.26']['NK1.26.6'].toString() != "") { nk1[index].mothersMaidenName.degree = seg['NK1.26']['NK1.26.6']; }
		if (seg['NK1.26']['NK1.26.7'].toString() != "") { nk1[index].mothersMaidenName.nameTypeCode = seg['NK1.26']['NK1.26.7']; }
		if (Object.keys(nk1[index].mothersMaidenName).length == 0) {
			delete nk1[index].mothersMaidenName;
		}

		// NK1.27, nationality
		nk1[index].nationality = {};
		if (seg['NK1.27']['NK1.27.1'].toString() != "") { nk1[index].nationality.id = seg['NK1.27']['NK1.27.1']; }
		if (seg['NK1.27']['NK1.27.2'].toString() != "") { nk1[index].nationality.text = seg['NK1.27']['NK1.27.2']; }
		if (seg['NK1.27']['NK1.27.3'].toString() != "") { nk1[index].nationality.codingSystem = seg['NK1.27']['NK1.27.3']; }
		if (seg['NK1.27']['NK1.27.4'].toString() != "") { nk1[index].nationality.altId = seg['NK1.27']['NK1.27.4']; }
		if (seg['NK1.27']['NK1.27.5'].toString() != "") { nk1[index].nationality.altText = seg['NK1.27']['NK1.27.5']; }
		if (seg['NK1.27']['NK1.27.6'].toString() != "") { nk1[index].nationality.altCodingSystem = seg['NK1.27']['NK1.27.6']; }
		if (Object.keys(nk1[index].nationality).length == 0) {
			delete nk1[index].nationality;
		}
		
		// NK1.28, ethnicGroup
		if (seg['NK1.28']['NK1.28.1'].toString() != "") { nk1[index].ethnicGroup = seg['NK1.28']['NK1.28.1']; }

		// NK1.29, contactReason
		nk1[index].contactReason = [];
		for each (field in seg['NK1.29']) {
			var block = {};
			if (field['NK1.29.1'].toString() != "") { block.id = field['NK1.29.1']; }
			if (field['NK1.29.2'].toString() != "") { block.text = field['NK1.29.2']; }
			if (field['NK1.29.3'].toString() != "") { block.codingSystem = field['NK1.29.3']; }
			if (field['NK1.29.4'].toString() != "") { block.altId = field['NK1.29.4']; }
			if (field['NK1.29.5'].toString() != "") { block.altText = field['NK1.29.5']; }
			if (field['NK1.29.6'].toString() != "") { block.altCodingSystem = field['NK1.29.6']; }
			if (Object.keys(block).length > 0) {
				nk1[index].contactReason.push(block);
			}
		}
		if (nk1[index].contactReason.length == 0) {
			delete nk1[index].contactReason;
		}
		
		// NK1.30, contactPersonsName
		nk1[index].contactPersonsName = [];
		for each (field in seg['NK1.30']) {
			var block = {};
			if (field['NK1.30.1'].toString() != "") { block.lastName = field['NK1.30.1']; }
			if (field['NK1.30.2'].toString() != "") { block.firstName = field['NK1.30.2']; }
			if (field['NK1.30.3'].toString() != "") { block.middleInitOrName = field['NK1.30.3']; }
			if (field['NK1.30.4'].toString() != "") { block.suffix = field['NK1.30.4']; }
			if (field['NK1.30.5'].toString() != "") { block.prefix = field['NK1.30.5']; }
			if (field['NK1.30.6'].toString() != "") { block.degree = field['NK1.30.6']; }
			if (field['NK1.30.7'].toString() != "") { block.nameTypeCode = field['NK1.30.7']; }
			if (Object.keys(block).length > 0) {
				nk1[index].contactPersonsName.push(block);
			}	
		}
		if (nk1[index].contactPersonsName.length == 0) {
			delete nk1[index].contactPersonsName;
		}

		// NK1.31, contactPersonsTelephoneNumber
		nk1[index].contactPersonsTelephoneNumber = [];
		for each (field in seg['NK1.31']) {
			var block = {};
			if (field['NK1.31.1'].toString() != "") { block.number = field['NK1.31.1']; }
			if (field['NK1.31.2'].toString() != "") { block.telecommunicationUseCode = field['NK1.31.2']; }
			if (field['NK1.31.3'].toString() != "") { block.telecommunicationEquipmentType = field['NK1.31.3']; }
			if (field['NK1.31.4'].toString() != "") { block.emailAddress = field['NK1.31.4']; }
			if (field['NK1.31.5'].toString() != "") { block.countryCode = field['NK1.31.5']; }
			if (field['NK1.31.6'].toString() != "") { block.areaCityCode = field['NK1.31.6']; }
			if (field['NK1.31.7'].toString() != "") { block.phoneNumber = field['NK1.31.7']; }
			if (field['NK1.31.8'].toString() != "") { block.extension = field['NK1.31.8']; }
			if (field['NK1.31.9'].toString() != "") { block.text = field['NK1.31.9']; }
			if (Object.keys(block).length > 0) {
				nk1[index].contactPersonsTelephoneNumber.push(block);
			}
		}
		if (nk1[index].contactPersonsTelephoneNumber.length == 0) {
			delete nk1[index].contactPersonsTelephoneNumber;
		}
		
		// NK1.32, contactPersonsAddress
		nk1[index].contactPersonsAddress = [];
		for each (field in seg['NK1.32']) {
			var block = {};
			if (field['NK1.32.1'].toString() != "") { block.streetAddress = field['NK1.32.1']; }
			if (field['NK1.32.2'].toString() != "") { block.otherDesignation = field['NK1.32.2']; }
			if (field['NK1.32.3'].toString() != "") { block.city = field['NK1.32.3']; }
			if (field['NK1.32.4'].toString() != "") { block.stateOrProvince = field['NK1.32.4']; }
			if (field['NK1.32.5'].toString() != "") { block.zip = field['NK1.32.5']; }
			if (field['NK1.32.6'].toString() != "") { block.country = field['NK1.32.6']; }
			if (field['NK1.32.7'].toString() != "") { block.addressType = field['NK1.32.7']; }
			if (field['NK1.32.8'].toString() != "") { block.otherGeographicDesignation = field['NK1.32.8']; }
			if (field['NK1.32.9'].toString() != "") { block.countyOrParishCode = field['NK1.32.9']; }
			if (field['NK1.32.10'].toString() != "") { block.censusTract = field['NK1.32.10']; }
			if (Object.keys(block).length > 0) {
				nk1[index].contactPersonsAddress.push(block);
			}
		}
		if (nk1[index].contactPersonsAddress.length == 0) {
			delete nk1[index].contactPersonsAddress;
		}

		// NK1.33, nextOfKinAssociatedPartysIdentifiers
		nk1[index].nextOfKinAssociatedPartysIdentifiers = [];
		for each (field in seg['NK1.33']) {
			var block = {};
			if (field['NK1.33.1'].toString() != "") { block.id = field['NK1.33.1']; }
			if (field['NK1.33.2'].toString() != "") { block.identifierCheckDigit = field['NK1.33.2']; }
			if (field['NK1.33.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['NK1.33.3']; }
			block.assigningAuthority = {};
			if (field['NK1.33.4']['NK1.33.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['NK1.33.4']['NK1.33.4.1']; }
			if (field['NK1.33.4']['NK1.33.4.2'].toString() != "") { block.assigningAuthority.universalId = field['NK1.33.4']['NK1.33.4.2']; }
			if (field['NK1.33.4']['NK1.33.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['NK1.33.4']['NK1.33.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['NK1.33.4'].toString() != "") { block.assigningAuthority.namespaceId = field['NK1.33.4']; }
				else delete block.assigningAuthority;
			}
			if (field['NK1.33.5'].toString() != "") { block.idTypeCode = field['NK1.33.5']; }
			block.assigningFacility = {};
			if (field['NK1.33.6']['NK1.33.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['NK1.33.6']['NK1.33.6.1']; }
			if (field['NK1.33.6']['NK1.33.6.2'].toString() != "") { block.assigningFacility.universalId = field['NK1.33.6']['NK1.33.6.2']; }
			if (field['NK1.33.6']['NK1.33.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['NK1.33.6']['NK1.33.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['NK1.33.6'].toString() != "") { block.assigningFacility.namespaceId = field['NK1.33.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				nk1[index].nextOfKinAssociatedPartysIdentifiers.push(block);
			}
		}
		if (nk1[index].nextOfKinAssociatedPartysIdentifiers.length == 0) {
			delete nk1[index].nextOfKinAssociatedPartysIdentifiers;
		}
		
		// NK1.34, jobStatus
		if (seg['NK1.34']['NK1.34.1'].toString() != "") { nk1[index].jobStatus = seg['NK1.34']['NK1.34.1']; }

		// NK1.35, race
		if (seg['NK1.35']['NK1.35.1'].toString() != "") { nk1[index].race = seg['NK1.35']['NK1.35.1']; }

		// NK1.36, handicap
		if (seg['NK1.36']['NK1.36.1'].toString() != "") { nk1[index].handicap = seg['NK1.36']['NK1.36.1']; }

		// NK1.37, contactPersonSocialSecurityNumber
		if (seg['NK1.37']['NK1.37.1'].toString() != "") { nk1[index].contactPersonSocialSecurityNumber = seg['NK1.37']['NK1.37.1']; }

	}
}