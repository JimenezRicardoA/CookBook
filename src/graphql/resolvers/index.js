const db = require('../../database/db');

const resolvers = {
    Query: {
        usuario: async () => await db.select().table('Usuario_CookBook'),
        receta: async () => await db.select().table('Receta_CookBook'),
        receta_ingrediente: async () => await db.select().table('Receta_Ingrediente_CookBook'),
        ingrediente: async () => await db.select().table('Ingrediente_CookBook'),
        medida: async () => await db.select().table('Medida_CookBook'),
        categoria: async () => await db.select().table('Categoria_CookBook'),
        preparacion: async () => await db.select().table('Preparacion_CookBook'),
        utensilio: async () => await db.select().table('Utensilio_CookBook'),
        receta_utensilio: async () => await db.select().table('Receta_Utensilio_CookBook'),
    },

    Mutation: {
        //Usuario_CookBook
        addUsuario_CookBook: async (_, {nombre, apellido, correo, telefono, contrasena}) => {
            const [id_usuario] = await db('Usuario_CookBook').insert({nombre, apellido, correo, telefono, contrasena});
            const newUsuario_CookBook = await db('Usuario_CookBook').where({id_usuario}).first();
            return newUsuario_CookBook;
        },

        updateUsuario_CookBook: async (_, {id_usuario, nombre, apellido, correo, telefono, contrasena}) => {
            await db('Usuario_CookBook').where({id_usuario}).update({nombre, apellido, correo, telefono, contrasena});
            const updatedUsuario_CookBook = await db('Usuario_CookBook').where({id_usuario}).first();
            return updatedUsuario_CookBook;
        },

        deleteUsuario_CookBook: async (_, { id_usuario }) => {
            await db('Usuario_CookBook').where({id_usuario}).del();
            return id_usuario;
        },

        //Receta_CookBook
        addReceta_CookBook: async (_, { receta, tiempo_preparacion, porciones, descripcion}) => {
            const [id_usuario] = await db('Receta_CookBook').insert({receta, tiempo_preparacion, porciones, descripcion});
            const newReceta_CookBook = await db('Receta_CookBook').where({id_usuario}).first();
            return newReceta_CookBook;
        },

        updateReceta_CookBook: async (_, {id_usuario, receta, tiempo_preparacion, porciones, descripcion}) => {
            await db('Receta_CookBook').where({id_usuario}).update({receta, tiempo_preparacion, porciones, descripcion});
            const updatedReceta_CookBook = await db('Receta_CookBook').where({id_usuario}).first();
            return updatedReceta_CookBook;
        },

        deleteReceta_CookBook: async (_, { id_usuario }) => {
            await db('Receta_CookBook').where({id_usuario}).del();
            return id_usuario;
        },

        //Receta_Ingrediente_CookBook
        deleteReceta_Ingrediente_CookBook: async (_, {id_receta, id_ingrediente, id_medida}) => {
            await db('Receta_Ingrediente_CookBook').where({id_receta, id_ingrediente, id_medida}).del();
            return id_receta, id_ingrediente, id_medida;
        },

        //Ingrediente_CookBook
        addIngrediente_CookBook: async (_, {ingrediente, id_categoria}) => {
            const [id_ingrediente] = await db('Ingrediente_CookBook').insert({ingrediente, id_categoria});
            const newIngrediente_CookBook = await db('Ingrediente_CookBook').where({id_ingrediente}).first();
            return newIngrediente_CookBook;
        },

        updateIngrediente_CookBook: async (_, { id_ingrediente, ingrediente, id_categoria}) => {
            await db('Ingrediente_CookBook').where({id_ingrediente}).update({ingrediente, id_categoria});
            const updatedPublicationRJ = await db('Ingrediente_CookBook').where({id_ingrediente}).first();
            return updatedPublicationRJ;
        },

        deleteIngrediente_CookBook: async (_, { id_ingrediente }) => {
            await db('Ingrediente_CookBook').where({id_ingrediente}).del();
            return id_ingrediente;
        },

        //Medida_CookBook
        addMedida_CookBook: async (_, {medida}) => {
            const [id_medida] = await db('Medida_CookBook').insert({medida});
            const newMedida_CookBook = await db('Medida_CookBook').where({id_medida}).first();
            return newMedida_CookBook;
        },

        updateMedida_CookBook: async (_, {id_medida, medida}) => {
            await db('Medida_CookBook').where({id_medida}).update({medida});
            const updatedMedida_CookBook = await db('Medida_CookBook').where({id_medida}).first();
            return updatedMedida_CookBook;
        },

        deleteMedida_CookBook: async (_, { id_medida }) => {
            await db('Medida_CookBook').where({id_medida}).del();
            return id_medida;
        },

        //Categoria_CookBook
        addCategoria_CookBook: async (_, {categoria}) => {
            const [code] = await db('Categoria_CookBook').insert({categoria});
            const newCategoria_CookBook = await db('Categoria_CookBook').where({code}).first();
            return newCategoria_CookBook;
        },

        updateCategoria_CookBook: async (_, {id_categoria, categoria}) => {
            await db('Categoria_CookBook').where({id_categoria}).update({categoria});
            const updatedCategoria_CookBook = await db('Categoria_CookBook').where({id_categoria}).first();
            return updatedCategoria_CookBook;
        },

        deleteCategoria_CookBook: async (_, { id_categoria }) => {
            await db('Categoria_CookBook').where({id_categoria}).del();
            return id_categoria;
        },

        //Preparacion_CookBook
        addPreparacion_CookBook: async (_, {id_receta, paso, descripcion}) => {
            const [id_preparacion] = await db('Preparacion_CookBook').insert({id_receta, paso, descripcion});
            const newPreparacion_CookBook = await db('Preparacion_CookBook').where({id_preparacion}).first();
            return newPreparacion_CookBook;
        },

        updatePreparacion_CookBook: async (_, {id_preparacion, id_receta, paso, descripcion}) => {
            await db('Preparacion_CookBook').where({id_preparacion}).update({id_receta, paso, descripcion});
            const updatedPreparacion_CookBook = await db('Preparacion_CookBook').where({id_preparacion}).first();
            return updatedPreparacion_CookBook;
        },

        deletePreparacion_CookBook: async (_, { id_preparacion }) => {
            await db('Preparacion_CookBook').where({id_preparacion}).del();
            return id_preparacion;
        },

        //Utensilio_CookBook
        addUtensilio_CookBook: async (_, {utensilio, descripcion}) => {
            const [id_utensilio] = await db('Utensilio_CookBook').insert({utensilio, descripcion});
            const newUtensilio_CookBook = await db('Utensilio_CookBook').where({id_utensilio}).first();
            return newUtensilio_CookBook;
        },

        updateUtensilio_CookBook: async (_, {id_utensilio, utensilio, descripcion}) => {
            await db('Utensilio_CookBook').where({id_utensilio}).update({utensilio, descripcion});
            const updatedPreparacion_CookBook = await db('Utensilio_CookBook').where({id_utensilio}).first();
            return updatedPreparacion_CookBook;
        },

        deleteUtensilio_CookBook: async (_, { id_utensilio }) => {
            await db('Utensilio_CookBook').where({id_utensilio}).del();
            return id_utensilio;
        },

        //Receta_Ingrediente_CookBook
        deleteReceta_Utensilio_CookBook: async (_, {id_receta, id_utensilio}) => {
            await db('Receta_Ingrediente_CookBook').where({id_receta, id_utensilio}).del();
            return id_receta, id_utensilio;
        },
    },
};

module.exports = resolvers;