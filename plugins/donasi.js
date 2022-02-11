//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
┌〔 Donasi • Emoney 〕
├ GoPay: GAKNOK SU [𝐟𝐢𝐫𝐚𝐚]
├ Dana: PROSES [𝐟𝐢𝐫𝐚𝐚]
├ Pulsa: 083830815715 [𝐟𝐢𝐫𝐚𝐚]
└────
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
