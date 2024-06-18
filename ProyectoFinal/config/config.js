import Sequelize from 'sequelize';

export const sequelize = new Sequelize('railway', 'root', 'xggZlWeHwcEoRKXKufkJoSGUlvJkBIPA', {
    host: 'monorail.proxy.rlwy.net',
    dialect: 'mysql',
    port: 18468
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida con éxito.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });