const { gpt } = require("gpti");

export async function SendQuickChatReq(UserInput, callback) {
  return new Promise((resolve, reject) => {
    let previousMessages = {messages: []};
    const previousData = localStorage.getItem('previousConversation');
    if (previousData) {
      previousMessages = JSON.parse(previousData);
    }

    const currentMessages = [];
    previousMessages.messages.push(...currentMessages);
    const inputToJson = {role: "user", content: UserInput};
    previousMessages.messages.push(inputToJson);

    gpt({
      messages: previousMessages.messages,
      prompt: UserInput,
      model: "gpt-3.5-turbo",
      markdown: false
    }, (err, data) => {
      if (err != null) {
        console.log(err);
        reject(err);
      } else {
        const responseToJson = {role: "assistant", content: data.gpt};
        previousMessages.messages.push(responseToJson);
        localStorage.setItem('previousConversation', JSON.stringify(previousMessages));
          if (err) {
            console.error(err);
            reject(err);
          } else {
            console.log(data.gpt)
            return resolve(data.gpt);
          }
      }
    });
  });
}