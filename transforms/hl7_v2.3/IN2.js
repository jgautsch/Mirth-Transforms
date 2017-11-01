// IN2
var in2;
if (msg['IN2'].length() > 0) {
	in2 = [];
	var index = 0;
	for each (seg in msg.IN2) {
		in2[index] = {};

		// IN2.1, insuredEmployeeId
		in2[index].insuredEmployeeId = [];
		for each (field in seg['IN2.1']) {
			var block = {};
			if (field['IN2.1.1'].toString() != "") { block.id = field['IN2.1.1']; }
			if (field['IN2.1.2'].toString() != "") { block.identifierCheckDigit = field['IN2.1.2']; }
			if (field['IN2.1.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.1.3']; }
			block.assigningAuthority = {};
			if (field['IN2.1.4']['IN2.1.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.1.4']['IN2.1.4.1']; }
			if (field['IN2.1.4']['IN2.1.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.1.4']['IN2.1.4.2']; }
			if (field['IN2.1.4']['IN2.1.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.1.4']['IN2.1.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.1.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.1.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.1.5'].toString() != "") { block.idTypeCode = field['IN2.1.5']; }
			block.assigningFacility = {};
			if (field['IN2.1.6']['IN2.1.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.1.6']['IN2.1.6.1']; }
			if (field['IN2.1.6']['IN2.1.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.1.6']['IN2.1.6.2']; }
			if (field['IN2.1.6']['IN2.1.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.1.6']['IN2.1.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.1.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.1.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].insuredEmployeeId.push(block);
			}
		}
		if (Object.keys(in2[index].insuredEmployeeId).length == 0) {
			delete in2[index].insuredEmployeeId;
		}

		// IN2.2, insuredSSN
		if (seg['IN2.2']['IN2.2.1'].toString() != "") { in2[index].insuredSSN = seg['IN2.2']['IN2.2.1']; }

		// IN2.3, insuredEmployerName
		in2[index].insuredEmployerName = [];
		for each (field in seg['IN2.3']) {
			var block = {};
			if (field['IN2.3.1'].toString() != "") { block.id = field['IN2.3.1']; }
			if (field['IN2.3.2'].toString() != "") { block.lastName = field['IN2.3.2']; }
			if (field['IN2.3.3'].toString() != "") { block.firstName = field['IN2.3.3']; }
			if (field['IN2.3.4'].toString() != "") { block.middleInitOrName = field['IN2.3.4']; }
			if (field['IN2.3.5'].toString() != "") { block.suffix = field['IN2.3.5']; }
			if (field['IN2.3.6'].toString() != "") { block.prefix = field['IN2.3.6']; }
			if (field['IN2.3.7'].toString() != "") { block.degree = field['IN2.3.7']; }
			if (field['IN2.3.8'].toString() != "") { block.sourceTable = field['IN2.3.8']; }
			block.assigningAuthority = {};
			if (field['IN2.3.9']['IN2.3.9.1'].toString() != "") { block.assigningAuthority.id = field['IN2.3.9']['IN2.3.9.1']; }
			if (field['IN2.3.9']['IN2.3.9.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.3.9']['IN2.3.9.2']; }
			if (field['IN2.3.9']['IN2.3.9.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.3.9']['IN2.3.9.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.3.9'].toString() != "") { block.assigningAuthority.id = field['IN2.3.9']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.3.10'].toString() != "") { block.nameTypeCode = field['IN2.3.10']; }
			if (field['IN2.3.11'].toString() != "") { block.identifierCheckDigit = field['IN2.3.11']; }
			if (field['IN2.3.12'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.3.12']; }
			if (field['IN2.3.13'].toString() != "") { block.identifierTypeCode = field['IN2.3.13']; }
			block.assigningFacility = {};
			if (field['IN2.3.14']['IN2.3.14.1'].toString() != "") { block.assigningFacility.id = field['IN2.3.14']['IN2.3.14.1']; }
			if (field['IN2.3.14']['IN2.3.14.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.3.14']['IN2.3.14.2']; }
			if (field['IN2.3.14']['IN2.3.14.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.3.14']['IN2.3.14.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.3.14'].toString() != "") { block.assigningFacility.id = field['IN2.3.14']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].insuredEmployerName.push(block);
			}
		}
		if (in2[index].insuredEmployerName.length == 0) {
			delete in2[index].insuredEmployerName;
		}

		// IN2.4, employerInfoData
		if (seg['IN2.4']['IN2.4.1'].toString() != "") { in2[index].employerInfoData = seg['IN2.4']['IN2.4.1']; }
		
		// IN2.5, mailClaimParty
		in2[index].mailClaimParty = [];
		for each (field in seg['IN2.5']) {
			if (field['IN2.5.1'].toString() != "") {
				in2[index].mailClaimParty.push(field['IN2.5.1']);
			}
		}
		if (in2[index].mailClaimParty.length == 0) {
			delete in2[index].mailClaimParty
		}

		// IN2.6, medicareHealthInsCardNumber
		if (seg['IN2.6']['IN2.6.1'].toString() != "") { in2[index].medicareHealthInsCardNumber = seg['IN2.6']['IN2.6.1']; }
		
		// IN2.7, medicaidCaseName
		in2[index].medicaidCaseName = [];
		for each (field in seg['IN2.7']) {
			var block = {};
			if (field['IN2.7.1'].toString() != "") { block.lastName = field['IN2.7.1']; }
			if (field['IN2.7.2'].toString() != "") { block.firstName = field['IN2.7.2']; }
			if (field['IN2.7.3'].toString() != "") { block.middleInitOrName = field['IN2.7.3']; }
			if (field['IN2.7.4'].toString() != "") { block.suffix = field['IN2.7.4']; }
			if (field['IN2.7.5'].toString() != "") { block.prefix = field['IN2.7.5']; }
			if (field['IN2.7.6'].toString() != "") { block.degree = field['IN2.7.6']; }
			if (field['IN2.7.7'].toString() != "") { block.nameTypeCode = field['IN2.7.7']; }
			if (Object.keys(block).length > 0) {
				in2[index].medicaidCaseName.push(block);
			}	
		}
		if (in2[index].medicaidCaseName.length == 0) {
			delete in2[index].medicaidCaseName;
		}
		
		// IN2.8, medicaidCaseNumber
		if (seg['IN2.8']['IN2.8.1'].toString() != "") { in2[index].medicaidCaseNumber = seg['IN2.8']['IN2.8.1']; }

		// IN2.9, champusSponsorName
		in2[index].champusSponsorName = [];
		for each (field in seg['IN2.9']) {
			var block = {};
			if (field['IN2.9.1'].toString() != "") { block.lastName = field['IN2.9.1']; }
			if (field['IN2.9.2'].toString() != "") { block.firstName = field['IN2.9.2']; }
			if (field['IN2.9.3'].toString() != "") { block.middleInitOrName = field['IN2.9.3']; }
			if (field['IN2.9.4'].toString() != "") { block.suffix = field['IN2.9.4']; }
			if (field['IN2.9.5'].toString() != "") { block.prefix = field['IN2.9.5']; }
			if (field['IN2.9.6'].toString() != "") { block.degree = field['IN2.9.6']; }
			if (field['IN2.9.7'].toString() != "") { block.nameTypeCode = field['IN2.9.7']; }
			if (Object.keys(block).length > 0) {
				in2[index].champusSponsorName.push(block);
			}	
		}
		if (in2[index].champusSponsorName.length == 0) {
			delete in2[index].champusSponsorName;
		}
		
		// IN2.10, champusIdNumber
		if (seg['IN2.10']['IN2.10.1'].toString() != "") { in2[index].champusIdNumber = seg['IN2.10']['IN2.10.1']; }
		
		// IN2.11, dependentOfChampusRecipient
		in2[index].dependentOfChampusRecipient = {};
		if (seg['IN2.11']['IN2.11.1'].toString() != "") { in2[index].dependentOfChampusRecipient.id = seg['IN2.11']['IN2.11.1']; }
		if (seg['IN2.11']['IN2.11.2'].toString() != "") { in2[index].dependentOfChampusRecipient.text = seg['IN2.11']['IN2.11.2']; }
		if (seg['IN2.11']['IN2.11.3'].toString() != "") { in2[index].dependentOfChampusRecipient.codingSystem = seg['IN2.11']['IN2.11.3']; }
		if (seg['IN2.11']['IN2.11.4'].toString() != "") { in2[index].dependentOfChampusRecipient.altId = seg['IN2.11']['IN2.11.4']; }
		if (seg['IN2.11']['IN2.11.5'].toString() != "") { in2[index].dependentOfChampusRecipient.altText = seg['IN2.11']['IN2.11.5']; }
		if (seg['IN2.11']['IN2.11.6'].toString() != "") { in2[index].dependentOfChampusRecipient.altCodingSystem = seg['IN2.11']['IN2.11.6']; }
		if (Object.keys(in2[index].dependentOfChampusRecipient).length == 0) {
			delete in2[index].dependentOfChampusRecipient;
		}

		// IN2.12, champusOrganization
		if (seg['IN2.12']['IN2.12.1'].toString() != "") { in2[index].champusOrganization = seg['IN2.12']['IN2.12.1']; }
		
		// IN2.13, champusStation
		if (seg['IN2.13']['IN2.13.1'].toString() != "") { in2[index].champusStation = seg['IN2.13']['IN2.13.1']; }
		
		// IN2.14, champusService
		if (seg['IN2.14']['IN2.14.1'].toString() != "") { in2[index].champusService = seg['IN2.14']['IN2.14.1']; }
		
		// IN2.15, champusRankGrade
		if (seg['IN2.15']['IN2.15.1'].toString() != "") { in2[index].champusRankGrade = seg['IN2.15']['IN2.15.1']; }
		
		// IN2.16, champusStatus
		if (seg['IN2.16']['IN2.16.1'].toString() != "") { in2[index].champusStatus = seg['IN2.16']['IN2.16.1']; }
		
		// IN2.17, champusRetireDate
		if (seg['IN2.17']['IN2.17.1'].toString() != "") { in2[index].champusRetireDate = seg['IN2.17']['IN2.17.1']; }
		
		// IN2.18, champusNonAvailCertOnFile
		if (seg['IN2.18']['IN2.18.1'].toString() != "") { in2[index].champusNonAvailCertOnFile = seg['IN2.18']['IN2.18.1']; }
		
		// IN2.19, babyCoverage
		if (seg['IN2.19']['IN2.19.1'].toString() != "") { in2[index].babyCoverage = seg['IN2.19']['IN2.19.1']; }
		
		// IN2.20, combineBabyBill
		if (seg['IN2.20']['IN2.20.1'].toString() != "") { in2[index].combineBabyBill = seg['IN2.20']['IN2.20.1']; }
		
		// IN2.21, bloodDeductible
		if (seg['IN2.21']['IN2.21.1'].toString() != "") { in2[index].bloodDeductible = seg['IN2.21']['IN2.21.1']; }
		
		// IN2.22, specialCoverageApprovalName
		in2[index].specialCoverageApprovalName = [];
		for each (field in seg['IN2.22']) {
			var block = {};
			if (field['IN2.22.1'].toString() != "") { block.lastName = field['IN2.22.1']; }
			if (field['IN2.22.2'].toString() != "") { block.firstName = field['IN2.22.2']; }
			if (field['IN2.22.3'].toString() != "") { block.middleInitOrName = field['IN2.22.3']; }
			if (field['IN2.22.4'].toString() != "") { block.suffix = field['IN2.22.4']; }
			if (field['IN2.22.5'].toString() != "") { block.prefix = field['IN2.22.5']; }
			if (field['IN2.22.6'].toString() != "") { block.degree = field['IN2.22.6']; }
			if (field['IN2.22.7'].toString() != "") { block.nameTypeCode = field['IN2.22.7']; }
			if (Object.keys(block).length > 0) {
				in2[index].specialCoverageApprovalName.push(block);
			}	
		}
		if (in2[index].specialCoverageApprovalName.length == 0) {
			delete in2[index].specialCoverageApprovalName;
		}
		
		// IN2.23, specialCoverageApprovalTitle
		if (seg['IN2.23']['IN2.23.1'].toString() != "") { in2[index].specialCoverageApprovalTitle = seg['IN2.23']['IN2.23.1']; }
		
		// IN2.24, nonCoveredInsuranceCode
		in2[index].nonCoveredInsuranceCode = [];
		for each (field in seg['IN2.24']) {
			if (field['IN2.24.1'].toString() != "") {
				in2[index].nonCoveredInsuranceCode.push(field['IN2.24.1']);
			}
		}
		if (in2[index].nonCoveredInsuranceCode.length ==0) {
			delete in2[index].nonCoveredInsuranceCode
		}

		// IN2.25, payorId
		in2[index].payorId = [];
		for each (field in seg['IN2.25']) {
			var block = {};
			if (field['IN2.25.1'].toString() != "") { block.id = field['IN2.25.1']; }
			if (field['IN2.25.2'].toString() != "") { block.identifierCheckDigit = field['IN2.25.2']; }
			if (field['IN2.25.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.25.3']; }
			block.assigningAuthority = {};
			if (field['IN2.25.4']['IN2.25.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.25.4']['IN2.25.4.1']; }
			if (field['IN2.25.4']['IN2.25.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.25.4']['IN2.25.4.2']; }
			if (field['IN2.25.4']['IN2.25.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.25.4']['IN2.25.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.25.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.25.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.25.5'].toString() != "") { block.idTypeCode = field['IN2.25.5']; }
			block.assigningFacility = {};
			if (field['IN2.25.6']['IN2.25.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.25.6']['IN2.25.6.1']; }
			if (field['IN2.25.6']['IN2.25.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.25.6']['IN2.25.6.2']; }
			if (field['IN2.25.6']['IN2.25.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.25.6']['IN2.25.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.25.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.25.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].payorId.push(block);
			}
		}
		if (in2[index].payorId.length == 0) {
			delete in2[index].payorId;
		}

		// IN2.26, payorSubscriberId
		in2[index].payorSubscriberId = [];
		for each (field in seg['IN2.26']) {
			var block = {};
			if (field['IN2.26.1'].toString() != "") { block.id = field['IN2.26.1']; }
			if (field['IN2.26.2'].toString() != "") { block.identifierCheckDigit = field['IN2.26.2']; }
			if (field['IN2.26.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.26.3']; }
			block.assigningAuthority = {};
			if (field['IN2.26.4']['IN2.26.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.26.4']['IN2.26.4.1']; }
			if (field['IN2.26.4']['IN2.26.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.26.4']['IN2.26.4.2']; }
			if (field['IN2.26.4']['IN2.26.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.26.4']['IN2.26.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.26.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.26.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.26.5'].toString() != "") { block.idTypeCode = field['IN2.26.5']; }
			block.assigningFacility = {};
			if (field['IN2.26.6']['IN2.26.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.26.6']['IN2.26.6.1']; }
			if (field['IN2.26.6']['IN2.26.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.26.6']['IN2.26.6.2']; }
			if (field['IN2.26.6']['IN2.26.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.26.6']['IN2.26.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.26.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.26.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].payorSubscriberId.push(block);
			}
		}
		if (in2[index].payorSubscriberId.length == 0) {
			delete in2[index].payorSubscriberId;
		}

		// IN2.27, eligibilitySource
		if (seg['IN2.27']['IN2.27.1'].toString() != "") { in2[index].eligibilitySource = seg['IN2.27']['IN2.27.1']; }
		
		// IN2.28, roomCoverageTypeAmount
		in2[index].roomCoverageTypeAmount = [];
		for each (field in seg['IN2.28']) {
			var block = {};
			if (field['IN2.28.1'].toString() != "") { block.roomType =  field['IN2.28.1']; }
			if (field['IN2.28.2'].toString() != "") { block.amountType =  field['IN2.28.2']; }
			if (field['IN2.28.3'].toString() != "") { block.coverageAmount =  field['IN2.28.3']; }
			if (Object.keys(block).length > 0) {
				in2[index].roomCoverageTypeAmount.push(block);
			}
		}
		if (in2[index].roomCoverageTypeAmount.length == 0) {	
			delete in2[index].roomCoverageTypeAmount;
		}

		// IN2.29, policyTypeAmount
		in2[index].policyTypeAmount = [];
		for each (field in seg['IN2.29']) {
			var block = {};
			if (field['IN2.29.1'].toString() != "") { block.policyType =  field['IN2.29.1']; }
			if (field['IN2.29.2'].toString() != "") { block.amountClass =  field['IN2.29.2']; }
			if (field['IN2.29.3'].toString() != "") { block.amount =  field['IN2.29.3']; }
			if (Object.keys(block).length > 0) {
				in2[index].policyTypeAmount.push(block);
			}
		}
		if (in2[index].policyTypeAmount.length == 0) {
			delete in2[index].policyTypeAmount;
		}
		// IN2.30, dailyDeductible
		in2[index].dailyDeductible = {};
		if(seg['IN2.30']['IN2.30.1'].toString() != "") { in2[index].dailyDeductible.delayDays = seg['IN2.30']['IN2.30.1']; }
		if(seg['IN2.30']['IN2.30.2'].toString() != "") { in2[index].dailyDeductible.amount = seg['IN2.30']['IN2.30.2']; }
		if(seg['IN2.30']['IN2.30.3'].toString() != "") { in2[index].dailyDeductible.numberOfDays = seg['IN2.30']['IN2.30.3']; }
		if (Object.keys(in2[index].dailyDeductible).length == 0) {
			delete in2[index].dailyDeductible;
		}

		// IN2.31, livingDependency
		if (seg['IN2.31']['IN2.31.1'].toString() != "") { in2[index].livingDependency = seg['IN2.31']['IN2.31.1']; }
		
		// IN2.32, ambulatoryStatus
		if (seg['IN2.32']['IN2.32.1'].toString() != "") { in2[index].ambulatoryStatus = seg['IN2.32']['IN2.32.1']; }
		
		// IN2.33, citizenship
		if (seg['IN2.33']['IN2.33.1'].toString() != "") { in2[index].citizenship = seg['IN2.33']['IN2.33.1']; }
		
		// IN2.34, primaryLanguage
		in2[index].primaryLanguage = {};
		if (seg['IN2.34']['IN2.34.1'].toString() != "") { in2[index].primaryLanguage.id = seg['IN2.34']['IN2.34.1']; }
		if (seg['IN2.34']['IN2.34.2'].toString() != "") { in2[index].primaryLanguage.text = seg['IN2.34']['IN2.34.2']; }
		if (seg['IN2.34']['IN2.34.3'].toString() != "") { in2[index].primaryLanguage.codingSystem = seg['IN2.34']['IN2.34.3']; }
		if (seg['IN2.34']['IN2.34.4'].toString() != "") { in2[index].primaryLanguage.altId = seg['IN2.34']['IN2.34.4']; }
		if (seg['IN2.34']['IN2.34.5'].toString() != "") { in2[index].primaryLanguage.altText = seg['IN2.34']['IN2.34.5']; }
		if (seg['IN2.34']['IN2.34.6'].toString() != "") { in2[index].primaryLanguage.altCodingSystem = seg['IN2.34']['IN2.34.6']; }
		if (Object.keys(in2[index].primaryLanguage).length == 0) {
			delete in2[index].primaryLanguage;
		}

		// IN2.35, livingArrangement
		if (seg['IN2.35']['IN2.35.1'].toString() != "") { in2[index].livingArrangement = seg['IN2.35']['IN2.35.1']; }
		
		// IN2.36, publicityIndicator
		in2[index].publicityIndicator = {};
		if (seg['IN2.36']['IN2.36.1'].toString() != "") { in2[index].publicityIndicator.id = seg['IN2.36']['IN2.36.1']; }
		if (seg['IN2.36']['IN2.36.2'].toString() != "") { in2[index].publicityIndicator.text = seg['IN2.36']['IN2.36.2']; }
		if (seg['IN2.36']['IN2.36.3'].toString() != "") { in2[index].publicityIndicator.codingSystem = seg['IN2.36']['IN2.36.3']; }
		if (seg['IN2.36']['IN2.36.4'].toString() != "") { in2[index].publicityIndicator.altId = seg['IN2.36']['IN2.36.4']; }
		if (seg['IN2.36']['IN2.36.5'].toString() != "") { in2[index].publicityIndicator.altText = seg['IN2.36']['IN2.36.5']; }
		if (seg['IN2.36']['IN2.36.6'].toString() != "") { in2[index].publicityIndicator.altCodingSystem = seg['IN2.36']['IN2.36.6']; }
		if (Object.keys(in2[index].publicityIndicator).length == 0) {
			delete in2[index].publicityIndicator;
		}

		// IN2.37, protectionIndicator
		if (seg['IN2.37']['IN2.37.1'].toString() != "") { in2[index].protectionIndicator = seg['IN2.37']['IN2.37.1']; }
		
		// IN2.38, studentIndicator
		if (seg['IN2.38']['IN2.38.1'].toString() != "") { in2[index].studentIndicator = seg['IN2.38']['IN2.38.1']; }
		
		// IN2.39, religion
		if (seg['IN2.39']['IN2.39.1'].toString() != "") { in2[index].religion = seg['IN2.39']['IN2.39.1']; }
		
		// IN2.40, motherMaidenName
		in2[index].motherMaidenName = {};
		if (seg['IN2.40']['IN2.40.1'].toString() != "") { in2[index].motherMaidenName.lastName = seg['IN2.40']['IN2.40.1']; }
		if (seg['IN2.40']['IN2.40.2'].toString() != "") { in2[index].motherMaidenName.firstName = seg['IN2.40']['IN2.40.2']; }
		if (seg['IN2.40']['IN2.40.3'].toString() != "") { in2[index].motherMaidenName.middleInitOrName = seg['IN2.40']['IN2.40.3']; }
		if (seg['IN2.40']['IN2.40.4'].toString() != "") { in2[index].motherMaidenName.suffix = seg['IN2.40']['IN2.40.4']; }
		if (seg['IN2.40']['IN2.40.5'].toString() != "") { in2[index].motherMaidenName.prefix = seg['IN2.40']['IN2.40.5']; }
		if (seg['IN2.40']['IN2.40.6'].toString() != "") { in2[index].motherMaidenName.degree = seg['IN2.40']['IN2.40.6']; }
		if (seg['IN2.40']['IN2.40.7'].toString() != "") { in2[index].motherMaidenName.nameTypeCode = seg['IN2.40']['IN2.40.7']; }
		if (Object.keys(in2[index].motherMaidenName).length == 0) {
			delete in2[index].motherMaidenName;
		}
		
		// IN2.41, nationality
		in2[index].nationality = {};
		if (seg['IN2.41']['IN2.41.1'].toString() != "") { in2[index].nationality.id = seg['IN2.41']['IN2.41.1']; }
		if (seg['IN2.41']['IN2.41.2'].toString() != "") { in2[index].nationality.text = seg['IN2.41']['IN2.41.2']; }
		if (seg['IN2.41']['IN2.41.3'].toString() != "") { in2[index].nationality.codingSystem = seg['IN2.41']['IN2.41.3']; }
		if (seg['IN2.41']['IN2.41.4'].toString() != "") { in2[index].nationality.altId = seg['IN2.41']['IN2.41.4']; }
		if (seg['IN2.41']['IN2.41.5'].toString() != "") { in2[index].nationality.altText = seg['IN2.41']['IN2.41.5']; }
		if (seg['IN2.41']['IN2.41.6'].toString() != "") { in2[index].nationality.altCodingSystem = seg['IN2.41']['IN2.41.6']; }
		if (Object.keys(in2[index].nationality).length == 0) {
			delete in2[index].nationality;
		}

		// IN2.42, ethnicGroup
		if (seg['IN2.42']['IN2.42.1'].toString() != "") { in2[index].ethnicGroup = seg['IN2.42']['IN2.42.1']; }
		
		// IN2.43, maritalStatus
		in2[index].maritalStatus = [];
		for each (field in seg['IN2.43']) {
			if (field['IN2.43.1'].toString() != "") {
				in2[index].maritalStatus.push(field['IN2.43.1']);
			}
		}
		if (in2[index].maritalStatus.length ==0) {
			delete in2[index].maritalStatus
		}

		// IN2.44, insuredEmploymentStartDate
		if (seg['IN2.44']['IN2.44.1'].toString() != "") { in2[index].insuredEmploymentStartDate = seg['IN2.44']['IN2.44.1']; }
		
		// IN2.45, insuredEmploymentStopDate
		if (seg['IN2.45']['IN2.45.1'].toString() != "") { in2[index].insuredEmploymentStopDate = seg['IN2.45']['IN2.45.1']; }
		
		// IN2.46, jobTitle
		if (seg['IN2.46']['IN2.46.1'].toString() != "") { in2[index].jobTitle = seg['IN2.46']['IN2.46.1']; }
		
		// IN2.47, jobCodeClass
		in2[index].jobCodeClass = {};
		if (seg['IN2.47']['IN2.47.1'].toString() != "") { in2[index].jobCodeClass.jobCode = seg['IN2.47']['IN2.47.1']; }
		if (seg['IN2.47']['IN2.47.2'].toString() != "") { in2[index].jobCodeClass.jobClass = seg['IN2.47']['IN2.47.2']; }
		if (Object.keys(in2[index].jobCodeClass).length == 0) {
			delete in2[index].jobCodeClass;
		}

		// IN2.48, jobStatus
		if (seg['IN2.48']['IN2.48.1'].toString() != "") { in2[index].jobStatus = seg['IN2.48']['IN2.48.1']; }
		
		// IN2.49, employerContactPersonName
		in2[index].employerContactPersonName = [];
		for each (field in seg['IN2.49']) {
			var block = {};
			if (field['IN2.49.1'].toString() != "") { block.lastName = field['IN2.49.1']; }
			if (field['IN2.49.2'].toString() != "") { block.firstName = field['IN2.49.2']; }
			if (field['IN2.49.3'].toString() != "") { block.middleInitOrName = field['IN2.49.3']; }
			if (field['IN2.49.4'].toString() != "") { block.suffix = field['IN2.49.4']; }
			if (field['IN2.49.5'].toString() != "") { block.prefix = field['IN2.49.5']; }
			if (field['IN2.49.6'].toString() != "") { block.degree = field['IN2.49.6']; }
			if (field['IN2.49.7'].toString() != "") { block.nameTypeCode = field['IN2.49.7']; }
			if (Object.keys(block).length > 0) {
				in2[index].employerContactPersonName.push(block);
			}	
		}
		if (in2[index].employerContactPersonName.length == 0) {
			delete in2[index].employerContactPersonName;
		}
		
		// IN2.50, employerContactPersonPhone
		in2[index].employerContactPersonPhone = [];
		for each (field in seg['IN2.50']) {
			var block = {};
			if (field['IN2.50.1'].toString() != "") { block.number = field['IN2.50.1']; }
			if (field['IN2.50.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.50.2']; }
			if (field['IN2.50.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.50.3']; }
			if (field['IN2.50.4'].toString() != "") { block.emailAddress = field['IN2.50.4']; }
			if (field['IN2.50.5'].toString() != "") { block.countryCode = field['IN2.50.5']; }
			if (field['IN2.50.6'].toString() != "") { block.areaCityCode = field['IN2.50.6']; }
			if (field['IN2.50.7'].toString() != "") { block.phoneNumber = field['IN2.50.7']; }
			if (field['IN2.50.8'].toString() != "") { block.extension = field['IN2.50.8']; }
			if (field['IN2.50.9'].toString() != "") { block.text = field['IN2.50.9']; }
			if (Object.keys(block).length > 0) {
				in2[index].employerContactPersonPhone.push(block);
			}
		}
		if (in2[index].employerContactPersonPhone.length == 0) {
			delete in2[index].employerContactPersonPhone;
		}

		// IN2.51, employerContactReason
		if (seg['IN2.51']['IN2.51.1'].toString() != "") { in2[index].employerContactReason = seg['IN2.51']['IN2.51.1']; }
		
		// IN2.52, insuredsContactPersonName
		in2[index].insuredsContactPersonName = [];
		for each (field in seg['IN2.52']) {
			var block = {};
			if (field['IN2.52.1'].toString() != "") { block.lastName = field['IN2.52.1']; }
			if (field['IN2.52.2'].toString() != "") { block.firstName = field['IN2.52.2']; }
			if (field['IN2.52.3'].toString() != "") { block.middleInitOrName = field['IN2.52.3']; }
			if (field['IN2.52.4'].toString() != "") { block.suffix = field['IN2.52.4']; }
			if (field['IN2.52.5'].toString() != "") { block.prefix = field['IN2.52.5']; }
			if (field['IN2.52.6'].toString() != "") { block.degree = field['IN2.52.6']; }
			if (field['IN2.52.7'].toString() != "") { block.nameTypeCode = field['IN2.52.7']; }
			if (Object.keys(block).length > 0) {
				in2[index].insuredsContactPersonName.push(block);
			}	
		}
		if (in2[index].insuredsContactPersonName.length == 0) {
			delete in2[index].insuredsContactPersonName;
		}
		
		// IN2.53, insuredsContactPersonPhone
		in2[index].insuredsContactPersonPhone = [];
		for each (field in seg['IN2.53']) {
			var block = {};
			if (field['IN2.53.1'].toString() != "") { block.number = field['IN2.53.1']; }
			if (field['IN2.53.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.53.2']; }
			if (field['IN2.53.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.53.3']; }
			if (field['IN2.53.4'].toString() != "") { block.emailAddress = field['IN2.53.4']; }
			if (field['IN2.53.5'].toString() != "") { block.countryCode = field['IN2.53.5']; }
			if (field['IN2.53.6'].toString() != "") { block.areaCityCode = field['IN2.53.6']; }
			if (field['IN2.53.7'].toString() != "") { block.phoneNumber = field['IN2.53.7']; }
			if (field['IN2.53.8'].toString() != "") { block.extension = field['IN2.53.8']; }
			if (field['IN2.53.9'].toString() != "") { block.text = field['IN2.53.9']; }
			if (Object.keys(block).length > 0) {
				in2[index].insuredsContactPersonPhone.push(block);
			}
		}
		if (in2[index].insuredsContactPersonPhone.length == 0) {
			delete in2[index].insuredsContactPersonPhone;
		}

		// IN2.54, insuredsContactReason
		in2[index].insuredsContactReason = [];
		for each (field in seg['IN2.54']) {
			if (field['IN2.54.1'].toString() != "") {
				in2[index].insuredsContactReason.push(field['IN2.54.1']);
			}
		}
		if (in2[index].insuredsContactReason.length == 0) {
			delete in2[index].insuredsContactReason
		}

		// IN2.55, relationshipToPersonStartDate
		if (seg['IN2.55']['IN2.55.1'].toString() != "") { in2[index].relationshipToPersonStartDate = seg['IN2.55']['IN2.55.1']; }
		
		// IN2.56, relationshipToPersonStopDate
		in2[index].relationshipToPersonStopDate = [];
		for each (field in seg['IN2.56']) {
			if (field['IN2.56.1'].toString() != "") {
				in2[index].relationshipToPersonStopDate.push(field['IN2.56.1']);
			}
		}
		if (in2[index].relationshipToPersonStopDate.length == 0) {
			delete in2[index].relationshipToPersonStopDate
		}

		// IN2.57, insuranceCoContactReason
		if (seg['IN2.57']['IN2.57.1'].toString() != "") { in2[index].insuranceCoContactReason = seg['IN2.57']['IN2.57.1']; }
		
		// IN2.58, insuranceCoContactPhone
		in2[index].insuranceCoContactPhone = {};
		if (seg['IN2.58']['IN2.58.1'].toString() != "") { in2[index].insuranceCoContactPhone.number = seg['IN2.58']['IN2.58.1']; }
		if (seg['IN2.58']['IN2.58.2'].toString() != "") { in2[index].insuranceCoContactPhone.telecommunicationUseCode = seg['IN2.58']['IN2.58.2']; }
		if (seg['IN2.58']['IN2.58.3'].toString() != "") { in2[index].insuranceCoContactPhone.telecommunicationEquipmentType = seg['IN2.58']['IN2.58.3']; }
		if (seg['IN2.58']['IN2.58.4'].toString() != "") { in2[index].insuranceCoContactPhone.emailAddress = seg['IN2.58']['IN2.58.4']; }
		if (seg['IN2.58']['IN2.58.5'].toString() != "") { in2[index].insuranceCoContactPhone.countryCode = seg['IN2.58']['IN2.58.5']; }
		if (seg['IN2.58']['IN2.58.6'].toString() != "") { in2[index].insuranceCoContactPhone.areaCityCode = seg['IN2.58']['IN2.58.6']; }
		if (seg['IN2.58']['IN2.58.7'].toString() != "") { in2[index].insuranceCoContactPhone.phoneNumber = seg['IN2.58']['IN2.58.7']; }
		if (seg['IN2.58']['IN2.58.8'].toString() != "") { in2[index].insuranceCoContactPhone.extension = seg['IN2.58']['IN2.58.8']; }
		if (seg['IN2.58']['IN2.58.9'].toString() != "") { in2[index].insuranceCoContactPhone.text = seg['IN2.58']['IN2.58.9']; }
		if (Object.keys(in2[index].insuranceCoContactPhone).length == 0) {
			delete in2[index].insuranceCoContactPhone;
		}

		// IN2.59, policyScope
		if (seg['IN2.59']['IN2.59.1'].toString() != "") { in2[index].policyScope = seg['IN2.59']['IN2.59.1']; }
		
		// IN2.60, policySource
		if (seg['IN2.60']['IN2.60.1'].toString() != "") { in2[index].policySource = seg['IN2.60']['IN2.60.1']; }
		
		// IN2.61, patientMemberNumber
		in2[index].patientMemberNumber = [];
		for each (field in seg['IN2.61']) {
			var block = {};
			if (field['IN2.61.1'].toString() != "") { block.id = field['IN2.61.1']; }
			if (field['IN2.61.2'].toString() != "") { block.identifierCheckDigit = field['IN2.61.2']; }
			if (field['IN2.61.3'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.61.3']; }
			block.assigningAuthority = {};
			if (field['IN2.61.4']['IN2.61.4.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.61.4']['IN2.61.4.1']; }
			if (field['IN2.61.4']['IN2.61.4.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.61.4']['IN2.61.4.2']; }
			if (field['IN2.61.4']['IN2.61.4.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.61.4']['IN2.61.4.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.61.4'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.61.4']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.61.5'].toString() != "") { block.idTypeCode = field['IN2.61.5']; }
			block.assigningFacility = {};
			if (field['IN2.61.6']['IN2.61.6.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.61.6']['IN2.61.6.1']; }
			if (field['IN2.61.6']['IN2.61.6.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.61.6']['IN2.61.6.2']; }
			if (field['IN2.61.6']['IN2.61.6.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.61.6']['IN2.61.6.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.61.6'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.61.6']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].patientMemberNumber.push(block);
			}
		}
		if (in2[index].patientMemberNumber.length == 0) {
			delete in2[index].patientMemberNumber;
		}

		// IN2.62, guarantorRelationshipToInsured
		if (seg['IN2.62']['IN2.62.1'].toString() != "") { in2[index].guarantorRelationshipToInsured = seg['IN2.62']['IN2.62.1']; }
		
		// IN2.63, insuredHomePhone
		in2[index].insuredHomePhone = [];
		for each (field in seg['IN2.63']) {
			var block = {};
			if (field['IN2.63.1'].toString() != "") { block.number = field['IN2.63.1']; }
			if (field['IN2.63.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.63.2']; }
			if (field['IN2.63.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.63.3']; }
			if (field['IN2.63.4'].toString() != "") { block.emailAddress = field['IN2.63.4']; }
			if (field['IN2.63.5'].toString() != "") { block.countryCode = field['IN2.63.5']; }
			if (field['IN2.63.6'].toString() != "") { block.areaCityCode = field['IN2.63.6']; }
			if (field['IN2.63.7'].toString() != "") { block.phoneNumber = field['IN2.63.7']; }
			if (field['IN2.63.8'].toString() != "") { block.extension = field['IN2.63.8']; }
			if (field['IN2.63.9'].toString() != "") { block.text = field['IN2.63.9']; }
			if (Object.keys(block).length > 0) {
				in2[index].insuredHomePhone.push(block);
			}
		}
		if (in2[index].insuredHomePhone.length == 0) {
			delete in2[index].insuredHomePhone;
		}

		// IN2.64, insuredEmployerPhone
		in2[index].insuredEmployerPhone = [];
		for each (field in seg['IN2.64']) {
			var block = {};
			if (field['IN2.64.1'].toString() != "") { block.number = field['IN2.64.1']; }
			if (field['IN2.64.2'].toString() != "") { block.telecommunicationUseCode = field['IN2.64.2']; }
			if (field['IN2.64.3'].toString() != "") { block.telecommunicationEquipmentType = field['IN2.64.3']; }
			if (field['IN2.64.4'].toString() != "") { block.emailAddress = field['IN2.64.4']; }
			if (field['IN2.64.5'].toString() != "") { block.countryCode = field['IN2.64.5']; }
			if (field['IN2.64.6'].toString() != "") { block.areaCityCode = field['IN2.64.6']; }
			if (field['IN2.64.7'].toString() != "") { block.phoneNumber = field['IN2.64.7']; }
			if (field['IN2.64.8'].toString() != "") { block.extension = field['IN2.64.8']; }
			if (field['IN2.64.9'].toString() != "") { block.text = field['IN2.64.9']; }
			if (Object.keys(block).length > 0) {
				in2[index].insuredEmployerPhone.push(block);
			}
		}
		if (in2[index].insuredEmployerPhone.length == 0) {
			delete in2[index].insuredEmployerPhone;
		}

		// IN2.65, militaryHandicappedProgram
		in2[index].militaryHandicappedProgram = {};
		if (seg['IN2.65']['IN2.65.1'].toString() != "") { in2[index].militaryHandicappedProgram.id = seg['IN2.65']['IN2.65.1']; }
		if (seg['IN2.65']['IN2.65.2'].toString() != "") { in2[index].militaryHandicappedProgram.text = seg['IN2.65']['IN2.65.2']; }
		if (seg['IN2.65']['IN2.65.3'].toString() != "") { in2[index].militaryHandicappedProgram.codingSystem = seg['IN2.65']['IN2.65.3']; }
		if (seg['IN2.65']['IN2.65.4'].toString() != "") { in2[index].militaryHandicappedProgram.altId = seg['IN2.65']['IN2.65.4']; }
		if (seg['IN2.65']['IN2.65.5'].toString() != "") { in2[index].militaryHandicappedProgram.altText = seg['IN2.65']['IN2.65.5']; }
		if (seg['IN2.65']['IN2.65.6'].toString() != "") { in2[index].militaryHandicappedProgram.altCodingSystem = seg['IN2.65']['IN2.65.6']; }
		if (Object.keys(in2[index].militaryHandicappedProgram).length == 0) {
			delete in2[index].militaryHandicappedProgram;
		}

		// IN2.66, suspendFlag
		if (seg['IN2.66']['IN2.66.1'].toString() != "") { in2[index].suspendFlag = seg['IN2.66']['IN2.66.1']; }
		
		// IN2.67, copayLimitFlag
		if (seg['IN2.67']['IN2.67.1'].toString() != "") { in2[index].copayLimitFlag = seg['IN2.67']['IN2.67.1']; }
		
		// IN2.68, stoplossLimitFlag
		if (seg['IN2.68']['IN2.68.1'].toString() != "") { in2[index].stoplossLimitFlag = seg['IN2.68']['IN2.68.1']; }
		
		// IN2.69, insuredOrganizationNameAndID
		in2[index].insuredOrganizationNameAndID = [];
		for each (field in seg['IN2.69']) {
			var block = {};
			if (field['IN2.69.1'].toString() != "") { block.organizationName = field['IN2.69.1']; }
			if (field['IN2.69.2'].toString() != "") { block.organizationNameTypeCode = field['IN2.69.2']; }
			if (field['IN2.69.3'].toString() != "") { block.idNumber = field['IN2.69.3']; }
			if (field['IN2.69.4'].toString() != "") { block.identifierCheckDigit = field['IN2.69.4']; }
			if (field['IN2.69.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.69.5']; }
			block.assigningAuthority = {};
			if (field['IN2.69.6']['IN2.69.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.69.6']['IN2.69.6.1']; }
			if (field['IN2.69.6']['IN2.69.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.69.6']['IN2.69.6.2']; }
			if (field['IN2.69.6']['IN2.69.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.69.6']['IN2.69.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.69.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.69.6']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.69.7'].toString() != "") { block.idTypeCode = field['IN2.69.7']; }
			block.assigningFacility = {};
			if (field['IN2.69.8']['IN2.69.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.69.8']['IN2.69.8.1']; }
			if (field['IN2.69.8']['IN2.69.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.69.8']['IN2.69.8.2']; }
			if (field['IN2.69.8']['IN2.69.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.69.8']['IN2.69.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.69.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.69.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].insuredOrganizationNameAndID.push(block);
			}
		}
		if (in2[index].insuredOrganizationNameAndID.length == 0) {
			delete in2[index].insuredOrganizationNameAndID;
		}

		// IN2.70, insuredEmployerOrganizationNameAndID
		in2[index].insuredEmployerOrganizationNameAndID = [];
		for each (field in seg['IN2.70']) {
			var block = {};
			if (field['IN2.70.1'].toString() != "") { block.organizationName = field['IN2.70.1']; }
			if (field['IN2.70.2'].toString() != "") { block.organizationNameTypeCode = field['IN2.70.2']; }
			if (field['IN2.70.3'].toString() != "") { block.idNumber = field['IN2.70.3']; }
			if (field['IN2.70.4'].toString() != "") { block.identifierCheckDigit = field['IN2.70.4']; }
			if (field['IN2.70.5'].toString() != "") { block.codeIdentifyingCheckDigitScheme = field['IN2.70.5']; }
			block.assigningAuthority = {};
			if (field['IN2.70.6']['IN2.70.6.1'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.70.6']['IN2.70.6.1']; }
			if (field['IN2.70.6']['IN2.70.6.2'].toString() != "") { block.assigningAuthority.universalId = field['IN2.70.6']['IN2.70.6.2']; }
			if (field['IN2.70.6']['IN2.70.6.3'].toString() != "") { block.assigningAuthority.universalIdType = field['IN2.70.6']['IN2.70.6.3']; }
			if (Object.keys(block.assigningAuthority).length == 0) {
				if (field['IN2.70.6'].toString() != "") { block.assigningAuthority.namespaceId = field['IN2.70.6']; }
				else delete block.assigningAuthority;
			}
			if (field['IN2.70.7'].toString() != "") { block.idTypeCode = field['IN2.70.7']; }
			block.assigningFacility = {};
			if (field['IN2.70.8']['IN2.70.8.1'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.70.8']['IN2.70.8.1']; }
			if (field['IN2.70.8']['IN2.70.8.2'].toString() != "") { block.assigningFacility.universalId = field['IN2.70.8']['IN2.70.8.2']; }
			if (field['IN2.70.8']['IN2.70.8.3'].toString() != "") { block.assigningFacility.universalIdType = field['IN2.70.8']['IN2.70.8.3']; }
			if (Object.keys(block.assigningFacility).length == 0) {
				if (field['IN2.70.8'].toString() != "") { block.assigningFacility.namespaceId = field['IN2.70.8']; }
				else delete block.assigningFacility;
			}
			if (Object.keys(block).length > 0) {
				in2[index].insuredEmployerOrganizationNameAndID.push(block);
			}
		}
		if (in2[index].insuredEmployerOrganizationNameAndID.length == 0) {
			delete in2[index].insuredEmployerOrganizationNameAndID;
		}
		
		// IN2.71, race
		if (seg['IN2.71']['IN2.71.1'].toString() != "") { in2[index].race = seg['IN2.71']['IN2.71.1']; }
		
		// IN2.72, hcfaPatientRelationshipToInsured
		in2[index].hcfaPatientRelationshipToInsured = {};
		if (seg['IN2.72']['IN2.72.1'].toString() != "") { in2[index].hcfaPatientRelationshipToInsured.id = seg['IN2.72']['IN2.72.1']; }
		if (seg['IN2.72']['IN2.72.2'].toString() != "") { in2[index].hcfaPatientRelationshipToInsured.text = seg['IN2.72']['IN2.72.2']; }
		if (seg['IN2.72']['IN2.72.3'].toString() != "") { in2[index].hcfaPatientRelationshipToInsured.codingSystem = seg['IN2.72']['IN2.72.3']; }
		if (seg['IN2.72']['IN2.72.4'].toString() != "") { in2[index].hcfaPatientRelationshipToInsured.altId = seg['IN2.72']['IN2.72.4']; }
		if (seg['IN2.72']['IN2.72.5'].toString() != "") { in2[index].hcfaPatientRelationshipToInsured.altText = seg['IN2.72']['IN2.72.5']; }
		if (seg['IN2.72']['IN2.72.6'].toString() != "") { in2[index].hcfaPatientRelationshipToInsured.altCodingSystem = seg['IN2.72']['IN2.72.6']; }
		if (Object.keys(in2[index].hcfaPatientRelationshipToInsured).length == 0) {
			delete in2[index].hcfaPatientRelationshipToInsured;
		}

		// clean up IN2 and increment index
		if (Object.keys(in2[index]).length == 0) {
			delete in2[index];
		} else {
			index++;
		}
	}
}

