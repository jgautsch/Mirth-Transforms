// RXO
var rxo;
if (msg['RXO'].length() > 0) {
	rxo = [];
	var index = 0;
	for each (seg in msg.RXO) {
		rxo[index] = {};
		
		// RXO.1, requestedGiveCode
		rxo[index].requestedGiveCode = {};
		if (seg['RXO.1']['RXO.1.1'].toString() != "") { rxo[index].requestedGiveCode.id = seg['RXO.1']['RXO.1.1']; }
		if (seg['RXO.1']['RXO.1.2'].toString() != "") { rxo[index].requestedGiveCode.text = seg['RXO.1']['RXO.1.2']; }
		if (seg['RXO.1']['RXO.1.3'].toString() != "") { rxo[index].requestedGiveCode.codingSystem = seg['RXO.1']['RXO.1.3']; }
		if (seg['RXO.1']['RXO.1.4'].toString() != "") { rxo[index].requestedGiveCode.altId = seg['RXO.1']['RXO.1.4']; }
		if (seg['RXO.1']['RXO.1.5'].toString() != "") { rxo[index].requestedGiveCode.altText = seg['RXO.1']['RXO.1.5']; }
		if (seg['RXO.1']['RXO.1.6'].toString() != "") { rxo[index].requestedGiveCode.altCodingSystem = seg['RXO.1']['RXO.1.6']; }
		if (Object.keys(rxo[index].requestedGiveCode).length == 0) {
			delete rxo[index].requestedGiveCode;
		}

		// RXO.2, requestedGiveAmountMinimum
		if (seg['RXO.2']['RXO.2.1'].toString() != "") { rxo[index].requestedGiveAmountMinimum = seg['RXO.2']['RXO.2.1']; }

		// RXO.3, requestedGiveAmountMaximum
		if (seg['RXO.3']['RXO.3.1'].toString() != "") { rxo[index].requestedGiveAmountMaximum = seg['RXO.3']['RXO.3.1']; }

		// RXO.4, requestedGiveUnits
		rxo[index].requestedGiveUnits = {};
		if (seg['RXO.4']['RXO.4.1'].toString() != "") { rxo[index].requestedGiveUnits.id = seg['RXO.4']['RXO.4.1']; }
		if (seg['RXO.4']['RXO.4.2'].toString() != "") { rxo[index].requestedGiveUnits.text = seg['RXO.4']['RXO.4.2']; }
		if (seg['RXO.4']['RXO.4.3'].toString() != "") { rxo[index].requestedGiveUnits.codingSystem = seg['RXO.4']['RXO.4.3']; }
		if (seg['RXO.4']['RXO.4.4'].toString() != "") { rxo[index].requestedGiveUnits.altId = seg['RXO.4']['RXO.4.4']; }
		if (seg['RXO.4']['RXO.4.5'].toString() != "") { rxo[index].requestedGiveUnits.altText = seg['RXO.4']['RXO.4.5']; }
		if (seg['RXO.4']['RXO.4.6'].toString() != "") { rxo[index].requestedGiveUnits.altCodingSystem = seg['RXO.4']['RXO.4.6']; }
		if (Object.keys(rxo[index].requestedGiveUnits).length == 0) {
			delete rxo[index].requestedGiveUnits;
		}

		// RXO.5, requestedDosageForm
		rxo[index].requestedDosageForm = {};
		if (seg['RXO.5']['RXO.5.1'].toString() != "") { rxo[index].requestedDosageForm.id = seg['RXO.5']['RXO.5.1']; }
		if (seg['RXO.5']['RXO.5.2'].toString() != "") { rxo[index].requestedDosageForm.text = seg['RXO.5']['RXO.5.2']; }
		if (seg['RXO.5']['RXO.5.3'].toString() != "") { rxo[index].requestedDosageForm.codingSystem = seg['RXO.5']['RXO.5.3']; }
		if (seg['RXO.5']['RXO.5.4'].toString() != "") { rxo[index].requestedDosageForm.altId = seg['RXO.5']['RXO.5.4']; }
		if (seg['RXO.5']['RXO.5.5'].toString() != "") { rxo[index].requestedDosageForm.altText = seg['RXO.5']['RXO.5.5']; }
		if (seg['RXO.5']['RXO.5.6'].toString() != "") { rxo[index].requestedDosageForm.altCodingSystem = seg['RXO.5']['RXO.5.6']; }
		if (Object.keys(rxo[index].requestedDosageForm).length == 0) {
			delete rxo[index].requestedDosageForm;
		}

		// RXO.6, providersPharmacyTreatmentInstructions
		rxo[index].providersPharmacyTreatmentInstructions = [];
		for each (field in seg['RXO.6']) {
			var block = {};
			if (field['RXO.6.1'].toString() != "") { block.id = field['RXO.6.1']; }
			if (field['RXO.6.2'].toString() != "") { block.text = field['RXO.6.2']; }
			if (field['RXO.6.3'].toString() != "") { block.codingSystem = field['RXO.6.3']; }
			if (field['RXO.6.4'].toString() != "") { block.altId = field['RXO.6.4']; }
			if (field['RXO.6.5'].toString() != "") { block.altText = field['RXO.6.5']; }
			if (field['RXO.6.6'].toString() != "") { block.altCodingSystem = field['RXO.6.6']; }
			if (Object.keys(block).length > 0) {
				rxo[index].providersPharmacyTreatmentInstructions.push(block);
			}
		}
		if (rxo[index].providersPharmacyTreatmentInstructions.length == 0) {
			delete rxo[index].providersPharmacyTreatmentInstructions;
		}

		// RXO.7, providersAdministrationInstructions
		rxo[index].providersAdministrationInstructions = [];
		for each (field in seg['RXO.7']) {
			var block = {};
			if (field['RXO.7.1'].toString() != "") { block.id = field['RXO.7.1']; }
			if (field['RXO.7.2'].toString() != "") { block.text = field['RXO.7.2']; }
			if (field['RXO.7.3'].toString() != "") { block.codingSystem = field['RXO.7.3']; }
			if (field['RXO.7.4'].toString() != "") { block.altId = field['RXO.7.4']; }
			if (field['RXO.7.5'].toString() != "") { block.altText = field['RXO.7.5']; }
			if (field['RXO.7.6'].toString() != "") { block.altCodingSystem = field['RXO.7.6']; }
			if (Object.keys(block).length > 0) {
				rxo[index].providersAdministrationInstructions.push(block);
			}
		}
		if (rxo[index].providersAdministrationInstructions.length == 0) {
			delete rxo[index].providersAdministrationInstructions;
		}

		// RXO.8, deliverToLocation
		if (seg['RXO.8']['RXO.8.1'].toString() != "") { rxo[index].deliverToLocation = seg['RXO.8']['RXO.8.1']; }
		
		// RXO.9, allowSubstitutions
		if (seg['RXO.9']['RXO.9.1'].toString() != "") { rxo[index].allowSubstitutions = seg['RXO.9']['RXO.9.1']; }
		
		// RXO.10, requestedDispenseCode
		rxo[index].requestedDispenseCode = {};
		if (seg['RXO.10']['RXO.10.1'].toString() != "") { rxo[index].requestedDispenseCode.id = seg['RXO.10']['RXO.10.1']; }
		if (seg['RXO.10']['RXO.10.2'].toString() != "") { rxo[index].requestedDispenseCode.text = seg['RXO.10']['RXO.10.2']; }
		if (seg['RXO.10']['RXO.10.3'].toString() != "") { rxo[index].requestedDispenseCode.codingSystem = seg['RXO.10']['RXO.10.3']; }
		if (seg['RXO.10']['RXO.10.4'].toString() != "") { rxo[index].requestedDispenseCode.altId = seg['RXO.10']['RXO.10.4']; }
		if (seg['RXO.10']['RXO.10.5'].toString() != "") { rxo[index].requestedDispenseCode.altText = seg['RXO.10']['RXO.10.5']; }
		if (seg['RXO.10']['RXO.10.6'].toString() != "") { rxo[index].requestedDispenseCode.altCodingSystem = seg['RXO.10']['RXO.10.6']; }
		if (Object.keys(rxo[index].requestedDispenseCode).length == 0) {
			delete rxo[index].requestedDispenseCode;
		}

		// RXO.11, requestedDispenseAmount
		if (seg['RXO.11']['RXO.11.1'].toString() != "") { rxo[index].requestedDispenseAmount = seg['RXO.11']['RXO.11.1']; }
		
		// RXO.12, requestedDispenseUnits
		rxo[index].requestedDispenseUnits = {};
		if (seg['RXO.12']['RXO.12.1'].toString() != "") { rxo[index].requestedDispenseUnits.id = seg['RXO.12']['RXO.12.1']; }
		if (seg['RXO.12']['RXO.12.2'].toString() != "") { rxo[index].requestedDispenseUnits.text = seg['RXO.12']['RXO.12.2']; }
		if (seg['RXO.12']['RXO.12.3'].toString() != "") { rxo[index].requestedDispenseUnits.codingSystem = seg['RXO.12']['RXO.12.3']; }
		if (seg['RXO.12']['RXO.12.4'].toString() != "") { rxo[index].requestedDispenseUnits.altId = seg['RXO.12']['RXO.12.4']; }
		if (seg['RXO.12']['RXO.12.5'].toString() != "") { rxo[index].requestedDispenseUnits.altText = seg['RXO.12']['RXO.12.5']; }
		if (seg['RXO.12']['RXO.12.6'].toString() != "") { rxo[index].requestedDispenseUnits.altCodingSystem = seg['RXO.12']['RXO.12.6']; }
		if (Object.keys(rxo[index].requestedDispenseUnits).length == 0) {
			delete rxo[index].requestedDispenseUnits;
		}

		// RXO.13, numberOfRefills
		if (seg['RXO.13']['RXO.13.1'].toString() != "") { rxo[index].numberOfRefills = seg['RXO.13']['RXO.13.1']; }
		
		// RXO.14, orderingProvidersDeaNumber
		rxo[index].orderingProvidersDeaNumber = {};
		if (seg['RXO.14']['RXO.14.1'].toString() != "") { rxo[index].orderingProvidersDeaNumber.id = seg['RXO.14']['RXO.14.1']; }
		if (seg['RXO.14']['RXO.14.2'].toString() != "") { rxo[index].orderingProvidersDeaNumber.lastName = seg['RXO.14']['RXO.14.2']; }
		if (seg['RXO.14']['RXO.14.3'].toString() != "") { rxo[index].orderingProvidersDeaNumber.firstName = seg['RXO.14']['RXO.14.3']; }
		if (seg['RXO.14']['RXO.14.4'].toString() != "") { rxo[index].orderingProvidersDeaNumber.middleInitOrName = seg['RXO.14']['RXO.14.4']; }
		if (seg['RXO.14']['RXO.14.5'].toString() != "") { rxo[index].orderingProvidersDeaNumber.suffix = seg['RXO.14']['RXO.14.5']; }
		if (seg['RXO.14']['RXO.14.6'].toString() != "") { rxo[index].orderingProvidersDeaNumber.prefix = seg['RXO.14']['RXO.14.6']; }
		if (seg['RXO.14']['RXO.14.7'].toString() != "") { rxo[index].orderingProvidersDeaNumber.degree = seg['RXO.14']['RXO.14.7']; }
		if (seg['RXO.14']['RXO.14.8'].toString() != "") { rxo[index].orderingProvidersDeaNumber.sourceTable = seg['RXO.14']['RXO.14.8']; }
		rxo[index].orderingProvidersDeaNumber.assigningAuthority = {};
		if (seg['RXO.14']['RXO.14.9']['RXO.14.9.1'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningAuthority.id = seg['RXO.14']['RXO.14.9']['RXO.14.9.1']; }
		if (seg['RXO.14']['RXO.14.9']['RXO.14.9.2'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningAuthority.universalId = seg['RXO.14']['RXO.14.9']['RXO.14.9.2']; }
		if (seg['RXO.14']['RXO.14.9']['RXO.14.9.3'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningAuthority.universalIdType = seg['RXO.14']['RXO.14.9']['RXO.14.9.3']; }
		if (Object.keys(rxo[index].orderingProvidersDeaNumber.assigningAuthority).length == 0) {
			if (seg['RXO.14']['RXO.14.9'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningAuthority.id = seg['RXO.14']['RXO.14.9']; }
			else delete rxo[index].orderingProvidersDeaNumber.assigningAuthority;
		}
		if (seg['RXO.14']['RXO.14.10'].toString() != "") { rxo[index].orderingProvidersDeaNumber.nameTypeCode = seg['RXO.14']['RXO.14.10']; }
		if (seg['RXO.14']['RXO.14.11'].toString() != "") { rxo[index].orderingProvidersDeaNumber.identifierCheckDigit = seg['RXO.14']['RXO.14.11']; }
		if (seg['RXO.14']['RXO.14.12'].toString() != "") { rxo[index].orderingProvidersDeaNumber.codeIdentifyingCheckDigitScheme = seg['RXO.14']['RXO.14.12']; }
		if (seg['RXO.14']['RXO.14.13'].toString() != "") { rxo[index].orderingProvidersDeaNumber.identifierTypeCode = seg['RXO.14']['RXO.14.13']; }
		rxo[index].orderingProvidersDeaNumber.assigningFacility = {};
		if (seg['RXO.14']['RXO.14.14']['RXO.14.14.1'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningFacility.id = seg['RXO.14']['RXO.14.14']['RXO.14.14.1']; }
		if (seg['RXO.14']['RXO.14.14']['RXO.14.14.2'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningFacility.universalId = seg['RXO.14']['RXO.14.14']['RXO.14.14.2']; }
		if (seg['RXO.14']['RXO.14.14']['RXO.14.14.3'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningFacility.universalIdType = seg['RXO.14']['RXO.14.14']['RXO.14.14.3']; }
		if (Object.keys(rxo[index].orderingProvidersDeaNumber.assigningFacility).length == 0) {
			if (seg['RXO.14']['RXO.14.14'].toString() != "") { rxo[index].orderingProvidersDeaNumber.assigningFacility.id = seg['RXO.14']['RXO.14.14']; }
			else delete rxo[index].orderingProvidersDeaNumber.assigningFacility;
		}
		if (Object.keys(rxo[index].orderingProvidersDeaNumber).length == 0) {
			delete rxo[index].orderingProvidersDeaNumber;
		}

		// RXO.15, pharmacistTreatmentSuppliersVerifierId
		rxo[index].pharmacistTreatmentSuppliersVerifierId = {};
		if (seg['RXO.15']['RXO.15.1'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.id = seg['RXO.15']['RXO.15.1']; }
		if (seg['RXO.15']['RXO.15.2'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.lastName = seg['RXO.15']['RXO.15.2']; }
		if (seg['RXO.15']['RXO.15.3'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.firstName = seg['RXO.15']['RXO.15.3']; }
		if (seg['RXO.15']['RXO.15.4'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.middleInitOrName = seg['RXO.15']['RXO.15.4']; }
		if (seg['RXO.15']['RXO.15.5'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.suffix = seg['RXO.15']['RXO.15.5']; }
		if (seg['RXO.15']['RXO.15.6'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.prefix = seg['RXO.15']['RXO.15.6']; }
		if (seg['RXO.15']['RXO.15.7'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.degree = seg['RXO.15']['RXO.15.7']; }
		if (seg['RXO.15']['RXO.15.8'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.sourceTable = seg['RXO.15']['RXO.15.8']; }
		rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority = {};
		if (seg['RXO.15']['RXO.15.9']['RXO.15.9.1'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority.id = seg['RXO.15']['RXO.15.9']['RXO.15.9.1']; }
		if (seg['RXO.15']['RXO.15.9']['RXO.15.9.2'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority.universalId = seg['RXO.15']['RXO.15.9']['RXO.15.9.2']; }
		if (seg['RXO.15']['RXO.15.9']['RXO.15.9.3'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority.universalIdType = seg['RXO.15']['RXO.15.9']['RXO.15.9.3']; }
		if (Object.keys(rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority).length == 0) {
			if (seg['RXO.15']['RXO.15.9'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority.id = seg['RXO.15']['RXO.15.9']; }
			else delete rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningAuthority;
		}
		if (seg['RXO.15']['RXO.15.10'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.nameTypeCode = seg['RXO.15']['RXO.15.10']; }
		if (seg['RXO.15']['RXO.15.11'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.identifierCheckDigit = seg['RXO.15']['RXO.15.11']; }
		if (seg['RXO.15']['RXO.15.12'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.codeIdentifyingCheckDigitScheme = seg['RXO.15']['RXO.15.12']; }
		if (seg['RXO.15']['RXO.15.13'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.identifierTypeCode = seg['RXO.15']['RXO.15.13']; }
		rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility = {};
		if (seg['RXO.15']['RXO.15.14']['RXO.15.14.1'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility.id = seg['RXO.15']['RXO.15.14']['RXO.15.14.1']; }
		if (seg['RXO.15']['RXO.15.14']['RXO.15.14.2'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility.universalId = seg['RXO.15']['RXO.15.14']['RXO.15.14.2']; }
		if (seg['RXO.15']['RXO.15.14']['RXO.15.14.3'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility.universalIdType = seg['RXO.15']['RXO.15.14']['RXO.15.14.3']; }
		if (Object.keys(rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility).length == 0) {
			if (seg['RXO.15']['RXO.15.14'].toString() != "") { rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility.id = seg['RXO.15']['RXO.15.14']; }
			else delete rxo[index].pharmacistTreatmentSuppliersVerifierId.assigningFacility;
		}
		if (Object.keys(rxo[index].pharmacistTreatmentSuppliersVerifierId).length == 0) {
			delete rxo[index].pharmacistTreatmentSuppliersVerifierId;
		}

		// RXO.16, needsHumanReview
		if (seg['RXO.16']['RXO.16.1'].toString() != "") { rxo[index].needsHumanReview = seg['RXO.16']['RXO.16.1']; }
		
		// RXO.17, requestedGivePerTimeUnit
		if (seg['RXO.17']['RXO.17.1'].toString() != "") { rxo[index].requestedGivePerTimeUnit = seg['RXO.17']['RXO.17.1']; }
		
		// RXO.18, requestedGiveStrength
		if (seg['RXO.18']['RXO.18.1'].toString() != "") { rxo[index].requestedGiveStrength = seg['RXO.18']['RXO.18.1']; }
		
		// RXO.19, requestedGiveStrengthUnits
		rxo[index].requestedGiveStrengthUnits = {};
		if (seg['RXO.19']['RXO.19.1'].toString() != "") { rxo[index].requestedGiveStrengthUnits.id = seg['RXO.19']['RXO.19.1']; }
		if (seg['RXO.19']['RXO.19.2'].toString() != "") { rxo[index].requestedGiveStrengthUnits.text = seg['RXO.19']['RXO.19.2']; }
		if (seg['RXO.19']['RXO.19.3'].toString() != "") { rxo[index].requestedGiveStrengthUnits.codingSystem = seg['RXO.19']['RXO.19.3']; }
		if (seg['RXO.19']['RXO.19.4'].toString() != "") { rxo[index].requestedGiveStrengthUnits.altId = seg['RXO.19']['RXO.19.4']; }
		if (seg['RXO.19']['RXO.19.5'].toString() != "") { rxo[index].requestedGiveStrengthUnits.altText = seg['RXO.19']['RXO.19.5']; }
		if (seg['RXO.19']['RXO.19.6'].toString() != "") { rxo[index].requestedGiveStrengthUnits.altCodingSystem = seg['RXO.19']['RXO.19.6']; }
		if (Object.keys(rxo[index].requestedGiveStrengthUnits).length == 0) {
			delete rxo[index].requestedGiveStrengthUnits;
		}

		// RXO.20, indication
		rxo[index].administrationNotes = [];
		for each (field in seg['RXO.19']) {
			var block = {};
			if (field['RXO.19.1'].toString() != "") { block.id = field['RXO.19.1']; }
			if (field['RXO.19.2'].toString() != "") { block.text = field['RXO.19.2']; }
			if (field['RXO.19.3'].toString() != "") { block.codingSystem = field['RXO.19.3']; }
			if (field['RXO.19.4'].toString() != "") { block.altId = field['RXO.19.4']; }
			if (field['RXO.19.5'].toString() != "") { block.altText = field['RXO.19.5']; }
			if (field['RXO.19.6'].toString() != "") { block.altCodingSystem = field['RXO.19.6']; }
			if (Object.keys(block).length > 0) {
				rxo[index].administrationNotes.push(block);
			}
		}
		if (rxo[index].administrationNotes.length == 0) {
			delete rxo[index].administrationNotes;
		}

		// RXO.21, requestedGiveRateAmount
		if (seg['RXO.21']['RXO.21.1'].toString() != "") { rxo[index].requestedGiveRateAmount = seg['RXO.21']['RXO.21.1']; }
		
		// RXO.22, requestedGiveRateUnits
		rxo[index].requestedGiveRateUnits = {};
		if (seg['RXO.22']['RXO.22.1'].toString() != "") { rxo[index].requestedGiveRateUnits.id = seg['RXO.22']['RXO.22.1']; }
		if (seg['RXO.22']['RXO.22.2'].toString() != "") { rxo[index].requestedGiveRateUnits.text = seg['RXO.22']['RXO.22.2']; }
		if (seg['RXO.22']['RXO.22.3'].toString() != "") { rxo[index].requestedGiveRateUnits.codingSystem = seg['RXO.22']['RXO.22.3']; }
		if (seg['RXO.22']['RXO.22.4'].toString() != "") { rxo[index].requestedGiveRateUnits.altId = seg['RXO.22']['RXO.22.4']; }
		if (seg['RXO.22']['RXO.22.5'].toString() != "") { rxo[index].requestedGiveRateUnits.altText = seg['RXO.22']['RXO.22.5']; }
		if (seg['RXO.22']['RXO.22.6'].toString() != "") { rxo[index].requestedGiveRateUnits.altCodingSystem = seg['RXO.22']['RXO.22.6']; }
		if (Object.keys(rxo[index].requestedGiveRateUnits).length == 0) {
			delete rxo[index].requestedGiveRateUnits;
		}

		// NTE (RXO)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			rxo[index].NTE = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				rxo[index].NTE[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { rxo[index].NTE[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { rxo[index].NTE[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				rxo[index].NTE[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						rxo[index].NTE[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				if (rxo[index].NTE[indexNTE].comment.length == 0) {
					delete rxo[index].NTE[indexNTE].comment;
				}

				// clean up NTE and increment index
				if (Object.keys(rxo[index].NTE[indexNTE]).length == 0) {
					delete rxo[index].NTE[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// RXR (RXO)
		var rxrGroup = getSegmentsAfter(msg,seg,'RXR',false, ['RXO', 'RXE', 'RXA']);
		if (rxrGroup.length > 0) {

			rxo[index].RXR = [];
			var indexRXR = 0;
			for each (rxrSeg in rxrGroup) {
				rxo[index].RXR[indexRXR] = {};
	
				// RXR.1, route
				rxo[index].RXR[indexRXR].route = {};
				if (rxrSeg['RXR.1']['RXR.1.1'].toString() != "") { rxo[index].RXR[indexRXR].route.id = rxrSeg['RXR.1']['RXR.1.1']; }
				if (rxrSeg['RXR.1']['RXR.1.2'].toString() != "") { rxo[index].RXR[indexRXR].route.text = rxrSeg['RXR.1']['RXR.1.2']; }
				if (rxrSeg['RXR.1']['RXR.1.3'].toString() != "") { rxo[index].RXR[indexRXR].route.codingSystem = rxrSeg['RXR.1']['RXR.1.3']; }
				if (rxrSeg['RXR.1']['RXR.1.4'].toString() != "") { rxo[index].RXR[indexRXR].route.altId = rxrSeg['RXR.1']['RXR.1.4']; }
				if (rxrSeg['RXR.1']['RXR.1.5'].toString() != "") { rxo[index].RXR[indexRXR].route.altText = rxrSeg['RXR.1']['RXR.1.5']; }
				if (rxrSeg['RXR.1']['RXR.1.6'].toString() != "") { rxo[index].RXR[indexRXR].route.altCodingSystem = rxrSeg['RXR.1']['RXR.1.6']; }
				if (Object.keys(rxo[index].RXR[indexRXR].route).length == 0) {
					delete rxo[index].RXR[indexRXR].route;
				}
	
				// RXR.2, site
				rxo[index].RXR[indexRXR].route = {};
				if (rxrSeg['RXR.2']['RXR.2.1'].toString() != "") { rxo[index].RXR[indexRXR].site.id = rxrSeg['RXR.2']['RXR.2.1']; }
				if (rxrSeg['RXR.2']['RXR.2.2'].toString() != "") { rxo[index].RXR[indexRXR].site.text = rxrSeg['RXR.2']['RXR.2.2']; }
				if (rxrSeg['RXR.2']['RXR.2.3'].toString() != "") { rxo[index].RXR[indexRXR].site.codingSystem = rxrSeg['RXR.2']['RXR.2.3']; }
				if (rxrSeg['RXR.2']['RXR.2.4'].toString() != "") { rxo[index].RXR[indexRXR].site.altId = rxrSeg['RXR.2']['RXR.2.4']; }
				if (rxrSeg['RXR.2']['RXR.2.5'].toString() != "") { rxo[index].RXR[indexRXR].site.altText = rxrSeg['RXR.2']['RXR.2.5']; }
				if (rxrSeg['RXR.2']['RXR.2.6'].toString() != "") { rxo[index].RXR[indexRXR].site.altCodingSystem = rxrSeg['RXR.2']['RXR.2.6']; }
				if (Object.keys(rxo[index].RXR[indexRXR].site).length == 0) {
					delete rxo[index].RXR[indexRXR].site;
				}
	
				// RXR.3, administrationDevice
				rxo[index].RXR[indexRXR].administrationDevice = {};
				if (rxrSeg['RXR.3']['RXR.3.1'].toString() != "") { rxo[index].RXR[indexRXR].administrationDevice.id = rxrSeg['RXR.3']['RXR.3.1']; }
				if (rxrSeg['RXR.3']['RXR.3.2'].toString() != "") { rxo[index].RXR[indexRXR].administrationDevice.text = rxrSeg['RXR.3']['RXR.3.2']; }
				if (rxrSeg['RXR.3']['RXR.3.3'].toString() != "") { rxo[index].RXR[indexRXR].administrationDevice.codingSystem = rxrSeg['RXR.3']['RXR.3.3']; }
				if (rxrSeg['RXR.3']['RXR.3.4'].toString() != "") { rxo[index].RXR[indexRXR].administrationDevice.altId = rxrSeg['RXR.3']['RXR.3.4']; }
				if (rxrSeg['RXR.3']['RXR.3.5'].toString() != "") { rxo[index].RXR[indexRXR].administrationDevice.altText = rxrSeg['RXR.3']['RXR.3.5']; }
				if (rxrSeg['RXR.3']['RXR.3.6'].toString() != "") { rxo[index].RXR[indexRXR].administrationDevice.altCodingSystem = rxrSeg['RXR.3']['RXR.3.6']; }
				if (Object.keys(rxo[index].RXR[indexRXR].administrationDevice).length == 0) {
					delete rxo[index].RXR[indexRXR].administrationDevice;
				}
	
				// RXR.4, administrationMethod
				rxo[index].RXR[indexRXR].administrationMethod = {};
				if (rxrSeg['RXR.4']['RXR.4.1'].toString() != "") { rxo[index].RXR[indexRXR].administrationMethod.id = rxrSeg['RXR.4']['RXR.4.1']; }
				if (rxrSeg['RXR.4']['RXR.4.2'].toString() != "") { rxo[index].RXR[indexRXR].administrationMethod.text = rxrSeg['RXR.4']['RXR.4.2']; }
				if (rxrSeg['RXR.4']['RXR.4.3'].toString() != "") { rxo[index].RXR[indexRXR].administrationMethod.codingSystem = rxrSeg['RXR.4']['RXR.4.3']; }
				if (rxrSeg['RXR.4']['RXR.4.4'].toString() != "") { rxo[index].RXR[indexRXR].administrationMethod.altId = rxrSeg['RXR.4']['RXR.4.4']; }
				if (rxrSeg['RXR.4']['RXR.4.5'].toString() != "") { rxo[index].RXR[indexRXR].administrationMethod.altText = rxrSeg['RXR.4']['RXR.4.5']; }
				if (rxrSeg['RXR.4']['RXR.4.6'].toString() != "") { rxo[index].RXR[indexRXR].administrationMethod.altCodingSystem = rxrSeg['RXR.4']['RXR.4.6']; }
				if (Object.keys(rxo[index].RXR[indexRXR].administrationMethod).length == 0) {
					delete rxo[index].RXR[indexRXR].administrationMethod;
				}

				// RXC (RXR)
				var rxcGroup = getSegmentsAfter(msg,rxrSeg,'RXC',true);
				if (rxcGroup.length > 0) {
					rxo[index].RXR[indexRXR].RXC = [];
					var indexRXC = 0;
					for each (rxcSeg in rxcGroup) {
						rxo[index].RXR[indexRXR].RXC[indexRXC] = {};
		
						// RXC.1, rXComponentType
						if (rxcSeg['RXC.1']['RXC.1.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].RXComponentType = rxcSeg['RXC.1']['RXC.1.1']; }
		
						// RXC.2, componentCode
						rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode = {};
						if (rxcSeg['RXC.2']['RXC.2.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode.id = rxcSeg['RXC.2']['RXC.2.1']; }
						if (rxcSeg['RXC.2']['RXC.2.2'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode.text = rxcSeg['RXC.2']['RXC.2.2']; }
						if (rxcSeg['RXC.2']['RXC.2.3'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode.codingSystem = rxcSeg['RXC.2']['RXC.2.3']; }
						if (rxcSeg['RXC.2']['RXC.2.4'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode.altId = rxcSeg['RXC.2']['RXC.2.4']; }
						if (rxcSeg['RXC.2']['RXC.2.5'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode.altText = rxcSeg['RXC.2']['RXC.2.5']; }
						if (rxcSeg['RXC.2']['RXC.2.6'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode.altCodingSystem = rxcSeg['RXC.2']['RXC.2.6']; }
						if (Object.keys(rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode).length == 0) {
							delete rxo[index].RXR[indexRXR].RXC[indexRXC].componentCode;
						}
		
						// RXC.3, componentAmount
						if (rxcSeg['RXC.3']['RXC.3.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentAmount = rxcSeg['RXC.3']['RXC.3.1']; }
		
						// RXC.4, componentUnits
						rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits = {};
						if (rxcSeg['RXC.4']['RXC.4.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits.id = rxcSeg['RXC.4']['RXC.4.1']; }
						if (rxcSeg['RXC.4']['RXC.4.2'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits.text = rxcSeg['RXC.4']['RXC.4.2']; }
						if (rxcSeg['RXC.4']['RXC.4.3'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits.codingSystem = rxcSeg['RXC.4']['RXC.4.3']; }
						if (rxcSeg['RXC.4']['RXC.4.4'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits.altId = rxcSeg['RXC.4']['RXC.4.4']; }
						if (rxcSeg['RXC.4']['RXC.4.5'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits.altText = rxcSeg['RXC.4']['RXC.4.5']; }
						if (rxcSeg['RXC.4']['RXC.4.6'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits.altCodingSystem = rxcSeg['RXC.4']['RXC.4.6']; }
						if (Object.keys(rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits).length == 0) {
							delete rxo[index].RXR[indexRXR].RXC[indexRXC].componentUnits;
						}
		
						// RXC.5, componentStrength
						if (rxcSeg['RXC.5']['RXC.5.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrength = rxcSeg['RXC.5']['RXC.5.1']; }
		
						// RXC.6, componentStrengthUnits
						rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits = {};
						if (rxcSeg['RXC.6']['RXC.6.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits.id = rxcSeg['RXC.6']['RXC.6.1']; }
						if (rxcSeg['RXC.6']['RXC.6.2'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits.text = rxcSeg['RXC.6']['RXC.6.2']; }
						if (rxcSeg['RXC.6']['RXC.6.3'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits.codingSystem = rxcSeg['RXC.6']['RXC.6.3']; }
						if (rxcSeg['RXC.6']['RXC.6.4'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits.altId = rxcSeg['RXC.6']['RXC.6.4']; }
						if (rxcSeg['RXC.6']['RXC.6.5'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits.altText = rxcSeg['RXC.6']['RXC.6.5']; }
						if (rxcSeg['RXC.6']['RXC.6.6'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits.altCodingSystem = rxcSeg['RXC.6']['RXC.6.6']; }
						if (Object.keys(rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits).length == 0) {
							delete rxo[index].RXR[indexRXR].RXC[indexRXC].componentStrengthUnits;
						}

						// NTE (RXC)
						var nteGroup = getSegmentsAfter(msg,rxcSeg,'NTE',false, ['RXO', 'RXE', 'RXA']);
						if (nteGroup.length > 0) {
							rxo[index].RXR[indexRXR].RXC[indexRXC].NTE = [];
							var indexNTE = 0;
							for each (nteSeg in nteGroup) {
								rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE] = {};
				
								// NTE.1, setId
								if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }
				
								// NTE.2, sourceOfComment
								if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }
				
								// NTE.3, comment
								rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE].comment = [];
								for each (field in nteSeg['NTE.3']) {
									var block = {};
									if (field['NTE.3.1'].toString() != "") { 
										rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE].comment.push(field['NTE.3.1']);
									}
								}
								if (rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE].comment.length == 0) {
									delete rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE].comment;
								}
				
								// clean up NTE and increment index
								if (Object.keys(rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE]).length == 0) {
									delete rxo[index].RXR[indexRXR].RXC[indexRXC].NTE[indexNTE];
								} else {
									indexNTE++;
								}
							}
						}
		
						// clean up RXC and increment index
						if (Object.keys(rxo[index].RXR[indexRXR].RXC[indexRXC]).length == 0) {
							delete rxo[index].RXR[indexRXR].RXC[indexRXC];
						} else {
							indexRXC++;
						}
					}
				}
	
				// clean up RXR and incremend index
				if (Object.keys(rxo[index].RXR[indexRXR]).length == 0) {
					delete rxo[index].RXR[indexRXR];
				} else {
					indexRXR++;
				}
			}
		}

		// clean up RXO and increment index
		if (Object.keys(rxo[index]).length == 0) {
			delete rxo[index];
		} else {
			index++;
		}
	}
}