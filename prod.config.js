// Prod settings

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // Concepcion Transparente
    {
      name      : "ct",
      script    : "/root/web-apps/concepcion-transparente/bin/www",
      env: {
        PORT: 3000,

	// ct-scrapper Mongo instance  
        MONGODB_URI: "mongodb://heroku_c3t3jndt:8obqd7ptv3dc8rn73q13qhpnft@ds125716.mlab.com:25716/heroku_c3t3jndt"
      }
    },

    // Concepcion Transparente Scrapper
    {
      name: "ct-scrapper",
      script: "/root/web-apps/concepcion-transparente-scrapper/app.js",
      env: {
        PORT: 3005,
        // ct-scrapper Mongo instance
        MONGODB_URI: "mongodb://heroku_c3t3jndt:8obqd7ptv3dc8rn73q13qhpnft@ds125716.mlab.com:25716/heroku_c3t3jndt",
          EMAIL_HOST: "smtp.gmail.com",
          EMAIL_PORT: "465",
          EMAIL_USERNAME: "testing@servirsa.biz",
          EMAIL_SEND_FROM: "Concepción Transparente Scrapper<testing@servirsa.biz>",
          EMAIL_PASSWORD: "testingServir!",
          EMAIL_SEND_TO: "datosconcepcion22@gmail.com,pinocomunicacion@gmail.com"
      }
    }
  ]
}
