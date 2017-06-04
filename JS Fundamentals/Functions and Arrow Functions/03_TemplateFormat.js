function xmlParser(text) {

    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for(let i = 0; i < text.length; i += 2){
        let question = text[i];
        let answer = text[i + 1];

        console.log('   <question>');
        console.log(`   ${question}`);
        console.log('   </question>');

        console.log('   <answer>');
        console.log(`   ${answer}`);
        console.log('   </answer>');

    }
    console.log('</quiz>');
}

xmlParser(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
);