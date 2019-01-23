
function showDebug() {
	console.log("Showing Debug")
	$(`.debug-container`).show()
	$(`.bDebug`).hide()
	$(`.bHideDebug`).show()
	return;
}
function showDebugButton() {
	console.log("Showing Debug Button")
	$(`.bDebug`).show()
}
function hideDebug() {
	console.log("HidingDebug")
	$(`.debug-container`).hide()
	$(`.bDebug`).show()
	$(`.bHideDebug`).hide()
	return;
}

// you know what they say

// that's how mafia works
function SHA256(s){
 var chrsz  = 8;
 var hexcase = 0;
 function safe_add (x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
 }
 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
 function core_sha256 (m, l) {
 var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
 var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 var W = new Array(64);
 var a, b, c, d, e, f, g, h, i, j;
 var T1, T2;
 m[l >> 5] |= 0x80 << (24 - l % 32);
 m[((l + 64 >> 9) << 4) + 15] = l;
 for ( var i = 0; i<m.length; i+=16 ) {
 a = HASH[0];
 b = HASH[1];
 c = HASH[2];
 d = HASH[3];
 e = HASH[4];
 f = HASH[5];
 g = HASH[6];
 h = HASH[7];
 for ( var j = 0; j<64; j++) {
 if (j < 16) W[j] = m[j + i];
 else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
 T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
 T2 = safe_add(Sigma0256(a), Maj(a, b, c));
 h = g;
 g = f;
 f = e;
 e = safe_add(d, T1);
 d = c;
 c = b;
 b = a;
 a = safe_add(T1, T2);
 }
 HASH[0] = safe_add(a, HASH[0]);
 HASH[1] = safe_add(b, HASH[1]);
 HASH[2] = safe_add(c, HASH[2]);
 HASH[3] = safe_add(d, HASH[3]);
 HASH[4] = safe_add(e, HASH[4]);
 HASH[5] = safe_add(f, HASH[5]);
 HASH[6] = safe_add(g, HASH[6]);
 HASH[7] = safe_add(h, HASH[7]);
 }
 return HASH;
 }
 function str2binb (str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for(var i = 0; i < str.length * chrsz; i += chrsz) {
 bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
 }
 return bin;
 }
 function Utf8Encode(string) {
 string = string.toString().replace(/\r\n/g,"\n");
 var utftext = "";
 for (var n = 0; n < string.length; n++) {
 var c = string.charCodeAt(n);
 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 }
 return utftext;
 }
 function binb2hex (binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for(var i = 0; i < binarray.length * 4; i++) {
 str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
 hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
 }
 return str;
 }
 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}
function presentData() {
	alert($(`.data`).text())
	return;
}
function showHome() {
	$(`.lockScreen`).hide()
	$(`.home`).show()
	return;
}
function granted(msg, mode) {
	// Correct Passcode Entered
	$(`.data`).text("")
	
	function dflt(m) {
	
		m = parseInt(m)
		
		if(m == 0) {
		alert("Access Granted")
		$(`.pressColor`).text("")
		showHome()
		
		return;
		}
		if(m == 1) {
			alert("Access Granted\n\n" + msg)
			$(`.pressColor`).text("")
		showHome()
		return;
		}
		return;
	}
	
	function debug() {
		showDebugButton()
		return alert("Access Granted \n\n" + msg)
	}
	if(!msg) return dflt(0)
	if(!mode) return dflt(0)
	
	mode == parseFloat(mode)

	if(mode == 1) return dflt(1)
	if(mode == 2) return debug()
	
	return;
}
function denied(msg) {
	// Incorrect Passcode Entered
	$(`.data`).text("")
	
	if(!msg) {
	alert("Access Denied")
	return;
	}
	return alert("Access Denied \n\n" + msg)
}

var puzzleData = {
	stage1: "Purple",
	stage2: "Orange",
	stage3: "Red",
	stage4: "Light Green",
	stage5: "Finished, now press ENTER",
	stage6: "What numbers were pressed?"
};

function startPuzzle(s) {
console.log("Starting Puzzle")
	if(!s) throw console.error("no stage provided");
	 
	s = parseInt(s)

	

	var pressColor = $(`.pressColor`).text()
	var colorCodeData = $(`.colorCodeData`).text()
	if(!s) {
		console.log("Puzzle 1DEF")

		$(`.pressColor`).text()

		$(`.data`).text(`Press ${SHA256(puzzleData.stage1)}`)

		return;
	}
	if(s <= 1) {
		console.log("Puzzle 1STA")

		$(`.pressColor`).text("Press " + puzzleData.stage1)

		$(`.data`).text(`Press ${SHA256(puzzleData.stage1)}`)

		return;
	}
	if(s == 2) {
		console.log(`Puzzle ${s}`)
	
	

		return;
	}
	if(s == 3) {
		console.log(`Puzzle ${s}`)

		

		return;
	}
	if(s == 4) {
		console.log(`Puzzle ${s}`)

		

		return;
	}
	if(s >= 5) {
		console.log(`Puzzle ${s}`)

		
		return;
	}


	return;
}
function colorCodePuzzle(s) {
	var data = $(`.data`).text()
	if(!s) throw console.error("s not defined")
	if(!s) startPuzzle(1)
	s = parseInt(s)

	if(data.length < 1 || !data.replace(/\s/g, '').length) {
		startPuzzle(s)
		return;
	}

return;
}
function buttonPressed(n) {
	n = parseInt(n)
	var data = $(`.data`).text()
	var pressColor = $(`.pressColor`).text()
	var colorCodeData = $(`.colorCodeData`).text()

	if(n <= -1) {
		// Clear Pressed
		$(`.data`).text(`Press ${SHA256(puzzleData.stage1)}`)
		return;
	}
	if(n == 0) {
		// 0 Pressed
		//$(`.data`).text(SHA256(0))
		if(data.length < 1 || !data.replace(/\s/g, '').length) {
			$(`.data`).text(SHA256(0))
			return;
		}
		return $(`.data`).text(SHA256("no"));
	}
	if(n == 1) {
		// 1 Pressed
		
		function default1() {
			$(`.data`).text(SHA256(1))
			return;
		}
		if(data ==`Press ${SHA256(puzzleData.stage3)}`) {
			$(`.pressColor`).text("Press " + puzzleData.stage4)

		$(`.data`).text(`Press ${SHA256(puzzleData.stage4)}`)
			return;
		}
		if(data.length < 1 || !data.replace(/\s/g, '').length || data !== `${SHA256(4)} | ${SHA256(1)}`) {
			default1()
			return;
		}
		
		if(data == `${SHA256(4)} | ${SHA256(1)}`) {
			$(`.data`).text(`${SHA256(1)} | ${SHA256(4)} | ${SHA256(1)}`)
			return;
		} else {
			return default1();
		}
		return;
	}
	if(n == 2) {
		// 2 Pressed
		if(data.length < 1 || !data.replace(/\s/g, '').length) {
			$(`.data`).text(SHA256(2))
			return;
		}
		$(`.data`).text(`${SHA256(2)} | ${SHA256(1)} | ${SHA256(0)}`)
		return;
	}
	if(n == 3) {
		// 3 Pressed
		if(data ==`Press ${SHA256(puzzleData.stage4)}`) {
			$(`.pressColor`).text("Press " + puzzleData.stage5)
		$(`.data`).text(`${SHA256(puzzleData.stage5)}`)
			return;
		}
		if(data.length < 1 || !data.replace(/\s/g, '').length) {
			$(`.data`).text(SHA256(3))
			return;
		}
		$(`.data`).text(`${SHA256(3)} | ${SHA256(2)} | ${SHA256(1)} | ${SHA256(0)}`)
		return;
	}
	if(n == 4) {
		// 4 Pressed
		function default4() {
		$(`.data`).text(SHA256(4))
			return;
		}
		if(data.length < 1 || !data.replace(/\s/g, '').length) {
			default4()
			return;
		}
		if(data == `${SHA256(1)}`) {
			$(`.data`).text(`${SHA256(4)} | ${SHA256(1)}`)
			return;
		} else {
			default4()
			return;
		}
		return;
	}
	if(n == 5) {
		// 5 Pressed
		$(`.data`).text(SHA256(5))
		return;
	}
	if(n == 6) {
		// 6 Pressed
		if(data == `Press ${SHA256(puzzleData.stage1)}`) {
			$(`.pressColor`).text("Press " + puzzleData.stage2)

			$(`.data`).text(`Press ${SHA256(puzzleData.stage2)}`)
			return;
		}
		$(`.data`).text(SHA256(6))
		return;
	}
	if(n == 7) {
		// 7 Pressed
		function default7() {
			$(`.data`).text(SHA256(7))
			return;
		}
		if(data.length < 1 || !data.replace(/\s/g, '').length) {
			default7()
			return;
		}
		if(data == `${SHA256(1)} | ${SHA256(4)} | ${SHA256(1)}`) {
			$(`.data`).text(`${SHA256(7)} | ${SHA256(1)} | ${SHA256(4)} | ${SHA256(1)}`)
			return;
		} else {
			default7()
			return;
		}
		return;
	}
	if(n == 8) {
		// 8 Pressed
		$(`.data`).text(SHA256(8))
		return;
	}
	if(n == 9) {
		// 9 Pressed
		if(data ==`Press ${SHA256(puzzleData.stage2)}`) {
			$(`.pressColor`).text("Press " + puzzleData.stage3)

		$(`.data`).text(`Press ${SHA256(puzzleData.stage3)}`)
			return;
		}
		$(`.data`).text(SHA256(9))
		return;
	}
	if(n == 10) {
		// Enter Pressed
		if(data == `${SHA256(puzzleData.stage5)}`) {
		
			$(`.pressColor`).text(puzzleData.stage6)
			$(`.data`).text("")
			
			$(`.btnNum`).show()
			$(`.row-passwdCheck`).show()
			return;
		} 
		if(data == `${SHA256(7)} | ${SHA256(1)} | ${SHA256(4)} | ${SHA256(1)}`) {
			granted("You now have access to the Debug Menu", 2)
			$(`.data`).text("")
			return;
		}
		return denied();
			
		return;
	}
	if(n >= 11) {
		var passwdCheck = document.getElementById('passcodeCheck').value
		
		if(passwdCheck == "6913") {
			granted("Standard Access has been given", 1)
		return;
		} else {
			denied("Wrong Passcode Given");
			$(`.data`).text("");
			return;
		}
	}
}
function openApp(appName) {
	if(!appName) throw console.error("No App Provided")
	
	if(appName == "snake") {
		alert("Snake App is a WIP. Expect bugs.")
		$(`.home > .container`).hide()
		$(`.application > .snake`).show()
		return;
	}
	if(appName == "placeholder") {
		$(`.home > .container`).hide()
		$(`.application > .placeholder`).show()
		return;
	}
	if(appName == "credits") {
		$(`.home > .container`).hide()
		$(`.application > .credits`).show()
		return;
	}
	throw console.error(appName + " not found.")
return;
}
function exitApp(appName) {
	if(!appName) throw console.error("No App Provided")
	
	if(appName == "snake") {
		$(`.home > .container`).show()
		$(`.application > .snake`).hide()
		return;
	}
	if(appName == "placeholder") {
		$(`.home > .container`).show()
		$(`.application > .placeholder`).hide()
		return;
	}
	if(appName == "credits") {
		$(`.home > .container`).show()
		$(`.application > .credits`).hide()
		return;
	}
	return;
}
window.addEventListener("load", colorCodePuzzle(1));