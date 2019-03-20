'use strict';

module.exports = function loadAsociations (models) {
  const { companies, users } = models;

  // Definiendo relaciones
  companies.hasMany(users, { foreignKey: { name: 'id_company', allowNull: false } });
  users.belongsTo(companies, { foreignKey: { name: 'id_company', allowNull: false } });
};
