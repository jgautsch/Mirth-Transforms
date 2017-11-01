// UB1
var ub1 = {};

// UB1.1, setId
if (msg['UB1']['UB1.1']['UB1.1.1'].toString() != "") { ub1.setId = msg['UB1']['UB1.1']['UB1.1.1']; }

// UB1.2, bloodDeductible
if (msg['UB1']['UB1.2']['UB1.2.1'].toString() != "") { ub1.bloodDeductible = msg['UB1']['UB1.2']['UB1.2.1']; }

// UB1.3, bloodFurnishedPints
if (msg['UB1']['UB1.3']['UB1.3.1'].toString() != "") { ub1.bloodFurnishedPints = msg['UB1']['UB1.3']['UB1.3.1']; }

// UB1.4, bloodReplacedPints
if (msg['UB1']['UB1.4']['UB1.4.1'].toString() != "") { ub1.bloodReplacedPints = msg['UB1']['UB1.4']['UB1.4.1']; }

// UB1.5, bloodNotReplacedPints
if (msg['UB1']['UB1.5']['UB1.5.1'].toString() != "") { ub1.bloodNotReplacedPints = msg['UB1']['UB1.5']['UB1.5.1']; }

// UB1.6, coinsuranceDates
if (msg['UB1']['UB1.6']['UB1.6.1'].toString() != "") { ub1.coinsuranceDates = msg['UB1']['UB1.6']['UB1.6.1']; }

// UB1.7, conditionCode
ub1.conditionCode = [];
for each (field in msg['UB1']['UB1.7']) {
	if (field['UB1.7.1'].toString() != "") {
		ub1.conditionCode.push(field['UB1.7.1']);
	}
}
if (ub1.conditionCode.length == 0) {
	delete ub1.conditionCode;
}

// UB1.8, coveredDays
if (msg['UB1']['UB1.8']['UB1.8.1'].toString() != "") { ub1.coveredDays = msg['UB1']['UB1.8']['UB1.8.1']; }

// UB1.9, nonCoveredDays
if (msg['UB1']['UB1.9']['UB1.9.1'].toString() != "") { ub1.nonCoveredDays = msg['UB1']['UB1.9']['UB1.9.1']; }

// UB1.10, valueAmountAndCode
ub1.valueAmountAndCode = [];
for each (field in msg['UB1']['UB1.10']) {
	var block = {};
	if (field['UB1.10.1'].toString() != "") { block.valueCode = field['UB1.10.1']; }
	if (field['UB1.10.2'].toString() != "") { block.valueAmount = field['UB1.10.2']; }
	if (Object.keys(block).length > 0) {
		ub1.valueAmountAndCode.push(block);
	}
}
if (ub1.valueAmountAndCode.length == 0) {
	delete ub1.valueAmountAndCode;
}

// UB1.11, numberOfGraceDays
if (msg['UB1']['UB1.11']['UB1.11.1'].toString() != "") { ub1.numberOfGraceDays = msg['UB1']['UB1.11']['UB1.11.1']; }

// UB1.12, specProgramIndicator
ub1.specProgramIndicator = {};
if (msg['UB1']['UB1.12']['UB1.12.1'].toString() != "") { ub1.specProgramIndicator.id = msg['UB1']['UB1.12']['UB1.12.1']; }
if (msg['UB1']['UB1.12']['UB1.12.2'].toString() != "") { ub1.specProgramIndicator.text = msg['UB1']['UB1.12']['UB1.12.2']; }
if (msg['UB1']['UB1.12']['UB1.12.3'].toString() != "") { ub1.specProgramIndicator.codingSystem = msg['UB1']['UB1.12']['UB1.12.3']; }
if (msg['UB1']['UB1.12']['UB1.12.4'].toString() != "") { ub1.specProgramIndicator.altId = msg['UB1']['UB1.12']['UB1.12.4']; }
if (msg['UB1']['UB1.12']['UB1.12.5'].toString() != "") { ub1.specProgramIndicator.altText = msg['UB1']['UB1.12']['UB1.12.5']; }
if (msg['UB1']['UB1.12']['UB1.12.6'].toString() != "") { ub1.specProgramIndicator.altCodingSystem = msg['UB1']['UB1.12']['UB1.12.6']; }
if (Object.keys(ub1.specProgramIndicator).length == 0) {
	delete ub1.specProgramIndicator;
}

// UB1.13, PSROURapprovalIndicator
ub1.PSROURapprovalIndicator = {};
if (msg['UB1']['UB1.13']['UB1.13.1'].toString() != "") { ub1.PSROURapprovalIndicator.id = msg['UB1']['UB1.13']['UB1.13.1']; }
if (msg['UB1']['UB1.13']['UB1.13.2'].toString() != "") { ub1.PSROURapprovalIndicator.text = msg['UB1']['UB1.13']['UB1.13.2']; }
if (msg['UB1']['UB1.13']['UB1.13.3'].toString() != "") { ub1.PSROURapprovalIndicator.codingSystem = msg['UB1']['UB1.13']['UB1.13.3']; }
if (msg['UB1']['UB1.13']['UB1.13.4'].toString() != "") { ub1.PSROURapprovalIndicator.altId = msg['UB1']['UB1.13']['UB1.13.4']; }
if (msg['UB1']['UB1.13']['UB1.13.5'].toString() != "") { ub1.PSROURapprovalIndicator.altText = msg['UB1']['UB1.13']['UB1.13.5']; }
if (msg['UB1']['UB1.13']['UB1.13.6'].toString() != "") { ub1.PSROURapprovalIndicator.altCodingSystem = msg['UB1']['UB1.13']['UB1.13.6']; }
if (Object.keys(ub1.PSROURapprovalIndicator).length == 0) {
	delete ub1.PSROURapprovalIndicator;
}

// UB1.14, PSROURapprovedStayFrom
if (msg['UB1']['UB1.14']['UB1.14.1'].toString() != "") { ub1.PSROURapprovedStayFrom = msg['UB1']['UB1.14']['UB1.14.1']; }

// UB1.15, PSROURapprovedStayTo
if (msg['UB1']['UB1.15']['UB1.15.1'].toString() != "") { ub1.PSROURapprovedStayTo = msg['UB1']['UB1.15']['UB1.15.1']; }

// UB1.16, occurrence
ub1.occurrence = [];
for each (field in msg['UB1']['UB1.16']) {
	var block = {};
	if (field['UB1.16.1'].toString() != "") { block.occurrenceCode = field['UB1.16.1']; }
	if (field['UB1.16.2'].toString() != "") { block.occurrenceDate = field['UB1.16.2']; }
	if (Object.keys(block).length > 0) {
		ub1.occurrence.push(block);
	}
}
if (ub1.occurrence.length == 0) {
	delete ub1.occurrence;
}

// UB1.17, occurrenceSpan
ub1.occurrenceSpan = {};
if (msg['UB1']['UB1.17']['UB1.17.1'].toString() != "") { ub1.occurrenceSpan.id = msg['UB1']['UB1.17']['UB1.17.1']; }
if (msg['UB1']['UB1.17']['UB1.17.2'].toString() != "") { ub1.occurrenceSpan.text = msg['UB1']['UB1.17']['UB1.17.2']; }
if (msg['UB1']['UB1.17']['UB1.17.3'].toString() != "") { ub1.occurrenceSpan.codingSystem = msg['UB1']['UB1.17']['UB1.17.3']; }
if (msg['UB1']['UB1.17']['UB1.17.4'].toString() != "") { ub1.occurrenceSpan.altId = msg['UB1']['UB1.17']['UB1.17.4']; }
if (msg['UB1']['UB1.17']['UB1.17.5'].toString() != "") { ub1.occurrenceSpan.altText = msg['UB1']['UB1.17']['UB1.17.5']; }
if (msg['UB1']['UB1.17']['UB1.17.6'].toString() != "") { ub1.occurrenceSpan.altCodingSystem = msg['UB1']['UB1.17']['UB1.17.6']; }
if (Object.keys(ub1.occurrenceSpan).length == 0) {
	delete ub1.occurrenceSpan;
}

// UB1.18, occurrenceSpanStartDate
if (msg['UB1']['UB1.18']['UB1.18.1'].toString() != "") { ub1.occurrenceSpanStartDate = msg['UB1']['UB1.18']['UB1.18.1']; }

// UB1.19, occurrenceSpanEndDate
if (msg['UB1']['UB1.19']['UB1.19.1'].toString() != "") { ub1.occurrenceSpanEndDate = msg['UB1']['UB1.19']['UB1.19.1']; }

// UB1.20, UB82Locator2
if (msg['UB1']['UB1.20']['UB1.20.1'].toString() != "") { ub1.UB82Locator2 = msg['UB1']['UB1.20']['UB1.20.1']; }

// UB1.21, UB82Locator9
if (msg['UB1']['UB1.21']['UB1.21.1'].toString() != "") { ub1.UB82Locator9 = msg['UB1']['UB1.21']['UB1.21.1']; }

// UB1.22, UB82Locator27
if (msg['UB1']['UB1.22']['UB1.22.1'].toString() != "") { ub1.UB82Locator27 = msg['UB1']['UB1.22']['UB1.22.1']; }

// UB1.23, UB82Locator45
if (msg['UB1']['UB1.23']['UB1.23.1'].toString() != "") { ub1.UB82Locator45 = msg['UB1']['UB1.23']['UB1.23.1']; }
