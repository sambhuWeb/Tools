//import UnicodeParser from '../UnicodeParser';

class BranUnicodeParser {
    constructor (sourceUnicodeKeys) {
        this.sourceUnicodeKeys = sourceUnicodeKeys;
    }

    getParsedUnicode() {
        const targetUnicodeKeys = {};
        const keyMapping = this.keyMapping();

        this.sourceUnicodeKeys.forEach(function (sourceUnicodeKey, index) {
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

        return targetUnicodeKeys;
    }

    keyMapping() {
        return {
                k26: 'K26_65_A',
                k27: 'K27_83_S'
        };
    }
}

//module.exports = BranUnicodeParser;
