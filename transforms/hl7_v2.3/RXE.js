// RXE
var rxe;
if (msg['RXE'].length() > 0) {
	rxe = [];
	var index = 0;
	for each (seg in msg.RXE) {
		rxe[index] = {};

		// RXE.1, timingQuantity
		rxe[index].timingQuantity = {};
		if (seg['RXE.1']['RXE.1.1'].toString() != "") { rxe[index].timingQuantity.quantity = seg['RXE.1']['RXE.1.1']; }
		if (seg['RXE.1']['RXE.1.2'].toString() != "") { rxe[index].timingQuantity.interval = seg['RXE.1']['RXE.1.2']; }
		if (seg['RXE.1']['RXE.1.3'].toString() != "") { rxe[index].timingQuantity.duration = seg['RXE.1']['RXE.1.3']; }
		if (seg['RXE.1']['RXE.1.4'].toString() != "") { rxe[index].timingQuantity.startDateTime = seg['RXE.1']['RXE.1.4']; }
		if (seg['RXE.1']['RXE.1.5'].toString() != "") { rxe[index].timingQuantity.endDateTime = seg['RXE.1']['RXE.1.5']; }
		if (seg['RXE.1']['RXE.1.6'].toString() != "") { rxe[index].timingQuantity.priority = seg['RXE.1']['RXE.1.6']; }
		if (seg['RXE.1']['RXE.1.7'].toString() != "") { rxe[index].timingQuantity.condition = seg['RXE.1']['RXE.1.7']; }
		if (seg['RXE.1']['RXE.1.8'].toString() != "") { rxe[index].timingQuantity.text = seg['RXE.1']['RXE.1.8']; }
		if (seg['RXE.1']['RXE.1.9'].toString() != "") { rxe[index].timingQuantity.conjunction = seg['RXE.1']['RXE.1.9']; }
		if (seg['RXE.1']['RXE.1.10'].toString() != "") { rxe[index].timingQuantity.orderSequencing = seg['RXE.1']['RXE.1.10']; }
		if (Object.keys(rxe[index].timingQuantity).length == 0) {
			delete rxe[index].timingQuantity;
		}

		// RXE.2, giveCode
		rxe[index].giveCode = {};
		if (seg['RXE.2']['RXE.2.1'].toString() != "") { rxe[index].giveCode.id = seg['RXE.2']['RXE.2.1']; }
		if (seg['RXE.2']['RXE.2.2'].toString() != "") { rxe[index].giveCode.text = seg['RXE.2']['RXE.2.2']; }
		if (seg['RXE.2']['RXE.2.3'].toString() != "") { rxe[index].giveCode.codingSystem = seg['RXE.2']['RXE.2.3']; }
		if (seg['RXE.2']['RXE.2.4'].toString() != "") { rxe[index].giveCode.altId = seg['RXE.2']['RXE.2.4']; }
		if (seg['RXE.2']['RXE.2.5'].toString() != "") { rxe[index].giveCode.altText = seg['RXE.2']['RXE.2.5']; }
		if (seg['RXE.2']['RXE.2.6'].toString() != "") { rxe[index].giveCode.altCodingSystem = seg['RXE.2']['RXE.2.6']; }
		if (Object.keys(rxe[index].giveCode).length == 0) {
			delete rxe[index].giveCode;
		}

		// RXE.3, giveAmountMinimum
		if (seg['RXE.3']['RXE.3.1'].toString() != "") { rxe[index].giveAmountMinimum = seg['RXE.3']['RXE.3.1']; }

		// RXE.4, giveAmountMaximum
		if (seg['RXE.4']['RXE.4.1'].toString() != "") { rxe[index].giveAmountMaximum = seg['RXE.4']['RXE.4.1']; }

		// RXE.5, giveUnits
		rxe[index].giveUnits = {};
		if (seg['RXE.5']['RXE.5.1'].toString() != "") { rxe[index].giveUnits.id = seg['RXE.5']['RXE.5.1']; }
		if (seg['RXE.5']['RXE.5.2'].toString() != "") { rxe[index].giveUnits.text = seg['RXE.5']['RXE.5.2']; }
		if (seg['RXE.5']['RXE.5.3'].toString() != "") { rxe[index].giveUnits.codingSystem = seg['RXE.5']['RXE.5.3']; }
		if (seg['RXE.5']['RXE.5.4'].toString() != "") { rxe[index].giveUnits.altId = seg['RXE.5']['RXE.5.4']; }
		if (seg['RXE.5']['RXE.5.5'].toString() != "") { rxe[index].giveUnits.altText = seg['RXE.5']['RXE.5.5']; }
		if (seg['RXE.5']['RXE.5.6'].toString() != "") { rxe[index].giveUnits.altCodingSystem = seg['RXE.5']['RXE.5.6']; }
		if (Object.keys(rxe[index].giveUnits).length == 0) {
			delete rxe[index].giveUnits;
		}

		// RXE.6, giveDosageForm
		rxe[index].giveDosageForm = {};
		if (seg['RXE.2']['RXE.2.1'].toString() != "") { rxe[index].giveDosageForm.id = seg['RXE.2']['RXE.2.1']; }
		if (seg['RXE.2']['RXE.2.2'].toString() != "") { rxe[index].giveDosageForm.text = seg['RXE.2']['RXE.2.2']; }
		if (seg['RXE.2']['RXE.2.3'].toString() != "") { rxe[index].giveDosageForm.codingSystem = seg['RXE.2']['RXE.2.3']; }
		if (seg['RXE.2']['RXE.2.4'].toString() != "") { rxe[index].giveDosageForm.altId = seg['RXE.2']['RXE.2.4']; }
		if (seg['RXE.2']['RXE.2.5'].toString() != "") { rxe[index].giveDosageForm.altText = seg['RXE.2']['RXE.2.5']; }
		if (seg['RXE.2']['RXE.2.6'].toString() != "") { rxe[index].giveDosageForm.altCodingSystem = seg['RXE.2']['RXE.2.6']; }
		if (Object.keys(rxe[index].giveDosageForm).length == 0) {
			delete rxe[index].giveDosageForm;
		}

		// RXE.7, providersAdministrationInstructions
		rxe[index].providersAdministrationInstructions = [];
		for each (field in seg['RXE.7']) {
			var block = {};
			if (field['RXE.7.1'].toString() != "") { block.id = field['RXE.7.1']; }
			if (field['RXE.7.2'].toString() != "") { block.text = field['RXE.7.2']; }
			if (field['RXE.7.3'].toString() != "") { block.codingSystem = field['RXE.7.3']; }
			if (field['RXE.7.4'].toString() != "") { block.altId = field['RXE.7.4']; }
			if (field['RXE.7.5'].toString() != "") { block.altText = field['RXE.7.5']; }
			if (field['RXE.7.6'].toString() != "") { block.altCodingSystem = field['RXE.7.6']; }
			if (Object.keys(block).length > 0) {
				rxe[index].providersAdministrationInstructions.push(block);
			}
		}
		if (rxe[index].providersAdministrationInstructions.length == 0) {
			delete rxe[index].providersAdministrationInstructions;
		}

		// RXE.8, deliverToLocation
		rxe[index].deliverToLocation = {};
		if (seg['RXE.8']['RXE.8.1'].toString() != "") { rxe[index].deliverToLocation.pointOfCare = seg['RXE.8']['RXE.8.1']; }
		if (seg['RXE.8']['RXE.8.2'].toString() != "") { rxe[index].deliverToLocation.room = seg['RXE.8']['RXE.8.2']; }
		if (seg['RXE.8']['RXE.8.3'].toString() != "") { rxe[index].deliverToLocation.bed = seg['RXE.8']['RXE.8.3']; }
		rxe[index].deliverToLocation.facility = {};
		if (seg['RXE.8']['RXE.8.4']['RXE.8.4.1'].toString() != "") { rxe[index].deliverToLocation.facility.nameSpaceId =  seg['RXE.8']['RXE.8.4']['RXE.8.4.1']; }
		if (seg['RXE.8']['RXE.8.4']['RXE.8.4.2'].toString() != "") { rxe[index].deliverToLocation.facility.universalId =  seg['RXE.8']['RXE.8.4']['RXE.8.4.2']; }
		if (seg['RXE.8']['RXE.8.4']['RXE.8.4.3'].toString() != "") { rxe[index].deliverToLocation.facility.universalIdType =  seg['RXE.8']['RXE.8.4']['RXE.8.4.3']; }
		if (Object.keys(rxe[index].deliverToLocation.facility).length == 0) {
			if (seg['RXE.8']['RXE.8.4'].toString() != "") { rxe[index].deliverToLocation.facility.nameSpaceId = seg['RXE.8']['RXE.8.4']; }
			else delete rxe[index].deliverToLocation.facility;
		}
		if (seg['RXE.8']['RXE.8.5'].toString() != "") { rxe[index].deliverToLocation.locationStatus = seg['RXE.8']['RXE.8.5']; }
		if (seg['RXE.8']['RXE.8.6'].toString() != "") { rxe[index].deliverToLocation.personLocationType = seg['RXE.8']['RXE.8.6']; }
		if (seg['RXE.8']['RXE.8.7'].toString() != "") { rxe[index].deliverToLocation.building = seg['RXE.8']['RXE.8.7']; }
		if (seg['RXE.8']['RXE.8.8'].toString() != "") { rxe[index].deliverToLocation.floor = seg['RXE.8']['RXE.8.8']; }
		if (seg['RXE.8']['RXE.8.9'].toString() != "") { rxe[index].deliverToLocation.locationDescription = seg['RXE.8']['RXE.8.9']; }
		if (Object.keys(rxe[index].deliverToLocation).length == 0) {
			delete rxe[index].deliverToLocation;
		}

		// RXE.9, substitutionStatus
		if (seg['RXE.9']['RXE.9.1'].toString() != "") { rxe[index].substitutionStatus = seg['RXE.9']['RXE.9.1']; }

		// RXE.10, dispenseAmount
		if (seg['RXE.10']['RXE.10.1'].toString() != "") { rxe[index].dispenseAmount = seg['RXE.10']['RXE.10.1']; }

		// RXE.11, dispenseUnits
		rxe[index].dispenseUnits = {};
		if (seg['RXE.11']['RXE.11.1'].toString() != "") { rxe[index].dispenseUnits.id = seg['RXE.11']['RXE.11.1']; }
		if (seg['RXE.11']['RXE.11.2'].toString() != "") { rxe[index].dispenseUnits.text = seg['RXE.11']['RXE.11.2']; }
		if (seg['RXE.11']['RXE.11.3'].toString() != "") { rxe[index].dispenseUnits.codingSystem = seg['RXE.11']['RXE.11.3']; }
		if (seg['RXE.11']['RXE.11.4'].toString() != "") { rxe[index].dispenseUnits.altId = seg['RXE.11']['RXE.11.4']; }
		if (seg['RXE.11']['RXE.11.5'].toString() != "") { rxe[index].dispenseUnits.altText = seg['RXE.11']['RXE.11.5']; }
		if (seg['RXE.11']['RXE.11.6'].toString() != "") { rxe[index].dispenseUnits.altCodingSystem = seg['RXE.11']['RXE.11.6']; }
		if (Object.keys(rxe[index].dispenseUnits).length == 0) {
			delete rxe[index].dispenseUnits;
		}

		// RXE.12, numberofRefills
		if (seg['RXE.12']['RXE.12.1'].toString() != "") { rxe[index].numberofRefills = seg['RXE.12']['RXE.12.1']; }

		// RXE.13, orderingProvidersDeaNumber
		rxe[index].orderingProvidersDeaNumber = {};
		if (seg['RXE.13']['RXE.13.1'].toString() != "") { rxe[index].orderingProvidersDeaNumber.id = seg['RXE.13']['RXE.13.1']; }
		if (seg['RXE.13']['RXE.13.2'].toString() != "") { rxe[index].orderingProvidersDeaNumber.lastName = seg['RXE.13']['RXE.13.2']; }
		if (seg['RXE.13']['RXE.13.3'].toString() != "") { rxe[index].orderingProvidersDeaNumber.firstName = seg['RXE.13']['RXE.13.3']; }
		if (seg['RXE.13']['RXE.13.4'].toString() != "") { rxe[index].orderingProvidersDeaNumber.middleInitOrName = seg['RXE.13']['RXE.13.4']; }
		if (seg['RXE.13']['RXE.13.5'].toString() != "") { rxe[index].orderingProvidersDeaNumber.suffix = seg['RXE.13']['RXE.13.5']; }
		if (seg['RXE.13']['RXE.13.6'].toString() != "") { rxe[index].orderingProvidersDeaNumber.prefix = seg['RXE.13']['RXE.13.6']; }
		if (seg['RXE.13']['RXE.13.7'].toString() != "") { rxe[index].orderingProvidersDeaNumber.degree = seg['RXE.13']['RXE.13.7']; }
		if (seg['RXE.13']['RXE.13.8'].toString() != "") { rxe[index].orderingProvidersDeaNumber.sourceTable = seg['RXE.13']['RXE.13.8']; }
		rxe[index].orderingProvidersDeaNumber.assigningAuthority = {};
		if (seg['RXE.13']['RXE.13.9']['RXE.13.9.1'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningAuthority.id = seg['RXE.13']['RXE.13.9']['RXE.13.9.1']; }
		if (seg['RXE.13']['RXE.13.9']['RXE.13.9.2'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningAuthority.universalId = seg['RXE.13']['RXE.13.9']['RXE.13.9.2']; }
		if (seg['RXE.13']['RXE.13.9']['RXE.13.9.3'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningAuthority.universalIdType = seg['RXE.13']['RXE.13.9']['RXE.13.9.3']; }
		if (Object.keys(rxe[index].orderingProvidersDeaNumber.assigningAuthority).length == 0) {
			if (seg['RXE.13']['RXE.13.9'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningAuthority.id = seg['RXE.13']['RXE.13.9']; }
			else delete rxe[index].orderingProvidersDeaNumber.assigningAuthority;
		}
		if (seg['RXE.13']['RXE.13.10'].toString() != "") { rxe[index].orderingProvidersDeaNumber.nameTypeCode = seg['RXE.13']['RXE.13.10']; }
		if (seg['RXE.13']['RXE.13.11'].toString() != "") { rxe[index].orderingProvidersDeaNumber.identifierCheckDigit = seg['RXE.13']['RXE.13.11']; }
		if (seg['RXE.13']['RXE.13.12'].toString() != "") { rxe[index].orderingProvidersDeaNumber.codeIdentifyingCheckDigitScheme = seg['RXE.13']['RXE.13.12']; }
		if (seg['RXE.13']['RXE.13.13'].toString() != "") { rxe[index].orderingProvidersDeaNumber.identifierTypeCode = seg['RXE.13']['RXE.13.13']; }
		rxe[index].orderingProvidersDeaNumber.assigningFacility = {};
		if (seg['RXE.13']['RXE.13.14']['RXE.13.14.1'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningFacility.id = seg['RXE.13']['RXE.13.14']['RXE.13.14.1']; }
		if (seg['RXE.13']['RXE.13.14']['RXE.13.14.2'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningFacility.universalId = seg['RXE.13']['RXE.13.14']['RXE.13.14.2']; }
		if (seg['RXE.13']['RXE.13.14']['RXE.13.14.3'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningFacility.universalIdType = seg['RXE.13']['RXE.13.14']['RXE.13.14.3']; }
		if (Object.keys(rxe[index].orderingProvidersDeaNumber.assigningFacility).length == 0) {
			if (seg['RXE.13']['RXE.13.14'].toString() != "") { rxe[index].orderingProvidersDeaNumber.assigningFacility.id = seg['RXE.13']['RXE.13.14']; }
			else delete rxe[index].orderingProvidersDeaNumber.assigningFacility;
		}
		if (Object.keys(rxe[index].orderingProvidersDeaNumber).length == 0) {
			delete rxe[index].orderingProvidersDeaNumber;
		}

		// RXE.14, pharmacistTreatmentSuppliersVerifierID
		rxe[index].pharmacistTreatmentSuppliersVerifierID = {};
		if (seg['RXE.14']['RXE.14.1'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.id = seg['RXE.14']['RXE.14.1']; }
		if (seg['RXE.14']['RXE.14.2'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.lastName = seg['RXE.14']['RXE.14.2']; }
		if (seg['RXE.14']['RXE.14.3'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.firstName = seg['RXE.14']['RXE.14.3']; }
		if (seg['RXE.14']['RXE.14.4'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.middleInitOrName = seg['RXE.14']['RXE.14.4']; }
		if (seg['RXE.14']['RXE.14.5'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.suffix = seg['RXE.14']['RXE.14.5']; }
		if (seg['RXE.14']['RXE.14.6'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.prefix = seg['RXE.14']['RXE.14.6']; }
		if (seg['RXE.14']['RXE.14.7'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.degree = seg['RXE.14']['RXE.14.7']; }
		if (seg['RXE.14']['RXE.14.8'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.sourceTable = seg['RXE.14']['RXE.14.8']; }
		rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority = {};
		if (seg['RXE.14']['RXE.14.9']['RXE.14.9.1'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority.id = seg['RXE.14']['RXE.14.9']['RXE.14.9.1']; }
		if (seg['RXE.14']['RXE.14.9']['RXE.14.9.2'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority.universalId = seg['RXE.14']['RXE.14.9']['RXE.14.9.2']; }
		if (seg['RXE.14']['RXE.14.9']['RXE.14.9.3'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority.universalIdType = seg['RXE.14']['RXE.14.9']['RXE.14.9.3']; }
		if (Object.keys(rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority).length == 0) {
			if (seg['RXE.14']['RXE.14.9'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority.id = seg['RXE.14']['RXE.14.9']; }
			else delete rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningAuthority;
		}
		if (seg['RXE.14']['RXE.14.10'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.nameTypeCode = seg['RXE.14']['RXE.14.10']; }
		if (seg['RXE.14']['RXE.14.11'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.identifierCheckDigit = seg['RXE.14']['RXE.14.11']; }
		if (seg['RXE.14']['RXE.14.12'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.codeIdentifyingCheckDigitScheme = seg['RXE.14']['RXE.14.12']; }
		if (seg['RXE.14']['RXE.14.13'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.identifierTypeCode = seg['RXE.14']['RXE.14.13']; }
		rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility = {};
		if (seg['RXE.14']['RXE.14.14']['RXE.14.14.1'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility.id = seg['RXE.14']['RXE.14.14']['RXE.14.14.1']; }
		if (seg['RXE.14']['RXE.14.14']['RXE.14.14.2'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility.universalId = seg['RXE.14']['RXE.14.14']['RXE.14.14.2']; }
		if (seg['RXE.14']['RXE.14.14']['RXE.14.14.3'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility.universalIdType = seg['RXE.14']['RXE.14.14']['RXE.14.14.3']; }
		if (Object.keys(rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility).length == 0) {
			if (seg['RXE.14']['RXE.14.14'].toString() != "") { rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility.id = seg['RXE.14']['RXE.14.14']; }
			else delete rxe[index].pharmacistTreatmentSuppliersVerifierID.assigningFacility;
		}
		if (Object.keys(rxe[index].pharmacistTreatmentSuppliersVerifierID).length == 0) {
			delete rxe[index].pharmacistTreatmentSuppliersVerifierID;
		}
		// RXE.15, prescriptionNumber
		if (seg['RXE.15']['RXE.15.1'].toString() != "") { rxe[index].prescriptionNumber = seg['RXE.15']['RXE.15.1']; }

		// RXE.16, numberOfRefillsRemaining
		if (seg['RXE.16']['RXE.16.1'].toString() != "") { rxe[index].numberOfRefillsRemaining = seg['RXE.16']['RXE.16.1']; }

		// RXE.17, numberOfRefillsDosesDispensed
		if (seg['RXE.17']['RXE.17.1'].toString() != "") { rxe[index].numberOfRefillsDosesDispensed = seg['RXE.17']['RXE.17.1']; }

		// RXE.18, dtOfMostRecentRefillOrDoseDispensed
		if (seg['RXE.18']['RXE.18.1'].toString() != "") { rxe[index].dtOfMostRecentRefillOrDoseDispensed = seg['RXE.18']['RXE.18.1']; }

		// RXE.19, totalDailyDose
		rxe[index].totalDailyDose = {};
		if (seg['RXE.19']['RXE.19.1'].toString() != "") { rxe[index].totalDailyDose.quantity = seg['RXE.19']['RXE.19.1']; }
		if (seg['RXE.19']['RXE.19.2'].toString() != "") { rxe[index].totalDailyDose.units = seg['RXE.19']['RXE.19.2']; }
		if (Object.keys(rxe[index].totalDailyDose).length == 0) {
			delete rxe[index].totalDailyDose;
		}
		// RXE.20, needsHumanReview
		if (seg['RXE.20']['RXE.20.1'].toString() != "") { rxe[index].needsHumanReview = seg['RXE.20']['RXE.20.1']; }

		// RXE.21, pharmacyTreatmentSuppliersSpecialDispensingInstructions
		rxe[index].pharmacyTreatmentSuppliersSpecialDispensingInstructions = [];
		for each (field in seg['RXE.21']) {
			var block = {};
			if (field['RXE.21.1'].toString() != "") { block.id = field['RXE.21.1']; }
			if (field['RXE.21.2'].toString() != "") { block.text = field['RXE.21.2']; }
			if (field['RXE.21.3'].toString() != "") { block.codingSystem = field['RXE.21.3']; }
			if (field['RXE.21.4'].toString() != "") { block.altId = field['RXE.21.4']; }
			if (field['RXE.21.5'].toString() != "") { block.altText = field['RXE.21.5']; }
			if (field['RXE.21.6'].toString() != "") { block.altCodingSystem = field['RXE.21.6']; }
			if (Object.keys(block).length > 0) {
				rxe[index].pharmacyTreatmentSuppliersSpecialDispensingInstructions.push(block);
			}
		}
		if (rxe[index].pharmacyTreatmentSuppliersSpecialDispensingInstructions.length == 0) {
			delete rxe[index].pharmacyTreatmentSuppliersSpecialDispensingInstructions;
		}

		// RXE.22, givePerTimeUnit
		if (seg['RXE.22']['RXE.22.1'].toString() != "") { rxe[index].givePerTimeUnit = seg['RXE.22']['RXE.22.1']; }

		// RXE.23, giveRateAmount
		if (seg['RXE.23']['RXE.23.1'].toString() != "") { rxe[index].giveRateAmount = seg['RXE.23']['RXE.23.1']; }

		// RXE.24, giveRateUnits
		rxe[index].giveRateUnits = {};
		if (seg['RXE.24']['RXE.24.1'].toString() != "") { rxe[index].giveRateUnits.id = seg['RXE.24']['RXE.24.1']; }
		if (seg['RXE.24']['RXE.24.2'].toString() != "") { rxe[index].giveRateUnits.text = seg['RXE.24']['RXE.24.2']; }
		if (seg['RXE.24']['RXE.24.3'].toString() != "") { rxe[index].giveRateUnits.codingSystem = seg['RXE.24']['RXE.24.3']; }
		if (seg['RXE.24']['RXE.24.4'].toString() != "") { rxe[index].giveRateUnits.altId = seg['RXE.24']['RXE.24.4']; }
		if (seg['RXE.24']['RXE.24.5'].toString() != "") { rxe[index].giveRateUnits.altText = seg['RXE.24']['RXE.24.5']; }
		if (seg['RXE.24']['RXE.24.6'].toString() != "") { rxe[index].giveRateUnits.altCodingSystem = seg['RXE.24']['RXE.24.6']; }
		if (Object.keys(rxe[index].giveRateUnits).length == 0) {
			delete rxe[index].giveRateUnits;
		}

		// RXE.25, giveStrength
		if (seg['RXE.25']['RXE.25.1'].toString() != "") { rxe[index].giveStrength = seg['RXE.25']['RXE.25.1']; }

		// RXE.26, giveStrengthUnits
		rxe[index].giveStrengthUnits = {};
		if (seg['RXE.26']['RXE.26.1'].toString() != "") { rxe[index].giveStrengthUnits.id = seg['RXE.26']['RXE.26.1']; }
		if (seg['RXE.26']['RXE.26.2'].toString() != "") { rxe[index].giveStrengthUnits.text = seg['RXE.26']['RXE.26.2']; }
		if (seg['RXE.26']['RXE.26.3'].toString() != "") { rxe[index].giveStrengthUnits.codingSystem = seg['RXE.26']['RXE.26.3']; }
		if (seg['RXE.26']['RXE.26.4'].toString() != "") { rxe[index].giveStrengthUnits.altId = seg['RXE.26']['RXE.26.4']; }
		if (seg['RXE.26']['RXE.26.5'].toString() != "") { rxe[index].giveStrengthUnits.altText = seg['RXE.26']['RXE.26.5']; }
		if (seg['RXE.26']['RXE.26.6'].toString() != "") { rxe[index].giveStrengthUnits.altCodingSystem = seg['RXE.26']['RXE.26.6']; }
		if (Object.keys(rxe[index].giveStrengthUnits).length == 0) {
			delete rxe[index].giveStrengthUnits;
		}

		// RXE.27, giveIndication
		rxe[index].giveIndication = [];
		for each (field in seg['RXE.27']) {
			var block = {};
			if (field['RXE.27.1'].toString() != "") { block.id = field['RXE.27.1']; }
			if (field['RXE.27.2'].toString() != "") { block.text = field['RXE.27.2']; }
			if (field['RXE.27.3'].toString() != "") { block.codingSystem = field['RXE.27.3']; }
			if (field['RXE.27.4'].toString() != "") { block.altId = field['RXE.27.4']; }
			if (field['RXE.27.5'].toString() != "") { block.altText = field['RXE.27.5']; }
			if (field['RXE.27.6'].toString() != "") { block.altCodingSystem = field['RXE.27.6']; }
			if (Object.keys(block).length > 0) {
				rxe[index].giveIndication.push(block);
			}
		}
		if (rxe[index].giveIndication.length == 0) {
			delete rxe[index].giveIndication;
		}

		// RXE.28, dispensePackageSize
		if (seg['RXE.28']['RXE.28.1'].toString() != "") { rxe[index].dispensePackageSize = seg['RXE.28']['RXE.28.1']; }

		// RXE.29, dispensePackageSizeUnit
		rxe[index].dispensePackageSizeUnit = {};
		if (seg['RXE.29']['RXE.29.1'].toString() != "") { rxe[index].dispensePackageSizeUnit.id = seg['RXE.29']['RXE.29.1']; }
		if (seg['RXE.29']['RXE.29.2'].toString() != "") { rxe[index].dispensePackageSizeUnit.text = seg['RXE.29']['RXE.29.2']; }
		if (seg['RXE.29']['RXE.29.3'].toString() != "") { rxe[index].dispensePackageSizeUnit.codingSystem = seg['RXE.29']['RXE.29.3']; }
		if (seg['RXE.29']['RXE.29.4'].toString() != "") { rxe[index].dispensePackageSizeUnit.altId = seg['RXE.29']['RXE.29.4']; }
		if (seg['RXE.29']['RXE.29.5'].toString() != "") { rxe[index].dispensePackageSizeUnit.altText = seg['RXE.29']['RXE.29.5']; }
		if (seg['RXE.29']['RXE.29.6'].toString() != "") { rxe[index].dispensePackageSizeUnit.altCodingSystem = seg['RXE.29']['RXE.29.6']; }
		if (Object.keys(rxe[index].dispensePackageSizeUnit).length == 0) {
			delete rxe[index].dispensePackageSizeUnit;
		}

		// RXE.30, dispensePackageMethod
		if (seg['RXE.30']['RXE.30.1'].toString() != "") { rxe[index].dispensePackageMethod = seg['RXE.30']['RXE.30.1']; }

		// RXR (RXE)
		var rxrGroup = getSegmentsAfter(msg,seg,'RXR',false, ['RXE', 'RXA']);
		if (rxrGroup.length > 0) {

			rxrSeg = rxrGroup[0];
			
			rxe[index].rxr = {};

			// RXR.1, route
			rxe[index].rxr.route = {};
			if (rxrSeg['RXR.1']['RXR.1.1'].toString() != "") { rxe[index].rxr.route.id = rxrSeg['RXR.1']['RXR.1.1']; }
			if (rxrSeg['RXR.1']['RXR.1.2'].toString() != "") { rxe[index].rxr.route.text = rxrSeg['RXR.1']['RXR.1.2']; }
			if (rxrSeg['RXR.1']['RXR.1.3'].toString() != "") { rxe[index].rxr.route.codingSystem = rxrSeg['RXR.1']['RXR.1.3']; }
			if (rxrSeg['RXR.1']['RXR.1.4'].toString() != "") { rxe[index].rxr.route.altId = rxrSeg['RXR.1']['RXR.1.4']; }
			if (rxrSeg['RXR.1']['RXR.1.5'].toString() != "") { rxe[index].rxr.route.altText = rxrSeg['RXR.1']['RXR.1.5']; }
			if (rxrSeg['RXR.1']['RXR.1.6'].toString() != "") { rxe[index].rxr.route.altCodingSystem = rxrSeg['RXR.1']['RXR.1.6']; }
			if (Object.keys(rxe[index].rxr.route).length == 0) {
				delete rxe[index].rxr.route;
			}

			// RXR.2, site
			rxe[index].rxr.site = {};
			if (rxrSeg['RXR.2']['RXR.2.1'].toString() != "") { rxe[index].rxr.site.id = rxrSeg['RXR.2']['RXR.2.1']; }
			if (rxrSeg['RXR.2']['RXR.2.2'].toString() != "") { rxe[index].rxr.site.text = rxrSeg['RXR.2']['RXR.2.2']; }
			if (rxrSeg['RXR.2']['RXR.2.3'].toString() != "") { rxe[index].rxr.site.codingSystem = rxrSeg['RXR.2']['RXR.2.3']; }
			if (rxrSeg['RXR.2']['RXR.2.4'].toString() != "") { rxe[index].rxr.site.altId = rxrSeg['RXR.2']['RXR.2.4']; }
			if (rxrSeg['RXR.2']['RXR.2.5'].toString() != "") { rxe[index].rxr.site.altText = rxrSeg['RXR.2']['RXR.2.5']; }
			if (rxrSeg['RXR.2']['RXR.2.6'].toString() != "") { rxe[index].rxr.site.altCodingSystem = rxrSeg['RXR.2']['RXR.2.6']; }
			if (Object.keys(rxe[index].rxr.site).length == 0) {
				delete rxe[index].rxr.site;
			}

			// RXR.3, administrationDevice
			rxe[index].rxr.administrationDevice = {};
			if (rxrSeg['RXR.3']['RXR.3.1'].toString() != "") { rxe[index].rxr.administrationDevice.id = rxrSeg['RXR.3']['RXR.3.1']; }
			if (rxrSeg['RXR.3']['RXR.3.2'].toString() != "") { rxe[index].rxr.administrationDevice.text = rxrSeg['RXR.3']['RXR.3.2']; }
			if (rxrSeg['RXR.3']['RXR.3.3'].toString() != "") { rxe[index].rxr.administrationDevice.codingSystem = rxrSeg['RXR.3']['RXR.3.3']; }
			if (rxrSeg['RXR.3']['RXR.3.4'].toString() != "") { rxe[index].rxr.administrationDevice.altId = rxrSeg['RXR.3']['RXR.3.4']; }
			if (rxrSeg['RXR.3']['RXR.3.5'].toString() != "") { rxe[index].rxr.administrationDevice.altText = rxrSeg['RXR.3']['RXR.3.5']; }
			if (rxrSeg['RXR.3']['RXR.3.6'].toString() != "") { rxe[index].rxr.administrationDevice.altCodingSystem = rxrSeg['RXR.3']['RXR.3.6']; }
			if (Object.keys(rxe[index].rxr.administrationDevice).length == 0) {
				delete rxe[index].rxr.administrationDevice;
			}

			// RXR.4, administrationMethod
			rxe[index].rxr.administrationMethod = {};
			if (rxrSeg['RXR.4']['RXR.4.1'].toString() != "") { rxe[index].rxr.administrationMethod.id = rxrSeg['RXR.4']['RXR.4.1']; }
			if (rxrSeg['RXR.4']['RXR.4.2'].toString() != "") { rxe[index].rxr.administrationMethod.text = rxrSeg['RXR.4']['RXR.4.2']; }
			if (rxrSeg['RXR.4']['RXR.4.3'].toString() != "") { rxe[index].rxr.administrationMethod.codingSystem = rxrSeg['RXR.4']['RXR.4.3']; }
			if (rxrSeg['RXR.4']['RXR.4.4'].toString() != "") { rxe[index].rxr.administrationMethod.altId = rxrSeg['RXR.4']['RXR.4.4']; }
			if (rxrSeg['RXR.4']['RXR.4.5'].toString() != "") { rxe[index].rxr.administrationMethod.altText = rxrSeg['RXR.4']['RXR.4.5']; }
			if (rxrSeg['RXR.4']['RXR.4.6'].toString() != "") { rxe[index].rxr.administrationMethod.altCodingSystem = rxrSeg['RXR.4']['RXR.4.6']; }
			if (Object.keys(rxe[index].rxr.administrationMethod).length == 0) {
				delete rxe[index].rxr.administrationMethod;
			}

			// clean up RXR
			if (Object.keys(rxe[index].rxr).length == 0) {
				delete rxe[index].rxr;
			}
		}

		// RXC (RXE)
		var rxcGroup = getSegmentsAfter(msg,seg,'RXC',true);
		if (rxcGroup.length > 0) {
			rxe[index].RXC = [];
			var indexRXC = 0;
			for each (rxcSeg in rxcGroup) {
				rxe[index].RXC[indexRXC] = {};

				// RXC.1, rXComponentType
				if (rxcSeg['RXC.1']['RXC.1.1'].toString() != "") { rxe[index].RXC[indexRXC].rXComponentType = rxcSeg['RXC.1']['RXC.1.1']; }

				// RXC.2, componentCode
				rxe[index].RXC[indexRXC].componentCode = {};
				if (rxcSeg['RXC.2']['RXC.2.1'].toString() != "") { rxe[index].RXC[indexRXC].componentCode.id = rxcSeg['RXC.2']['RXC.2.1']; }
				if (rxcSeg['RXC.2']['RXC.2.2'].toString() != "") { rxe[index].RXC[indexRXC].componentCode.text = rxcSeg['RXC.2']['RXC.2.2']; }
				if (rxcSeg['RXC.2']['RXC.2.3'].toString() != "") { rxe[index].RXC[indexRXC].componentCode.codingSystem = rxcSeg['RXC.2']['RXC.2.3']; }
				if (rxcSeg['RXC.2']['RXC.2.4'].toString() != "") { rxe[index].RXC[indexRXC].componentCode.altId = rxcSeg['RXC.2']['RXC.2.4']; }
				if (rxcSeg['RXC.2']['RXC.2.5'].toString() != "") { rxe[index].RXC[indexRXC].componentCode.altText = rxcSeg['RXC.2']['RXC.2.5']; }
				if (rxcSeg['RXC.2']['RXC.2.6'].toString() != "") { rxe[index].RXC[indexRXC].componentCode.altCodingSystem = rxcSeg['RXC.2']['RXC.2.6']; }
				if (Object.keys(rxe[index].RXC[indexRXC].componentCode).length == 0) {
					delete rxe[index].RXC[indexRXC].componentCode;
				}

				// RXC.3, componentAmount
				if (rxcSeg['RXC.3']['RXC.3.1'].toString() != "") { rxe[index].RXC[indexRXC].componentAmount = rxcSeg['RXC.3']['RXC.3.1']; }

				// RXC.4, componentUnits
				rxe[index].RXC[indexRXC].componentUnits = {};
				if (rxcSeg['RXC.4']['RXC.4.1'].toString() != "") { rxe[index].RXC[indexRXC].componentUnits.id = rxcSeg['RXC.4']['RXC.4.1']; }
				if (rxcSeg['RXC.4']['RXC.4.2'].toString() != "") { rxe[index].RXC[indexRXC].componentUnits.text = rxcSeg['RXC.4']['RXC.4.2']; }
				if (rxcSeg['RXC.4']['RXC.4.3'].toString() != "") { rxe[index].RXC[indexRXC].componentUnits.codingSystem = rxcSeg['RXC.4']['RXC.4.3']; }
				if (rxcSeg['RXC.4']['RXC.4.4'].toString() != "") { rxe[index].RXC[indexRXC].componentUnits.altId = rxcSeg['RXC.4']['RXC.4.4']; }
				if (rxcSeg['RXC.4']['RXC.4.5'].toString() != "") { rxe[index].RXC[indexRXC].componentUnits.altText = rxcSeg['RXC.4']['RXC.4.5']; }
				if (rxcSeg['RXC.4']['RXC.4.6'].toString() != "") { rxe[index].RXC[indexRXC].componentUnits.altCodingSystem = rxcSeg['RXC.4']['RXC.4.6']; }
				if (Object.keys(rxe[index].RXC[indexRXC].componentUnits).length == 0) {
					delete rxe[index].RXC[indexRXC].componentUnits;
				}

				// RXC.5, componentStrength
				if (rxcSeg['RXC.5']['RXC.5.1'].toString() != "") { rxe[index].RXC[indexRXC].componentStrength = rxcSeg['RXC.5']['RXC.5.1']; }

				// RXC.6, componentStrengthUnits
				rxe[index].RXC[indexRXC].componentStrengthUnits = {};
				if (rxcSeg['RXC.6']['RXC.6.1'].toString() != "") { rxe[index].RXC[indexRXC].componentStrengthUnits.id = rxcSeg['RXC.6']['RXC.6.1']; }
				if (rxcSeg['RXC.6']['RXC.6.2'].toString() != "") { rxe[index].RXC[indexRXC].componentStrengthUnits.text = rxcSeg['RXC.6']['RXC.6.2']; }
				if (rxcSeg['RXC.6']['RXC.6.3'].toString() != "") { rxe[index].RXC[indexRXC].componentStrengthUnits.codingSystem = rxcSeg['RXC.6']['RXC.6.3']; }
				if (rxcSeg['RXC.6']['RXC.6.4'].toString() != "") { rxe[index].RXC[indexRXC].componentStrengthUnits.altId = rxcSeg['RXC.6']['RXC.6.4']; }
				if (rxcSeg['RXC.6']['RXC.6.5'].toString() != "") { rxe[index].RXC[indexRXC].componentStrengthUnits.altText = rxcSeg['RXC.6']['RXC.6.5']; }
				if (rxcSeg['RXC.6']['RXC.6.6'].toString() != "") { rxe[index].RXC[indexRXC].componentStrengthUnits.altCodingSystem = rxcSeg['RXC.6']['RXC.6.6']; }
				if (Object.keys(rxe[index].RXC[indexRXC].componentStrengthUnits).length == 0) {
					delete rxe[index].RXC[indexRXC].componentStrengthUnits;
				}

				// clean up RXC and increment index
				if (Object.keys(rxe[index].RXC[indexRXC]).length == 0) {
					delete rxe[index].RXC[indexRXC];
				} else {
					indexRXC++;
				}
			}
		}

		// clean up RXE and increment index
		if (Object.keys(rxe[index]).length == 0) {
			delete rxe[index];
		} else {
			index++;
		}
	}
}