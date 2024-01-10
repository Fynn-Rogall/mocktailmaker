// import { gpt } from "gpti";
const { gpt } = require("gpti");

gpt({

    prompt: "wer ist bundeskanzler",
    model: "gpt-4-32k-0314",
    markdown: false,
    stream: false,
}, (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
    }
});