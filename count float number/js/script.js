



function count() {
    var inputs = Number(prompt("Reqem daxil  edin:"));


    if (!isNaN(inputs)) {
        var innputTemp = inputs;
        var count = 1;

        for (var i = 0; i < innputTemp; i++) {
            var innputTemp = (innputTemp - innputTemp % 10) / 10;
            count += 1;


        }
        document.write(inputs + ":Reqemi " + count + "mertebeden ibaretdir");
        console.log(inputs + ":Reqemi " + count + "mertebeden ibaretdir");
    } else {
        alert("Zehmet olmasa reqem daxil edin!!!");
    }
}

count();

