const ops = [ 'AllowOrigins', 'AllowCredentials', 'ExposeHeaders', 'MaxAge', 'AllowMethods', 'AllowHeaders' ];
const scalarOps = [ 'MaxAge', 'AllowCredentials' ];

module.exports = (arc, cfn /* , stage, inventory*/ ) => {
    if (arc.cors && arc.cors.length) {
        let params = {};
        arc.cors.forEach(list => {
            if (list.length > 1) {
                let key = list[0];
                if (ops.includes(key)) {
                    if (scalarOps.includes(key)) params[key] = list[1];
                    else params[key] = list.slice(1);
                }
            }
        });
        cfn.Resources.HTTP.Properties.CorsConfiguration = params;
    }
    return cfn;
};
