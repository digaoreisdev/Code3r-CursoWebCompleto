const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 4', function(){
  console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 