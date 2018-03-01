require('dotenv').config()
const pgp = require('pg-promise')({
  connect (client, dc, isFresh) {
    const cp = client.connectionParameters
    console.log(`ˁᵒ͡ˑ̉ᵒˀ Connected To DB:  ${cp.database}`)
  },
  disconnect (client, dc) {
    const cp = client.connectionParameters
    console.log(`ˁᵒ͡ˑ̉ᵒˀ Disconnecting From DB:  ${cp.database}`)
  },
  error (err, e) {
    console.log('ERROR! ', err)
    if (e.cn) {
      // this is a connection-related error
      // cn = safe connection details passed into the library:
      //      if password is present, it is masked by #
    }

    if (e.query) {
      // query string is available
      if (e.params) {
        // query parameters are available
      }
    }

    if (e.ctx) {
      // occurred inside a task or transaction
    }
  },
  query (e) {
    console.log('QUERY:', e.query)
  }
})
const db = pgp(process.env.PGURL)
db.connect()
export default db
