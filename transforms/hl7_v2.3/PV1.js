// PV1
var pv1;
if (msg['PV1'].length() > 0) {
	pv1 = [];
	var index = 0;
	for each (seg in msg.PV1) { 
		pv1[index] = {};

		// PV1.1, setId
		if (seg['PV1.1']['PV1.1.1'].toString() != "") { pv1[index].setId = seg['PV1.1']['PV1.1.1']; }

		// PV1.2, patientClass
		if (seg['PV1.2']['PV1.2.1'].toString() != "") { pv1[index].patientClass = seg['PV1.2']['PV1.2.1']; }

		// PV1.3, assignedPatientLocation
		pv1[index].assignedPatientLocation = {};
		if (seg['PV1.3']['PV1.3.1'].toString() != "") { pv1[index].assignedPatientLocation.pointOfCare = seg['PV1.3']['PV1.3.1']; }
		if (seg['PV1.3']['PV1.3.2'].toString() != "") { pv1[index].assignedPatientLocation.room = seg['PV1.3']['PV1.3.2']; }
		if (seg['PV1.3']['PV1.3.3'].toString() != "") { pv1[index].assignedPatientLocation.bed = seg['PV1.3']['PV1.3.3']; }
		pv1[index].assignedPatientLocation.facility = {};
		if (seg['PV1.3']['PV1.3.4']['PV1.3.4.1'].toString() != "") { pv1[index].assignedPatientLocation.facility.nameSpaceId =  seg['PV1.3']['PV1.3.4']['PV1.3.4.1']; }
		if (seg['PV1.3']['PV1.3.4']['PV1.3.4.2'].toString() != "") { pv1[index].assignedPatientLocation.facility.universalId =  seg['PV1.3']['PV1.3.4']['PV1.3.4.2']; }
		if (seg['PV1.3']['PV1.3.4']['PV1.3.4.3'].toString() != "") { pv1[index].assignedPatientLocation.facility.universalIdType =  seg['PV1.3']['PV1.3.4']['PV1.3.4.3']; }
		if (Object.keys(pv1[index].assignedPatientLocation.facility).length == 0) {
			if (seg['PV1.3']['PV1.3.4'].toString() != "") { pv1[index].assignedPatientLocation.facility.nameSpaceId = seg['PV1.3']['PV1.3.4']; }
			else delete pv1[index].assignedPatientLocation.facility;
		}
		if (seg['PV1.3']['PV1.3.5'].toString() != "") { pv1[index].assignedPatientLocation.locationStatus = seg['PV1.3']['PV1.3.5']; }
		if (seg['PV1.3']['PV1.3.6'].toString() != "") { pv1[index].assignedPatientLocation.personLocationType = seg['PV1.3']['PV1.3.6']; }
		if (seg['PV1.3']['PV1.3.7'].toString() != "") { pv1[index].assignedPatientLocation.building = seg['PV1.3']['PV1.3.7']; }
		if (seg['PV1.3']['PV1.3.8'].toString() != "") { pv1[index].assignedPatientLocation.floor = seg['PV1.3']['PV1.3.8']; }
		if (seg['PV1.3']['PV1.3.9'].toString() != "") { pv1[index].assignedPatientLocation.locationDescription = seg['PV1.3']['PV1.3.9']; }
		if (Object.keys(pv1[index].assignedPatientLocation).length == 0) {
			delete pv1[index].assignedPatientLocation;
		}

		// PV1.4, admissionType
		if (seg['PV1.4']['PV1.4.1'].toString() != "") { pv1[index].admissionType = seg['PV1.4']['PV1.4.1']; }

		// PV1.5, preadmitNumber
		pv1[index].preadmitNumber = {};
		if (seg['PV1.5']['PV1.5.1'].toString() != "") { pv1[index].preadmitNumber.id = seg['PV1.5']['PV1.5.1']; }
		if (seg['PV1.5']['PV1.5.2'].toString() != "") { pv1[index].preadmitNumber.identifierCheckDigit = seg['PV1.5']['PV1.5.2']; }
		if (seg['PV1.5']['PV1.5.3'].toString() != "") { pv1[index].preadmitNumber.codeIdentifyingCheckDigitScheme = seg['PV1.5']['PV1.5.3']; }
		pv1[index].preadmitNumber.assigningAuthority = {};
		if (seg['PV1.5']['PV1.5.4']['PV1.5.4.1'].toString() != "") { pv1[index].preadmitNumber.assigningAuthority.namespaceId = seg['PV1.5']['PV1.5.4']['PV1.5.4.1']; }
		if (seg['PV1.5']['PV1.5.4']['PV1.5.4.2'].toString() != "") { pv1[index].preadmitNumber.assigningAuthority.universalId = seg['PV1.5']['PV1.5.4']['PV1.5.4.2']; }
		if (seg['PV1.5']['PV1.5.4']['PV1.5.4.3'].toString() != "") { pv1[index].preadmitNumber.assigningAuthority.universalIdType = seg['PV1.5']['PV1.5.4']['PV1.5.4.3']; }
		if (Object.keys(pv1[index].preadmitNumber.assigningAuthority).length == 0) {
			if (seg['PV1.5']['PV1.5.4'].toString() != "") { pv1[index].preadmitNumber.assigningAuthority.namespaceId = seg['PV1.5']['PV1.5.4']; }
			else delete pv1[index].preadmitNumber.assigningAuthority;
		}
		if (seg['PV1.5']['PV1.5.5'].toString() != "") { pv1[index].preadmitNumber.idTypeCode = seg['PV1.5']['PV1.5.5']; }
		pv1[index].preadmitNumber.assigningFacility = {};
		if (seg['PV1.5']['PV1.5.6']['PV1.5.6.1'].toString() != "") { pv1[index].preadmitNumber.assigningFacility.namespaceId = seg['PV1.5']['PV1.5.6']['PV1.5.6.1']; }
		if (seg['PV1.5']['PV1.5.6']['PV1.5.6.2'].toString() != "") { pv1[index].preadmitNumber.assigningFacility.universalId = seg['PV1.5']['PV1.5.6']['PV1.5.6.2']; }
		if (seg['PV1.5']['PV1.5.6']['PV1.5.6.3'].toString() != "") { pv1[index].preadmitNumber.assigningFacility.universalIdType = seg['PV1.5']['PV1.5.6']['PV1.5.6.3']; }
		if (Object.keys(pv1[index].preadmitNumber.assigningFacility).length == 0) {
			if (seg['PV1.5']['PV1.5.6'].toString() != "") { pv1[index].preadmitNumber.assigningFacility.namespaceId = seg['PV1.5']['PV1.5.6']; }
			else delete pv1[index].preadmitNumber.assigningFacility;
		}
		if (Object.keys(pv1[index].preadmitNumber).length == 0) {
			delete pv1[index].preadmitNumber;
		}

		// PV1.6, priorPatientLocation
		pv1[index].priorPatientLocation = {};
		if (seg['PV1.6']['PV1.6.1'].toString() != "") { pv1[index].priorPatientLocation.pointOfCare = seg['PV1.6']['PV1.6.1']; }
		if (seg['PV1.6']['PV1.6.2'].toString() != "") { pv1[index].priorPatientLocation.room = seg['PV1.6']['PV1.6.2']; }
		if (seg['PV1.6']['PV1.6.3'].toString() != "") { pv1[index].priorPatientLocation.bed = seg['PV1.6']['PV1.6.3']; }
		pv1[index].priorPatientLocation.facility = {};
		if (seg['PV1.6']['PV1.6.4']['PV1.6.4.1'].toString() != "") { pv1[index].priorPatientLocation.facility.nameSpaceId =  seg['PV1.6']['PV1.6.4']['PV1.6.4.1']; }
		if (seg['PV1.6']['PV1.6.4']['PV1.6.4.2'].toString() != "") { pv1[index].priorPatientLocation.facility.universalId =  seg['PV1.6']['PV1.6.4']['PV1.6.4.2']; }
		if (seg['PV1.6']['PV1.6.4']['PV1.6.4.3'].toString() != "") { pv1[index].priorPatientLocation.facility.universalIdType =  seg['PV1.6']['PV1.6.4']['PV1.6.4.3']; }
		if (Object.keys(pv1[index].priorPatientLocation.facility).length == 0) {
			if (seg['PV1.6']['PV1.6.4'].toString() != "") { pv1[index].priorPatientLocation.facility.nameSpaceId = seg['PV1.6']['PV1.6.4']; }
			else delete pv1[index].priorPatientLocation.facility;
		}
		if (seg['PV1.6']['PV1.6.5'].toString() != "") { pv1[index].priorPatientLocation.locationStatus = seg['PV1.6']['PV1.6.5']; }
		if (seg['PV1.6']['PV1.6.6'].toString() != "") { pv1[index].priorPatientLocation.personLocationType = seg['PV1.6']['PV1.6.6']; }
		if (seg['PV1.6']['PV1.6.7'].toString() != "") { pv1[index].priorPatientLocation.building = seg['PV1.6']['PV1.6.7']; }
		if (seg['PV1.6']['PV1.6.8'].toString() != "") { pv1[index].priorPatientLocation.floor = seg['PV1.6']['PV1.6.8']; }
		if (seg['PV1.6']['PV1.6.9'].toString() != "") { pv1[index].priorPatientLocation.locationDescription = seg['PV1.6']['PV1.6.9']; }
		if (Object.keys(pv1[index].priorPatientLocation).length == 0) {
			delete pv1[index].priorPatientLocation;
		}

		// PV1.7, attendingDoctor
		pv1[index].attendingDoctor = [];
		for each (field in seg['PV1.7']) {
			var block = {};
			if (field['PV1.7.1'].toString() != "") { block.id = field['PV1.7.1']; }
			if (field['PV1.7.2'].toString() != "") { block.lastName = field['PV1.7.2']; }
			if (field['PV1.7.3'].toString() != "") { block.firstName = field['PV1.7.3']; }
			if (field['PV1.7.4'].toString() != "") { block.middleInitOrName = field['PV1.7.4']; }
			if (field['PV1.7.5'].toString() != "") { block.suffix = field['PV1.7.5']; }
			if (field['PV1.7.6'].toString() != "") { block.prefix = field['PV1.7.6']; }
			if (field['PV1.7.7'].toString() != "") { block.degree = field['PV1.7.7']; }
			if (field['PV1.7.8'].toString() != "") { block.sourceTable = field['PV1.7.8']; }
			block.assigningAuthority = {};
			if (field['PV1.7.9']['PV1.7.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.7.9']['PV1.7.9.1']; }
			if (field['PV1.7.9']['PV1.7.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.7.9']['PV1.7.9.2']; }
			if (field['PV1.7.9']['PV1.7.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.7.9']['PV1.7.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PV1.7.9'].toString() != "") { block.assigningAuthority.id = field['PV1.7.9']; }
				else delete block.assigningAuthority;
			}
			if (field['PV1.7.10'].toString() != "") { block.nameTypeCode = field['PV1.7.10']; }
			if (field['PV1.7.11'].toString() != "") { block.identifierCheckDigit = field['PV1.7.11']; }
			if (field['PV1.7.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.7.12']; }
			if (field['PV1.7.13'].toString() != "") { block.identifierTypeCode = field['PV1.7.13']; }
			block.assigningFacility = {};
			if (field['PV1.7.14']['PV1.7.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.7.14']['PV1.7.14.1']; }
			if (field['PV1.7.14']['PV1.7.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.7.14']['PV1.7.14.2']; }
			if (field['PV1.7.14']['PV1.7.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.7.14']['PV1.7.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PV1.7.14'].toString() != "") { block.assigningFacility.id = field['PV1.7.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pv1[index].attendingDoctor.push(block);
			}
		}
		if (pv1[index].attendingDoctor.length == 0) {
			delete pv1[index].attendingDoctor;
		}

		// PV1.8, referringDoctor
		pv1[index].referringDoctor = [];
		for each (field in seg['PV1.8']) {
			var block = {};
			if (field['PV1.8.1'].toString() != "") { block.id = field['PV1.8.1']; }
			if (field['PV1.8.2'].toString() != "") { block.lastName = field['PV1.8.2']; }
			if (field['PV1.8.3'].toString() != "") { block.firstName = field['PV1.8.3']; }
			if (field['PV1.8.4'].toString() != "") { block.middleInitOrName = field['PV1.8.4']; }
			if (field['PV1.8.5'].toString() != "") { block.suffix = field['PV1.8.5']; }
			if (field['PV1.8.6'].toString() != "") { block.prefix = field['PV1.8.6']; }
			if (field['PV1.8.7'].toString() != "") { block.degree = field['PV1.8.7']; }
			if (field['PV1.8.8'].toString() != "") { block.sourceTable = field['PV1.8.8']; }
			block.assigningAuthority = {};
			if (field['PV1.8.9']['PV1.8.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.8.9']['PV1.8.9.1']; }
			if (field['PV1.8.9']['PV1.8.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.8.9']['PV1.8.9.2']; }
			if (field['PV1.8.9']['PV1.8.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.8.9']['PV1.8.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PV1.8.9'].toString() != "") { block.assigningAuthority.id = field['PV1.8.9']; }
				else delete block.assigningAuthority;
			}
			if (field['PV1.8.10'].toString() != "") { block.nameTypeCode = field['PV1.8.10']; }
			if (field['PV1.8.11'].toString() != "") { block.identifierCheckDigit = field['PV1.8.11']; }
			if (field['PV1.8.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.8.12']; }
			if (field['PV1.8.13'].toString() != "") { block.identifierTypeCode = field['PV1.8.13']; }
			block.assigningFacility = {};
			if (field['PV1.8.14']['PV1.8.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.8.14']['PV1.8.14.1']; }
			if (field['PV1.8.14']['PV1.8.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.8.14']['PV1.8.14.2']; }
			if (field['PV1.8.14']['PV1.8.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.8.14']['PV1.8.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PV1.8.14'].toString() != "") { block.assigningFacility.id = field['PV1.8.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pv1[index].referringDoctor.push(block);
			}
		}
		if (pv1[index].referringDoctor.length == 0) {
			delete pv1[index].referringDoctor;
		}
		
		// PV1.9, consultingDoctor
		pv1[index].consultingDoctor = [];
		for each (field in seg['PV1.9']) {
			var block = {};
			if (field['PV1.9.1'].toString() != "") { block.id = field['PV1.9.1']; }
			if (field['PV1.9.2'].toString() != "") { block.lastName = field['PV1.9.2']; }
			if (field['PV1.9.3'].toString() != "") { block.firstName = field['PV1.9.3']; }
			if (field['PV1.9.4'].toString() != "") { block.middleInitOrName = field['PV1.9.4']; }
			if (field['PV1.9.5'].toString() != "") { block.suffix = field['PV1.9.5']; }
			if (field['PV1.9.6'].toString() != "") { block.prefix = field['PV1.9.6']; }
			if (field['PV1.9.7'].toString() != "") { block.degree = field['PV1.9.7']; }
			if (field['PV1.9.8'].toString() != "") { block.sourceTable = field['PV1.9.8']; }
			block.assigningAuthority = {};
			if (field['PV1.9.9']['PV1.9.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.9.9']['PV1.9.9.1']; }
			if (field['PV1.9.9']['PV1.9.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.9.9']['PV1.9.9.2']; }
			if (field['PV1.9.9']['PV1.9.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.9.9']['PV1.9.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PV1.9.9'].toString() != "") { block.assigningAuthority.id = field['PV1.9.9']; }
				else delete block.assigningAuthority;
			}
			if (field['PV1.9.10'].toString() != "") { block.nameTypeCode = field['PV1.9.10']; }
			if (field['PV1.9.11'].toString() != "") { block.identifierCheckDigit = field['PV1.9.11']; }
			if (field['PV1.9.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.9.12']; }
			if (field['PV1.9.13'].toString() != "") { block.identifierTypeCode = field['PV1.9.13']; }
			block.assigningFacility = {};
			if (field['PV1.9.14']['PV1.9.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.9.14']['PV1.9.14.1']; }
			if (field['PV1.9.14']['PV1.9.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.9.14']['PV1.9.14.2']; }
			if (field['PV1.9.14']['PV1.9.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.9.14']['PV1.9.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PV1.9.14'].toString() != "") { block.assigningFacility.id = field['PV1.9.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pv1[index].consultingDoctor.push(block);
			}
		}
		if (pv1[index].consultingDoctor.length == 0) {
			delete pv1[index].consultingDoctor;
		}
		
		// PV1.10, hospitalService
		if (seg['PV1.10']['PV1.10.1'].toString() != "") { pv1[index].hospitalService = seg['PV1.10']['PV1.10.1']; }

		// PV1.11, temporaryLocation
		pv1[index].temporaryLocation = {};
		if (seg['PV1.11']['PV1.11.1'].toString() != "") { pv1[index].temporaryLocation.pointOfCare = seg['PV1.11']['PV1.11.1']; }
		if (seg['PV1.11']['PV1.11.2'].toString() != "") { pv1[index].temporaryLocation.room = seg['PV1.11']['PV1.11.2']; }
		if (seg['PV1.11']['PV1.11.3'].toString() != "") { pv1[index].temporaryLocation.bed = seg['PV1.11']['PV1.11.3']; }
		pv1[index].temporaryLocation.facility = {};
		if (seg['PV1.11']['PV1.11.4']['PV1.11.4.1'].toString() != "") { pv1[index].temporaryLocation.facility.nameSpaceId =  seg['PV1.11']['PV1.11.4']['PV1.11.4.1']; }
		if (seg['PV1.11']['PV1.11.4']['PV1.11.4.2'].toString() != "") { pv1[index].temporaryLocation.facility.universalId =  seg['PV1.11']['PV1.11.4']['PV1.11.4.2']; }
		if (seg['PV1.11']['PV1.11.4']['PV1.11.4.3'].toString() != "") { pv1[index].temporaryLocation.facility.universalIdType =  seg['PV1.11']['PV1.11.4']['PV1.11.4.3']; }
		if (Object.keys(pv1[index].temporaryLocation.facility).length == 0) {
			if (seg['PV1.11']['PV1.11.4'].toString() != "") { pv1[index].temporaryLocation.facility.nameSpaceId = seg['PV1.11']['PV1.11.4']; }
			else delete pv1[index].temporaryLocation.facility;
		}
		if (seg['PV1.11']['PV1.11.5'].toString() != "") { pv1[index].temporaryLocation.locationStatus = seg['PV1.11']['PV1.11.5']; }
		if (seg['PV1.11']['PV1.11.6'].toString() != "") { pv1[index].temporaryLocation.personLocationType = seg['PV1.11']['PV1.11.6']; }
		if (seg['PV1.11']['PV1.11.7'].toString() != "") { pv1[index].temporaryLocation.building = seg['PV1.11']['PV1.11.7']; }
		if (seg['PV1.11']['PV1.11.8'].toString() != "") { pv1[index].temporaryLocation.floor = seg['PV1.11']['PV1.11.8']; }
		if (seg['PV1.11']['PV1.11.9'].toString() != "") { pv1[index].temporaryLocation.locationDescription = seg['PV1.11']['PV1.11.9']; }
		if (Object.keys(pv1[index].temporaryLocation).length == 0) {
			delete pv1[index].temporaryLocation;
		}

		// PV1.12, preadmitTestIndicator
		if (seg['PV1.12']['PV1.12.1'].toString() != "") { pv1[index].preadmitTestIndicator = seg['PV1.12']['PV1.12.1']; }

		// PV1.13, readmissionIndicator
		if (seg['PV1.13']['PV1.13.1'].toString() != "") { pv1[index].readmissionIndicator = seg['PV1.13']['PV1.13.1']; }

		// PV1.14, admitSource
		if (seg['PV1.14']['PV1.14.1'].toString() != "") { pv1[index].admitSource = seg['PV1.14']['PV1.14.1']; }

		// PV1.15, ambulatoryStatus
		pv1[index].ambulatoryStatus = [];
		for each (field in seg['PV1.15']) {
			if (field['PV1.15.1'].toString() != "") {
				pv1[index].ambulatoryStatus.push(field['PV1.15.1']);
			}
		}
		if (pv1[index].ambulatoryStatus.length == 0){
			delete pv1[index].ambulatoryStatus;
		}

		// PV1.16, vipIndicator
		if (seg['PV1.16']['PV1.16.1'].toString() != "") { pv1[index].vipIndicator = seg['PV1.16']['PV1.16.1']; }

		// PV1.17, admittingDoctor
		pv1[index].admittingDoctor = [];
		for each (field in seg['PV1.17']) {
			var block = {};
			if (field['PV1.17.1'].toString() != "") { block.id = field['PV1.17.1']; }
			if (field['PV1.17.2'].toString() != "") { block.lastName = field['PV1.17.2']; }
			if (field['PV1.17.3'].toString() != "") { block.firstName = field['PV1.17.3']; }
			if (field['PV1.17.4'].toString() != "") { block.middleInitOrName = field['PV1.17.4']; }
			if (field['PV1.17.5'].toString() != "") { block.suffix = field['PV1.17.5']; }
			if (field['PV1.17.6'].toString() != "") { block.prefix = field['PV1.17.6']; }
			if (field['PV1.17.7'].toString() != "") { block.degree = field['PV1.17.7']; }
			if (field['PV1.17.8'].toString() != "") { block.sourceTable = field['PV1.17.8']; }
			block.assigningAuthority = {};
			if (field['PV1.17.9']['PV1.17.9.1'].toString() != "") { block.assigningAuthority.id = field['PV1.17.9']['PV1.17.9.1']; }
			if (field['PV1.17.9']['PV1.17.9.2'].toString() != "") { block.assigningAuthority.universalId = field['PV1.17.9']['PV1.17.9.2']; }
			if (field['PV1.17.9']['PV1.17.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['PV1.17.9']['PV1.17.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['PV1.17.9'].toString() != "") { block.assigningAuthority.id = field['PV1.17.9']; }
				else delete block.assigningAuthority;
			}
			if (field['PV1.17.10'].toString() != "") { block.nameTypeCode = field['PV1.17.10']; }
			if (field['PV1.17.11'].toString() != "") { block.identifierCheckDigit = field['PV1.17.11']; }
			if (field['PV1.17.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['PV1.17.12']; }
			if (field['PV1.17.13'].toString() != "") { block.identifierTypeCode = field['PV1.17.13']; }
			block.assigningFacility = {};
			if (field['PV1.17.14']['PV1.17.14.1'].toString() != "") { block.assigningFacility.id = field['PV1.17.14']['PV1.17.14.1']; }
			if (field['PV1.17.14']['PV1.17.14.2'].toString() != "") { block.assigningFacility.universalId = field['PV1.17.14']['PV1.17.14.2']; }
			if (field['PV1.17.14']['PV1.17.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['PV1.17.14']['PV1.17.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['PV1.17.14'].toString() != "") { block.assigningFacility.id = field['PV1.17.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				pv1[index].admittingDoctor.push(block);
			}
		}
		if (pv1[index].admittingDoctor.length == 0) {
			delete pv1[index].admittingDoctor;
		}
		
		// PV1.18, patientType
		if (seg['PV1.18']['PV1.18.1'].toString() != "") { pv1[index].patientType = seg['PV1.18']['PV1.18.1']; }

		// PV1.19, visitNumber
		pv1[index].visitNumber = {};
		if (seg['PV1.19']['PV1.19.1'].toString() != "") { pv1[index].visitNumber.id = seg['PV1.19']['PV1.19.1']; }
		if (seg['PV1.19']['PV1.19.2'].toString() != "") { pv1[index].visitNumber.identifierCheckDigit = seg['PV1.19']['PV1.19.2']; }
		if (seg['PV1.19']['PV1.19.3'].toString() != "") { pv1[index].visitNumber.codeIdentifyingCheckDigitScheme = seg['PV1.19']['PV1.19.3']; }
		pv1[index].visitNumber.assigningAuthority = {};
		if (seg['PV1.19']['PV1.19.4']['PV1.19.4.1'].toString() != "") { pv1[index].visitNumber.assigningAuthority.namespaceId = seg['PV1.19']['PV1.19.4']['PV1.19.4.1']; }
		if (seg['PV1.19']['PV1.19.4']['PV1.19.4.2'].toString() != "") { pv1[index].visitNumber.assigningAuthority.universalId = seg['PV1.19']['PV1.19.4']['PV1.19.4.2']; }
		if (seg['PV1.19']['PV1.19.4']['PV1.19.4.3'].toString() != "") { pv1[index].visitNumber.assigningAuthority.universalIdType = seg['PV1.19']['PV1.19.4']['PV1.19.4.3']; }
		if (Object.keys(pv1[index].visitNumber.assigningAuthority).length == 0) {
			if (seg['PV1.19']['PV1.19.4'].toString() != "") { pv1[index].visitNumber.assigningAuthority.namespaceId = seg['PV1.19']['PV1.19.4']; }
			else delete pv1[index].visitNumber.assigningAuthority;
		}
		if (seg['PV1.19']['PV1.19.5'].toString() != "") { pv1[index].visitNumber.idTypeCode = seg['PV1.19']['PV1.19.5']; }
		pv1[index].visitNumber.assigningFacility = {};
		if (seg['PV1.19']['PV1.19.6']['PV1.19.6.1'].toString() != "") { pv1[index].visitNumber.assigningFacility.namespaceId = seg['PV1.19']['PV1.19.6']['PV1.19.6.1']; }
		if (seg['PV1.19']['PV1.19.6']['PV1.19.6.2'].toString() != "") { pv1[index].visitNumber.assigningFacility.universalId = seg['PV1.19']['PV1.19.6']['PV1.19.6.2']; }
		if (seg['PV1.19']['PV1.19.6']['PV1.19.6.3'].toString() != "") { pv1[index].visitNumber.assigningFacility.universalIdType = seg['PV1.19']['PV1.19.6']['PV1.19.6.3']; }
		if (Object.keys(pv1[index].visitNumber.assigningFacility).length == 0) {
			if (seg['PV1.19']['PV1.19.6'].toString() != "") { pv1[index].visitNumber.assigningFacility.namespaceId = seg['PV1.19']['PV1.19.6']; }
			else delete pv1[index].visitNumber.assigningFacility;
		}
		if (Object.keys(pv1[index].visitNumber).length == 0) {
			delete pv1[index].visitNumber;
		}
		
		// PV1.20, financialClass
		pv1[index].financialClass = {};
		if (seg['PV1.20']['PV1.20.1'].toString() != "") { pv1[index].financialClass.financialClass = seg['PV1.20']['PV1.20.1']; }
		if (seg['PV1.20']['PV1.20.2'].toString() != "") { pv1[index].financialClass.effectiveDate = seg['PV1.20']['PV1.20.2']; }
		if (Object.keys(pv1[index].financialClass).length == 0) {
			delete pv1[index].financialClass;
		}

		// PV1.21, chargePriceIndicator
		if (seg['PV1.21']['PV1.21.1'].toString() != "") { pv1[index].chargePriceIndicator = seg['PV1.21']['PV1.21.1']; }

		// PV1.22, courtesyCode
		if (seg['PV1.22']['PV1.22.1'].toString() != "") { pv1[index].courtesyCode = seg['PV1.22']['PV1.22.1']; }

		// PV1.23, creditRating
		if (seg['PV1.23']['PV1.23.1'].toString() != "") { pv1[index].creditRating = seg['PV1.23']['PV1.23.1']; }

		// PV1.24, contractCode
		pv1[index].contractCode = [];
		for each (field in seg['PV1.24']) {
			if (field['PV1.24.1'].toString() != "") {
				pv1[index].contractCode.push(field['PV1.24.1']);
			}
		}
		if (pv1[index].contractCode.length == 0) {
			delete pv1[index].contractCode;
		}

		// PV1.25, contractEffectiveDate
		pv1[index].contractEffectiveDate = [];
		for each (field in seg['PV1.25']) {
			if (field['PV1.25.1'].toString() != "") {
				pv1[index].contractEffectiveDate.push(field['PV1.25.1']);
			}
		}
		if (pv1[index].contractEffectiveDate.length == 0) {
			delete pv1[index].contractEffectiveDate;
		}

		// PV1.26, contractAmount
		pv1[index].contractAmount = [];
		for each (field in seg['PV1.26']) {
			if (field['PV1.26.1'].toString() != "") {
				pv1[index].contractAmount.push(field['PV1.26.1']);
			}
		}
		if (pv1[index].contractAmount.length == 0) {
			delete pv1[index].contractAmount;
		}

		// PV1.27, contractPeriod
		pv1[index].contractPeriod = [];
		for each (field in seg['PV1.27']) {
			if (field['PV1.27.1'].toString() != "") {
				pv1[index].contractPeriod.push(field['PV1.27.1']);
			}
		}
		if (pv1[index].contractPeriod.length == 0) {
			delete pv1[index].contractPeriod;
		}

		// PV1.28, interestCode
		if (seg['PV1.28']['PV1.28.1'].toString() != "") { pv1[index].interestCode = seg['PV1.28']['PV1.28.1']; }

		// PV1.29, transferToBadDebtCode
		if (seg['PV1.29']['PV1.29.1'].toString() != "") { pv1[index].transferToBadDebtCode = seg['PV1.29']['PV1.29.1']; }

		// PV1.30, transferToBadDebtDate
		if (seg['PV1.30']['PV1.30.1'].toString() != "") { pv1[index].transferToBadDebtDate = seg['PV1.30']['PV1.30.1']; }

		// PV1.31, badDebtAgencyCode
		if (seg['PV1.31']['PV1.31.1'].toString() != "") { pv1[index].badDebtAgencyCode = seg['PV1.31']['PV1.31.1']; }

		// PV1.32, badDebtTransferAmount
		if (seg['PV1.32']['PV1.32.1'].toString() != "") { pv1[index].badDebtTransferAmount = seg['PV1.32']['PV1.32.1']; }

		// PV1.33, badDebtRecoveryAmount
		if (seg['PV1.33']['PV1.33.1'].toString() != "") { pv1[index].badDebtRecoveryAmount = seg['PV1.33']['PV1.33.1']; }

		// PV1.34, deleteAccountIndicator
		if (seg['PV1.34']['PV1.34.1'].toString() != "") { pv1[index].deleteAccountIndicator = seg['PV1.34']['PV1.34.1']; }

		// PV1.35, deleteAccountDate
		if (seg['PV1.35']['PV1.35.1'].toString() != "") { pv1[index].deleteAccountDate = seg['PV1.35']['PV1.35.1']; }

		// PV1.36, dischargeDisposition
		if (seg['PV1.36']['PV1.36.1'].toString() != "") { pv1[index].dischargeDisposition = seg['PV1.36']['PV1.36.1']; }

		// PV1.37, dischargedtoLocation
		pv1[index].dischargedtoLocation = {};
		if (seg['PV1.37']['PV1.37.1'].toString() != "") { pv1[index].dischargedtoLocation.dischargeLocation = seg['PV1.37']['PV1.37.1']; }
		if (seg['PV1.37']['PV1.37.2'].toString() != "") { pv1[index].dischargedtoLocation.effectiveDate = seg['PV1.37']['PV1.37.2']; }
		if (Object.keys(pv1[index].dischargedtoLocation).length == 0) {
			delete pv1[index].dischargedtoLocation;
		}

		// PV1.38, dietType
		if (seg['PV1.38']['PV1.38.1'].toString() != "") { pv1[index].dietType = seg['PV1.38']['PV1.38.1']; }

		// PV1.39, servicingFacility
		if (seg['PV1.39']['PV1.39.1'].toString() != "") { pv1[index].servicingFacility = seg['PV1.39']['PV1.39.1']; }

		// PV1.40, bedStatus
		if (seg['PV1.40']['PV1.40.1'].toString() != "") { pv1[index].bedStatus = seg['PV1.40']['PV1.40.1']; }

		// PV1.41, accountStatus
		if (seg['PV1.41']['PV1.41.1'].toString() != "") { pv1[index].accountStatus = seg['PV1.41']['PV1.41.1']; }

		// PV1.42, pendingLocation
		pv1[index].pendingLocation = {};
		if (seg['PV1.42']['PV1.42.1'].toString() != "") { pv1[index].pendingLocation.pointOfCare = seg['PV1.42']['PV1.42.1']; }
		if (seg['PV1.42']['PV1.42.2'].toString() != "") { pv1[index].pendingLocation.room = seg['PV1.42']['PV1.42.2']; }
		if (seg['PV1.42']['PV1.42.3'].toString() != "") { pv1[index].pendingLocation.bed = seg['PV1.42']['PV1.42.3']; }
		pv1[index].pendingLocation.facility = {};
		if (seg['PV1.42']['PV1.42.4']['PV1.42.4.1'].toString() != "") { pv1[index].pendingLocation.facility.nameSpaceId =  seg['PV1.42']['PV1.42.4']['PV1.42.4.1']; }
		if (seg['PV1.42']['PV1.42.4']['PV1.42.4.2'].toString() != "") { pv1[index].pendingLocation.facility.universalId =  seg['PV1.42']['PV1.42.4']['PV1.42.4.2']; }
		if (seg['PV1.42']['PV1.42.4']['PV1.42.4.3'].toString() != "") { pv1[index].pendingLocation.facility.universalIdType =  seg['PV1.42']['PV1.42.4']['PV1.42.4.3']; }
		if (Object.keys(pv1[index].pendingLocation.facility).length == 0) {
			if (seg['PV1.42']['PV1.42.4'].toString() != "") { pv1[index].pendingLocation.facility.nameSpaceId = seg['PV1.42']['PV1.42.4']; }
			else delete pv1[index].pendingLocation.facility;
		}
		if (seg['PV1.42']['PV1.42.5'].toString() != "") { pv1[index].pendingLocation.locationStatus = seg['PV1.42']['PV1.42.5']; }
		if (seg['PV1.42']['PV1.42.6'].toString() != "") { pv1[index].pendingLocation.personLocationType = seg['PV1.42']['PV1.42.6']; }
		if (seg['PV1.42']['PV1.42.7'].toString() != "") { pv1[index].pendingLocation.building = seg['PV1.42']['PV1.42.7']; }
		if (seg['PV1.42']['PV1.42.8'].toString() != "") { pv1[index].pendingLocation.floor = seg['PV1.42']['PV1.42.8']; }
		if (seg['PV1.42']['PV1.42.9'].toString() != "") { pv1[index].pendingLocation.locationDescription = seg['PV1.42']['PV1.42.9']; }
		if (Object.keys(pv1[index].pendingLocation).length == 0) {
			delete pv1[index].pendingLocation;
		}

		// PV1.43, priorTemporaryLocation
		pv1[index].priorTemporaryLocation = {};
		if (seg['PV1.43']['PV1.43.1'].toString() != "") { pv1[index].priorTemporaryLocation.pointOfCare = seg['PV1.43']['PV1.43.1']; }
		if (seg['PV1.43']['PV1.43.2'].toString() != "") { pv1[index].priorTemporaryLocation.room = seg['PV1.43']['PV1.43.2']; }
		if (seg['PV1.43']['PV1.43.3'].toString() != "") { pv1[index].priorTemporaryLocation.bed = seg['PV1.43']['PV1.43.3']; }
		pv1[index].priorTemporaryLocation.facility = {};
		if (seg['PV1.43']['PV1.43.4']['PV1.43.4.1'].toString() != "") { pv1[index].priorTemporaryLocation.facility.nameSpaceId =  seg['PV1.43']['PV1.43.4']['PV1.43.4.1']; }
		if (seg['PV1.43']['PV1.43.4']['PV1.43.4.2'].toString() != "") { pv1[index].priorTemporaryLocation.facility.universalId =  seg['PV1.43']['PV1.43.4']['PV1.43.4.2']; }
		if (seg['PV1.43']['PV1.43.4']['PV1.43.4.3'].toString() != "") { pv1[index].priorTemporaryLocation.facility.universalIdType =  seg['PV1.43']['PV1.43.4']['PV1.43.4.3']; }
		if (Object.keys(pv1[index].priorTemporaryLocation.facility).length == 0) {
			if (seg['PV1.43']['PV1.43.4'].toString() != "") { pv1[index].priorTemporaryLocation.facility.nameSpaceId = seg['PV1.43']['PV1.43.4']; }
			else delete pv1[index].priorTemporaryLocation.facility;
		}
		if (seg['PV1.43']['PV1.43.5'].toString() != "") { pv1[index].priorTemporaryLocation.locationStatus = seg['PV1.43']['PV1.43.5']; }
		if (seg['PV1.43']['PV1.43.6'].toString() != "") { pv1[index].priorTemporaryLocation.personLocationType = seg['PV1.43']['PV1.43.6']; }
		if (seg['PV1.43']['PV1.43.7'].toString() != "") { pv1[index].priorTemporaryLocation.building = seg['PV1.43']['PV1.43.7']; }
		if (seg['PV1.43']['PV1.43.8'].toString() != "") { pv1[index].priorTemporaryLocation.floor = seg['PV1.43']['PV1.43.8']; }
		if (seg['PV1.43']['PV1.43.9'].toString() != "") { pv1[index].priorTemporaryLocation.locationDescription = seg['PV1.43']['PV1.43.9']; }
		if (Object.keys(pv1[index].priorTemporaryLocation).length == 0) {
			delete pv1[index].priorTemporaryLocation;
		}

		// PV1.44, admitDateTime
		if (seg['PV1.44']['PV1.44.1'].toString() != "") { pv1[index].admitDateTime = seg['PV1.44']['PV1.44.1']; }

		// PV1.45, dischargeDateTime
		if (seg['PV1.45']['PV1.45.1'].toString() != "") { pv1[index].dischargeDateTime = seg['PV1.45']['PV1.45.1']; }

		// PV1.46, currentPatientBalance
		if (seg['PV1.46']['PV1.46.1'].toString() != "") { pv1[index].currentPatientBalance = seg['PV1.46']['PV1.46.1']; }

		// PV1.47, totalCharges
		if (seg['PV1.47']['PV1.47.1'].toString() != "") { pv1[index].totalCharges = seg['PV1.47']['PV1.47.1']; }

		// PV1.48, totalAdjustments
		if (seg['PV1.48']['PV1.48.1'].toString() != "") { pv1[index].totalAdjustments = seg['PV1.48']['PV1.48.1']; }

		// PV1.49, totalPayments
		if (seg['PV1.49']['PV1.49.1'].toString() != "") { pv1[index].totalPayments = seg['PV1.49']['PV1.49.1']; }

		// PV1.50, alternateVisitID
		pv1[index].alternateVisitID = {};
		if (seg['PV1.50']['PV1.50.1'].toString() != "") { pv1[index].alternateVisitID.id = seg['PV1.50']['PV1.50.1']; }
		if (seg['PV1.50']['PV1.50.2'].toString() != "") { pv1[index].alternateVisitID.identifierCheckDigit = seg['PV1.50']['PV1.50.2']; }
		if (seg['PV1.50']['PV1.50.3'].toString() != "") { pv1[index].alternateVisitID.codeIdentifyingCheckDigitScheme = seg['PV1.50']['PV1.50.3']; }
		pv1[index].alternateVisitID.assigningAuthority = {};
		if (seg['PV1.50']['PV1.50.4']['PV1.50.4.1'].toString() != "") { pv1[index].alternateVisitID.assigningAuthority.namespaceId = seg['PV1.50']['PV1.50.4']['PV1.50.4.1']; }
		if (seg['PV1.50']['PV1.50.4']['PV1.50.4.2'].toString() != "") { pv1[index].alternateVisitID.assigningAuthority.universalId = seg['PV1.50']['PV1.50.4']['PV1.50.4.2']; }
		if (seg['PV1.50']['PV1.50.4']['PV1.50.4.3'].toString() != "") { pv1[index].alternateVisitID.assigningAuthority.universalIdType = seg['PV1.50']['PV1.50.4']['PV1.50.4.3']; }
		if (Object.keys(pv1[index].alternateVisitID.assigningAuthority).length == 0) {
			if (seg['PV1.50']['PV1.50.4'].toString() != "") { pv1[index].alternateVisitID.assigningAuthority.namespaceId = seg['PV1.50']['PV1.50.4']; }
			else delete pv1[index].alternateVisitID.assigningAuthority;
		}
		if (seg['PV1.50']['PV1.50.5'].toString() != "") { pv1[index].alternateVisitID.idTypeCode = seg['PV1.50']['PV1.50.5']; }
		pv1[index].alternateVisitID.assigningFacility = {};
		if (seg['PV1.50']['PV1.50.6']['PV1.50.6.1'].toString() != "") { pv1[index].alternateVisitID.assigningFacility.namespaceId = seg['PV1.50']['PV1.50.6']['PV1.50.6.1']; }
		if (seg['PV1.50']['PV1.50.6']['PV1.50.6.2'].toString() != "") { pv1[index].alternateVisitID.assigningFacility.universalId = seg['PV1.50']['PV1.50.6']['PV1.50.6.2']; }
		if (seg['PV1.50']['PV1.50.6']['PV1.50.6.3'].toString() != "") { pv1[index].alternateVisitID.assigningFacility.universalIdType = seg['PV1.50']['PV1.50.6']['PV1.50.6.3']; }
		if (Object.keys(pv1[index].alternateVisitID.assigningFacility).length == 0) {
			if (seg['PV1.50']['PV1.50.6'].toString() != "") { pv1[index].alternateVisitID.assigningFacility.namespaceId = seg['PV1.50']['PV1.50.6']; }
			else delete pv1[index].alternateVisitID.assigningFacility;
		}
		if (Object.keys(pv1[index].alternateVisitID).length == 0) {
			delete pv1[index].alternateVisitID;
		}

		// PV1.51, visitIndicator
		if (seg['PV1.51']['PV1.51.1'].toString() != "") { pv1[index].visitIndicator = seg['PV1.51']['PV1.51.1']; }

		// PV1.52, otherHealthcareProvider
		pv1[index].otherHealthcareProvider = {};
		if (seg['PV1.52']['PV1.52.1'].toString() != "") { pv1[index].otherHealthcareProvider.id = seg['PV1.52']['PV1.52.1']; }
		if (seg['PV1.52']['PV1.52.2'].toString() != "") { pv1[index].otherHealthcareProvider.lastName = seg['PV1.52']['PV1.52.2']; }
		if (seg['PV1.52']['PV1.52.3'].toString() != "") { pv1[index].otherHealthcareProvider.firstName = seg['PV1.52']['PV1.52.3']; }
		if (seg['PV1.52']['PV1.52.4'].toString() != "") { pv1[index].otherHealthcareProvider.middleInitOrName = seg['PV1.52']['PV1.52.4']; }
		if (seg['PV1.52']['PV1.52.5'].toString() != "") { pv1[index].otherHealthcareProvider.suffix = seg['PV1.52']['PV1.52.5']; }
		if (seg['PV1.52']['PV1.52.6'].toString() != "") { pv1[index].otherHealthcareProvider.prefix = seg['PV1.52']['PV1.52.6']; }
		if (seg['PV1.52']['PV1.52.7'].toString() != "") { pv1[index].otherHealthcareProvider.degree = seg['PV1.52']['PV1.52.7']; }
		if (seg['PV1.52']['PV1.52.8'].toString() != "") { pv1[index].otherHealthcareProvider.sourceTable = seg['PV1.52']['PV1.52.8']; }
		pv1[index].otherHealthcareProvider.assigningAuthority = {};
		if (seg['PV1.52']['PV1.52.9']['PV1.52.9.1'].toString() != "") { pv1[index].otherHealthcareProvider.assigningAuthority.id = seg['PV1.52']['PV1.52.9']['PV1.52.9.1']; }
		if (seg['PV1.52']['PV1.52.9']['PV1.52.9.2'].toString() != "") { pv1[index].otherHealthcareProvider.assigningAuthority.universalId = seg['PV1.52']['PV1.52.9']['PV1.52.9.2']; }
		if (seg['PV1.52']['PV1.52.9']['PV1.52.9.3'].toString() != "") { pv1[index].otherHealthcareProvider.assigningAuthority.universalIdType = seg['PV1.52']['PV1.52.9']['PV1.52.9.3']; }
		if (Object.keys(pv1[index].otherHealthcareProvider.assigningAuthority).length == 0) {
			if (seg['PV1.52']['PV1.52.9'].toString() != "") { pv1[index].otherHealthcareProvider.assigningAuthority.id = seg['PV1.52']['PV1.52.9']; }
			else delete pv1[index].otherHealthcareProvider.assigningAuthority;
		}
		if (seg['PV1.52']['PV1.52.10'].toString() != "") { pv1[index].otherHealthcareProvider.nameTypeCode = seg['PV1.52']['PV1.52.10']; }
		if (seg['PV1.52']['PV1.52.11'].toString() != "") { pv1[index].otherHealthcareProvider.identifierCheckDigit = seg['PV1.52']['PV1.52.11']; }
		if (seg['PV1.52']['PV1.52.12'].toString() != "") { pv1[index].otherHealthcareProvider.codeIdentifyingCheckDigitScheme = seg['PV1.52']['PV1.52.12']; }
		if (seg['PV1.52']['PV1.52.13'].toString() != "") { pv1[index].otherHealthcareProvider.identifierTypeCode = seg['PV1.52']['PV1.52.13']; }
		pv1[index].otherHealthcareProvider.assigningFacility = {};
		if (seg['PV1.52']['PV1.52.14']['PV1.52.14.1'].toString() != "") { pv1[index].otherHealthcareProvider.assigningFacility.id = seg['PV1.52']['PV1.52.14']['PV1.52.14.1']; }
		if (seg['PV1.52']['PV1.52.14']['PV1.52.14.2'].toString() != "") { pv1[index].otherHealthcareProvider.assigningFacility.universalId = seg['PV1.52']['PV1.52.14']['PV1.52.14.2']; }
		if (seg['PV1.52']['PV1.52.14']['PV1.52.14.3'].toString() != "") { pv1[index].otherHealthcareProvider.assigningFacility.universalIdType = seg['PV1.52']['PV1.52.14']['PV1.52.14.3']; }
		if (Object.keys(pv1[index].otherHealthcareProvider.assigningFacility).length == 0) {
			if (seg['PV1.52']['PV1.52.14'].toString() != "") { pv1[index].otherHealthcareProvider.assigningFacility.id = seg['PV1.52']['PV1.52.14']; }
			else delete pv1[index].otherHealthcareProvider.assigningFacility;
		}
		if (Object.keys(pv1[index].otherHealthcareProvider).length == 0) {
			delete pv1[index].otherHealthcareProvider;
		}

		// PV2 (PV1) 
		var pv2Group = getSegmentsAfter(msg,pv1Seg,'PV2',true);
		if (pv2Group.length > 0 && pv1) {
			pv1[index].PV2 = [];
			var indexPV2 = 0;
			for each (pv2Seg in pv2Group) {
				pv1[index].PV2[indexPV2] = {};

				// PV2.1, priorPendingLocation
				pv1[index].PV2[indexPV2].priorPendingLocation = {};
				if (pv2Seg['PV2.1']['PV2.1.1'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.pointOfCare = pv2Seg['PV2.1']['PV2.1.1']; }
				if (pv2Seg['PV2.1']['PV2.1.2'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.room = pv2Seg['PV2.1']['PV2.1.2']; }
				if (pv2Seg['PV2.1']['PV2.1.3'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.bed = pv2Seg['PV2.1']['PV2.1.3']; }
				pv1[index].PV2[indexPV2].priorPendingLocation.facility = {};
				if (pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.1'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.facility.nameSpaceId =  pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.1']; }
				if (pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.2'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.facility.universalId =  pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.2']; }
				if (pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.3'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.facility.universalIdType =  pv2Seg['PV2.1']['PV2.1.4']['PV2.1.4.3']; }
				if (Object.keys(pv1[index].PV2[indexPV2].priorPendingLocation.facility).length == 0) {
					if (pv2Seg['PV2.1']['PV2.1.4'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.facility.nameSpaceId = pv2Seg['PV2.1']['PV2.1.4']; }
					else delete pv1[index].PV2[indexPV2].priorPendingLocation.facility;
				}
				if (pv2Seg['PV2.1']['PV2.1.5'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.locationStatus = pv2Seg['PV2.1']['PV2.1.5']; }
				if (pv2Seg['PV2.1']['PV2.1.6'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.personLocationType = pv2Seg['PV2.1']['PV2.1.6']; }
				if (pv2Seg['PV2.1']['PV2.1.7'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.building = pv2Seg['PV2.1']['PV2.1.7']; }
				if (pv2Seg['PV2.1']['PV2.1.8'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.floor = pv2Seg['PV2.1']['PV2.1.8']; }
				if (pv2Seg['PV2.1']['PV2.1.9'].toString() != "") { pv1[index].PV2[indexPV2].priorPendingLocation.locationDescription = pv2Seg['PV2.1']['PV2.1.9']; }
				if (Object.keys(pv1[index].PV2[indexPV2].priorPendingLocation).length == 0) {
					delete pv1[index].PV2[indexPV2].priorPendingLocation;
				}

				// PV2.2, accommodationCode
				pv1[index].PV2[indexPV2].accommodationCode = {};
				if (pv2Seg['PV2.2']['PV2.2.1'].toString() != "") { pv1[index].PV2[indexPV2].accommodationCode.id = pv2Seg['PV2.2']['PV2.2.1']; }
				if (pv2Seg['PV2.2']['PV2.2.2'].toString() != "") { pv1[index].PV2[indexPV2].accommodationCode.text = pv2Seg['PV2.2']['PV2.2.2']; }
				if (pv2Seg['PV2.2']['PV2.2.3'].toString() != "") { pv1[index].PV2[indexPV2].accommodationCode.codingSystem = pv2Seg['PV2.2']['PV2.2.3']; }
				if (pv2Seg['PV2.2']['PV2.2.4'].toString() != "") { pv1[index].PV2[indexPV2].accommodationCode.altId = pv2Seg['PV2.2']['PV2.2.4']; }
				if (pv2Seg['PV2.2']['PV2.2.5'].toString() != "") { pv1[index].PV2[indexPV2].accommodationCode.altText = pv2Seg['PV2.2']['PV2.2.5']; }
				if (pv2Seg['PV2.2']['PV2.2.6'].toString() != "") { pv1[index].PV2[indexPV2].accommodationCode.altCodingSystem = pv2Seg['PV2.2']['PV2.2.6']; }
				if (Object.keys(pv1[index].PV2[indexPV2].accommodationCode).length == 0) {
					delete pv1[index].PV2[indexPV2].accommodationCode;
				}

				// PV2.3, admitReason
				pv1[index].PV2[indexPV2].admitReason = {};
				if (pv2Seg['PV2.3']['PV2.3.1'].toString() != "") { pv1[index].PV2[indexPV2].admitReason.id = pv2Seg['PV2.3']['PV2.3.1']; }
				if (pv2Seg['PV2.3']['PV2.3.2'].toString() != "") { pv1[index].PV2[indexPV2].admitReason.text = pv2Seg['PV2.3']['PV2.3.2']; }
				if (pv2Seg['PV2.3']['PV2.3.3'].toString() != "") { pv1[index].PV2[indexPV2].admitReason.codingSystem = pv2Seg['PV2.3']['PV2.3.3']; }
				if (pv2Seg['PV2.3']['PV2.3.4'].toString() != "") { pv1[index].PV2[indexPV2].admitReason.altId = pv2Seg['PV2.3']['PV2.3.4']; }
				if (pv2Seg['PV2.3']['PV2.3.5'].toString() != "") { pv1[index].PV2[indexPV2].admitReason.altText = pv2Seg['PV2.3']['PV2.3.5']; }
				if (pv2Seg['PV2.3']['PV2.3.6'].toString() != "") { pv1[index].PV2[indexPV2].admitReason.altCodingSystem = pv2Seg['PV2.3']['PV2.3.6']; }
				if (Object.keys(pv1[index].PV2[indexPV2].admitReason).length == 0) {
					delete pv1[index].PV2[indexPV2].admitReason;
				}

				// PV2.4, transferReason
				pv1[index].PV2[indexPV2].transferReason = {};
				if (pv2Seg['PV2.4']['PV2.4.1'].toString() != "") { pv1[index].PV2[indexPV2].transferReason.id = pv2Seg['PV2.4']['PV2.4.1']; }
				if (pv2Seg['PV2.4']['PV2.4.2'].toString() != "") { pv1[index].PV2[indexPV2].transferReason.text = pv2Seg['PV2.4']['PV2.4.2']; }
				if (pv2Seg['PV2.4']['PV2.4.3'].toString() != "") { pv1[index].PV2[indexPV2].transferReason.codingSystem = pv2Seg['PV2.4']['PV2.4.3']; }
				if (pv2Seg['PV2.4']['PV2.4.4'].toString() != "") { pv1[index].PV2[indexPV2].transferReason.altId = pv2Seg['PV2.4']['PV2.4.4']; }
				if (pv2Seg['PV2.4']['PV2.4.5'].toString() != "") { pv1[index].PV2[indexPV2].transferReason.altText = pv2Seg['PV2.4']['PV2.4.5']; }
				if (pv2Seg['PV2.4']['PV2.4.6'].toString() != "") { pv1[index].PV2[indexPV2].transferReason.altCodingSystem = pv2Seg['PV2.4']['PV2.4.6']; }
				if (Object.keys(pv1[index].PV2[indexPV2].transferReason).length == 0) {
					delete pv1[index].PV2[indexPV2].transferReason;
				}

				// PV2.5, patientValuables
				pv1[index].PV2[indexPV2].patientValuables = [];
				for each (field in pv2Seg['PV2.5']) {
					if (field['PV2.5.1'].toString() != "") {
						pv1[index].PV2[indexPV2].patientValuables.push(field['PV2.5.1']);
					}
				}
				if (pv1[index].PV2[indexPV2].patientValuables.length == 0) {
					delete pv1[index].PV2[indexPV2].patientValuables;
				}

				// PV2.6, patientValuablesLocation
				if (pv2Seg['PV2.6']['PV2.6.1'].toString() != "") { pv1[index].PV2[indexPV2].patientValuablesLocation = pv2Seg['PV2.6']['PV2.6.1']; }

				// PV2.7, visitUserCode
				if (pv2Seg['PV2.7']['PV2.7.1'].toString() != "") { pv1[index].PV2[indexPV2].visitUserCode = pv2Seg['PV2.7']['PV2.7.1']; }
				
				// PV2.8, expectedAdmitDateTime
				if (pv2Seg['PV2.8']['PV2.8.1'].toString() != "") { pv1[index].PV2[indexPV2].expectedAdmitDateTime = pv2Seg['PV2.8']['PV2.8.1']; }
				
				// PV2.9, expectedDischargeDateTime
				if (pv2Seg['PV2.9']['PV2.9.1'].toString() != "") { pv1[index].PV2[indexPV2].expectedDischargeDateTime = pv2Seg['PV2.9']['PV2.9.1']; }
				
				// PV2.10, estimatedLengthInpatientStay
				if (pv2Seg['PV2.10']['PV2.10.1'].toString() != "") { pv1[index].PV2[indexPV2].estimatedLengthInpatientStay = pv2Seg['PV2.10']['PV2.10.1']; }
				
				// PV2.11, actualLengthInpatientStay
				if (pv2Seg['PV2.11']['PV2.11.1'].toString() != "") { pv1[index].PV2[indexPV2].actualLengthInpatientStay = pv2Seg['PV2.11']['PV2.11.1']; }
				
				// PV2.12, visitDescription
				if (pv2Seg['PV2.12']['PV2.12.1'].toString() != "") { pv1[index].PV2[indexPV2].visitDescription = pv2Seg['PV2.12']['PV2.12.1']; }
				
				// PV2.13, referralSourceCode
				pv1[index].PV2[indexPV2].referralSourceCode = {};
				if (pv2Seg['PV2.13']['PV2.13.1'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.id = pv2Seg['PV2.13']['PV2.13.1']; }
				if (pv2Seg['PV2.13']['PV2.13.2'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.lastName = pv2Seg['PV2.13']['PV2.13.2']; }
				if (pv2Seg['PV2.13']['PV2.13.3'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.firstName = pv2Seg['PV2.13']['PV2.13.3']; }
				if (pv2Seg['PV2.13']['PV2.13.4'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.middleInitOrName = pv2Seg['PV2.13']['PV2.13.4']; }
				if (pv2Seg['PV2.13']['PV2.13.5'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.suffix = pv2Seg['PV2.13']['PV2.13.5']; }
				if (pv2Seg['PV2.13']['PV2.13.6'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.prefix = pv2Seg['PV2.13']['PV2.13.6']; }
				if (pv2Seg['PV2.13']['PV2.13.7'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.degree = pv2Seg['PV2.13']['PV2.13.7']; }
				if (pv2Seg['PV2.13']['PV2.13.8'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.sourceTable = pv2Seg['PV2.13']['PV2.13.8']; }
				pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority = {};
				if (pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.1'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority.id = pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.1']; }
				if (pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.2'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority.universalId = pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.2']; }
				if (pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.3'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority.universalIdType = pv2Seg['PV2.13']['PV2.13.9']['PV2.13.9.3']; }
				if (Object.keys(pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority).length == 0) {
					if (pv2Seg['PV2.13']['PV2.13.9'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority.id = pv2Seg['PV2.13']['PV2.13.9']; }
					else delete pv1[index].PV2[indexPV2].referralSourceCode.assigningAuthority;
				}
				if (pv2Seg['PV2.13']['PV2.13.10'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.nameTypeCode = pv2Seg['PV2.13']['PV2.13.10']; }
				if (pv2Seg['PV2.13']['PV2.13.11'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.identifierCheckDigit = pv2Seg['PV2.13']['PV2.13.11']; }
				if (pv2Seg['PV2.13']['PV2.13.12'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.codeIdentifyingCheckDigitScheme = pv2Seg['PV2.13']['PV2.13.12']; }
				if (pv2Seg['PV2.13']['PV2.13.13'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.identifierTypeCode = pv2Seg['PV2.13']['PV2.13.13']; }
				pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility = {};
				if (pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.1'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility.id = pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.1']; }
				if (pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.2'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility.universalId = pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.2']; }
				if (pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.3'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility.universalIdType = pv2Seg['PV2.13']['PV2.13.14']['PV2.13.14.3']; }
				if (Object.keys(pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility).length == 0) {
					if (pv2Seg['PV2.13']['PV2.13.14'].toString() != "") { pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility.id = pv2Seg['PV2.13']['PV2.13.14']; }
					else delete pv1[index].PV2[indexPV2].referralSourceCode.assigningFacility;
				}
				if (Object.keys(pv1[index].PV2[indexPV2].referralSourceCode).length == 0) {
					delete pv1[index].PV2[indexPV2].referralSourceCode;
				}

				// PV2.14, previousServiceDate
				if (pv2Seg['PV2.14']['PV2.14.1'].toString() != "") { pv1[index].PV2[indexPV2].previousServiceDate = pv2Seg['PV2.14']['PV2.14.1']; }
				
				// PV2.15, employmentIllnessRelatedIndicator
				if (pv2Seg['PV2.15']['PV2.15.1'].toString() != "") { pv1[index].PV2[indexPV2].employmentIllnessRelatedIndicator = pv2Seg['PV2.15']['PV2.15.1']; }
				
				// PV2.16, purgeStatusCode
				if (pv2Seg['PV2.16']['PV2.16.1'].toString() != "") { pv1[index].PV2[indexPV2].purgeStatusCode = pv2Seg['PV2.16']['PV2.16.1']; }
				
				// PV2.17, purgeStatusDate
				if (pv2Seg['PV2.17']['PV2.17.1'].toString() != "") { pv1[index].PV2[indexPV2].purgeStatusDate = pv2Seg['PV2.17']['PV2.17.1']; }
				
				// PV2.18, specialProgramCode
				if (pv2Seg['PV2.18']['PV2.18.1'].toString() != "") { pv1[index].PV2[indexPV2].specialProgramCode = pv2Seg['PV2.18']['PV2.18.1']; }
				
				// PV2.19, retentionIndicator
				if (pv2Seg['PV2.19']['PV2.19.1'].toString() != "") { pv1[index].PV2[indexPV2].retentionIndicator = pv2Seg['PV2.19']['PV2.19.1']; }
				
				// PV2.20, expectedNumInsurancePlans
				if (pv2Seg['PV2.20']['PV2.20.1'].toString() != "") { pv1[index].PV2[indexPV2].expectedNumInsurancePlans = pv2Seg['PV2.20']['PV2.20.1']; }
				
				// PV2.21, visitPublicityCode
				if (pv2Seg['PV2.21']['PV2.21.1'].toString() != "") { pv1[index].PV2[indexPV2].visitPublicityCode = pv2Seg['PV2.21']['PV2.21.1']; }
				
				// PV2.22, visitProtectionIndicator
				if (pv2Seg['PV2.22']['PV2.22.1'].toString() != "") { pv1[index].PV2[indexPV2].visitProtectionIndicator = pv2Seg['PV2.22']['PV2.22.1']; }
				
				// PV2.23, clinicOrganizationName
				pv1[index].PV2[indexPV2].clinicOrganizationName = [];
				for each (field in pv2Seg['PV2.23']) {
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
						pv1[index].PV2[indexPV2].clinicOrganizationName.push(block);
					}
				}
				if (pv1[index].PV2[indexPV2].clinicOrganizationName.length == 0) {
					delete pv1[index].PV2[indexPV2].clinicOrganizationName;
				}

				// PV2.24, patientStatusCode
				if (pv2Seg['PV2.24']['PV2.24.1'].toString() != "") { pv1[index].PV2[indexPV2].patientStatusCode = pv2Seg['PV2.24']['PV2.24.1']; }
				
				// PV2.25, visitPriorityCode
				if (pv2Seg['PV2.25']['PV2.25.1'].toString() != "") { pv1[index].PV2[indexPV2].visitPriorityCode = pv2Seg['PV2.25']['PV2.25.1']; }
				
				// PV2.26, previousTreatmentDate
				if (pv2Seg['PV2.26']['PV2.26.1'].toString() != "") { pv1[index].PV2[indexPV2].previousTreatmentDate = pv2Seg['PV2.26']['PV2.26.1']; }
				
				// PV2.27, expectedDischargeDisposition
				if (pv2Seg['PV2.27']['PV2.27.1'].toString() != "") { pv1[index].PV2[indexPV2].expectedDischargeDisposition = pv2Seg['PV2.27']['PV2.27.1']; }
				
				// PV2.28, signatureOnFileDate
				if (pv2Seg['PV2.28']['PV2.28.1'].toString() != "") { pv1[index].PV2[indexPV2].signatureOnFileDate = pv2Seg['PV2.28']['PV2.28.1']; }
				
				// PV2.29, firstSimilarIllnessDate
				if (pv2Seg['PV2.29']['PV2.29.1'].toString() != "") { pv1[index].PV2[indexPV2].firstSimilarIllnessDate = pv2Seg['PV2.29']['PV2.29.1']; }
				
				// PV2.30, patientChargeAdjustmentCode
				if (pv2Seg['PV2.30']['PV2.30.1'].toString() != "") { pv1[index].PV2[indexPV2].patientChargeAdjustmentCode = pv2Seg['PV2.30']['PV2.30.1']; }
				
				// PV2.31, recurringServiceCode
				if (pv2Seg['PV2.31']['PV2.31.1'].toString() != "") { pv1[index].PV2[indexPV2].recurringServiceCode = pv2Seg['PV2.31']['PV2.31.1']; }
				
				// PV2.32, billingMediaCode
				if (pv2Seg['PV2.32']['PV2.32.1'].toString() != "") { pv1[index].PV2[indexPV2].billingMediaCode = pv2Seg['PV2.32']['PV2.32.1']; }
				
				// PV2.33, expectedSurgeryDateTime
				if (pv2Seg['PV2.33']['PV2.33.1'].toString() != "") { pv1[index].PV2[indexPV2].expectedSurgeryDateTime = pv2Seg['PV2.33']['PV2.33.1']; }
				
				// PV2.34, militaryPartnershipCode
				if (pv2Seg['PV2.34']['PV2.34.1'].toString() != "") { pv1[index].PV2[indexPV2].militaryPartnershipCode = pv2Seg['PV2.34']['PV2.34.1']; }
				
				// PV2.35, militaryNonAvailabilityCode
				if (pv2Seg['PV2.35']['PV2.35.1'].toString() != "") { pv1[index].PV2[indexPV2].militaryNonAvailabilityCode = pv2Seg['PV2.35']['PV2.35.1']; }
				
				// PV2.36, newbornBabyIndicator
				if (pv2Seg['PV2.36']['PV2.36.1'].toString() != "") { pv1[index].PV2[indexPV2].newbornBabyIndicator = pv2Seg['PV2.36']['PV2.36.1']; }
				
				// PV2.37, babyDetainedIndicator
				if (pv2Seg['PV2.37']['PV2.37.1'].toString() != "") { pv1[index].PV2[indexPV2].babyDetainedIndicator = pv2Seg['PV2.37']['PV2.37.1']; }
				
				// clean up PV2 and increment index
				if (Object.keys(pv1[index].PV2[indexPV2]).length == 0) {
					delete pv1[index].PV2[indexPV2];
				} else {
					indexPV2++;
				}
			}
		}

		// clean up PV1 and increment index
		if (Object.keys(pv1[index]).length == 0) {
			delete pv1[index];
		} else {
			index++;
		}
	}
}