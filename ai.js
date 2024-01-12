import {gpt} from 'gpti';
// import fs from 'fs';

export async function SendQuickChatReq(UserInput: string, callback: any) {
  return new Promise((resolve, reject) => {
    let previousMessages: any = {messages: []};
 //  const previousData = fs.readFileSync('previousConversation.json', 'utf8');
  //  previousMessages = JSON.parse(previousData);

    const currentMessages:any[] = [];
   // previousMessages.messages.push(...currentMessages);
    //const inputToJson = {role: "user", content: UserInput};
  //  previousMessages.messages.push(inputToJson);

    gpt({
     // messages: previousMessages.messages,
      prompt: UserInput,
      model: "GPT-4",
      markdown: false
    }, (err, data) => {
      if (err != null) {
        console.log(err);
        reject(err);
      } else {
        //const responseToJson = {role: "assistant", content: data.gpt};
        //previousMessages.messages.push(responseToJson);
      //  fs.writeFile('previousConversation.json', JSON.stringify(previousMessages), 'utf8', (err) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {

            callback(data.gpt);
          }
      //  });
      }
    });
  });
}


// module.exports = {SendQuickChatReq};
