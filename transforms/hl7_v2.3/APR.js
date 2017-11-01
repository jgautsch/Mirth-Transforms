// APR
var apr = {};
// APR.1, timeSelectionCriteria
apr.timeSelectionCriteria = [];
for each (field in msg['APR']['APR.1']) {
	var block = {};
	if (field['APR.1.1'].toString() != "") { block.parameterClass = field['APR.1.1']; }
	if (field['APR.1.2'].toString() != "") { block.parameterValue = field['APR.1.2']; }
	if (Object.keys(block).length > 0) {
		apr.timeSelectionCriteria.push(block);
	}
}
if (apr.timeSelectionCriteria.length == 0) {
	delete apr.timeSelectionCriteria;
}

// APR.2, resourceSelectionCriteria
apr.resourceSelectionCriteria = [];
for each (field in msg['APR']['APR.2']) {
	var block = {};
	if (field['APR.2.1'].toString() != "") { block.parameterClass = field['APR.2.1']; }
	if (field['APR.2.2'].toString() != "") { block.parameterValue = field['APR.2.2']; }
	if (Object.keys(block).length > 0) {
		apr.resourceSelectionCriteria.push(block);
	
	}
}
if (apr.resourceSelectionCriteria.length == 0) {
	delete apr.resourceSelectionCriteria;
}

// APR.3, locationSelectionCriteria
apr.locationSelectionCriteria = [];
for each (field in msg['APR']['APR.3']) {
	var block = {};
	if (field['APR.3.1'].toString() != "") { block.parameterClass = field['APR.3.1']; }
	if (field['APR.3.2'].toString() != "") { block.parameterValue = field['APR.3.2']; }
	if (Object.keys(block).length > 0) {
		apr.locationSelectionCriteria.push(block);
	}
}
if (apr.locationSelectionCriteria.length == 0) {
	delete apr.locationSelectionCriteria;
}

// APR.4, slotSpacingCriteria
if (msg['APR']['APR.4']['APR.4.1'].toString() != "") { apr.slotSpacingCriteria = msg['APR']['APR.4']['APR.4.1']; }

// APR.5, fillerOverrideCriteria
apr.fillerSelectionCriteria = [];
for each (field in msg['APR']['APR.5']) {
	var block = {};
	if (field['APR.5.1'].toString() != "") { block.parameterClass = field['APR.5.1']; }
	if (field['APR.5.2'].toString() != "") { block.parameterValue = field['APR.5.2']; }
	if (Object.keys(block).length > 0) {
		apr.fillerSelectionCriteria.push(block);
	}
}
if (apr.fillerSelectionCriteria.length == 0) {
	delete apr.fillerSelectionCriteria;
}






