const { createCoreController } = require('@strapi/strapi').factories;

module.exports=
createCoreController("api::customer.customer",()=>({
    async  index(ctx,next) {
    ctx.send({msg:"this is hello route."})
    //ctx.body="Hello word";
        
    }
}))