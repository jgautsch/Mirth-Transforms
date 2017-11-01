// RXC
var rxc;
if (msg['RXC'].length() > 0) {
	rxc = [];
	var index = 0;
	for each (seg in msg.RXC) {
		rxc[index] = {};

		// RXC.1, rXComponentType
		if (seg['RXC.1']['RXC.1.1'].toString() != "") { rxc[index].rXComponentType = seg['RXC.1']['RXC.1.1']; }

		// RXC.2, componentCode
		rxc[index].componentCode = {};
		if (seg['RXC.2']['RXC.2.1'].toString() != "") { rxc[index].componentCode.id = seg['RXC.2']['RXC.2.1']; }
		if (seg['RXC.2']['RXC.2.2'].toString() != "") { rxc[index].componentCode.text = seg['RXC.2']['RXC.2.2']; }
		if (seg['RXC.2']['RXC.2.3'].toString() != "") { rxc[index].componentCode.codingSystem = seg['RXC.2']['RXC.2.3']; }
		if (seg['RXC.2']['RXC.2.4'].toString() != "") { rxc[index].componentCode.altId = seg['RXC.2']['RXC.2.4']; }
		if (seg['RXC.2']['RXC.2.5'].toString() != "") { rxc[index].componentCode.altText = seg['RXC.2']['RXC.2.5']; }
		if (seg['RXC.2']['RXC.2.6'].toString() != "") { rxc[index].componentCode.altCodingSystem = seg['RXC.2']['RXC.2.6']; }
		if (Object.keys(rxc[index].componentCode).length == 0) {
			delete rxc[index].componentCode;
		}

		// RXC.3, componentAmount
		if (seg['RXC.3']['RXC.3.1'].toString() != "") { rxc[index].componentAmount = seg['RXC.3']['RXC.3.1']; }

		// RXC.4, componentUnits
		rxc[index].componentUnits = {};
		if (seg['RXC.4']['RXC.4.1'].toString() != "") { rxc[index].componentUnits.id = seg['RXC.4']['RXC.4.1']; }
		if (seg['RXC.4']['RXC.4.2'].toString() != "") { rxc[index].componentUnits.text = seg['RXC.4']['RXC.4.2']; }
		if (seg['RXC.4']['RXC.4.3'].toString() != "") { rxc[index].componentUnits.codingSystem = seg['RXC.4']['RXC.4.3']; }
		if (seg['RXC.4']['RXC.4.4'].toString() != "") { rxc[index].componentUnits.altId = seg['RXC.4']['RXC.4.4']; }
		if (seg['RXC.4']['RXC.4.5'].toString() != "") { rxc[index].componentUnits.altText = seg['RXC.4']['RXC.4.5']; }
		if (seg['RXC.4']['RXC.4.6'].toString() != "") { rxc[index].componentUnits.altCodingSystem = seg['RXC.4']['RXC.4.6']; }
		if (Object.keys(rxc[index].componentUnits).length == 0) {
			delete rxc[index].componentUnits;
		}

		// RXC.5, componentStrength
		if (seg['RXC.5']['RXC.5.1'].toString() != "") { rxc[index].componentStrength = seg['RXC.5']['RXC.5.1']; }

		// RXC.6, componentStrengthUnits
		rxc[index].componentStrengthUnits = {};
		if (seg['RXC.6']['RXC.6.1'].toString() != "") { rxc[index].componentStrengthUnits.id = seg['RXC.6']['RXC.6.1']; }
		if (seg['RXC.6']['RXC.6.2'].toString() != "") { rxc[index].componentStrengthUnits.text = seg['RXC.6']['RXC.6.2']; }
		if (seg['RXC.6']['RXC.6.3'].toString() != "") { rxc[index].componentStrengthUnits.codingSystem = seg['RXC.6']['RXC.6.3']; }
		if (seg['RXC.6']['RXC.6.4'].toString() != "") { rxc[index].componentStrengthUnits.altId = seg['RXC.6']['RXC.6.4']; }
		if (seg['RXC.6']['RXC.6.5'].toString() != "") { rxc[index].componentStrengthUnits.altText = seg['RXC.6']['RXC.6.5']; }
		if (seg['RXC.6']['RXC.6.6'].toString() != "") { rxc[index].componentStrengthUnits.altCodingSystem = seg['RXC.6']['RXC.6.6']; }
		if (Object.keys(rxc[index].componentStrengthUnits).length == 0) {
			delete rxc[index].componentStrengthUnits;
		}

		// clean up RXC and increment index
		if (Object.keys(rxc[index]).length == 0) {
			delete rxc[index];
		} else {
			index++;
		}

	}
}