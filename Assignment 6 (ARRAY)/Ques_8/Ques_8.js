// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser like:
// Qualifications:
// 1) SSC
// 2) HSC
// 3) BCS
// 4) BS
// 5) BCOM
// 6) MS
// 7) M. Phil.
// 8) PhD


var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

document.write(`<h1>Qualifications:</h1>`)
var i = 0
educationQualifications.forEach(programme => {
    document.write(`${i += 1}) ${programme} <br>`)
});