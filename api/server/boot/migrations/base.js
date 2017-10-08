'use strict'

const path = require('path');
const models = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];

module.exports = function migrateBaseModels(app, next) {
  const mysql = app.dataSources.mysqlDb;
  mysql.isActual(models, (err, actual) => {
    if(err){
      throw err
    }

    let syncState = actual ? 'in sync' : 'out of sync'
    console.log('')
    console.log('Base models are ${syncStaus}')
    if(actual) return next()

    console.loog('Migrating Base Models...')

    mysql.autoupdate(models, (err, result) => {
      if(err) {
        throw err
      }
      console.log('Base models migration successful!')
      next()
    })
  })
}
