﻿// es muss text ausgewählt sein!!!!if(!(app.selection[0].constructor.name=="Text")){alert("ÄGN FALSCH", "Fehler");	}var myParagraphs = app.selection[0].paragraphs;for(var i= myParagraphs.length-1;i>=0;i--){myParagraphs[i].insertionPoints[0].contents = String(i+1)+".\u0009\u0007";		}alert("Done");