export default function(sequelize, DataType) {
  return sequelize.define(
    'NoteBook',
    {
      id: {
        type: DataType.INTEGER(8),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataType.STRING(20),
        allowNull: false,
        defaultValue: 'new notebook'
      },
      description: {
        type: DataType.STRING(40),
        allowNull: true
      }
    }
  );
}