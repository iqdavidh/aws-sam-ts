# SAM Application  ( Lambda + Layers ) + TS + ES Modules + JEST

This SAM application has only two lambda functions, a lambda Layer, uses TS 5

## Folders structure and conventions:

1. There is only a package.json file in the application (at the root level); here,
we have all the dependencies required for lambda and the tests. The prod dependencies will be exported in the layer

2. The functions and layers are in the src folder at the same level
   src/<function name> or src/<layer name>.  The output folder for typescript is "dist"

3. In the src/lib folder, we will find all the common code used by all the lambdas, it's like a layer, but it will be editable from the ui ( this approach  is a solution for the test of the layers code)

4. The lambda folder should not include dependencies (package.json file). All the dependencies are in the layer. The folder only contains the lambda.ts file and additional ts files

5. The tsconfig.json file in the project is used for development purposes and is extended during the build process of every lambda function

6. The "lambda and layer builder" uses a BuildMethod (makefile). The final lambda's code will be created according to this process:
     a. Before the sam build step, we need to install all the dependencies (the tsc mmodule)
     b. The dist folder will be dropped, and the tsconfig.json file will be extended to include only the folder for the lambda and the src/lb folder (common code for all lambdas)
     c. A package.json file will be created at lambda's root level having only the declaration for ES modules.

7. The lambda layer will have only the production dependencies.

   

This project is based on the project https://github.com/Envek/aws-sam-typescript-layers-example
