let handler = async (m, { conn }) => {
  let lang = db.data.users[m.sender].lang
  let tot = Object.values(global.plugins).filter(p => !p.disabled).map(p => Array.isArray(p.command) ? p.command : [p.command]).length
  let total = await `Kurang Lebih ${tot} fitur yang ada di dalam bot`
  m.reply(total)
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = /^(total)?fitur$/i

module.exports = handler