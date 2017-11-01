// SCH
var sch = {};

// SCH.1, placerAppointmentID
sch.placerAppointmentID = {};
if (msg['SCH']['SCH.1']['SCH.1.1'].toString() != "") { sch.placerAppointmentID.id = msg['SCH']['SCH.1']['SCH.1.1']; }
if (msg['SCH']['SCH.1']['SCH.1.2'].toString() != "") { sch.placerAppointmentID.namespaceId = msg['SCH']['SCH.1']['SCH.1.2']; }
if (msg['SCH']['SCH.1']['SCH.1.3'].toString() != "") { sch.placerAppointmentID.universalId = msg['SCH']['SCH.1']['SCH.1.3']; }
if (msg['SCH']['SCH.1']['SCH.1.4'].toString() != "") { sch.placerAppointmentID.universalIdType = msg['SCH']['SCH.1']['SCH.1.4']; }
if (Object.keys(sch.placerAppointmentID).length == 0) {
	delete sch.placerAppointmentID;
}

// SCH.2, fillerAppointmentID
sch.fillerAppointmentID = {};
if (msg['SCH']['SCH.2']['SCH.2.1'].toString() != "") { sch.fillerAppointmentID.id = msg['SCH']['SCH.2']['SCH.2.1']; }
if (msg['SCH']['SCH.2']['SCH.2.2'].toString() != "") { sch.fillerAppointmentID.namespaceId = msg['SCH']['SCH.2']['SCH.2.2']; }
if (msg['SCH']['SCH.2']['SCH.2.3'].toString() != "") { sch.fillerAppointmentID.universalId = msg['SCH']['SCH.2']['SCH.2.3']; }
if (msg['SCH']['SCH.2']['SCH.2.4'].toString() != "") { sch.fillerAppointmentID.universalIdType = msg['SCH']['SCH.2']['SCH.2.4']; }
if (Object.keys(sch.fillerAppointmentID).length == 0) {
	delete sch.fillerAppointmentID;
}

// SCH.3, occurrenceNumber
if (msg['SCH']['SCH.3']['SCH.3.1'].toString() != "") { sch.occurrenceNumber = msg['SCH']['SCH.3']['SCH.3.1']; }

// SCH.4, placerGroupNumber
sch.placerGroupNumber = {};
if (msg['SCH']['SCH.4']['SCH.4.1'].toString() != "") { sch.placerGroupNumber.id = msg['SCH']['SCH.4']['SCH.4.1']; }
if (msg['SCH']['SCH.4']['SCH.4.2'].toString() != "") { sch.placerGroupNumber.namespaceId = msg['SCH']['SCH.4']['SCH.4.2']; }
if (msg['SCH']['SCH.4']['SCH.4.3'].toString() != "") { sch.placerGroupNumber.universalId = msg['SCH']['SCH.4']['SCH.4.3']; }
if (msg['SCH']['SCH.4']['SCH.4.4'].toString() != "") { sch.placerGroupNumber.universalIdType = msg['SCH']['SCH.4']['SCH.4.4']; }
if (Object.keys(sch.placerGroupNumber).length == 0) {
	delete sch.placerGroupNumber;
}

// SCH.5, scheduleID
sch.scheduleID = {};
if (msg['SCH']['SCH.5']['SCH.5.1'].toString() != "") { sch.scheduleID.id = msg['SCH']['SCH.5']['SCH.5.1']; }
if (msg['SCH']['SCH.5']['SCH.5.2'].toString() != "") { sch.scheduleID.text = msg['SCH']['SCH.5']['SCH.5.2']; }
if (msg['SCH']['SCH.5']['SCH.5.3'].toString() != "") { sch.scheduleID.codingSystem = msg['SCH']['SCH.5']['SCH.5.3']; }
if (msg['SCH']['SCH.5']['SCH.5.4'].toString() != "") { sch.scheduleID.altId = msg['SCH']['SCH.5']['SCH.5.4']; }
if (msg['SCH']['SCH.5']['SCH.5.5'].toString() != "") { sch.scheduleID.altText = msg['SCH']['SCH.5']['SCH.5.5']; }
if (msg['SCH']['SCH.5']['SCH.5.6'].toString() != "") { sch.scheduleID.altCodingSystem = msg['SCH']['SCH.5']['SCH.5.6']; }
if (Object.keys(sch.scheduleID).length == 0) {
	delete sch.scheduleID;
}

// SCH.6, eventReason
sch.eventReason = {};
if (msg['SCH']['SCH.6']['SCH.6.1'].toString() != "") { sch.eventReason.id = msg['SCH']['SCH.6']['SCH.6.1']; }
if (msg['SCH']['SCH.6']['SCH.6.2'].toString() != "") { sch.eventReason.text = msg['SCH']['SCH.6']['SCH.6.2']; }
if (msg['SCH']['SCH.6']['SCH.6.3'].toString() != "") { sch.eventReason.codingSystem = msg['SCH']['SCH.6']['SCH.6.3']; }
if (msg['SCH']['SCH.6']['SCH.6.4'].toString() != "") { sch.eventReason.altId = msg['SCH']['SCH.6']['SCH.6.4']; }
if (msg['SCH']['SCH.6']['SCH.6.5'].toString() != "") { sch.eventReason.altText = msg['SCH']['SCH.6']['SCH.6.5']; }
if (msg['SCH']['SCH.6']['SCH.6.6'].toString() != "") { sch.eventReason.altCodingSystem = msg['SCH']['SCH.6']['SCH.6.6']; }
if (Object.keys(sch.eventReason).length == 0) {
	delete sch.eventReason;
}

// SCH.7, appointmentReason
sch.appointmentReason = {};
if (msg['SCH']['SCH.7']['SCH.7.1'].toString() != "") { sch.appointmentReason.id = msg['SCH']['SCH.7']['SCH.7.1']; }
if (msg['SCH']['SCH.7']['SCH.7.2'].toString() != "") { sch.appointmentReason.text = msg['SCH']['SCH.7']['SCH.7.2']; }
if (msg['SCH']['SCH.7']['SCH.7.3'].toString() != "") { sch.appointmentReason.codingSystem = msg['SCH']['SCH.7']['SCH.7.3']; }
if (msg['SCH']['SCH.7']['SCH.7.4'].toString() != "") { sch.appointmentReason.altId = msg['SCH']['SCH.7']['SCH.7.4']; }
if (msg['SCH']['SCH.7']['SCH.7.5'].toString() != "") { sch.appointmentReason.altText = msg['SCH']['SCH.7']['SCH.7.5']; }
if (msg['SCH']['SCH.7']['SCH.7.6'].toString() != "") { sch.appointmentReason.altCodingSystem = msg['SCH']['SCH.7']['SCH.7.6']; }
if (Object.keys(sch.appointmentReason).length == 0) {
	delete sch.appointmentReason;
}

// SCH.8, appointmentType
sch.appointmentType = {};
if (msg['SCH']['SCH.8']['SCH.8.1'].toString() != "") { sch.appointmentType.id = msg['SCH']['SCH.8']['SCH.8.1']; }
if (msg['SCH']['SCH.8']['SCH.8.2'].toString() != "") { sch.appointmentType.text = msg['SCH']['SCH.8']['SCH.8.2']; }
if (msg['SCH']['SCH.8']['SCH.8.3'].toString() != "") { sch.appointmentType.codingSystem = msg['SCH']['SCH.8']['SCH.8.3']; }
if (msg['SCH']['SCH.8']['SCH.8.4'].toString() != "") { sch.appointmentType.altId = msg['SCH']['SCH.8']['SCH.8.4']; }
if (msg['SCH']['SCH.8']['SCH.8.5'].toString() != "") { sch.appointmentType.altText = msg['SCH']['SCH.8']['SCH.8.5']; }
if (msg['SCH']['SCH.8']['SCH.8.6'].toString() != "") { sch.appointmentType.altCodingSystem = msg['SCH']['SCH.8']['SCH.8.6']; }
if (Object.keys(sch.appointmentType).length == 0) {
	delete sch.appointmentType;
}

// SCH.9, appointmentDuration
if (msg['SCH']['SCH.9']['SCH.9.1'].toString() != "") { sch.appointmentDuration = msg['SCH']['SCH.9']['SCH.9.1']; }

// SCH.10, appointmentDurationUnits
sch.appointmentDurationUnits = {};
if (msg['SCH']['SCH.10']['SCH.10.1'].toString() != "") { sch.appointmentDurationUnits.id = msg['SCH']['SCH.10']['SCH.10.1']; }
if (msg['SCH']['SCH.10']['SCH.10.2'].toString() != "") { sch.appointmentDurationUnits.text = msg['SCH']['SCH.10']['SCH.10.2']; }
if (msg['SCH']['SCH.10']['SCH.10.3'].toString() != "") { sch.appointmentDurationUnits.codingSystem = msg['SCH']['SCH.10']['SCH.10.3']; }
if (msg['SCH']['SCH.10']['SCH.10.4'].toString() != "") { sch.appointmentDurationUnits.altId = msg['SCH']['SCH.10']['SCH.10.4']; }
if (msg['SCH']['SCH.10']['SCH.10.5'].toString() != "") { sch.appointmentDurationUnits.altText = msg['SCH']['SCH.10']['SCH.10.5']; }
if (msg['SCH']['SCH.10']['SCH.10.6'].toString() != "") { sch.appointmentDurationUnits.altCodingSystem = msg['SCH']['SCH.10']['SCH.10.6']; }
if (Object.keys(sch.appointmentDurationUnits).length == 0) {
	delete sch.appointmentDurationUnits;
}

// SCH.11, appointmentTimingQuantity
sch.appointmentTimingQuantity = [];
for each (field in msg['SCH']['SCH.11']) {
	var block = {};
	if (field['SCH.11.1'].toString() != "") { sch.quantity = field['SCH.11.1']; }
	if (field['SCH.11.2'].toString() != "") { sch.interval = field['SCH.11.2']; }
	if (field['SCH.11.3'].toString() != "") { sch.duration = field['SCH.11.3']; }
	if (field['SCH.11.4'].toString() != "") { sch.startDateTime = field['SCH.11.4']; }
	if (field['SCH.11.5'].toString() != "") { sch.endDateTime = field['SCH.11.5']; }
	if (field['SCH.11.6'].toString() != "") { sch.priority = field['SCH.11.6']; }
	if (field['SCH.11.7'].toString() != "") { sch.condition = field['SCH.11.7']; }
	if (field['SCH.11.8'].toString() != "") { sch.text = field['SCH.11.8']; }
	if (field['SCH.11.9'].toString() != "") { sch.conjunction = field['SCH.11.9']; }
	if (field['SCH.11.10'].toString() != "") { sch.orderSequencing = field['SCH.11.10']; }
	if (Object.keys(block).length > 0) {
		sch.appointmentTimingQuantity.push(block)
	}
}
if (sch.appointmentTimingQuantity.length == 0) {
	delete sch.appointmentTimingQuantity;
}

// SCH.12, placerContactPerson
sch.placerContactPerson = {};
if (msg['SCH']['SCH.12']['SCH.12.1'].toString() != "") { sch.placerContactPerson.id = msg['SCH']['SCH.12']['SCH.12.1']; }
if (msg['SCH']['SCH.12']['SCH.12.2'].toString() != "") { sch.placerContactPerson.lastName = msg['SCH']['SCH.12']['SCH.12.2']; }
if (msg['SCH']['SCH.12']['SCH.12.3'].toString() != "") { sch.placerContactPerson.firstName = msg['SCH']['SCH.12']['SCH.12.3']; }
if (msg['SCH']['SCH.12']['SCH.12.4'].toString() != "") { sch.placerContactPerson.middleInitOrName = msg['SCH']['SCH.12']['SCH.12.4']; }
if (msg['SCH']['SCH.12']['SCH.12.5'].toString() != "") { sch.placerContactPerson.suffix = msg['SCH']['SCH.12']['SCH.12.5']; }
if (msg['SCH']['SCH.12']['SCH.12.6'].toString() != "") { sch.placerContactPerson.prefix = msg['SCH']['SCH.12']['SCH.12.6']; }
if (msg['SCH']['SCH.12']['SCH.12.7'].toString() != "") { sch.placerContactPerson.degree = msg['SCH']['SCH.12']['SCH.12.7']; }
if (msg['SCH']['SCH.12']['SCH.12.8'].toString() != "") { sch.placerContactPerson.sourceTable = msg['SCH']['SCH.12']['SCH.12.8']; }
sch.placerContactPerson.assigningAuthority = {};
if (msg['SCH']['SCH.12']['SCH.12.9']['SCH.12.9.1'].toString() != "") { sch.placerContactPerson.assigningAuthority.id = msg['SCH']['SCH.12']['SCH.12.9']['SCH.12.9.1']; }
if (msg['SCH']['SCH.12']['SCH.12.9']['SCH.12.9.2'].toString() != "") { sch.placerContactPerson.assigningAuthority.universalId = msg['SCH']['SCH.12']['SCH.12.9']['SCH.12.9.2']; }
if (msg['SCH']['SCH.12']['SCH.12.9']['SCH.12.9.3'].toString() != "") { sch.placerContactPerson.assigningAuthority.universalIdType = msg['SCH']['SCH.12']['SCH.12.9']['SCH.12.9.3']; }
if (Object.keys(sch.placerContactPerson.assigningAuthority).length == 0) {
	if (msg['SCH']['SCH.12']['SCH.12.9'].toString() != "") { sch.placerContactPerson.assigningAuthority.id = msg['SCH']['SCH.12']['SCH.12.9']; }
	else delete sch.placerContactPerson.assigningAuthority;
}
if (msg['SCH']['SCH.12']['SCH.12.10'].toString() != "") { sch.placerContactPerson.nameTypeCode = msg['SCH']['SCH.12']['SCH.12.10']; }
if (msg['SCH']['SCH.12']['SCH.12.11'].toString() != "") { sch.placerContactPerson.identifierCheckDigit = msg['SCH']['SCH.12']['SCH.12.11']; }
if (msg['SCH']['SCH.12']['SCH.12.12'].toString() != "") { sch.placerContactPerson.codeIdentifyingCheckDigitScheme = msg['SCH']['SCH.12']['SCH.12.12']; }
if (msg['SCH']['SCH.12']['SCH.12.13'].toString() != "") { sch.placerContactPerson.identifierTypeCode = msg['SCH']['SCH.12']['SCH.12.13']; }
sch.placerContactPerson.assigningFacility = {};
if (msg['SCH']['SCH.12']['SCH.12.14']['SCH.12.14.1'].toString() != "") { sch.placerContactPerson.assigningFacility.id = msg['SCH']['SCH.12']['SCH.12.14']['SCH.12.14.1']; }
if (msg['SCH']['SCH.12']['SCH.12.14']['SCH.12.14.2'].toString() != "") { sch.placerContactPerson.assigningFacility.universalId = msg['SCH']['SCH.12']['SCH.12.14']['SCH.12.14.2']; }
if (msg['SCH']['SCH.12']['SCH.12.14']['SCH.12.14.3'].toString() != "") { sch.placerContactPerson.assigningFacility.universalIdType = msg['SCH']['SCH.12']['SCH.12.14']['SCH.12.14.3']; }
if (Object.keys(sch.placerContactPerson.assigningFacility).length == 0) {
	if (msg['SCH']['SCH.12']['SCH.12.14'].toString() != "") { sch.placerContactPerson.assigningFacility.id = msg['SCH']['SCH.12']['SCH.12.14']; }
	else delete sch.placerContactPerson.assigningFacility;
}
if (Object.keys(sch.placerContactPerson).length == 0) {
	delete sch.placerContactPerson;
}

// SCH.13, placerContactPhoneNumber
sch.placerContactPhoneNumber = {};
if (msg['SCH']['SCH.13']['SCH.13.1'].toString() != "") { sch.placerContactPhoneNumber.number = msg['SCH']['SCH.13']['SCH.13.1']; }
if (msg['SCH']['SCH.13']['SCH.13.2'].toString() != "") { sch.placerContactPhoneNumber.telecommunicationUseCode = msg['SCH']['SCH.13']['SCH.13.2']; }
if (msg['SCH']['SCH.13']['SCH.13.3'].toString() != "") { sch.placerContactPhoneNumber.telecommunicationEquipmentType = msg['SCH']['SCH.13']['SCH.13.3']; }
if (msg['SCH']['SCH.13']['SCH.13.4'].toString() != "") { sch.placerContactPhoneNumber.emailAddress = msg['SCH']['SCH.13']['SCH.13.4']; }
if (msg['SCH']['SCH.13']['SCH.13.5'].toString() != "") { sch.placerContactPhoneNumber.countryCode = msg['SCH']['SCH.13']['SCH.13.5']; }
if (msg['SCH']['SCH.13']['SCH.13.6'].toString() != "") { sch.placerContactPhoneNumber.areaCityCode = msg['SCH']['SCH.13']['SCH.13.6']; }
if (msg['SCH']['SCH.13']['SCH.13.7'].toString() != "") { sch.placerContactPhoneNumber.phoneNumber = msg['SCH']['SCH.13']['SCH.13.7']; }
if (msg['SCH']['SCH.13']['SCH.13.8'].toString() != "") { sch.placerContactPhoneNumber.extension = msg['SCH']['SCH.13']['SCH.13.8']; }
if (msg['SCH']['SCH.13']['SCH.13.9'].toString() != "") { sch.placerContactPhoneNumber.text = msg['SCH']['SCH.13']['SCH.13.9']; }
if (Object.keys(sch.placerContactPhoneNumber).length == 0) {
	delete sch.placerContactPhoneNumber;
}

// SCH.14, placerContactAddress
sch.placerContactAddress = {};
if (msg['SCH']['SCH.14']['SCH.14.1'].toString() != "") { sch.placerContactAddress.streetAddress = msg['SCH']['SCH.14']['SCH.14.1']; }
if (msg['SCH']['SCH.14']['SCH.14.2'].toString() != "") { sch.placerContactAddress.otherDesignation = msg['SCH']['SCH.14']['SCH.14.2']; }
if (msg['SCH']['SCH.14']['SCH.14.3'].toString() != "") { sch.placerContactAddress.city = msg['SCH']['SCH.14']['SCH.14.3']; }
if (msg['SCH']['SCH.14']['SCH.14.4'].toString() != "") { sch.placerContactAddress.stateOrProvince = msg['SCH']['SCH.14']['SCH.14.4']; }
if (msg['SCH']['SCH.14']['SCH.14.5'].toString() != "") { sch.placerContactAddress.zip = msg['SCH']['SCH.14']['SCH.14.5']; }
if (msg['SCH']['SCH.14']['SCH.14.6'].toString() != "") { sch.placerContactAddress.country = msg['SCH']['SCH.14']['SCH.14.6']; }
if (msg['SCH']['SCH.14']['SCH.14.7'].toString() != "") { sch.placerContactAddress.addressType = msg['SCH']['SCH.14']['SCH.14.7']; }
if (msg['SCH']['SCH.14']['SCH.14.8'].toString() != "") { sch.placerContactAddress.otherGeographicDesignation = msg['SCH']['SCH.14']['SCH.14.8']; }
if (msg['SCH']['SCH.14']['SCH.14.9'].toString() != "") { sch.placerContactAddress.countyOrParishCode = msg['SCH']['SCH.14']['SCH.14.9']; }
if (msg['SCH']['SCH.14']['SCH.14.10'].toString() != "") { sch.placerContactAddress.censusTract = msg['SCH']['SCH.14']['SCH.14.10']; }
if (Object.keys(sch.placerContactAddress).length == 0) {
	delete sch.placerContactAddress;
}

// SCH.15, placerContactLocation
sch.placerContactLocation = {};
if (msg['SCH']['SCH.15']['SCH.15.1'].toString() != "") { sch.placerContactLocation.pointOfCare = msg['SCH']['SCH.15']['SCH.15.1']; }
if (msg['SCH']['SCH.15']['SCH.15.2'].toString() != "") { sch.placerContactLocation.room = msg['SCH']['SCH.15']['SCH.15.2']; }
if (msg['SCH']['SCH.15']['SCH.15.3'].toString() != "") { sch.placerContactLocation.bed = msg['SCH']['SCH.15']['SCH.15.3']; }
sch.placerContactLocation.facility = {};
if (msg['SCH']['SCH.15']['SCH.15.4']['SCH.15.4.1'].toString() != "") { sch.placerContactLocation.facility.nameSpaceId =  msg['SCH']['SCH.15']['SCH.15.4']['SCH.15.4.1']; }
if (msg['SCH']['SCH.15']['SCH.15.4']['SCH.15.4.2'].toString() != "") { sch.placerContactLocation.facility.universalId =  msg['SCH']['SCH.15']['SCH.15.4']['SCH.15.4.2']; }
if (msg['SCH']['SCH.15']['SCH.15.4']['SCH.15.4.3'].toString() != "") { sch.placerContactLocation.facility.universalIdType =  msg['SCH']['SCH.15']['SCH.15.4']['SCH.15.4.3']; }
if (Object.keys(sch.placerContactLocation.facility).length == 0) {
	if (msg['SCH']['SCH.15']['SCH.15.4'].toString() != "") { sch.placerContactLocation.facility.nameSpaceId = msg['SCH']['SCH.15']['SCH.15.4']; }
	else delete sch.placerContactLocation.facility;
}
if (msg['SCH']['SCH.15']['SCH.15.5'].toString() != "") { sch.placerContactLocation.locationStatus = msg['SCH']['SCH.15']['SCH.15.5']; }
if (msg['SCH']['SCH.15']['SCH.15.6'].toString() != "") { sch.placerContactLocation.personLocationType = msg['SCH']['SCH.15']['SCH.15.6']; }
if (msg['SCH']['SCH.15']['SCH.15.7'].toString() != "") { sch.placerContactLocation.building = msg['SCH']['SCH.15']['SCH.15.7']; }
if (msg['SCH']['SCH.15']['SCH.15.8'].toString() != "") { sch.placerContactLocation.floor = msg['SCH']['SCH.15']['SCH.15.8']; }
if (msg['SCH']['SCH.15']['SCH.15.9'].toString() != "") { sch.placerContactLocation.locationDescription = msg['SCH']['SCH.15']['SCH.15.9']; }
if (Object.keys(sch.placerContactLocation).length == 0) {
	delete sch.placerContactLocation;
}

// SCH.16, fillerContactPerson
sch.fillerContactPerson = {};
if (msg['SCH']['SCH.16']['SCH.16.1'].toString() != "") { sch.fillerContactPerson.id = msg['SCH']['SCH.16']['SCH.16.1']; }
if (msg['SCH']['SCH.16']['SCH.16.2'].toString() != "") { sch.fillerContactPerson.lastName = msg['SCH']['SCH.16']['SCH.16.2']; }
if (msg['SCH']['SCH.16']['SCH.16.3'].toString() != "") { sch.fillerContactPerson.firstName = msg['SCH']['SCH.16']['SCH.16.3']; }
if (msg['SCH']['SCH.16']['SCH.16.4'].toString() != "") { sch.fillerContactPerson.middleInitOrName = msg['SCH']['SCH.16']['SCH.16.4']; }
if (msg['SCH']['SCH.16']['SCH.16.5'].toString() != "") { sch.fillerContactPerson.suffix = msg['SCH']['SCH.16']['SCH.16.5']; }
if (msg['SCH']['SCH.16']['SCH.16.6'].toString() != "") { sch.fillerContactPerson.prefix = msg['SCH']['SCH.16']['SCH.16.6']; }
if (msg['SCH']['SCH.16']['SCH.16.7'].toString() != "") { sch.fillerContactPerson.degree = msg['SCH']['SCH.16']['SCH.16.7']; }
if (msg['SCH']['SCH.16']['SCH.16.8'].toString() != "") { sch.fillerContactPerson.sourceTable = msg['SCH']['SCH.16']['SCH.16.8']; }
sch.fillerContactPerson.assigningAuthority = {};
if (msg['SCH']['SCH.16']['SCH.16.9']['SCH.16.9.1'].toString() != "") { sch.fillerContactPerson.assigningAuthority.id = msg['SCH']['SCH.16']['SCH.16.9']['SCH.16.9.1']; }
if (msg['SCH']['SCH.16']['SCH.16.9']['SCH.16.9.2'].toString() != "") { sch.fillerContactPerson.assigningAuthority.universalId = msg['SCH']['SCH.16']['SCH.16.9']['SCH.16.9.2']; }
if (msg['SCH']['SCH.16']['SCH.16.9']['SCH.16.9.3'].toString() != "") { sch.fillerContactPerson.assigningAuthority.universalIdType = msg['SCH']['SCH.16']['SCH.16.9']['SCH.16.9.3']; }
if (Object.keys(sch.fillerContactPerson.assigningAuthority).length == 0) {
	if (msg['SCH']['SCH.16']['SCH.16.9'].toString() != "") { sch.fillerContactPerson.assigningAuthority.id = msg['SCH']['SCH.16']['SCH.16.9']; }
	else delete sch.fillerContactPerson.assigningAuthority;
}
if (msg['SCH']['SCH.16']['SCH.16.10'].toString() != "") { sch.fillerContactPerson.nameTypeCode = msg['SCH']['SCH.16']['SCH.16.10']; }
if (msg['SCH']['SCH.16']['SCH.16.11'].toString() != "") { sch.fillerContactPerson.identifierCheckDigit = msg['SCH']['SCH.16']['SCH.16.11']; }
if (msg['SCH']['SCH.16']['SCH.16.12'].toString() != "") { sch.fillerContactPerson.codeIdentifyingCheckDigitScheme = msg['SCH']['SCH.16']['SCH.16.12']; }
if (msg['SCH']['SCH.16']['SCH.16.13'].toString() != "") { sch.fillerContactPerson.identifierTypeCode = msg['SCH']['SCH.16']['SCH.16.13']; }
sch.fillerContactPerson.assigningFacility = {};
if (msg['SCH']['SCH.16']['SCH.16.14']['SCH.16.14.1'].toString() != "") { sch.fillerContactPerson.assigningFacility.id = msg['SCH']['SCH.16']['SCH.16.14']['SCH.16.14.1']; }
if (msg['SCH']['SCH.16']['SCH.16.14']['SCH.16.14.2'].toString() != "") { sch.fillerContactPerson.assigningFacility.universalId = msg['SCH']['SCH.16']['SCH.16.14']['SCH.16.14.2']; }
if (msg['SCH']['SCH.16']['SCH.16.14']['SCH.16.14.3'].toString() != "") { sch.fillerContactPerson.assigningFacility.universalIdType = msg['SCH']['SCH.16']['SCH.16.14']['SCH.16.14.3']; }
if (Object.keys(sch.fillerContactPerson.assigningFacility).length == 0) {
	if (msg['SCH']['SCH.16']['SCH.16.14'].toString() != "") { sch.fillerContactPerson.assigningFacility.id = msg['SCH']['SCH.16']['SCH.16.14']; }
	else delete sch.fillerContactPerson.assigningFacility;
}
if (Object.keys(sch.fillerContactPerson).length == 0) {
	delete sch.fillerContactPerson;
}

// SCH.17, fillerContactPhoneNumber
sch.fillerContactPhoneNumber = {};
if (msg['SCH']['SCH.17']['SCH.17.1'].toString() != "") { sch.fillerContactPhoneNumber.number = msg['SCH']['SCH.17']['SCH.17.1']; }
if (msg['SCH']['SCH.17']['SCH.17.2'].toString() != "") { sch.fillerContactPhoneNumber.telecommunicationUseCode = msg['SCH']['SCH.17']['SCH.17.2']; }
if (msg['SCH']['SCH.17']['SCH.17.3'].toString() != "") { sch.fillerContactPhoneNumber.telecommunicationEquipmentType = msg['SCH']['SCH.17']['SCH.17.3']; }
if (msg['SCH']['SCH.17']['SCH.17.4'].toString() != "") { sch.fillerContactPhoneNumber.emailAddress = msg['SCH']['SCH.17']['SCH.17.4']; }
if (msg['SCH']['SCH.17']['SCH.17.5'].toString() != "") { sch.fillerContactPhoneNumber.countryCode = msg['SCH']['SCH.17']['SCH.17.5']; }
if (msg['SCH']['SCH.17']['SCH.17.6'].toString() != "") { sch.fillerContactPhoneNumber.areaCityCode = msg['SCH']['SCH.17']['SCH.17.6']; }
if (msg['SCH']['SCH.17']['SCH.17.7'].toString() != "") { sch.fillerContactPhoneNumber.phoneNumber = msg['SCH']['SCH.17']['SCH.17.7']; }
if (msg['SCH']['SCH.17']['SCH.17.8'].toString() != "") { sch.fillerContactPhoneNumber.extension = msg['SCH']['SCH.17']['SCH.17.8']; }
if (msg['SCH']['SCH.17']['SCH.17.9'].toString() != "") { sch.fillerContactPhoneNumber.text = msg['SCH']['SCH.17']['SCH.17.9']; }
if (Object.keys(sch.fillerContactPhoneNumber).length == 0) {
	delete sch.fillerContactPhoneNumber;
}

// SCH.18, fillerContactAddress
sch.fillerContactAddress = {};
if (msg['SCH']['SCH.18']['SCH.18.1'].toString() != "") { sch.fillerContactAddress.streetAddress = msg['SCH']['SCH.18']['SCH.18.1']; }
if (msg['SCH']['SCH.18']['SCH.18.2'].toString() != "") { sch.fillerContactAddress.otherDesignation = msg['SCH']['SCH.18']['SCH.18.2']; }
if (msg['SCH']['SCH.18']['SCH.18.3'].toString() != "") { sch.fillerContactAddress.city = msg['SCH']['SCH.18']['SCH.18.3']; }
if (msg['SCH']['SCH.18']['SCH.18.4'].toString() != "") { sch.fillerContactAddress.stateOrProvince = msg['SCH']['SCH.18']['SCH.18.4']; }
if (msg['SCH']['SCH.18']['SCH.18.5'].toString() != "") { sch.fillerContactAddress.zip = msg['SCH']['SCH.18']['SCH.18.5']; }
if (msg['SCH']['SCH.18']['SCH.18.6'].toString() != "") { sch.fillerContactAddress.country = msg['SCH']['SCH.18']['SCH.18.6']; }
if (msg['SCH']['SCH.18']['SCH.18.7'].toString() != "") { sch.fillerContactAddress.addressType = msg['SCH']['SCH.18']['SCH.18.7']; }
if (msg['SCH']['SCH.18']['SCH.18.8'].toString() != "") { sch.fillerContactAddress.otherGeographicDesignation = msg['SCH']['SCH.18']['SCH.18.8']; }
if (msg['SCH']['SCH.18']['SCH.18.9'].toString() != "") { sch.fillerContactAddress.countyOrParishCode = msg['SCH']['SCH.18']['SCH.18.9']; }
if (msg['SCH']['SCH.18']['SCH.18.10'].toString() != "") { sch.fillerContactAddress.censusTract = msg['SCH']['SCH.18']['SCH.18.10']; }
if (Object.keys(sch.fillerContactAddress).length == 0) {
	delete sch.fillerContactAddress;
}

// SCH.19, fillerContactLocation
sch.fillerContactLocation = {};
if (msg['SCH']['SCH.19']['SCH.19.1'].toString() != "") { sch.fillerContactLocation.pointOfCare = msg['SCH']['SCH.19']['SCH.19.1']; }
if (msg['SCH']['SCH.19']['SCH.19.2'].toString() != "") { sch.fillerContactLocation.room = msg['SCH']['SCH.19']['SCH.19.2']; }
if (msg['SCH']['SCH.19']['SCH.19.3'].toString() != "") { sch.fillerContactLocation.bed = msg['SCH']['SCH.19']['SCH.19.3']; }
sch.fillerContactLocation.facility = {};
if (msg['SCH']['SCH.19']['SCH.19.4']['SCH.19.4.1'].toString() != "") { sch.fillerContactLocation.facility.nameSpaceId =  msg['SCH']['SCH.19']['SCH.19.4']['SCH.19.4.1']; }
if (msg['SCH']['SCH.19']['SCH.19.4']['SCH.19.4.2'].toString() != "") { sch.fillerContactLocation.facility.universalId =  msg['SCH']['SCH.19']['SCH.19.4']['SCH.19.4.2']; }
if (msg['SCH']['SCH.19']['SCH.19.4']['SCH.19.4.3'].toString() != "") { sch.fillerContactLocation.facility.universalIdType =  msg['SCH']['SCH.19']['SCH.19.4']['SCH.19.4.3']; }
if (Object.keys(sch.fillerContactLocation.facility).length == 0) {
	if (msg['SCH']['SCH.19']['SCH.19.4'].toString() != "") { sch.fillerContactLocation.facility.nameSpaceId = msg['SCH']['SCH.19']['SCH.19.4']; }
	else delete sch.fillerContactLocation.facility;
}
if (msg['SCH']['SCH.19']['SCH.19.5'].toString() != "") { sch.fillerContactLocation.locationStatus = msg['SCH']['SCH.19']['SCH.19.5']; }
if (msg['SCH']['SCH.19']['SCH.19.6'].toString() != "") { sch.fillerContactLocation.personLocationType = msg['SCH']['SCH.19']['SCH.19.6']; }
if (msg['SCH']['SCH.19']['SCH.19.7'].toString() != "") { sch.fillerContactLocation.building = msg['SCH']['SCH.19']['SCH.19.7']; }
if (msg['SCH']['SCH.19']['SCH.19.8'].toString() != "") { sch.fillerContactLocation.floor = msg['SCH']['SCH.19']['SCH.19.8']; }
if (msg['SCH']['SCH.19']['SCH.19.9'].toString() != "") { sch.fillerContactLocation.locationDescription = msg['SCH']['SCH.19']['SCH.19.9']; }
if (Object.keys(sch.fillerContactLocation).length == 0) {
	delete sch.fillerContactLocation;
}

// SCH.20, enteredByPerson
sch.enteredByPerson = {};
if (msg['SCH']['SCH.20']['SCH.20.1'].toString() != "") { sch.enteredByPerson.id = msg['SCH']['SCH.20']['SCH.20.1']; }
if (msg['SCH']['SCH.20']['SCH.20.2'].toString() != "") { sch.enteredByPerson.lastName = msg['SCH']['SCH.20']['SCH.20.2']; }
if (msg['SCH']['SCH.20']['SCH.20.3'].toString() != "") { sch.enteredByPerson.firstName = msg['SCH']['SCH.20']['SCH.20.3']; }
if (msg['SCH']['SCH.20']['SCH.20.4'].toString() != "") { sch.enteredByPerson.middleInitOrName = msg['SCH']['SCH.20']['SCH.20.4']; }
if (msg['SCH']['SCH.20']['SCH.20.5'].toString() != "") { sch.enteredByPerson.suffix = msg['SCH']['SCH.20']['SCH.20.5']; }
if (msg['SCH']['SCH.20']['SCH.20.6'].toString() != "") { sch.enteredByPerson.prefix = msg['SCH']['SCH.20']['SCH.20.6']; }
if (msg['SCH']['SCH.20']['SCH.20.7'].toString() != "") { sch.enteredByPerson.degree = msg['SCH']['SCH.20']['SCH.20.7']; }
if (msg['SCH']['SCH.20']['SCH.20.8'].toString() != "") { sch.enteredByPerson.sourceTable = msg['SCH']['SCH.20']['SCH.20.8']; }
sch.enteredByPerson.assigningAuthority = {};
if (msg['SCH']['SCH.20']['SCH.20.9']['SCH.20.9.1'].toString() != "") { sch.enteredByPerson.assigningAuthority.id = msg['SCH']['SCH.20']['SCH.20.9']['SCH.20.9.1']; }
if (msg['SCH']['SCH.20']['SCH.20.9']['SCH.20.9.2'].toString() != "") { sch.enteredByPerson.assigningAuthority.universalId = msg['SCH']['SCH.20']['SCH.20.9']['SCH.20.9.2']; }
if (msg['SCH']['SCH.20']['SCH.20.9']['SCH.20.9.3'].toString() != "") { sch.enteredByPerson.assigningAuthority.universalIdType = msg['SCH']['SCH.20']['SCH.20.9']['SCH.20.9.3']; }
if (Object.keys(sch.enteredByPerson.assigningAuthority).length == 0) {
	if (msg['SCH']['SCH.20']['SCH.20.9'].toString() != "") { sch.enteredByPerson.assigningAuthority.id = msg['SCH']['SCH.20']['SCH.20.9']; }
	else delete sch.enteredByPerson.assigningAuthority;
}
if (msg['SCH']['SCH.20']['SCH.20.10'].toString() != "") { sch.enteredByPerson.nameTypeCode = msg['SCH']['SCH.20']['SCH.20.10']; }
if (msg['SCH']['SCH.20']['SCH.20.11'].toString() != "") { sch.enteredByPerson.identifierCheckDigit = msg['SCH']['SCH.20']['SCH.20.11']; }
if (msg['SCH']['SCH.20']['SCH.20.12'].toString() != "") { sch.enteredByPerson.codeIdentifyingCheckDigitScheme = msg['SCH']['SCH.20']['SCH.20.12']; }
if (msg['SCH']['SCH.20']['SCH.20.13'].toString() != "") { sch.enteredByPerson.identifierTypeCode = msg['SCH']['SCH.20']['SCH.20.13']; }
sch.enteredByPerson.assigningFacility = {};
if (msg['SCH']['SCH.20']['SCH.20.14']['SCH.20.14.1'].toString() != "") { sch.enteredByPerson.assigningFacility.id = msg['SCH']['SCH.20']['SCH.20.14']['SCH.20.14.1']; }
if (msg['SCH']['SCH.20']['SCH.20.14']['SCH.20.14.2'].toString() != "") { sch.enteredByPerson.assigningFacility.universalId = msg['SCH']['SCH.20']['SCH.20.14']['SCH.20.14.2']; }
if (msg['SCH']['SCH.20']['SCH.20.14']['SCH.20.14.3'].toString() != "") { sch.enteredByPerson.assigningFacility.universalIdType = msg['SCH']['SCH.20']['SCH.20.14']['SCH.20.14.3']; }
if (Object.keys(sch.enteredByPerson.assigningFacility).length == 0) {
	if (msg['SCH']['SCH.20']['SCH.20.14'].toString() != "") { sch.enteredByPerson.assigningFacility.id = msg['SCH']['SCH.20']['SCH.20.14']; }
	else delete sch.enteredByPerson.assigningFacility;
}
if (Object.keys(sch.enteredByPerson).length == 0) {
	delete sch.enteredByPerson;
}

// SCH.21, enteredByPhoneNumber
sch.enteredByPhoneNumber = [];
for each (field in msg['SCH']['SCH.21']) {
	var block = {};
	if (field['SCH.21.1'].toString() != "") { sch.number = field['SCH.21.1']; }
	if (field['SCH.21.2'].toString() != "") { sch.telecommunicationUseCode = field['SCH.21.2']; }
	if (field['SCH.21.3'].toString() != "") { sch.telecommunicationEquipmentType = field['SCH.21.3']; }
	if (field['SCH.21.4'].toString() != "") { sch.emailAddress = field['SCH.21.4']; }
	if (field['SCH.21.5'].toString() != "") { sch.countryCode = field['SCH.21.5']; }
	if (field['SCH.21.6'].toString() != "") { sch.areaCityCode = field['SCH.21.6']; }
	if (field['SCH.21.7'].toString() != "") { sch.phoneNumber = field['SCH.21.7']; }
	if (field['SCH.21.8'].toString() != "") { sch.extension = field['SCH.21.8']; }
	if (field['SCH.21.9'].toString() != "") { sch.text = field['SCH.21.9']; }
	if (Object.keys(block).length > 0) {
		sch.enteredByPhoneNumber.push(block);
	}
}
if (sch.enteredByPhoneNumber.length == 0) {
	delete sch.enteredByPhoneNumber;
}

// SCH.22, enteredByLocation
sch.enteredByLocation = {};
if (msg['SCH']['SCH.22']['SCH.22.1'].toString() != "") { sch.enteredByLocation.pointOfCare = msg['SCH']['SCH.22']['SCH.22.1']; }
if (msg['SCH']['SCH.22']['SCH.22.2'].toString() != "") { sch.enteredByLocation.room = msg['SCH']['SCH.22']['SCH.22.2']; }
if (msg['SCH']['SCH.22']['SCH.22.3'].toString() != "") { sch.enteredByLocation.bed = msg['SCH']['SCH.22']['SCH.22.3']; }
sch.enteredByLocation.facility = {};
if (msg['SCH']['SCH.22']['SCH.22.4']['SCH.22.4.1'].toString() != "") { sch.enteredByLocation.facility.nameSpaceId =  msg['SCH']['SCH.22']['SCH.22.4']['SCH.22.4.1']; }
if (msg['SCH']['SCH.22']['SCH.22.4']['SCH.22.4.2'].toString() != "") { sch.enteredByLocation.facility.universalId =  msg['SCH']['SCH.22']['SCH.22.4']['SCH.22.4.2']; }
if (msg['SCH']['SCH.22']['SCH.22.4']['SCH.22.4.3'].toString() != "") { sch.enteredByLocation.facility.universalIdType =  msg['SCH']['SCH.22']['SCH.22.4']['SCH.22.4.3']; }
if (Object.keys(sch.enteredByLocation.facility).length == 0) {
	if (msg['SCH']['SCH.22']['SCH.22.4'].toString() != "") { sch.enteredByLocation.facility.nameSpaceId = msg['SCH']['SCH.22']['SCH.22.4']; }
	else delete sch.enteredByLocation.facility;
}
if (msg['SCH']['SCH.22']['SCH.22.5'].toString() != "") { sch.enteredByLocation.locationStatus = msg['SCH']['SCH.22']['SCH.22.5']; }
if (msg['SCH']['SCH.22']['SCH.22.6'].toString() != "") { sch.enteredByLocation.personLocationType = msg['SCH']['SCH.22']['SCH.22.6']; }
if (msg['SCH']['SCH.22']['SCH.22.7'].toString() != "") { sch.enteredByLocation.building = msg['SCH']['SCH.22']['SCH.22.7']; }
if (msg['SCH']['SCH.22']['SCH.22.8'].toString() != "") { sch.enteredByLocation.floor = msg['SCH']['SCH.22']['SCH.22.8']; }
if (msg['SCH']['SCH.22']['SCH.22.9'].toString() != "") { sch.enteredByLocation.locationDescription = msg['SCH']['SCH.22']['SCH.22.9']; }
if (Object.keys(sch.enteredByLocation).length == 0) {
	delete sch.enteredByLocation;
}

// SCH.23, parentPlacerAppointmentID
sch.parentPlacerAppointmentID = {};
if (msg['SCH']['SCH.23']['SCH.23.1'].toString() != "") { sch.parentPlacerAppointmentID.id = msg['SCH']['SCH.23']['SCH.23.1']; }
if (msg['SCH']['SCH.23']['SCH.23.2'].toString() != "") { sch.parentPlacerAppointmentID.namespaceId = msg['SCH']['SCH.23']['SCH.23.2']; }
if (msg['SCH']['SCH.23']['SCH.23.3'].toString() != "") { sch.parentPlacerAppointmentID.universalId = msg['SCH']['SCH.23']['SCH.23.3']; }
if (msg['SCH']['SCH.23']['SCH.23.4'].toString() != "") { sch.parentPlacerAppointmentID.universalIdType = msg['SCH']['SCH.23']['SCH.23.4']; }
if (Object.keys(sch.parentPlacerAppointmentID).length == 0) {
	delete sch.parentPlacerAppointmentID;
}

// SCH.24, parentFillerAppointmentID
sch.parentFillerAppointmentID = {};
if (msg['SCH']['SCH.24']['SCH.24.1'].toString() != "") { sch.parentFillerAppointmentID.id = msg['SCH']['SCH.24']['SCH.24.1']; }
if (msg['SCH']['SCH.24']['SCH.24.2'].toString() != "") { sch.parentFillerAppointmentID.namespaceId = msg['SCH']['SCH.24']['SCH.24.2']; }
if (msg['SCH']['SCH.24']['SCH.24.3'].toString() != "") { sch.parentFillerAppointmentID.universalId = msg['SCH']['SCH.24']['SCH.24.3']; }
if (msg['SCH']['SCH.24']['SCH.24.4'].toString() != "") { sch.parentFillerAppointmentID.universalIdType = msg['SCH']['SCH.24']['SCH.24.4']; }
if (Object.keys(sch.parentFillerAppointmentID).length == 0) {
	delete sch.parentFillerAppointmentID;
}

// SCH.25, fillerStatusCode
sch.fillerStatusCode = {};
if (msg['SCH']['SCH.25']['SCH.25.1'].toString() != "") { sch.fillerStatusCode.id = msg['SCH']['SCH.25']['SCH.25.1']; }
if (msg['SCH']['SCH.25']['SCH.25.2'].toString() != "") { sch.fillerStatusCode.text = msg['SCH']['SCH.25']['SCH.25.2']; }
if (msg['SCH']['SCH.25']['SCH.25.3'].toString() != "") { sch.fillerStatusCode.codingSystem = msg['SCH']['SCH.25']['SCH.25.3']; }
if (msg['SCH']['SCH.25']['SCH.25.4'].toString() != "") { sch.fillerStatusCode.altId = msg['SCH']['SCH.25']['SCH.25.4']; }
if (msg['SCH']['SCH.25']['SCH.25.5'].toString() != "") { sch.fillerStatusCode.altText = msg['SCH']['SCH.25']['SCH.25.5']; }
if (msg['SCH']['SCH.25']['SCH.25.6'].toString() != "") { sch.fillerStatusCode.altCodingSystem = msg['SCH']['SCH.25']['SCH.25.6']; }
if (Object.keys(sch.fillerStatusCode).length == 0) {
	delete sch.fillerStatusCode;
}
