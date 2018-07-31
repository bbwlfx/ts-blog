export default function (sequelize, DataType) {
  return sequelize.define(
    'Article',
    {
      id: {
        type: DataType.INTEGER(8),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataType.STRING(40),
        allowNull: false
      },
      content: {
        type: DataType.TEXT
      },
      notebook: {
        type: DataType.STRING(20),
        allowNull: false,
        defaultValue: 'default'
      }
    }
  );
}