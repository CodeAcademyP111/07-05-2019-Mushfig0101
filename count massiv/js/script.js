function massiv() {
    var inputs = String(prompt("Stringi daxil edin"));

    var counts = inputs.toString();
    var resoult = 0;
    for (var i = 0; i < counts.length; i++) {
        resoult += + 1;

    }
    console.log(counts +  ":" + resoult + " herfden ibaretdir");
    document.write(counts +  ":" + resoult + " herfden ibaretdir");
}

massiv();
