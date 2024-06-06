const {gql} = require('apollo-server');

const typeDefs = gql`
type Mutation {
    addUsuario_CookBook(nombre: String!, apellido: String!, correo: String!, telefono: String!, contrasena: String!): Usuario_CookBook!
    updateUsuario_CookBook(id_usuario: ID!, nombre: String!, apellido: String!, correo: String!, telefono: String!, contrasena: String!): Usuario_CookBook!
    deleteUsuario_CookBook(id_usuario: ID!): ID!

    addReceta_CookBook(receta: String!, tiempo_preparacion: Int!, porciones: Int, descripcion: String!): Receta_CookBook!
    updateReceta_CookBook(id_receta: Int!, receta: String!, tiempo_preparacion: Int!, porciones: Int, descripcion: String!): Receta_CookBook!
    deleteReceta_CookBook(id_receta: Int!): ID!

    deleteReceta_Ingrediente_CookBook(id_receta: Int!, id_ingrediente: Int!, id_medida: Int!, Cantidad: Int): Receta_Ingrediente_CookBook!

    addIngrediente_CookBook(ingrediente: String, id_categoria: String): Ingrediente_CookBook!
    updateIngrediente_CookBook(id_ingrediente: Int!, ingrediente: String, id_categoria: String): Ingrediente_CookBook!
    deleteIngrediente_CookBook(id_ingrediente: ID!): ID!

    addMedida_CookBook(medida: String): Medida_CookBook!
    updateMedida_CookBook(id_medida: ID!, medida: String!): Medida_CookBook!
    deleteMedida_CookBook(id_medida: ID!): ID!

    addCategoria_CookBook(categoria: Int): Categoria_CookBook!
    updateCategoria_CookBook(id_categoria: ID!, categoria: Int): Categoria_CookBook!
    deleteCategoria_CookBook(id_categoria: ID!): ID!
}

type Usuario_CookBook{
    id_usuario: ID!
    nombre: String!
    apellido: String!
    correo: String!
    telefono: String!
    contrasena: String!
}

type Receta_CookBook {
    id_receta: ID!
    receta: String!
    tiempo_preparacion: Int!
    porciones: Int
    descripcion: String!
}

type Receta_Ingrediente_CookBook {
    id_receta: Int!
    id_ingrediente: Int!
    id_medida: Int!
    Cantidad: Int!
}

type Ingrediente_CookBook {
    id_ingrediente: ID!
    ingrediente: String
    id_categoria: String
}

type Medida_CookBook {
    id_medida: ID!
    medida: String
}

type Categoria_CookBook {
    id_categoria: ID!
    categoria: Int
}

type Query {
    usuario: [Usuario_CookBook]
    receta: [Receta_CookBook]
    receta_ingrediente: [Receta_Ingrediente_CookBook]
    ingrediente: [Ingrediente_CookBook]
    medida: [Medida_CookBook]
    categoria: [Categoria_CookBook]
}
`;

module.exports = typeDefs;