let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'DONATE BOT'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ð
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
ââââã Ä±ll *DONATE* llÄ± ãââã¿
â¬¡ *DANA:* ${dana}
â¬¡ *GOPAY:* ${gopay}
â¬¡ *OVO:* ${pulsa}
âââââââââââââââââââã¿
âââã Ä±ll *THANKS TO* llÄ± ãâã¿
â¬¡ team creator-creator
â¬¡ team yang sudah berdonasi
âââââââââââã¿
Berapapun donasi kalian akan sangat berarti ð

Terimakasih yang sudah mendonasikan untuk bot

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh:v*`
  conn.sendButtonImg(m.chat, fla + teks, anu, instagram, 'Back', '.help', m) 
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
