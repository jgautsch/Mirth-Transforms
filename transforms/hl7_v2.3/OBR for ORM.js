// OBR
var obr;
if (msg['OBR'].length() > 0) {
	obr = [];
	var index = 0;
	for each (seg in msg.OBR) {
		obr[index] = {};

		// OBR.1, setId
		if (seg['OBR.1']['OBR.1.1'].toString() != "") {obr[index].setId = seg['OBR.1']['OBR.1.1']; }
		
		// OBR.2, placerOrderNumber
		obr[index].placerOrderNumber = {};
		if (seg['OBR.2']['OBR.2.1'].toString() != "") { obr[index].placerOrderNumber.id = seg['OBR.2']['OBR.2.1']; }
		if (seg['OBR.2']['OBR.2.2'].toString() != "") { obr[index].placerOrderNumber.namespaceId = seg['OBR.2']['OBR.2.2']; }
		if (seg['OBR.2']['OBR.2.3'].toString() != "") { obr[index].placerOrderNumber.universalId = seg['OBR.2']['OBR.2.3']; }
		if (seg['OBR.2']['OBR.2.4'].toString() != "") { obr[index].placerOrderNumber.universalIdType = seg['OBR.2']['OBR.2.4']; }
		if (Object.keys(obr[index].placerOrderNumber).length == 0) {
			delete obr[index].placerOrderNumber;
		}

		// OBR.3, fillerOrderNumber
		obr[index].fillerOrderNumber = {};
		if (seg['OBR.3']['OBR.3.1'].toString() != "") { obr[index].fillerOrderNumber.id = seg['OBR.3']['OBR.3.1']; }
		if (seg['OBR.3']['OBR.3.2'].toString() != "") { obr[index].fillerOrderNumber.namespaceId = seg['OBR.3']['OBR.3.2']; }
		if (seg['OBR.3']['OBR.3.3'].toString() != "") { obr[index].fillerOrderNumber.universalId = seg['OBR.3']['OBR.3.3']; }
		if (seg['OBR.3']['OBR.3.4'].toString() != "") { obr[index].fillerOrderNumber.universalIdType = seg['OBR.3']['OBR.3.4']; }
		if (Object.keys(obr[index].fillerOrderNumber).length == 0) {
			delete obr[index].fillerOrderNumber;
		}
		
		// OBR.4, universalServiceID
		obr[index].universalServiceID = {};
		if (seg['OBR.4']['OBR.4.1'].toString() != "") { obr[index].universalServiceID.id = seg['OBR.4']['OBR.4.1']; }
		if (seg['OBR.4']['OBR.4.2'].toString() != "") { obr[index].universalServiceID.text = seg['OBR.4']['OBR.4.2']; }
		if (seg['OBR.4']['OBR.4.3'].toString() != "") { obr[index].universalServiceID.codingSystem = seg['OBR.4']['OBR.4.3']; }
		if (seg['OBR.4']['OBR.4.4'].toString() != "") { obr[index].universalServiceID.altId = seg['OBR.4']['OBR.4.4']; }
		if (seg['OBR.4']['OBR.4.5'].toString() != "") { obr[index].universalServiceID.altText = seg['OBR.4']['OBR.4.5']; }
		if (seg['OBR.4']['OBR.4.6'].toString() != "") { obr[index].universalServiceID.altCodingSystem = seg['OBR.4']['OBR.4.6']; }
		if (Object.keys(obr[index].universalServiceID).length == 0) {
			delete obr[index].universalServiceID;
		}

		// OBR.5, priority
		if (seg['OBR.5']['OBR.5.1'].toString() != "") {obr[index].priority = seg['OBR.5']['OBR.5.1']; }
		
		// OBR.6, requestedDatetime
		if (seg['OBR.6']['OBR.6.1'].toString() != "") {obr[index].requestedDatetime = seg['OBR.6']['OBR.6.1']; }
		
		// OBR.7, observationDateTime
		if (seg['OBR.7']['OBR.7.1'].toString() != "") {obr[index].observationDateTime = seg['OBR.7']['OBR.7.1']; }
		
		// OBR.8, observationEndDateTime
		if (seg['OBR.8']['OBR.8.1'].toString() != "") {obr[index].observationEndDateTime = seg['OBR.8']['OBR.8.1']; }
		
		// OBR.9, collectionVolume
		obr[index].collectionVolume = {};
		if (seg['OBR.9']['OBR.9.1'].toString() != "") { obr[index].collectionVolume.quantity = seg['OBR.9']['OBR.9.1']; }
		if (seg['OBR.9']['OBR.9.2'].toString() != "") { obr[index].collectionVolume.units = seg['OBR.9']['OBR.9.2']; }
		if (Object.keys(obr[index].collectionVolume).length == 0) {
			delete obr[index].collectionVolume;
		}

		// OBR.10, collectorIdentifier
		obr[index].collectorIdentifier = [];
		for each (field in seg['OBR.10']) {
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
				if (field['OBR.10.9'].toString() != "") { block.assigningAuthority.id = field['OBR.10.9']; }
				else delete block.assigningAuthority;
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
				if (field['OBR.10.14'].toString() != "") { block.assigningFacility.id = field['OBR.10.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				obr[index].collectorIdentifier.push(block);
			}
		}
		if (obr[index].collectorIdentifier.length == 0) {
			delete obr[index].collectorIdentifier;
		}

		// OBR.11, specimenActionCode
		if (seg['OBR.11']['OBR.11.1'].toString() != "") {obr[index].specimenActionCode = seg['OBR.11']['OBR.11.1']; }
		
		// OBR.12, dangerCode
		obr[index].dangerCode = {};
		if (seg['OBR.12']['OBR.12.1'].toString() != "") { obr[index].dangerCode.id = seg['OBR.12']['OBR.12.1']; }
		if (seg['OBR.12']['OBR.12.2'].toString() != "") { obr[index].dangerCode.text = seg['OBR.12']['OBR.12.2']; }
		if (seg['OBR.12']['OBR.12.3'].toString() != "") { obr[index].dangerCode.codingSystem = seg['OBR.12']['OBR.12.3']; }
		if (seg['OBR.12']['OBR.12.4'].toString() != "") { obr[index].dangerCode.altId = seg['OBR.12']['OBR.12.4']; }
		if (seg['OBR.12']['OBR.12.5'].toString() != "") { obr[index].dangerCode.altText = seg['OBR.12']['OBR.12.5']; }
		if (seg['OBR.12']['OBR.12.6'].toString() != "") { obr[index].dangerCode.altCodingSystem = seg['OBR.12']['OBR.12.6']; }
		if (Object.keys(obr[index].dangerCode).length == 0) {
			delete obr[index].dangerCode;
		}
		
		// OBR.13, relevantClinicalInfo
		if (seg['OBR.13']['OBR.13.1'].toString() != "") {obr[index].relevantClinicalInfo = seg['OBR.13']['OBR.13.1']; }
		
		// OBR.14, specimenReceivedDateTime
		if (seg['OBR.14']['OBR.14.1'].toString() != "") {obr[index].specimenReceivedDateTime = seg['OBR.14']['OBR.14.1']; }
		
		// OBR.15, specimenSource
		obr[index].specimenSource = {};
		obr[index].specimenSource.specimenSourceNameOrCode = {};
		if (seg['OBR.15']['OBR.15.1']['OBR.15.1.1'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.id = seg['OBR.15']['OBR.15.1']['OBR.15.1.1']; }
		if (seg['OBR.15']['OBR.15.1']['OBR.15.1.2'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.text = seg['OBR.15']['OBR.15.1']['OBR.15.1.2']; }
		if (seg['OBR.15']['OBR.15.1']['OBR.15.1.3'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.codingSystem = seg['OBR.15']['OBR.15.1']['OBR.15.1.3']; }
		if (seg['OBR.15']['OBR.15.1']['OBR.15.1.4'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.altId = seg['OBR.15']['OBR.15.1']['OBR.15.1.4']; }
		if (seg['OBR.15']['OBR.15.1']['OBR.15.1.5'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.altText = seg['OBR.15']['OBR.15.1']['OBR.15.1.5']; }
		if (seg['OBR.15']['OBR.15.1']['OBR.15.1.6'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.altCodingSystem = seg['OBR.15']['OBR.15.1']['OBR.15.1.6']; }
		if (Object.keys(obr[index].specimenSource.specimenSourceNameOrCode).length == 0) {
			if (seg['OBR.15']['OBR.15.1'].toString() != "") { obr[index].specimenSource.specimenSourceNameOrCode.id = seg['OBR.15']['OBR.15.1']; }
			else delete obr[index].specimenSource.specimenSourceNameOrCode;
		}
		if (seg['OBR.15']['OBR.15.2'].toString() != "") {
			obr[index].specimenSource.additives = seg['OBR.15']['OBR.15.2'];
		}
		if (seg['OBR.15']['OBR.15.3'].toString() != "") {
			obr[index].specimenSource.freetext = seg['OBR.15']['OBR.15.3'];
		}
		obr[index].specimenSource.bodySite = {};
		if (seg['OBR.15']['OBR.15.4']['OBR.15.4.1'].toString() != "") { obr[index].specimenSource.bodySite.id = seg['OBR.15']['OBR.15.4']['OBR.15.4.1']; }
		if (seg['OBR.15']['OBR.15.4']['OBR.15.4.2'].toString() != "") { obr[index].specimenSource.bodySite.text = seg['OBR.15']['OBR.15.4']['OBR.15.4.2']; }
		if (seg['OBR.15']['OBR.15.4']['OBR.15.4.3'].toString() != "") { obr[index].specimenSource.bodySite.codingSystem = seg['OBR.15']['OBR.15.4']['OBR.15.4.3']; }
		if (seg['OBR.15']['OBR.15.4']['OBR.15.4.4'].toString() != "") { obr[index].specimenSource.bodySite.altId = seg['OBR.15']['OBR.15.4']['OBR.15.4.4']; }
		if (seg['OBR.15']['OBR.15.4']['OBR.15.4.5'].toString() != "") { obr[index].specimenSource.bodySite.altText = seg['OBR.15']['OBR.15.4']['OBR.15.4.5']; }
		if (seg['OBR.15']['OBR.15.4']['OBR.15.4.6'].toString() != "") { obr[index].specimenSource.bodySite.altCodingSystem = seg['OBR.15']['OBR.15.4']['OBR.15.4.6']; }
		if (Object.keys(obr[index].specimenSource.bodySite).length == 0) {
			if (seg['OBR.15']['OBR.15.4'].toString() != "") { obr[index].specimenSource.bodySite.id = seg['OBR.15']['OBR.15.4']; }
			else delete obr[index].specimenSource.bodySite;
		}
		obr[index].specimenSource.siteModifier = {};
		if (seg['OBR.15']['OBR.15.5']['OBR.15.5.1'].toString() != "") { obr[index].specimenSource.siteModifier.id = seg['OBR.15']['OBR.15.5']['OBR.15.5.1']; }
		if (seg['OBR.15']['OBR.15.5']['OBR.15.5.2'].toString() != "") { obr[index].specimenSource.siteModifier.text = seg['OBR.15']['OBR.15.5']['OBR.15.5.2']; }
		if (seg['OBR.15']['OBR.15.5']['OBR.15.5.3'].toString() != "") { obr[index].specimenSource.siteModifier.codingSystem = seg['OBR.15']['OBR.15.5']['OBR.15.5.3']; }
		if (seg['OBR.15']['OBR.15.5']['OBR.15.5.4'].toString() != "") { obr[index].specimenSource.siteModifier.altId = seg['OBR.15']['OBR.15.5']['OBR.15.5.4']; }
		if (seg['OBR.15']['OBR.15.5']['OBR.15.5.5'].toString() != "") { obr[index].specimenSource.siteModifier.altText = seg['OBR.15']['OBR.15.5']['OBR.15.5.5']; }
		if (seg['OBR.15']['OBR.15.5']['OBR.15.5.6'].toString() != "") { obr[index].specimenSource.siteModifier.altCodingSystem = seg['OBR.15']['OBR.15.5']['OBR.15.5.6']; }
		if (Object.keys(obr[index].specimenSource.siteModifier).length == 0) {
			if (seg['OBR.15']['OBR.15.5'].toString() != "") { obr[index].specimenSource.siteModifier.id = seg['OBR.15']['OBR.15.5']; }
			else delete obr[index].specimenSource.siteModifier;
		}
		obr[index].specimenSource.collectionMethod = {};
		if (seg['OBR.15']['OBR.15.6']['OBR.15.6.1'].toString() != "") { obr[index].specimenSource.collectionMethod.id = seg['OBR.15']['OBR.15.6']['OBR.15.6.1']; }
		if (seg['OBR.15']['OBR.15.6']['OBR.15.6.2'].toString() != "") { obr[index].specimenSource.collectionMethod.text = seg['OBR.15']['OBR.15.6']['OBR.15.6.2']; }
		if (seg['OBR.15']['OBR.15.6']['OBR.15.6.3'].toString() != "") { obr[index].specimenSource.collectionMethod.codingSystem = seg['OBR.15']['OBR.15.6']['OBR.15.6.3']; }
		if (seg['OBR.15']['OBR.15.6']['OBR.15.6.4'].toString() != "") { obr[index].specimenSource.collectionMethod.altId = seg['OBR.15']['OBR.15.6']['OBR.15.6.4']; }
		if (seg['OBR.15']['OBR.15.6']['OBR.15.6.5'].toString() != "") { obr[index].specimenSource.collectionMethod.altText = seg['OBR.15']['OBR.15.6']['OBR.15.6.5']; }
		if (seg['OBR.15']['OBR.15.6']['OBR.15.6.6'].toString() != "") { obr[index].specimenSource.collectionMethod.altCodingSystem = seg['OBR.15']['OBR.15.6']['OBR.15.6.6']; }
		if (Object.keys(obr[index].specimenSource.collectionMethod).length == 0) {
			if (seg['OBR.15']['OBR.15.6'].toString() != "") { obr[index].specimenSource.collectionMethod.id = seg['OBR.15']['OBR.15.6']; }
			else delete obr[index].specimenSource.collectionMethod;
		}
		if (Object.keys(obr[index].specimenSource).length == 0) {
			delete obr[index].specimenSource;
		}

		// OBR.16, orderingProvider
		obr[index].orderingProvider = [];
		for each (field in seg['OBR.16']) {
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
				if (field['OBR.16.9'].toString() != "") { block.assigningAuthority.id = field['OBR.16.9']; }
				else delete block.assigningAuthority;
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
				if (field['OBR.16.14'].toString() != "") { block.assigningFacility.id = field['OBR.16.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				obr[index].orderingProvider.push(block);
			}
		}
		if (obr[index].orderingProvider.length == 0) {
			delete obr[index].orderingProvider;
		}

		// OBR.17, orderCallbackPhoneNumber
		obr[index].orderCallbackPhoneNumber = [];
		for each (field in seg['OBR.17']) {
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
				obr[index].orderCallbackPhoneNumber.push(block);
			}
		}
		if (obr[index].orderCallbackPhoneNumber.length == 0) {
			delete obr[index].orderCallbackPhoneNumber;
		}

		// OBR.18, placerfield1
		if (seg['OBR.18']['OBR.18.1'].toString() != "") {obr[index].placerfield1 = seg['OBR.18']['OBR.18.1']; }
		
		// OBR.19, placerfield2
		if (seg['OBR.19']['OBR.19.1'].toString() != "") {obr[index].placerfield2 = seg['OBR.19']['OBR.19.1']; }
		
		// OBR.20, fillerField1
		if (seg['OBR.20']['OBR.20.1'].toString() != "") {obr[index].fillerField1 = seg['OBR.20']['OBR.20.1']; }
		
		// OBR.21, fillerField2
		if (seg['OBR.21']['OBR.21.1'].toString() != "") {obr[index].fillerField2 = seg['OBR.21']['OBR.21.1']; }
		
		// OBR.22, resultsRptStatusChngDateTime
		if (seg['OBR.22']['OBR.22.1'].toString() != "") {obr[index].resultsRptStatusChngDateTime = seg['OBR.22']['OBR.22.1']; }
		
		// OBR.23, chargeToPractice
		obr[index].chargeToPractice = {};
		obr[index].chargeToPractice.dollarAmount = {};
		if (seg['OBR.23']['OBR.23.1']['OBR.23.1.1'].toString() !="") { obr[index].chargeToPractice.dollarAmount.quantity = seg['OBR.23']['OBR.23.1']['OBR.23.1.1']; }
		if (seg['OBR.23']['OBR.23.1']['OBR.23.1.2'].toString() !="") { obr[index].chargeToPractice.dollarAmount.denomination = seg['OBR.23']['OBR.23.1']['OBR.23.1.2']; }
		if (Object.keys(obr[index].chargeToPractice.dollarAmount).length == 0) {
			if (seg['OBR.23']['OBR.23.1'].toString() != "") {obr[index].chargeToPractice.dollaramount.quantity = seg['OBR.23']['OBR.23.1']; }
      else delete obr[index].chargeToPractice.dollarAmount;
		}
		obr[index].chargeToPractice.chargeCode = {};
		if (seg['OBR.23']['OBR.23.2']['OBR.23.2.1'].toString() !="") { obr[index].chargeToPractice.chargeCode.id = seg['OBR.23']['OBR.23.2']['OBR.23.2.1']; }
		if (seg['OBR.23']['OBR.23.2']['OBR.23.2.2'].toString() !="") { obr[index].chargeToPractice.chargeCode.text = seg['OBR.23']['OBR.23.2']['OBR.23.2.2']; }
		if (seg['OBR.23']['OBR.23.2']['OBR.23.2.3'].toString() !="") { obr[index].chargeToPractice.chargeCode.codingSystem = seg['OBR.23']['OBR.23.2']['OBR.23.2.3']; }
		if (seg['OBR.23']['OBR.23.2']['OBR.23.2.4'].toString() !="") { obr[index].chargeToPractice.chargeCode.altId = seg['OBR.23']['OBR.23.2']['OBR.23.2.4']; }
		if (seg['OBR.23']['OBR.23.2']['OBR.23.2.5'].toString() !="") { obr[index].chargeToPractice.chargeCode.altText = seg['OBR.23']['OBR.23.2']['OBR.23.2.5']; }
		if (seg['OBR.23']['OBR.23.2']['OBR.23.2.6'].toString() !="") { obr[index].chargeToPractice.chargeCode.altCodingSystem = seg['OBR.23']['OBR.23.2']['OBR.23.2.6']; }
		if (Object.keys(obr[index].chargeToPractice.chargeCode).length == 0) {
      if (seg['OBR.23']['OBR.23.2'].toString() != "") { obr[index].chargeToPractice.chargeCode.id = seg['OBR.23']['OBR.23.2']; }
			else delete obr[index].chargeToPractice.chargeCode;
		}
		if (Object.keys(obr[index].chargeToPractice).length == 0) {
			delete obr[index].chargeToPractice;
		}

		// OBR.24, diagnosticServSectID
		if (seg['OBR.24']['OBR.24.1'].toString() != "") {obr[index].diagnosticServSectID = seg['OBR.24']['OBR.24.1']; }
		
		// OBR.25, resultStatus
		if (seg['OBR.25']['OBR.25.1'].toString() != "") {obr[index].resultStatus = seg['OBR.25']['OBR.25.1']; }
		
		// OBR.26, parentResult
		obr[index].parentResult = {};
		obr[index].parentResult.obx3observationIdentifierOfParentResult = {};
		if (seg['OBR.26']['OBR.26.1']['OBR.26.1.1'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.id = seg['OBR.26']['OBR.26.1']['OBR.26.1.1']; }
		if (seg['OBR.26']['OBR.26.1']['OBR.26.1.2'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.text = seg['OBR.26']['OBR.26.1']['OBR.26.1.2']; }
		if (seg['OBR.26']['OBR.26.1']['OBR.26.1.3'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.codingSystem = seg['OBR.26']['OBR.26.1']['OBR.26.1.3']; }
		if (seg['OBR.26']['OBR.26.1']['OBR.26.1.4'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.altId = seg['OBR.26']['OBR.26.1']['OBR.26.1.4']; }
		if (seg['OBR.26']['OBR.26.1']['OBR.26.1.5'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.altText = seg['OBR.26']['OBR.26.1']['OBR.26.1.5']; }
		if (seg['OBR.26']['OBR.26.1']['OBR.26.1.6'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.altCodingSystem = seg['OBR.26']['OBR.26.1']['OBR.26.1.6']; }
		if (Object.keys(obr[index].parentResult.obx3observationIdentifierOfParentResult).length == 0) {
			if (seg['OBR.26']['OBR.26.1'].toString() != "") { obr[index].parentResult.obx3observationIdentifierOfParentResult.id = seg['OBR.26']['OBR.26.1']; }
			else delete obr[index].parentResult.obx3observationIdentifierOfParentResult;
		}
		if (seg['OBR.26']['OBR.26.2'].toString() != "") {obr[index].parentResult.obx4subIdOfParentResult = seg['OBR.26']['OBR.26.2']; }
		if (seg['OBR.26']['OBR.26.3'].toString() != "") {obr[index].parentResult.obx5partOfObservationResultFromParent = seg['OBR.26']['OBR.26.3']; }
		if (Object.keys(obr[index].parentResult).length == 0) {
			delete obr[index].parentResult;
		}

		// OBR.27, quantityTiming
		obr[index].quantityTiming = [];
		for each (field in seg['OBR.27']) {
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
				obr[index].quantityTiming.push(block)
			}
		}
		if (obr[index].quantityTiming.length == 0) {
			delete obr[index].quantityTiming;
		}

		// OBR.28, resultCopiesTo
		obr[index].resultCopiesTo = [];
		for each (field in seg['OBR.28']) {
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
				if (field['OBR.28.9'].toString() != "") { block.assigningAuthority.id = field['OBR.28.9']; }
				else delete block.assigningAuthority;
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
				if (field['OBR.28.14'].toString() != "") { block.assigningFacility.id = field['OBR.28.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				obr[index].resultCopiesTo.push(block);
			}
		}
		if (obr[index].resultCopiesTo.length == 0) {
			delete obr[index].resultCopiesTo;
		}

		// OBR.29, parent
		obr[index].parent = {};
		obr[index].parent.parentsPlacerOrderNumber = {};
		if (seg['OBR.29']['OBR.29.1']['OBR.29.1.1'].toString() != "") { obr[index].parent.parentsPlacerOrderNumber.id = seg['OBR.29']['OBR.29.1']['OBR.29.1.1']; }
		if (seg['OBR.29']['OBR.29.1']['OBR.29.1.2'].toString() != "") { obr[index].parent.parentsPlacerOrderNumber.namespaceId = seg['OBR.29']['OBR.29.1']['OBR.29.1.2']; }
		if (seg['OBR.29']['OBR.29.1']['OBR.29.1.3'].toString() != "") { obr[index].parent.parentsPlacerOrderNumber.universalId = seg['OBR.29']['OBR.29.1']['OBR.29.1.3']; }
		if (seg['OBR.29']['OBR.29.1']['OBR.29.1.4'].toString() != "") { obr[index].parent.parentsPlacerOrderNumber.universalIdType = seg['OBR.29']['OBR.29.1']['OBR.29.1.4']; }
		if (Object.keys(obr[index].parent.parentsPlacerOrderNumber).length == 0) {
			if (seg['OBR.29']['OBR.29.1'].toString() != "") { obr[index].parent.parentsPlacerOrderNumber.id = seg['OBR.29']['OBR.29.1']; }
			else delete obr[index].parent.parentsPlacerOrderNumber;
		}
		obr[index].parent.parentsFillerOrderNumber = {};
		if (seg['OBR.29']['OBR.29.2']['OBR.29.2.1'].toString() != "") { obr[index].parent.parentsFillerOrderNumber.id = seg['OBR.29']['OBR.29.2']['OBR.29.2.1']; }
		if (seg['OBR.29']['OBR.29.2']['OBR.29.2.2'].toString() != "") { obr[index].parent.parentsFillerOrderNumber.namespaceId = seg['OBR.29']['OBR.29.2']['OBR.29.2.2']; }
		if (seg['OBR.29']['OBR.29.2']['OBR.29.2.3'].toString() != "") { obr[index].parent.parentsFillerOrderNumber.universalId = seg['OBR.29']['OBR.29.2']['OBR.29.2.3']; }
		if (seg['OBR.29']['OBR.29.2']['OBR.29.2.4'].toString() != "") { obr[index].parent.parentsFillerOrderNumber.universalIdType = seg['OBR.29']['OBR.29.2']['OBR.29.2.4']; }
		if (Object.keys(obr[index].parent.parentsFillerOrderNumber).length == 0) {
			if (seg['OBR.29']['OBR.29.2'].toString() != "") { obr[index].parent.parentsFillerOrderNumber.id = seg['OBR.29']['OBR.29.2']; }
			else delete obr[index].parent.parentsFillerOrderNumber;
		}
		if (Object.keys(obr[index].parent).length == 0) {
			delete obr[index].parent;
		}

		// OBR.30, transportationMode
		if (seg['OBR.30']['OBR.30.1'].toString() != "") {obr[index].transportationMode = seg['OBR.30']['OBR.30.1']; }
		
		// OBR.31, reasonForStudy
		obr[index].reasonForStudy = [];
		for each (field in seg['OBR.31']) {
			var block = {};
			if (field['OBR.31.1'].toString() != "") { block.id = field['OBR.31.1']; }
			if (field['OBR.31.2'].toString() != "") { block.text = field['OBR.31.2']; }
			if (field['OBR.31.3'].toString() != "") { block.codingSystem = field['OBR.31.3']; }
			if (field['OBR.31.4'].toString() != "") { block.altId = field['OBR.31.4']; }
			if (field['OBR.31.5'].toString() != "") { block.altText = field['OBR.31.5']; }
			if (field['OBR.31.6'].toString() != "") { block.altCodingSystem = field['OBR.31.6']; }
			if (Object.keys(block).length > 0) {
				obr[index].reasonForStudy.push(block);
			}
		}
		if (obr[index].reasonForStudy.length == 0) {
			delete obr[index].reasonForStudy;
		}

		// OBR.32, principalResultInterpreter
		obr[index].principalResultInterpreter = {};
		if (seg['OBR.32']['OBR.32.1'].toString() != "") { obr[index].principalResultInterpreter.id = seg['OBR.32']['OBR.32.1']; }
		if (seg['OBR.32']['OBR.32.2'].toString() != "") { obr[index].principalResultInterpreter.lastName = seg['OBR.32']['OBR.32.2']; }
		if (seg['OBR.32']['OBR.32.3'].toString() != "") { obr[index].principalResultInterpreter.firstName = seg['OBR.32']['OBR.32.3']; }
		if (seg['OBR.32']['OBR.32.4'].toString() != "") { obr[index].principalResultInterpreter.middleInitOrName = seg['OBR.32']['OBR.32.4']; }
		if (seg['OBR.32']['OBR.32.5'].toString() != "") { obr[index].principalResultInterpreter.suffix = seg['OBR.32']['OBR.32.5']; }
		if (seg['OBR.32']['OBR.32.6'].toString() != "") { obr[index].principalResultInterpreter.prefix = seg['OBR.32']['OBR.32.6']; }
		if (seg['OBR.32']['OBR.32.7'].toString() != "") { obr[index].principalResultInterpreter.degree = seg['OBR.32']['OBR.32.7']; }
		if (seg['OBR.32']['OBR.32.8'].toString() != "") { obr[index].principalResultInterpreter.sourceTable = seg['OBR.32']['OBR.32.8']; }
		obr[index].principalResultInterpreter.assigningAuthority = {};
		if (seg['OBR.32']['OBR.32.9']['OBR.32.9.1'].toString() != "") { obr[index].principalResultInterpreter.assigningAuthority.id = seg['OBR.32']['OBR.32.9']['OBR.32.9.1']; }
		if (seg['OBR.32']['OBR.32.9']['OBR.32.9.2'].toString() != "") { obr[index].principalResultInterpreter.assigningAuthority.universalId = seg['OBR.32']['OBR.32.9']['OBR.32.9.2']; }
		if (seg['OBR.32']['OBR.32.9']['OBR.32.9.3'].toString() != "") { obr[index].principalResultInterpreter.assigningAuthority.universalIdType = seg['OBR.32']['OBR.32.9']['OBR.32.9.3']; }
		if (Object.keys(obr[index].principalResultInterpreter.assigningAuthority).length == 0) {
			if (seg['OBR.32']['OBR.32.9'].toString() != "") { obr[index].principalResultInterpreter.assigningAuthority.id = seg['OBR.32']['OBR.32.9']; }
			else delete obr[index].principalResultInterpreter.assigningAuthority;
		}
		if (seg['OBR.32']['OBR.32.10'].toString() != "") { obr[index].principalResultInterpreter.nameTypeCode = seg['OBR.32']['OBR.32.10']; }
		if (seg['OBR.32']['OBR.32.11'].toString() != "") { obr[index].principalResultInterpreter.identifierCheckDigit = seg['OBR.32']['OBR.32.11']; }
		if (seg['OBR.32']['OBR.32.12'].toString() != "") { obr[index].principalResultInterpreter.codeIdentifyingCheckDigitScheme = seg['OBR.32']['OBR.32.12']; }
		if (seg['OBR.32']['OBR.32.13'].toString() != "") { obr[index].principalResultInterpreter.identifierTypeCode = seg['OBR.32']['OBR.32.13']; }
		obr[index].principalResultInterpreter.assigningFacility = {};
		if (seg['OBR.32']['OBR.32.14']['OBR.32.14.1'].toString() != "") { obr[index].principalResultInterpreter.assigningFacility.id = seg['OBR.32']['OBR.32.14']['OBR.32.14.1']; }
		if (seg['OBR.32']['OBR.32.14']['OBR.32.14.2'].toString() != "") { obr[index].principalResultInterpreter.assigningFacility.universalId = seg['OBR.32']['OBR.32.14']['OBR.32.14.2']; }
		if (seg['OBR.32']['OBR.32.14']['OBR.32.14.3'].toString() != "") { obr[index].principalResultInterpreter.assigningFacility.universalIdType = seg['OBR.32']['OBR.32.14']['OBR.32.14.3']; }
		if (Object.keys(obr[index].principalResultInterpreter.assigningFacility).length == 0) {
			if (seg['OBR.32']['OBR.32.14'].toString() != "") { obr[index].principalResultInterpreter.assigningFacility.id = seg['OBR.32']['OBR.32.14']; }
			else delete obr[index].principalResultInterpreter.assigningFacility;
		}
		if (Object.keys(obr[index].principalResultInterpreter).length == 0) {
			delete obr[index].principalResultInterpreter;
		}

		// OBR.33, assistantResultInterpreter
		obr[index].assistantResultInterpreter = [];
		for each (field in seg['OBR.33']) {
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
				if (field['OBR.33.9'].toString() != "") { block.assigningAuthority.id = field['OBR.33.9']; }
				else delete block.assigningAuthority;
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
				if (field['OBR.33.14'].toString() != "") { block.assigningFacility.id = field['OBR.33.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				obr[index].assistantResultInterpreter.push(block);
			}
		}
		if (obr[index].assistantResultInterpreter.length == 0) {
			delete obr[index].assistantResultInterpreter;
		}

		// OBR.34, technician
		obr[index].technician = [];
		for each (field in seg['OBR.34']) {
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
				if (field['OBR.34.9'].toString() != "") { block.assigningAuthority.id = field['OBR.34.9']; }
				else delete block.assigningAuthority;
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
				obr[index].technician.push(block);
			}
		}
		if (obr[index].technician.length == 0) {
			delete obr[index].technician;
		}

		// OBR.35, transcriptionist
		obr[index].transcriptionist = [];
		for each (field in seg['OBR.35']) {
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
				if (field['OBR.35.9'].toString() != "") { block.assigningAuthority.id = field['OBR.35.9']; }
				else delete block.assigningAuthority;
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
				obr[index].transcriptionist.push(block);
			}
		}
		if (obr[index].transcriptionist.length == 0) {
			delete obr[index].transcriptionist;
		}

		// OBR.36, scheduledDateTime
		if (seg['OBR.36']['OBR.36.1'].toString() != "") {obr[index].scheduledDateTime = seg['OBR.36']['OBR.36.1']; }
		
		// OBR.37, numberOfSampleContainers
		if (seg['OBR.37']['OBR.37.1'].toString() != "") {obr[index].numberOfSampleContainers = seg['OBR.37']['OBR.37.1']; }
		
		// OBR.38, transportLogisticsOfCollectedSample
		obr[index].transportLogisticsOfCollectedSample = [];
		for each (field in seg['OBR.38']) {
			var block = {};
			if (field['OBR.38.1'].toString() != "") { block.id = field['OBR.38.1']; }
			if (field['OBR.38.2'].toString() != "") { block.text = field['OBR.38.2']; }
			if (field['OBR.38.3'].toString() != "") { block.codingSystem = field['OBR.38.3']; }
			if (field['OBR.38.4'].toString() != "") { block.altId = field['OBR.38.4']; }
			if (field['OBR.38.5'].toString() != "") { block.altText = field['OBR.38.5']; }
			if (field['OBR.38.6'].toString() != "") { block.altCodingSystem = field['OBR.38.6']; }
			if (Object.keys(block).length > 0) {
				obr[index].transportLogisticsOfCollectedSample.push(block);
			}
		}
		if (obr[index].transportLogisticsOfCollectedSample.length == 0) {
			delete obr[index].transportLogisticsOfCollectedSample;
		}

		// OBR.39, collectorsComment
		obr[index].collectorsComment = [];
		for each (field in seg['OBR.39']) {
			var block = {};
			if (field['OBR.39.1'].toString() != "") { block.id = field['OBR.39.1']; }
			if (field['OBR.39.2'].toString() != "") { block.text = field['OBR.39.2']; }
			if (field['OBR.39.3'].toString() != "") { block.codingSystem = field['OBR.39.3']; }
			if (field['OBR.39.4'].toString() != "") { block.altId = field['OBR.39.4']; }
			if (field['OBR.39.5'].toString() != "") { block.altText = field['OBR.39.5']; }
			if (field['OBR.39.6'].toString() != "") { block.altCodingSystem = field['OBR.39.6']; }
			if (Object.keys(block).length > 0) {
				obr[index].collectorsComment.push(block);
			}
		}
		if (obr[index].collectorsComment.length == 0) {
			delete obr[index].collectorsComment;
		}

		// OBR.40, transportArrangementResponsibility
		obr[index].transportArrangementResponsibility = {};
		if (seg['OBR.40']['OBR.40.1'].toString() != "") { obr[index].transportArrangementResponsibility.id = seg['OBR.40']['OBR.40.1']; }
		if (seg['OBR.40']['OBR.40.2'].toString() != "") { obr[index].transportArrangementResponsibility.text = seg['OBR.40']['OBR.40.2']; }
		if (seg['OBR.40']['OBR.40.3'].toString() != "") { obr[index].transportArrangementResponsibility.codingSystem = seg['OBR.40']['OBR.40.3']; }
		if (seg['OBR.40']['OBR.40.4'].toString() != "") { obr[index].transportArrangementResponsibility.altId = seg['OBR.40']['OBR.40.4']; }
		if (seg['OBR.40']['OBR.40.5'].toString() != "") { obr[index].transportArrangementResponsibility.altText = seg['OBR.40']['OBR.40.5']; }
		if (seg['OBR.40']['OBR.40.6'].toString() != "") { obr[index].transportArrangementResponsibility.altCodingSystem = seg['OBR.40']['OBR.40.6']; }
		if (Object.keys(obr[index].transportArrangementResponsibility).length == 0) {
			delete obr[index].transportArrangementResponsibility;
		}

		// OBR.41, transportArranged
		if (seg['OBR.41']['OBR.41.1'].toString() != "") {obr[index].transportArranged = seg['OBR.41']['OBR.41.1']; }
		
		// OBR.42, escortRequired
		if (seg['OBR.42']['OBR.42.1'].toString() != "") {obr[index].escortRequired = seg['OBR.42']['OBR.42.1']; }
		
		// OBR.43, plannedPatientTransportComment
		obr[index].plannedPatientTransportComment = [];
		for each (field in seg['OBR.43']) {
			var block = {};
			if (field['OBR.43.1'].toString() != "") { block.id = field['OBR.43.1']; }
			if (field['OBR.43.2'].toString() != "") { block.text = field['OBR.43.2']; }
			if (field['OBR.43.3'].toString() != "") { block.codingSystem = field['OBR.43.3']; }
			if (field['OBR.43.4'].toString() != "") { block.altId = field['OBR.43.4']; }
			if (field['OBR.43.5'].toString() != "") { block.altText = field['OBR.43.5']; }
			if (field['OBR.43.6'].toString() != "") { block.altCodingSystem = field['OBR.43.6']; }
			if (Object.keys(block).length > 0) {
				obr[index].plannedPatientTransportComment.push(block);
			}
		}
		if (obr[index].plannedPatientTransportComment.length == 0) {
			delete obr[index].plannedPatientTransportComment;
		}

		// NTE (OBR for ORM)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			obr[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				obr[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { obr[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { obr[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				obr[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						obr[index].nte[indexNTE].comment.push(field['NTE.3.1']);
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

		// DG1 (OBR for ORM)
		var dg1Group = getSegmentsAfter(msg,seg,'DG1',true);
		if (dg1Group.length > 0) {
			obr[index].dg1 = [];
			var indexDG1 = 0;
			for each (dg1Seg in dg1Group) {
				obr[index].dg1[indexDG1] = {};

				// DG1.1, setId
				if (dg1Seg['DG1.1']['DG1.1.1'].toString() != "") { obr[index].dg1[indexDG1].setId = dg1Seg['DG1.1']['DG1.1.1']; }

				// DG1.2, diagnosisCodingMethod
				if (dg1Seg['DG1.2']['DG1.2.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCodingMethod = dg1Seg['DG1.2']['DG1.2.1']; }
				
				// DG1.3, diagnosisCode
				obr[index].dg1[indexDG1].diagnosisCode = {};
				if (dg1Seg['DG1.3']['DG1.3.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCode.id = dg1Seg['DG1.3']['DG1.3.1']; }
				if (dg1Seg['DG1.3']['DG1.3.2'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCode.text = dg1Seg['DG1.3']['DG1.3.2']; }
				if (dg1Seg['DG1.3']['DG1.3.3'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCode.codingSystem = dg1Seg['DG1.3']['DG1.3.3']; }
				if (dg1Seg['DG1.3']['DG1.3.4'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCode.altId = dg1Seg['DG1.3']['DG1.3.4']; }
				if (dg1Seg['DG1.3']['DG1.3.5'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCode.altText = dg1Seg['DG1.3']['DG1.3.5']; }
				if (dg1Seg['DG1.3']['DG1.3.6'].toString() != "") { obr[index].dg1[indexDG1].diagnosisCode.altCodingSystem = dg1Seg['DG1.3']['DG1.3.6']; }
				if (Object.keys(obr[index].dg1[indexDG1].diagnosisCode).length == 0) {
					delete obr[index].dg1[indexDG1].diagnosisCode;
				}
				
				// DG1.4, diagnosisDescription
				if (dg1Seg['DG1.4']['DG1.4.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisDescription = dg1Seg['DG1.4']['DG1.4.1']; }
						
				// DG1.5, diagnosisDateTime
				if (dg1Seg['DG1.5']['DG1.5.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisDateTime = dg1Seg['DG1.5']['DG1.5.1']; }
						
				// DG1.6, diagnosisType
				if (dg1Seg['DG1.6']['DG1.6.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisType = dg1Seg['DG1.6']['DG1.6.1']; }
						
				// DG1.7, majorDiagnosticCategory
				obr[index].dg1[indexDG1].majorDiagnosticCategory = {};
				if (dg1Seg['DG1.7']['DG1.7.1'].toString() != "") { obr[index].dg1[indexDG1].majorDiagnosticCategory.id = dg1Seg['DG1.7']['DG1.7.1']; }
				if (dg1Seg['DG1.7']['DG1.7.2'].toString() != "") { obr[index].dg1[indexDG1].majorDiagnosticCategory.text = dg1Seg['DG1.7']['DG1.7.2']; }
				if (dg1Seg['DG1.7']['DG1.7.3'].toString() != "") { obr[index].dg1[indexDG1].majorDiagnosticCategory.codingSystem = dg1Seg['DG1.7']['DG1.7.3']; }
				if (dg1Seg['DG1.7']['DG1.7.4'].toString() != "") { obr[index].dg1[indexDG1].majorDiagnosticCategory.altId = dg1Seg['DG1.7']['DG1.7.4']; }
				if (dg1Seg['DG1.7']['DG1.7.5'].toString() != "") { obr[index].dg1[indexDG1].majorDiagnosticCategory.altText = dg1Seg['DG1.7']['DG1.7.5']; }
				if (dg1Seg['DG1.7']['DG1.7.6'].toString() != "") { obr[index].dg1[indexDG1].majorDiagnosticCategory.altCodingSystem = dg1Seg['DG1.7']['DG1.7.6']; }
				if (Object.keys(obr[index].dg1[indexDG1].majorDiagnosticCategory).length == 0) {
					delete obr[index].dg1[indexDG1].majorDiagnosticCategory;
				}

				// DG1.8, diagnosticRelatedGroup
				obr[index].dg1[indexDG1].diagnosticRelatedGroup = {};
				if (dg1Seg['DG1.8']['DG1.8.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosticRelatedGroup.id = dg1Seg['DG1.8']['DG1.8.1']; }
				if (dg1Seg['DG1.8']['DG1.8.2'].toString() != "") { obr[index].dg1[indexDG1].diagnosticRelatedGroup.text = dg1Seg['DG1.8']['DG1.8.2']; }
				if (dg1Seg['DG1.8']['DG1.8.3'].toString() != "") { obr[index].dg1[indexDG1].diagnosticRelatedGroup.codingSystem = dg1Seg['DG1.8']['DG1.8.3']; }
				if (dg1Seg['DG1.8']['DG1.8.4'].toString() != "") { obr[index].dg1[indexDG1].diagnosticRelatedGroup.altId = dg1Seg['DG1.8']['DG1.8.4']; }
				if (dg1Seg['DG1.8']['DG1.8.5'].toString() != "") { obr[index].dg1[indexDG1].diagnosticRelatedGroup.altText = dg1Seg['DG1.8']['DG1.8.5']; }
				if (dg1Seg['DG1.8']['DG1.8.6'].toString() != "") { obr[index].dg1[indexDG1].diagnosticRelatedGroup.altCodingSystem = dg1Seg['DG1.8']['DG1.8.6']; }
				if (Object.keys(obr[index].dg1[indexDG1].diagnosticRelatedGroup).length == 0) {
					delete obr[index].dg1[indexDG1].diagnosticRelatedGroup;
				}

				// DG1.9, drgApprovalIndicator
				if (dg1Seg['DG1.9']['DG1.9.1'].toString() != "") { obr[index].dg1[indexDG1].drgApprovalIndicator = dg1Seg['DG1.9']['DG1.9.1']; }
						
				// DG1.10, drgGrouperReviewCode
				if (dg1Seg['DG1.10']['DG1.10.1'].toString() != "") { obr[index].dg1[indexDG1].drgGrouperReviewCode = dg1Seg['DG1.10']['DG1.10.1']; }
						
				// DG1.11, outlierType
				obr[index].dg1[indexDG1].outlierType = {};
				if (dg1Seg['DG1.11']['DG1.11.1'].toString() != "") { obr[index].dg1[indexDG1].outlierType.id = dg1Seg['DG1.11']['DG1.11.1']; }
				if (dg1Seg['DG1.11']['DG1.11.2'].toString() != "") { obr[index].dg1[indexDG1].outlierType.text = dg1Seg['DG1.11']['DG1.11.2']; }
				if (dg1Seg['DG1.11']['DG1.11.3'].toString() != "") { obr[index].dg1[indexDG1].outlierType.codingSystem = dg1Seg['DG1.11']['DG1.11.3']; }
				if (dg1Seg['DG1.11']['DG1.11.4'].toString() != "") { obr[index].dg1[indexDG1].outlierType.altId = dg1Seg['DG1.11']['DG1.11.4']; }
				if (dg1Seg['DG1.11']['DG1.11.5'].toString() != "") { obr[index].dg1[indexDG1].outlierType.altText = dg1Seg['DG1.11']['DG1.11.5']; }
				if (dg1Seg['DG1.11']['DG1.11.6'].toString() != "") { obr[index].dg1[indexDG1].outlierType.altCodingSystem = dg1Seg['DG1.11']['DG1.11.6']; }
				if (Object.keys(obr[index].dg1[indexDG1].outlierType).length == 0) {
					delete obr[index].dg1[indexDG1].outlierType;
				}
				// DG1.12, outlierDays
				if (dg1Seg['DG1.12']['DG1.12.1'].toString() != "") { obr[index].dg1[indexDG1].outlierDays = dg1Seg['DG1.12']['DG1.12.1']; }
						
				// DG1.13, outlierCost
				obr[index].dg1[indexDG1].outlierCost = {};
				obr[index].dg1[indexDG1].outlierCost.price = {};
				if (dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.1'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.price.quantity = dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.1']; }
				if (dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.2'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.price.denomination = dg1Seg['DG1.13']['DG1.13.1']['DG1.13.1.2']; }
				if (Object.keys(obr[index].dg1[indexDG1].outlierCost.price).length == 0) {
					delete obr[index].dg1[indexDG1].outlierCost.price;
				}
				if (dg1Seg['DG1.13']['DG1.13.2'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.priceType = dg1Seg['DG1.13']['DG1.13.2']; }
				if (dg1Seg['DG1.13']['DG1.13.3'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.fromValue = dg1Seg['DG1.13']['DG1.13.3']; }
				if (dg1Seg['DG1.13']['DG1.13.4'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.toValue = dg1Seg['DG1.13']['DG1.13.4']; }
				if (dg1Seg['DG1.13']['DG1.13.5'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeUnits = dg1Seg['DG1.13']['DG1.13.5']; }
				obr[index].dg1[indexDG1].outlierCost.rangeType = {};
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.1'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeType.id = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.1']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.2'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeType.text = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.2']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.3'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeType.codingSystem = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.3']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.4'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeType.altId = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.4']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.5'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeType.altText = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.5']; }
				if (dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.6'].toString() != "") { obr[index].dg1[indexDG1].outlierCost.rangeType.altCodingSystem = dg1Seg['DG1.13']['DG1.13.6']['DG1.13.6.6']; }
				if (Object.keys(obr[index].dg1[indexDG1].outlierCost.rangeType).length == 0) {
					delete obr[index].dg1[indexDG1].outlierCost.rangeType;
				}
				if (Object.keys(obr[index].dg1[indexDG1].outlierCost).length == 0) {
					delete obr[index].dg1[indexDG1].outlierCost;
				}

				// DG1.14, grouperVersionAndType
				if (dg1Seg['DG1.14']['DG1.14.1'].toString() != "") { obr[index].dg1[indexDG1].grouperVersionAndType = dg1Seg['DG1.14']['DG1.14.1']; }
						
				// DG1.15, diagnosisPriority
				if (dg1Seg['DG1.15']['DG1.15.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisPriority = dg1Seg['DG1.15']['DG1.15.1']; }
						
				// DG1.16, diagnosingClinician
				obr[index].dg1[indexDG1].diagnosingClinician = [];
				for each (field in dg1Seg['DG1.16']) {
					var block = {};
					if (field['DG1.16.1'].toString() != "") { block.id = field['DG1.16.1']; }
					if (field['DG1.16.2'].toString() != "") { block.lastName = field['DG1.16.2']; }
					if (field['DG1.16.3'].toString() != "") { block.firstName = field['DG1.16.3']; }
					if (field['DG1.16.4'].toString() != "") { block.middleInitOrName = field['DG1.16.4']; }
					if (field['DG1.16.5'].toString() != "") { block.suffix = field['DG1.16.5']; }
					if (field['DG1.16.6'].toString() != "") { block.prefix = field['DG1.16.6']; }
					if (field['DG1.16.7'].toString() != "") { block.degree = field['DG1.16.7']; }
					if (field['DG1.16.8'].toString() != "") { block.sourceTable = field['DG1.16.8']; }
					block.assigningAuthority = {};
					if (field['DG1.16.9']['DG1.16.9.1'].toString() != "") { block.assigningAuthority.id = field['DG1.16.9']['DG1.16.9.1']; }
					if (field['DG1.16.9']['DG1.16.9.2'].toString() != "") { block.assigningAuthority.universalId = field['DG1.16.9']['DG1.16.9.2']; }
					if (field['DG1.16.9']['DG1.16.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['DG1.16.9']['DG1.16.9.3']; }
					if (Object.keys(block.assigningAuthority).length == 0) {
						delete block.assigningAuthority;
					}
					if (field['DG1.16.10'].toString() != "") { block.nameTypeCode = field['DG1.16.10']; }
					if (field['DG1.16.11'].toString() != "") { block.identifierCheckDigit = field['DG1.16.11']; }
					if (field['DG1.16.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['DG1.16.12']; }
					if (field['DG1.16.13'].toString() != "") { block.identifierTypeCode = field['DG1.16.13']; }
					block.assigningFacility = {};
					if (field['DG1.16.14']['DG1.16.14.1'].toString() != "") { block.assigningFacility.id = field['DG1.16.14']['DG1.16.14.1']; }
					if (field['DG1.16.14']['DG1.16.14.2'].toString() != "") { block.assigningFacility.universalId = field['DG1.16.14']['DG1.16.14.2']; }
					if (field['DG1.16.14']['DG1.16.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['DG1.16.14']['DG1.16.14.3']; }
					if (Object.keys(block.assigningFacility).length == 0) {
						delete block.assigningFacility;
					}
					if (Object.keys(block).length > 0) {
						obr[index].dg1[indexDG1].diagnosingClinician.push(block);
					}
				}
				if (obr[index].dg1[indexDG1].diagnosingClinician.length == 0) {
					delete obr[index].dg1[indexDG1].diagnosingClinician;
				}

				// DG1.17, diagnosisClassification
				if (dg1Seg['DG1.17']['DG1.17.1'].toString() != "") { obr[index].dg1[indexDG1].diagnosisClassification = dg1Seg['DG1.17']['DG1.17.1']; }
						
				// DG1.18, confidentialIndicator
				if (dg1Seg['DG1.18']['DG1.18.1'].toString() != "") { obr[index].dg1[indexDG1].confidentialIndicator = dg1Seg['DG1.18']['DG1.18.1']; }
						
				// DG1.19, attestationDateTime
				if (dg1Seg['DG1.19']['DG1.19.1'].toString() != "") { obr[index].dg1[indexDG1].attestationDateTime = dg1Seg['DG1.19']['DG1.19.1']; }

				// clean up DG1 and increment index
				if (Object.keys(obr[index].dg1[indexDG1]).length == 0) {
					delete obr[index].dg1[indexDG1];
				} else {
					indexDG1++;
				}
				
			}
		}

		// OBX (OBR for ORM)
		var obxGroup = getSegmentsAfter(msg,seg,'OBX',true);
		if (obxGroup.length > 0) {
			obr[index].obx = [];
			var indexOBX = 0;
			for each (obxSeg in obxGroup) {
				obr[index].obx[indexOBX] = {};

				// OBX.1, setId
				if (obxSeg['OBX.1']['OBX.1.1'].toString() != "") { obr[index].obx[indexOBX].setId = obxSeg['OBX.1']['OBX.1.1']; }

				// OBX.2, valueType
				if (obxSeg['OBX.2']['OBX.2.1'].toString() != "") { obr[index].obx[indexOBX].valueType = obxSeg['OBX.2']['OBX.2.1']; }
				
				// OBX.3, identifier
				obr[index].obx[indexOBX].identifier = {};
				if (obxSeg['OBX.3']['OBX.3.1'].toString() != "") { obr[index].obx[indexOBX].identifier.id = obxSeg['OBX.3']['OBX.3.1']; }
				if (obxSeg['OBX.3']['OBX.3.2'].toString() != "") { obr[index].obx[indexOBX].identifier.text = obxSeg['OBX.3']['OBX.3.2']; }
				if (obxSeg['OBX.3']['OBX.3.3'].toString() != "") { obr[index].obx[indexOBX].identifier.codingSystem = obxSeg['OBX.3']['OBX.3.3']; }
				if (obxSeg['OBX.3']['OBX.3.4'].toString() != "") { obr[index].obx[indexOBX].identifier.altId = obxSeg['OBX.3']['OBX.3.4']; }
				if (obxSeg['OBX.3']['OBX.3.5'].toString() != "") { obr[index].obx[indexOBX].identifier.altText = obxSeg['OBX.3']['OBX.3.5']; }
				if (obxSeg['OBX.3']['OBX.3.6'].toString() != "") { obr[index].obx[indexOBX].identifier.altCodingSystem = obxSeg['OBX.3']['OBX.3.6']; }
				if (Object.keys(obr[index].obx[indexOBX].identifier).length == 0) {
					delete obr[index].obx[indexOBX].identifier;
				}

				// OBX.4, subId
				if (obxSeg['OBX.4']['OBX.4.1'].toString() != "") { obr[index].obx[indexOBX].subId = obxSeg['OBX.4']['OBX.4.1']; }
				
				// OBX.5, observationValue
				obr[index].obx[indexOBX].observationValue = [];
				for each (field in obxSeg['OBX.5']) {
					if (field['OBX.5.1'].toString() != "") { 
						obr[index].obx[indexOBX].observationValue.push(field['OBX.5.1']); 
					}
				}

				// OBX.6, units
				obr[index].obx[indexOBX].units = {};
				if (obxSeg['OBX.6']['OBX.6.1'].toString() != "") { obr[index].obx[indexOBX].units.id = obxSeg['OBX.6']['OBX.6.1']; }
				if (obxSeg['OBX.6']['OBX.6.2'].toString() != "") { obr[index].obx[indexOBX].units.text = obxSeg['OBX.6']['OBX.6.2']; }
				if (obxSeg['OBX.6']['OBX.6.3'].toString() != "") { obr[index].obx[indexOBX].units.codingSystem = obxSeg['OBX.6']['OBX.6.3']; }
				if (obxSeg['OBX.6']['OBX.6.4'].toString() != "") { obr[index].obx[indexOBX].units.altId = obxSeg['OBX.6']['OBX.6.4']; }
				if (obxSeg['OBX.6']['OBX.6.5'].toString() != "") { obr[index].obx[indexOBX].units.altText = obxSeg['OBX.6']['OBX.6.5']; }
				if (obxSeg['OBX.6']['OBX.6.6'].toString() != "") { obr[index].obx[indexOBX].units.altCodingSystem = obxSeg['OBX.6']['OBX.6.6']; }
				if (Object.keys(obr[index].obx[indexOBX].units).length == 0) {
					delete obr[index].obx[indexOBX].units;
				}

				// OBX.7, referenceRange
				if (obxSeg['OBX.7']['OBX.7.1'].toString() != "") { obr[index].obx[indexOBX].referenceRange = obxSeg['OBX.7']['OBX.7.1']; }
				
				// OBX.8, abnormalFlag
				obr[index].obx[indexOBX].abnormalFlag = [];
				for each (field in obxSeg['OBX.9']) {
					if (field['OBX.9.1'].toString() != "") { 
						obr[index].obx[indexOBX].abnormalFlag.push(field['OBX.9.1']); 
					}
				}

				// OBX.9, probability
				if (obxSeg['OBX.9']['OBX.9.1'].toString() != "") { obr[index].obx[indexOBX].probability = obxSeg['OBX.9']['OBX.9.1']; }
				
				// OBX.10, natureOfAbnormal
				obr[index].obx[indexOBX].natureOfAbnormal = [];
				for each (field in obxSeg['OBX.10']) {
					if (field['OBX.10.1'].toString() != "") { 
						obr[index].obx[indexOBX].natureOfAbnormal.push(field['OBX.10.1']); 
					}
				}

				// OBX.11, observeResultStatus
				if (obxSeg['OBX.11']['OBX.11.1'].toString() != "") { obr[index].obx[indexOBX].observeResultStatus = obxSeg['OBX.11']['OBX.11.1']; }
				
				// OBX.12, effectiveDateLastNormalValue
				if (obxSeg['OBX.12']['OBX.12.1'].toString() != "") { obr[index].obx[indexOBX].effectiveDateLastNormalValue = obxSeg['OBX.12']['OBX.12.1']; }
				
				// OBX.13, definedAccessChecks
				if (obxSeg['OBX.13']['OBX.13.1'].toString() != "") { obr[index].obx[indexOBX].definedAccessChecks = obxSeg['OBX.13']['OBX.13.1']; }
				
				// OBX.14, observationDateTime
				if (obxSeg['OBX.14']['OBX.14.1'].toString() != "") { obr[index].obx[indexOBX].observationDateTime = obxSeg['OBX.14']['OBX.14.1']; }
				
				// OBX.15, producersId
				obr[index].obx[indexOBX].producersId = {};
				if (obxSeg['OBX.15']['OBX.15.1'].toString() != "") { obr[index].obx[indexOBX].producersId.id = obxSeg['OBX.15']['OBX.15.1']; }
				if (obxSeg['OBX.15']['OBX.15.2'].toString() != "") { obr[index].obx[indexOBX].producersId.text = obxSeg['OBX.15']['OBX.15.2']; }
				if (obxSeg['OBX.15']['OBX.15.3'].toString() != "") { obr[index].obx[indexOBX].producersId.codingSystem = obxSeg['OBX.15']['OBX.15.3']; }
				if (obxSeg['OBX.15']['OBX.15.4'].toString() != "") { obr[index].obx[indexOBX].producersId.altId = obxSeg['OBX.15']['OBX.15.4']; }
				if (obxSeg['OBX.15']['OBX.15.5'].toString() != "") { obr[index].obx[indexOBX].producersId.altText = obxSeg['OBX.15']['OBX.15.5']; }
				if (obxSeg['OBX.15']['OBX.15.6'].toString() != "") { obr[index].obx[indexOBX].producersId.altCodingSystem = obxSeg['OBX.15']['OBX.15.6']; }
				if (Object.keys(obr[index].obx[indexOBX].producersId).length == 0) {
					delete obr[index].obx[indexOBX].producersId;
				}

				// OBX.16, responsibleObserver
				obr[index].obx[indexOBX].responsibleObserver = {};
				if (obxSeg['OBX.16']['OBX.16.1'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.id = obxSeg['OBX.16']['OBX.16.1']; }
				if (obxSeg['OBX.16']['OBX.16.2'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.lastName = obxSeg['OBX.16']['OBX.16.2']; }
				if (obxSeg['OBX.16']['OBX.16.3'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.firstName = obxSeg['OBX.16']['OBX.16.3']; }
				if (obxSeg['OBX.16']['OBX.16.4'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.middleInitOrName = obxSeg['OBX.16']['OBX.16.4']; }
				if (obxSeg['OBX.16']['OBX.16.5'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.suffix = obxSeg['OBX.16']['OBX.16.5']; }
				if (obxSeg['OBX.16']['OBX.16.6'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.prefix = obxSeg['OBX.16']['OBX.16.6']; }
				if (obxSeg['OBX.16']['OBX.16.7'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.degree = obxSeg['OBX.16']['OBX.16.7']; }
				if (obxSeg['OBX.16']['OBX.16.8'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.sourceTable = obxSeg['OBX.16']['OBX.16.8']; }
				obr[index].obx[indexOBX].responsibleObserver.assigningAuthority = {};
				if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.assigningAuthority.id = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.1']; }
				if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.assigningAuthority.universalId = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.2']; }
				if (obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.assigningAuthority.universalIdType = obxSeg['OBX.16']['OBX.16.9']['OBX.16.9.3']; }
				if (Object.keys(obr[index].obx[indexOBX].responsibleObserver.assigningAuthority).length == 0) {
					delete obr[index].obx[indexOBX].responsibleObserver.assigningAuthority;
				}
				if (obxSeg['OBX.16']['OBX.16.10'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.nameTypeCode = obxSeg['OBX.16']['OBX.16.10']; }
				if (obxSeg['OBX.16']['OBX.16.11'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.identifierCheckDigit = obxSeg['OBX.16']['OBX.16.11']; }
				if (obxSeg['OBX.16']['OBX.16.12'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.codeIdentifyingCheckDigitScheme = obxSeg['OBX.16']['OBX.16.12']; }
				if (obxSeg['OBX.16']['OBX.16.13'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.identifierTypeCode = obxSeg['OBX.16']['OBX.16.13']; }
				obr[index].obx[indexOBX].responsibleObserver.assigningFacility = {};
				if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.assigningFacility.id = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.1']; }
				if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.assigningFacility.universalId = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.2']; }
				if (obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3'].toString() != "") { obr[index].obx[indexOBX].responsibleObserver.assigningFacility.universalIdType = obxSeg['OBX.16']['OBX.16.14']['OBX.16.14.3']; }
				if (Object.keys(obr[index].obx[indexOBX].responsibleObserver.assigningFacility).length == 0) {
					delete obr[index].obx[indexOBX].responsibleObserver.assigningFacility;
				}
				if (Object.keys(obr[index].obx[indexOBX].responsibleObserver).length == 0) {
					delete obr[index].obx[indexOBX].responsibleObserver;
				}

				// OBX.17, observationMethod
				obr[index].obx[indexOBX].observationMethod = [];
				for each (field in obxSeg['OBX.17']) {
					var block = {};
					if (field['OBX.17.1'].toString() != "") { block.id = field['OBX.17.1']; }
					if (field['OBX.17.2'].toString() != "") { block.text = field['OBX.17.2']; }
					if (field['OBX.17.3'].toString() != "") { block.codingSystem = field['OBX.17.3']; }
					if (field['OBX.17.4'].toString() != "") { block.altId = field['OBX.17.4']; }
					if (field['OBX.17.5'].toString() != "") { block.altText = field['OBX.17.5']; }
					if (field['OBX.17.6'].toString() != "") { block.altCodingSystem = field['OBX.17.6']; }
					if (Object.keys(block).length > 0) {
						obr[index].obx[indexOBX].observationMethod.push(block);
					}
				}
				if (obr[index].obx[indexOBX].observationMethod.length == 0) {
					delete obr[index].obx[indexOBX].observationMethod;
				}

				// NTE (OBX)
				var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
				if (nteGroup.length > 0) {
					obr[index].obx[indexOBX].nte = [];
					var indexNTE = 0;
					for each (nteSeg in nteGroup) {
						obr[index].obx[indexOBX].nte[indexNTE] = {};

						// NTE.1, setId
						if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { obr[index].obx[indexOBX].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

						// NTE.2, sourceOfComment
						if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { obr[index].obx[indexOBX].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

						// NTE.3, comment
						obr[index].obx[indexOBX].nte[indexNTE].comment = [];
						for each (field in nteSeg['NTE.3']) {
							var block = {};
							if (field['NTE.3.1'].toString() != "") { 
								obr[index].obx[indexOBX].nte[indexNTE].comment.push(field['NTE.3.1']);
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
				if (Object.keys(obr[index].obx[indexOBX]).length == 0) {
					delete obr[index].obx[indexOBX];
				} else {
					indexOBX++;
				}
			}
		}
		
		// clean up OBR and increment index
		if (Object.keys(obr[index]).length == 0) {
			delete obr[index];
		} else {
			index++;
		}
	}
}