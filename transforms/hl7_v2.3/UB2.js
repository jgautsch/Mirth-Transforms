// UB2
var ub2 = {};

// UB2.1, setId
if (msg['UB2']['UB2.1']['UB2.1.1'].toString() != "") { ub2.setId = msg['UB2']['UB2.1']['UB2.1.1']; }

// UB2.2, coinsuranceDays
if (msg['UB2']['UB2.2']['UB2.2.1'].toString() != "") { ub2.coinsuranceDays = msg['UB2']['UB2.2']['UB2.2.1']; }

// UB2.3, conditionCode
ub2.conditionCode = [];
for each (field in msg['UB2']['UB2.3']) {
	if (field['UB2.3.1'].toString() != "") {
		ub2.conditionCode.push(field['UB2.3.1']);
	}
}
if (ub2.conditionCode.length == 0) {
	delete ub2.conditionCode;
}

// UB2.4, coveredDays
if (msg['UB2']['UB2.4']['UB2.4.1'].toString() != "") { ub2.coveredDays = msg['UB2']['UB2.4']['UB2.4.1']; }

// UB2.5, nonCoveredDays
if (msg['UB2']['UB2.5']['UB2.5.1'].toString() != "") { ub2.nonCoveredDays = msg['UB2']['UB2.5']['UB2.5.1']; }

// UB2.6, valueAmountAndCode
ub2.valueAmountAndCode = [];
for each (field in msg['UB2']['UB2.6']) {
	var block = {};
	if (field['UB2.6.1'].toString() != "") { block.valueCode = field['UB2.6.1']; }
	if (field['UB2.6.2'].toString() != "") { block.valueAmount = field['UB2.6.2']; }
	if (Object.keys(block).length > 0) {
		ub2.valueAmountAndCode.push(block);
	}
}
if (ub2.valueAmountAndCode.length == 0) {
	delete ub2.valueAmountAndCode;
}

// UB2.7, occurrence
ub2.occurrence = [];
for each (field in msg['UB2']['UB2.7']) {
	var block = {};
	block.occurrenceCode = {};
	if (field['UB2.7.1']['UB2.7.1.1'].toString() != "") { block.occurrenceCode.id = field['UB2.7.1']['UB2.7.1.1']; }
	if (field['UB2.7.1']['UB2.7.1.2'].toString() != "") { block.occurrenceCode.text = field['UB2.7.1']['UB2.7.1.2']; }
	if (field['UB2.7.1']['UB2.7.1.3'].toString() != "") { block.occurrenceCode.codingSystem = field['UB2.7.1']['UB2.7.1.3']; }
	if (field['UB2.7.1']['UB2.7.1.4'].toString() != "") { block.occurrenceCode.altId = field['UB2.7.1']['UB2.7.1.4']; }
	if (field['UB2.7.1']['UB2.7.1.5'].toString() != "") { block.occurrenceCode.altText = field['UB2.7.1']['UB2.7.1.5']; }
	if (field['UB2.7.1']['UB2.7.1.6'].toString() != "") { block.occurrenceCode.altCodingSystem = field['UB2.7.1']['UB2.7.1.6']; }
	if (Object.keys(block.occurrenceSpanCode).length == 0) {
	    		if (field['UB2.7.1'].toString() != "") { block.occurrenceCode.id = field['UB2.7.1']; }
			else delete block.occurrenceSpanCode;
	}
	if (field['UB2.7.2']['UB2.7.2.1'].toString() != "") { block.occurrenceDate = field['UB2.7.2']['UB2.7.2.1']; }
	if (Object.keys(block).length > 0) {
		ub2.occurrence.push(block);
	}
}
if (ub2.occurrence.length == 0) {
	delete ub2.occurrence;
}

// UB2.8, occurrenceSpanCodeAndDate
ub2.occurrenceSpanCodeAndDate = [];
for each (field in msg['UB2']['UB2.8']) {
	var block = {};
	block.occurrenceSpanCode = {};
	if (field['UB2.8.1']['UB2.8.1.1'].toString() != "") { block.occurrenceSpanCode.id = field['UB2.8.1']['UB2.8.1.1']; }
	if (field['UB2.8.1']['UB2.8.1.2'].toString() != "") { block.occurrenceSpanCode.text = field['UB2.8.1']['UB2.8.1.2']; }
	if (field['UB2.8.1']['UB2.8.1.3'].toString() != "") { block.occurrenceSpanCode.codingSystem = field['UB2.8.1']['UB2.8.1.3']; }
	if (field['UB2.8.1']['UB2.8.1.4'].toString() != "") { block.occurrenceSpanCode.altId = field['UB2.8.1']['UB2.8.1.4']; }
	if (field['UB2.8.1']['UB2.8.1.5'].toString() != "") { block.occurrenceSpanCode.altText = field['UB2.8.1']['UB2.8.1.5']; }
	if (field['UB2.8.1']['UB2.8.1.6'].toString() != "") { block.occurrenceSpanCode.altCodingSystem = field['UB2.8.1']['UB2.8.1.6']; }
	if (Object.keys(block.occurrenceSpanCode).length == 0) {
	    		if (field['UB2.8.1'].toString() != "") { block.occurrenceSpanCode.id = field['UB2.8.1']; }
			else delete block.occurrenceSpanCode;
	}
	if (field['UB2.8.2']['UB2.8.2.1'].toString() != "") { block.occurrenceSpanStartDate = field['UB2.8.2']['UB2.8.2.1']; }
	if (field['UB2.8.3']['UB2.8.3.1'].toString() != "") { block.occurrenceSpanEndDate = field['UB2.8.3']['UB2.8.3.1']; }
	if (Object.keys(block).length > 0) {
		ub2.occurrenceSpanCodeAndDate.push(block);
	}
}
if (ub2.occurrenceSpanCodeAndDate.length == 0) {
	delete ub2.occurrenceSpanCodeAndDate;
}

// UB2.9, UB92Locator2
ub2.UB92Locator2 = [];
for each (field in msg['UB2']['UB2.9']) {
	if (field['UB2.9.1'].toString() != "") {
		ub2.UB92Locator2.push(field['UB2.9.1']);
	}
}
if (ub2.UB92Locator2.length == 0) {
	delete ub2.UB92Locator2;
}


// UB2.10, UB92Locator11
ub2.UB92Locator11 = [];
for each (field in msg['UB2']['UB2.10']) {
	if (field['UB2.10.1'].toString() != "") {
		ub2.UB92Locator11.push(field['UB2.10.1']);
	}
}
if (ub2.UB92Locator11.length == 0) {
	delete ub2.UB92Locator11;
}

// UB2.11, UB92Locator31
if (msg['UB2']['UB2.11']['UB2.11.1'].toString() != "") { ub2.UB92Locator31 = msg['UB2']['UB2.11']['UB2.11.1']; }

// UB2.12, documentControlNumber
ub2.documentControlNumber = [];
for each (field in msg['UB2']['UB2.12']) {
	if (field['UB2.12.1'].toString() != "") {
		ub2.documentControlNumber.push(field['UB2.12.1']);
	}
}
if (ub2.documentControlNumber.length == 0) {
	delete ub2.documentControlNumber;
}

// UB2.13, UB92Locator49
ub2.UB92Locator49 = [];
for each (field in msg['UB2']['UB2.13']) {
	if (field['UB2.13.1'].toString() != "") {
		ub2.UB92Locator49.push(field['UB2.13.1']);
	}
}
if (ub2.UB92Locator49.length == 0) {
	delete ub2.UB92Locator49;
}

// UB2.14, UB92Locator56
ub2.UB92Locator56 = [];
for each (field in msg['UB2']['UB2.14']) {
	if (field['UB2.14.1'].toString() != "") {
		ub2.UB92Locator56.push(field['UB2.14.1']);
	}
}
if (ub2.UB92Locator56.length == 0) {
	delete ub2.UB92Locator56;
}

// UB2.15, UB92Locator57
if (msg['UB2']['UB2.15']['UB2.15.1'].toString() != "") { ub2.UB92Locator57 = msg['UB2']['UB2.15']['UB2.15.1']; }

// UB2.16, UB92Locator78
ub2.UB92Locator78 = [];
for each (field in msg['UB2']['UB2.16']) {
	if (field['UB2.16.1'].toString() != "") {
		ub2.UB92Locator78.push(field['UB2.16.1']);
	}
}
if (ub2.UB92Locator78.length == 0) {
	delete ub2.UB92Locator78;
}

// UB2.17, specialVisitCount
if (msg['UB2']['UB2.17']['UB2.17.1'].toString() != "") { ub2.specialVisitCount = msg['UB2']['UB2.17']['UB2.17.1']; }
