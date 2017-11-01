// AL1
var al1;
if (msg['AL1'].length() > 0) {
	al1 = [];
	var index = 0;
	for each (seg in msg.AL1) {
		al1[index] = {};
		
		// AL1.1, setId
		if (seg['AL1.1']['AL1.1.1'].toString() != "") { al1[index].setId = seg['AL1.1']['AL1.1.1']; }

		// AL1.2, allergyType
		if (seg['AL1.2']['AL1.2.1'].toString() != "") { al1[index].allergyType = seg['AL1.2']['AL1.2.1']; }
		
		// AL1.3, allergyCodeMnemonicDescription
		al1[index].allergyCodeMnemonicDescription = {};
		if (seg['AL1.3']['AL1.3.1'].toString() != "") { al1[index].allergyCodeMnemonicDescription.id = seg['AL1.3']['AL1.3.1']; }
		if (seg['AL1.3']['AL1.3.2'].toString() != "") { al1[index].allergyCodeMnemonicDescription.text = seg['AL1.3']['AL1.3.2']; }
		if (seg['AL1.3']['AL1.3.3'].toString() != "") { al1[index].allergyCodeMnemonicDescription.codingSystem = seg['AL1.3']['AL1.3.3']; }
		if (seg['AL1.3']['AL1.3.4'].toString() != "") { al1[index].allergyCodeMnemonicDescription.altId = seg['AL1.3']['AL1.3.4']; }
		if (seg['AL1.3']['AL1.3.5'].toString() != "") { al1[index].allergyCodeMnemonicDescription.altText = seg['AL1.3']['AL1.3.5']; }
		if (seg['AL1.3']['AL1.3.6'].toString() != "") { al1[index].allergyCodeMnemonicDescription.altCodingSystem = seg['AL1.3']['AL1.3.6']; }
		if (Object.keys(al1[index].allergyCodeMnemonicDescription).length == 0) {
			delete al1[index].allergyCodeMnemonicDescription;
		}

		// AL1.4, allergySeverity
		if (seg['AL1.4']['AL1.4.1'].toString() != "") { al1[index].allergySeverity = seg['AL1.4']['AL1.4.1']; }
		
		// AL1.5, allergyReaction
		if (seg['AL1.5']['AL1.5.1'].toString() != "") { al1[index].allergyReaction = seg['AL1.5']['AL1.5.1']; }
		
		// AL1.6, identificationDate
		if (seg['AL1.6']['AL1.6.1'].toString() != "") { al1[index].identificationDate = seg['AL1.6']['AL1.6.1']; }

		// clean up AL1 and increment index
		if (Object.keys(al1[index]).length == 0) {
			delete al1[index];
		} else {
			index++;
		}
	}
}