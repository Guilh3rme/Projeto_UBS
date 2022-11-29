import Realm from "realm";
import { UserSchema } from "./schemas/TaskSchema";

export const getRealm = async () =>
  await Realm.open({
    path: "ubs_app",
    schema: [UserSchema],
  });
