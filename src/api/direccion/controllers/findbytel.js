const { filter } = require('../../../../config/middlewares');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports=createCoreController("api::direccion.direccion",()=>({
    async index(ctx) {
      try {
        // Obtiene el número de teléfono desde el cuerpo de la solicitud
        const  nombree  = ctx.request.body;
  
        // Validar que se haya proporcionado el número de teléfono
        if (!nombree) {
          return ctx.badRequest('tel number is required');
        }

        const customers= await strapi.entityService.findMany('api::direccion.direccion', {
          fields: ['direccion', 'preciodelivery'],
          filters: nombree
        });
          
        if(JSON.stringify(customers).length==2){
          return ctx.send({
            message: 'Direccion no encontrada.',
            encontrado: false,
          });
          
        }else{
          ctx.send({
            message: 'Direccion found',
            encontrado:true,
            data: customers
          });
        }

      
      } catch (error) {
        // Manejo de errores generales
        console.log(error)
        ctx.internalServerError('An error occurred while searching the direccion');
      }
    },
}))
