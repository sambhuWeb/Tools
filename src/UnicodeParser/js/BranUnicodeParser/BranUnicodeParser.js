//import UnicodeParser from '../UnicodeParser';

class BranUnicodeParser {
    constructor (sourceUnicodeKeys) {
        this.sourceUnicodeKeys = sourceUnicodeKeys;
    }

    getParsedUnicode() {
        const targetUnicodeKeys = {};
        const keyMapping = {
            k0 : 'K0_223_BT', //Back Tick
            k1 : 'K1_49_1',
            k2 : 'K2_50_2',
            k3 : 'K3_51_3',
            k4 : 'K4_52_4',
            k5 : 'K5_53_5',
            k6 : 'K6_54_6',
            k7 : 'K7_55_7',
            k8 : 'K8_56_8',
            k9 : 'K9_57_9',
            k10 : 'K10_48_0',
            k11 : 'K11_189_HY', //Hypen
            k12 : 'K12_189_EQ', //Equal

            //First Alphabetical Row
            k13 : 'K13_81_Q',
            k14 : 'K14_87_W',
            k15 : 'K15_69_E',
            k16 : 'K16_82_R',
            k17 : 'K17_84_T',
            k18 : 'K18_89_Y',
            k19 : 'K19_85_U',
            k20 : 'K20_73_I',
            k21 : 'K21_79_O',
            k22 : 'K22_80_P',
            k23 : 'K23_219_SBO', //Square Bracket Open
            k24 : 'K24_221_SBC', //Square Bracket Close
            k25 : 'K25_220_BS', //Back Slash

            //Second Alphabetical Row
            k26 : 'K26_65_A',
            k27 : 'K27_83_S',
            k28 : 'K28_68_D',
            k29 : 'K29_70_F',
            k30 : 'K30_71_G',
            k31 : 'K31_72_H',
            k32 : 'K32_74_J',
            k33 : 'K33_75_K',
            k34 : 'K34_76_L',
            k35 : 'K35_186_CO', //COLON
            k36 : 'K36_192_AP', //Apostrophe

            //Third Alphabetical Row
            k37 : 'K37_90_Z',
            k38 : 'K38_88_X',
            k39 : 'K39_67_C',
            k40 : 'K40_86_V',
            k41 : 'K41_66_B',
            k42 : 'K42_78_N',
            k43 : 'K43_77_M',
            k44 : 'K44_188_CO',//COMMA
            k45 : 'K45_190_FS',//FULL STOP
            k46 : 'K46_191_FS',//FOWARD Slash
        };

        this.sourceUnicodeKeys.forEach(function (sourceUnicodeKey, index) {
            console.log(sourceUnicodeKey);

            const mappedKeyIndex = keyMapping.hasOwnProperty(sourceUnicodeKey.i)
                ? keyMapping[sourceUnicodeKey.i]
                : sourceUnicodeKey.i;

            const key = {};

            key.n = sourceUnicodeKey.n; //Normal Key
            key.c = sourceUnicodeKey.c; //ctrl
            key.s = sourceUnicodeKey.s; //shift
            key.c_a = sourceUnicodeKey.t; //ctrl + Alt
            key.c_a_s = sourceUnicodeKey.l; //Ctrl + Alt + Shift

            targetUnicodeKeys[mappedKeyIndex] = key;
        });

        return targetUnicodeKeys;
    }
}

//module.exports = BranUnicodeParser;
