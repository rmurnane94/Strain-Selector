// Initialize the page
createStuff();

// function filterList(array1, data){
//     var counter = 0;
//     var currList = data;
//     while (counter < array1.length){
//         currList.filter((x) => 
//         x.Effects.split(",").includes(array1[counter]));
       
//     }

// };

// Main function
function createStuff() {
    
d3.csv('assets/data/cannabis.csv').then(csvData => {
    
    // var filterzz = ["Relaxed", "Happy", "Sleepy"];
    // var filteredStuff = csvData.filter((x)=>filterzz.every(i => x.Effects.split(",").includes(i)));
    // console.log(filteredStuff);
        
        // (x) => 
        // x.Effects.split(",").includes(filterzz[0]));

        // var containsAll = arr1.every(i => arr2.includes(i))


    // filterList(filterzz, csvData);
    // filterzz.forEach(filterValue => {
    //     csvData.filter
    // })
    var strainNames = csvData.map(x=>x.Strain);
    console.log(strainNames);



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

    


    var optionSelect = d3.select("#selStrain1");
    strainNames.forEach(x => { 
        optionSelect.append("option").text(x).property("value", x); 
    });

    var optionSelect = d3.select("#selStrain2");
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

    var effectSelect4 = d3.select("#selEffect4");
    allEffects.forEach(x => { 
        effectSelect4.append("option").text(x).property("value", x); 
    });

    var effectSelect5 = d3.select("#selEffect5");
    allEffects.forEach(x => { 
        effectSelect5.append("option").text(x).property("value", x); 
    });
console.log(effectSelect1.property("value"));
console.log(effectSelect1.property("id"));
;
strainInfo();
makeStrainList();



    
    // <h5>Test Subject ID No.:</h5>
    // <select id="selDataset" onchange="optionChanged(this.value)"></select>
})
};


function makeStrainList(){
    d3.csv('assets/data/cannabis.csv').then(csvData => {
// Adds strains to list on site

var filtazzz = []
d3.selectAll(".effectSelectors").each(function(d) {filtazzz.push(this.value)});
console.log(filtazzz);
var filteredStuff = csvData.filter((x)=>filtazzz.every(i => x.Effects.split(",").includes(i)));
console.log(filteredStuff);
// // console.log(d3.select("#selStrain").property("value"));
// var filteredStrains1 = csvData.filter((x) => 
//     // x.Strain=="1024");
//     x.Effects.split(",").includes(d3.select("#selEffect1").property("value")));
// // effectSelect1.property("value")
// console.log(filteredStrains1);

var strainList = d3.select("#showStrains");
strainList.html("");
filteredStuff.forEach((strain) => {
    var listItem = strainList.append("li");
    listItem.text(strain.Strain);
    listItem.style("color", "red");

 
//   // Adds values to table on site
// var tbody = d3.select("tbody");
// data.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
    

    // Object.entries(ufo).forEach(([key, value]) => {
    //   var cell = row.append("td");
    //   cell.text(value);
    // });
  });

});
};

function strainInfo(){
    d3.csv('assets/data/cannabis.csv').then(csvData => {
    // var currentMeta = allData.metadata.filter(x=>x.id===+currentId);
    var view1 = d3.select("#selStrain1");
    console.log(view1);
    console.log(view1.property("value"));
    var currentView1 = csvData.filter(x=>x.Strain===view1.property("value"));
    d3.select("#strainViewer1").html(""); //clears panel before adding new info
    // Object.entries(currentMeta[0]).forEach(([key,value])=>{
    //     metadataspace.append("p").text(`${key} : ${value}`)
    // });
    console.log(currentView1);
    Object.entries(currentView1[0]).forEach(([key,value])=>{
        d3.select("#strainViewer1").append("p").text(`${key} : ${value}`);
        console.log(key);
    });

     // var currentMeta = allData.metadata.filter(x=>x.id===+currentId);
     var view2 = d3.select("#selStrain2");
     console.log(view2);
     console.log(view2.property("value"));
     var currentView2 = csvData.filter(x=>x.Strain===view2.property("value"));
     d3.select("#strainViewer2").html(""); //clears panel before adding new info
     // Object.entries(currentMeta[0]).forEach(([key,value])=>{
     //     metadataspace.append("p").text(`${key} : ${value}`)
     // });
     console.log(currentView2);
     Object.entries(currentView2[0]).forEach(([key,value])=>{
         d3.select("#strainViewer2").append("p").text(`${key} : ${value}`);
         console.log(key);
     });



});
};

console.log(d3.selectAll("select"));
d3.selectAll("select").on("change",createStuff);

// function optionChanged(newId) {
//     createStuff();
// };