// GT1
var gt1;
if (msg['GT1'].length() > 0) {
	gt1 = [];
	var index = 0;
	for each (seg in msg['GT1']) {
		gt1[index] = {};

		// GT1.1, setId
		if (seg['GT1.1']['GT1.1.1'].toString() != "") { gt1[index].setId = seg['GT1.1']['GT1.1.1']; }

		// GT1.2, guarantorNumber
		gt1[index].guarantorNumber = [];
		for each (field in seg['GT1.2']) {
			var block = {};
			if (field['GT1.2.1'].toString() != "") { block.id = field['GT1.2.1']; }
			if (field['GT1.2.2'].toString() != "") { block.identifierCheckDigit = field['GT1.2.2']; }
			if (field['GT1.2.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['GT1.2.3']; }
			block.assigningAuthority = {};
			if (field['GT1.2.4']['GT1.2.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.2.4']['GT1.2.4.1']; }
			if (field['GT1.2.4']['GT1.2.4.2'].toString() != "") { block.assigningAuthority.universalId = field['GT1.2.4']['GT1.2.4.2']; }
			if (field['GT1.2.4']['GT1.2.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['GT1.2.4']['GT1.2.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['GT1.2.4'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.2.4']; }
				else delete block.assigningAuthority;
			}
			if (field['GT1.2.5'].toString() != "") { block.idTypeCode = field['GT1.2.5']; }
			block.assigningFacility = {};
			if (field['GT1.2.6']['GT1.2.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.2.6']['GT1.2.6.1']; }
			if (field['GT1.2.6']['GT1.2.6.2'].toString() != "") { block.assigningFacility.universalId = field['GT1.2.6']['GT1.2.6.2']; }
			if (field['GT1.2.6']['GT1.2.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['GT1.2.6']['GT1.2.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['GT1.2.6'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.2.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorNumber.push(block);
			}
		}
		if (Object.keys(gt1[index].guarantorNumber).length == 0) {
			delete gt1[index].guarantorNumber;
		}

		// GT1.3, guarantorName
		gt1[index].guarantorName = [];
		for each (field in seg['GT1.3']) {
			var block = {};
			if (field['GT1.3.1'].toString() != "") { block.lastName = field['GT1.3.1']; }
			if (field['GT1.3.2'].toString() != "") { block.firstName = field['GT1.3.2']; }
			if (field['GT1.3.3'].toString() != "") { block.middleInitOrName = field['GT1.3.3']; }
			if (field['GT1.3.4'].toString() != "") { block.suffix = field['GT1.3.4']; }
			if (field['GT1.3.5'].toString() != "") { block.prefix = field['GT1.3.5']; }
			if (field['GT1.3.6'].toString() != "") { block.degree = field['GT1.3.6']; }
			if (field['GT1.3.7'].toString() != "") { block.nameTypeCode = field['GT1.3.7']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorName.push(block);
			}	
		}
		if (gt1[index].guarantorName.length == 0) {
			delete gt1[index].guarantorName;
		}

		// GT1.4, guarantorSpouseName
		gt1[index].guarantorSpouseName = [];
		for each (field in seg['GT1.4']) {
			var block = {};
			if (field['GT1.4.1'].toString() != "") { block.lastName = field['GT1.4.1']; }
			if (field['GT1.4.2'].toString() != "") { block.firstName = field['GT1.4.2']; }
			if (field['GT1.4.3'].toString() != "") { block.middleInitOrName = field['GT1.4.3']; }
			if (field['GT1.4.4'].toString() != "") { block.suffix = field['GT1.4.4']; }
			if (field['GT1.4.5'].toString() != "") { block.prefix = field['GT1.4.5']; }
			if (field['GT1.4.6'].toString() != "") { block.degree = field['GT1.4.6']; }
			if (field['GT1.4.7'].toString() != "") { block.nameTypeCode = field['GT1.4.7']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorSpouseName.push(block);
			}	
		}
		if (gt1[index].guarantorSpouseName.length == 0) {
			delete gt1[index].guarantorSpouseName;
		}

		// GT1.5, guarantorAddress
		gt1[index].guarantorAddress = [];
		for each (field in seg['GT1.5']) {
			var block = {};
			if (field['GT1.5.1'].toString() != "") { block.streetAddress = field['GT1.5.1']; }
			if (field['GT1.5.2'].toString() != "") { block.otherDesignation = field['GT1.5.2']; }
			if (field['GT1.5.3'].toString() != "") { block.city = field['GT1.5.3']; }
			if (field['GT1.5.4'].toString() != "") { block.stateOrProvince = field['GT1.5.4']; }
			if (field['GT1.5.5'].toString() != "") { block.zip = field['GT1.5.5']; }
			if (field['GT1.5.6'].toString() != "") { block.country = field['GT1.5.6']; }
			if (field['GT1.5.7'].toString() != "") { block.addressType = field['GT1.5.7']; }
			if (field['GT1.5.8'].toString() != "") { block.otherGeographicDesignation = field['GT1.5.8']; }
			if (field['GT1.5.9'].toString() != "") { block.countyOrParishCode = field['GT1.5.9']; }
			if (field['GT1.5.10'].toString() != "") { block.censusTract = field['GT1.5.10']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorAddress.push(block);
			}
		}
		if (gt1[index].guarantorAddress.length == 0) {
			delete gt1[index].guarantorAddress;
		}

		// GT1.6, guarantorPhNumHome
		gt1[index].guarantorPhNumHome = [];
		for each (field in seg['GT1.6']) {
			var block = {};
			if (field['GT1.6.1'].toString() != "") { block.number = field['GT1.6.1']; }
			if (field['GT1.6.2'].toString() != "") { block.telecommunicationUseCode = field['GT1.6.2']; }
			if (field['GT1.6.3'].toString() != "") { block.telecommunicationEquipmentType = field['GT1.6.3']; }
			if (field['GT1.6.4'].toString() != "") { block.emailAddress = field['GT1.6.4']; }
			if (field['GT1.6.5'].toString() != "") { block.countryCode = field['GT1.6.5']; }
			if (field['GT1.6.6'].toString() != "") { block.areaCityCode = field['GT1.6.6']; }
			if (field['GT1.6.7'].toString() != "") { block.phoneNumber = field['GT1.6.7']; }
			if (field['GT1.6.8'].toString() != "") { block.extension = field['GT1.6.8']; }
			if (field['GT1.6.9'].toString() != "") { block.text = field['GT1.6.9']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorPhNumHome.push(block);
			}
		}
		if (gt1[index].guarantorPhNumHome.length == 0) {
			delete gt1[index].guarantorPhNumHome;
		}

		// GT1.7, guarantorPhNumBusiness
		gt1[index].guarantorPhNumBusiness = [];
		for each (field in seg['GT1.7']) {
			var block = {};
			if (field['GT1.7.1'].toString() != "") { block.number = field['GT1.7.1']; }
			if (field['GT1.7.2'].toString() != "") { block.telecommunicationUseCode = field['GT1.7.2']; }
			if (field['GT1.7.3'].toString() != "") { block.telecommunicationEquipmentType = field['GT1.7.3']; }
			if (field['GT1.7.4'].toString() != "") { block.emailAddress = field['GT1.7.4']; }
			if (field['GT1.7.5'].toString() != "") { block.countryCode = field['GT1.7.5']; }
			if (field['GT1.7.6'].toString() != "") { block.areaCityCode = field['GT1.7.6']; }
			if (field['GT1.7.7'].toString() != "") { block.phoneNumber = field['GT1.7.7']; }
			if (field['GT1.7.8'].toString() != "") { block.extension = field['GT1.7.8']; }
			if (field['GT1.7.9'].toString() != "") { block.text = field['GT1.7.9']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorPhNumBusiness.push(block);
			}
		}
		if (gt1[index].guarantorPhNumBusiness.length == 0) {
			delete gt1[index].guarantorPhNumBusiness;
		}

		// GT1.8, guarantorDatetimeOfBirth
		if (seg['GT1.8']['GT1.8.1'].toString() != "") { gt1[index].guarantorDatetimeOfBirth = seg['GT1.8']['GT1.8.1']; }

		// GT1.9, guarantorSex
		if (seg['GT1.9']['GT1.9.1'].toString() != "") { gt1[index].guarantorSex = seg['GT1.9']['GT1.9.1']; }

		// GT1.10, guarantorType
		if (seg['GT1.10']['GT1.10.1'].toString() != "") { gt1[index].guarantorType = seg['GT1.10']['GT1.10.1']; }

		// GT1.11, guarantorRelationship
		if (seg['GT1.11']['GT1.11.1'].toString() != "") { gt1[index].guarantorRelationship = seg['GT1.11']['GT1.11.1']; }

		// GT1.12, guarantorSSN
		if (seg['GT1.12']['GT1.12.1'].toString() != "") { gt1[index].guarantorSSN = seg['GT1.12']['GT1.12.1']; }

		// GT1.13, guarantorDateBegin
		if (seg['GT1.13']['GT1.13.1'].toString() != "") { gt1[index].guarantorDateBegin = seg['GT1.13']['GT1.13.1']; }

		// GT1.14, guarantorDateEnd
		if (seg['GT1.14']['GT1.14.1'].toString() != "") { gt1[index].guarantorDateEnd = seg['GT1.14']['GT1.14.1']; }

		// GT1.15, guarantorPriority
		if (seg['GT1.15']['GT1.15.1'].toString() != "") { gt1[index].guarantorPriority = seg['GT1.15']['GT1.15.1']; }

		// GT1.16, guarantorEmployerName
		gt1[index].guarantorEmployerName = [];
		for each (field in seg['GT1.16']) {
			var block = {};
			if (field['GT1.16.1'].toString() != "") { block.lastName = field['GT1.16.1']; }
			if (field['GT1.16.2'].toString() != "") { block.firstName = field['GT1.16.2']; }
			if (field['GT1.16.3'].toString() != "") { block.middleInitOrName = field['GT1.16.3']; }
			if (field['GT1.16.4'].toString() != "") { block.suffix = field['GT1.16.4']; }
			if (field['GT1.16.5'].toString() != "") { block.prefix = field['GT1.16.5']; }
			if (field['GT1.16.6'].toString() != "") { block.degree = field['GT1.16.6']; }
			if (field['GT1.16.7'].toString() != "") { block.nameTypeCode = field['GT1.16.7']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorEmployerName.push(block);
			}	
		}
		if (gt1[index].guarantorEmployerName.length == 0) {
			delete gt1[index].guarantorEmployerName;
		}

		// GT1.17, guarantorEmployerAddress
		gt1[index].guarantorEmployerAddress = [];
		for each (field in seg['GT1.17']) {
			var block = {};
			if (field['GT1.17.1'].toString() != "") { block.streetAddress = field['GT1.17.1']; }
			if (field['GT1.17.2'].toString() != "") { block.otherDesignation = field['GT1.17.2']; }
			if (field['GT1.17.3'].toString() != "") { block.city = field['GT1.17.3']; }
			if (field['GT1.17.4'].toString() != "") { block.stateOrProvince = field['GT1.17.4']; }
			if (field['GT1.17.5'].toString() != "") { block.zip = field['GT1.17.5']; }
			if (field['GT1.17.6'].toString() != "") { block.country = field['GT1.17.6']; }
			if (field['GT1.17.7'].toString() != "") { block.addressType = field['GT1.17.7']; }
			if (field['GT1.17.8'].toString() != "") { block.otherGeographicDesignation = field['GT1.17.8']; }
			if (field['GT1.17.9'].toString() != "") { block.countyOrParishCode = field['GT1.17.9']; }
			if (field['GT1.17.10'].toString() != "") { block.censusTract = field['GT1.17.10']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorEmployerAddress.push(block);
			}
		}
		if (gt1[index].guarantorEmployerAddress.length == 0) {
			delete gt1[index].guarantorEmployerAddress;
		}

		// GT1.18, guarantorEmployerPhoneNumber
		gt1[index].guarantorEmployerPhoneNumber = [];
		for each (field in seg['GT1.18']) {
			var block = {};
			if (field['GT1.18.1'].toString() != "") { block.number = field['GT1.18.1']; }
			if (field['GT1.18.2'].toString() != "") { block.telecommunicationUseCode = field['GT1.18.2']; }
			if (field['GT1.18.3'].toString() != "") { block.telecommunicationEquipmentType = field['GT1.18.3']; }
			if (field['GT1.18.4'].toString() != "") { block.emailAddress = field['GT1.18.4']; }
			if (field['GT1.18.5'].toString() != "") { block.countryCode = field['GT1.18.5']; }
			if (field['GT1.18.6'].toString() != "") { block.areaCityCode = field['GT1.18.6']; }
			if (field['GT1.18.7'].toString() != "") { block.phoneNumber = field['GT1.18.7']; }
			if (field['GT1.18.8'].toString() != "") { block.extension = field['GT1.18.8']; }
			if (field['GT1.18.9'].toString() != "") { block.text = field['GT1.18.9']; }
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorEmployerPhoneNumber.push(block);
			}
		}
		if (gt1[index].guarantorEmployerPhoneNumber.length == 0) {
			delete gt1[index].guarantorEmployerPhoneNumber;
		}

		// GT1.19, guarantorEmployeeIDNumber
		gt1[index].guarantorEmployeeIDNumber = [];
		for each (field in seg['GT1.19']) {
			var block = {};
			if (field['GT1.19.1'].toString() != "") { block.id = field['GT1.19.1']; }
			if (field['GT1.19.2'].toString() != "") { block.identifierCheckDigit = field['GT1.19.2']; }
			if (field['GT1.19.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['GT1.19.3']; }
			block.assigningAuthority = {};
			if (field['GT1.19.4']['GT1.19.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.19.4']['GT1.19.4.1']; }
			if (field['GT1.19.4']['GT1.19.4.2'].toString() != "") { block.assigningAuthority.universalId = field['GT1.19.4']['GT1.19.4.2']; }
			if (field['GT1.19.4']['GT1.19.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['GT1.19.4']['GT1.19.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['GT1.19.4'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.19.4']; }
				else delete block.assigningAuthority;
			}
			if (field['GT1.19.5'].toString() != "") { block.idTypeCode = field['GT1.19.5']; }
			block.assigningFacility = {};
			if (field['GT1.19.6']['GT1.19.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.19.6']['GT1.19.6.1']; }
			if (field['GT1.19.6']['GT1.19.6.2'].toString() != "") { block.assigningFacility.universalId = field['GT1.19.6']['GT1.19.6.2']; }
			if (field['GT1.19.6']['GT1.19.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['GT1.19.6']['GT1.19.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['GT1.19.6'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.19.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorEmployeeIDNumber.push(block);
			}
		}
		if (gt1[index].guarantorEmployeeIDNumber.length == 0) {
			delete gt1[index].guarantorEmployeeIDNumber;
		}

		// GT1.20, guarantorEmploymentStatus
		if (seg['GT1.20']['GT1.20.1'].toString() != "") { gt1[index].guarantorEmploymentStatus = seg['GT1.20']['GT1.20.1']; }

		// GT1.21, guarantorOrganizationName
		gt1[index].guarantorOrganizationName = [];
		for each (field in seg['GT1.21']) {
			var block = {};
			if (field['GT1.21.1'].toString() != "") { block.organizationName = field['GT1.21.1']; }
			if (field['GT1.21.2'].toString() != "") { block.organizationNameTypeCode = field['GT1.21.2']; }
			if (field['GT1.21.3'].toString() != "") { block.idNumber = field['GT1.21.3']; }
			if (field['GT1.21.4'].toString() != "") { block.identifierCheckDigit = field['GT1.21.4']; }
			if (field['GT1.21.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['GT1.21.5']; }
			block.assigningAuthority = {};
			if (field['GT1.21.6']['GT1.21.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.21.6']['GT1.21.6.1']; }
			if (field['GT1.21.6']['GT1.21.6.2'].toString() != "") { block.assigningAuthority.universalId = field['GT1.21.6']['GT1.21.6.2']; }
			if (field['GT1.21.6']['GT1.21.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['GT1.21.6']['GT1.21.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['GT1.21.6'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.21.6']; }
				else delete block.assigningAuthority;
			}
			if (field['GT1.21.7'].toString() != "") { block.idTypeCode = field['GT1.21.7']; }
			block.assigningFacility = {};
			if (field['GT1.21.8']['GT1.21.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.21.8']['GT1.21.8.1']; }
			if (field['GT1.21.8']['GT1.21.8.2'].toString() != "") { block.assigningFacility.universalId = field['GT1.21.8']['GT1.21.8.2']; }
			if (field['GT1.21.8']['GT1.21.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['GT1.21.8']['GT1.21.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['GT1.21.8'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.21.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorOrganizationName.push(block);
			}
		}
		if (gt1[index].guarantorOrganizationName.length == 0) {
			delete gt1[index].guarantorOrganizationName;
		}

		// GT1.22, guarantorBillingHoldFlag
		if (seg['GT1.22']['GT1.22.1'].toString() != "") { gt1[index].guarantorBillingHoldFlag = seg['GT1.22']['GT1.22.1']; }

		// GT1.23, guarantorCreditRatingCode
		gt1[index].guarantorCreditRatingCode = {};
		if (seg['GT1.23']['GT1.23.1'].toString() != "") { gt1[index].guarantorCreditRatingCode.id = seg['GT1.23']['GT1.23.1']; }
		if (seg['GT1.23']['GT1.23.2'].toString() != "") { gt1[index].guarantorCreditRatingCode.text = seg['GT1.23']['GT1.23.2']; }
		if (seg['GT1.23']['GT1.23.3'].toString() != "") { gt1[index].guarantorCreditRatingCode.codingSystem = seg['GT1.23']['GT1.23.3']; }
		if (seg['GT1.23']['GT1.23.4'].toString() != "") { gt1[index].guarantorCreditRatingCode.altId = seg['GT1.23']['GT1.23.4']; }
		if (seg['GT1.23']['GT1.23.5'].toString() != "") { gt1[index].guarantorCreditRatingCode.altText = seg['GT1.23']['GT1.23.5']; }
		if (seg['GT1.23']['GT1.23.6'].toString() != "") { gt1[index].guarantorCreditRatingCode.altCodingSystem = seg['GT1.23']['GT1.23.6']; }
		if (Object.keys(gt1[index].guarantorCreditRatingCode).length == 0) {
			delete gt1[index].guarantorCreditRatingCode;
		}

		// GT1.24, guarantorDeathDateAndTime
		if (seg['GT1.24']['GT1.24.1'].toString() != "") { gt1[index].guarantorDeathDateAndTime = seg['GT1.24']['GT1.24.1']; }

		// GT1.25, guarantorDeathFlag
		if (seg['GT1.25']['GT1.25.1'].toString() != "") { gt1[index].guarantorDeathFlag = seg['GT1.25']['GT1.25.1']; }

		// GT1.26, guarantorChargeAdjustmentCode
		gt1[index].guarantorChargeAdjustmentCode = {};
		if (seg['GT1.26']['GT1.26.1'].toString() != "") { gt1[index].guarantorChargeAdjustmentCode.id = seg['GT1.26']['GT1.26.1']; }
		if (seg['GT1.26']['GT1.26.2'].toString() != "") { gt1[index].guarantorChargeAdjustmentCode.text = seg['GT1.26']['GT1.26.2']; }
		if (seg['GT1.26']['GT1.26.3'].toString() != "") { gt1[index].guarantorChargeAdjustmentCode.codingSystem = seg['GT1.26']['GT1.26.3']; }
		if (seg['GT1.26']['GT1.26.4'].toString() != "") { gt1[index].guarantorChargeAdjustmentCode.altId = seg['GT1.26']['GT1.26.4']; }
		if (seg['GT1.26']['GT1.26.5'].toString() != "") { gt1[index].guarantorChargeAdjustmentCode.altText = seg['GT1.26']['GT1.26.5']; }
		if (seg['GT1.26']['GT1.26.6'].toString() != "") { gt1[index].guarantorChargeAdjustmentCode.altCodingSystem = seg['GT1.26']['GT1.26.6']; }
		if (Object.keys(gt1[index].guarantorChargeAdjustmentCode).length == 0) {
			delete gt1[index].guarantorChargeAdjustmentCode;
		}

		// GT1.27, guarantorHouseholdAnnualIncome
		gt1[index].guarantorHouseholdAnnualIncome = {};
		gt1[index].guarantorHouseholdAnnualIncome.price = {};
		if (seg['GT1.27']['GT1.27.1']['GT1.27.1.1'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.price.quantity = seg['GT1.27']['GT1.27.1']['GT1.27.1.1']; }
		if (seg['GT1.27']['GT1.27.1']['GT1.27.1.2'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.price.denomination = seg['GT1.27']['GT1.27.1']['GT1.27.1.2']; }
		if (Object.keys(gt1[index].guarantorHouseholdAnnualIncome.price).length == 0) {
			if (seg['GT1.27']['GT1.27.1'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.price.quantity = seg['GT1.27']['GT1.27.1']; }
			else delete gt1[index].guarantorHouseholdAnnualIncome.price;
		}
		if (seg['GT1.27']['GT1.27.2'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.priceType = seg['GT1.27']['GT1.27.2']; }
		if (seg['GT1.27']['GT1.27.3'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.fromValue = seg['GT1.27']['GT1.27.3']; }
		if (seg['GT1.27']['GT1.27.4'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.toValue = seg['GT1.27']['GT1.27.4']; }
		if (seg['GT1.27']['GT1.27.5'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeUnits = seg['GT1.27']['GT1.27.5']; }
		gt1[index].guarantorHouseholdAnnualIncome.rangeType = {};
		if (seg['GT1.27']['GT1.27.6']['GT1.27.6.1'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.id = seg['GT1.27']['GT1.27.6']['GT1.27.6.1']; }
		if (seg['GT1.27']['GT1.27.6']['GT1.27.6.2'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.text = seg['GT1.27']['GT1.27.6']['GT1.27.6.2']; }
		if (seg['GT1.27']['GT1.27.6']['GT1.27.6.3'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.codingSystem = seg['GT1.27']['GT1.27.6']['GT1.27.6.3']; }
		if (seg['GT1.27']['GT1.27.6']['GT1.27.6.4'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.altId = seg['GT1.27']['GT1.27.6']['GT1.27.6.4']; }
		if (seg['GT1.27']['GT1.27.6']['GT1.27.6.5'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.altText = seg['GT1.27']['GT1.27.6']['GT1.27.6.5']; }
		if (seg['GT1.27']['GT1.27.6']['GT1.27.6.6'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.altCodingSystem = seg['GT1.27']['GT1.27.6']['GT1.27.6.6']; }
		if (Object.keys(gt1[index].guarantorHouseholdAnnualIncome.rangeType).length == 0) {
			if (seg['GT1.27']['GT1.27.6'].toString() != "") { gt1[index].guarantorHouseholdAnnualIncome.rangeType.id = seg['GT1.27']['GT1.27.6']; }
			else delete gt1[index].guarantorHouseholdAnnualIncome.rangeType;
		}
		if (Object.keys(gt1[index].guarantorHouseholdAnnualIncome).length == 0) {
			delete gt1[index].guarantorHouseholdAnnualIncome;
		}

		// GT1.28, guarantorHouseholdSize
		if (seg['GT1.28']['GT1.28.1'].toString() != "") { gt1[index].guarantorHouseholdSize = seg['GT1.28']['GT1.28.1']; }

		// GT1.29, guarantorEmployerIDNumber
		gt1[index].guarantorEmployerIDNumber = [];
		for each (field in seg['GT1.29']) {
			var block = {};
			if (field['GT1.29.1'].toString() != "") { block.id = field['GT1.29.1']; }
			if (field['GT1.29.2'].toString() != "") { block.identifierCheckDigit = field['GT1.29.2']; }
			if (field['GT1.29.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['GT1.29.3']; }
			block.assigningAuthority = {};
			if (field['GT1.29.4']['GT1.29.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.29.4']['GT1.29.4.1']; }
			if (field['GT1.29.4']['GT1.29.4.2'].toString() != "") { block.assigningAuthority.universalId = field['GT1.29.4']['GT1.29.4.2']; }
			if (field['GT1.29.4']['GT1.29.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['GT1.29.4']['GT1.29.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['GT1.29.4'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.29.4']; }
				else delete block.assigningAuthority;
			}
			if (field['GT1.29.5'].toString() != "") { block.idTypeCode = field['GT1.29.5']; }
			block.assigningFacility = {};
			if (field['GT1.29.6']['GT1.29.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.29.6']['GT1.29.6.1']; }
			if (field['GT1.29.6']['GT1.29.6.2'].toString() != "") { block.assigningFacility.universalId = field['GT1.29.6']['GT1.29.6.2']; }
			if (field['GT1.29.6']['GT1.29.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['GT1.29.6']['GT1.29.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['GT1.29.6'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.29.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorEmployerIDNumber.push(block);
			}
		}
		if (gt1[index].guarantorEmployerIDNumber.length == 0) {
			delete gt1[index].guarantorEmployerIDNumber;
		}

		// GT1.30, guarantorMaritalStatusCode
		if (seg['GT1.30']['GT1.30.1'].toString() != "") { gt1[index].guarantorMaritalStatusCode = seg['GT1.30']['GT1.30.1']; }

		// GT1.31, guarantorHireEffectiveDate
		if (seg['GT1.31']['GT1.31.1'].toString() != "") { gt1[index].guarantorHireEffectiveDate = seg['GT1.31']['GT1.31.1']; }

		// GT1.32, employmentStopDate
		if (seg['GT1.32']['GT1.32.1'].toString() != "") { gt1[index].employmentStopDate = seg['GT1.32']['GT1.32.1']; }

		// GT1.33, livingDependency
		if (seg['GT1.33']['GT1.33.1'].toString() != "") { gt1[index].livingDependency = seg['GT1.33']['GT1.33.1']; }

		// GT1.34, ambulatoryStatus
		if (seg['GT1.34']['GT1.34.1'].toString() != "") { gt1[index].ambulatoryStatus = seg['GT1.34']['GT1.34.1']; }

		// GT1.35, citizenship
		if (seg['GT1.35']['GT1.35.1'].toString() != "") { gt1[index].citizenship = seg['GT1.35']['GT1.35.1']; }

		// GT1.36, primaryLanguage
		gt1[index].primaryLanguage = {};
		if (seg['GT1.36']['GT1.36.1'].toString() != "") { gt1[index].primaryLanguage.id = seg['GT1.36']['GT1.36.1']; }
		if (seg['GT1.36']['GT1.36.2'].toString() != "") { gt1[index].primaryLanguage.text = seg['GT1.36']['GT1.36.2']; }
		if (seg['GT1.36']['GT1.36.3'].toString() != "") { gt1[index].primaryLanguage.codingSystem = seg['GT1.36']['GT1.36.3']; }
		if (seg['GT1.36']['GT1.36.4'].toString() != "") { gt1[index].primaryLanguage.altId = seg['GT1.36']['GT1.36.4']; }
		if (seg['GT1.36']['GT1.36.5'].toString() != "") { gt1[index].primaryLanguage.altText = seg['GT1.36']['GT1.36.5']; }
		if (seg['GT1.36']['GT1.36.6'].toString() != "") { gt1[index].primaryLanguage.altCodingSystem = seg['GT1.36']['GT1.36.6']; }
		if (Object.keys(gt1[index].primaryLanguage).length == 0) {
			delete gt1[index].primaryLanguage;
		}

		// GT1.37, livingArrangement
		if (seg['GT1.37']['GT1.37.1'].toString() != "") { gt1[index].livingArrangement = seg['GT1.37']['GT1.37.1']; }

		// GT1.38, publicityIndicator
		gt1[index].publicityIndicator = {};
		if (seg['GT1.38']['GT1.38.1'].toString() != "") { gt1[index].publicityIndicator.id = seg['GT1.38']['GT1.38.1']; }
		if (seg['GT1.38']['GT1.38.2'].toString() != "") { gt1[index].publicityIndicator.text = seg['GT1.38']['GT1.38.2']; }
		if (seg['GT1.38']['GT1.38.3'].toString() != "") { gt1[index].publicityIndicator.codingSystem = seg['GT1.38']['GT1.38.3']; }
		if (seg['GT1.38']['GT1.38.4'].toString() != "") { gt1[index].publicityIndicator.altId = seg['GT1.38']['GT1.38.4']; }
		if (seg['GT1.38']['GT1.38.5'].toString() != "") { gt1[index].publicityIndicator.altText = seg['GT1.38']['GT1.38.5']; }
		if (seg['GT1.38']['GT1.38.6'].toString() != "") { gt1[index].publicityIndicator.altCodingSystem = seg['GT1.38']['GT1.38.6']; }
		if (Object.keys(gt1[index].publicityIndicator).length == 0) {
			delete gt1[index].publicityIndicator;
		}

		// GT1.39, protectionIndicator
		if (seg['GT1.39']['GT1.39.1'].toString() != "") { gt1[index].protectionIndicator = seg['GT1.39']['GT1.39.1']; }

		// GT1.40, studentIndicator
		if (seg['GT1.40']['GT1.40.1'].toString() != "") { gt1[index].studentIndicator = seg['GT1.40']['GT1.40.1']; }

		// GT1.41, religion
		if (seg['GT1.41']['GT1.41.1'].toString() != "") { gt1[index].religion = seg['GT1.41']['GT1.41.1']; }

		// GT1.42, mothersMaidenName
		gt1[index].mothersMaidenName = {};
		if (seg['GT1.42']['GT1.42.1'].toString() != "") { gt1[index].mothersMaidenName.lastName = seg['GT1.42']['GT1.42.1']; }
		if (seg['GT1.42']['GT1.42.2'].toString() != "") { gt1[index].mothersMaidenName.firstName = seg['GT1.42']['GT1.42.2']; }
		if (seg['GT1.42']['GT1.42.3'].toString() != "") { gt1[index].mothersMaidenName.middleInitOrName = seg['GT1.42']['GT1.42.3']; }
		if (seg['GT1.42']['GT1.42.4'].toString() != "") { gt1[index].mothersMaidenName.suffix = seg['GT1.42']['GT1.42.4']; }
		if (seg['GT1.42']['GT1.42.5'].toString() != "") { gt1[index].mothersMaidenName.prefix = seg['GT1.42']['GT1.42.5']; }
		if (seg['GT1.42']['GT1.42.6'].toString() != "") { gt1[index].mothersMaidenName.degree = seg['GT1.42']['GT1.42.6']; }
		if (seg['GT1.42']['GT1.42.7'].toString() != "") { gt1[index].mothersMaidenName.nameTypeCode = seg['GT1.42']['GT1.42.7']; }
		if (Object.keys(gt1[index].mothersMaidenName).length == 0) {
			delete gt1[index].mothersMaidenName;
		}

		// GT1.43, nationality
		gt1[index].nationality = {};
		if (seg['GT1.43']['GT1.43.1'].toString() != "") { gt1[index].nationality.id = seg['GT1.43']['GT1.43.1']; }
		if (seg['GT1.43']['GT1.43.2'].toString() != "") { gt1[index].nationality.text = seg['GT1.43']['GT1.43.2']; }
		if (seg['GT1.43']['GT1.43.3'].toString() != "") { gt1[index].nationality.codingSystem = seg['GT1.43']['GT1.43.3']; }
		if (seg['GT1.43']['GT1.43.4'].toString() != "") { gt1[index].nationality.altId = seg['GT1.43']['GT1.43.4']; }
		if (seg['GT1.43']['GT1.43.5'].toString() != "") { gt1[index].nationality.altText = seg['GT1.43']['GT1.43.5']; }
		if (seg['GT1.43']['GT1.43.6'].toString() != "") { gt1[index].nationality.altCodingSystem = seg['GT1.43']['GT1.43.6']; }
		if (Object.keys(gt1[index].nationality).length == 0) {
			delete gt1[index].nationality;
		}

		// GT1.44, ethnicGroup
		if (seg['GT1.44']['GT1.44.1'].toString() != "") { gt1[index].ethnicGroup = seg['GT1.44']['GT1.44.1']; }

		// GT1.45, contactPersonsName
		gt1[index].contactPersonsName = [];
		for each (field in seg['GT1.45']) {
			var block = {};
			if (field['GT1.45.1'].toString() != "") { block.lastName = field['GT1.45.1']; }
			if (field['GT1.45.2'].toString() != "") { block.firstName = field['GT1.45.2']; }
			if (field['GT1.45.3'].toString() != "") { block.middleInitOrName = field['GT1.45.3']; }
			if (field['GT1.45.4'].toString() != "") { block.suffix = field['GT1.45.4']; }
			if (field['GT1.45.5'].toString() != "") { block.prefix = field['GT1.45.5']; }
			if (field['GT1.45.6'].toString() != "") { block.degree = field['GT1.45.6']; }
			if (field['GT1.45.7'].toString() != "") { block.nameTypeCode = field['GT1.45.7']; }
			if (Object.keys(block).length > 0) {
				gt1[index].contactPersonsName.push(block);
			}	
		}
		if (gt1[index].contactPersonsName.length == 0) {
			delete gt1[index].contactPersonsName;
		}

		// GT1.46, contactPersonsTelephoneNumber
		gt1[index].contactPersonsTelephoneNumber = [];
		for each (field in seg['GT1.46']) {
			var block = {};
			if (field['GT1.46.1'].toString() != "") { block.number = field['GT1.46.1']; }
			if (field['GT1.46.2'].toString() != "") { block.telecommunicationUseCode = field['GT1.46.2']; }
			if (field['GT1.46.3'].toString() != "") { block.telecommunicationEquipmentType = field['GT1.46.3']; }
			if (field['GT1.46.4'].toString() != "") { block.emailAddress = field['GT1.46.4']; }
			if (field['GT1.46.5'].toString() != "") { block.countryCode = field['GT1.46.5']; }
			if (field['GT1.46.6'].toString() != "") { block.areaCityCode = field['GT1.46.6']; }
			if (field['GT1.46.7'].toString() != "") { block.phoneNumber = field['GT1.46.7']; }
			if (field['GT1.46.8'].toString() != "") { block.extension = field['GT1.46.8']; }
			if (field['GT1.46.9'].toString() != "") { block.text = field['GT1.46.9']; }
			if (Object.keys(block).length > 0) {
				gt1[index].contactPersonsTelephoneNumber.push(block);
			}
		}
		if (gt1[index].contactPersonsTelephoneNumber.length == 0) {
			delete gt1[index].contactPersonsTelephoneNumber;
		}

		// GT1.47, contactReason
		gt1[index].contactReason = {};
		if (seg['GT1.47']['GT1.47.1'].toString() != "") { gt1[index].contactReason.id = seg['GT1.47']['GT1.47.1']; }
		if (seg['GT1.47']['GT1.47.2'].toString() != "") { gt1[index].contactReason.text = seg['GT1.47']['GT1.47.2']; }
		if (seg['GT1.47']['GT1.47.3'].toString() != "") { gt1[index].contactReason.codingSystem = seg['GT1.47']['GT1.47.3']; }
		if (seg['GT1.47']['GT1.47.4'].toString() != "") { gt1[index].contactReason.altId = seg['GT1.47']['GT1.47.4']; }
		if (seg['GT1.47']['GT1.47.5'].toString() != "") { gt1[index].contactReason.altText = seg['GT1.47']['GT1.47.5']; }
		if (seg['GT1.47']['GT1.47.6'].toString() != "") { gt1[index].contactReason.altCodingSystem = seg['GT1.47']['GT1.47.6']; }
		if (Object.keys(gt1[index].contactReason).length == 0) {
			delete gt1[index].contactReason;
		}

		// GT1.48, contactRelationship
		if (seg['GT1.48']['GT1.48.1'].toString() != "") { gt1[index].contactRelationship = seg['GT1.48']['GT1.48.1']; }

		// GT1.49, jobTitle
		if (seg['GT1.49']['GT1.49.1'].toString() != "") { gt1[index].jobTitle = seg['GT1.49']['GT1.49.1']; }

		// GT1.50, jobCodeClass
		gt1[index].jobCodeClass = {};
		if (seg['GT1.50']['GT1.50.1'].toString() != "") { gt1[index].jobCodeClass.id = seg['GT1.50']['GT1.50.1']; }
		if (seg['GT1.50']['GT1.50.1'].toString() != "") { gt1[index].jobCodeClass.id = seg['GT1.50']['GT1.50.1']; }
		if (Object.keys(gt1[index].jobCodeClass).length == 0) {
			delete gt1[index].jobCodeClass;
		}

		// GT1.51, guarantorEmployersOrganization
		gt1[index].guarantorEmployersOrganization = [];
		for each (field in seg['GT1.51']) {
			var block = {};
			if (field['GT1.51.1'].toString() != "") { block.organizationName = field['GT1.51.1']; }
			if (field['GT1.51.2'].toString() != "") { block.organizationNameTypeCode = field['GT1.51.2']; }
			if (field['GT1.51.3'].toString() != "") { block.idNumber = field['GT1.51.3']; }
			if (field['GT1.51.4'].toString() != "") { block.identifierCheckDigit = field['GT1.51.4']; }
			if (field['GT1.51.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['GT1.51.5']; }
			block.assigningAuthority = {};
			if (field['GT1.51.6']['GT1.51.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.51.6']['GT1.51.6.1']; }
			if (field['GT1.51.6']['GT1.51.6.2'].toString() != "") { block.assigningAuthority.universalId = field['GT1.51.6']['GT1.51.6.2']; }
			if (field['GT1.51.6']['GT1.51.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['GT1.51.6']['GT1.51.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['GT1.51.6'].toString() != "") { block.assigningAuthority.namespaceId = field['GT1.51.6']; }
				else delete block.assigningAuthority;
			}
			if (field['GT1.51.7'].toString() != "") { block.idTypeCode = field['GT1.51.7']; }
			block.assigningFacility = {};
			if (field['GT1.51.8']['GT1.51.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.51.8']['GT1.51.8.1']; }
			if (field['GT1.51.8']['GT1.51.8.2'].toString() != "") { block.assigningFacility.universalId = field['GT1.51.8']['GT1.51.8.2']; }
			if (field['GT1.51.8']['GT1.51.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['GT1.51.8']['GT1.51.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['GT1.51.8'].toString() != "") { block.assigningFacility.namespaceId = field['GT1.51.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				gt1[index].guarantorEmployersOrganization.push(block);
			}
		}
		if (gt1[index].guarantorEmployersOrganization.length == 0) {
			delete gt1[index].guarantorEmployersOrganization;
		}
		// GT1.52, handicap
		if (seg['GT1.52']['GT1.52.1'].toString() != "") { gt1[index].handicap = seg['GT1.52']['GT1.52.1']; }

		// GT1.53, jobStatus
		if (seg['GT1.53']['GT1.53.1'].toString() != "") { gt1[index].jobStatus = seg['GT1.53']['GT1.53.1']; }

		// GT1.54, guarantorFinancialClass
		gt1[index].guarantorFinancialClass = {};
		if (seg['GT1.54']['GT1.54.1'].toString() != "") { gt1[index].guarantorFinancialClass.financialClass = seg['GT1.54']['GT1.54.1']; }
		if (seg['GT1.54']['GT1.54.1'].toString() != "") { gt1[index].guarantorFinancialClass.effectiveDate = seg['GT1.54']['GT1.54.1']; }
		if (Object.keys(gt1[index].guarantorFinancialClass).length == 0) {
			delete gt1[index].guarantorFinancialClass;
		}

		// GT1.55, guarantorRace
		if (seg['GT1.55']['GT1.55.1'].toString() != "") { gt1[index].guarantorRace = seg['GT1.55']['GT1.55.1']; }

		// clean up GT1 and increment index
		if (Object.keys(gt1[index]).length == 0) {
			delete gt1[index];
		} else {
			index++;
		}
	}
}