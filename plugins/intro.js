import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let Poto = fs.readFileSync('./media/intro.jpg')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
let weem = `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`
conn.send2ButtonImg(m.chat, Poto, krtu, weem, '𝙈𝙀𝙉𝙐', '.menu', '𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐', '.tesm', '𝙊𝙒𝙉𝙀𝙍', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://www.instagram.com/mydiam.is.fun',
    mediaType: 2, 
    description: sig,
    title: 'Follow Sɪɴɪ Cᴜʏ',
    body: bottime,
    thumbnail: await(await fetch(introo)).buffer(),
    sourceUrl: sig
}}
  }) // Tambah sendiri kalo mau
}   
handler.command = /^(intro)$/i

export default handler

