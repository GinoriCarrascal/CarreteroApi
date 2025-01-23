const { filter } = require('../../../../config/middlewares');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports=createCoreController("api::customer.customer",()=>({
    async index(ctx) {
      try {
        // Obtiene el número de teléfono desde el cuerpo de la solicitud
        const  nombree  = ctx.request.body;
        console.log(ctx.request.body)
  
        // Validar que se haya proporcionado el número de teléfono
        if (!nombree) {
          return ctx.badRequest('tel number is required');
        }

        const customers= await strapi.entityService.findMany('api::customer.customer', {
          fields: ['nombre', 'dni'],
          filters: nombree
        });
        // Si no se encuentra un cliente, retorna un mensaje de error
        if (!customers || customers.length === 0) {
          return ctx.notFound('Customer not found');
        }

        ctx.send({
          message: 'Customer found',
          data: customers,
        });
      } catch (error) {
        // Manejo de errores generales
        console.log(error)
        ctx.internalServerError('An error occurred while searching for the customer');
      }
    },
}))
