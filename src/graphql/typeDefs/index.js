const {gql} = require('apollo-server');

const typeDefs = gql`
type Mutation {
    addUsuario_CookBook(nombre: String!, apellido: String!, correo: String!, telefono: String!, contrasena: String!): Usuario_CookBook!
    updateUsuario_CookBook(id_usuario: ID!, nombre: String!, apellido: String!, correo: String!, telefono: String!, contrasena: String!): Usuario_CookBook!
    deleteUsuario_CookBook(id_usuario: ID!): ID!

    addReceta_CookBook(receta: String!, tiempo_preparacion: Int!, porciones: Int, descripcion: String!): Receta_CookBook!
    updateReceta_CookBook(id_receta: Int!, receta: String!, tiempo_preparacion: Int!, porciones: Int, descripcion: String!): Receta_CookBook!
    deleteReceta_CookBook(id_receta: Int!): ID!

    deleteReceta_Ingrediente_CookBook(id_receta: ID!, id_ingrediente: ID!, id_medida: ID!, Cantidad: Int): Receta_Ingrediente_CookBook!

    addIngrediente_CookBook(ingrediente: String, id_categoria: String): Ingrediente_CookBook!
    updateIngrediente_CookBook(id_ingrediente: Int!, ingrediente: String, id_categoria: String): Ingrediente_CookBook!
    deleteIngrediente_CookBook(id_ingrediente: ID!): ID!

    addMedida_CookBook(medida: String): Medida_CookBook!
    updateMedida_CookBook(id_medida: ID!, medida: String!): Medida_CookBook!
    deleteMedida_CookBook(id_medida: ID!): ID!

    addCategoria_CookBook(categoria: Int): Categoria_CookBook!
    updateCategoria_CookBook(id_categoria: ID!, categoria: Int): Categoria_CookBook!
    deleteCategoria_CookBook(id_categoria: ID!): ID!

    addPreparacion_CookBook(id_receta: ID, paso: Int, descripcion: String!): Preparacion_CookBook!
    updatePreparacion_CookBook(id_preparacion: ID!, id_receta: ID, paso: Int, descripcion: String!): Preparacion_CookBook!
    deletePreparacion_CookBook(id_preparacion: ID!): ID!

    addUtensilio_CookBook(utensilio: String!, descripcion: String): Utensilio_CookBook!
    updateUtensilio_CookBook(id_utensilio: ID!, utensilio: String!, descripcion: String): Utensilio_CookBook!
    deleteUtensilio_CookBook(id_utensilio: ID!): ID!

    deleteReceta_Utensilio_CookBook(id_receta: ID!, id_utensilio: ID!): Receta_Utensilio_CookBook!
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

type view_ingredientes{
    receta: String
    ingrediente: String
    categoria: String
    medida: String
    Cantidad: Int
}

type Medida_CookBook {
    id_medida: ID!
    medida: String
}

type Categoria_CookBook {
    id_categoria: ID!
    categoria: String
}

type Preparacion_CookBook{
    id_preparacion: ID!
    id_receta: ID!
    paso: Int!
    descripcion: String!
}

type view_preparacion{
    receta: String
    paso: Int
    descripcion: String
}

type Receta_Utensilio_CookBook {
    id_receta: ID!
    id_utensilio: ID!
}

type Utensilio_CookBook {
    id_utensilio: ID!
    utensilio: String!
    descripcion: String
}

type view_utensilio{
    receta: String
    utensilio: String
}

type Receta_Utensilio_CookBook {
    id_receta: ID!
    id_utensilio: ID!
}

type Query {
    usuario: [Usuario_CookBook]
    receta: [Receta_CookBook]
    receta_ingrediente: [Receta_Ingrediente_CookBook]
    ingrediente: [Ingrediente_CookBook]
    getIngredientes: [view_ingredientes]
    medida: [Medida_CookBook]
    categoria: [Categoria_CookBook]
    preparacion: [Preparacion_CookBook]
    getPreparacopm: [view_preparacion]
    receta_utensilio: [Receta_Utensilio_CookBook]
    utensilio: [Utensilio_CookBook]
    getUtensilio: [view_utensilio]
}
`;

module.exports = typeDefs;