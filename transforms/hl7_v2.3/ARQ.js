// ARQ
var arq = {};
if (msg['ARQ'].length() > 0) {
	
	// ARQ.1, placerAppointmentID
	arq.placerAppointmentID = {};
	if (msg['ARQ']['ARQ.1']['ARQ.1.1'].toString() != "") { arq.placerAppointmentID.id = msg['ARQ']['ARQ.1']['ARQ.1.1']; }
	if (msg['ARQ']['ARQ.1']['ARQ.1.2'].toString() != "") { arq.placerAppointmentID.namespaceId = msg['ARQ']['ARQ.1']['ARQ.1.2']; }
	if (msg['ARQ']['ARQ.1']['ARQ.1.3'].toString() != "") { arq.placerAppointmentID.universalId = msg['ARQ']['ARQ.1']['ARQ.1.3']; }
	if (msg['ARQ']['ARQ.1']['ARQ.1.4'].toString() != "") { arq.placerAppointmentID.unniveralIdType = msg['ARQ']['ARQ.1']['ARQ.1.4']; }
	if (Object.keys(arq.placerAppointmentID).length == 0) {
		delete arq.placerAppointmentID;
	}

	// ARQ.2, fillerAppointmentID
	arq.fillerAppointmentID = {};
	if (msg['ARQ']['ARQ.2']['ARQ.2.1'].toString() != "") { arq.fillerAppointmentID.id = msg['ARQ']['ARQ.2']['ARQ.2.1']; }
	if (msg['ARQ']['ARQ.2']['ARQ.2.2'].toString() != "") { arq.fillerAppointmentID.namespaceId = msg['ARQ']['ARQ.2']['ARQ.2.2']; }
	if (msg['ARQ']['ARQ.2']['ARQ.2.3'].toString() != "") { arq.fillerAppointmentID.universalId = msg['ARQ']['ARQ.2']['ARQ.2.3']; }
	if (msg['ARQ']['ARQ.2']['ARQ.2.4'].toString() != "") { arq.fillerAppointmentID.unniveralIdType = msg['ARQ']['ARQ.2']['ARQ.2.4']; }
	if (Object.keys(arq.fillerAppointmentID).length == 0) {
		delete arq.fillerAppointmentID;
	}

	// ARQ.3, occurrenceNumber
	if (msg['ARQ']['ARQ.3']['ARQ.3.1'].toString() != "") { arq.occurrenceNumber = msg['ARQ']['ARQ.3']['ARQ.3.1']; }

	// ARQ.4, placerGroupNumber
	arq.placerGroupNumber = {};
	if (msg['ARQ']['ARQ.4']['ARQ.4.1'].toString() != "") { arq.placerGroupNumber.id = msg['ARQ']['ARQ.4']['ARQ.4.1']; }
	if (msg['ARQ']['ARQ.4']['ARQ.4.2'].toString() != "") { arq.placerGroupNumber.namespaceId = msg['ARQ']['ARQ.4']['ARQ.4.2']; }
	if (msg['ARQ']['ARQ.4']['ARQ.4.3'].toString() != "") { arq.placerGroupNumber.universalId = msg['ARQ']['ARQ.4']['ARQ.4.3']; }
	if (msg['ARQ']['ARQ.4']['ARQ.4.4'].toString() != "") { arq.placerGroupNumber.unniveralIdType = msg['ARQ']['ARQ.4']['ARQ.4.4']; }
	if (Object.keys(arq.placerGroupNumber).length == 0) {
		delete arq.placerGroupNumber;
	}

	// ARQ.5, scheduleID
	arq.scheduleID = {};
	if (msg['ARQ']['ARQ.5']['ARQ.5.1'].toString() != "") { arq.scheduleID.id = msg['ARQ']['ARQ.5']['ARQ.5.1']; }
	if (msg['ARQ']['ARQ.5']['ARQ.5.2'].toString() != "") { arq.scheduleID.text = msg['ARQ']['ARQ.5']['ARQ.5.2']; }
	if (msg['ARQ']['ARQ.5']['ARQ.5.3'].toString() != "") { arq.scheduleID.codingSystem = msg['ARQ']['ARQ.5']['ARQ.5.3']; }
	if (msg['ARQ']['ARQ.5']['ARQ.5.4'].toString() != "") { arq.scheduleID.altId = msg['ARQ']['ARQ.5']['ARQ.5.4']; }
	if (msg['ARQ']['ARQ.5']['ARQ.5.5'].toString() != "") { arq.scheduleID.altText = msg['ARQ']['ARQ.5']['ARQ.5.5']; }
	if (msg['ARQ']['ARQ.5']['ARQ.5.6'].toString() != "") { arq.scheduleID.altCodingSystem = msg['ARQ']['ARQ.5']['ARQ.5.6']; }
	if (Object.keys(arq.scheduleID).length == 0) {
		delete arq.scheduleID;
	}

	// ARQ.6, requestEventReason
	arq.requestEventReason = {};
	if (msg['ARQ']['ARQ.6']['ARQ.6.1'].toString() != "") { arq.requestEventReason.id = msg['ARQ']['ARQ.6']['ARQ.6.1']; }
	if (msg['ARQ']['ARQ.6']['ARQ.6.2'].toString() != "") { arq.requestEventReason.text = msg['ARQ']['ARQ.6']['ARQ.6.2']; }
	if (msg['ARQ']['ARQ.6']['ARQ.6.3'].toString() != "") { arq.requestEventReason.codingSystem = msg['ARQ']['ARQ.6']['ARQ.6.3']; }
	if (msg['ARQ']['ARQ.6']['ARQ.6.4'].toString() != "") { arq.requestEventReason.altId = msg['ARQ']['ARQ.6']['ARQ.6.4']; }
	if (msg['ARQ']['ARQ.6']['ARQ.6.5'].toString() != "") { arq.requestEventReason.altText = msg['ARQ']['ARQ.6']['ARQ.6.5']; }
	if (msg['ARQ']['ARQ.6']['ARQ.6.6'].toString() != "") { arq.requestEventReason.altCodingSystem = msg['ARQ']['ARQ.6']['ARQ.6.6']; }
	if (Object.keys(arq.requestEventReason).length == 0) {
		delete arq.requestEventReason;
	}

	// ARQ.7, appointmentReason
	arq.appointmentReason = {};
	if (msg['ARQ']['ARQ.7']['ARQ.7.1'].toString() != "") { arq.appointmentReason.id = msg['ARQ']['ARQ.7']['ARQ.7.1']; }
	if (msg['ARQ']['ARQ.7']['ARQ.7.2'].toString() != "") { arq.appointmentReason.text = msg['ARQ']['ARQ.7']['ARQ.7.2']; }
	if (msg['ARQ']['ARQ.7']['ARQ.7.3'].toString() != "") { arq.appointmentReason.codingSystem = msg['ARQ']['ARQ.7']['ARQ.7.3']; }
	if (msg['ARQ']['ARQ.7']['ARQ.7.4'].toString() != "") { arq.appointmentReason.altId = msg['ARQ']['ARQ.7']['ARQ.7.4']; }
	if (msg['ARQ']['ARQ.7']['ARQ.7.5'].toString() != "") { arq.appointmentReason.altText = msg['ARQ']['ARQ.7']['ARQ.7.5']; }
	if (msg['ARQ']['ARQ.7']['ARQ.7.6'].toString() != "") { arq.appointmentReason.altCodingSystem = msg['ARQ']['ARQ.7']['ARQ.7.6']; }
	if (Object.keys(arq.appointmentReason).length == 0) {
		delete arq.appointmentReason;
	}

	// ARQ.8, appointmentType
	arq.appointmentType = {};
	if (msg['ARQ']['ARQ.8']['ARQ.8.1'].toString() != "") { arq.appointmentType.id = msg['ARQ']['ARQ.8']['ARQ.8.1']; }
	if (msg['ARQ']['ARQ.8']['ARQ.8.2'].toString() != "") { arq.appointmentType.text = msg['ARQ']['ARQ.8']['ARQ.8.2']; }
	if (msg['ARQ']['ARQ.8']['ARQ.8.3'].toString() != "") { arq.appointmentType.codingSystem = msg['ARQ']['ARQ.8']['ARQ.8.3']; }
	if (msg['ARQ']['ARQ.8']['ARQ.8.4'].toString() != "") { arq.appointmentType.altId = msg['ARQ']['ARQ.8']['ARQ.8.4']; }
	if (msg['ARQ']['ARQ.8']['ARQ.8.5'].toString() != "") { arq.appointmentType.altText = msg['ARQ']['ARQ.8']['ARQ.8.5']; }
	if (msg['ARQ']['ARQ.8']['ARQ.8.6'].toString() != "") { arq.appointmentType.altCodingSystem = msg['ARQ']['ARQ.8']['ARQ.8.6']; }
	if (Object.keys(arq.appointmentType).length == 0) {
		delete arq.appointmentType;
	}

	// ARQ.9, appointmentDuration
	if (msg['ARQ']['ARQ.9']['ARQ.9.1'].toString() != "") { arq.appointmentDuration = msg['ARQ']['ARQ.9']['ARQ.9.1']; }

	// ARQ.10, appointmentDurationUnits
	arq.appointmentDurationUnits = {};
	if (msg['ARQ']['ARQ.10']['ARQ.10.1'].toString() != "") { arq.appointmentDurationUnits.id = msg['ARQ']['ARQ.10']['ARQ.10.1']; }
	if (msg['ARQ']['ARQ.10']['ARQ.10.2'].toString() != "") { arq.appointmentDurationUnits.text = msg['ARQ']['ARQ.10']['ARQ.10.2']; }
	if (msg['ARQ']['ARQ.10']['ARQ.10.3'].toString() != "") { arq.appointmentDurationUnits.codingSystem = msg['ARQ']['ARQ.10']['ARQ.10.3']; }
	if (msg['ARQ']['ARQ.10']['ARQ.10.4'].toString() != "") { arq.appointmentDurationUnits.altId = msg['ARQ']['ARQ.10']['ARQ.10.4']; }
	if (msg['ARQ']['ARQ.10']['ARQ.10.5'].toString() != "") { arq.appointmentDurationUnits.altText = msg['ARQ']['ARQ.10']['ARQ.10.5']; }
	if (msg['ARQ']['ARQ.10']['ARQ.10.6'].toString() != "") { arq.appointmentDurationUnits.altCodingSystem = msg['ARQ']['ARQ.10']['ARQ.10.6']; }
	if (Object.keys(arq.appointmentDurationUnits).length == 0) {
		delete arq.appointmentDurationUnits;
	}

	// ARQ.11, requestedStartDateTimeRange
	arq.requestedStartDateTimeRange = [];
	for each (field in msg['ARQ']['ARQ.11']) {
		var block = {};
		if (field['ARQ.11.1'].toString() != "") { block.rangeStartDateTime = field['ARQ.11.1']; }
		if (field['ARQ.11.2'].toString() != "") { block.rangeEndDateTime = field['ARQ.11.2']; }
		if (Object.keys(block).length > 0) {
			arq.requestedStartDateTimeRange.push(block);
		}
	}
	if (arq.requestedStartDateTimeRange.length == 0) {
		delete arq.requestedStartDateTimeRange;
	}

	// ARQ.12, priority
	if (msg['ARQ']['ARQ.12']['ARQ.12.1'].toString() != "") { arq.priority = msg['ARQ']['ARQ.12']['ARQ.12.1']; }

	// ARQ.13, repeatingInterval
	arq.repeatingInterval = {};
	if (msg['ARQ']['ARQ.13']['ARQ.13.1'].toString() != "") { arq.repeatingInterval.repeatPattern = msg['ARQ']['ARQ.13']['ARQ.13.1']; }
	if (msg['ARQ']['ARQ.13']['ARQ.13.2'].toString() != "") { arq.repeatingInterval.explicitTimeInterval = msg['ARQ']['ARQ.13']['ARQ.13.2']; }
	if (Object.keys(arq.repeatingInterval).length == 0) {
		delete arq.repeatingInterval;
	}

	// ARQ.14, repeatingIntervalDuration
	if (msg['ARQ']['ARQ.14']['ARQ.14.1'].toString() != "") { arq.repeatingIntervalDuration = msg['ARQ']['ARQ.14']['ARQ.14.1']; }

	// ARQ.15, placerContactPerson
	arq.placerContactPerson = {};
	if (msg['ARQ']['ARQ.15']['ARQ.15.1'].toString() != "") { arq.placerContactPerson.id = msg['ARQ']['ARQ.15']['ARQ.15.1']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.2'].toString() != "") { arq.placerContactPerson.lastName = msg['ARQ']['ARQ.15']['ARQ.15.2']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.3'].toString() != "") { arq.placerContactPerson.firstName = msg['ARQ']['ARQ.15']['ARQ.15.3']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.4'].toString() != "") { arq.placerContactPerson.middleInitOrName = msg['ARQ']['ARQ.15']['ARQ.15.4']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.5'].toString() != "") { arq.placerContactPerson.suffix = msg['ARQ']['ARQ.15']['ARQ.15.5']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.6'].toString() != "") { arq.placerContactPerson.prefix = msg['ARQ']['ARQ.15']['ARQ.15.6']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.7'].toString() != "") { arq.placerContactPerson.degree = msg['ARQ']['ARQ.15']['ARQ.15.7']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.8'].toString() != "") { arq.placerContactPerson.sourceTable = msg['ARQ']['ARQ.15']['ARQ.15.8']; }
	arq.placerContactPerson.assigningAuthority = {};
	if (msg['ARQ']['ARQ.15']['ARQ.15.9']['ARQ.15.9.1'].toString() != "") { arq.placerContactPerson.assigningAuthority.id = msg['ARQ']['ARQ.15']['ARQ.15.9']['ARQ.15.9.1']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.9']['ARQ.15.9.2'].toString() != "") { arq.placerContactPerson.assigningAuthority.universalId = msg['ARQ']['ARQ.15']['ARQ.15.9']['ARQ.15.9.2']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.9']['ARQ.15.9.3'].toString() != "") { arq.placerContactPerson.assigningAuthority.universalIdType = msg['ARQ']['ARQ.15']['ARQ.15.9']['ARQ.15.9.3']; }
	if (Object.keys(arq.placerContactPerson.assigningAuthority).length == 0) {
		delete arq.placerContactPerson.assigningAuthority;
	}
	if (msg['ARQ']['ARQ.15']['ARQ.15.10'].toString() != "") { arq.placerContactPerson.nameTypeCode = msg['ARQ']['ARQ.15']['ARQ.15.10']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.11'].toString() != "") { arq.placerContactPerson.identifierCheckDigit = msg['ARQ']['ARQ.15']['ARQ.15.11']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.12'].toString() != "") { arq.placerContactPerson.codeIdentifyingCheckDigitScheme = msg['ARQ']['ARQ.15']['ARQ.15.12']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.13'].toString() != "") { arq.placerContactPerson.identifierTypeCode = msg['ARQ']['ARQ.15']['ARQ.15.13']; }
	arq.placerContactPerson.assigningFacility = {};
	if (msg['ARQ']['ARQ.15']['ARQ.15.14']['ARQ.15.14.1'].toString() != "") { arq.placerContactPerson.assigningFacility.id = msg['ARQ']['ARQ.15']['ARQ.15.14']['ARQ.15.14.1']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.14']['ARQ.15.14.2'].toString() != "") { arq.placerContactPerson.assigningFacility.universalId = msg['ARQ']['ARQ.15']['ARQ.15.14']['ARQ.15.14.2']; }
	if (msg['ARQ']['ARQ.15']['ARQ.15.14']['ARQ.15.14.3'].toString() != "") { arq.placerContactPerson.assigningFacility.universalIdType = msg['ARQ']['ARQ.15']['ARQ.15.14']['ARQ.15.14.3']; }
	if (Object.keys(arq.placerContactPerson.assigningFacility).length == 0) {
		delete arq.placerContactPerson.assigningFacility;
	}
	if (Object.keys(arq.placerContactPerson).length == 0) {
		delete arq.placerContactPerson;
	}

	// ARQ.16, placerContactPhoneNumber
	arq.placerContactPhoneNumber = [];
	for each (field in msg['ARQ']['ARQ.16']) {
		var block = {};
		if (field['ARQ.16.1'].toString() != "") { block.number = field['ARQ.16.1']; }
		if (field['ARQ.16.2'].toString() != "") { block.telecommunicationUseCode = field['ARQ.16.2']; }
		if (field['ARQ.16.3'].toString() != "") { block.telecommunicationEquipmentType = field['ARQ.16.3']; }
		if (field['ARQ.16.4'].toString() != "") { block.emailAddress = field['ARQ.16.4']; }
		if (field['ARQ.16.5'].toString() != "") { block.countryCode = field['ARQ.16.5']; }
		if (field['ARQ.16.6'].toString() != "") { block.areaCityCode = field['ARQ.16.6']; }
		if (field['ARQ.16.7'].toString() != "") { block.phoneNumber = field['ARQ.16.7']; }
		if (field['ARQ.16.8'].toString() != "") { block.extension = field['ARQ.16.8']; }
		if (field['ARQ.16.9'].toString() != "") { block.text = field['ARQ.16.9']; }
		if (Object.keys(block).length > 0) {
			arq.placerContactPhoneNumber.push(block);
		}
	}
	if (arq.placerContactPhoneNumber.length == 0) {
		delete arq.placerContactPhoneNumber;
	}

	// ARQ.17, placerContactAddress
	arq.placerContactAddress = {};
	if (msg['ARQ']['ARQ.17']['ARQ.17.1'].toString() != "") { arq.placerContactAddress.streetAddress = msg['ARQ']['ARQ.17']['ARQ.17.1']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.2'].toString() != "") { arq.placerContactAddress.otherDesignation = msg['ARQ']['ARQ.17']['ARQ.17.2']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.3'].toString() != "") { arq.placerContactAddress.city = msg['ARQ']['ARQ.17']['ARQ.17.3']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.4'].toString() != "") { arq.placerContactAddress.stateOrProvince = msg['ARQ']['ARQ.17']['ARQ.17.4']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.5'].toString() != "") { arq.placerContactAddress.zip = msg['ARQ']['ARQ.17']['ARQ.17.5']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.6'].toString() != "") { arq.placerContactAddress.country = msg['ARQ']['ARQ.17']['ARQ.17.6']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.7'].toString() != "") { arq.placerContactAddress.addressType = msg['ARQ']['ARQ.17']['ARQ.17.7']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.8'].toString() != "") { arq.placerContactAddress.otherGeographicDesignation = msg['ARQ']['ARQ.17']['ARQ.17.8']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.9'].toString() != "") { arq.placerContactAddress.countyOrParishCode = msg['ARQ']['ARQ.17']['ARQ.17.9']; }
	if (msg['ARQ']['ARQ.17']['ARQ.17.10'].toString() != "") { arq.placerContactAddress.censusTract = msg['ARQ']['ARQ.17']['ARQ.17.10']; }
	if (Object.keys(arq.placerContactAddress).length == 0) {
		delete arq.placerContactAddress;
	}

	// ARQ.18, placerContactLocation
	arq.personnelResourceId = {};
	if (msg['ARQ']['ARQ.18']['ARQ.18.1'].toString() != "") { arq.personnelResourceId.pointOfCare = msg['ARQ']['ARQ.18']['ARQ.18.1']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.2'].toString() != "") { arq.personnelResourceId.room = msg['ARQ']['ARQ.18']['ARQ.18.2']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.3'].toString() != "") { arq.personnelResourceId.bed = msg['ARQ']['ARQ.18']['ARQ.18.3']; }
	arq.personnelResourceId.facility = {};
	if (msg['ARQ']['ARQ.18']['ARQ.18.4']['ARQ.18.4.1'].toString() != "") { arq.personnelResourceId.facility.nameSpaceId =  msg['ARQ']['ARQ.18']['ARQ.18.4']['ARQ.18.4.1']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.4']['ARQ.18.4.2'].toString() != "") { arq.personnelResourceId.facility.universalId =  msg['ARQ']['ARQ.18']['ARQ.18.4']['ARQ.18.4.2']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.4']['ARQ.18.4.3'].toString() != "") { arq.personnelResourceId.facility.universalIdType =  msg['ARQ']['ARQ.18']['ARQ.18.4']['ARQ.18.4.3']; }
	if (Object.keys(arq.personnelResourceId.facility).length == 0) {
		delete arq.personnelResourceId.facility;
	}
	if (msg['ARQ']['ARQ.18']['ARQ.18.5'].toString() != "") { arq.personnelResourceId.locationStatus = msg['ARQ']['ARQ.18']['ARQ.18.5']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.6'].toString() != "") { arq.personnelResourceId.personLocationType = msg['ARQ']['ARQ.18']['ARQ.18.6']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.7'].toString() != "") { arq.personnelResourceId.building = msg['ARQ']['ARQ.18']['ARQ.18.7']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.8'].toString() != "") { arq.personnelResourceId.floor = msg['ARQ']['ARQ.18']['ARQ.18.8']; }
	if (msg['ARQ']['ARQ.18']['ARQ.18.9'].toString() != "") { arq.personnelResourceId.locationDescription = msg['ARQ']['ARQ.18']['ARQ.18.9']; }
	if (Object.keys(arq.personnelResourceId).length == 0) {
		delete arq.personnelResourceId;
	}

	// ARQ.19, enteredByPerson
	arq.enteredByPerson = {};
	if (msg['ARQ']['ARQ.19']['ARQ.19.1'].toString() != "") { arq.enteredByPerson.id = msg['ARQ']['ARQ.19']['ARQ.19.1']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.2'].toString() != "") { arq.enteredByPerson.lastName = msg['ARQ']['ARQ.19']['ARQ.19.2']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.3'].toString() != "") { arq.enteredByPerson.firstName = msg['ARQ']['ARQ.19']['ARQ.19.3']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.4'].toString() != "") { arq.enteredByPerson.middleInitOrName = msg['ARQ']['ARQ.19']['ARQ.19.4']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.5'].toString() != "") { arq.enteredByPerson.suffix = msg['ARQ']['ARQ.19']['ARQ.19.5']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.6'].toString() != "") { arq.enteredByPerson.prefix = msg['ARQ']['ARQ.19']['ARQ.19.6']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.7'].toString() != "") { arq.enteredByPerson.degree = msg['ARQ']['ARQ.19']['ARQ.19.7']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.8'].toString() != "") { arq.enteredByPerson.sourceTable = msg['ARQ']['ARQ.19']['ARQ.19.8']; }
	arq.enteredByPerson.assigningAuthority = {};
	if (msg['ARQ']['ARQ.19']['ARQ.19.9']['ARQ.19.9.1'].toString() != "") { arq.enteredByPerson.assigningAuthority.id = msg['ARQ']['ARQ.19']['ARQ.19.9']['ARQ.19.9.1']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.9']['ARQ.19.9.2'].toString() != "") { arq.enteredByPerson.assigningAuthority.universalId = msg['ARQ']['ARQ.19']['ARQ.19.9']['ARQ.19.9.2']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.9']['ARQ.19.9.3'].toString() != "") { arq.enteredByPerson.assigningAuthority.universalIdType = msg['ARQ']['ARQ.19']['ARQ.19.9']['ARQ.19.9.3']; }
	if (Object.keys(arq.enteredByPerson.assigningAuthority).length == 0) {
		delete arq.enteredByPerson.assigningAuthority;
	}
	if (msg['ARQ']['ARQ.19']['ARQ.19.10'].toString() != "") { arq.enteredByPerson.nameTypeCode = msg['ARQ']['ARQ.19']['ARQ.19.10']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.11'].toString() != "") { arq.enteredByPerson.identifierCheckDigit = msg['ARQ']['ARQ.19']['ARQ.19.11']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.12'].toString() != "") { arq.enteredByPerson.codeIdentifyingCheckDigitScheme = msg['ARQ']['ARQ.19']['ARQ.19.12']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.13'].toString() != "") { arq.enteredByPerson.identifierTypeCode = msg['ARQ']['ARQ.19']['ARQ.19.13']; }
	arq.enteredByPerson.assigningFacility = {};
	if (msg['ARQ']['ARQ.19']['ARQ.19.14']['ARQ.19.14.1'].toString() != "") { arq.enteredByPerson.assigningFacility.id = msg['ARQ']['ARQ.19']['ARQ.19.14']['ARQ.19.14.1']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.14']['ARQ.19.14.2'].toString() != "") { arq.enteredByPerson.assigningFacility.universalId = msg['ARQ']['ARQ.19']['ARQ.19.14']['ARQ.19.14.2']; }
	if (msg['ARQ']['ARQ.19']['ARQ.19.14']['ARQ.19.14.3'].toString() != "") { arq.enteredByPerson.assigningFacility.universalIdType = msg['ARQ']['ARQ.19']['ARQ.19.14']['ARQ.19.14.3']; }
	if (Object.keys(arq.enteredByPerson.assigningFacility).length == 0) {
		delete arq.enteredByPerson.assigningFacility;
	}
	if (Object.keys(arq.enteredByPerson).length == 0) {
		delete arq.enteredByPerson;
	}

	// ARQ.20, enteredByPhoneNumber
	arq.enteredByPhoneNumber = [];
	for each (field in msg['ARQ']['ARQ.20']) {
		var block = {};
		if (field['ARQ.20.1'].toString() != "") { block.number = field['ARQ.20.1']; }
		if (field['ARQ.20.2'].toString() != "") { block.telecommunicationUseCode = field['ARQ.20.2']; }
		if (field['ARQ.20.3'].toString() != "") { block.telecommunicationEquipmentType = field['ARQ.20.3']; }
		if (field['ARQ.20.4'].toString() != "") { block.emailAddress = field['ARQ.20.4']; }
		if (field['ARQ.20.5'].toString() != "") { block.countryCode = field['ARQ.20.5']; }
		if (field['ARQ.20.6'].toString() != "") { block.areaCityCode = field['ARQ.20.6']; }
		if (field['ARQ.20.7'].toString() != "") { block.phoneNumber = field['ARQ.20.7']; }
		if (field['ARQ.20.8'].toString() != "") { block.extension = field['ARQ.20.8']; }
		if (field['ARQ.20.9'].toString() != "") { block.text = field['ARQ.20.9']; }
		if (Object.keys(block).length > 0) {
			arq.enteredByPhoneNumber.push(block);
		}
	}
	if (arq.enteredByPhoneNumber.length == 0) {
		delete arq.enteredByPhoneNumber;
	}

	// ARQ.21, enteredByLocation
	arq.enteredByLocation = {};
	if (msg['ARQ']['ARQ.21']['ARQ.21.1'].toString() != "") { arq.enteredByLocation.pointOfCare = msg['ARQ']['ARQ.21']['ARQ.21.1']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.2'].toString() != "") { arq.enteredByLocation.room = msg['ARQ']['ARQ.21']['ARQ.21.2']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.3'].toString() != "") { arq.enteredByLocation.bed = msg['ARQ']['ARQ.21']['ARQ.21.3']; }
	arq.enteredByLocation.facility = {};
	if (msg['ARQ']['ARQ.21']['ARQ.21.4']['ARQ.21.4.1'].toString() != "") { arq.enteredByLocation.facility.nameSpaceId =  msg['ARQ']['ARQ.21']['ARQ.21.4']['ARQ.21.4.1']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.4']['ARQ.21.4.2'].toString() != "") { arq.enteredByLocation.facility.universalId =  msg['ARQ']['ARQ.21']['ARQ.21.4']['ARQ.21.4.2']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.4']['ARQ.21.4.3'].toString() != "") { arq.enteredByLocation.facility.universalIdType =  msg['ARQ']['ARQ.21']['ARQ.21.4']['ARQ.21.4.3']; }
	if (Object.keys(arq.enteredByLocation.facility).length == 0) {
		delete arq.enteredByLocation.facility;
	}
	if (msg['ARQ']['ARQ.21']['ARQ.21.5'].toString() != "") { arq.enteredByLocation.locationStatus = msg['ARQ']['ARQ.21']['ARQ.21.5']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.6'].toString() != "") { arq.enteredByLocation.personLocationType = msg['ARQ']['ARQ.21']['ARQ.21.6']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.7'].toString() != "") { arq.enteredByLocation.building = msg['ARQ']['ARQ.21']['ARQ.21.7']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.8'].toString() != "") { arq.enteredByLocation.floor = msg['ARQ']['ARQ.21']['ARQ.21.8']; }
	if (msg['ARQ']['ARQ.21']['ARQ.21.9'].toString() != "") { arq.enteredByLocation.locationDescription = msg['ARQ']['ARQ.21']['ARQ.21.9']; }
	if (Object.keys(arq.enteredByLocation).length == 0) {
		delete arq.enteredByLocation;
	}

	// ARQ.22, parentPlacerAppointmentID
	arq.parentPlacerAppointmentID = {};
	if (msg['ARQ']['ARQ.22']['ARQ.22.1'].toString() != "") { arq.parentPlacerAppointmentID.id = msg['ARQ']['ARQ.22']['ARQ.22.1']; }
	if (msg['ARQ']['ARQ.22']['ARQ.22.2'].toString() != "") { arq.parentPlacerAppointmentID.namespaceId = msg['ARQ']['ARQ.22']['ARQ.22.2']; }
	if (msg['ARQ']['ARQ.22']['ARQ.22.3'].toString() != "") { arq.parentPlacerAppointmentID.universalId = msg['ARQ']['ARQ.22']['ARQ.22.3']; }
	if (msg['ARQ']['ARQ.22']['ARQ.22.4'].toString() != "") { arq.parentPlacerAppointmentID.unniveralIdType = msg['ARQ']['ARQ.22']['ARQ.22.4']; }
	if (Object.keys(arq.parentPlacerAppointmentID).length == 0) {
		delete arq.parentPlacerAppointmentID;
	}

	// ARQ.23, parentFillerAppointmentID
	arq.parentFillerAppointmentID = {};
	if (msg['ARQ']['ARQ.23']['ARQ.23.1'].toString() != "") { arq.parentFillerAppointmentID.id = msg['ARQ']['ARQ.23']['ARQ.23.1']; }
	if (msg['ARQ']['ARQ.23']['ARQ.23.2'].toString() != "") { arq.parentFillerAppointmentID.namespaceId = msg['ARQ']['ARQ.23']['ARQ.23.2']; }
	if (msg['ARQ']['ARQ.23']['ARQ.23.3'].toString() != "") { arq.parentFillerAppointmentID.universalId = msg['ARQ']['ARQ.23']['ARQ.23.3']; }
	if (msg['ARQ']['ARQ.23']['ARQ.23.4'].toString() != "") { arq.parentFillerAppointmentID.unniveralIdType = msg['ARQ']['ARQ.23']['ARQ.23.4']; }
	if (Object.keys(arq.parentFillerAppointmentID).length == 0) {
		delete arq.parentFillerAppointmentID;
	}	

	// clean up ARQ 
	if (Object.keys(arq).length == 0) {
		delete arq;
	} 
}
