let rgbToHexColor = require('../rgb-to-hex').rgbToHexColor;
let expect = require('chai').expect;


describe('RGB to Hex Color', () => {
    it('Should return #FF9EAA for (255, 158, 170)', () =>{
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
    it('Should pad values with zeroes', () =>{
        expect(rgbToHexColor(12,13,14)).to.equal('#0C0D0E');
    });
    it('Should work at lower limit', () =>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });
    it('Should work at upper limit', () =>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });
    it('It should return undefind for negative values', () =>{
        expect(rgbToHexColor(-255,255,255)).to.be.undefined;
    });
    it('It should return undefind for greater than 255', () =>{
        expect(rgbToHexColor(1000,255,255)).to.be.undefined;
    });
    it('It should return undefind for fractions', () =>{
        expect(rgbToHexColor(1000.6,255.3,255.2)).to.be.undefined;
    });
    it('It should return undefind for greater than 255', () =>{
        expect(rgbToHexColor(1,255,256)).to.be.undefined;
    });
    it('It should return undefind for fractions', () =>{
        expect(rgbToHexColor('pesho', {name: 'gosho'},[])).to.be.undefined;
    });
});

