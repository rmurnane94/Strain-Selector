// Initialize the page
createStuff();


// Main function
function createStuff() {
d3.csv('assets/data/cannabis.csv').then(csvData => {

    console.log(csvData[5]);

    var effects = csvData.map(x => x.Effects);
    console.log(effects);
    console.log(effects[0]);
    console.log(typeof effects[0]);
    var testiez = effects[0];
    var splitTestiez = testiez.split(",");
    console.log(splitTestiez[0]);
    console.log(splitTestiez);
    var allEffects = [];
    effects.forEach(x => x.split(",").forEach(x =>{
        if (!allEffects.includes(x)){
            allEffects.push(x)}
        }));
    // effects.map(x=>x.split(","));
    console.log(allEffects);

    var strainNames = csvData.map(x=>x.Strain);
    console.log(strainNames);


    var optionSelect = d3.select("#selStrain");
    strainNames.forEach(x => { 
        optionSelect.append("option").text(x).property("value", x); 
    });

    

    var effectSelect1 = d3.select("#selEffect1");
    allEffects.forEach(x => { 
        effectSelect1.append("option").text(x).property("value", x); 
    });

    var effectSelect2 = d3.select("#selEffect2");
    allEffects.forEach(x => { 
        effectSelect2.append("option").text(x).property("value", x); 
    });

    var effectSelect3 = d3.select("#selEffect3");
    allEffects.forEach(x => { 
        effectSelect3.append("option").text(x).property("value", x); 
    });
console.log(effectSelect1.property("value"));
console.log(effectSelect1.property("id"));


// Adds strains to list on site
var filteredStrains1 = csvData.filter((x) => 
    // x.Strain=="1024");
    x.Effects.split(",").includes(effectSelect1.property("value")));

console.log(filteredStrains1);

var strainList = d3.select("#showStrains");
strainList.html("");
filteredStrains1.forEach((strain) => {
    var listItem = strainList.append("li");
    listItem.text(strain.Strain);


    

    // Object.entries(ufo).forEach(([key, value]) => {
    //   var cell = row.append("td");
    //   cell.text(value);
    // });
  });
  

//   // Adds values to table on site
// var tbody = d3.select("tbody");
// data.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });


    
    // <h5>Test Subject ID No.:</h5>
    // <select id="selDataset" onchange="optionChanged(this.value)"></select>
})
};

var dropDowns = d3.selectAll("select");
console.log(dropDowns);

function optionChanged(newId) {
    createStuff();
};