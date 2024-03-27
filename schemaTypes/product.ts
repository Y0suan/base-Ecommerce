export default{
    name:"producto",
    type:"document",
    title:"Producto",
    fields:[
        {
            name:"name",
            type: "string",
            title: "Nombre del Producto",
        },
        {
            name:"images",
            type:"array",
            title:"Producto Imagenes",
            of:[{type:"image"}],
        },
        {
            name:"description",
            type:"text",
            tile:"Descripcion del Producto",
        },
        {
            name:"slug",
            type:"slug",
            title:"Producto Slug",
            options:{
                source:"name",
            },
        },
        {
            name:"price",
            type:"number",
            title:"Precio",
        },
        {
            name:"category",
            title:"Categoria del Producto",
            type: "reference",
            to:[
                {
                    type:"categoria",
                },
            ]
        }
    ]
}