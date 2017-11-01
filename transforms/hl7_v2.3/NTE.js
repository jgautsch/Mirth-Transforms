// NTE
var nte;
if (msg['NTE'].length() > 0) {
	nte = [];
	var index = 0;
	for each (seg in msg.NTE) {
		nte[index] = {};
		
		// NTE.1, setId
		if (seg['NTE.1']['NTE.1.1'].toString() != "") { nte[index].setId = seg['NTE.1']['NTE.1.1']; }

		// NTE.2, sourceOfComment
		if (seg['NTE.2']['NTE.2.1'].toString() != "") { nte[index].sourceOfComment = seg['NTE.2']['NTE.2.1']; }

		// NTE.3, comment
		nte[index].comment = [];
		for each (field in seg['NTE.3']) {
			var block = {};
			if (field['NTE.3.1'].toString() != "") { 
				nte[index].comment.push(field['NTE.3.1']);
			}
		}
		if (nte[index].comment.length == 0) {
			delete nte[index].comment;
		}

		// clean up NTE and increment index
		if (Object.keys(nte[index]).length == 0) {
			delete nte[index];
		} else {
			index++;
		}
	}
}

