const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  const { keyword } = event
  if (!keyword) return { code: -1, msg: 'keyword is required' }
  try {
    const result = await db.collection('ingredients').where(_.or([
      { name: db.RegExp({ regexp: keyword, options: 'i' }) },
      { effectCategory: db.RegExp({ regexp: keyword, options: 'i' }) }
    ])).get()
    return { code: 0, data: result.data }
  } catch (err) {
    return { code: -1, msg: err.message }
  }
}
