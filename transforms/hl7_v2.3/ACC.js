// ACC
var acc;
if (msg['ACC'].length() > 0) {
	acc = [];
	var index = 0;
	for each (seg in msg.ACC) {
		acc[index] = {};

		// ACC.1, accidentDateTime
		if (seg['ACC.1']['ACC.1.1'].toString() != "") { acc[index].accidentDateTime = seg['ACC.1']['ACC.1.1']; }
		
		// ACC.2, accidentCode
		acc[index].accidentCode = {};
		if (seg['ACC.2']['ACC.2.1'].toString() != "") { acc[index].accidentCode.id = seg['ACC.2']['ACC.2.1'];}
		if (seg['ACC.2']['ACC.2.2'].toString() != "") { acc[index].accidentCode.text = seg['ACC.2']['ACC.2.2'];}
		if (seg['ACC.2']['ACC.2.3'].toString() != "") { acc[index].accidentCode.codingSystem = seg['ACC.2']['ACC.2.3'];}
		if (seg['ACC.2']['ACC.2.4'].toString() != "") { acc[index].accidentCode.altId = seg['ACC.2']['ACC.2.4'];}
		if (seg['ACC.2']['ACC.2.5'].toString() != "") { acc[index].accidentCode.altText = seg['ACC.2']['ACC.2.5'];}
		if (seg['ACC.2']['ACC.2.6'].toString() != "") { acc[index].accidentCode.altCodingSystem = seg['ACC.2']['ACC.2.6'];}
		if (Object.keys(acc[index].accidentCode).length == 0) {
			delete acc[index].accidentCode;
		}

		// ACC.3, accidentLocation
		if (seg['ACC.3']['ACC.3.1'].toString() != "") { acc[index].accidentLocation = seg['ACC.3']['ACC.3.1']; }

		// ACC.4, autoAccidentState
		acc[index].autoAccidentState = {};
		if (seg['ACC.4']['ACC.4.1'].toString() != "") { acc[index].autoAccidentState.id = seg['ACC.4']['ACC.4.1'];}
		if (seg['ACC.4']['ACC.4.2'].toString() != "") { acc[index].autoAccidentState.text = seg['ACC.4']['ACC.4.2'];}
		if (seg['ACC.4']['ACC.4.3'].toString() != "") { acc[index].autoAccidentState.codingSystem = seg['ACC.4']['ACC.4.3'];}
		if (seg['ACC.4']['ACC.4.4'].toString() != "") { acc[index].autoAccidentState.altId = seg['ACC.4']['ACC.4.4'];}
		if (seg['ACC.4']['ACC.4.5'].toString() != "") { acc[index].autoAccidentState.altText = seg['ACC.4']['ACC.4.5'];}
		if (seg['ACC.4']['ACC.4.6'].toString() != "") { acc[index].autoAccidentState.altCodingSystem = seg['ACC.4']['ACC.4.6'];}
		if (Object.keys(acc[index].autoAccidentState).length == 0) { 
			delete acc[index].autoAccidentState; 
		}

		// ACC.5, accidentJobRelatedIndicator
		if (seg['ACC.5']['ACC.5.1'].toString() != "") { acc[index].accidentLocation = seg['ACC.5']['ACC.5.1']; }

		// ACC.6, accidentDeathIndicator
		if (seg['ACC.6']['ACC.6.1'].toString() != "") { acc[index].accidentDeathIndicator = seg['ACC.6']['ACC.6.1']; }			

		// clean up ACC and increment index
		if (Object.keys(acc[index]).length == 0) {
			delete acc[index];
		} else {
			index++;
		}
	}
}