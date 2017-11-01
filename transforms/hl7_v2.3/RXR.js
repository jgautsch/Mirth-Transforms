// RXR
var rxr;
if (msg['RXR'].length() > 0) {
	rxr = [];
	var index = 0;
	for each (seg in msg.RXR) {
		rxr[index] = {};

		// RXR.1, route
		rxr[index].route = {};
		if (seg['RXR.1']['RXR.1.1'].toString() != "") { rxr[index].route.id = seg['RXR.1']['RXR.1.1']; }
		if (seg['RXR.1']['RXR.1.2'].toString() != "") { rxr[index].route.text = seg['RXR.1']['RXR.1.2']; }
		if (seg['RXR.1']['RXR.1.3'].toString() != "") { rxr[index].route.codingSystem = seg['RXR.1']['RXR.1.3']; }
		if (seg['RXR.1']['RXR.1.4'].toString() != "") { rxr[index].route.altId = seg['RXR.1']['RXR.1.4']; }
		if (seg['RXR.1']['RXR.1.5'].toString() != "") { rxr[index].route.altText = seg['RXR.1']['RXR.1.5']; }
		if (seg['RXR.1']['RXR.1.6'].toString() != "") { rxr[index].route.altCodingSystem = seg['RXR.1']['RXR.1.6']; }
		if (Object.keys(rxr[index].route).length == 0) {
			delete rxr[index].route;
		}

		// RXR.2, site
		rxr[index].route = {};
		if (seg['RXR.2']['RXR.2.1'].toString() != "") { rxr[index].site.id = seg['RXR.2']['RXR.2.1']; }
		if (seg['RXR.2']['RXR.2.2'].toString() != "") { rxr[index].site.text = seg['RXR.2']['RXR.2.2']; }
		if (seg['RXR.2']['RXR.2.3'].toString() != "") { rxr[index].site.codingSystem = seg['RXR.2']['RXR.2.3']; }
		if (seg['RXR.2']['RXR.2.4'].toString() != "") { rxr[index].site.altId = seg['RXR.2']['RXR.2.4']; }
		if (seg['RXR.2']['RXR.2.5'].toString() != "") { rxr[index].site.altText = seg['RXR.2']['RXR.2.5']; }
		if (seg['RXR.2']['RXR.2.6'].toString() != "") { rxr[index].site.altCodingSystem = seg['RXR.2']['RXR.2.6']; }
		if (Object.keys(rxr[index].site).length == 0) {
			delete rxr[index].site;
		}

		// RXR.3, administrationDevice
		rxr[index].administrationDevice = {};
		if (seg['RXR.3']['RXR.3.1'].toString() != "") { rxr[index].administrationDevice.id = seg['RXR.3']['RXR.3.1']; }
		if (seg['RXR.3']['RXR.3.2'].toString() != "") { rxr[index].administrationDevice.text = seg['RXR.3']['RXR.3.2']; }
		if (seg['RXR.3']['RXR.3.3'].toString() != "") { rxr[index].administrationDevice.codingSystem = seg['RXR.3']['RXR.3.3']; }
		if (seg['RXR.3']['RXR.3.4'].toString() != "") { rxr[index].administrationDevice.altId = seg['RXR.3']['RXR.3.4']; }
		if (seg['RXR.3']['RXR.3.5'].toString() != "") { rxr[index].administrationDevice.altText = seg['RXR.3']['RXR.3.5']; }
		if (seg['RXR.3']['RXR.3.6'].toString() != "") { rxr[index].administrationDevice.altCodingSystem = seg['RXR.3']['RXR.3.6']; }
		if (Object.keys(rxr[index].administrationDevice).length == 0) {
			delete rxr[index].administrationDevice;
		}

		// RXR.4, administrationMethod
		rxr[index].administrationMethod = {};
		if (seg['RXR.4']['RXR.4.1'].toString() != "") { rxr[index].administrationMethod.id = seg['RXR.4']['RXR.4.1']; }
		if (seg['RXR.4']['RXR.4.2'].toString() != "") { rxr[index].administrationMethod.text = seg['RXR.4']['RXR.4.2']; }
		if (seg['RXR.4']['RXR.4.3'].toString() != "") { rxr[index].administrationMethod.codingSystem = seg['RXR.4']['RXR.4.3']; }
		if (seg['RXR.4']['RXR.4.4'].toString() != "") { rxr[index].administrationMethod.altId = seg['RXR.4']['RXR.4.4']; }
		if (seg['RXR.4']['RXR.4.5'].toString() != "") { rxr[index].administrationMethod.altText = seg['RXR.4']['RXR.4.5']; }
		if (seg['RXR.4']['RXR.4.6'].toString() != "") { rxr[index].administrationMethod.altCodingSystem = seg['RXR.4']['RXR.4.6']; }
		if (Object.keys(rxr[index].administrationMethod).length == 0) {
			delete rxr[index].administrationMethod;
		}

		// clean up RXR and increment index
		if (Object.keys(rxr[index]).length == 0) {
			delete rxr[index];
		} else {
			index++;
		}
	}
}




