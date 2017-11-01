// ROL
var rol;
if (msg['ROL'].length() > 0) {
	rol = [];
	var index = 0;
	for each (seg in msg.ROL) {
		rol[index] = {};

		// ROL.1, roleInstanceID
		rol[index].roleInstanceID = {};
		if (seg['ROL.1']['ROL.1.1'].toString() != "") { rol[index].roleInstanceID.id = seg['ROL.1']['ROL.1.1']; }
		if (seg['ROL.1']['ROL.1.2'].toString() != "") { rol[index].roleInstanceID.namespaceId = seg['ROL.1']['ROL.1.2']; }
		if (seg['ROL.1']['ROL.1.3'].toString() != "") { rol[index].roleInstanceID.universalId = seg['ROL.1']['ROL.1.3']; }
		if (seg['ROL.1']['ROL.1.4'].toString() != "") { rol[index].roleInstanceID.unniveralIdType = seg['ROL.1']['ROL.1.4']; }
		if (Object.keys(rol[index].roleInstanceID).length == 0) {
			delete rol[index].roleInstanceID;
		}

		// ROL.2, actionCode
		if (seg['ROL.2']['ROL.2.1'].toString() != "") { rol[index].actionCode = seg['ROL.2.1']['ROL.2.1']; }

		// ROL.3, role
		rol[index].role = {};
		if (seg['ROL.3']['ROL.3.1'].toString() != "") { rol[index].role.id = seg['ROL.3']['ROL.3.1']; }
		if (seg['ROL.3']['ROL.3.2'].toString() != "") { rol[index].role.text = seg['ROL.3']['ROL.3.2']; }
		if (seg['ROL.3']['ROL.3.3'].toString() != "") { rol[index].role.codingSystem = seg['ROL.3']['ROL.3.3']; }
		if (seg['ROL.3']['ROL.3.4'].toString() != "") { rol[index].role.altId = seg['ROL.3']['ROL.3.4']; }
		if (seg['ROL.3']['ROL.3.5'].toString() != "") { rol[index].role.altText = seg['ROL.3']['ROL.3.5']; }
		if (seg['ROL.3']['ROL.3.6'].toString() != "") { rol[index].role.altCodingSystem = seg['ROL.3']['ROL.3.6']; }
		if (Object.keys(rol[index].role).length == 0) {
			delete rol[index].role;
		}

		// ROL.4, rolePerson
		rol[index].rolePerson = {};
		if (seg['ROL.4']['ROL.4.1'].toString() != "") { rol[index].rolePerson.id = seg['ROL.4']['ROL.4.1']; }
		if (seg['ROL.4']['ROL.4.2'].toString() != "") { rol[index].rolePerson.lastName = seg['ROL.4']['ROL.4.2']; }
		if (seg['ROL.4']['ROL.4.3'].toString() != "") { rol[index].rolePerson.firstName = seg['ROL.4']['ROL.4.3']; }
		if (seg['ROL.4']['ROL.4.4'].toString() != "") { rol[index].rolePerson.middleInitOrName = seg['ROL.4']['ROL.4.4']; }
		if (seg['ROL.4']['ROL.4.5'].toString() != "") { rol[index].rolePerson.suffix = seg['ROL.4']['ROL.4.5']; }
		if (seg['ROL.4']['ROL.4.6'].toString() != "") { rol[index].rolePerson.prefix = seg['ROL.4']['ROL.4.6']; }
		if (seg['ROL.4']['ROL.4.7'].toString() != "") { rol[index].rolePerson.degree = seg['ROL.4']['ROL.4.7']; }
		if (seg['ROL.4']['ROL.4.8'].toString() != "") { rol[index].rolePerson.sourceTable = seg['ROL.4']['ROL.4.8']; }
		rol[index].rolePerson.assigningAuthority = {};
		if (seg['ROL.4']['ROL.4.9']['ROL.4.9.1'].toString() != "") { rol[index].rolePerson.assigningAuthority.id = seg['ROL.4']['ROL.4.9']['ROL.4.9.1']; }
		if (seg['ROL.4']['ROL.4.9']['ROL.4.9.2'].toString() != "") { rol[index].rolePerson.assigningAuthority.universalId = seg['ROL.4']['ROL.4.9']['ROL.4.9.2']; }
		if (seg['ROL.4']['ROL.4.9']['ROL.4.9.3'].toString() != "") { rol[index].rolePerson.assigningAuthority.universalIdType = seg['ROL.4']['ROL.4.9']['ROL.4.9.3']; }
		if (Object.keys(rol[index].rolePerson.assigningAuthority).length == 0) {
			if (seg['ROL.4']['ROL.4.9'].toString() != "") { rol[index].rolePerson.assigningAuthority.id = seg['ROL.4']['ROL.4.9']; }
			else delete rol[index].rolePerson.assigningAuthority;
		}
		if (seg['ROL.4']['ROL.4.10'].toString() != "") { rol[index].rolePerson.nameTypeCode = seg['ROL.4']['ROL.4.10']; }
		if (seg['ROL.4']['ROL.4.11'].toString() != "") { rol[index].rolePerson.identifierCheckDigit = seg['ROL.4']['ROL.4.11']; }
		if (seg['ROL.4']['ROL.4.12'].toString() != "") { rol[index].rolePerson.codeIdentifyingCheckDigitScheme = seg['ROL.4']['ROL.4.12']; }
		if (seg['ROL.4']['ROL.4.13'].toString() != "") { rol[index].rolePerson.identifierTypeCode = seg['ROL.4']['ROL.4.13']; }
		rol[index].rolePerson.assigningFacility = {};
		if (seg['ROL.4']['ROL.4.14']['ROL.4.14.1'].toString() != "") { rol[index].rolePerson.assigningFacility.id = seg['ROL.4']['ROL.4.14']['ROL.4.14.1']; }
		if (seg['ROL.4']['ROL.4.14']['ROL.4.14.2'].toString() != "") { rol[index].rolePerson.assigningFacility.universalId = seg['ROL.4']['ROL.4.14']['ROL.4.14.2']; }
		if (seg['ROL.4']['ROL.4.14']['ROL.4.14.3'].toString() != "") { rol[index].rolePerson.assigningFacility.universalIdType = seg['ROL.4']['ROL.4.14']['ROL.4.14.3']; }
		if (Object.keys(rol[index].rolePerson.assigningFacility).length == 0) {
			if (seg['ROL.4']['ROL.4.14'].toString() != "") { rol[index].rolePerson.assigningFacility.id = seg['ROL.4']['ROL.4.14']; }
			else delete rol[index].rolePerson.assigningFacility;
		}
		if (Object.keys(rol[index].rolePerson).length == 0) {
			delete rol[index].rolePerson;
		}

		// ROL.5, roleBeginDateTime
		if (seg['ROL.5']['ROL.5.1'].toString() != "") { pr1[indexPR1].roleBeginDateTime = seg['ROL.5.1']['ROL.5.1']; }

		// ROL.6, roleEndDateTime
		if (seg['ROL.6']['ROL.6.1'].toString() != "") { pr1[indexPR1].roleEndDateTime = seg['ROL.6.1']['ROL.6.1']; }

		// ROL.7, roleDuration
		rol[index].roleDuration = {};
		if (seg['ROL.7']['ROL.7.1'].toString() != "") { rol[index].roleDuration.id = seg['ROL.7']['ROL.7.1']; }
		if (seg['ROL.7']['ROL.7.2'].toString() != "") { rol[index].roleDuration.text = seg['ROL.7']['ROL.7.2']; }
		if (seg['ROL.7']['ROL.7.3'].toString() != "") { rol[index].roleDuration.codingSystem = seg['ROL.7']['ROL.7.3']; }
		if (seg['ROL.7']['ROL.7.4'].toString() != "") { rol[index].roleDuration.altId = seg['ROL.7']['ROL.7.4']; }
		if (seg['ROL.7']['ROL.7.5'].toString() != "") { rol[index].roleDuration.altText = seg['ROL.7']['ROL.7.5']; }
		if (seg['ROL.7']['ROL.7.6'].toString() != "") { rol[index].roleDuration.altCodingSystem = seg['ROL.7']['ROL.7.6']; }
		if (Object.keys(rol[index].roleDuration).length == 0) {
			delete rol[index].roleDuration;
		}

		// ROL.8, roleActionReason
		rol[index].roleActionReason = {};
		if (seg['ROL.8']['ROL.8.1'].toString() != "") { rol[index].roleActionReason.id = seg['ROL.8']['ROL.8.1']; }
		if (seg['ROL.8']['ROL.8.2'].toString() != "") { rol[index].roleActionReason.text = seg['ROL.8']['ROL.8.2']; }
		if (seg['ROL.8']['ROL.8.3'].toString() != "") { rol[index].roleActionReason.codingSystem = seg['ROL.8']['ROL.8.3']; }
		if (seg['ROL.8']['ROL.8.4'].toString() != "") { rol[index].roleActionReason.altId = seg['ROL.8']['ROL.8.4']; }
		if (seg['ROL.8']['ROL.8.5'].toString() != "") { rol[index].roleActionReason.altText = seg['ROL.8']['ROL.8.5']; }
		if (seg['ROL.8']['ROL.8.6'].toString() != "") { rol[index].roleActionReason.altCodingSystem = seg['ROL.8']['ROL.8.6']; }
		if (Object.keys(rol[index].roleActionReason).length == 0) {
			delete rol[index].roleActionReason;
		}

		// clean up ROL and increment index
		if (Object.keys(rol[index]).length == 0) {
			delete rol[index];
		} else {
			index++;
		}
	}
}