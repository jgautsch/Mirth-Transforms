// RXA
var rxa;
if (msg['RXA'].length() > 0) {
	rxa = [];
	var index = 0;
	for each (seg in msg.RXA) {
		rxa[index] = {};

		// RXA.1, giveSubIDCounter
		if (seg['RXA.1']['RXA.1.1'].toString() != "") { rxa[index].giveSubIDCounter = seg['RXA.1']['RXA.1.1']; }

		// RXA.2, administrationSubIDCounter
		if (seg['RXA.2']['RXA.2.1'].toString() != "") { rxa[index].administrationSubIDCounter = seg['RXA.2']['RXA.2.1']; }

		// RXA.3, dateTimeStartofAdministration
		if (seg['RXA.3']['RXA.3.1'].toString() != "") { rxa[index].dateTimeStartofAdministration = seg['RXA.3']['RXA.3.1']; }

		// RXA.4, dateTimeEndofAdministration
		if (seg['RXA.4']['RXA.4.1'].toString() != "") { rxa[index].dateTimeEndofAdministration = seg['RXA.4']['RXA.4.1']; }

		// RXA.5, administeredCode
		rxa[index].administeredCode = {};
		if (seg['RXA.5']['RXA.5.1'].toString() != "") { rxa[index].administeredCode.id = seg['RXA.5']['RXA.5.1']; }
		if (seg['RXA.5']['RXA.5.2'].toString() != "") { rxa[index].administeredCode.text = seg['RXA.5']['RXA.5.2']; }
		if (seg['RXA.5']['RXA.5.3'].toString() != "") { rxa[index].administeredCode.codingSystem = seg['RXA.5']['RXA.5.3']; }
		if (seg['RXA.5']['RXA.5.4'].toString() != "") { rxa[index].administeredCode.altId = seg['RXA.5']['RXA.5.4']; }
		if (seg['RXA.5']['RXA.5.5'].toString() != "") { rxa[index].administeredCode.altText = seg['RXA.5']['RXA.5.5']; }
		if (seg['RXA.5']['RXA.5.6'].toString() != "") { rxa[index].administeredCode.altCodingSystem = seg['RXA.5']['RXA.5.6']; }
		if (Object.keys(rxa[index].administeredCode).length == 0) {
			delete rxa[index].administeredCode;
		}

		// RXA.6, administeredAmount
		if (seg['RXA.6']['RXA.6.1'].toString() != "") { rxa[index].administeredAmount = seg['RXA.6']['RXA.6.1']; }

		// RXA.7, administeredUnits
		rxa[index].administeredUnits = {};
		if (seg['RXA.7']['RXA.7.1'].toString() != "") { rxa[index].administeredUnits.id = seg['RXA.7']['RXA.7.1']; }
		if (seg['RXA.7']['RXA.7.2'].toString() != "") { rxa[index].administeredUnits.text = seg['RXA.7']['RXA.7.2']; }
		if (seg['RXA.7']['RXA.7.3'].toString() != "") { rxa[index].administeredUnits.codingSystem = seg['RXA.7']['RXA.7.3']; }
		if (seg['RXA.7']['RXA.7.4'].toString() != "") { rxa[index].administeredUnits.altId = seg['RXA.7']['RXA.7.4']; }
		if (seg['RXA.7']['RXA.7.5'].toString() != "") { rxa[index].administeredUnits.altText = seg['RXA.7']['RXA.7.5']; }
		if (seg['RXA.7']['RXA.7.6'].toString() != "") { rxa[index].administeredUnits.altCodingSystem = seg['RXA.7']['RXA.7.6']; }
		if (Object.keys(rxa[index].administeredUnits).length == 0) {
			delete rxa[index].administeredUnits;
		}
		
		// RXA.8, administeredDosageForm
		rxa[index].administeredDosageForm = {};
		if (seg['RXA.8']['RXA.8.1'].toString() != "") { rxa[index].administeredDosageForm.id = seg['RXA.8']['RXA.8.1']; }
		if (seg['RXA.8']['RXA.8.2'].toString() != "") { rxa[index].administeredDosageForm.text = seg['RXA.8']['RXA.8.2']; }
		if (seg['RXA.8']['RXA.8.3'].toString() != "") { rxa[index].administeredDosageForm.codingSystem = seg['RXA.8']['RXA.8.3']; }
		if (seg['RXA.8']['RXA.8.4'].toString() != "") { rxa[index].administeredDosageForm.altId = seg['RXA.8']['RXA.8.4']; }
		if (seg['RXA.8']['RXA.8.5'].toString() != "") { rxa[index].administeredDosageForm.altText = seg['RXA.8']['RXA.8.5']; }
		if (seg['RXA.8']['RXA.8.6'].toString() != "") { rxa[index].administeredDosageForm.altCodingSystem = seg['RXA.8']['RXA.8.6']; }
		if (Object.keys(rxa[index].administeredDosageForm).length == 0) {
			delete rxa[index].administeredDosageForm;
		}
		
		// RXA.9, administrationNotes
		rxa[index].administrationNotes = [];
		for each (field in seg['RXA.9']) {
			var block = {};
			if (field['RXA.9.1'].toString() != "") { block.id = field['RXA.9.1']; }
			if (field['RXA.9.2'].toString() != "") { block.text = field['RXA.9.2']; }
			if (field['RXA.9.3'].toString() != "") { block.codingSystem = field['RXA.9.3']; }
			if (field['RXA.9.4'].toString() != "") { block.altId = field['RXA.9.4']; }
			if (field['RXA.9.5'].toString() != "") { block.altText = field['RXA.9.5']; }
			if (field['RXA.9.6'].toString() != "") { block.altCodingSystem = field['RXA.9.6']; }
			if (Object.keys(block).length > 0) {
				rxa[index].administrationNotes.push(block);
			}
		}
		if (rxa[index].administrationNotes.length == 0) {
			delete rxa[index].administrationNotes;
		}

		// RXA.10, administeringProvider
		rxa[index].administeringProvider = {};
		if (seg['RXA.10']['RXA.10.1'].toString() != "") { rxa[index].administeringProvider.id = seg['RXA.10']['RXA.10.1']; }
		if (seg['RXA.10']['RXA.10.2'].toString() != "") { rxa[index].administeringProvider.lastName = seg['RXA.10']['RXA.10.2']; }
		if (seg['RXA.10']['RXA.10.3'].toString() != "") { rxa[index].administeringProvider.firstName = seg['RXA.10']['RXA.10.3']; }
		if (seg['RXA.10']['RXA.10.4'].toString() != "") { rxa[index].administeringProvider.middleInitOrName = seg['RXA.10']['RXA.10.4']; }
		if (seg['RXA.10']['RXA.10.5'].toString() != "") { rxa[index].administeringProvider.suffix = seg['RXA.10']['RXA.10.5']; }
		if (seg['RXA.10']['RXA.10.6'].toString() != "") { rxa[index].administeringProvider.prefix = seg['RXA.10']['RXA.10.6']; }
		if (seg['RXA.10']['RXA.10.7'].toString() != "") { rxa[index].administeringProvider.degree = seg['RXA.10']['RXA.10.7']; }
		if (seg['RXA.10']['RXA.10.8'].toString() != "") { rxa[index].administeringProvider.sourceTable = seg['RXA.10']['RXA.10.8']; }
		rxa[index].administeringProvider.assigningAuthority = {};
		if (seg['RXA.10']['RXA.10.9']['RXA.10.9.1'].toString() != "") { rxa[index].administeringProvider.assigningAuthority.id = seg['RXA.10']['RXA.10.9']['RXA.10.9.1']; }
		if (seg['RXA.10']['RXA.10.9']['RXA.10.9.2'].toString() != "") { rxa[index].administeringProvider.assigningAuthority.universalId = seg['RXA.10']['RXA.10.9']['RXA.10.9.2']; }
		if (seg['RXA.10']['RXA.10.9']['RXA.10.9.3'].toString() != "") { rxa[index].administeringProvider.assigningAuthority.universalIdType = seg['RXA.10']['RXA.10.9']['RXA.10.9.3']; }
		if (Object.keys(rxa[index].administeringProvider.assigningAuthority).length == 0) {
			if (seg['RXA.10']['RXA.10.9'].toString() != "") { rxa[index].administeringProvider.assigningAuthority.id = seg['RXA.10']['RXA.10.9']; }
			else delete rxa[index].administeringProvider.assigningAuthority;
		}
		if (seg['RXA.10']['RXA.10.10'].toString() != "") { rxa[index].administeringProvider.nameTypeCode = seg['RXA.10']['RXA.10.10']; }
		if (seg['RXA.10']['RXA.10.11'].toString() != "") { rxa[index].administeringProvider.identifierCheckDigit = seg['RXA.10']['RXA.10.11']; }
		if (seg['RXA.10']['RXA.10.12'].toString() != "") { rxa[index].administeringProvider.codeIdentifyingCheckDigitScheme = seg['RXA.10']['RXA.10.12']; }
		if (seg['RXA.10']['RXA.10.13'].toString() != "") { rxa[index].administeringProvider.identifierTypeCode = seg['RXA.10']['RXA.10.13']; }
		rxa[index].administeringProvider.assigningFacility = {};
		if (seg['RXA.10']['RXA.10.14']['RXA.10.14.1'].toString() != "") { rxa[index].administeringProvider.assigningFacility.id = seg['RXA.10']['RXA.10.14']['RXA.10.14.1']; }
		if (seg['RXA.10']['RXA.10.14']['RXA.10.14.2'].toString() != "") { rxa[index].administeringProvider.assigningFacility.universalId = seg['RXA.10']['RXA.10.14']['RXA.10.14.2']; }
		if (seg['RXA.10']['RXA.10.14']['RXA.10.14.3'].toString() != "") { rxa[index].administeringProvider.assigningFacility.universalIdType = seg['RXA.10']['RXA.10.14']['RXA.10.14.3']; }
		if (Object.keys(rxa[index].administeringProvider.assigningFacility).length == 0) {
			if (seg['RXA.10']['RXA.10.14'].toString() != "") { rxa[index].administeringProvider.assigningFacility.id = seg['RXA.10']['RXA.10.14']; }
			else delete rxa[index].administeringProvider.assigningFacility;
		}
		if (Object.keys(rxa[index].administeringProvider).length == 0) {
			delete rxa[index].administeringProvider;
		}

		// RXA.11, administeredAtLocation
		rxa[index].administeredAtLocation = {};
		if (seg['RXA.11']['RXA.11.1'].toString() != "") { rxa[index].administeredAtLocation.pointOfCare = seg['RXA.11']['RXA.11.1']; }
		if (seg['RXA.11']['RXA.11.2'].toString() != "") { rxa[index].administeredAtLocation.room = seg['RXA.11']['RXA.11.2']; }
		if (seg['RXA.11']['RXA.11.3'].toString() != "") { rxa[index].administeredAtLocation.bed = seg['RXA.11']['RXA.11.3']; }
		rxa[index].administeredAtLocation.facility = {};
		if (seg['RXA.11']['RXA.11.4']['RXA.11.4.1'].toString() != "") { rxa[index].administeredAtLocation.facility.nameSpaceId =  seg['RXA.11']['RXA.11.4']['RXA.11.4.1']; }
		if (seg['RXA.11']['RXA.11.4']['RXA.11.4.2'].toString() != "") { rxa[index].administeredAtLocation.facility.universalId =  seg['RXA.11']['RXA.11.4']['RXA.11.4.2']; }
		if (seg['RXA.11']['RXA.11.4']['RXA.11.4.3'].toString() != "") { rxa[index].administeredAtLocation.facility.universalIdType =  seg['RXA.11']['RXA.11.4']['RXA.11.4.3']; }
		if (Object.keys(rxa[index].administeredAtLocation.facility).length == 0) {
			if (seg['RXA.11']['RXA.11.4'].toString() != "") { rxa[index].administeredAtLocation.facility.nameSpaceId = seg['RXA.11']['RXA.11.4']; }
			else delete rxa[index].administeredAtLocation.facility;
		}
		if (seg['RXA.11']['RXA.11.5'].toString() != "") { rxa[index].administeredAtLocation.locationStatus = seg['RXA.11']['RXA.11.5']; }
		if (seg['RXA.11']['RXA.11.6'].toString() != "") { rxa[index].administeredAtLocation.personLocationType = seg['RXA.11']['RXA.11.6']; }
		if (seg['RXA.11']['RXA.11.7'].toString() != "") { rxa[index].administeredAtLocation.building = seg['RXA.11']['RXA.11.7']; }
		if (seg['RXA.11']['RXA.11.8'].toString() != "") { rxa[index].administeredAtLocation.floor = seg['RXA.11']['RXA.11.8']; }
		if (seg['RXA.11']['RXA.11.9'].toString() != "") { rxa[index].administeredAtLocation.locationDescription = seg['RXA.11']['RXA.11.9']; }
		if (Object.keys(rxa[index].administeredAtLocation).length == 0) {
			delete rxa[index].administeredAtLocation;
		}

		// RXA.12, administeredPerTimeUnit
		if (seg['RXA.12']['RXA.12.1'].toString() != "") { rxa[index].administeredPerTimeUnit = seg['RXA.12']['RXA.12.1']; }

		// RXA.13, administeredStrength
		if (seg['RXA.13']['RXA.13.1'].toString() != "") { rxa[index].administeredStrength = seg['RXA.13']['RXA.13.1']; }

		// RXA.14, administeredStrengthUnits
		rxa[index].administeredStrengthUnits = {};
		if (seg['RXA.14']['RXA.14.1'].toString() != "") { rxa[index].administeredStrengthUnits.id = seg['RXA.14']['RXA.14.1']; }
		if (seg['RXA.14']['RXA.14.2'].toString() != "") { rxa[index].administeredStrengthUnits.text = seg['RXA.14']['RXA.14.2']; }
		if (seg['RXA.14']['RXA.14.3'].toString() != "") { rxa[index].administeredStrengthUnits.codingSystem = seg['RXA.14']['RXA.14.3']; }
		if (seg['RXA.14']['RXA.14.4'].toString() != "") { rxa[index].administeredStrengthUnits.altId = seg['RXA.14']['RXA.14.4']; }
		if (seg['RXA.14']['RXA.14.5'].toString() != "") { rxa[index].administeredStrengthUnits.altText = seg['RXA.14']['RXA.14.5']; }
		if (seg['RXA.14']['RXA.14.6'].toString() != "") { rxa[index].administeredStrengthUnits.altCodingSystem = seg['RXA.14']['RXA.14.6']; }
		if (Object.keys(rxa[index].administeredStrengthUnits).length == 0) {
			delete rxa[index].administeredStrengthUnits;
		}
		
		// RXA.15, substanceLotNumber
		rxa[index].substanceLotNumber = [];
		for each (field in seg['RXA.15']) {
			if (field['RXA.15.1'].toString() != "") {
				rxa[index].substanceLotNumber.push(field['RXA.15.1']);
			}
		}
		if (Object.keys(rxa[index].substanceLotNumber).length == 0) {
			delete rxa[index].substanceLotNumber;
		}

		// RXA.16, substanceExpirationDate
		rxa[index].substanceExpirationDate = [];
		for each (field in seg['RXA.16']) {
			if (field['RXA.16.1'].toString() != "") {
				rxa[index].substanceExpirationDate.push(field['RXA.16.1']);
			}
		}
		if (rxa[index].substanceExpirationDate.length == 0) {
			delete rxa[index].substanceExpirationDate;
		}
		
		// RXA.17, substanceManufacturerName
		rxa[index].substanceManufacturerName = [];
		for each (field in seg['RXA.17']) {
			var block = {};
			if (field['RXA.17.1'].toString() != "") { block.id = field['RXA.17.1']; }
			if (field['RXA.17.2'].toString() != "") { block.text = field['RXA.17.2']; }
			if (field['RXA.17.3'].toString() != "") { block.codingSystem = field['RXA.17.3']; }
			if (field['RXA.17.4'].toString() != "") { block.altId = field['RXA.17.4']; }
			if (field['RXA.17.5'].toString() != "") { block.altText = field['RXA.17.5']; }
			if (field['RXA.17.6'].toString() != "") { block.altCodingSystem = field['RXA.17.6']; }
			if (Object.keys(block).length > 0) {
				rxa[index].substanceManufacturerName.push(block);
			}
		}
		if (rxa[index].substanceManufacturerName.length == 0) {
			delete rxa[index].substanceManufacturerName;
		}
		
		// RXA.18, substanceRefusalReason
		rxa[index].substanceRefusalReason = [];
		for each (field in seg['RXA.18']) {
			var block = {};
			if (field['RXA.18.1'].toString() != "") { block.id = field['RXA.18.1']; }
			if (field['RXA.18.2'].toString() != "") { block.text = field['RXA.18.2']; }
			if (field['RXA.18.3'].toString() != "") { block.codingSystem = field['RXA.18.3']; }
			if (field['RXA.18.4'].toString() != "") { block.altId = field['RXA.18.4']; }
			if (field['RXA.18.5'].toString() != "") { block.altText = field['RXA.18.5']; }
			if (field['RXA.18.6'].toString() != "") { block.altCodingSystem = field['RXA.18.6']; }
			if (Object.keys(block).length > 0) {
				rxa[index].substanceRefusalReason.push(block);
			}
		}
		if (rxa[index].substanceRefusalReason.length == 0) {
			delete rxa[index].substanceRefusalReason;
		}
		
		// RXA.19, indication
		rxa[index].indication = [];
		for each (field in seg['RXA.19']) {
			var block = {};
			if (field['RXA.19.1'].toString() != "") { block.id = field['RXA.19.1']; }
			if (field['RXA.19.2'].toString() != "") { block.text = field['RXA.19.2']; }
			if (field['RXA.19.3'].toString() != "") { block.codingSystem = field['RXA.19.3']; }
			if (field['RXA.19.4'].toString() != "") { block.altId = field['RXA.19.4']; }
			if (field['RXA.19.5'].toString() != "") { block.altText = field['RXA.19.5']; }
			if (field['RXA.19.6'].toString() != "") { block.altCodingSystem = field['RXA.19.6']; }
			if (Object.keys(block).length > 0) {
				rxa[index].indication.push(block);
			}
		}
		if (rxa[index].indication.length == 0) {
			delete rxa[index].indication;
		}
		
		// RXA.20, completionStatus
		if (seg['RXA.20']['RXA.20.1'].toString() != "") { rxa[index].completionStatus = seg['RXA.20']['RXA.20.1']; }

		// RXA.21, actionCode
		if (seg['RXA.21']['RXA.21.1'].toString() != "") { rxa[index].actionCode = seg['RXA.21']['RXA.21.1']; }

		// RXA.22, systemEntryDateTime
		if (seg['RXA.22']['RXA.22.1'].toString() != "") { rxa[index].systemEntryDateTime = seg['RXA.22']['RXA.22.1']; }

		// clean up RXA and increment indexRXA
		if (Object.keys(rxa[index]).length == 0) {
			delete rxa[index];
		} else {
			index++;
		}
	}
}
