let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ๐
โโโใ ฤฑll *Sewa Bot* llฤฑ ใโโใฟ
โโโโโโโโโโโโโโโโโโโโ
โโโใ ฤฑll *HARGA* llฤฑ ใโโใฟ
โฌก *1 BULAN* 5.000
โฌก *PERMANEN 2 grup:* 10.000
โฌก *PERMANEN 3-6 grup:* 20.000
โฉยป lebih dari 6 tambah +5.000
๐ฎ *batas scan 5 kali !*
โโโโโโโโโโโโโโโโโโโใฟ
โโโโใ ฤฑll *PAYMENT* llฤฑ ใโโใฟ
โฌก *DANA:* ${dana}
โฌก *GOPAY:* ${gopay}
โฌก *OVO:* ${pulsa}
โฌก *PULSA:* ${pulsa}
โโโโโโโโโโโโโโโโโโโใฟ
โโโใ ฤฑll *RULES* llฤฑ ใโใฟ
โฌก [โ] *Dana yang sudah masuk tida bisa di kembalikan*
โฌก [โ] *Kalau akunmu ke banned bukan urusan saya*
โโโโโโโโโโโใฟ
Jika anda berminat hubungi nomor di bawah!!

โฉยป *jangan lupa donasi kak* ยซโจ
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak๐ผ*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewanadin']
handler.tags = ['info']
handler.command = /^(zifasewa|sewazifa)$/i

module.exports = handler
