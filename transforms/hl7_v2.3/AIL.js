// AIL
var ail;
if (msg['AIL'].length() > 0) {
	ail = [];
	var index = 0;
	for each (seg in msg.AIL) {
		ail[index] = {};

		// AIL.1, setId
		if (seg['AIL.1']['AIL.1.1'].toString() != "") { ail[index].setId = seg['AIL.1']['AIL.1.1']; }

		// AIL.2, segmentActionCode
		if (seg['AIL.2']['AIL.2.1'].toString() != "") { ail[index].segmentActionCode = seg['AIL.2']['AIL.2.1']; }

		// AIL.3, locationResourceId
		ail[index].locationResourceId = {};
		if (seg['AIL.3']['AIL.3.1'].toString() != "") { ail[index].locationResourceId.pointOfCare = seg['AIL.3']['AIL.3.1']; }
		if (seg['AIL.3']['AIL.3.2'].toString() != "") { ail[index].locationResourceId.room = seg['AIL.3']['AIL.3.2']; }
		if (seg['AIL.3']['AIL.3.3'].toString() != "") { ail[index].locationResourceId.bed = seg['AIL.3']['AIL.3.3']; }
		ail[index].locationResourceId.facility = {};
		if (seg['AIL.3']['AIL.3.4']['AIL.3.4.1'].toString() != "") { ail[index].locationResourceId.facility.nameSpaceId =  seg['AIL.3']['AIL.3.4']['AIL.3.4.1']; }
		if (seg['AIL.3']['AIL.3.4']['AIL.3.4.2'].toString() != "") { ail[index].locationResourceId.facility.universalId =  seg['AIL.3']['AIL.3.4']['AIL.3.4.2']; }
		if (seg['AIL.3']['AIL.3.4']['AIL.3.4.3'].toString() != "") { ail[index].locationResourceId.facility.universalIdType =  seg['AIL.3']['AIL.3.4']['AIL.3.4.3']; }
		if (new Object.keys(ail[index].locationResourceId.facility).length == 0) {
			delete ail[index].locationResourceId.facility;
		}
		if (seg['AIL.3']['AIL.3.5'].toString() != "") { ail[index].locationResourceId.locationStatus = seg['AIL.3']['AIL.3.5']; }
		if (seg['AIL.3']['AIL.3.6'].toString() != "") { ail[index].locationResourceId.personLocationType = seg['AIL.3']['AIL.3.6']; }
		if (seg['AIL.3']['AIL.3.7'].toString() != "") { ail[index].locationResourceId.building = seg['AIL.3']['AIL.3.7']; }
		if (seg['AIL.3']['AIL.3.8'].toString() != "") { ail[index].locationResourceId.floor = seg['AIL.3']['AIL.3.8']; }
		if (seg['AIL.3']['AIL.3.9'].toString() != "") { ail[index].locationResourceId.locationDescription = seg['AIL.3']['AIL.3.9']; }
		if (Object.keys(ail[index].locationResourceId).length == 0) {
			delete ail[index].locationResourceId;
		}

		// AIL.4, locationType
		ail[index].locationType = {};
		if (seg['AIL.4']['AIL.4.1'].toString() != "") { ail[index].locationType.id = seg['AIL.4']['AIL.4.1']; }
		if (seg['AIL.4']['AIL.4.2'].toString() != "") { ail[index].locationType.text = seg['AIL.4']['AIL.4.2']; }
		if (seg['AIL.4']['AIL.4.3'].toString() != "") { ail[index].locationType.codingSystem = seg['AIL.4']['AIL.4.3']; }
		if (seg['AIL.4']['AIL.4.4'].toString() != "") { ail[index].locationType.altId = seg['AIL.4']['AIL.4.4']; }
		if (seg['AIL.4']['AIL.4.5'].toString() != "") { ail[index].locationType.altText = seg['AIL.4']['AIL.4.5']; }
		if (seg['AIL.4']['AIL.4.6'].toString() != "") { ail[index].locationType.altCodingSystem = seg['AIL.4']['AIL.4.6']; }
		if (Object.keys(ail[index].locationType).length == 0) {
			delete ail[index].locationType;
		}
		
		// AIL.5, locationGroup
		ail[index].locationType = {};
		if (seg['AIL.5']['AIL.5.1'].toString() != "") { ail[index].locationGroup.id = seg['AIL.5']['AIL.5.1']; }
		if (seg['AIL.5']['AIL.5.2'].toString() != "") { ail[index].locationGroup.text = seg['AIL.5']['AIL.5.2']; }
		if (seg['AIL.5']['AIL.5.3'].toString() != "") { ail[index].locationGroup.codingSystem = seg['AIL.5']['AIL.5.3']; }
		if (seg['AIL.5']['AIL.5.4'].toString() != "") { ail[index].locationGroup.altId = seg['AIL.5']['AIL.5.4']; }
		if (seg['AIL.5']['AIL.5.5'].toString() != "") { ail[index].locationGroup.altText = seg['AIL.5']['AIL.5.5']; }
		if (seg['AIL.5']['AIL.5.6'].toString() != "") { ail[index].locationGroup.altCodingSystem = seg['AIL.5']['AIL.5.6']; }
		if (Object.keys(ail[index].locationGroup).length == 0) {
			delete ail[index].locationGroup;
		}

		// AIL.6, startDateTime
		if (seg['AIL.6']['AIL.6.1'].toString() != "") { ail[index].startDateTime = seg['AIL.6']['AIL.6.1']; }

		// AIL.7, startDateTimeOffset
		if (seg['AIL.7']['AIL.7.1'].toString() != "") { ail[index].startDateTimeOffset = seg['AIL.7']['AIL.7.1']; }

		// AIL.8, startDateTimeOffsetUnits
		ail[index].startDateTimeOffsetUnits = {};
		if (seg['AIL.8']['AIL.8.1'].toString() != "") { ail[index].startDateTimeOffsetUnits.id = seg['AIL.8']['AIL.8.1']; }
		if (seg['AIL.8']['AIL.8.2'].toString() != "") { ail[index].startDateTimeOffsetUnits.text = seg['AIL.8']['AIL.8.2']; }
		if (seg['AIL.8']['AIL.8.3'].toString() != "") { ail[index].startDateTimeOffsetUnits.codingSystem = seg['AIL.8']['AIL.8.3']; }
		if (seg['AIL.8']['AIL.8.4'].toString() != "") { ail[index].startDateTimeOffsetUnits.altId = seg['AIL.8']['AIL.8.4']; }
		if (seg['AIL.8']['AIL.8.5'].toString() != "") { ail[index].startDateTimeOffsetUnits.altText = seg['AIL.8']['AIL.8.5']; }
		if (seg['AIL.8']['AIL.8.6'].toString() != "") { ail[index].startDateTimeOffsetUnits.altCodingSystem = seg['AIL.8']['AIL.8.6']; }
		if (Object.keys(ail[index].startDateTimeOffsetUnits).length == 0) {
			delete ail[index].startDateTimeOffsetUnits;
		}

		// AIL.9, duration
		if (seg['AIL.9']['AIL.9.1'].toString() != "") { ail[index].duration = seg['AIL.9']['AIL.9.1']; }

		// AIL.10, durationUnits
		ail[index].durationUnits = {};
		if (seg['AIL.10']['AIL.10.1'].toString() != "") { ail[index].durationUnits.id = seg['AIL.10']['AIL.10.1']; }
		if (seg['AIL.10']['AIL.10.2'].toString() != "") { ail[index].durationUnits.text = seg['AIL.10']['AIL.10.2']; }
		if (seg['AIL.10']['AIL.10.3'].toString() != "") { ail[index].durationUnits.codingSystem = seg['AIL.10']['AIL.10.3']; }
		if (seg['AIL.10']['AIL.10.4'].toString() != "") { ail[index].durationUnits.altId = seg['AIL.10']['AIL.10.4']; }
		if (seg['AIL.10']['AIL.10.5'].toString() != "") { ail[index].durationUnits.altText = seg['AIL.10']['AIL.10.5']; }
		if (seg['AIL.10']['AIL.10.6'].toString() != "") { ail[index].durationUnits.altCodingSystem = seg['AIL.10']['AIL.10.6']; }
		if (Object.keys(ail[index].durationUnits).length == 0) {
			delete ail[index].durationUnits;
		}

		// AIL.11, allowSubstitutionCode
		if (seg['AIL.11']['AIL.11.1'].toString() != "") { ail[index].allowSubstitutionCode = seg['AIL.11']['AIL.11.1']; }

		// AIL.12, fillerStatusCode
		ail[index].fillerStatusCode = {};
		if (seg['AIL.12']['AIL.12.1'].toString() != "") { ail[index].fillerStatusCode.id = seg['AIL.12']['AIL.12.1']; }
		if (seg['AIL.12']['AIL.12.2'].toString() != "") { ail[index].fillerStatusCode.text = seg['AIL.12']['AIL.12.2']; }
		if (seg['AIL.12']['AIL.12.3'].toString() != "") { ail[index].fillerStatusCode.codingSystem = seg['AIL.12']['AIL.12.3']; }
		if (seg['AIL.12']['AIL.12.4'].toString() != "") { ail[index].fillerStatusCode.altId = seg['AIL.12']['AIL.12.4']; }
		if (seg['AIL.12']['AIL.12.5'].toString() != "") { ail[index].fillerStatusCode.altText = seg['AIL.12']['AIL.12.5']; }
		if (seg['AIL.12']['AIL.12.6'].toString() != "") { ail[index].fillerStatusCode.altCodingSystem = seg['AIL.12']['AIL.12.6']; }
		if (Object.keys(ail[index].fillerStatusCode).length == 0) {
			delete ail[index].fillerStatusCode;
		}

		// NTE (AIL)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			ail[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				ail[index]nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { ail[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { ail[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				ail[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						ail[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}

				// clean up NTE and increment index
				if (Object.keys(ail[index].nte[indexNTE]).length == 0) {
					delete ail[index].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// clean up AIL and increment index
		if (Object.keys(ail[index]).length == 0) {
			delete ail[index];
		} else {
			index++;
		}
	}
}