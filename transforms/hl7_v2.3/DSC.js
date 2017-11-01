// DSC
var dsc;
if (msg['DSC'].length() > 0) {
	dsc = [];
	var index = 0;
	for each (seg in msg.DSC) {
		dsc[index] = {};

		// DSC.1, continuationPointer
		if (seg['DSC.1']['DSC.1.1'].toString() != "") {dsc[index].continuationPointer = seg['DSC.1']['DSC.1.1']; }

		// clean up DSC and increment index
		if (Object.keys(dsc[index]).length == 0) {
			delete dsc[index];
		} else {
			index++;
		}
	}
}