import { Model, DataTypes, Sequelize, BuildOptions } from 'sequelize';

interface User extends Model {
  readonly id: string;
  name: string;
  password_hash: string;
  email: string;
  createted_at: Date;
  updated_at: Date;
}

type UserStatic = typeof Model & {
  new (values?: Partial<User>, options?: BuildOptions): User;
};

export default function build(sequelize: Sequelize) {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      updatedAt: 'updated_at',
      createdAt: 'created_at',
    },
  ) as UserStatic;
  return User;
}
