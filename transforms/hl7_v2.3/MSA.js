// MSA
var msa = {};

// MSA.1, acknowledgementCode
if (msg['MSA']['MSA.1']['MSA.1.1'].toString() != "") {msa.acknowledgementCode = msg['MSA']['MSA.1']['MSA.1.1']; }

// MSA.2, messageControlID
if (msg['MSA']['MSA.2']['MSA.2.1'].toString() != "") {msa.messageControlID = msg['MSA']['MSA.2']['MSA.2.1']; }

// MSA.3, textMessage
if (msg['MSA']['MSA.3']['MSA.3.1'].toString() != "") {msa.textMessage = msg['MSA']['MSA.3']['MSA.3.1']; }

// MSA.4, expectedSequenceNumber
if (msg['MSA']['MSA.4']['MSA.4.1'].toString() != "") {msa.expectedSequenceNumber = msg['MSA']['MSA.4']['MSA.4.1']; }

// MSA.5, delayedAcknowledgementType
if (msg['MSA']['MSA.5']['MSA.5.1'].toString() != "") {msa.delayedAcknowledgementType = msg['MSA']['MSA.5']['MSA.5.1']; }

// MSA.6, errorCondition
msa.errorCondition = {};
if (msg['MSA']['MSA.6']['MSA.6.1'].toString() != "") {msa.errorCondition.id = msg['MSA']['MSA.6']['MSA.6.1']; }
if (msg['MSA']['MSA.6']['MSA.6.2'].toString() != "") {msa.errorCondition.text = msg['MSA']['MSA.6']['MSA.6.2']; }
if (msg['MSA']['MSA.6']['MSA.6.3'].toString() != "") {msa.errorCondition.codingSystem = msg['MSA']['MSA.6']['MSA.6.3']; }
if (msg['MSA']['MSA.6']['MSA.6.4'].toString() != "") {msa.errorCondition.altId = msg['MSA']['MSA.6']['MSA.6.4']; }
if (msg['MSA']['MSA.6']['MSA.6.5'].toString() != "") {msa.errorCondition.altText = msg['MSA']['MSA.6']['MSA.6.5']; }
if (msg['MSA']['MSA.6']['MSA.6.6'].toString() != "") {msa.errorCondition.altCodingSystem = msg['MSA']['MSA.6']['MSA.6.6']; }
if (Object.keys(msa.errorCondition).length == 0) {
	delete msa.errorCondition;
}
