const yargs = require("yargs");

const argv = yargs
    .command("lyr", "Tells whether a year is leap or not", {
        year: {
            description: "the year to check for",
            alias: "y",
            type: "number"
        }
    })
    .option("time", {
        alias: "t",
        description: "tell the present year",
        type: "boolean"
    })
    .help()
    .alias("help", "h").argv;

    if(argv.time) {
        console.log(`The current time is ${new Date().toLocaleTimeString()}`);        
    }
    if(argv._.includes("lyr")) {
        const year = argv.year || new Date().getFullYear();
        if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
            console.log(`${year} is a Leap Year`);
        } else {
            console.log(`${year} is NOT a Leap Year`);
        }
    }
    console.log(argv);