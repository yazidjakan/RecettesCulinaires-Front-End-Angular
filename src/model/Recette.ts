import { Categorie } from "./Categorie"

export interface Recette{
    id:string,
    titre:string,
    description:string,
    image:string,
    ingredients:string,
    categorie:Categorie,
    feedback:string
}