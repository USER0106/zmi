let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f2d073b20bb1eefc93ccc.jpg', m, { packname: "nadinbotz", author: "@gaaraxploite" })
}

handler.customPrefix = /^(bot|woi|Cok|ngab|tod)$/i
handler.command = new RegExp

module.exports = handler
