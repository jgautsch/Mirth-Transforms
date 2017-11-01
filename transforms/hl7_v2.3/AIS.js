// AIS
var ais;
if (msg['AIS'].length() > 0) {
	ais = [];
	var index = 0;
	for each (seg in msg.AIS) {
		ais[index] = {};

		// AIS.1, setId
		if (seg['AIS.1']['AIS.1.1'].toString() != "") { ais[index].setId = seg['AIS.1']['AIS.1.1']; }

		// AIS.2, segmentActionCode
		if (seg['AIS.2']['AIS.2.1'].toString() != "") { ais[index].segmentActionCode = seg['AIS.2']['AIS.2.1']; }

		// AIS.3, universalServiceId
		ais[index].universalServiceId = {};
		if (seg['AIS.3']['AIS.3.1'].toString() != "") { ais[index].universalServiceId.id = seg['AIS.3']['AIS.3.1']; }
		if (seg['AIS.3']['AIS.3.2'].toString() != "") { ais[index].universalServiceId.text = seg['AIS.3']['AIS.3.2']; }
		if (seg['AIS.3']['AIS.3.3'].toString() != "") { ais[index].universalServiceId.codingSystem = seg['AIS.3']['AIS.3.3']; }
		if (seg['AIS.3']['AIS.3.4'].toString() != "") { ais[index].universalServiceId.altId = seg['AIS.3']['AIS.3.4']; }
		if (seg['AIS.3']['AIS.3.5'].toString() != "") { ais[index].universalServiceId.altText = seg['AIS.3']['AIS.3.5']; }
		if (seg['AIS.3']['AIS.3.6'].toString() != "") { ais[index].universalServiceId.altCodingSystem = seg['AIS.3']['AIS.3.6']; }
		if (Object.keys(ais[index].universalServiceId).length == 0) {
			delete ais[index].universalServiceId;
		}

		// AIS.4, startDateTime
		if (seg['AIS.4']['AIS.4.1'].toString() != "") { ais[index].startDateTime = seg['AIS.4']['AIS.4.1']; }

		// AIS.5, startDateTimeOffset
		if (seg['AIS.5']['AIS.5.1'].toString() != "") { ais[index].startDateTimeOffset = seg['AIS.5']['AIS.5.1']; }

		// AIS.6, startDateTimeOffsetUnits
		ais[index].startDateTimeOffsetUnits = {};
		if (seg['AIS.6']['AIS.6.1'].toString() != "") { ais[index].startDateTimeOffsetUnits.id = seg['AIS.6']['AIS.6.1']; }
		if (seg['AIS.6']['AIS.6.2'].toString() != "") { ais[index].startDateTimeOffsetUnits.text = seg['AIS.6']['AIS.6.2']; }
		if (seg['AIS.6']['AIS.6.3'].toString() != "") { ais[index].startDateTimeOffsetUnits.codingSystem = seg['AIS.6']['AIS.6.3']; }
		if (seg['AIS.6']['AIS.6.4'].toString() != "") { ais[index].startDateTimeOffsetUnits.altId = seg['AIS.6']['AIS.6.4']; }
		if (seg['AIS.6']['AIS.6.5'].toString() != "") { ais[index].startDateTimeOffsetUnits.altText = seg['AIS.6']['AIS.6.5']; }
		if (seg['AIS.6']['AIS.6.6'].toString() != "") { ais[index].startDateTimeOffsetUnits.altCodingSystem = seg['AIS.6']['AIS.6.6']; }
		if (Object.keys(ais[index].startDateTimeOffsetUnits).length == 0) {
			delete ais[index].startDateTimeOffsetUnits;
		}

		// AIS.7, duration
		if (seg['AIS.7']['AIS.7.1'].toString() != "") { ais[index].duration = seg['AIS.7']['AIS.7.1']; }

		// AIS.8, durationUnits
		ais[index].durationUnits = {};
		if (seg['AIS.8']['AIS.8.1'].toString() != "") { ais[index].durationUnits.id = seg['AIS.8']['AIS.8.1']; }
		if (seg['AIS.8']['AIS.8.2'].toString() != "") { ais[index].durationUnits.text = seg['AIS.8']['AIS.8.2']; }
		if (seg['AIS.8']['AIS.8.3'].toString() != "") { ais[index].durationUnits.codingSystem = seg['AIS.8']['AIS.8.3']; }
		if (seg['AIS.8']['AIS.8.4'].toString() != "") { ais[index].durationUnits.altId = seg['AIS.8']['AIS.8.4']; }
		if (seg['AIS.8']['AIS.8.5'].toString() != "") { ais[index].durationUnits.altText = seg['AIS.8']['AIS.8.5']; }
		if (seg['AIS.8']['AIS.8.6'].toString() != "") { ais[index].durationUnits.altCodingSystem = seg['AIS.8']['AIS.8.6']; }
		if (Object.keys(ais[index].durationUnits).length == 0) {
			delete ais[index].durationUnits;
		}

		// AIS.9, allowSubstitutionCode
		if (seg['AIS.9']['AIS.9.1'].toString() != "") { ais[index].allowSubstitutionCode = seg['AIS.9']['AIS.9.1']; }

		// AIS.10, fillerStatusCode
		ais[index].fillerStatusCode = {};
		if (seg['AIS.10']['AIS.10.1'].toString() != "") { ais[index].fillerStatusCode.id = seg['AIS.10']['AIS.10.1']; }
		if (seg['AIS.10']['AIS.10.2'].toString() != "") { ais[index].fillerStatusCode.text = seg['AIS.10']['AIS.10.2']; }
		if (seg['AIS.10']['AIS.10.3'].toString() != "") { ais[index].fillerStatusCode.codingSystem = seg['AIS.10']['AIS.10.3']; }
		if (seg['AIS.10']['AIS.10.4'].toString() != "") { ais[index].fillerStatusCode.altId = seg['AIS.10']['AIS.10.4']; }
		if (seg['AIS.10']['AIS.10.5'].toString() != "") { ais[index].fillerStatusCode.altText = seg['AIS.10']['AIS.10.5']; }
		if (seg['AIS.10']['AIS.10.6'].toString() != "") { ais[index].fillerStatusCode.altCodingSystem = seg['AIS.10']['AIS.10.6']; }
		if (Object.keys(ais[index].fillerStatusCode).length == 0) {
			delete ais[index].fillerStatusCode;
		}

		// NTE (AIS)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			ais[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				ais[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { ais[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { ais[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				ais[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						ais[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				// clean up NTE and increment index
				if (Object.keys(ais[index].nte[indexNTE]).length == 0) {
					delete ais[index].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}
		// clean up NTE and increment index
		if (Object.keys(ais[index]).length == 0) {
			delete ais[index];
		} else {
			index++;
		}
	}	
}