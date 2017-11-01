// ORC
var orc;
if (msg['ORC'].length() > 0) {
	orc = [];
	var index = 0;
	for each (seg in msg.ORC) {
		orc[index] = {};

		// ORC.1, orderControl
		if (seg['ORC.1']['ORC.1.1'].toString() != "") { orc[index].orderControl = seg['ORC.1']['ORC.1.1']; }

		// ORC.2, placerOrderNumber
		orc[index].placerOrderNumber = {};
		if (seg['ORC.2']['ORC.2.1'].toString() != "") { orc[index].placerOrderNumber.id = seg['ORC.2']['ORC.2.1']; }
		if (seg['ORC.2']['ORC.2.2'].toString() != "") { orc[index].placerOrderNumber.namespaceId = seg['ORC.2']['ORC.2.2']; }
		if (seg['ORC.2']['ORC.2.3'].toString() != "") { orc[index].placerOrderNumber.universalId = seg['ORC.2']['ORC.2.3']; }
		if (seg['ORC.2']['ORC.2.4'].toString() != "") { orc[index].placerOrderNumber.universalIdType = seg['ORC.2']['ORC.2.4']; }
		if (Object.keys(block.placerOrderNumber).length == 0) {
			delete block.placerOrderNumber;
		}

		// ORC.3, fillerOrderNumber
		orc[index].fillerOrderNumber = {};
		if (seg['ORC.2']['ORC.2.1'].toString() != "") { orc[index].fillerOrderNumber.id = seg['ORC.2']['ORC.2.1']; }
		if (seg['ORC.2']['ORC.2.2'].toString() != "") { orc[index].fillerOrderNumber.namespaceId = seg['ORC.2']['ORC.2.2']; }
		if (seg['ORC.2']['ORC.2.3'].toString() != "") { orc[index].fillerOrderNumber.universalId = seg['ORC.2']['ORC.2.3']; }
		if (seg['ORC.2']['ORC.2.4'].toString() != "") { orc[index].fillerOrderNumber.universalIdType = seg['ORC.2']['ORC.2.4']; }
		if (Object.keys(block.fillerOrderNumber).length == 0) {
			delete block.fillerOrderNumber;
		}

		// ORC.4, placerGroupNumber
		orc[index].placerGroupNumber = {};
		if (seg['ORC.2']['ORC.2.1'].toString() != "") { orc[index].placerGroupNumber.id = seg['ORC.2']['ORC.2.1']; }
		if (seg['ORC.2']['ORC.2.2'].toString() != "") { orc[index].placerGroupNumber.namespaceId = seg['ORC.2']['ORC.2.2']; }
		if (seg['ORC.2']['ORC.2.3'].toString() != "") { orc[index].placerGroupNumber.universalId = seg['ORC.2']['ORC.2.3']; }
		if (seg['ORC.2']['ORC.2.4'].toString() != "") { orc[index].placerGroupNumber.universalIdType = seg['ORC.2']['ORC.2.4']; }
		if (Object.keys(block.placerGroupNumber).length == 0) {
			delete block.placerGroupNumber;
		}

		// ORC.5, orderStatus
		if (seg['ORC.5']['ORC.5.1'].toString() != "") { orc[index].orderStatus = seg['ORC.5']['ORC.5.1']; }

		// ORC.6, responseFlag
		if (seg['ORC.6']['ORC.6.1'].toString() != "") { orc[index].responseFlag = seg['ORC.6']['ORC.6.1']; }

		// ORC.7, timingQuantity
		orc[index].timingQuantity = {};
		if (seg['ORC.7']['ORC.7.1'].toString() != "") { orc[index].timingQuantity.quantity = seg['ORC.7']['ORC.7.1']; }
		if (seg['ORC.7']['ORC.7.2'].toString() != "") { orc[index].timingQuantity.interval = seg['ORC.7']['ORC.7.2']; }
		if (seg['ORC.7']['ORC.7.3'].toString() != "") { orc[index].timingQuantity.duration = seg['ORC.7']['ORC.7.3']; }
		if (seg['ORC.7']['ORC.7.4'].toString() != "") { orc[index].timingQuantity.startDateTime = seg['ORC.7']['ORC.7.4']; }
		if (seg['ORC.7']['ORC.7.5'].toString() != "") { orc[index].timingQuantity.endDateTime = seg['ORC.7']['ORC.7.5']; }
		if (seg['ORC.7']['ORC.7.6'].toString() != "") { orc[index].timingQuantity.priority = seg['ORC.7']['ORC.7.6']; }
		if (seg['ORC.7']['ORC.7.7'].toString() != "") { orc[index].timingQuantity.condition = seg['ORC.7']['ORC.7.7']; }
		if (seg['ORC.7']['ORC.7.8'].toString() != "") { orc[index].timingQuantity.text = seg['ORC.7']['ORC.7.8']; }
		if (seg['ORC.7']['ORC.7.9'].toString() != "") { orc[index].timingQuantity.conjunction = seg['ORC.7']['ORC.7.9']; }
		if (seg['ORC.7']['ORC.7.10'].toString() != "") { orc[index].timingQuantity.orderSequencing = seg['ORC.7']['ORC.7.10']; }
		if (Object.keys(orc[index].timingQuantity).length == 0) {
			delete orc[index].timingQuantity;
		}

		// ORC.8, parentOrder
		orc[index].parentOrder = {};
		orc[index].parentOrder.parentsPlacerOrderNumber = {};
		if (seg['ORC.8']['ORC.8.1']['ORC.8.1.1'].toString() != "") { orc[index].parentOrder.parentsPlacerOrderNumber.id = seg['ORC.8']['ORC.8.1']['ORC.8.1.1']; }
		if (seg['ORC.8']['ORC.8.1']['ORC.8.1.2'].toString() != "") { orc[index].parentOrder.parentsPlacerOrderNumber.namespaceId = seg['ORC.8']['ORC.8.1']['ORC.8.1.2']; }
		if (seg['ORC.8']['ORC.8.1']['ORC.8.1.3'].toString() != "") { orc[index].parentOrder.parentsPlacerOrderNumber.universalId = seg['ORC.8']['ORC.8.1']['ORC.8.1.3']; }
		if (seg['ORC.8']['ORC.8.1']['ORC.8.1.4'].toString() != "") { orc[index].parentOrder.parentsPlacerOrderNumber.universalIdType = seg['ORC.8']['ORC.8.1']['ORC.8.1.4']; }
		if (Object.keys(orc[index].parentOrder.parentsPlacerOrderNumber).length == 0) {
			delete orc[index].parentOrder.parentsPlacerOrderNumber;
		}
		orc[index].parentOrder.parentsFillerOrderNumber = {};
		if (seg['ORC.8']['ORC.8.2']['ORC.8.2.1'].toString() != "") { orc[index].parentOrder.parentsFillerOrderNumber.id = seg['ORC.8']['ORC.8.2']['ORC.8.2.1']; }
		if (seg['ORC.8']['ORC.8.2']['ORC.8.2.2'].toString() != "") { orc[index].parentOrder.parentsFillerOrderNumber.namespaceId = seg['ORC.8']['ORC.8.2']['ORC.8.2.2']; }
		if (seg['ORC.8']['ORC.8.2']['ORC.8.2.3'].toString() != "") { orc[index].parentOrder.parentsFillerOrderNumber.universalId = seg['ORC.8']['ORC.8.2']['ORC.8.2.3']; }
		if (seg['ORC.8']['ORC.8.2']['ORC.8.2.4'].toString() != "") { orc[index].parentOrder.parentsFillerOrderNumber.universalIdType = seg['ORC.8']['ORC.8.2']['ORC.8.2.4']; }
		if (Object.keys(orc[index].parentOrder.parentsFillerOrderNumber).length == 0) {
			delete orc[index].parentOrder.parentsFillerOrderNumber;
		}
		if (Object.keys(orc[index].parentOrder).length == 0) {
			delete orc[index].parentOrder;
		}

		// ORC.9, transactionDateTime
		if (seg['ORC.9']['ORC.9.1'].toString() != "") { orc[index].transactionDateTime = seg['ORC.9']['ORC.9.1']; }

		// ORC.10, enteredBy
		orc[index].enteredBy = {};
		if (seg['ORC.10']['ORC.10.1'].toString() != "") { orc[index].enteredBy.id = seg['ORC.10']['ORC.10.1']; }
		if (seg['ORC.10']['ORC.10.2'].toString() != "") { orc[index].enteredBy.lastName = seg['ORC.10']['ORC.10.2']; }
		if (seg['ORC.10']['ORC.10.3'].toString() != "") { orc[index].enteredBy.firstName = seg['ORC.10']['ORC.10.3']; }
		if (seg['ORC.10']['ORC.10.4'].toString() != "") { orc[index].enteredBy.middleInitOrName = seg['ORC.10']['ORC.10.4']; }
		if (seg['ORC.10']['ORC.10.5'].toString() != "") { orc[index].enteredBy.suffix = seg['ORC.10']['ORC.10.5']; }
		if (seg['ORC.10']['ORC.10.6'].toString() != "") { orc[index].enteredBy.prefix = seg['ORC.10']['ORC.10.6']; }
		if (seg['ORC.10']['ORC.10.7'].toString() != "") { orc[index].enteredBy.degree = seg['ORC.10']['ORC.10.7']; }
		if (seg['ORC.10']['ORC.10.8'].toString() != "") { orc[index].enteredBy.sourceTable = seg['ORC.10']['ORC.10.8']; }
		orc[index].enteredBy.assigningAuthority = {};
		if (seg['ORC.10']['ORC.10.9']['ORC.10.9.1'].toString() != "") { orc[index].enteredBy.assigningAuthority.id = seg['ORC.10']['ORC.10.9']['ORC.10.9.1']; }
		if (seg['ORC.10']['ORC.10.9']['ORC.10.9.2'].toString() != "") { orc[index].enteredBy.assigningAuthority.universalId = seg['ORC.10']['ORC.10.9']['ORC.10.9.2']; }
		if (seg['ORC.10']['ORC.10.9']['ORC.10.9.3'].toString() != "") { orc[index].enteredBy.assigningAuthority.universalIdType = seg['ORC.10']['ORC.10.9']['ORC.10.9.3']; }
		if (Object.keys(orc[index].enteredBy.assigningAuthority).length == 0) {
			delete orc[index].enteredBy.assigningAuthority;
		}
		if (seg['ORC.10']['ORC.10.10'].toString() != "") { orc[index].enteredBy.nameTypeCode = seg['ORC.10']['ORC.10.10']; }
		if (seg['ORC.10']['ORC.10.11'].toString() != "") { orc[index].enteredBy.identifierCheckDigit = seg['ORC.10']['ORC.10.11']; }
		if (seg['ORC.10']['ORC.10.12'].toString() != "") { orc[index].enteredBy.codeIdentifyingCheckDigitScheme = seg['ORC.10']['ORC.10.12']; }
		if (seg['ORC.10']['ORC.10.13'].toString() != "") { orc[index].enteredBy.identifierTypeCode = seg['ORC.10']['ORC.10.13']; }
		orc[index].enteredBy.assigningFacility = {};
		if (seg['ORC.10']['ORC.10.14']['ORC.10.14.1'].toString() != "") { orc[index].enteredBy.assigningFacility.id = seg['ORC.10']['ORC.10.14']['ORC.10.14.1']; }
		if (seg['ORC.10']['ORC.10.14']['ORC.10.14.2'].toString() != "") { orc[index].enteredBy.assigningFacility.universalId = seg['ORC.10']['ORC.10.14']['ORC.10.14.2']; }
		if (seg['ORC.10']['ORC.10.14']['ORC.10.14.3'].toString() != "") { orc[index].enteredBy.assigningFacility.universalIdType = seg['ORC.10']['ORC.10.14']['ORC.10.14.3']; }
		if (Object.keys(orc[index].enteredBy.assigningFacility).length == 0) {
			delete orc[index].enteredBy.assigningFacility;
		}
		if (Object.keys(orc[index].enteredBy).length == 0) {
			delete orc[index].enteredBy;
		}

		// ORC.11, verifiedBy
		orc[index].verifiedBy = {};
		if (seg['ORC.11']['ORC.11.1'].toString() != "") { orc[index].verifiedBy.id = seg['ORC.11']['ORC.11.1']; }
		if (seg['ORC.11']['ORC.11.2'].toString() != "") { orc[index].verifiedBy.lastName = seg['ORC.11']['ORC.11.2']; }
		if (seg['ORC.11']['ORC.11.3'].toString() != "") { orc[index].verifiedBy.firstName = seg['ORC.11']['ORC.11.3']; }
		if (seg['ORC.11']['ORC.11.4'].toString() != "") { orc[index].verifiedBy.middleInitOrName = seg['ORC.11']['ORC.11.4']; }
		if (seg['ORC.11']['ORC.11.5'].toString() != "") { orc[index].verifiedBy.suffix = seg['ORC.11']['ORC.11.5']; }
		if (seg['ORC.11']['ORC.11.6'].toString() != "") { orc[index].verifiedBy.prefix = seg['ORC.11']['ORC.11.6']; }
		if (seg['ORC.11']['ORC.11.7'].toString() != "") { orc[index].verifiedBy.degree = seg['ORC.11']['ORC.11.7']; }
		if (seg['ORC.11']['ORC.11.8'].toString() != "") { orc[index].verifiedBy.sourceTable = seg['ORC.11']['ORC.11.8']; }
		orc[index].verifiedBy.assigningAuthority = {};
		if (seg['ORC.11']['ORC.11.9']['ORC.11.9.1'].toString() != "") { orc[index].verifiedBy.assigningAuthority.id = seg['ORC.11']['ORC.11.9']['ORC.11.9.1']; }
		if (seg['ORC.11']['ORC.11.9']['ORC.11.9.2'].toString() != "") { orc[index].verifiedBy.assigningAuthority.universalId = seg['ORC.11']['ORC.11.9']['ORC.11.9.2']; }
		if (seg['ORC.11']['ORC.11.9']['ORC.11.9.3'].toString() != "") { orc[index].verifiedBy.assigningAuthority.universalIdType = seg['ORC.11']['ORC.11.9']['ORC.11.9.3']; }
		if (Object.keys(orc[index].verifiedBy.assigningAuthority).length == 0) {
			delete orc[index].verifiedBy.assigningAuthority;
		}
		if (seg['ORC.11']['ORC.11.10'].toString() != "") { orc[index].verifiedBy.nameTypeCode = seg['ORC.11']['ORC.11.10']; }
		if (seg['ORC.11']['ORC.11.11'].toString() != "") { orc[index].verifiedBy.identifierCheckDigit = seg['ORC.11']['ORC.11.11']; }
		if (seg['ORC.11']['ORC.11.12'].toString() != "") { orc[index].verifiedBy.codeIdentifyingCheckDigitScheme = seg['ORC.11']['ORC.11.12']; }
		if (seg['ORC.11']['ORC.11.13'].toString() != "") { orc[index].verifiedBy.identifierTypeCode = seg['ORC.11']['ORC.11.13']; }
		orc[index].verifiedBy.assigningFacility = {};
		if (seg['ORC.11']['ORC.11.14']['ORC.11.14.1'].toString() != "") { orc[index].verifiedBy.assigningFacility.id = seg['ORC.11']['ORC.11.14']['ORC.11.14.1']; }
		if (seg['ORC.11']['ORC.11.14']['ORC.11.14.2'].toString() != "") { orc[index].verifiedBy.assigningFacility.universalId = seg['ORC.11']['ORC.11.14']['ORC.11.14.2']; }
		if (seg['ORC.11']['ORC.11.14']['ORC.11.14.3'].toString() != "") { orc[index].verifiedBy.assigningFacility.universalIdType = seg['ORC.11']['ORC.11.14']['ORC.11.14.3']; }
		if (Object.keys(orc[index].verifiedBy.assigningFacility).length == 0) {
			delete orc[index].verifiedBy.assigningFacility;
		}
		if (Object.keys(orc[index].verifiedBy).length == 0) {
			delete orc[index].verifiedBy;
		}

		// ORC.12, orderingProvider
		orc[index].orderingProvider = {};
		if (seg['ORC.12']['ORC.12.1'].toString() != "") { orc[index].orderingProvider.id = seg['ORC.12']['ORC.12.1']; }
		if (seg['ORC.12']['ORC.12.2'].toString() != "") { orc[index].orderingProvider.lastName = seg['ORC.12']['ORC.12.2']; }
		if (seg['ORC.12']['ORC.12.3'].toString() != "") { orc[index].orderingProvider.firstName = seg['ORC.12']['ORC.12.3']; }
		if (seg['ORC.12']['ORC.12.4'].toString() != "") { orc[index].orderingProvider.middleInitOrName = seg['ORC.12']['ORC.12.4']; }
		if (seg['ORC.12']['ORC.12.5'].toString() != "") { orc[index].orderingProvider.suffix = seg['ORC.12']['ORC.12.5']; }
		if (seg['ORC.12']['ORC.12.6'].toString() != "") { orc[index].orderingProvider.prefix = seg['ORC.12']['ORC.12.6']; }
		if (seg['ORC.12']['ORC.12.7'].toString() != "") { orc[index].orderingProvider.degree = seg['ORC.12']['ORC.12.7']; }
		if (seg['ORC.12']['ORC.12.8'].toString() != "") { orc[index].orderingProvider.sourceTable = seg['ORC.12']['ORC.12.8']; }
		orc[index].orderingProvider.assigningAuthority = {};
		if (seg['ORC.12']['ORC.12.9']['ORC.12.9.1'].toString() != "") { orc[index].orderingProvider.assigningAuthority.id = seg['ORC.12']['ORC.12.9']['ORC.12.9.1']; }
		if (seg['ORC.12']['ORC.12.9']['ORC.12.9.2'].toString() != "") { orc[index].orderingProvider.assigningAuthority.universalId = seg['ORC.12']['ORC.12.9']['ORC.12.9.2']; }
		if (seg['ORC.12']['ORC.12.9']['ORC.12.9.3'].toString() != "") { orc[index].orderingProvider.assigningAuthority.universalIdType = seg['ORC.12']['ORC.12.9']['ORC.12.9.3']; }
		if (Object.keys(orc[index].orderingProvider.assigningAuthority).length == 0) {
			delete orc[index].orderingProvider.assigningAuthority;
		}
		if (seg['ORC.12']['ORC.12.10'].toString() != "") { orc[index].orderingProvider.nameTypeCode = seg['ORC.12']['ORC.12.10']; }
		if (seg['ORC.12']['ORC.12.11'].toString() != "") { orc[index].orderingProvider.identifierCheckDigit = seg['ORC.12']['ORC.12.11']; }
		if (seg['ORC.12']['ORC.12.12'].toString() != "") { orc[index].orderingProvider.codeIdentifyingCheckDigitScheme = seg['ORC.12']['ORC.12.12']; }
		if (seg['ORC.12']['ORC.12.13'].toString() != "") { orc[index].orderingProvider.identifierTypeCode = seg['ORC.12']['ORC.12.13']; }
		orc[index].orderingProvider.assigningFacility = {};
		if (seg['ORC.12']['ORC.12.14']['ORC.12.14.1'].toString() != "") { orc[index].orderingProvider.assigningFacility.id = seg['ORC.12']['ORC.12.14']['ORC.12.14.1']; }
		if (seg['ORC.12']['ORC.12.14']['ORC.12.14.2'].toString() != "") { orc[index].orderingProvider.assigningFacility.universalId = seg['ORC.12']['ORC.12.14']['ORC.12.14.2']; }
		if (seg['ORC.12']['ORC.12.14']['ORC.12.14.3'].toString() != "") { orc[index].orderingProvider.assigningFacility.universalIdType = seg['ORC.12']['ORC.12.14']['ORC.12.14.3']; }
		if (Object.keys(orc[index].orderingProvider.assigningFacility).length == 0) {
			delete orc[index].orderingProvider.assigningFacility;
		}
		if (Object.keys(orc[index].orderingProvider).length == 0) {
			delete orc[index].orderingProvider;
		}

		// ORC.13, enterersLocation
		orc[index].enterersLocation = {};
		if (seg['ORC.13']['ORC.13.1'].toString() != "") { orc[index].enterersLocation.pointOfCare = seg['ORC.13']['ORC.13.1']; }
		if (seg['ORC.13']['ORC.13.2'].toString() != "") { orc[index].enterersLocation.room = seg['ORC.13']['ORC.13.2']; }
		if (seg['ORC.13']['ORC.13.3'].toString() != "") { orc[index].enterersLocation.bed = seg['ORC.13']['ORC.13.3']; }
		orc[index].enterersLocation.facility = {};
		if (seg['ORC.13']['ORC.13.4']['ORC.13.4.1'].toString() != "") { orc[index].enterersLocation.facility.nameSpaceId =  seg['ORC.13']['ORC.13.4']['ORC.13.4.1']; }
		if (seg['ORC.13']['ORC.13.4']['ORC.13.4.2'].toString() != "") { orc[index].enterersLocation.facility.universalId =  seg['ORC.13']['ORC.13.4']['ORC.13.4.2']; }
		if (seg['ORC.13']['ORC.13.4']['ORC.13.4.3'].toString() != "") { orc[index].enterersLocation.facility.universalIdType =  seg['ORC.13']['ORC.13.4']['ORC.13.4.3']; }
		if (Object.keys(orc[index].enterersLocation.facility).length == 0) {
			delete orc[index].enterersLocation.facility;
		}
		if (seg['ORC.13']['ORC.13.5'].toString() != "") { orc[index].enterersLocation.locationStatus = seg['ORC.13']['ORC.13.5']; }
		if (seg['ORC.13']['ORC.13.6'].toString() != "") { orc[index].enterersLocation.personLocationType = seg['ORC.13']['ORC.13.6']; }
		if (seg['ORC.13']['ORC.13.7'].toString() != "") { orc[index].enterersLocation.building = seg['ORC.13']['ORC.13.7']; }
		if (seg['ORC.13']['ORC.13.8'].toString() != "") { orc[index].enterersLocation.floor = seg['ORC.13']['ORC.13.8']; }
		if (seg['ORC.13']['ORC.13.9'].toString() != "") { orc[index].enterersLocation.locationDescription = seg['ORC.13']['ORC.13.9']; }
		if (Object.keys(orc[index].enterersLocation).length == 0) {
			delete orc[index].enterersLocation;
		}

		// ORC.14, callBackPhoneNumber
		orc[index].callBackPhoneNumber = [];
		for each (field in seg['ORC.14']) {
			var block = {};
			if (field['ORC.14.1'].toString() != "") { block.number = field['ORC.14.1']; }
			if (field['ORC.14.2'].toString() != "") { block.telecommunicationUseCode = field['ORC.14.2']; }
			if (field['ORC.14.3'].toString() != "") { block.telecommunicationEquipmentType = field['ORC.14.3']; }
			if (field['ORC.14.4'].toString() != "") { block.emailAddress = field['ORC.14.4']; }
			if (field['ORC.14.5'].toString() != "") { block.countryCode = field['ORC.14.5']; }
			if (field['ORC.14.6'].toString() != "") { block.areaCityCode = field['ORC.14.6']; }
			if (field['ORC.14.7'].toString() != "") { block.phoneNumber = field['ORC.14.7']; }
			if (field['ORC.14.8'].toString() != "") { block.extension = field['ORC.14.8']; }
			if (field['ORC.14.9'].toString() != "") { block.text = field['ORC.14.9']; }
			if (Object.keys(block).length > 0) {
				orc[index].callBackPhoneNumber.push(block);
			}
		}
		if (orc[index].callBackPhoneNumber.length == 0) {
			delete orc[index].callBackPhoneNumber;
		}

		// ORC.15, orderEffectiveDateTime
		if (seg['ORC.15']['ORC.15.1'].toString() != "") { orc[index].orderEffectiveDateTime = seg['ORC.15']['ORC.15.1']; }

		// ORC.16, orderControlCodeReason
		obx[index].orderControlCodeReason = {};
		if (seg['ORC.16']['ORC.16.1'].toString() != "") { obx[index].orderControlCodeReason.id = seg['ORC.16']['ORC.16.1']; }
		if (seg['ORC.16']['ORC.16.2'].toString() != "") { obx[index].orderControlCodeReason.text = seg['ORC.16']['ORC.16.2']; }
		if (seg['ORC.16']['ORC.16.3'].toString() != "") { obx[index].orderControlCodeReason.codingSystem = seg['ORC.16']['ORC.16.3']; }
		if (seg['ORC.16']['ORC.16.4'].toString() != "") { obx[index].orderControlCodeReason.altId = seg['ORC.16']['ORC.16.4']; }
		if (seg['ORC.16']['ORC.16.5'].toString() != "") { obx[index].orderControlCodeReason.altText = seg['ORC.16']['ORC.16.5']; }
		if (seg['ORC.16']['ORC.16.6'].toString() != "") { obx[index].orderControlCodeReason.altCodingSystem = seg['ORC.16']['ORC.16.6']; }
		if (Object.keys(obx[index].orderControlCodeReason).length == 0) {
			delete obx[index].orderControlCodeReason;
		}

		// ORC.17, enteringOrganization
		obx[index].enteringOrganization = {};
		if (seg['ORC.17']['ORC.17.1'].toString() != "") { obx[index].enteringOrganization.id = seg['ORC.17']['ORC.17.1']; }
		if (seg['ORC.17']['ORC.17.2'].toString() != "") { obx[index].enteringOrganization.text = seg['ORC.17']['ORC.17.2']; }
		if (seg['ORC.17']['ORC.17.3'].toString() != "") { obx[index].enteringOrganization.codingSystem = seg['ORC.17']['ORC.17.3']; }
		if (seg['ORC.17']['ORC.17.4'].toString() != "") { obx[index].enteringOrganization.altId = seg['ORC.17']['ORC.17.4']; }
		if (seg['ORC.17']['ORC.17.5'].toString() != "") { obx[index].enteringOrganization.altText = seg['ORC.17']['ORC.17.5']; }
		if (seg['ORC.17']['ORC.17.6'].toString() != "") { obx[index].enteringOrganization.altCodingSystem = seg['ORC.17']['ORC.17.6']; }
		if (Object.keys(obx[index].enteringOrganization).length == 0) {
			delete obx[index].enteringOrganization;
		}

		// ORC.18, enteringDevice
		obx[index].enteringDevice = {};
		if (seg['ORC.18']['ORC.18.1'].toString() != "") { obx[index].enteringDevice.id = seg['ORC.18']['ORC.18.1']; }
		if (seg['ORC.18']['ORC.18.2'].toString() != "") { obx[index].enteringDevice.text = seg['ORC.18']['ORC.18.2']; }
		if (seg['ORC.18']['ORC.18.3'].toString() != "") { obx[index].enteringDevice.codingSystem = seg['ORC.18']['ORC.18.3']; }
		if (seg['ORC.18']['ORC.18.4'].toString() != "") { obx[index].enteringDevice.altId = seg['ORC.18']['ORC.18.4']; }
		if (seg['ORC.18']['ORC.18.5'].toString() != "") { obx[index].enteringDevice.altText = seg['ORC.18']['ORC.18.5']; }
		if (seg['ORC.18']['ORC.18.6'].toString() != "") { obx[index].enteringDevice.altCodingSystem = seg['ORC.18']['ORC.18.6']; }
		if (Object.keys(obx[index].enteringDevice).length == 0) {
			delete obx[index].enteringDevice;
		}

		// ORC.19, actionBy
		orc[index].actionBy = {};
		if (seg['ORC.32']['ORC.32.1'].toString() != "") { orc[index].actionBy.id = seg['ORC.32']['ORC.32.1']; }
		if (seg['ORC.32']['ORC.32.2'].toString() != "") { orc[index].actionBy.lastName = seg['ORC.32']['ORC.32.2']; }
		if (seg['ORC.32']['ORC.32.3'].toString() != "") { orc[index].actionBy.firstName = seg['ORC.32']['ORC.32.3']; }
		if (seg['ORC.32']['ORC.32.4'].toString() != "") { orc[index].actionBy.middleInitOrName = seg['ORC.32']['ORC.32.4']; }
		if (seg['ORC.32']['ORC.32.5'].toString() != "") { orc[index].actionBy.suffix = seg['ORC.32']['ORC.32.5']; }
		if (seg['ORC.32']['ORC.32.6'].toString() != "") { orc[index].actionBy.prefix = seg['ORC.32']['ORC.32.6']; }
		if (seg['ORC.32']['ORC.32.7'].toString() != "") { orc[index].actionBy.degree = seg['ORC.32']['ORC.32.7']; }
		if (seg['ORC.32']['ORC.32.8'].toString() != "") { orc[index].actionBy.sourceTable = seg['ORC.32']['ORC.32.8']; }
		orc[index].actionBy.assigningAuthority = {};
		if (seg['ORC.32']['ORC.32.9']['ORC.32.9.1'].toString() != "") { orc[index].actionBy.assigningAuthority.id = seg['ORC.32']['ORC.32.9']['ORC.32.9.1']; }
		if (seg['ORC.32']['ORC.32.9']['ORC.32.9.2'].toString() != "") { orc[index].actionBy.assigningAuthority.universalId = seg['ORC.32']['ORC.32.9']['ORC.32.9.2']; }
		if (seg['ORC.32']['ORC.32.9']['ORC.32.9.3'].toString() != "") { orc[index].actionBy.assigningAuthority.universalIdType = seg['ORC.32']['ORC.32.9']['ORC.32.9.3']; }
		if (Object.keys(orc[index].actionBy.assigningAuthority).length == 0) {
			delete orc[index].actionBy.assigningAuthority;
		}
		if (seg['ORC.32']['ORC.32.10'].toString() != "") { orc[index].actionBy.nameTypeCode = seg['ORC.32']['ORC.32.10']; }
		if (seg['ORC.32']['ORC.32.11'].toString() != "") { orc[index].actionBy.identifierCheckDigit = seg['ORC.32']['ORC.32.11']; }
		if (seg['ORC.32']['ORC.32.12'].toString() != "") { orc[index].actionBy.codeIdentifyingCheckDigitScheme = seg['ORC.32']['ORC.32.12']; }
		if (seg['ORC.32']['ORC.32.13'].toString() != "") { orc[index].actionBy.identifierTypeCode = seg['ORC.32']['ORC.32.13']; }
		orc[index].actionBy.assigningFacility = {};
		if (seg['ORC.32']['ORC.32.14']['ORC.32.14.1'].toString() != "") { orc[index].actionBy.assigningFacility.id = seg['ORC.32']['ORC.32.14']['ORC.32.14.1']; }
		if (seg['ORC.32']['ORC.32.14']['ORC.32.14.2'].toString() != "") { orc[index].actionBy.assigningFacility.universalId = seg['ORC.32']['ORC.32.14']['ORC.32.14.2']; }
		if (seg['ORC.32']['ORC.32.14']['ORC.32.14.3'].toString() != "") { orc[index].actionBy.assigningFacility.universalIdType = seg['ORC.32']['ORC.32.14']['ORC.32.14.3']; }
		if (Object.keys(orc[index].actionBy.assigningFacility).length == 0) {
			delete orc[index].actionBy.assigningFacility;
		}
		if (Object.keys(orc[index].actionBy).length == 0) {
			delete orc[index].actionBy;
		}

		// NTE (ORC)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			orc[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				orc[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { orc[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { orc[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				orc[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						orc[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}

				// clean up NTE and increment index
				if (Object.keys(nte[indexNTE]).length == 0) {
					delete nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// OBR (ORC)
		var obrGroup = getSegmentsAfter(msg,seg,'OBR',true);
		if (obrGroup.length > 0) {
			orc[index].obr = [];
			var indexOBR = 0;
			for each (obrSeg in obrGroup) {
				orc[index].obr[indexOBR] = {};

				// OBR.1, setId
				if (obrSeg['OBR.1']['OBR.1.1'].toString() != "") {orc[index].obr[indexOBR].setId = obrSeg['OBR.1']['OBR.1.1']; }
				
				// OBR.2, placerOrderNumber
				orc[index].obr[indexOBR].placerOrderNumber = {};
				if (obrSeg['OBR.2']['OBR.2.1'].toString() != "") { orc[index].obr[indexOBR].placerOrderNumber.id = obrSeg['OBR.2']['OBR.2.1']; }
				if (obrSeg['OBR.2']['OBR.2.2'].toString() != "") { orc[index].obr[indexOBR].placerOrderNumber.namespaceId = obrSeg['OBR.2']['OBR.2.2']; }
				if (obrSeg['OBR.2']['OBR.2.3'].toString() != "") { orc[index].obr[indexOBR].placerOrderNumber.universalId = obrSeg['OBR.2']['OBR.2.3']; }
				if (obrSeg['OBR.2']['OBR.2.4'].toString() != "") { orc[index].obr[indexOBR].placerOrderNumber.universalIdType = obrSeg['OBR.2']['OBR.2.4']; }
				if (Object.keys(block.placerOrderNumber).length == 0) {
					delete block.placerOrderNumber;
				}

				// OBR.3, fillerOrderNumber
				orc[index].obr[indexOBR].fillerOrderNumber = {};
				if (obrSeg['OBR.3']['OBR.3.1'].toString() != "") { orc[index].obr[indexOBR].fillerOrderNumber.id = obrSeg['OBR.3']['OBR.3.1']; }
				if (obrSeg['OBR.3']['OBR.3.2'].toString() != "") { orc[index].obr[indexOBR].fillerOrderNumber.namespaceId = obrSeg['OBR.3']['OBR.3.2']; }
				if (obrSeg['OBR.3']['OBR.3.3'].toString() != "") { orc[index].obr[indexOBR].fillerOrderNumber.universalId = obrSeg['OBR.3']['OBR.3.3']; }
				if (obrSeg['OBR.3']['OBR.3.4'].toString() != "") { orc[index].obr[indexOBR].fillerOrderNumber.universalIdType = obrSeg['OBR.3']['OBR.3.4']; }
				if (Object.keys(block.fillerOrderNumber).length == 0) {
					delete block.fillerOrderNumber;
				}
				
				// OBR.4, universalServiceID
				orc[index].obr[indexOBR].universalServiceID = {};
				if (obrSeg['OBR.4']['OBR.4.1'].toString() != "") { orc[index].obr[indexOBR].universalServiceID.id = obrSeg['OBR.4']['OBR.4.1']; }
				if (obrSeg['OBR.4']['OBR.4.2'].toString() != "") { orc[index].obr[indexOBR].universalServiceID.text = obrSeg['OBR.4']['OBR.4.2']; }
				if (obrSeg['OBR.4']['OBR.4.3'].toString() != "") { orc[index].obr[indexOBR].universalServiceID.codingSystem = obrSeg['OBR.4']['OBR.4.3']; }
				if (obrSeg['OBR.4']['OBR.4.4'].toString() != "") { orc[index].obr[indexOBR].universalServiceID.altId = obrSeg['OBR.4']['OBR.4.4']; }
				if (obrSeg['OBR.4']['OBR.4.5'].toString() != "") { orc[index].obr[indexOBR].universalServiceID.altText = obrSeg['OBR.4']['OBR.4.5']; }
				if (obrSeg['OBR.4']['OBR.4.6'].toString() != "") { orc[index].obr[indexOBR].universalServiceID.altCodingSystem = obrSeg['OBR.4']['OBR.4.6']; }
				if (Object.keys(orc[index].obr[indexOBR].universalServiceID).length == 0) {
					delete orc[index].obr[indexOBR].universalServiceID;
				}

				// OBR.5, priority
				if (obrSeg['OBR.5']['OBR.5.1'].toString() != "") {orc[index].obr[indexOBR].priority = obrSeg['OBR.5']['OBR.5.1']; }
				
				// OBR.6, requestedDatetime
				if (obrSeg['OBR.6']['OBR.6.1'].toString() != "") {orc[index].obr[indexOBR].requestedDatetime = obrSeg['OBR.6']['OBR.6.1']; }
				
				// OBR.7, observationDateTime
				if (obrSeg['OBR.7']['OBR.7.1'].toString() != "") {orc[index].obr[indexOBR].observationDateTime = obrSeg['OBR.7']['OBR.7.1']; }
				
				// OBR.8, observationEndDateTime
				if (obrSeg['OBR.8']['OBR.8.1'].toString() != "") {orc[index].obr[indexOBR].observationEndDateTime = obrSeg['OBR.8']['OBR.8.1']; }
				
				// OBR.9, collectionVolume
				orc[index].obr[indexOBR].collectionVolume = {};
				if (obrSeg['OBR.9']['OBR.9.1'].toString() != "") { orc[index].obr[indexOBR].collectionVolume.quantity = obrSeg['OBR.9']['OBR.9.1']; }
				if (obrSeg['OBR.9']['OBR.9.2'].toString() != "") { orc[index].obr[indexOBR].collectionVolume.units = obrSeg['OBR.9']['OBR.9.2']; }
				if (Object.keys(orc[index].obr[indexOBR].collectionVolume).length == 0) {
					delete orc[index].obr[indexOBR].collectionVolume;
				}

				// OBR.10, collectorIdentifier
				orc[index].obr[indexOBR].collectorIdentifier = [];
				for each (field in obrSeg['OBR.10']) {
					var block = {};
					if (field['OBR.10.1'].toString() != "") { block.id = field['OBR.10.1']; }
					if (field['OBR.10.2'].toString() != "") { block.lastName = field['OBR.10.2']; }
					if (field['OBR.10.3'].toString() != "") { block.firstName = field['OBR.10.3']; }
					if (field['OBR.10.4'].toString() != "") { block.middleInitOrName = field['OBR.10.4']; }
					if (field['OBR.10.5'].toString() != "") { block.suffix = field['OBR.10.5']; }
					if (field['OBR.10.6'].toString() != "") { block.prefix = field['OBR.10.6']; }
					if (field['OBR.10.7'].toString() != "") { block.degree = field['OBR.10.7']; }
					if (field['OBR.10.8'].toString() != "") { block.sourceTable = field['OBR.10.8']; }
					block.assigningAuthority = {};
					if (field['OBR.10.9']['OBR.10.9.1'].toString() != "") { block.assigningAuthority.id = field['OBR.10.9']['OBR.10.9.1']; }
					if (field['OBR.10.9']['OBR.10.9.2'].toString() != "") { block.assigningAuthority.universalId = field['OBR.10.9']['OBR.10.9.2']; }
					if (field['OBR.10.9']['OBR.10.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['OBR.10.9']['OBR.10.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['OBR.10.10'].toString() != "") { block.nameTypeCode = field['OBR.10.10']; }
					if (field['OBR.10.11'].toString() != "") { block.identifierCheckDigit = field['OBR.10.11']; }
					if (field['OBR.10.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['OBR.10.12']; }
					if (field['OBR.10.13'].toString() != "") { block.identifierTypeCode = field['OBR.10.13']; }
					block.assigningFacility = {};
					if (field['OBR.10.14']['OBR.10.14.1'].toString() != "") { block.assigningFacility.id = field['OBR.10.14']['OBR.10.14.1']; }
					if (field['OBR.10.14']['OBR.10.14.2'].toString() != "") { block.assigningFacility.universalId = field['OBR.10.14']['OBR.10.14.2']; }
					if (field['OBR.10.14']['OBR.10.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['OBR.10.14']['OBR.10.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].collectorIdentifier.push(block);
					}
				}
				if (orc[index].obr[indexOBR].collectorIdentifier.length == 0) {
					delete orc[index].obr[indexOBR].collectorIdentifier;
				}

				// OBR.11, specimenActionCode
				if (obrSeg['OBR.11']['OBR.11.1'].toString() != "") {orc[index].obr[indexOBR].specimenActionCode = obrSeg['OBR.11']['OBR.11.1']; }
				
				// OBR.12, dangerCode
				orc[index].obr[indexOBR].dangerCode = {};
				if (obrSeg['OBR.12']['OBR.12.1'].toString() != "") { orc[index].obr[indexOBR].dangerCode.id = obrSeg['OBR.12']['OBR.12.1']; }
				if (obrSeg['OBR.12']['OBR.12.2'].toString() != "") { orc[index].obr[indexOBR].dangerCode.text = obrSeg['OBR.12']['OBR.12.2']; }
				if (obrSeg['OBR.12']['OBR.12.3'].toString() != "") { orc[index].obr[indexOBR].dangerCode.codingSystem = obrSeg['OBR.12']['OBR.12.3']; }
				if (obrSeg['OBR.12']['OBR.12.4'].toString() != "") { orc[index].obr[indexOBR].dangerCode.altId = obrSeg['OBR.12']['OBR.12.4']; }
				if (obrSeg['OBR.12']['OBR.12.5'].toString() != "") { orc[index].obr[indexOBR].dangerCode.altText = obrSeg['OBR.12']['OBR.12.5']; }
				if (obrSeg['OBR.12']['OBR.12.6'].toString() != "") { orc[index].obr[indexOBR].dangerCode.altCodingSystem = obrSeg['OBR.12']['OBR.12.6']; }
				if (Object.keys(orc[index].obr[indexOBR].dangerCode).length == 0) {
					delete orc[index].obr[indexOBR].dangerCode;
				}
				
				// OBR.13, relevantClinicalInfo
				if (obrSeg['OBR.13']['OBR.13.1'].toString() != "") {orc[index].obr[indexOBR].relevantClinicalInfo = obrSeg['OBR.13']['OBR.13.1']; }
				
				// OBR.14, specimenReceivedDateTime
				if (obrSeg['OBR.14']['OBR.14.1'].toString() != "") {orc[index].obr[indexOBR].specimenReceivedDateTime = obrSeg['OBR.14']['OBR.14.1']; }
				
				// OBR.15, specimenSource
				orc[index].obr[indexOBR].specimenSource = {};
				orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode = {};
				if (obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.1'].toString() != "") { orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode.id = obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.1']; }
				if (obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.2'].toString() != "") { orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode.text = obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.2']; }
				if (obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.3'].toString() != "") { orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode.codingSystem = obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.3']; }
				if (obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.4'].toString() != "") { orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode.altId = obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.4']; }
				if (obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.5'].toString() != "") { orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode.altText = obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.5']; }
				if (obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.6'].toString() != "") { orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode.altCodingSystem = obrSeg['OBR.15']['OBR.15.1']['OBR.15.1.6']; }
				if (Object.keys(orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode).length == 0) {
					delete orc[index].obr[indexOBR].specimenSource.specimenSourceNameOrCode;
				}
				if (obrSeg['OBR.15']['OBR.15.2'].toString() != "") {
					orc[index].obr[indexOBR].specimenSource.additives = obrSeg['OBR.15']['OBR.15.2'];
				}
				if (obrSeg['OBR.15']['OBR.15.3'].toString() != "") {
					orc[index].obr[indexOBR].specimenSource.freetext = obrSeg['OBR.15']['OBR.15.3'];
				}
				orc[index].obr[indexOBR].specimenSource.bodySite = {};
				if (obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.1'].toString() != "") { orc[index].obr[indexOBR].specimenSource.bodySite.id = obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.1']; }
				if (obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.2'].toString() != "") { orc[index].obr[indexOBR].specimenSource.bodySite.text = obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.2']; }
				if (obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.3'].toString() != "") { orc[index].obr[indexOBR].specimenSource.bodySite.codingSystem = obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.3']; }
				if (obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.4'].toString() != "") { orc[index].obr[indexOBR].specimenSource.bodySite.altId = obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.4']; }
				if (obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.5'].toString() != "") { orc[index].obr[indexOBR].specimenSource.bodySite.altText = obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.5']; }
				if (obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.6'].toString() != "") { orc[index].obr[indexOBR].specimenSource.bodySite.altCodingSystem = obrSeg['OBR.15']['OBR.15.4']['OBR.15.4.6']; }
				if (Object.keys(orc[index].obr[indexOBR].specimenSource.bodySite).length == 0) {
					delete orc[index].obr[indexOBR].specimenSource.bodySite;
				}
				orc[index].obr[indexOBR].specimenSource.siteModifier = {};
				if (obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.1'].toString() != "") { orc[index].obr[indexOBR].specimenSource.siteModifier.id = obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.1']; }
				if (obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.2'].toString() != "") { orc[index].obr[indexOBR].specimenSource.siteModifier.text = obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.2']; }
				if (obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.3'].toString() != "") { orc[index].obr[indexOBR].specimenSource.siteModifier.codingSystem = obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.3']; }
				if (obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.4'].toString() != "") { orc[index].obr[indexOBR].specimenSource.siteModifier.altId = obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.4']; }
				if (obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.5'].toString() != "") { orc[index].obr[indexOBR].specimenSource.siteModifier.altText = obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.5']; }
				if (obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.6'].toString() != "") { orc[index].obr[indexOBR].specimenSource.siteModifier.altCodingSystem = obrSeg['OBR.15']['OBR.15.5']['OBR.15.5.6']; }
				if (Object.keys(orc[index].obr[indexOBR].specimenSource.siteModifier).length == 0) {
					delete orc[index].obr[indexOBR].specimenSource.siteModifier;
				}
				orc[index].obr[indexOBR].specimenSource.collectionMethod = {};
				if (obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.1'].toString() != "") { orc[index].obr[indexOBR].specimenSource.collectionMethod.id = obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.1']; }
				if (obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.2'].toString() != "") { orc[index].obr[indexOBR].specimenSource.collectionMethod.text = obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.2']; }
				if (obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.3'].toString() != "") { orc[index].obr[indexOBR].specimenSource.collectionMethod.codingSystem = obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.3']; }
				if (obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.4'].toString() != "") { orc[index].obr[indexOBR].specimenSource.collectionMethod.altId = obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.4']; }
				if (obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.5'].toString() != "") { orc[index].obr[indexOBR].specimenSource.collectionMethod.altText = obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.5']; }
				if (obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.6'].toString() != "") { orc[index].obr[indexOBR].specimenSource.collectionMethod.altCodingSystem = obrSeg['OBR.15']['OBR.15.6']['OBR.15.6.6']; }
				if (Object.keys(orc[index].obr[indexOBR].specimenSource.collectionMethod).length == 0) {
					delete orc[index].obr[indexOBR].specimenSource.collectionMethod;
				}
				if (Object.keys(orc[index].obr[indexOBR].specimenSource).length == 0) {
					delete orc[index].obr[indexOBR].specimenSource;
				}

				// OBR.16, orderingProvider
				orc[index].obr[indexOBR].orderingProvider = [];
				for each (field in obrSeg['OBR.16']) {
					var block = {};
					if (field['OBR.16.1'].toString() != "") { block.id = field['OBR.16.1']; }
					if (field['OBR.16.2'].toString() != "") { block.lastName = field['OBR.16.2']; }
					if (field['OBR.16.3'].toString() != "") { block.firstName = field['OBR.16.3']; }
					if (field['OBR.16.4'].toString() != "") { block.middleInitOrName = field['OBR.16.4']; }
					if (field['OBR.16.5'].toString() != "") { block.suffix = field['OBR.16.5']; }
					if (field['OBR.16.6'].toString() != "") { block.prefix = field['OBR.16.6']; }
					if (field['OBR.16.7'].toString() != "") { block.degree = field['OBR.16.7']; }
					if (field['OBR.16.8'].toString() != "") { block.sourceTable = field['OBR.16.8']; }
					block.assigningAuthority = {};
					if (field['OBR.16.9']['OBR.16.9.1'].toString() != "") { block.assigningAuthority.id = field['OBR.16.9']['OBR.16.9.1']; }
					if (field['OBR.16.9']['OBR.16.9.2'].toString() != "") { block.assigningAuthority.universalId = field['OBR.16.9']['OBR.16.9.2']; }
					if (field['OBR.16.9']['OBR.16.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['OBR.16.9']['OBR.16.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['OBR.16.10'].toString() != "") { block.nameTypeCode = field['OBR.16.10']; }
					if (field['OBR.16.11'].toString() != "") { block.identifierCheckDigit = field['OBR.16.11']; }
					if (field['OBR.16.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['OBR.16.12']; }
					if (field['OBR.16.13'].toString() != "") { block.identifierTypeCode = field['OBR.16.13']; }
					block.assigningFacility = {};
					if (field['OBR.16.14']['OBR.16.14.1'].toString() != "") { block.assigningFacility.id = field['OBR.16.14']['OBR.16.14.1']; }
					if (field['OBR.16.14']['OBR.16.14.2'].toString() != "") { block.assigningFacility.universalId = field['OBR.16.14']['OBR.16.14.2']; }
					if (field['OBR.16.14']['OBR.16.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['OBR.16.14']['OBR.16.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].orderingProvider.push(block);
					}
				}
				if (orc[index].obr[indexOBR].orderingProvider.length == 0) {
					delete orc[index].obr[indexOBR].orderingProvider;
				}

				// OBR.17, orderCallbackPhoneNumber
				orc[index].obr[indexOBR].orderCallbackPhoneNumber = [];
				for each (field in obrSeg['OBR.17']) {
					var block = {};
					if (field['OBR.17.1'].toString() != "") { block.number = field['OBR.17.1']; }
					if (field['OBR.17.2'].toString() != "") { block.telecommunicationUseCode = field['OBR.17.2']; }
					if (field['OBR.17.3'].toString() != "") { block.telecommunicationEquipmentType = field['OBR.17.3']; }
					if (field['OBR.17.4'].toString() != "") { block.emailAddress = field['OBR.17.4']; }
					if (field['OBR.17.5'].toString() != "") { block.countryCode = field['OBR.17.5']; }
					if (field['OBR.17.6'].toString() != "") { block.areaCityCode = field['OBR.17.6']; }
					if (field['OBR.17.7'].toString() != "") { block.phoneNumber = field['OBR.17.7']; }
					if (field['OBR.17.8'].toString() != "") { block.extension = field['OBR.17.8']; }
					if (field['OBR.17.9'].toString() != "") { block.text = field['OBR.17.9']; }
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].orderCallbackPhoneNumber.push(block);
					}
				}
				if (orc[index].obr[indexOBR].orderCallbackPhoneNumber.length == 0) {
					delete orc[index].obr[indexOBR].orderCallbackPhoneNumber;
				}

				// OBR.18, placerfield1
				if (obrSeg['OBR.18']['OBR.18.1'].toString() != "") {orc[index].obr[indexOBR].placerfield1 = obrSeg['OBR.18']['OBR.18.1']; }
				
				// OBR.19, placerfield2
				if (obrSeg['OBR.19']['OBR.19.1'].toString() != "") {orc[index].obr[indexOBR].placerfield2 = obrSeg['OBR.19']['OBR.19.1']; }
				
				// OBR.20, fillerField1
				if (obrSeg['OBR.20']['OBR.20.1'].toString() != "") {orc[index].obr[indexOBR].fillerField1 = obrSeg['OBR.20']['OBR.20.1']; }
				
				// OBR.21, fillerField2
				if (obrSeg['OBR.21']['OBR.21.1'].toString() != "") {orc[index].obr[indexOBR].fillerField2 = obrSeg['OBR.21']['OBR.21.1']; }
				
				// OBR.22, resultsRptStatusChngDateTime
				if (obrSeg['OBR.22']['OBR.22.1'].toString() != "") {orc[index].obr[indexOBR].resultsRptStatusChngDateTime = obrSeg['OBR.22']['OBR.22.1']; }
				
				// OBR.23, chargeToPractice
				orc[index].obr[indexOBR].chargeToPractice = {};
				orc[index].obr[indexOBR].chargeToPractice.dollarAmount = {};
				if (obrSeg['OBR.23']['OBR.23.1']['OBR.23.1.1'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.dollarAmount.quantity = obrSeg['OBR.23']['OBR.23.1']['OBR.23.1.1']; }
				if (obrSeg['OBR.23']['OBR.23.1']['OBR.23.1.2'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.dollarAmount.denomination = obrSeg['OBR.23']['OBR.23.1']['OBR.23.1.2']; }
				if (Object.keys(orc[index].obr[indexOBR].chargeToPractice.dollarAmount).length == 0) {
					delete orc[index].obr[indexOBR].chargeToPractice.dollarAmount;
				}
				orc[index].obr[indexOBR].chargeToPractice.chargeCode = {};
				if (obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.1'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.chargeCode.id = obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.1']; }
				if (obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.2'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.chargeCode.text = obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.2']; }
				if (obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.3'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.chargeCode.codingSystem = obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.3']; }
				if (obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.4'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.chargeCode.altId = obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.4']; }
				if (obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.5'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.chargeCode.altText = obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.5']; }
				if (obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.6'].toString() !="") { orc[index].obr[indexOBR].chargeToPractice.chargeCode.altCodingSystem = obrSeg['OBR.23']['OBR.23.2']['OBR.23.2.6']; }
				if (Object.keys(orc[index].obr[indexOBR].chargeToPractice.chargeCode).length == 0) {
					delete orc[index].obr[indexOBR].chargeToPractice.chargeCode;
				}
				if (Object.keys(orc[index].obr[indexOBR].chargeToPractice).length == 0) {
					delete orc[index].obr[indexOBR].chargeToPractice;
				}

				// OBR.24, diagnosticServSectID
				if (obrSeg['OBR.24']['OBR.24.1'].toString() != "") {orc[index].obr[indexOBR].diagnosticServSectID = obrSeg['OBR.24']['OBR.24.1']; }
				
				// OBR.25, resultStatus
				if (obrSeg['OBR.25']['OBR.25.1'].toString() != "") {orc[index].obr[indexOBR].resultStatus = obrSeg['OBR.25']['OBR.25.1']; }
				
				// OBR.26, parentResult
				orc[index].obr[indexOBR].parentResult = {};
				orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult = {};
				if (obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.1'].toString() != "") { orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult.id = obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.1']; }
				if (obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.2'].toString() != "") { orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult.text = obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.2']; }
				if (obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.3'].toString() != "") { orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult.codingSystem = obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.3']; }
				if (obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.4'].toString() != "") { orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult.altId = obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.4']; }
				if (obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.5'].toString() != "") { orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult.altText = obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.5']; }
				if (obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.6'].toString() != "") { orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult.altCodingSystem = obrSeg['OBR.26']['OBR.26.1']['OBR.26.1.6']; }
				if (Object.keys(orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult).length == 0) {
					delete orc[index].obr[indexOBR].parentResult.obx3observationIdentifierOfParentResult;
				}
				if (obrSeg['OBR.26']['OBR.26.2'].toString() != "") {orc[index].obr[indexOBR].parentResult.obx4subIdOfParentResult = obrSeg['OBR.26']['OBR.26.2']; }
				if (obrSeg['OBR.26']['OBR.26.3'].toString() != "") {orc[index].obr[indexOBR].parentResult.obx5partOfObservationResultFromParent = obrSeg['OBR.26']['OBR.26.3']; }
				if (Object.keys(orc[index].obr[indexOBR].parentResult).length == 0) {
					delete orc[index].obr[indexOBR].parentResult;
				}


				// OBR.27, quantityTiming
				orc[index].obr[indexOBR].quantityTiming = [];
				for each (field in obrSeg['OBR.27']) {
					var block = {};
					if (field['OBR.27.1'].toString() != "") { block.quantity = field['OBR.27.1']; }
					if (field['OBR.27.2'].toString() != "") { block.interval = field['OBR.27.2']; }
					if (field['OBR.27.3'].toString() != "") { block.duration = field['OBR.27.3']; }
					if (field['OBR.27.4'].toString() != "") { block.startDateTime = field['OBR.27.4']; }
					if (field['OBR.27.5'].toString() != "") { block.endDateTime = field['OBR.27.5']; }
					if (field['OBR.27.6'].toString() != "") { block.priority = field['OBR.27.6']; }
					if (field['OBR.27.7'].toString() != "") { block.condition = field['OBR.27.7']; }
					if (field['OBR.27.8'].toString() != "") { block.text = field['OBR.27.8']; }
					if (field['OBR.27.9'].toString() != "") { block.conjunction = field['OBR.27.9']; }
					if (field['OBR.27.10'].toString() != "") { block.orderSequencing = field['OBR.27.10']; }
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].quantityTiming.push(block)
					}
				}
				if (orc[index].obr[indexOBR].quantityTiming.length == 0) {
					delete orc[index].obr[indexOBR].quantityTiming.length;
				}

				// OBR.28, resultCopiesTo
				orc[index].obr[indexOBR].resultCopiesTo = [];
				for each (field in obrSeg['OBR.28']) {
					var block = {};
					if (field['OBR.28.1'].toString() != "") { block.id = field['OBR.28.1']; }
					if (field['OBR.28.2'].toString() != "") { block.lastName = field['OBR.28.2']; }
					if (field['OBR.28.3'].toString() != "") { block.firstName = field['OBR.28.3']; }
					if (field['OBR.28.4'].toString() != "") { block.middleInitOrName = field['OBR.28.4']; }
					if (field['OBR.28.5'].toString() != "") { block.suffix = field['OBR.28.5']; }
					if (field['OBR.28.6'].toString() != "") { block.prefix = field['OBR.28.6']; }
					if (field['OBR.28.7'].toString() != "") { block.degree = field['OBR.28.7']; }
					if (field['OBR.28.8'].toString() != "") { block.sourceTable = field['OBR.28.8']; }
					block.assigningAuthority = {};
					if (field['OBR.28.9']['OBR.28.9.1'].toString() != "") { block.assigningAuthority.id = field['OBR.28.9']['OBR.28.9.1']; }
					if (field['OBR.28.9']['OBR.28.9.2'].toString() != "") { block.assigningAuthority.universalId = field['OBR.28.9']['OBR.28.9.2']; }
					if (field['OBR.28.9']['OBR.28.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['OBR.28.9']['OBR.28.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['OBR.28.10'].toString() != "") { block.nameTypeCode = field['OBR.28.10']; }
					if (field['OBR.28.11'].toString() != "") { block.identifierCheckDigit = field['OBR.28.11']; }
					if (field['OBR.28.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['OBR.28.12']; }
					if (field['OBR.28.13'].toString() != "") { block.identifierTypeCode = field['OBR.28.13']; }
					block.assigningFacility = {};
					if (field['OBR.28.14']['OBR.28.14.1'].toString() != "") { block.assigningFacility.id = field['OBR.28.14']['OBR.28.14.1']; }
					if (field['OBR.28.14']['OBR.28.14.2'].toString() != "") { block.assigningFacility.universalId = field['OBR.28.14']['OBR.28.14.2']; }
					if (field['OBR.28.14']['OBR.28.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['OBR.28.14']['OBR.28.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].resultCopiesTo.push(block);
					}
				}
				if (orc[index].obr[indexOBR].resultCopiesTo.length == 0) {
					delete orc[index].obr[indexOBR].resultCopiesTo;
				}

				// OBR.29, parent
				orc[index].obr[indexOBR].parent = {};
				orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber = {};
				if (obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.1'].toString() != "") { orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber.id = obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.1']; }
				if (obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.2'].toString() != "") { orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber.namespaceId = obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.2']; }
				if (obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.3'].toString() != "") { orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber.universalId = obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.3']; }
				if (obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.4'].toString() != "") { orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber.universalIdType = obrSeg['OBR.29']['OBR.29.1']['OBR.29.1.4']; }
				if (Object.keys(orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber).length == 0) {
					delete orc[index].obr[indexOBR].parent.parentsPlacerOrderNumber;
				}
				orc[index].obr[indexOBR].parent.parentsFillerOrderNumber = {};
				if (obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.1'].toString() != "") { orc[index].obr[indexOBR].parent.parentsFillerOrderNumber.id = obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.1']; }
				if (obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.2'].toString() != "") { orc[index].obr[indexOBR].parent.parentsFillerOrderNumber.namespaceId = obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.2']; }
				if (obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.3'].toString() != "") { orc[index].obr[indexOBR].parent.parentsFillerOrderNumber.universalId = obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.3']; }
				if (obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.4'].toString() != "") { orc[index].obr[indexOBR].parent.parentsFillerOrderNumber.universalIdType = obrSeg['OBR.29']['OBR.29.2']['OBR.29.2.4']; }
				if (Object.keys(orc[index].obr[indexOBR].parent.parentsFillerOrderNumber).length == 0) {
					delete orc[index].obr[indexOBR].parent.parentsFillerOrderNumber;
				}
				if (Object.keys(orc[index].obr[indexOBR].parent).length == 0) {
					delete orc[index].obr[indexOBR].parent;
				}

				// OBR.30, transportationMode
				if (obrSeg['OBR.30']['OBR.30.1'].toString() != "") {orc[index].obr[indexOBR].transportationMode = obrSeg['OBR.30']['OBR.30.1']; }
				
				// OBR.31, reasonForStudy
				orc[index].obr[indexOBR].reasonForStudy = [];
				for each (field in obrSeg['OBR.31']) {
					var block = {};
					if (field['OBR.31.1'].toString() != "") { block.id = field['OBR.31.1']; }
					if (field['OBR.31.2'].toString() != "") { block.text = field['OBR.31.2']; }
					if (field['OBR.31.3'].toString() != "") { block.codingSystem = field['OBR.31.3']; }
					if (field['OBR.31.4'].toString() != "") { block.altId = field['OBR.31.4']; }
					if (field['OBR.31.5'].toString() != "") { block.altText = field['OBR.31.5']; }
					if (field['OBR.31.6'].toString() != "") { block.altCodingSystem = field['OBR.31.6']; }
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].reasonForStudy.push(block);
					}
				}
				if (orc[index].obr[indexOBR].reasonForStudy.length == 0) {
					delete orc[index].obr[indexOBR].reasonForStudy;
				}

				// OBR.32, principalResultInterpreter
				orc[index].obr[indexOBR].principalResultInterpreter = {};
				if (obrSeg['OBR.32']['OBR.32.1'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.id = obrSeg['OBR.32']['OBR.32.1']; }
				if (obrSeg['OBR.32']['OBR.32.2'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.lastName = obrSeg['OBR.32']['OBR.32.2']; }
				if (obrSeg['OBR.32']['OBR.32.3'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.firstName = obrSeg['OBR.32']['OBR.32.3']; }
				if (obrSeg['OBR.32']['OBR.32.4'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.middleInitOrName = obrSeg['OBR.32']['OBR.32.4']; }
				if (obrSeg['OBR.32']['OBR.32.5'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.suffix = obrSeg['OBR.32']['OBR.32.5']; }
				if (obrSeg['OBR.32']['OBR.32.6'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.prefix = obrSeg['OBR.32']['OBR.32.6']; }
				if (obrSeg['OBR.32']['OBR.32.7'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.degree = obrSeg['OBR.32']['OBR.32.7']; }
				if (obrSeg['OBR.32']['OBR.32.8'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.sourceTable = obrSeg['OBR.32']['OBR.32.8']; }
				orc[index].obr[indexOBR].principalResultInterpreter.assigningAuthority = {};
				if (obrSeg['OBR.32']['OBR.32.9']['OBR.32.9.1'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.assigningAuthority.id = obrSeg['OBR.32']['OBR.32.9']['OBR.32.9.1']; }
				if (obrSeg['OBR.32']['OBR.32.9']['OBR.32.9.2'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.assigningAuthority.universalId = obrSeg['OBR.32']['OBR.32.9']['OBR.32.9.2']; }
				if (obrSeg['OBR.32']['OBR.32.9']['OBR.32.9.3'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.assigningAuthority.universalIdType = obrSeg['OBR.32']['OBR.32.9']['OBR.32.9.3']; }
				if (Object.keys(orc[index].obr[indexOBR].principalResultInterpreter.assigningAuthority).length == 0) {
					delete orc[index].obr[indexOBR].principalResultInterpreter.assigningAuthority;
				}
				if (obrSeg['OBR.32']['OBR.32.10'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.nameTypeCode = obrSeg['OBR.32']['OBR.32.10']; }
				if (obrSeg['OBR.32']['OBR.32.11'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.identifierCheckDigit = obrSeg['OBR.32']['OBR.32.11']; }
				if (obrSeg['OBR.32']['OBR.32.12'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.codeIdentifyingCheckDigitScheme = obrSeg['OBR.32']['OBR.32.12']; }
				if (obrSeg['OBR.32']['OBR.32.13'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.identifierTypeCode = obrSeg['OBR.32']['OBR.32.13']; }
				orc[index].obr[indexOBR].principalResultInterpreter.assigningFacility = {};
				if (obrSeg['OBR.32']['OBR.32.14']['OBR.32.14.1'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.assigningFacility.id = obrSeg['OBR.32']['OBR.32.14']['OBR.32.14.1']; }
				if (obrSeg['OBR.32']['OBR.32.14']['OBR.32.14.2'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.assigningFacility.universalId = obrSeg['OBR.32']['OBR.32.14']['OBR.32.14.2']; }
				if (obrSeg['OBR.32']['OBR.32.14']['OBR.32.14.3'].toString() != "") { orc[index].obr[indexOBR].principalResultInterpreter.assigningFacility.universalIdType = obrSeg['OBR.32']['OBR.32.14']['OBR.32.14.3']; }
				if (Object.keys(orc[index].obr[indexOBR].principalResultInterpreter.assigningFacility).length == 0) {
					delete orc[index].obr[indexOBR].principalResultInterpreter.assigningFacility;
				}
				if (Object.keys(orc[index].obr[indexOBR].principalResultInterpreter).length == 0) {
					delete orc[index].obr[indexOBR].principalResultInterpreter;
				}

				// OBR.33, assistantResultInterpreter
				orc[index].obr[indexOBR].assistantResultInterpreter = [];
				for each (field in obrSeg['OBR.33']) {
					var block = {};
					if (field['OBR.33.1'].toString() != "") { block.id = field['OBR.33.1']; }
					if (field['OBR.33.2'].toString() != "") { block.lastName = field['OBR.33.2']; }
					if (field['OBR.33.3'].toString() != "") { block.firstName = field['OBR.33.3']; }
					if (field['OBR.33.4'].toString() != "") { block.middleInitOrName = field['OBR.33.4']; }
					if (field['OBR.33.5'].toString() != "") { block.suffix = field['OBR.33.5']; }
					if (field['OBR.33.6'].toString() != "") { block.prefix = field['OBR.33.6']; }
					if (field['OBR.33.7'].toString() != "") { block.degree = field['OBR.33.7']; }
					if (field['OBR.33.8'].toString() != "") { block.sourceTable = field['OBR.33.8']; }
					block.assigningAuthority = {};
					if (field['OBR.33.9']['OBR.33.9.1'].toString() != "") { block.assigningAuthority.id = field['OBR.33.9']['OBR.33.9.1']; }
					if (field['OBR.33.9']['OBR.33.9.2'].toString() != "") { block.assigningAuthority.universalId = field['OBR.33.9']['OBR.33.9.2']; }
					if (field['OBR.33.9']['OBR.33.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['OBR.33.9']['OBR.33.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['OBR.33.10'].toString() != "") { block.nameTypeCode = field['OBR.33.10']; }
					if (field['OBR.33.11'].toString() != "") { block.identifierCheckDigit = field['OBR.33.11']; }
					if (field['OBR.33.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['OBR.33.12']; }
					if (field['OBR.33.13'].toString() != "") { block.identifierTypeCode = field['OBR.33.13']; }
					block.assigningFacility = {};
					if (field['OBR.33.14']['OBR.33.14.1'].toString() != "") { block.assigningFacility.id = field['OBR.33.14']['OBR.33.14.1']; }
					if (field['OBR.33.14']['OBR.33.14.2'].toString() != "") { block.assigningFacility.universalId = field['OBR.33.14']['OBR.33.14.2']; }
					if (field['OBR.33.14']['OBR.33.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['OBR.33.14']['OBR.33.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].assistantResultInterpreter.push(block);
					}
				}
				if (orc[index].obr[indexOBR].assistantResultInterpreter.length == 0) {
					delete orc[index].obr[indexOBR].assistantResultInterpreter;
				}

				// OBR.34, technician
				orc[index].obr[indexOBR].technician = [];
				for each (field in obrSeg['OBR.34']) {
					var block = {};
					if (field['OBR.34.1'].toString() != "") { block.id = field['OBR.34.1']; }
					if (field['OBR.34.2'].toString() != "") { block.lastName = field['OBR.34.2']; }
					if (field['OBR.34.3'].toString() != "") { block.firstName = field['OBR.34.3']; }
					if (field['OBR.34.4'].toString() != "") { block.middleInitOrName = field['OBR.34.4']; }
					if (field['OBR.34.5'].toString() != "") { block.suffix = field['OBR.34.5']; }
					if (field['OBR.34.6'].toString() != "") { block.prefix = field['OBR.34.6']; }
					if (field['OBR.34.7'].toString() != "") { block.degree = field['OBR.34.7']; }
					if (field['OBR.34.8'].toString() != "") { block.sourceTable = field['OBR.34.8']; }
					block.assigningAuthority = {};
					if (field['OBR.34.9']['OBR.34.9.1'].toString() != "") { block.assigningAuthority.id = field['OBR.34.9']['OBR.34.9.1']; }
					if (field['OBR.34.9']['OBR.34.9.2'].toString() != "") { block.assigningAuthority.universalId = field['OBR.34.9']['OBR.34.9.2']; }
					if (field['OBR.34.9']['OBR.34.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['OBR.34.9']['OBR.34.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['OBR.34.10'].toString() != "") { block.nameTypeCode = field['OBR.34.10']; }
					if (field['OBR.34.11'].toString() != "") { block.identifierCheckDigit = field['OBR.34.11']; }
					if (field['OBR.34.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['OBR.34.12']; }
					if (field['OBR.34.13'].toString() != "") { block.identifierTypeCode = field['OBR.34.13']; }
					block.assigningFacility = {};
					if (field['OBR.34.14']['OBR.34.14.1'].toString() != "") { block.assigningFacility.id = field['OBR.34.14']['OBR.34.14.1']; }
					if (field['OBR.34.14']['OBR.34.14.2'].toString() != "") { block.assigningFacility.universalId = field['OBR.34.14']['OBR.34.14.2']; }
					if (field['OBR.34.14']['OBR.34.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['OBR.34.14']['OBR.34.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].technician.push(block);
					}
				}
				if (orc[index].obr[indexOBR].technician.length == 0) {
					delete orc[index].obr[indexOBR].technician;
				}

				// OBR.35, transcriptionist
				orc[index].obr[indexOBR].transcriptionist = [];
				for each (field in obrSeg['OBR.35']) {
					var block = {};
					if (field['OBR.35.1'].toString() != "") { block.id = field['OBR.35.1']; }
					if (field['OBR.35.2'].toString() != "") { block.lastName = field['OBR.35.2']; }
					if (field['OBR.35.3'].toString() != "") { block.firstName = field['OBR.35.3']; }
					if (field['OBR.35.4'].toString() != "") { block.middleInitOrName = field['OBR.35.4']; }
					if (field['OBR.35.5'].toString() != "") { block.suffix = field['OBR.35.5']; }
					if (field['OBR.35.6'].toString() != "") { block.prefix = field['OBR.35.6']; }
					if (field['OBR.35.7'].toString() != "") { block.degree = field['OBR.35.7']; }
					if (field['OBR.35.8'].toString() != "") { block.sourceTable = field['OBR.35.8']; }
					block.assigningAuthority = {};
					if (field['OBR.35.9']['OBR.35.9.1'].toString() != "") { block.assigningAuthority.id = field['OBR.35.9']['OBR.35.9.1']; }
					if (field['OBR.35.9']['OBR.35.9.2'].toString() != "") { block.assigningAuthority.universalId = field['OBR.35.9']['OBR.35.9.2']; }
					if (field['OBR.35.9']['OBR.35.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['OBR.35.9']['OBR.35.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['OBR.35.10'].toString() != "") { block.nameTypeCode = field['OBR.35.10']; }
					if (field['OBR.35.11'].toString() != "") { block.identifierCheckDigit = field['OBR.35.11']; }
					if (field['OBR.35.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['OBR.35.12']; }
					if (field['OBR.35.13'].toString() != "") { block.identifierTypeCode = field['OBR.35.13']; }
					block.assigningFacility = {};
					if (field['OBR.35.14']['OBR.35.14.1'].toString() != "") { block.assigningFacility.id = field['OBR.35.14']['OBR.35.14.1']; }
					if (field['OBR.35.14']['OBR.35.14.2'].toString() != "") { block.assigningFacility.universalId = field['OBR.35.14']['OBR.35.14.2']; }
					if (field['OBR.35.14']['OBR.35.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['OBR.35.14']['OBR.35.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].transcriptionist.push(block);
					}
				}
				if (orc[index].obr[indexOBR].transcriptionist.length == 0) {
					delete orc[index].obr[indexOBR].transcriptionist;
				}

				// OBR.36, scheduledDateTime
				if (obrSeg['OBR.36']['OBR.36.1'].toString() != "") {orc[index].obr[indexOBR].scheduledDateTime = obrSeg['OBR.36']['OBR.36.1']; }
				
				// OBR.37, numberOfSampleContainers
				if (obrSeg['OBR.37']['OBR.37.1'].toString() != "") {orc[index].obr[indexOBR].numberOfSampleContainers = obrSeg['OBR.37']['OBR.37.1']; }
				
				// OBR.38, transportLogisticsOfCollectedSample
				orc[index].obr[indexOBR].transportLogisticsOfCollectedSample = [];
				for each (field in obrSeg['OBR.38']) {
					var block = {};
					if (field['OBR.38.1'].toString() != "") { block.id = field['OBR.38.1']; }
					if (field['OBR.38.2'].toString() != "") { block.text = field['OBR.38.2']; }
					if (field['OBR.38.3'].toString() != "") { block.codingSystem = field['OBR.38.3']; }
					if (field['OBR.38.4'].toString() != "") { block.altId = field['OBR.38.4']; }
					if (field['OBR.38.5'].toString() != "") { block.altText = field['OBR.38.5']; }
					if (field['OBR.38.6'].toString() != "") { block.altCodingSystem = field['OBR.38.6']; }
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].transportLogisticsOfCollectedSample.push(block);
					}
				}
				if (orc[index].obr[indexOBR].transportLogisticsOfCollectedSample.length == 0) {
					delete orc[index].obr[indexOBR].transportLogisticsOfCollectedSample;
				}

				// OBR.39, collectorsComment
				orc[index].obr[indexOBR].collectorsComment = [];
				for each (field in obrSeg['OBR.39']) {
					var block = {};
					if (field['OBR.39.1'].toString() != "") { block.id = field['OBR.39.1']; }
					if (field['OBR.39.2'].toString() != "") { block.text = field['OBR.39.2']; }
					if (field['OBR.39.3'].toString() != "") { block.codingSystem = field['OBR.39.3']; }
					if (field['OBR.39.4'].toString() != "") { block.altId = field['OBR.39.4']; }
					if (field['OBR.39.5'].toString() != "") { block.altText = field['OBR.39.5']; }
					if (field['OBR.39.6'].toString() != "") { block.altCodingSystem = field['OBR.39.6']; }
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].collectorsComment.push(block);
					}
				}
				if (orc[index].obr[indexOBR].collectorsComment.length == 0) {
					delete orc[index].obr[indexOBR].collectorsComment;
				}

				// OBR.40, transportArrangementResponsibility
				orc[index].obr[indexOBR].transportArrangementResponsibility = {};
				if (obrSeg['OBR.40']['OBR.40.1'].toString() != "") { orc[index].obr[indexOBR].transportArrangementResponsibility.id = obrSeg['OBR.40']['OBR.40.1']; }
				if (obrSeg['OBR.40']['OBR.40.2'].toString() != "") { orc[index].obr[indexOBR].transportArrangementResponsibility.text = obrSeg['OBR.40']['OBR.40.2']; }
				if (obrSeg['OBR.40']['OBR.40.3'].toString() != "") { orc[index].obr[indexOBR].transportArrangementResponsibility.codingSystem = obrSeg['OBR.40']['OBR.40.3']; }
				if (obrSeg['OBR.40']['OBR.40.4'].toString() != "") { orc[index].obr[indexOBR].transportArrangementResponsibility.altId = obrSeg['OBR.40']['OBR.40.4']; }
				if (obrSeg['OBR.40']['OBR.40.5'].toString() != "") { orc[index].obr[indexOBR].transportArrangementResponsibility.altText = obrSeg['OBR.40']['OBR.40.5']; }
				if (obrSeg['OBR.40']['OBR.40.6'].toString() != "") { orc[index].obr[indexOBR].transportArrangementResponsibility.altCodingSystem = obrSeg['OBR.40']['OBR.40.6']; }
				if (Object.keys(orc[index].obr[indexOBR].transportArrangementResponsibility).length == 0) {
					delete orc[index].obr[indexOBR].transportArrangementResponsibility;
				}

				// OBR.41, transportArranged
				if (obrSeg['OBR.41']['OBR.41.1'].toString() != "") {orc[index].obr[indexOBR].transportArranged = obrSeg['OBR.41']['OBR.41.1']; }
				
				// OBR.42, escortRequired
				if (obrSeg['OBR.42']['OBR.42.1'].toString() != "") {orc[index].obr[indexOBR].escortRequired = obrSeg['OBR.42']['OBR.42.1']; }
				
				// OBR.43, plannedPatientTransportComment
				orc[index].obr[indexOBR].plannedPatientTransportComment = [];
				for each (field in obrSeg['OBR.43']) {
					var block = {};
					if (field['OBR.43.1'].toString() != "") { block.id = field['OBR.43.1']; }
					if (field['OBR.43.2'].toString() != "") { block.text = field['OBR.43.2']; }
					if (field['OBR.43.3'].toString() != "") { block.codingSystem = field['OBR.43.3']; }
					if (field['OBR.43.4'].toString() != "") { block.altId = field['OBR.43.4']; }
					if (field['OBR.43.5'].toString() != "") { block.altText = field['OBR.43.5']; }
					if (field['OBR.43.6'].toString() != "") { block.altCodingSystem = field['OBR.43.6']; }
					if (Object.keys(block).length > 0) {
						orc[index].obr[indexOBR].plannedPatientTransportComment.push(block);
					}
				}
				if (orc[index].obr[indexOBR].plannedPatientTransportComment.length == 0) {
					delete orc[index].obr[indexOBR].plannedPatientTransportComment;
				}

				// NTE (OBR)
				var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
				if (nteGroup.length > 0) {
					orc[index].obr[indexOBR].nte = [];
					var indexNTE = 0;
					for each (nteSeg in nteGroup) {
						orc[index].obr[indexOBR].nte[indexNTE] = {};

						// NTE.1, setId
						if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { orc[index].obr[indexOBR].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

						// NTE.2, sourceOfComment
						if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { orc[index].obr[indexOBR].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

						// NTE.3, comment
						orc[index].obr[indexOBR].nte[indexNTE].comment = [];
						for each (field in nteSeg['NTE.3']) {
							var block = {};
							if (field['NTE.3.1'].toString() != "") { 
								orc[index].obr[indexOBR].nte[indexNTE].comment.push(field['NTE.3.1']);
							}
						}

						// clean up NTE and increment index
						if (Object.keys(nte[indexNTE]).length == 0) {
							delete nte[indexNTE];
						} else {
							indexNTE++;
						}
					}
				}

				// OBX (OBR)
				var obxGroup = getSegmentsAfter(msg,seg,'OBX',true);
				if (obxGroup.length > 0) {
					orc[index].obr[indexOBR].obx = [];
					var indexOBX = 0;
					for each (obxSeg in obxGroup) {
						orc[index].obr[indexOBR].obx[indexOBX] = {};

						// OBX.1, setId
						if (obxSeg['OBX.1']['OBX.1.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].setId = obxSeg['OBX.1']['OBX.1.1']; }

						// OBX.2, valueType
						if (obxSeg['OBX.2']['OBX.2.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].valueType = obxSeg['OBX.2']['OBX.2.1']; }
						
						// OBX.3, identifier
						orc[index].obr[indexOBR].obx[indexOBX].identifier = {};
						if (obxSeg['OBX.3']['OBX.3.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].identifier.id = obxSeg['OBX.3']['OBX.3.1']; }
						if (obxSeg['OBX.3']['OBX.3.2'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].identifier.text = obxSeg['OBX.3']['OBX.3.2']; }
						if (obxSeg['OBX.3']['OBX.3.3'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].identifier.codingSystem = obxSeg['OBX.3']['OBX.3.3']; }
						if (obxSeg['OBX.3']['OBX.3.4'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].identifier.altId = obxSeg['OBX.3']['OBX.3.4']; }
						if (obxSeg['OBX.3']['OBX.3.5'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].identifier.altText = obxSeg['OBX.3']['OBX.3.5']; }
						if (obxSeg['OBX.3']['OBX.3.6'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].identifier.altCodingSystem = obxSeg['OBX.3']['OBX.3.6']; }
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX].identifier).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].identifier;
						}

						// OBX.4, subId
						if (obxSeg['OBX.4']['OBX.4.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].subId = obxSeg['OBX.4']['OBX.4.1']; }
						
						// OBX.5, observationValue
						orc[index].obr[indexOBR].obx[indexOBX].observationValue = [];
						for each (field in obxSeg['OBX.5']) {
							if (field['OBX.5.1'].toString() != "") { 
								orc[index].obr[indexOBR].obx[indexOBX].observationValue.push(field['OBX.5.1']); 
							}
						}

						// OBX.6, units
						orc[index].obr[indexOBR].obx[indexOBX].units = {};
						if (obxSeg['OBX.6']['OBX.6.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].units.id = obxSeg['OBX.6']['OBX.6.1']; }
						if (obxSeg['OBX.6']['OBX.6.2'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].units.text = obxSeg['OBX.6']['OBX.6.2']; }
						if (obxSeg['OBX.6']['OBX.6.3'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].units.codingSystem = obxSeg['OBX.6']['OBX.6.3']; }
						if (obxSeg['OBX.6']['OBX.6.4'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].units.altId = obxSeg['OBX.6']['OBX.6.4']; }
						if (obxSeg['OBX.6']['OBX.6.5'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].units.altText = obxSeg['OBX.6']['OBX.6.5']; }
						if (obxSeg['OBX.6']['OBX.6.6'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].units.altCodingSystem = obxSeg['OBX.6']['OBX.6.6']; }
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX].units).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].units;
						}

						// OBX.7, referenceRange
						if (obxSeg['OBX.7']['OBX.7.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].referenceRange = obxSeg['OBX.7']['OBX.7.1']; }
						
						// OBX.8, abnormalFlag
						orc[index].obr[indexOBR].obx[indexOBX].abnormalFlag = [];
						for each (field in obxSeg['OBX.9']) {
							if (field['OBX.9.1'].toString() != "") { 
								orc[index].obr[indexOBR].obx[indexOBX].abnormalFlag.push(field['OBX.9.1']); 
							}
						}

						// OBX.9, probability
						if (obxSeg['OBX.9']['OBX.9.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].probability = obxSeg['OBX.9']['OBX.9.1']; }
						
						// OBX.10, natureOfAbnormal
						orc[index].obr[indexOBR].obx[indexOBX].natureOfAbnormal = [];
						for each (field in obxSeg['OBX.10']) {
							if (field['OBX.10.1'].toString() != "") { 
								orc[index].obr[indexOBR].obx[indexOBX].natureOfAbnormal.push(field['OBX.10.1']); 
							}
						}

						// OBX.11, observeResultStatus
						if (obxSeg['OBX.11']['OBX.11.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].observeResultStatus = obxSeg['OBX.11']['OBX.11.1']; }
						
						// OBX.12, effectiveDateLastNormalValue
						if (obxSeg['OBX.12']['OBX.12.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].effectiveDateLastNormalValue = obxSeg['OBX.12']['OBX.12.1']; }
						
						// OBX.13, definedAccessChecks
						if (obxSeg['OBX.13']['OBX.13.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].definedAccessChecks = obxSeg['OBX.13']['OBX.13.1']; }
						
						// OBX.14, observationDateTime
						if (obxSeg['OBX.14']['OBX.14.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].observationDateTime = obxSeg['OBX.14']['OBX.14.1']; }
						
						// OBX.15, producersId
						orc[index].obr[indexOBR].obx[indexOBX].producersId = {};
						if (obxSeg['OBX.15']['OBX.15.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].producersId.id = obxSeg['OBX.15']['OBX.15.1']; }
						if (obxSeg['OBX.15']['OBX.15.2'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].producersId.text = obxSeg['OBX.15']['OBX.15.2']; }
						if (obxSeg['OBX.15']['OBX.15.3'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].producersId.codingSystem = obxSeg['OBX.15']['OBX.15.3']; }
						if (obxSeg['OBX.15']['OBX.15.4'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].producersId.altId = obxSeg['OBX.15']['OBX.15.4']; }
						if (obxSeg['OBX.15']['OBX.15.5'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].producersId.altText = obxSeg['OBX.15']['OBX.15.5']; }
						if (obxSeg['OBX.15']['OBX.15.6'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].producersId.altCodingSystem = obxSeg['OBX.15']['OBX.15.6']; }
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX].producersId).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].producersId;
						}

						// OBX.16, responsibleObserver
						orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver = {};
						if (obxSeg['OBX.16']['OBX.16.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.id = obxSeg['OBX.16']['OBX.16.1']; }
						if (obxSeg['OBX.16']['OBX.16.2'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.lastName = obxSeg['OBX.16']['OBX.16.2']; }
						if (obxSeg['OBX.16']['OBX.16.3'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.firstName = obxSeg['OBX.16']['OBX.16.3']; }
						if (obxSeg['OBX.16']['OBX.16.4'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.middleInitOrName = obxSeg['OBX.16']['OBX.16.4']; }
						if (obxSeg['OBX.16']['OBX.16.5'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.suffix = obxSeg['OBX.16']['OBX.16.5']; }
						if (obxSeg['OBX.16']['OBX.16.6'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.prefix = obxSeg['OBX.16']['OBX.16.6']; }
						if (obxSeg['OBX.16']['OBX.16.7'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.degree = obxSeg['OBX.16']['OBX.16.7']; }
						if (obxSeg['OBX.16']['OBX.16.8'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.sourceTable = obxSeg['OBX.16']['OBX.16.8']; }
						orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningAuthority = {};
						if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningAuthority.id = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1']; }
						if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningAuthority.universalId = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2']; }
						if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningAuthority.universalIdType = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3']; }
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningAuthority).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningAuthority;
						}
						if (obxSeg['OBX.16']['OBX.16.10'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.nameTypeCode = obxSeg['OBX.16']['OBX.16.10']; }
						if (obxSeg['OBX.16']['OBX.16.11'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.identifierCheckDigit = obxSeg['OBX.16']['OBX.16.11']; }
						if (obxSeg['OBX.16']['OBX.16.12'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.codeIdentifyingCheckDigitScheme = obxSeg['OBX.16']['OBX.16.12']; }
						if (obxSeg['OBX.16']['OBX.16.13'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.identifierTypeCode = obxSeg['OBX.16']['OBX.16.13']; }
						orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningFacility = {};
						if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningFacility.id = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1']; }
						if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningFacility.universalId = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2']; }
						if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningFacility.universalIdType = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3']; }
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningFacility).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver.assigningFacility;
						}
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].responsibleObserver;
						}

						// OBX.17, observationMethod
						orc[index].obr[indexOBR].obx[indexOBX].observationMethod = [];
						for each (field in obxSeg['OBX.17']) {
							var block = {};
							if (field['OBX.17.1'].toString() != "") { block.id = field['OBX.17.1']; }
							if (field['OBX.17.2'].toString() != "") { block.text = field['OBX.17.2']; }
							if (field['OBX.17.3'].toString() != "") { block.codingSystem = field['OBX.17.3']; }
							if (field['OBX.17.4'].toString() != "") { block.altId = field['OBX.17.4']; }
							if (field['OBX.17.5'].toString() != "") { block.altText = field['OBX.17.5']; }
							if (field['OBX.17.6'].toString() != "") { block.altCodingSystem = field['OBX.17.6']; }
							if (Object.keys(block).length > 0) {
								orc[index].obr[indexOBR].obx[indexOBX].observationMethod.push(block);
							}
						}
						if (orc[index].obr[indexOBR].obx[indexOBX].observationMethod.length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX].observationMethod;
						}

						// NTE (OBX)
						var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
						if (nteGroup.length > 0) {
							orc[index].obr[indexOBR].obx[indexOBX].nte = [];
							var indexNTE = 0;
							for each (nteSeg in nteGroup) {
								orc[index].obr[indexOBR].obx[indexOBX].nte[indexNTE] = {};

								// NTE.1, setId
								if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

								// NTE.2, sourceOfComment
								if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { orc[index].obr[indexOBR].obx[indexOBX].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

								// NTE.3, comment
								orc[index].obr[indexOBR].obx[indexOBX].nte[indexNTE].comment = [];
								for each (field in nteSeg['NTE.3']) {
									var block = {};
									if (field['NTE.3.1'].toString() != "") { 
										orc[index].obr[indexOBR].obx[indexOBX].nte[indexNTE].comment.push(field['NTE.3.1']);
									}
								}

								// clean up NTE and increment index
								if (Object.keys(nte[indexNTE]).length == 0) {
									delete nte[indexNTE];
								} else {
									indexNTE++;
								}
							}
						}

						// clean up OBX and increment index
						if (Object.keys(orc[index].obr[indexOBR].obx[indexOBX]).length == 0) {
							delete orc[index].obr[indexOBR].obx[indexOBX];
						} else {
							indexOBX++;
						}
					}
				}
				
				// clean up OBR and increment index
				if (Object.keys(orc[index].obr[indexOBR]).length == 0) {
					delete orc[index].obr[indexOBR];
				} else {
					indexOBR++;
				}
			}
		}

		// CTI (ORC)
		var ctiGroup = getSegmentsAfter(msg,seg,'CTI',true);
		if (ctiGroup.length > 0) {
			orc[index].cti = [];
			var indexCTI = 0;
			for each (ctiSeg in ctiGroup) {
				orc[index].cti[indexCTI] = {};

				// CTI.1, sponsorStudyIdentifier
				orc[index].cti[indexCTI].sponsorStudyIdentifier = {};
				if (ctiSeg['CTI.1']['CTI.1.1'].toString() != "") { orc[index].cti[indexCTI].sponsorStudyIdentifier.id = ctiSeg['CTI.1']['CTI.1.1']; }
				if (ctiSeg['CTI.1']['CTI.1.2'].toString() != "") { orc[index].cti[indexCTI].sponsorStudyIdentifier.namespaceId = ctiSeg['CTI.1']['CTI.1.2']; }
				if (ctiSeg['CTI.1']['CTI.1.3'].toString() != "") { orc[index].cti[indexCTI].sponsorStudyIdentifier.universalId = ctiSeg['CTI.1']['CTI.1.3']; }
				if (ctiSeg['CTI.1']['CTI.1.4'].toString() != "") { orc[index].cti[indexCTI].sponsorStudyIdentifier.unniveralIdType = ctiSeg['CTI.1']['CTI.1.4']; }
				if (Object.keys(orc[index].cti[indexCTI].sponsorStudyIdentifier).length == 0) {
					delete orc[index].cti[indexCTI].sponsorStudyIdentifier;
				}

				// CTI.2, studyPhaseIdentifier
				orc[index].cti[indexCTI].studyPhaseIdentifier = {};
				if (ctiSeg['CTI.2']['CTI.2.1'].toString() != "") { orc[index].cti[indexCTI].studyPhaseIdentifier.id = ctiSeg['CTI.2']['CTI.2.1']; }
				if (ctiSeg['CTI.2']['CTI.2.2'].toString() != "") { orc[index].cti[indexCTI].studyPhaseIdentifier.text = ctiSeg['CTI.2']['CTI.2.2']; }
				if (ctiSeg['CTI.2']['CTI.2.3'].toString() != "") { orc[index].cti[indexCTI].studyPhaseIdentifier.codingSystem = ctiSeg['CTI.2']['CTI.2.3']; }
				if (ctiSeg['CTI.2']['CTI.2.4'].toString() != "") { orc[index].cti[indexCTI].studyPhaseIdentifier.altId = ctiSeg['CTI.2']['CTI.2.4']; }
				if (ctiSeg['CTI.2']['CTI.2.5'].toString() != "") { orc[index].cti[indexCTI].studyPhaseIdentifier.altText = ctiSeg['CTI.2']['CTI.2.5']; }
				if (ctiSeg['CTI.2']['CTI.2.6'].toString() != "") { orc[index].cti[indexCTI].studyPhaseIdentifier.altCodingSystem = ctiSeg['CTI.2']['CTI.2.6']; }
				if (Object.keys(orc[index].cti[indexCTI].studyPhaseIdentifier).length == 0) {
					delete orc[index].cti[indexCTI].studyPhaseIdentifier;
				}

				// CTI.3, studyScheduledTimePoint
				orc[index].cti[indexCTI].studyScheduledTimePoint = {};
				if (ctiSeg['CTI.3']['CTI.3.1'].toString() != "") { orc[index].cti[indexCTI].studyScheduledTimePoint.id = ctiSeg['CTI.3']['CTI.3.1']; }
				if (ctiSeg['CTI.3']['CTI.3.2'].toString() != "") { orc[index].cti[indexCTI].studyScheduledTimePoint.text = ctiSeg['CTI.3']['CTI.3.2']; }
				if (ctiSeg['CTI.3']['CTI.3.3'].toString() != "") { orc[index].cti[indexCTI].studyScheduledTimePoint.codingSystem = ctiSeg['CTI.3']['CTI.3.3']; }
				if (ctiSeg['CTI.3']['CTI.3.4'].toString() != "") { orc[index].cti[indexCTI].studyScheduledTimePoint.altId = ctiSeg['CTI.3']['CTI.3.4']; }
				if (ctiSeg['CTI.3']['CTI.3.5'].toString() != "") { orc[index].cti[indexCTI].studyScheduledTimePoint.altText = ctiSeg['CTI.3']['CTI.3.5']; }
				if (ctiSeg['CTI.3']['CTI.3.6'].toString() != "") { orc[index].cti[indexCTI].studyScheduledTimePoint.altCodingSystem = ctiSeg['CTI.3']['CTI.3.6']; }
				if (Object.keys(orc[index].cti[indexCTI].studyScheduledTimePoint).length == 0) {
					delete orc[index].cti[indexCTI].studyScheduledTimePoint;
				}

				// clean up CTI and increment index
				if (Object.keys(orc[index].cti[indexCTI]).length == 0) {
					delete orc[index].cti[indexCTI];
				} else {
					indexCTI++;
				}
			}
		}
		
		// clean up ORC and increment index
		if (Object.keys(orc[index]).length == 0) {
			delete orc[index];
		} else {
			index++;
		}
	}
}