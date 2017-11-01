// AIP
var aip;
if (msg['AIP'].length() > 0) {
	aip = [];
	var index = 0;
	for each (seg in msg.AIP) {
		aip[index] = {};

		// AIP.1, setId
		if (seg['AIP.1']['AIP.1.1'].toString() != "") { aip[index].setId = seg['AIP.1']['AIP.1.1']; }

		// AIP.2, segmentActionCode
		if (seg['AIP.2']['AIP.2.1'].toString() != "") { aip[index].segmentActionCode = seg['AIP.2']['AIP.2.1']; }

		// AIP.3, personnelResourceId
		aip[index].personnelResourceId = {};
		if (seg['AIP.3']['AIP.3.1'].toString() != "") { aip[index].personnelResourceId.pointOfCare = seg['AIP.3']['AIP.3.1']; }
		if (seg['AIP.3']['AIP.3.2'].toString() != "") { aip[index].personnelResourceId.room = seg['AIP.3']['AIP.3.2']; }
		if (seg['AIP.3']['AIP.3.3'].toString() != "") { aip[index].personnelResourceId.bed = seg['AIP.3']['AIP.3.3']; }
		aip[index].personnelResourceId.facility = {};
		if (seg['AIP.3']['AIP.3.4']['AIP.3.4.1'].toString() != "") { aip[index].personnelResourceId.facility.nameSpaceId =  seg['AIP.3']['AIP.3.4']['AIP.3.4.1']; }
		if (seg['AIP.3']['AIP.3.4']['AIP.3.4.2'].toString() != "") { aip[index].personnelResourceId.facility.universalId =  seg['AIP.3']['AIP.3.4']['AIP.3.4.2']; }
		if (seg['AIP.3']['AIP.3.4']['AIP.3.4.3'].toString() != "") { aip[index].personnelResourceId.facility.universalIdType =  seg['AIP.3']['AIP.3.4']['AIP.3.4.3']; }
		if (Object.keys(aip[index].personnelResourceId.facility).length == 0) {
			delete aip[index].personnelResourceId.facility;
		}
		if (seg['AIP.3']['AIP.3.5'].toString() != "") { aip[index].personnelResourceId.locationStatus = seg['AIP.3']['AIP.3.5']; }
		if (seg['AIP.3']['AIP.3.6'].toString() != "") { aip[index].personnelResourceId.personLocationType = seg['AIP.3']['AIP.3.6']; }
		if (seg['AIP.3']['AIP.3.7'].toString() != "") { aip[index].personnelResourceId.building = seg['AIP.3']['AIP.3.7']; }
		if (seg['AIP.3']['AIP.3.8'].toString() != "") { aip[index].personnelResourceId.floor = seg['AIP.3']['AIP.3.8']; }
		if (seg['AIP.3']['AIP.3.9'].toString() != "") { aip[index].personnelResourceId.locationDescription = seg['AIP.3']['AIP.3.9']; }
		if (Object.keys(aip[index].personnelResourceId).length == 0) {
			delete aip[index].personnelResourceId;
		}

		// AIP.4, resourceRole
		aip[index].resourceRole = {};
		if (seg['AIP.4']['AIP.4.1'].toString() != "") { aip[index].resourceRole.id = seg['AIP.4']['AIP.4.1']; }
		if (seg['AIP.4']['AIP.4.2'].toString() != "") { aip[index].resourceRole.text = seg['AIP.4']['AIP.4.2']; }
		if (seg['AIP.4']['AIP.4.3'].toString() != "") { aip[index].resourceRole.codingSystem = seg['AIP.4']['AIP.4.3']; }
		if (seg['AIP.4']['AIP.4.4'].toString() != "") { aip[index].resourceRole.altId = seg['AIP.4']['AIP.4.4']; }
		if (seg['AIP.4']['AIP.4.5'].toString() != "") { aip[index].resourceRole.altText = seg['AIP.4']['AIP.4.5']; }
		if (seg['AIP.4']['AIP.4.6'].toString() != "") { aip[index].resourceRole.altCodingSystem = seg['AIP.4']['AIP.4.6']; }
		if (Object.keys(aip[index].resourceRole).length == 0) {
			delete aip[index].resourceRole;
		}
		
		// AIP.5, resourceGroup
		aip[index].resourceGroup = {};
		if (seg['AIP.5']['AIP.5.1'].toString() != "") { aip[index].resourceGroup.id = seg['AIP.5']['AIP.5.1']; }
		if (seg['AIP.5']['AIP.5.2'].toString() != "") { aip[index].resourceGroup.text = seg['AIP.5']['AIP.5.2']; }
		if (seg['AIP.5']['AIP.5.3'].toString() != "") { aip[index].resourceGroup.codingSystem = seg['AIP.5']['AIP.5.3']; }
		if (seg['AIP.5']['AIP.5.4'].toString() != "") { aip[index].resourceGroup.altId = seg['AIP.5']['AIP.5.4']; }
		if (seg['AIP.5']['AIP.5.5'].toString() != "") { aip[index].resourceGroup.altText = seg['AIP.5']['AIP.5.5']; }
		if (seg['AIP.5']['AIP.5.6'].toString() != "") { aip[index].resourceGroup.altCodingSystem = seg['AIP.5']['AIP.5.6']; }
		if (Object.keys(aip[index].resourceGroup).length == 0) {
			delete aip[index].resourceGroup;
		}

		// AIP.6, startDateTime
		if (seg['AIP.6']['AIP.6.1'].toString() != "") { aip[index].startDateTime = seg['AIP.6']['AIP.6.1']; }

		// AIP.7, startDateTimeOffset
		if (seg['AIP.7']['AIP.7.1'].toString() != "") { aip[index].startDateTimeOffset = seg['AIP.7']['AIP.7.1']; }

		// AIP.8, startDateTimeOffsetUnits
		aip[index].startDateTimeOffsetUnits = {};
		if (seg['AIP.8']['AIP.8.1'].toString() != "") { aip[index].startDateTimeOffsetUnits.id = seg['AIP.8']['AIP.8.1']; }
		if (seg['AIP.8']['AIP.8.2'].toString() != "") { aip[index].startDateTimeOffsetUnits.text = seg['AIP.8']['AIP.8.2']; }
		if (seg['AIP.8']['AIP.8.3'].toString() != "") { aip[index].startDateTimeOffsetUnits.codingSystem = seg['AIP.8']['AIP.8.3']; }
		if (seg['AIP.8']['AIP.8.4'].toString() != "") { aip[index].startDateTimeOffsetUnits.altId = seg['AIP.8']['AIP.8.4']; }
		if (seg['AIP.8']['AIP.8.5'].toString() != "") { aip[index].startDateTimeOffsetUnits.altText = seg['AIP.8']['AIP.8.5']; }
		if (seg['AIP.8']['AIP.8.6'].toString() != "") { aip[index].startDateTimeOffsetUnits.altCodingSystem = seg['AIP.8']['AIP.8.6']; }
		if (Object.keys(aip[index].startDateTimeOffsetUnits).length == 0) {
			delete aip[index].startDateTimeOffsetUnits;
		}

		// AIP.9, duration
		if (seg['AIP.9']['AIP.9.1'].toString() != "") { aip[index].duration = seg['AIP.9']['AIP.9.1']; }

		// AIP.10, durationUnits
		aip[index].durationUnits = {};
		if (seg['AIP.10']['AIP.10.1'].toString() != "") { aip[index].durationUnits.id = seg['AIP.10']['AIP.10.1']; }
		if (seg['AIP.10']['AIP.10.2'].toString() != "") { aip[index].durationUnits.text = seg['AIP.10']['AIP.10.2']; }
		if (seg['AIP.10']['AIP.10.3'].toString() != "") { aip[index].durationUnits.codingSystem = seg['AIP.10']['AIP.10.3']; }
		if (seg['AIP.10']['AIP.10.4'].toString() != "") { aip[index].durationUnits.altId = seg['AIP.10']['AIP.10.4']; }
		if (seg['AIP.10']['AIP.10.5'].toString() != "") { aip[index].durationUnits.altText = seg['AIP.10']['AIP.10.5']; }
		if (seg['AIP.10']['AIP.10.6'].toString() != "") { aip[index].durationUnits.altCodingSystem = seg['AIP.10']['AIP.10.6']; }
		if (Object.keys(aip[index].durationUnits).length == 0) {
			delete aip[index].durationUnits;
		}

		// AIP.11, allowSubstitutionCode
		if (seg['AIP.11']['AIP.11.1'].toString() != "") { aip[index].allowSubstitutionCode = seg['AIP.11']['AIP.11.1']; }

		// AIP.12, fillerStatusCode
		aip[index].fillerStatusCode = {};
		if (seg['AIP.12']['AIP.12.1'].toString() != "") { aip[index].fillerStatusCode.id = seg['AIP.12']['AIP.12.1']; }
		if (seg['AIP.12']['AIP.12.2'].toString() != "") { aip[index].fillerStatusCode.text = seg['AIP.12']['AIP.12.2']; }
		if (seg['AIP.12']['AIP.12.3'].toString() != "") { aip[index].fillerStatusCode.codingSystem = seg['AIP.12']['AIP.12.3']; }
		if (seg['AIP.12']['AIP.12.4'].toString() != "") { aip[index].fillerStatusCode.altId = seg['AIP.12']['AIP.12.4']; }
		if (seg['AIP.12']['AIP.12.5'].toString() != "") { aip[index].fillerStatusCode.altText = seg['AIP.12']['AIP.12.5']; }
		if (seg['AIP.12']['AIP.12.6'].toString() != "") { aip[index].fillerStatusCode.altCodingSystem = seg['AIP.12']['AIP.12.6']; }
		if (Object.keys(aip[index].fillerStatusCode).length == 0) {
			delete aip[index].fillerStatusCode;
		}

		// NTE (AIP)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			aip[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				aip[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { aip[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { aip[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				aip[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						aip[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				
				// clean up NTE and increment index
				if (Object.keys(aip[index].nte[indexNTE]).length == 0) {
					delete aip[index].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
			
		}

		// clean up AIP and increment index
		if (Object.keys(aip[index]).length == 0) {
			delete aip[index];
		} else {
			index++;
		}
	}
}
