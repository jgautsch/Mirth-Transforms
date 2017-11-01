// RGS
var rgs = {};

// RGS.1, setId
if (msg['RGS']['RGS.1']['RGS.1.1'].toString() != "") {rgs.setId = msg['RGS']['RGS.1']['RGS.1.1']; }

// RGS.2, segmentActionCode
if (msg['RGS']['RGS.2']['RGS.2.1'].toString() != "") {rgs.segmentActionCode = msg['RGS']['RGS.2']['RGS.2.1']; }

// RGS.3, resourceGroupId
rgs.resourceGroupId = {};
if (msg['RGS']['RGS.3']['RGS.3.1'].toString() != "") {rgs.resourceGroupId.id = msg['RGS']['RGS.3']['RGS.3.1']; }
if (msg['RGS']['RGS.3']['RGS.3.2'].toString() != "") {rgs.resourceGroupId.text = msg['RGS']['RGS.3']['RGS.3.2']; }
if (msg['RGS']['RGS.3']['RGS.3.3'].toString() != "") {rgs.resourceGroupId.codingSystem = msg['RGS']['RGS.3']['RGS.3.3']; }
if (msg['RGS']['RGS.3']['RGS.3.4'].toString() != "") {rgs.resourceGroupId.altId = msg['RGS']['RGS.3']['RGS.3.4']; }
if (msg['RGS']['RGS.3']['RGS.3.5'].toString() != "") {rgs.resourceGroupId.altText = msg['RGS']['RGS.3']['RGS.3.5']; }
if (msg['RGS']['RGS.3']['RGS.3.6'].toString() != "") {rgs.resourceGroupId.altCodingSystem = msg['RGS']['RGS.3']['RGS.3.6']; }
if (Object.keys(rgs.resourceGroupId).length == 0) {
	delete rgs.resourceGroupId;
}

// AIS (RGS)
var aisGroup = getSegmentsAfter(msg,'RGS','AIS',true);
if (aisGroup.length > 0) {
	rgs.ais = [];
	var indexAIS = 0;
	for each (aisSeg in aisGroup) {
		rgs.ais[indexAIS] = {};

		// AIS.1, setId
		if (aisSeg['AIS.1']['AIS.1.1'].toString() != "") { rgs.ais[indexAIS].setId = aisSeg['AIS.1']['AIS.1.1']; }

		// AIS.2, segmentActionCode
		if (aisSeg['AIS.2']['AIS.2.1'].toString() != "") { rgs.ais[indexAIS].segmentActionCode = aisSeg['AIS.2']['AIS.2.1']; }

		// AIS.3, universalServiceId
		rgs.ais[indexAIS].universalServiceId = {};
		if (aisSeg['AIS.3']['AIS.3.1'].toString() != "") { rgs.ais[indexAIS].universalServiceId.id = aisSeg['AIS.3']['AIS.3.1']; }
		if (aisSeg['AIS.3']['AIS.3.2'].toString() != "") { rgs.ais[indexAIS].universalServiceId.text = aisSeg['AIS.3']['AIS.3.2']; }
		if (aisSeg['AIS.3']['AIS.3.3'].toString() != "") { rgs.ais[indexAIS].universalServiceId.codingSystem = aisSeg['AIS.3']['AIS.3.3']; }
		if (aisSeg['AIS.3']['AIS.3.4'].toString() != "") { rgs.ais[indexAIS].universalServiceId.altId = aisSeg['AIS.3']['AIS.3.4']; }
		if (aisSeg['AIS.3']['AIS.3.5'].toString() != "") { rgs.ais[indexAIS].universalServiceId.altText = aisSeg['AIS.3']['AIS.3.5']; }
		if (aisSeg['AIS.3']['AIS.3.6'].toString() != "") { rgs.ais[indexAIS].universalServiceId.altCodingSystem = aisSeg['AIS.3']['AIS.3.6']; }
		if (Object.keys(rgs.ais[indexAIS].universalServiceId).length == 0) {
			delete rgs.ais[indexAIS].universalServiceId;
		}

		// AIS.4, startDateTime
		if (aisSeg['AIS.4']['AIS.4.1'].toString() != "") { rgs.ais[indexAIS].startDateTime = aisSeg['AIS.4']['AIS.4.1']; }

		// AIS.5, startDateTimeOffset
		if (aisSeg['AIS.5']['AIS.5.1'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffset = aisSeg['AIS.5']['AIS.5.1']; }

		// AIS.6, startDateTimeOffsetUnits
		rgs.ais[indexAIS].startDateTimeOffsetUnits = {};
		if (aisSeg['AIS.6']['AIS.6.1'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffsetUnits.id = aisSeg['AIS.6']['AIS.6.1']; }
		if (aisSeg['AIS.6']['AIS.6.2'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffsetUnits.text = aisSeg['AIS.6']['AIS.6.2']; }
		if (aisSeg['AIS.6']['AIS.6.3'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffsetUnits.codingSystem = aisSeg['AIS.6']['AIS.6.3']; }
		if (aisSeg['AIS.6']['AIS.6.4'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffsetUnits.altId = aisSeg['AIS.6']['AIS.6.4']; }
		if (aisSeg['AIS.6']['AIS.6.5'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffsetUnits.altText = aisSeg['AIS.6']['AIS.6.5']; }
		if (aisSeg['AIS.6']['AIS.6.6'].toString() != "") { rgs.ais[indexAIS].startDateTimeOffsetUnits.altCodingSystem = aisSeg['AIS.6']['AIS.6.6']; }
		if (Object.keys(rgs.ais[indexAIS].startDateTimeOffsetUnits).length == 0) {
			delete rgs.ais[indexAIS].startDateTimeOffsetUnits;
		}

		// AIS.7, duration
		if (aisSeg['AIS.7']['AIS.7.1'].toString() != "") { rgs.ais[indexAIS].duration = aisSeg['AIS.7']['AIS.7.1']; }

		// AIS.8, durationUnits
		rgs.ais[indexAIS].durationUnits = {};
		if (aisSeg['AIS.8']['AIS.8.1'].toString() != "") { rgs.ais[indexAIS].durationUnits.id = aisSeg['AIS.8']['AIS.8.1']; }
		if (aisSeg['AIS.8']['AIS.8.2'].toString() != "") { rgs.ais[indexAIS].durationUnits.text = aisSeg['AIS.8']['AIS.8.2']; }
		if (aisSeg['AIS.8']['AIS.8.3'].toString() != "") { rgs.ais[indexAIS].durationUnits.codingSystem = aisSeg['AIS.8']['AIS.8.3']; }
		if (aisSeg['AIS.8']['AIS.8.4'].toString() != "") { rgs.ais[indexAIS].durationUnits.altId = aisSeg['AIS.8']['AIS.8.4']; }
		if (aisSeg['AIS.8']['AIS.8.5'].toString() != "") { rgs.ais[indexAIS].durationUnits.altText = aisSeg['AIS.8']['AIS.8.5']; }
		if (aisSeg['AIS.8']['AIS.8.6'].toString() != "") { rgs.ais[indexAIS].durationUnits.altCodingSystem = aisSeg['AIS.8']['AIS.8.6']; }
		if (Object.keys(rgs.ais[indexAIS].durationUnits).length == 0) {
			delete rgs.ais[indexAIS].durationUnits;
		}

		// AIS.9, allowSubstitutionCode
		if (aisSeg['AIS.9']['AIS.9.1'].toString() != "") { rgs.ais[indexAIS].allowSubstitutionCode = aisSeg['AIS.9']['AIS.9.1']; }

		// AIS.10, fillerStatusCode
		rgs.ais[indexAIS].fillerStatusCode = {};
		if (aisSeg['AIS.10']['AIS.10.1'].toString() != "") { rgs.ais[indexAIS].fillerStatusCode.id = aisSeg['AIS.10']['AIS.10.1']; }
		if (aisSeg['AIS.10']['AIS.10.2'].toString() != "") { rgs.ais[indexAIS].fillerStatusCode.text = aisSeg['AIS.10']['AIS.10.2']; }
		if (aisSeg['AIS.10']['AIS.10.3'].toString() != "") { rgs.ais[indexAIS].fillerStatusCode.codingSystem = aisSeg['AIS.10']['AIS.10.3']; }
		if (aisSeg['AIS.10']['AIS.10.4'].toString() != "") { rgs.ais[indexAIS].fillerStatusCode.altId = aisSeg['AIS.10']['AIS.10.4']; }
		if (aisSeg['AIS.10']['AIS.10.5'].toString() != "") { rgs.ais[indexAIS].fillerStatusCode.altText = aisSeg['AIS.10']['AIS.10.5']; }
		if (aisSeg['AIS.10']['AIS.10.6'].toString() != "") { rgs.ais[indexAIS].fillerStatusCode.altCodingSystem = aisSeg['AIS.10']['AIS.10.6']; }
		if (Object.keys(rgs.ais[indexAIS].fillerStatusCode).length == 0) {
			delete rgs.ais[indexAIS].fillerStatusCode;
		}

		// NTE (AIS)
		var nteGroup = getSegmentsAfter(msg,aisSeg,'NTE',true);
		if (nteGroup.length > 0) {
			rgs.ais[indexAIS].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				rgs.ais[indexAIS].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { rgs.ais[indexAIS].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { rgs.ais[indexAIS].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				rgs.ais[indexAIS].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						rgs.ais[indexAIS].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				// clean up NTE and increment index
				if (Object.keys(rgs.ais[indexAIS].nte[indexNTE]).length == 0) {
					delete rgs.ais[indexAIS].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}
		// clean up NTE and increment index
		if (Object.keys(rgs.ais[indexAIS]).length == 0) {
			delete rgs.ais[indexAIS];
		} else {
			indexAIS++;
		}
	}
}

// AIG (RGS)
var aigGroup = getSegmentsAfter(msg,'RGS','AIG',true);
if (aigGroup.length > 0) {
	rgs.aig = [];
	var indexAIG = 0;
	for each (aigSeg in aigGroup) {
		rgs.aig[indexAIG] = {};

		// AIG.1, setId
		if (aigSeg['AIG.1']['AIG.1.1'].toString() != "") { rgs.aig[indexAIG].setId = aigSeg['AIG.1']['AIG.1.1']; }
		
		// AIG.2, segmentActionCode
		if (aigSeg['AIG.2']['AIG.2.1'].toString() != "") { rgs.aig[indexAIG].segmentActionCode = aigSeg['AIG.2']['AIG.2.1']; }

		// AIG.3, resourceId
		rgs.aig[indexAIG].resourceId = {};
		if (aigSeg['AIG.3']['AIG.3.1'].toString() != "") { rgs.aig[indexAIG].resourceId.id = aigSeg['AIG.3']['AIG.3.1'];}
		if (aigSeg['AIG.3']['AIG.3.2'].toString() != "") { rgs.aig[indexAIG].resourceId.text = aigSeg['AIG.3']['AIG.3.2'];}
		if (aigSeg['AIG.3']['AIG.3.3'].toString() != "") { rgs.aig[indexAIG].resourceId.codingSystem = aigSeg['AIG.3']['AIG.3.3'];}
		if (aigSeg['AIG.3']['AIG.3.4'].toString() != "") { rgs.aig[indexAIG].resourceId.altId = aigSeg['AIG.3']['AIG.3.4'];}
		if (aigSeg['AIG.3']['AIG.3.5'].toString() != "") { rgs.aig[indexAIG].resourceId.altText = aigSeg['AIG.3']['AIG.3.5'];}
		if (aigSeg['AIG.3']['AIG.3.6'].toString() != "") { rgs.aig[indexAIG].resourceId.altCodingSystem = aigSeg['AIG.3']['AIG.3.6'];}
		if (Object.keys(rgs.aig[indexAIG].resourceId).length == 0) { 
			delete rgs.aig[indexAIG].resourceId; 
		}
	
		// AIG.4, resourceType
		rgs.aig[indexAIG].resourceType = {};
		if (aigSeg['AIG.4']['AIG.4.1'].toString() != "") { rgs.aig[indexAIG].resourceType.id = aigSeg['AIG.4']['AIG.4.1'];}
		if (aigSeg['AIG.4']['AIG.4.2'].toString() != "") { rgs.aig[indexAIG].resourceType.text = aigSeg['AIG.4']['AIG.4.2'];}
		if (aigSeg['AIG.4']['AIG.4.3'].toString() != "") { rgs.aig[indexAIG].resourceType.codingSystem = aigSeg['AIG.4']['AIG.4.3'];}
		if (aigSeg['AIG.4']['AIG.4.4'].toString() != "") { rgs.aig[indexAIG].resourceType.altId = aigSeg['AIG.4']['AIG.4.4'];}
		if (aigSeg['AIG.4']['AIG.4.5'].toString() != "") { rgs.aig[indexAIG].resourceType.altText = aigSeg['AIG.4']['AIG.4.5'];}
		if (aigSeg['AIG.4']['AIG.4.6'].toString() != "") { rgs.aig[indexAIG].resourceType.altCodingSystem = aigSeg['AIG.4']['AIG.4.6'];}
		if (Object.keys(rgs.aig[indexAIG].resourceType).length == 0) { 
			delete rgs.aig[indexAIG].resourceType; 
		}

		// AIG.5, resourceGroup
		rgs.aig[indexAIG].resourceGroup = [];
		for each (field in aigSeg['AIG.5']) {
		    var block = {};
		    if (field['AIG.5.1'].toString() != "") { block.id = field['AIG.5.1']; }
			if (field['AIG.5.2'].toString() != "") { block.text = field['AIG.5.2']; }
			if (field['AIG.5.3'].toString() != "") { block.codingSystem = field['AIG.5.3']; }
			if (field['AIG.5.4'].toString() != "") { block.altId = field['AIG.5.4']; }
			if (field['AIG.5.5'].toString() != "") { block.altText = field['AIG.5.5']; }
			if (field['AIG.5.6'].toString() != "") { block.altCodingSystem = field['AIG.5.6']; }
		    if (Object.keys(block).length > 0) {
		        rgs.aig[indexAIG].resourceGroup.push(block);
		    }
		}
		if (rgs.aig[indexAIG].resourceGroup.length == 0) {
			delete rgs.aig[indexAIG].resourceGroup;
		}
			
		// AIG.6, resourceQuantity
		if (aigSeg['AIG.6']['AIG.6.1'].toString() != "") { rgs.aig[indexAIG].resourceQuantity = aigSeg['AIG.6']['AIG.6.1']; }

		// AIG.7, resourceQuantityUnits
		rgs.aig[indexAIG].resourceQuantityUnits = {};
		if (aigSeg['AIG.7']['AIG.7.1'].toString() != "") { rgs.aig[indexAIG].resourceQuantityUnits.id = aigSeg['AIG.7']['AIG.7.1'];}
		if (aigSeg['AIG.7']['AIG.7.2'].toString() != "") { rgs.aig[indexAIG].resourceQuantityUnits.text = aigSeg['AIG.7']['AIG.7.2'];}
		if (aigSeg['AIG.7']['AIG.7.3'].toString() != "") { rgs.aig[indexAIG].resourceQuantityUnits.codingSystem = aigSeg['AIG.7']['AIG.7.3'];}
		if (aigSeg['AIG.7']['AIG.7.4'].toString() != "") { rgs.aig[indexAIG].resourceQuantityUnits.altId = aigSeg['AIG.7']['AIG.7.4'];}
		if (aigSeg['AIG.7']['AIG.7.5'].toString() != "") { rgs.aig[indexAIG].resourceQuantityUnits.altText = aigSeg['AIG.7']['AIG.7.5'];}
		if (aigSeg['AIG.7']['AIG.7.6'].toString() != "") { rgs.aig[indexAIG].resourceQuantityUnits.altCodingSystem = aigSeg['AIG.7']['AIG.7.6'];}
		if (Object.keys(rgs.aig[indexAIG].resourceQuantityUnits).length == 0) { 
			delete rgs.aig[indexAIG].resourceQuantityUnits; 
		}

		// AIG.8, startDateTime
		if (aigSeg['AIG.8']['AIG.8.1'].toString() != "") { rgs.aig[indexAIG].startDateTime = aigSeg['AIG.8']['AIG.8.1']; }

		// AIG.9, startDateTimeOffset
		if (aigSeg['AIG.9']['AIG.9.1'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffset = aigSeg['AIG.9']['AIG.9.1']; }

		// AIG.10, startDateTimeOffsetUnits
		rgs.aig[indexAIG].startDateTimeOffsetUnits = {};
		if (aigSeg['AIG.10']['AIG.10.1'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffsetUnits.id = aigSeg['AIG.10']['AIG.10.1'];}
		if (aigSeg['AIG.10']['AIG.10.2'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffsetUnits.text = aigSeg['AIG.10']['AIG.10.2'];}
		if (aigSeg['AIG.10']['AIG.10.3'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffsetUnits.codingSystem = aigSeg['AIG.10']['AIG.10.3'];}
		if (aigSeg['AIG.10']['AIG.10.4'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffsetUnits.altId = aigSeg['AIG.10']['AIG.10.4'];}
		if (aigSeg['AIG.10']['AIG.10.5'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffsetUnits.altText = aigSeg['AIG.10']['AIG.10.5'];}
		if (aigSeg['AIG.10']['AIG.10.6'].toString() != "") { rgs.aig[indexAIG].startDateTimeOffsetUnits.altCodingSystem = aigSeg['AIG.10']['AIG.10.6'];}
		if (Object.keys(rgs.aig[indexAIG].startDateTimeOffsetUnits).length == 0) { 
			delete rgs.aig[indexAIG].startDateTimeOffsetUnits; 
		}

		// AIG.11, duration
		if (aigSeg['AIG.11']['AIG.11.1'].toString() != "") { rgs.aig[indexAIG].duration = aigSeg['AIG.11']['AIG.11.1']; }

		// AIG.12, durationUnits
		rgs.aig[indexAIG].durationUnits = {};
		if (aigSeg['AIG.12']['AIG.12.1'].toString() != "") { rgs.aig[indexAIG].durationUnits.id = aigSeg['AIG.12']['AIG.12.1'];}
		if (aigSeg['AIG.12']['AIG.12.2'].toString() != "") { rgs.aig[indexAIG].durationUnits.text = aigSeg['AIG.12']['AIG.12.2'];}
		if (aigSeg['AIG.12']['AIG.12.3'].toString() != "") { rgs.aig[indexAIG].durationUnits.codingSystem = aigSeg['AIG.12']['AIG.12.3'];}
		if (aigSeg['AIG.12']['AIG.12.4'].toString() != "") { rgs.aig[indexAIG].durationUnits.altId = aigSeg['AIG.12']['AIG.12.4'];}
		if (aigSeg['AIG.12']['AIG.12.5'].toString() != "") { rgs.aig[indexAIG].durationUnits.altText = aigSeg['AIG.12']['AIG.12.5'];}
		if (aigSeg['AIG.12']['AIG.12.6'].toString() != "") { rgs.aig[indexAIG].durationUnits.altCodingSystem = aigSeg['AIG.12']['AIG.12.6'];}
		if (Object.keys(rgs.aig[indexAIG].durationUnits).length == 0) { 
			delete rgs.aig[indexAIG].durationUnits; 
		}

		// AIG.13, allowSubstitutionCode
		if (aigSeg['AIG.13']['AIG.13.1'].toString() != "") { rgs.aig[indexAIG].allowSubstitutionCode = aigSeg['AIG.13']['AIG.13.1']; }

		// AIG.14, fillerStatusCode
		rgs.aig[indexAIG].fillerStatusCode = {};
		if (aigSeg['AIG.14']['AIG.14.1'].toString() != "") { rgs.aig[indexAIG].fillerStatusCode.id = aigSeg['AIG.14']['AIG.14.1'];}
		if (aigSeg['AIG.14']['AIG.14.2'].toString() != "") { rgs.aig[indexAIG].fillerStatusCode.text = aigSeg['AIG.14']['AIG.14.2'];}
		if (aigSeg['AIG.14']['AIG.14.3'].toString() != "") { rgs.aig[indexAIG].fillerStatusCode.codingSystem = aigSeg['AIG.14']['AIG.14.3'];}
		if (aigSeg['AIG.14']['AIG.14.4'].toString() != "") { rgs.aig[indexAIG].fillerStatusCode.altId = aigSeg['AIG.14']['AIG.14.4'];}
		if (aigSeg['AIG.14']['AIG.14.5'].toString() != "") { rgs.aig[indexAIG].fillerStatusCode.altText = aigSeg['AIG.14']['AIG.14.5'];}
		if (aigSeg['AIG.14']['AIG.14.6'].toString() != "") { rgs.aig[indexAIG].fillerStatusCode.altCodingSystem = aigSeg['AIG.14']['AIG.14.6'];}
		if (Object.keys(rgs.aig[indexAIG].fillerStatusCode).length == 0) { 
			delete rgs.aig[indexAIG].fillerStatusCode; 
		}

		// NTE (AIG)
		var nteGroup = getSegmentsAfter(msg,aigSeg,'NTE',true);
		if (nteGroup.length > 0) {
			rgs.aig[indexAIG].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				rgs.aig[indexAIG].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { rgs.aig[indexAIG].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { rgs.aig[indexAIG].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				rgs.aig[indexAIG].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						rgs.aig[indexAIG].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				// clean up NTE and increment index
				if (Object.keys(rgs.aig[indexAIG].nte[indexNTE]).length == 0) {
					delete rgs.aig[indexAIG].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
			
		}

		// clean up AIG and increment index
		if (Object.keys(rgs.aig[indexAIG]).length == 0) {
			delete rgs.aig[indexAIG];
		} else {
			indexAIG++;
		}
	}
}

// AIL (RGS)
var ailGroup = getSegmentsAfter(msg,'RGS','AIL',true);
if (ailGroup.length > 0) {
	rgs.ail = [];
	var indexAIL = 0;
	for each (ailSeg in ailGroup) {
		rgs.ail[indexAIL] = {};

		// AIL.1, setId
		if (ailSeg['AIL.1']['AIL.1.1'].toString() != "") { rgs.ail[indexAIL].setId = ailSeg['AIL.1']['AIL.1.1']; }

		// AIL.2, segmentActionCode
		if (ailSeg['AIL.2']['AIL.2.1'].toString() != "") { rgs.ail[indexAIL].segmentActionCode = ailSeg['AIL.2']['AIL.2.1']; }

		// AIL.3, locationResourceId
		rgs.ail[indexAIL].locationResourceId = {};
		if (ailSeg['AIL.3']['AIL.3.1'].toString() != "") { rgs.ail[indexAIL].locationResourceId.pointOfCare = ailSeg['AIL.3']['AIL.3.1']; }
		if (ailSeg['AIL.3']['AIL.3.2'].toString() != "") { rgs.ail[indexAIL].locationResourceId.room = ailSeg['AIL.3']['AIL.3.2']; }
		if (ailSeg['AIL.3']['AIL.3.3'].toString() != "") { rgs.ail[indexAIL].locationResourceId.bed = ailSeg['AIL.3']['AIL.3.3']; }
		rgs.ail[indexAIL].locationResourceId.facility = {};
		if (ailSeg['AIL.3']['AIL.3.4']['AIL.3.4.1'].toString() != "") { rgs.ail[indexAIL].locationResourceId.facility.nameSpaceId =  ailSeg['AIL.3']['AIL.3.4']['AIL.3.4.1']; }
		if (ailSeg['AIL.3']['AIL.3.4']['AIL.3.4.2'].toString() != "") { rgs.ail[indexAIL].locationResourceId.facility.universalId =  ailSeg['AIL.3']['AIL.3.4']['AIL.3.4.2']; }
		if (ailSeg['AIL.3']['AIL.3.4']['AIL.3.4.3'].toString() != "") { rgs.ail[indexAIL].locationResourceId.facility.universalIdType =  ailSeg['AIL.3']['AIL.3.4']['AIL.3.4.3']; }
		if (new Object.keys(rgs.ail[indexAIL].locationResourceId.facility).length == 0) {
			delete rgs.ail[indexAIL].locationResourceId.facility;
		}
		if (ailSeg['AIL.3']['AIL.3.5'].toString() != "") { rgs.ail[indexAIL].locationResourceId.locationStatus = ailSeg['AIL.3']['AIL.3.5']; }
		if (ailSeg['AIL.3']['AIL.3.6'].toString() != "") { rgs.ail[indexAIL].locationResourceId.personLocationType = ailSeg['AIL.3']['AIL.3.6']; }
		if (ailSeg['AIL.3']['AIL.3.7'].toString() != "") { rgs.ail[indexAIL].locationResourceId.building = ailSeg['AIL.3']['AIL.3.7']; }
		if (ailSeg['AIL.3']['AIL.3.8'].toString() != "") { rgs.ail[indexAIL].locationResourceId.floor = ailSeg['AIL.3']['AIL.3.8']; }
		if (ailSeg['AIL.3']['AIL.3.9'].toString() != "") { rgs.ail[indexAIL].locationResourceId.locationDescription = ailSeg['AIL.3']['AIL.3.9']; }
		if (Object.keys(rgs.ail[indexAIL].locationResourceId).length == 0) {
			delete rgs.ail[indexAIL].locationResourceId;
		}

		// AIL.4, locationType
		rgs.ail[indexAIL].locationType = {};
		if (ailSeg['AIL.4']['AIL.4.1'].toString() != "") { rgs.ail[indexAIL].locationType.id = ailSeg['AIL.4']['AIL.4.1']; }
		if (ailSeg['AIL.4']['AIL.4.2'].toString() != "") { rgs.ail[indexAIL].locationType.text = ailSeg['AIL.4']['AIL.4.2']; }
		if (ailSeg['AIL.4']['AIL.4.3'].toString() != "") { rgs.ail[indexAIL].locationType.codingSystem = ailSeg['AIL.4']['AIL.4.3']; }
		if (ailSeg['AIL.4']['AIL.4.4'].toString() != "") { rgs.ail[indexAIL].locationType.altId = ailSeg['AIL.4']['AIL.4.4']; }
		if (ailSeg['AIL.4']['AIL.4.5'].toString() != "") { rgs.ail[indexAIL].locationType.altText = ailSeg['AIL.4']['AIL.4.5']; }
		if (ailSeg['AIL.4']['AIL.4.6'].toString() != "") { rgs.ail[indexAIL].locationType.altCodingSystem = ailSeg['AIL.4']['AIL.4.6']; }
		if (Object.keys(rgs.ail[indexAIL].locationType).length == 0) {
			delete rgs.ail[indexAIL].locationType;
		}
		
		// AIL.5, locationGroup
		rgs.ail[indexAIL].locationType = {};
		if (ailSeg['AIL.5']['AIL.5.1'].toString() != "") { rgs.ail[indexAIL].locationGroup.id = ailSeg['AIL.5']['AIL.5.1']; }
		if (ailSeg['AIL.5']['AIL.5.2'].toString() != "") { rgs.ail[indexAIL].locationGroup.text = ailSeg['AIL.5']['AIL.5.2']; }
		if (ailSeg['AIL.5']['AIL.5.3'].toString() != "") { rgs.ail[indexAIL].locationGroup.codingSystem = ailSeg['AIL.5']['AIL.5.3']; }
		if (ailSeg['AIL.5']['AIL.5.4'].toString() != "") { rgs.ail[indexAIL].locationGroup.altId = ailSeg['AIL.5']['AIL.5.4']; }
		if (ailSeg['AIL.5']['AIL.5.5'].toString() != "") { rgs.ail[indexAIL].locationGroup.altText = ailSeg['AIL.5']['AIL.5.5']; }
		if (ailSeg['AIL.5']['AIL.5.6'].toString() != "") { rgs.ail[indexAIL].locationGroup.altCodingSystem = ailSeg['AIL.5']['AIL.5.6']; }
		if (Object.keys(rgs.ail[indexAIL].locationGroup).length == 0) {
			delete rgs.ail[indexAIL].locationGroup;
		}

		// AIL.6, startDateTime
		if (ailSeg['AIL.6']['AIL.6.1'].toString() != "") { rgs.ail[indexAIL].startDateTime = ailSeg['AIL.6']['AIL.6.1']; }

		// AIL.7, startDateTimeOffset
		if (ailSeg['AIL.7']['AIL.7.1'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffset = ailSeg['AIL.7']['AIL.7.1']; }

		// AIL.8, startDateTimeOffsetUnits
		rgs.ail[indexAIL].startDateTimeOffsetUnits = {};
		if (ailSeg['AIL.8']['AIL.8.1'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffsetUnits.id = ailSeg['AIL.8']['AIL.8.1']; }
		if (ailSeg['AIL.8']['AIL.8.2'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffsetUnits.text = ailSeg['AIL.8']['AIL.8.2']; }
		if (ailSeg['AIL.8']['AIL.8.3'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffsetUnits.codingSystem = ailSeg['AIL.8']['AIL.8.3']; }
		if (ailSeg['AIL.8']['AIL.8.4'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffsetUnits.altId = ailSeg['AIL.8']['AIL.8.4']; }
		if (ailSeg['AIL.8']['AIL.8.5'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffsetUnits.altText = ailSeg['AIL.8']['AIL.8.5']; }
		if (ailSeg['AIL.8']['AIL.8.6'].toString() != "") { rgs.ail[indexAIL].startDateTimeOffsetUnits.altCodingSystem = ailSeg['AIL.8']['AIL.8.6']; }
		if (Object.keys(rgs.ail[indexAIL].startDateTimeOffsetUnits).length == 0) {
			delete rgs.ail[indexAIL].startDateTimeOffsetUnits;
		}

		// AIL.9, duration
		if (ailSeg['AIL.9']['AIL.9.1'].toString() != "") { rgs.ail[indexAIL].duration = ailSeg['AIL.9']['AIL.9.1']; }

		// AIL.10, durationUnits
		rgs.ail[indexAIL].durationUnits = {};
		if (ailSeg['AIL.10']['AIL.10.1'].toString() != "") { rgs.ail[indexAIL].durationUnits.id = ailSeg['AIL.10']['AIL.10.1']; }
		if (ailSeg['AIL.10']['AIL.10.2'].toString() != "") { rgs.ail[indexAIL].durationUnits.text = ailSeg['AIL.10']['AIL.10.2']; }
		if (ailSeg['AIL.10']['AIL.10.3'].toString() != "") { rgs.ail[indexAIL].durationUnits.codingSystem = ailSeg['AIL.10']['AIL.10.3']; }
		if (ailSeg['AIL.10']['AIL.10.4'].toString() != "") { rgs.ail[indexAIL].durationUnits.altId = ailSeg['AIL.10']['AIL.10.4']; }
		if (ailSeg['AIL.10']['AIL.10.5'].toString() != "") { rgs.ail[indexAIL].durationUnits.altText = ailSeg['AIL.10']['AIL.10.5']; }
		if (ailSeg['AIL.10']['AIL.10.6'].toString() != "") { rgs.ail[indexAIL].durationUnits.altCodingSystem = ailSeg['AIL.10']['AIL.10.6']; }
		if (Object.keys(rgs.ail[indexAIL].durationUnits).length == 0) {
			delete rgs.ail[indexAIL].durationUnits;
		}

		// AIL.11, allowSubstitutionCode
		if (ailSeg['AIL.11']['AIL.11.1'].toString() != "") { rgs.ail[indexAIL].allowSubstitutionCode = ailSeg['AIL.11']['AIL.11.1']; }

		// AIL.12, fillerStatusCode
		rgs.ail[indexAIL].fillerStatusCode = {};
		if (ailSeg['AIL.12']['AIL.12.1'].toString() != "") { rgs.ail[indexAIL].fillerStatusCode.id = ailSeg['AIL.12']['AIL.12.1']; }
		if (ailSeg['AIL.12']['AIL.12.2'].toString() != "") { rgs.ail[indexAIL].fillerStatusCode.text = ailSeg['AIL.12']['AIL.12.2']; }
		if (ailSeg['AIL.12']['AIL.12.3'].toString() != "") { rgs.ail[indexAIL].fillerStatusCode.codingSystem = ailSeg['AIL.12']['AIL.12.3']; }
		if (ailSeg['AIL.12']['AIL.12.4'].toString() != "") { rgs.ail[indexAIL].fillerStatusCode.altId = ailSeg['AIL.12']['AIL.12.4']; }
		if (ailSeg['AIL.12']['AIL.12.5'].toString() != "") { rgs.ail[indexAIL].fillerStatusCode.altText = ailSeg['AIL.12']['AIL.12.5']; }
		if (ailSeg['AIL.12']['AIL.12.6'].toString() != "") { rgs.ail[indexAIL].fillerStatusCode.altCodingSystem = ailSeg['AIL.12']['AIL.12.6']; }
		if (Object.keys(rgs.ail[indexAIL].fillerStatusCode).length == 0) {
			delete rgs.ail[indexAIL].fillerStatusCode;
		}

		// NTE (AIL)
		var nteGroup = getSegmentsAfter(msg,ailSeg,'NTE',true);
		if (nteGroup.length > 0) {
			rgs.ail[indexAIL].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				rgs.ail[indexAIL]nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { rgs.ail[indexAIL].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { rgs.ail[indexAIL].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				rgs.ail[indexAIL].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						rgs.ail[indexAIL].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}

				// clean up NTE and increment index
				if (Object.keys(rgs.ail[indexAIL].nte[indexNTE]).length == 0) {
					delete rgs.ail[indexAIL].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
		}

		// clean up AIL and increment index
		if (Object.keys(rgs.ail[indexAIL]).length == 0) {
			delete rgs.ail[indexAIL];
		} else {
			indexAIL++;
		}
	}
}

// AIP (RGS)
var aipGroup = getSegmentsAfter(msg,'RGS','AIP',true);
if (aiProup.length > 0) {
	rgs.aip = [];
	var indexAIP = 0;
	for each (aipSeg in aipGroup) {
		rgs.aip[indexAIP] = {};

		// AIP.1, setId
		if (aipSeg['AIP.1']['AIP.1.1'].toString() != "") { rgs.aip[indexAIP].setId = aipSeg['AIP.1']['AIP.1.1']; }

		// AIP.2, segmentActionCode
		if (aipSeg['AIP.2']['AIP.2.1'].toString() != "") { rgs.aip[indexAIP].segmentActionCode = aipSeg['AIP.2']['AIP.2.1']; }

		// AIP.3, personnelResourceId
		rgs.aip[indexAIP].personnelResourceId = {};
		if (aipSeg['AIP.3']['AIP.3.1'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.pointOfCare = aipSeg['AIP.3']['AIP.3.1']; }
		if (aipSeg['AIP.3']['AIP.3.2'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.room = aipSeg['AIP.3']['AIP.3.2']; }
		if (aipSeg['AIP.3']['AIP.3.3'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.bed = aipSeg['AIP.3']['AIP.3.3']; }
		rgs.aip[indexAIP].personnelResourceId.facility = {};
		if (aipSeg['AIP.3']['AIP.3.4']['AIP.3.4.1'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.facility.nameSpaceId =  aipSeg['AIP.3']['AIP.3.4']['AIP.3.4.1']; }
		if (aipSeg['AIP.3']['AIP.3.4']['AIP.3.4.2'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.facility.universalId =  aipSeg['AIP.3']['AIP.3.4']['AIP.3.4.2']; }
		if (aipSeg['AIP.3']['AIP.3.4']['AIP.3.4.3'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.facility.universalIdType =  aipSeg['AIP.3']['AIP.3.4']['AIP.3.4.3']; }
		if (Object.keys(rgs.aip[indexAIP].personnelResourceId.facility).length == 0) {
			delete rgs.aip[indexAIP].personnelResourceId.facility;
		}
		if (aipSeg['AIP.3']['AIP.3.5'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.locationStatus = aipSeg['AIP.3']['AIP.3.5']; }
		if (aipSeg['AIP.3']['AIP.3.6'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.personLocationType = aipSeg['AIP.3']['AIP.3.6']; }
		if (aipSeg['AIP.3']['AIP.3.7'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.building = aipSeg['AIP.3']['AIP.3.7']; }
		if (aipSeg['AIP.3']['AIP.3.8'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.floor = aipSeg['AIP.3']['AIP.3.8']; }
		if (aipSeg['AIP.3']['AIP.3.9'].toString() != "") { rgs.aip[indexAIP].personnelResourceId.locationDescription = aipSeg['AIP.3']['AIP.3.9']; }
		if (Object.keys(rgs.aip[indexAIP].personnelResourceId).length == 0) {
			delete rgs.aip[indexAIP].personnelResourceId;
		}

		// AIP.4, resourceRole
		rgs.aip[indexAIP].resourceRole = {};
		if (aipSeg['AIP.4']['AIP.4.1'].toString() != "") { rgs.aip[indexAIP].resourceRole.id = aipSeg['AIP.4']['AIP.4.1']; }
		if (aipSeg['AIP.4']['AIP.4.2'].toString() != "") { rgs.aip[indexAIP].resourceRole.text = aipSeg['AIP.4']['AIP.4.2']; }
		if (aipSeg['AIP.4']['AIP.4.3'].toString() != "") { rgs.aip[indexAIP].resourceRole.codingSystem = aipSeg['AIP.4']['AIP.4.3']; }
		if (aipSeg['AIP.4']['AIP.4.4'].toString() != "") { rgs.aip[indexAIP].resourceRole.altId = aipSeg['AIP.4']['AIP.4.4']; }
		if (aipSeg['AIP.4']['AIP.4.5'].toString() != "") { rgs.aip[indexAIP].resourceRole.altText = aipSeg['AIP.4']['AIP.4.5']; }
		if (aipSeg['AIP.4']['AIP.4.6'].toString() != "") { rgs.aip[indexAIP].resourceRole.altCodingSystem = aipSeg['AIP.4']['AIP.4.6']; }
		if (Object.keys(rgs.aip[indexAIP].resourceRole).length == 0) {
			delete rgs.aip[indexAIP].resourceRole;
		}
		
		// AIP.5, resourceGroup
		rgs.aip[indexAIP].resourceGroup = {};
		if (aipSeg['AIP.5']['AIP.5.1'].toString() != "") { rgs.aip[indexAIP].resourceGroup.id = aipSeg['AIP.5']['AIP.5.1']; }
		if (aipSeg['AIP.5']['AIP.5.2'].toString() != "") { rgs.aip[indexAIP].resourceGroup.text = aipSeg['AIP.5']['AIP.5.2']; }
		if (aipSeg['AIP.5']['AIP.5.3'].toString() != "") { rgs.aip[indexAIP].resourceGroup.codingSystem = aipSeg['AIP.5']['AIP.5.3']; }
		if (aipSeg['AIP.5']['AIP.5.4'].toString() != "") { rgs.aip[indexAIP].resourceGroup.altId = aipSeg['AIP.5']['AIP.5.4']; }
		if (aipSeg['AIP.5']['AIP.5.5'].toString() != "") { rgs.aip[indexAIP].resourceGroup.altText = aipSeg['AIP.5']['AIP.5.5']; }
		if (aipSeg['AIP.5']['AIP.5.6'].toString() != "") { rgs.aip[indexAIP].resourceGroup.altCodingSystem = aipSeg['AIP.5']['AIP.5.6']; }
		if (Object.keys(rgs.aip[indexAIP].resourceGroup).length == 0) {
			delete rgs.aip[indexAIP].resourceGroup;
		}

		// AIP.6, startDateTime
		if (aipSeg['AIP.6']['AIP.6.1'].toString() != "") { rgs.aip[indexAIP].startDateTime = aipSeg['AIP.6']['AIP.6.1']; }

		// AIP.7, startDateTimeOffset
		if (aipSeg['AIP.7']['AIP.7.1'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffset = aipSeg['AIP.7']['AIP.7.1']; }

		// AIP.8, startDateTimeOffsetUnits
		rgs.aip[indexAIP].startDateTimeOffsetUnits = {};
		if (aipSeg['AIP.8']['AIP.8.1'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffsetUnits.id = aipSeg['AIP.8']['AIP.8.1']; }
		if (aipSeg['AIP.8']['AIP.8.2'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffsetUnits.text = aipSeg['AIP.8']['AIP.8.2']; }
		if (aipSeg['AIP.8']['AIP.8.3'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffsetUnits.codingSystem = aipSeg['AIP.8']['AIP.8.3']; }
		if (aipSeg['AIP.8']['AIP.8.4'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffsetUnits.altId = aipSeg['AIP.8']['AIP.8.4']; }
		if (aipSeg['AIP.8']['AIP.8.5'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffsetUnits.altText = aipSeg['AIP.8']['AIP.8.5']; }
		if (aipSeg['AIP.8']['AIP.8.6'].toString() != "") { rgs.aip[indexAIP].startDateTimeOffsetUnits.altCodingSystem = aipSeg['AIP.8']['AIP.8.6']; }
		if (Object.keys(rgs.aip[indexAIP].startDateTimeOffsetUnits).length == 0) {
			delete rgs.aip[indexAIP].startDateTimeOffsetUnits;
		}

		// AIP.9, duration
		if (aipSeg['AIP.9']['AIP.9.1'].toString() != "") { rgs.aip[indexAIP].duration = aipSeg['AIP.9']['AIP.9.1']; }

		// AIP.10, durationUnits
		rgs.aip[indexAIP].durationUnits = {};
		if (aipSeg['AIP.10']['AIP.10.1'].toString() != "") { rgs.aip[indexAIP].durationUnits.id = aipSeg['AIP.10']['AIP.10.1']; }
		if (aipSeg['AIP.10']['AIP.10.2'].toString() != "") { rgs.aip[indexAIP].durationUnits.text = aipSeg['AIP.10']['AIP.10.2']; }
		if (aipSeg['AIP.10']['AIP.10.3'].toString() != "") { rgs.aip[indexAIP].durationUnits.codingSystem = aipSeg['AIP.10']['AIP.10.3']; }
		if (aipSeg['AIP.10']['AIP.10.4'].toString() != "") { rgs.aip[indexAIP].durationUnits.altId = aipSeg['AIP.10']['AIP.10.4']; }
		if (aipSeg['AIP.10']['AIP.10.5'].toString() != "") { rgs.aip[indexAIP].durationUnits.altText = aipSeg['AIP.10']['AIP.10.5']; }
		if (aipSeg['AIP.10']['AIP.10.6'].toString() != "") { rgs.aip[indexAIP].durationUnits.altCodingSystem = aipSeg['AIP.10']['AIP.10.6']; }
		if (Object.keys(rgs.aip[indexAIP].durationUnits).length == 0) {
			delete rgs.aip[indexAIP].durationUnits;
		}

		// AIP.11, allowSubstitutionCode
		if (aipSeg['AIP.11']['AIP.11.1'].toString() != "") { rgs.aip[indexAIP].allowSubstitutionCode = aipSeg['AIP.11']['AIP.11.1']; }

		// AIP.12, fillerStatusCode
		rgs.aip[indexAIP].fillerStatusCode = {};
		if (aipSeg['AIP.12']['AIP.12.1'].toString() != "") { rgs.aip[indexAIP].fillerStatusCode.id = aipSeg['AIP.12']['AIP.12.1']; }
		if (aipSeg['AIP.12']['AIP.12.2'].toString() != "") { rgs.aip[indexAIP].fillerStatusCode.text = aipSeg['AIP.12']['AIP.12.2']; }
		if (aipSeg['AIP.12']['AIP.12.3'].toString() != "") { rgs.aip[indexAIP].fillerStatusCode.codingSystem = aipSeg['AIP.12']['AIP.12.3']; }
		if (aipSeg['AIP.12']['AIP.12.4'].toString() != "") { rgs.aip[indexAIP].fillerStatusCode.altId = aipSeg['AIP.12']['AIP.12.4']; }
		if (aipSeg['AIP.12']['AIP.12.5'].toString() != "") { rgs.aip[indexAIP].fillerStatusCode.altText = aipSeg['AIP.12']['AIP.12.5']; }
		if (aipSeg['AIP.12']['AIP.12.6'].toString() != "") { rgs.aip[indexAIP].fillerStatusCode.altCodingSystem = aipSeg['AIP.12']['AIP.12.6']; }
		if (Object.keys(rgs.aip[indexAIP].fillerStatusCode).length == 0) {
			delete rgs.aip[indexAIP].fillerStatusCode;
		}

		// NTE (AIP)
		var nteGroup = getSegmentsAfter(msg,aipSeg,'NTE',true);
		if (nteGroup.length > 0) {
			rgs.aip[indexAIP].nte = [];
			var indexNTE = 0;
			for each (nteSeg in nteGroup) {
				rgs.aip[indexAIP].nte[indexNTE] = {};

				// NTE.1, setId
				if (nteSeg['NTE.1']['NTE.1.1'].toString() != "") { rgs.aip[indexAIP].nte[indexNTE].setId = nteSeg['NTE.1']['NTE.1.1']; }

				// NTE.2, sourceOfComment
				if (nteSeg['NTE.2']['NTE.2.1'].toString() != "") { rgs.aip[indexAIP].nte[indexNTE].sourceOfComment = nteSeg['NTE.2']['NTE.2.1']; }

				// NTE.3, comment
				rgs.aip[indexAIP].nte[indexNTE].comment = [];
				for each (field in nteSeg['NTE.3']) {
					var block = {};
					if (field['NTE.3.1'].toString() != "") { 
						rgs.aip[indexAIP].nte[indexNTE].comment.push(field['NTE.3.1']);
					}
				}
				
				// clean up NTE and increment index
				if (Object.keys(rgs.aip[indexAIP].nte[indexNTE]).length == 0) {
					delete rgs.aip[indexAIP].nte[indexNTE];
				} else {
					indexNTE++;
				}
			}
			
		}

		// clean up AIP and increment index
		if (Object.keys(rgs.aip[indexAIP]).length == 0) {
			delete rgs.aip[indexAIP];
		} else {
			indexAIP++;
		}
	}
}