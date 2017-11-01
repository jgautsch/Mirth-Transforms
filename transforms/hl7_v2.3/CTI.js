// CTI
var cti;
if (msg['CTI'].length() > 0) {
	cti = [];
	var index = 0;
	for each (seg in msg.CTI) {
		cti[index] = {};

		// CTI.1, sponsorStudyIdentifier
		cti[index].sponsorStudyIdentifier = {};
		if (seg['CTI.1']['CTI.1.1'].toString() != "") { cti[index].sponsorStudyIdentifier.id = seg['CTI.1']['CTI.1.1']; }
		if (seg['CTI.1']['CTI.1.2'].toString() != "") { cti[index].sponsorStudyIdentifier.namespaceId = seg['CTI.1']['CTI.1.2']; }
		if (seg['CTI.1']['CTI.1.3'].toString() != "") { cti[index].sponsorStudyIdentifier.universalId = seg['CTI.1']['CTI.1.3']; }
		if (seg['CTI.1']['CTI.1.4'].toString() != "") { cti[index].sponsorStudyIdentifier.unniveralIdType = seg['CTI.1']['CTI.1.4']; }
		if (Object.keys(cti[index].sponsorStudyIdentifier).length == 0) {
			delete cti[index].sponsorStudyIdentifier;
		}

		// CTI.2, studyPhaseIdentifier
		cti[index].studyPhaseIdentifier = {};
		if (seg['CTI.2']['CTI.2.1'].toString() != "") { cti[index].studyPhaseIdentifier.id = seg['CTI.2']['CTI.2.1']; }
		if (seg['CTI.2']['CTI.2.2'].toString() != "") { cti[index].studyPhaseIdentifier.text = seg['CTI.2']['CTI.2.2']; }
		if (seg['CTI.2']['CTI.2.3'].toString() != "") { cti[index].studyPhaseIdentifier.codingSystem = seg['CTI.2']['CTI.2.3']; }
		if (seg['CTI.2']['CTI.2.4'].toString() != "") { cti[index].studyPhaseIdentifier.altId = seg['CTI.2']['CTI.2.4']; }
		if (seg['CTI.2']['CTI.2.5'].toString() != "") { cti[index].studyPhaseIdentifier.altText = seg['CTI.2']['CTI.2.5']; }
		if (seg['CTI.2']['CTI.2.6'].toString() != "") { cti[index].studyPhaseIdentifier.altCodingSystem = seg['CTI.2']['CTI.2.6']; }
		if (Object.keys(cti[index].studyPhaseIdentifier).length == 0) {
			delete cti[index].studyPhaseIdentifier;
		}

		// CTI.3, studyScheduledTimePoint
		cti[index].studyScheduledTimePoint = {};
		if (seg['CTI.3']['CTI.3.1'].toString() != "") { cti[index].studyScheduledTimePoint.id = seg['CTI.3']['CTI.3.1']; }
		if (seg['CTI.3']['CTI.3.2'].toString() != "") { cti[index].studyScheduledTimePoint.text = seg['CTI.3']['CTI.3.2']; }
		if (seg['CTI.3']['CTI.3.3'].toString() != "") { cti[index].studyScheduledTimePoint.codingSystem = seg['CTI.3']['CTI.3.3']; }
		if (seg['CTI.3']['CTI.3.4'].toString() != "") { cti[index].studyScheduledTimePoint.altId = seg['CTI.3']['CTI.3.4']; }
		if (seg['CTI.3']['CTI.3.5'].toString() != "") { cti[index].studyScheduledTimePoint.altText = seg['CTI.3']['CTI.3.5']; }
		if (seg['CTI.3']['CTI.3.6'].toString() != "") { cti[index].studyScheduledTimePoint.altCodingSystem = seg['CTI.3']['CTI.3.6']; }
		if (Object.keys(cti[index].studyScheduledTimePoint).length == 0) {
			delete cti[index].studyScheduledTimePoint;
		}

		// clean up CTI and increment index
		if (Object.keys(cti[index]).length == 0) {
			delete cti[index];
		} else {
			index++;
		}
	}
}