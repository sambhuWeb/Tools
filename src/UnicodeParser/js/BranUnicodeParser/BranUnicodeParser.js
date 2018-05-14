//import UnicodeParser from '../UnicodeParser';

class BranUnicodeParser {
    constructor (sourceUnicodeKeys) {
        this.sourceUnicodeKeys = sourceUnicodeKeys;
    }

    getParsedUnicode() {
        const targetUnicodeKeys = {};
        const keyMapping = {
            K0 : 'K0_223_BT', //Back Tick
            K1 : 'K1_49_1',
            K2 : 'K2_50_2',
            K3 : 'K3_51_3',
            K4 : 'K4_52_4',
            K5 : 'K5_53_5',
            K6 : 'K6_54_6',
            K7 : 'K7_55_7',
            K8 : 'K8_56_8',
            K9 : 'K9_57_9',
            K10 : 'K10_48_0',
            K11 : 'K11_189_HY', //Hypen
            K12 : 'K12_189_EQ', //Equal

            //First Alphabetical Row
            K13 : 'K13_81_Q',
            K14 : 'K14_87_W',
            K15 : 'K15_69_E',
            K16 : 'K16_82_R',
            K17 : 'K17_84_T',
            K18 : 'K18_89_Y',
            K19 : 'K19_85_U',
            K20 : 'K20_73_I',
            K21 : 'K21_79_O',
            K22 : 'K22_80_P',
            K23 : 'K23_219_SBO', //Square Bracket Open
            K24 : 'K24_221_SBC', //Square Bracket Close
            K25 : 'K25_220_BS', //Back Slash

            //Second Alphabetical Row
            K26 : 'K26_65_A',
            K27 : 'K27_83_S',
            K28 : 'K28_68_D',
            K29 : 'K29_70_F',
            K30 : 'K30_71_G',
            K31 : 'K31_72_H',
            K32 : 'K32_74_J',
            K33 : 'K33_75_K',
            K34 : 'K34_76_L',
            K35 : 'K35_186_CO', //COLON
            K36 : 'K36_192_AS', //Apostrophe

            //Third Alphabetical Row
            K37 : 'K37_90_Z',
            K38 : 'K38_88_X',
            K39 : 'K39_67_C',
            K40 : 'K40_86_V',
            K41 : 'K41_66_B',
            K42 : 'K42_78_N',
            K43 : 'K43_77_M',
            K44 : 'K44_188_CO',//COMMA
            K45 : 'K45_190_FS',//FULL STOP
            K46 : 'K46_191_FS',//FOWARD Slash
        };

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
}

//module.exports = BranUnicodeParser;
