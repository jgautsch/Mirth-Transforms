// DB1
var db1;
if (msg['DB1'].length() > 0) {
	db1 = [];
	var index = 0;
	for each (seg in msg.DB1) {
		db1[index] = {};

		// DB1.1, setID
		if (seg['DB1.1']['DB1.1.1'].toString() != "") { db1[index].setID =  seg['DB1.1']['DB1.1.1']; }

		// DB1.2, disabledPersonCode
		if (seg['DB1.2']['DB1.2.1'].toString() != "") { db1[index].disabledPersonCode =  seg['DB1.2']['DB1.2.1']; }
		
		// DB1.3, disabledPersonIdentifier
		db1[index].disabledPersonIdentifier = [];
		for each (field in seg['DB1.3']) {
			var block = {};
			if (field['DB1.3.1'].toString() != "") { block.id =  field['DB1.3.1']; }
			if (field['DB1.3.2'].toString() != "") { block.identifierCheckDigit =  field['DB1.3.2']; }
			if (field['DB1.3.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme =  field['DB1.3.3']; }
			block.assigningAuthority = {};
			if (field['DB1.3.4']['DB1.3.4.1'].toString() != "") { block.assigningAuthority.nameSpaceId =  field['DB1.3.4']['DB1.3.4.1']; }
			if (field['DB1.3.4']['DB1.3.4.2'].toString() != "") { block.assigningAuthority.universalId =  field['DB1.3.4']['DB1.3.4.2']; }
			if (field['DB1.3.4']['DB1.3.4.3'].toString() != "") { block.assigningAuthority.universalIdType =  field['DB1.3.4']['DB1.3.4.3']; }
			if (Object.keys(block.assigningAuth).length == 0) {
				if (field['DB1.3.4'].toString() != "") { block.assigningAuthority.nameSpaceId = field['DB1.3.4']; }
				else delete block.assigningAuth; 
			}
			if (field['DB1.3.5'].toString() != "") { block.idTypeCode =  field['DB1.3.5']; }
			block.assigningFacility = {};
			if (field['DB1.3.6']['DB1.3.6.1'].toString() != "") { block.assigningFacility.nameSpaceId =  field['DB1.3.6']['DB1.3.6.1']; }
			if (field['DB1.3.6']['DB1.3.6.2'].toString() != "") { block.assigningFacility.universalId =  field['DB1.3.6']['DB1.3.6.2']; }
			if (field['DB1.3.6']['DB1.3.6.3'].toString() != "") { block.assigningFacility.universalIdType =  field['DB1.3.6']['DB1.3.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['DB1.3.6'].toString() != "") { block.assigningFacility.nameSpaceId = field['DB1.3.6']; }
				else delete block.assigningFacility; 
			}
			if (Object.keys(block).length > 0) {
				db1[index].disabledPersonIdentifier.push(block);
			}
		}
		if (db1[index].disabledPersonIdentifier.length == 0) {
			delete db1[index].disabledPersonIdentifier;
		}

		// DB1.4, disabledIndicator
		if (seg['DB1.4']['DB1.4.1'].toString() != "") { db1[index].disabledIndicator =  seg['DB1.4']['DB1.4.1']; }
		
		// DB1.5, disabilityStartDate
		if (seg['DB1.5']['DB1.5.1'].toString() != "") { db1[index].disabilityStartDate =  seg['DB1.5']['DB1.5.1']; }
		
		// DB1.6, disabilityEndDate
		if (seg['DB1.6']['DB1.6.1'].toString() != "") { db1[index].disabilityEndDate =  seg['DB1.6']['DB1.6.1']; }
		
		// DB1.7, disabilityReturnToWorkDate
		if (seg['DB1.7']['DB1.7.1'].toString() != "") { db1[index].disabilityReturnToWorkDate =  seg['DB1.7']['DB1.7.1']; }
		
		// DB1.8, disabilityUnableToWorkDate
		if (seg['DB1.8']['DB1.8.1'].toString() != "") { db1[index].disabilityUnableToWorkDate =  seg['DB1.8']['DB1.8.1']; }

		// clean up DB1 and increment index
		if (Object.keys(db1[index]).length == 0) {
			delete db1[index];
		} else {
			index++;
		}
	}
}