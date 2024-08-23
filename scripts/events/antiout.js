module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊 বস ${name} ব্লক করছে তাই এড করতে পারলাম না😞😞  \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊 -----❖----:( `, event.threadID)
   } else api.sendMessage(`𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊 BoSS, ${name} লিভ নেওয়া আইডি টা পুনরায় এড করতে সফল্য! \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐊𝐡𝐚𝐧 𝐑𝐚𝐡𝐮𝐥 𝐑𝐊 -----❖----`,

 event.threadID);
  })
 }
                     }
