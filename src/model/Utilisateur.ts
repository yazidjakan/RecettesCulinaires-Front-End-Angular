import { Recette } from "./Recette"
import { Role } from "./Role"

export interface Utilisateur{
    id:string,
    nom:string,
    age:string,
    email:string,
    password:string,
    roles:Role[]
}