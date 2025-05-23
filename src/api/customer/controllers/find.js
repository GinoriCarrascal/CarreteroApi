const { filter } = require('../../../../config/middlewares');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports=createCoreController("api::customer.customer",()=>({
    async index(ctx) {
      try {
        // Obtiene el número de teléfono desde el cuerpo de la solicitud
        const  nombree  = ctx.request.body;
  
        // Validar que se haya proporcionado el número de teléfono
        if (!nombree) {
          return ctx.badRequest('tel number is required');
        }

        const customers= await strapi.entityService.findMany('api::customer.customer', {
          fields: ['nombre', 'dni','id'],
          filters: nombree
        });
          
        if(JSON.stringify(customers).length==2){
          return ctx.send({
            message: 'Cliente no encontrado.',
            encontrado: false,
          });
          
        }else{
          ctx.send({
            message: 'Customer found',
            encontrado:true,
            data: customers
          });
        }

      
      } catch (error) {
        // Manejo de errores generales
        console.log(error)
        ctx.internalServerError('An error occurred while searching for the customer');
      }
    },
}))
