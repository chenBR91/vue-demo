// const g = 9.80665;
const pi = Math.PI;

// const mm = 914.4;
// const mm1 = 914.4;
// const mm2 = 914.4 * 914.4;
// const mm3 = 914.4 * 914.4 * 914.4;
// const cm = 91.44;
// const cm1 = 91.44;
// const cm2 = 91.44 * 91.44;
// const cm3 = 91.44 * 91.44 * 91.44;
// const dm = 9.144;
// const dm1 = 9.144;
// const dm2 = 9.144 * 9.144;
// const dm3 = 9.144 * 9.144 * 9.144;
// const L = dm3;
// const ha2 = 0.009144 * 0.009144;
// const meter = 0.9144;
// const m1 = 0.9144;
// const m2 = 0.9144 * 0.9144;
// const m3 = 0.9144 * 0.9144 * 0.9144;
// const ha3 = 0.009144 * 0.009144 * 0.009144;
// const km = 0.0009144;
// const km1 = 0.0009144;
// const km2 = 0.0009144 * 0.0009144;
// const km3 = 0.0009144 * 0.0009144 * 0.0009144;
// const inch = 36;
// const in1 = 36;
// const in2 = 1296;
// const in3 = 46656;
// const mi = 1 / 1760;
// const mi1 = 1 / 1760;
// const mi2 = 1 / (1760 * 1760);
// const mi3 = 1 / (1760 * 1760 * 1760);
// const nmi = 0.9144 / 1852;
// const ft = 3;
// const ft1 = 3;
// const ft2 = 9;
// const ft3 = 27;
// const yd = 1;
// const yd2 = 1;
// const yd3 = 1;

// const gm = 1000;
// const gram = 1000;
// const mg = 1000000;
// const kg = 1;
// const kilo = 0.45359237;
// const Gal = 0.01;           //Galileo
// const gal = 46656 / 231;
// const galUK = dm3 / 4.54609;
// const galUS = 46656 / 231;
// const ozflUS = 46656 * 128 / 231;
// const oz = 16 / kilo;
// const lb = 1 / kilo;
// const LB = 4.54609;
// const tUK = 1 / (kilo * 2240);
// const tUS = 1 / (kilo * 2000);

// const calIT = 1 / 4.1868;
// const calmean = 1 / 4.19002;
// const calth = 1 / 4.184;
// const kcalIT = 1 / 4186.8;
// const kcalmean = 1 / 4190.02;
// const kcalth = 1 / 4184;

// const sec = 3600;
// const sec2 = 12960000;
// const msec = 3600000;                   //millisecend
// const min = 60;
// const min2 = 3600;
// const hr = 1;
// const hr2 = 1;
// const s = 3600;
// const s2 = 3600 * 3600;
// const yr = 1 / (24 * 365);
// const yr2 = 1 / (24 * 24 * 365 * 365);
// const d = 1 / 24;                       //day
// const day = 1 / 24;
// const d2 = 1 / (24 * 24);               //day squared
// const ds = 86400 / 86164.09054;         //day (sidereal)
// const yt = 31536000 / 31556925.9747;    //year (tropical)
// const ys = 31536000 / 31558149.7676064; //year (sidereal)

// const bl = 46656 / (231 * 31.5);    //barrel (liquid)
// const bo = 46656 / (231 * 42);      //barrel (oil)

// const Watt = g * m1;


export let getUnitsJson = {
    "acceleration": [
        {"nameUnitParameter": "erg per gram (erg/g)", "baseConversionValue": 10000},
        {"nameUnitParameter": "gray (Gy)", "baseConversionValue": 1},
        {"nameUnitParameter": "joule per gram (J/g)", "baseConversionValue": 0.001},
        {"nameUnitParameter": "joule per kilogram (J/kg)", "baseConversionValue": 1},
        {"nameUnitParameter": "joule per milligram (J/mg)", "baseConversionValue": 0.000001},
        {"nameUnitParameter": "kilogray (kGy)", "baseConversionValue": 0.001},
        {"nameUnitParameter": "microgray (&#181Gy)", "baseConversionValue": 1000000},
        {"nameUnitParameter": "milligray (mGy)", "baseConversionValue": 1000},
        {"nameUnitParameter": "millirad (mrad)", "baseConversionValue": 100000},
        {"nameUnitParameter": "rad (rad)", "baseConversionValue": 100},
    ],

    "angle": [
        {"nameUnitParameter": "degree (°)", "baseConversionValue": 1},
        {"nameUnitParameter": "grade (gon)", "baseConversionValue": 1 / 0.9},
        {"nameUnitParameter": "mil (mil)", "baseConversionValue": 1 / 0.05625},
        {"nameUnitParameter": "milliradian (mrad)", "baseConversionValue": pi * 1000 / 180},  
        {"nameUnitParameter": "minute ( ' )", "baseConversionValue": 60},
        {"nameUnitParameter": "quadrant (quad)", "baseConversionValue": 1 / 90},
        {"nameUnitParameter": "radian (rad)", "baseConversionValue": pi / 180}, 
        {"nameUnitParameter": "revolution (r)", "baseConversionValue": 1 / 360},
        {"nameUnitParameter": "second ( '' )", "baseConversionValue": 3600},  
    ],
}

