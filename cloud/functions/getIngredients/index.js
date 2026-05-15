const cloud = require('wx-server-sdk')
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

exports.main = async (event, context) => {
  try {
    const result = await db.collection('ingredients').get()
    return { code: 0, data: result.data }
  } catch (err) {
    return { code: -1, msg: err.message }
  }
}
