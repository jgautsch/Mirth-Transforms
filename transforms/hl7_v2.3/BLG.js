// BLG
var blg;
if (msg['BLG'].length() > 0) {
	blg = [];
	var index = 0;
	for each (seg in msg.BLG) {
		blg[index] = {};

		// BLG.1, whenToCharge
		blg[index].whenToCharge = {};
		if (seg['BLG.1']['BLG.1.1'].toString() != "") { blg[index].whenToCharge.whenToChargeCode = seg['BLG.1']['BLG.1.1']; }
		if (seg['BLG.1']['BLG.1.2'].toString() != "") { blg[index].whenToCharge.dateTime = seg['BLG.1']['BLG.1.2']; }
		if (Object.keys(blg[index].whenToCharge).length == 0) {
			delete blg[index].whenToCharge;
		}

		// BLG.2, chargeType
		if (seg['BLG.2']['BLG.2.1'].toString() != "") { blg[index].chargeType =  seg['BLG.2']['BLG.2.1'];}

		// BLG.3, accountId
		blg[index].accountId = {};
		if (seg['BLG.3']['BLG.3.1'].toString() != "") { blg[index].accountId.id = seg['BLG.3']['BLG.3.1']; }
		if (seg['BLG.3']['BLG.3.2'].toString() != "") { blg[index].accountId.identifierCheckDigit = seg['BLG.3']['BLG.3.2']; }
		if (seg['BLG.3']['BLG.3.3'].toString() != "") { blg[index].accountId.codeIdentifyingCheckDigitScheme = seg['BLG.3']['BLG.3.3']; }
		blg[index].accountId.assigningAuthority = {};
		if (seg['BLG.3']['BLG.3.4']['BLG.3.4.1'].toString() != "") { blg[index].accountId.assigningAuthority.namespaceId = seg['BLG.3']['BLG.3.4']['BLG.3.4.1']; }
		if (seg['BLG.3']['BLG.3.4']['BLG.3.4.2'].toString() != "") { blg[index].accountId.assigningAuthority.universalId = seg['BLG.3']['BLG.3.4']['BLG.3.4.2']; }
		if (seg['BLG.3']['BLG.3.4']['BLG.3.4.3'].toString() != "") { blg[index].accountId.assigningAuthority.universalIdType = seg['BLG.3']['BLG.3.4']['BLG.3.4.3']; }
		if (Object.keys(blg[index].accountId.assigningAuthority).length == 0) {
			if (seg['BLG.3']['BLG.3.4'].toString() != "") { blg[index].accountId.assigningAuthority.namespaceId = seg['BLG.3']['BLG.3.4']; }
			else delete blg[index].accountId.assigningAuthority;
		}
		if (Object.keys(blg[index].accountId).length == 0) {
			delete blg[index].accountId;
		}

		// clean up BLG and increment index
		if (Object.keys(blg[index]).length == 0) {
			delete blg[index];
		} else {
			index++;
		}
	}
}