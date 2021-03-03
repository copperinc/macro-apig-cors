# macro-apig-cors

> Architect (arc.codes) serverless framework macro that customizes the generated HTTP API Gateway CORS settings

This macro enables your [arc.codes](https://arc.codes) app to customize your [HTTP API
Gateway's CORS settings][apig-cors].

⚠️ NOTE: if you use this macro, API Gateway will manage all CORS-related
headers - regardless of what the Lambda functions handling HTTP requests return
for their headers! If you need per-Lambda CORS header customization - do NOT use
this macro!

## Installation

1. Run: `npm i @copper/macro-apig-cors`

2. Then add the following line to the `@macros` pragma in your Architect project manifest (usually `app.arc`):

        @macros
        @copper/macro-apig-cors

3. Add a `@cors` pragma, and under this pragma, each line corresponds to a
   specific [HTTP API Gateway CORS setting][apig-cors] (for the full reference,
   check out the [CloudFormation API Gateway CORS reference][cfn-docs]). The
   available settings are:
   - `AllowCredentials`: a boolean value, set to either `true` or `false`. Specifies whether credentials are included in the CORS request. Example:

         @cors
         AllowCredentials true
   - `AllowHeaders`: one or more space-delimited strings. Represents a collection of allowed headers. Example:

         @cors
         AllowHeaders Authorization x-request-id
   - `AllowMethods`: one or more space-delimited strings. Represents a
       collection of allowed HTTP methods. Acceptable values are `GET`, `HEAD`, `POST`,
       `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH` and `*` (for all
       methods). Example:

         @cors
         AllowMethods *
   - `AllowOrigins`: one or more space-delimited strings. Represents a collection of allowed origins. Example:

         @cors
         AllowOrigins https://*
   - `ExposeHeaders`: one or more space-delimited strings. Represents a collection of exposed headers. Example:

         @cors
         ExposeHeaders Date x-apigateway-header
   - `MaxAge`: a numeric value. The number of seconds that the browser should cache preflight request results. Example:

         @cors
         MaxAge 300

## Sample Application

There is a sample application located under `sample-app/`. `cd` into that
directory, `npm install` and you can directly deploy using `arc deploy`, or
check out the generated `sam.json` by running `arc deploy --dry-run`.

[apig-cors]: https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html
[cfn-docs]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-property-httpapi-httpapicorsconfiguration.html
