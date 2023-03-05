import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
await conn.sendButton(m.chat, `*BIG THANKS TO*\nTerutama Terimakasih Teruntuk:\n➸ GW SENDIRI wkwk\nTerimakasih Juga Untuk Kang Banned:\n➸ 0@s.whatsapp.net\n─────────────────────\n•God\n•My ortu\n•Mr.Dark (Me)\n•Zyko-MD\n•King Of Bear\n•Nurutomo\n•Adiwajshing\n•Ariffb\n•Amel\n•IrwanX\n•Dawnfrosty\n•Rteam1\n•Beniismael\n•Raditya \n•AlyaaXzy \n•Haori \n•David\n•Rozi\n•Letta\n•Yanzz\n•Furqan\n•Elyas\n•Rasel\n•Xteam\n•Khael\n•Atenabot\n•Baka Botz\n•ZeeoneOfc\n•Zeks\n•Rendycraft  \n•Krizynofc\n•Nadin\n•NexEp\n•Jarot\n•Tio\n•Aca Mirabel\n•Ramdani\n•Penyedia Layanan API\n•Orang-orang yang Berdonasi─────────────────────\n`,wm + '\n\n' + botdate, giflogo2, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://instagram.com/mydiam.is.fun',
                        mediaType: 2,
                        description: 'anu',
                        title: global.titlebot,
                        body: '⚘ ᴄʀᴇᴀᴛᴇ ʙʏ ᴹᴿ Darkx',          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        sourceUrl: 'https://github.com/sadxzyq'
                      }}
})
}
handler.command = /^(tqto|credit|credits)$/i
handler.help = ['tqto']
handler.tags = ['main']

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
