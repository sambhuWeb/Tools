/*

Given the Input is:

[
    {
         "i": "k26",
         "c": "0",
         "n": "ब",
         "s": "",
         "l": "",
         "t": "",
         "f": ""
    },{
         "i": "k27",
         "c": "0",
         "n": "क",
         "s": "",
         "l": "",
         "t": "",
         "f": ""
    }
];


Expected Parsed Output:

{
    "K26_65_A" : {
        "key":"ब",
        "ctrlKey":"0",
        "shiftKey":"",
        "ctrlAlt":"",
        "ctrlAltShift":""
    },
    "K27_83_S" : {
        "key":"क",
        "ctrlKey":"0",
        "shiftKey":"",
        "ctrlAlt":"",
        "ctrlAltShift":""
    }
}

 */


const keyMapping = {
   k26: 'K26_65_A',
   k27: 'K27_83_S'
};

const sourceUnicodeKeys = [
   {
       "i": "k26",
       "c": "0", //ctrl
       "n": "ब", //normal
       "s": "", //shift
       "l": "", //ctrl+alt+shift
       "t": "", //ctrl_alt
       "f": ""
   }, {
       "i": "k27",
       "c": "0",
       "n": "क",
       "s": "",
       "l": "",
       "t": "",
       "f": ""
   }
];

const targetUnicodeKeys = {};
sourceUnicodeKeys.forEach(function (sourceUnicodeKey, index) {
   console.log(sourceUnicodeKey);

   const mappedKeyIndex = keyMapping.hasOwnProperty(sourceUnicodeKey.i)
       ? keyMapping[sourceUnicodeKey.i]
       : sourceUnicodeKey.i;

   const key = {};

   key.key = sourceUnicodeKey.n;
   key.ctrlKey = sourceUnicodeKey.c;
   key.shiftKey = sourceUnicodeKey.s;
   key.ctrlAlt = sourceUnicodeKey.t;
   key.ctrlAltShift = sourceUnicodeKey.l;

   targetUnicodeKeys[mappedKeyIndex] = key;
});

/**
 * Append the parsed unicode to the textarea with id "parsedUnicode")
 */
document.getElementById("parsedUnicode").innerHTML = JSON.stringify(targetUnicodeKeys, null, 4);