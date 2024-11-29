// Это конфигурационный файл для автозапуска приложения посредством PM2 на Ubuntu
// Запуск pm2 start 
module.exports = {
    apps: [
      {
        name: 'ElisaLabRu',
        script: 'node_modules/next/dist/bin/next',
        args: '-p 3500',
        exec_mode: 'cluster',
        instances: 'max'
      }
    ]
  }