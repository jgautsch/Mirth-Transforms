
/*******************
  SINGLE SEGMENTS
*******************/

var abc = {};
// S single field
if (msg['ABC']['ABC.123']['ABC.123.123'].toString() != "") { abc.field = msg['ABC']['ABC.123']['ABC.123.123']; }

// SSF single field with subfields
abc.field2 = {};
if (msg['ABC']['ABC.123']['ABC.123.123'].toString() != "") { abc.field2.subfield1 = msg['ABC']['ABC.123']['ABC.123.123'];}
if (msg['ABC']['ABC.123']['ABC.123.234'].toString() != "") { abc.field2.subfield2 = msg['ABC']['ABC.123']['ABC.123.234'];}
if (Object.keys(abc.field2).length == 0) {
	delete abc.field2;
}

// SA array field
abc.field3 = [];
for each (field in msg['ABC']['ABC.123']) {
	if (field['ABC.123.1'].toString() != "") { 
		abc.field3.push(field['ABC.123.1']); 
	}
}
if (abc.field3.length == 0) {
	delete abc.field3;
}

// SASF array field with subfields
abc.field4 = [];
for each (field in msg['ABC']['ABC.123']) {
    var block = {};
    if (field['ABC.123.123'].toString() != "") { block.subfield1 = field['ABC.123.123']; }
    if (field['ABC.123.234'].toString() !="") { block.subfield2 = field['ABC.123.234']; }
    if (Object.keys(block).length > 0) {
        abc.field4.push(block);
    }
}
if (abc.field4.length == 0) {
	delete abc.field4;
}



/*******************
 REPEATING SEGMENTS
*******************/
var xyz;
if (msg['XYZ'].length() > 0) {
	xyz = [];
	var index = 0;
	for each (seg in msg.XYZ) {
		xyz[index] = {};

		// RS single field
		if (seg['XYZ.123']['XYZ.123.123'].toString() != "") { xyz[index].field = seg['XYZ.123']['XYZ.123.123']; }
		
		// RSF single field with subfields
		xyz[index].field2 = {};
		if (seg['XYZ.123']['XYZ.123.123'].toString() != "") { xyz[index].field2.subfield1 = seg['XYZ.123']['XYZ.123.123'];}
		if (seg['XYZ.123']['XYZ.123.234'].toString() != "") { xyz[index].field2.subfield2 = seg['XYZ.123']['XYZ.123.234'];}
		if (Object.keys(xyz[index].field2).length == 0) { 
			delete xyz[index].field2; 
		}

		// RA array field
		xyz[index].field3 = [];
		for each (field in seg['XYZ.123']) {
			if (field['XYZ.123.1'].toString() != "") { 
				xyz[index].field3.push(field['XYZ.123.1']); 
			}
		}
		if (xyz[index].field3.length == 0) {
			delete xyz[index].field3;
		}

		// RASF array field with subfields
		xyz[index].field4 = [];
		for each (field in seg['XYZ.123']) {
		    var block = {};
		    if (field['XYZ.123.123'].toString() != "") { block.subfield1 = field['XYZ.123.123']; }
		    if (field['XYZ.123.234'].toString() != "") { block.subfield2 = field['XYZ.123.234']; }
		    if (Object.keys(block).length > 0) {
		        xyz[index].field4.push(block);
		    }
		}
		if (xyz[index].field4.length == 0) {
			delete xyz[index].field4;
		}	

		// NRS nested repeating segment
		var abcGroup = getSegmentsAfter(msg,seg,'ABC',true);
		if (abcGroup.length > 0) {
			xyz[index].abc = [];
			var indexABC = 0;
			for each(abcSeg in abcGroup) {
				xyz[index].abc[indexABC] = {};
				//abcSeg = msg['ABC']

				//ABC.1, label, nested repeating single
				if (abcSeg['ABC.1']['ABC.1.1'].toString() != "") { xyz[index].abc[indexABC].field = abcSeg['ABC.1']['ABC.1.1'] ;}

				//ABC.2, label2, nested repeating single with subfields
				xyz[index].abc[indexABC].field2 = {};
				if (abcSeg['ABC.2']['ABC.2.1'].toString() != "") {xyz[index].abc[indexABC].field2.subfield2 = abcSeg['ABC.2']['ABC.2.1']; }
				if (Object.keys(xyz[index].abc[indexABC].field2).length == 0) {
					delete xyz[index].abc[indexABC].field2;
				}

				//ABC.3, label3, nested repeating array
				xyz[index].abc[indexABC].field3 = [];
				for each (field in abcSeg['ABC.3']) {
					if (field['ABC.3.1'].toString() != "") {
						xyz[index].abc[indexABC].field3.push(field['ABC.3.1']);
					}
				}

				//ABC.4, label4, nested repeating array field with subfields
				xyz[index].abc[indexABC].field4 = [];
				for each (field in abcSeg['ABC.4']) {
					var block = {};
					if (field['ABC.4.1'].toString() != "") { block.subfield1 = field['ABC.4.1']; }
					if (Object.keys(block).length > 0) {
						xyz[index].abc[indexABC].field4.push(block);
					}
				}

				// end of all
				if (Object.keys(xyz[index].abc[indexABC]).length == 0) {
					delete xyz[index].abc[indexABC];
				} else {
					indexABC++;
				}
			}
		}

		// end of all
		if (Object.keys(xyz[index]).length == 0) {
			delete xyz[index];
		} else {
			index++;
		}
	}
}







