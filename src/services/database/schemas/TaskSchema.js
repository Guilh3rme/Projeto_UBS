export const UserSchema = {
  name: "Users",
  properties: {
    _id: {
      type: String,
    },
    nome: {
      type: String,
    },
    sobrenome: {
      type: String,
    },
    email: {
      type: String,
    },
    passwordHash: {
      type: String,
    },
    telefone: {
      type: String,
      default: "",
    },
    Created: {
      type: Date,
      default: Date.now,
    },
  },
  primaryKey: "_id",
};
