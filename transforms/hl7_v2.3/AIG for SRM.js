// AIG
var aig;
if (msg['AIG'].length() > 0) {
	aig = [];
	var index = 0;
	for each (seg in msg.AIG) {
		aig[index] = {};

		// AIG.1, setId
		if (seg['AIG.1']['AIG.1.1'].toString() != "") { aig[index].setId = seg['AIG.1']['AIG.1.1']; }
		
		// AIG.2, segmentActionCode
		if (seg['AIG.2']['AIG.2.1'].toString() != "") { aig[index].segmentActionCode = seg['AIG.2']['AIG.2.1']; }

		// AIG.3, resourceId
		aig[index].resourceId = {};
		if (seg['AIG.3']['AIG.3.1'].toString() != "") { aig[index].resourceId.id = seg['AIG.3']['AIG.3.1'];}
		if (seg['AIG.3']['AIG.3.2'].toString() != "") { aig[index].resourceId.text = seg['AIG.3']['AIG.3.2'];}
		if (seg['AIG.3']['AIG.3.3'].toString() != "") { aig[index].resourceId.codingSystem = seg['AIG.3']['AIG.3.3'];}
		if (seg['AIG.3']['AIG.3.4'].toString() != "") { aig[index].resourceId.altId = seg['AIG.3']['AIG.3.4'];}
		if (seg['AIG.3']['AIG.3.5'].toString() != "") { aig[index].resourceId.altText = seg['AIG.3']['AIG.3.5'];}
		if (seg['AIG.3']['AIG.3.6'].toString() != "") { aig[index].resourceId.altCodingSystem = seg['AIG.3']['AIG.3.6'];}
		if (Object.keys(aig[index].resourceId).length == 0) { 
			delete aig[index].resourceId; 
		}
	
		// AIG.4, resourceType
		aig[index].resourceType = {};
		if (seg['AIG.4']['AIG.4.1'].toString() != "") { aig[index].resourceType.id = seg['AIG.4']['AIG.4.1'];}
		if (seg['AIG.4']['AIG.4.2'].toString() != "") { aig[index].resourceType.text = seg['AIG.4']['AIG.4.2'];}
		if (seg['AIG.4']['AIG.4.3'].toString() != "") { aig[index].resourceType.codingSystem = seg['AIG.4']['AIG.4.3'];}
		if (seg['AIG.4']['AIG.4.4'].toString() != "") { aig[index].resourceType.altId = seg['AIG.4']['AIG.4.4'];}
		if (seg['AIG.4']['AIG.4.5'].toString() != "") { aig[index].resourceType.altText = seg['AIG.4']['AIG.4.5'];}
		if (seg['AIG.4']['AIG.4.6'].toString() != "") { aig[index].resourceType.altCodingSystem = seg['AIG.4']['AIG.4.6'];}
		if (Object.keys(aig[index].resourceType).length == 0) { 
			delete aig[index].resourceType; 
		}

		// AIG.5, resourceGroup
		aig[index].resourceGroup = [];
		for each (field in seg['AIG.5']) {
		    var block = {};
		    if (field['AIG.5.1'].toString() != "") { block.id = field['AIG.5.1']; }
			if (field['AIG.5.2'].toString() != "") { block.text = field['AIG.5.2']; }
			if (field['AIG.5.3'].toString() != "") { block.codingSystem = field['AIG.5.3']; }
			if (field['AIG.5.4'].toString() != "") { block.altId = field['AIG.5.4']; }
			if (field['AIG.5.5'].toString() != "") { block.altText = field['AIG.5.5']; }
			if (field['AIG.5.6'].toString() != "") { block.altCodingSystem = field['AIG.5.6']; }
		    if (Object.keys(block).length > 0) {
		        aig[index].resourceGroup.push(block);
		    }
		}
		if (aig[index].resourceGroup.length == 0) {
			delete aig[index].resourceGroup;
		}
			
		// AIG.6, resourceQuantity
		if (seg['AIG.6']['AIG.6.1'].toString() != "") { aig[index].resourceQuantity = seg['AIG.6']['AIG.6.1']; }

		// AIG.7, resourceQuantityUnits
		aig[index].resourceQuantityUnits = {};
		if (seg['AIG.7']['AIG.7.1'].toString() != "") { aig[index].resourceQuantityUnits.id = seg['AIG.7']['AIG.7.1'];}
		if (seg['AIG.7']['AIG.7.2'].toString() != "") { aig[index].resourceQuantityUnits.text = seg['AIG.7']['AIG.7.2'];}
		if (seg['AIG.7']['AIG.7.3'].toString() != "") { aig[index].resourceQuantityUnits.codingSystem = seg['AIG.7']['AIG.7.3'];}
		if (seg['AIG.7']['AIG.7.4'].toString() != "") { aig[index].resourceQuantityUnits.altId = seg['AIG.7']['AIG.7.4'];}
		if (seg['AIG.7']['AIG.7.5'].toString() != "") { aig[index].resourceQuantityUnits.altText = seg['AIG.7']['AIG.7.5'];}
		if (seg['AIG.7']['AIG.7.6'].toString() != "") { aig[index].resourceQuantityUnits.altCodingSystem = seg['AIG.7']['AIG.7.6'];}
		if (Object.keys(aig[index].resourceQuantityUnits).length == 0) { 
			delete aig[index].resourceQuantityUnits; 
		}

		// AIG.8, startDateTime
		if (seg['AIG.8']['AIG.8.1'].toString() != "") { aig[index].startDateTime = seg['AIG.8']['AIG.8.1']; }

		// AIG.9, startDateTimeOffset
		if (seg['AIG.9']['AIG.9.1'].toString() != "") { aig[index].startDateTimeOffset = seg['AIG.9']['AIG.9.1']; }

		// AIG.10, startDateTimeOffsetUnits
		aig[index].startDateTimeOffsetUnits = {};
		if (seg['AIG.10']['AIG.10.1'].toString() != "") { aig[index].startDateTimeOffsetUnits.id = seg['AIG.10']['AIG.10.1'];}
		if (seg['AIG.10']['AIG.10.2'].toString() != "") { aig[index].startDateTimeOffsetUnits.text = seg['AIG.10']['AIG.10.2'];}
		if (seg['AIG.10']['AIG.10.3'].toString() != "") { aig[index].startDateTimeOffsetUnits.codingSystem = seg['AIG.10']['AIG.10.3'];}
		if (seg['AIG.10']['AIG.10.4'].toString() != "") { aig[index].startDateTimeOffsetUnits.altId = seg['AIG.10']['AIG.10.4'];}
		if (seg['AIG.10']['AIG.10.5'].toString() != "") { aig[index].startDateTimeOffsetUnits.altText = seg['AIG.10']['AIG.10.5'];}
		if (seg['AIG.10']['AIG.10.6'].toString() != "") { aig[index].startDateTimeOffsetUnits.altCodingSystem = seg['AIG.10']['AIG.10.6'];}
		if (Object.keys(aig[index].startDateTimeOffsetUnits).length == 0) { 
			delete aig[index].startDateTimeOffsetUnits; 
		}

		// AIG.11, duration
		if (seg['AIG.11']['AIG.11.1'].toString() != "") { aig[index].duration = seg['AIG.11']['AIG.11.1']; }

		// AIG.12, durationUnits
		aig[index].durationUnits = {};
		if (seg['AIG.12']['AIG.12.1'].toString() != "") { aig[index].durationUnits.id = seg['AIG.12']['AIG.12.1'];}
		if (seg['AIG.12']['AIG.12.2'].toString() != "") { aig[index].durationUnits.text = seg['AIG.12']['AIG.12.2'];}
		if (seg['AIG.12']['AIG.12.3'].toString() != "") { aig[index].durationUnits.codingSystem = seg['AIG.12']['AIG.12.3'];}
		if (seg['AIG.12']['AIG.12.4'].toString() != "") { aig[index].durationUnits.altId = seg['AIG.12']['AIG.12.4'];}
		if (seg['AIG.12']['AIG.12.5'].toString() != "") { aig[index].durationUnits.altText = seg['AIG.12']['AIG.12.5'];}
		if (seg['AIG.12']['AIG.12.6'].toString() != "") { aig[index].durationUnits.altCodingSystem = seg['AIG.12']['AIG.12.6'];}
		if (Object.keys(aig[index].durationUnits).length == 0) { 
			delete aig[index].durationUnits; 
		}

		// AIG.13, allowSubstitutionCode
		if (seg['AIG.13']['AIG.13.1'].toString() != "") { aig[index].allowSubstitutionCode = seg['AIG.13']['AIG.13.1']; }

		// AIG.14, fillerStatusCode
		aig[index].fillerStatusCode = {};
		if (seg['AIG.14']['AIG.14.1'].toString() != "") { aig[index].fillerStatusCode.id = seg['AIG.14']['AIG.14.1'];}
		if (seg['AIG.14']['AIG.14.2'].toString() != "") { aig[index].fillerStatusCode.text = seg['AIG.14']['AIG.14.2'];}
		if (seg['AIG.14']['AIG.14.3'].toString() != "") { aig[index].fillerStatusCode.codingSystem = seg['AIG.14']['AIG.14.3'];}
		if (seg['AIG.14']['AIG.14.4'].toString() != "") { aig[index].fillerStatusCode.altId = seg['AIG.14']['AIG.14.4'];}
		if (seg['AIG.14']['AIG.14.5'].toString() != "") { aig[index].fillerStatusCode.altText = seg['AIG.14']['AIG.14.5'];}
		if (seg['AIG.14']['AIG.14.6'].toString() != "") { aig[index].fillerStatusCode.altCodingSystem = seg['AIG.14']['AIG.14.6'];}
		if (Object.keys(aig[index].fillerStatusCode).length == 0) { 
			delete aig[index].fillerStatusCode; 
		}

		// APR (AIG)
		var aprGroup = getSegmentsAfter(msg,seg,'APR',true);
		if (aprGroup.length > 0) {
			aig[index].apr = [];
			var indexAPR = 0;
			for each (aprSeg in aprGroup) {
				aig[index].apr[indexAPR] = {}

				// APR.1, timeSelectionCriteria
				aig[index].apr[indexAPR].timeSelectionCriteria = [];
				for each (field in aprSeg['APR.1']) {
					var block = {};
					if (field['APR.1.1'].toString() != "") { block.parameterClass = field['APR.1.1']; }
					if (field['APR.1.2'].toString() != "") { block.parameterValue = field['APR.1.2']; }
					if (Object.keys(block).length > 0) {
						aig[index].apr[indexAPR].timeSelectionCriteria.push(block);
					}
				}
				if (aig[index].apr[indexAPR].timeSelectionCriteria.length == 0) {
					delete aig[index].apr[indexAPR].timeSelectionCriteria;
				}

				// APR.2, resourceSelectionCriteria
				aig[index].apr[indexAPR].resourceSelectionCriteria = [];
				for each (field in aprSeg['APR.2']) {
					var block = {};
					if (field['APR.2.1'].toString() != "") { block.parameterClass = field['APR.2.1']; }
					if (field['APR.2.2'].toString() != "") { block.parameterValue = field['APR.2.2']; }
					if (Object.keys(block).length > 0) {
						aig[index].apr[indexAPR].resourceSelectionCriteria.push(block);
					}
				}
				if (aig[index].apr[indexAPR].resourceSelectionCriteria.length == 0) {
					delete aig[index].apr[indexAPR].resourceSelectionCriteria;
				}

				// APR.3, locationSelectionCriteria
				aig[index].apr[indexAPR].locationSelectionCriteria = [];
				for each (field in aprSeg['APR.3']) {
					var block = {};
					if (field['APR.3.1'].toString() != "") { block.parameterClass = field['APR.3.1']; }
					if (field['APR.3.2'].toString() != "") { block.parameterValue = field['APR.3.2']; }
					if (Object.keys(block).length > 0) {
						aig[index].apr[indexAPR].locationSelectionCriteria.push(block);
					}
				}
				if (aig[index].apr[indexAPR].locationSelectionCriteria.length == 0) {
					delete aig[index].apr[indexAPR].locationSelectionCriteria;
				}

				// APR.4, slotSpacingCriteria
				if (aprSeg['APR.4']['APR.4.1'].toString() != "") { aig[index].apr[indexAPR].slotSpacingCriteria = aprSeg['APR.4']['APR.4.1']; }

				// APR.5, fillerOverrideCriteria
				aig[index].apr[indexAPR].fillerSelectionCriteria = [];
				for each (field in seg['APR.5']) {
					var block = {};
					if (field['APR.5.1'].toString() != "") { block.parameterClass = field['APR.5.1']; }
					if (field['APR.5.2'].toString() != "") { block.parameterValue = field['APR.5.2']; }
					if (Object.keys(block).length > 0) {
						aig[index].apr[indexAPR].fillerSelectionCriteria.push(block);
					}
				}
				if (aig[index].apr[indexAPR].fillerSelectionCriteria.length == 0) {
					delete aig[index].apr[indexAPR].fillerSelectionCriteria;
				}

				// clean up APR and increment index
				if (Object.keys(aig[index].apr[indexAPR]).length == 0) {
					delete aig[index].apr[indexAPR];
				} else {
					indexAPR++;
				}
			}
		}

		// NTE (AIG)
		var nteGroup = getSegmentsAfter(msg,seg,'NTE',true);
		if (nteGroup.length > 0) {
			aig[index].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				aig[index].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { aig[index].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { aig[index].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				aig[index].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						aig[index].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				// clean up NTE and increment index
				if (Object.keys(aig[index].nte[indexNTE]).length == 0) {
					delete aig[index].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// clean up AIG and increment index
		if (Object.keys(aig[index]).length == 0) {
			delete aig[index];
		} else {
			index++;
		}
	}
}
