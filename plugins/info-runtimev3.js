import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    
    let fgclink = {
           "key": {
               "fromMe": false,
               "participant": "0@s.whatsapp.net",
               "remoteJid": "0@s.whatsapp.net"
           },
           "message": {
               "groupInviteMessage": {
                   "groupJid": "6282127487538-1625305606@g.us",
                   "inviteCode": "null",
                   "groupName": "Halo", 
                   "caption": wm, 
                   'jpegThumbnail': fs.readFileSync('./media/ok.jpg')
               }
           }
       }
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    
 conn.sendButtonDoc(m.chat, `π©ππ πΌπππππ`, muptime + '\n\n', 'MENU', '.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: syt,
    mediaType: 1, 
    description: syt,
    title: gcname,
    body: wm,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: syt
     }}
  })
}
handler.help = ['runtime3']
handler.command = ['runtime3', 'rt3']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? π₯±"
  if (time >= 4) {
    res = "Pagi Lord π"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak βοΈ"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak π"
  }
  if (time >= 18) {
    res = "Malam Kak π"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days βοΈ*\n ', h, ' *Hours π*\n ', m, ' *Minute β°*\n ', s, ' *Second β±οΈ* '].map(v => v.toString().padStart(2, 0)).join('')
}