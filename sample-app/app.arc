@app
macro-apig-cors-demo

@http
get /

@static
fingerprint true

@macros
macro-apig-cors

@cors
AllowOrigins https://*
AllowCredentials true
ExposeHeaders Date x-api-id
MaxAge 300
AllowMethods *
AllowHeaders Authorization x-apigateway-header
