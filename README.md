# Express TypeSript Example for MetaCall FaaS

This example shows how to deploy a TypeScript server into [MetaCall.io](https://dashboard.metacall.io).

The transpilation of the project is done in the build command `npm run build`. MetaCall **always** executes this build command during during the build phase.

The `package.json` points to the `dist/index.js` folder which is the output of the build command:
```json
{
  "language_id": "node",
  "path": ".",
  "scripts": ["dist/index.js"]
}
```

This server is launched by NodeJS runtime (also known as Node Loader), because the transpilation is done at build time. If you want an example to run natively ts files without transpiling them, check out the [Express TypeScript Native Example](https://github.com/metacall/express-typescript-native-example.git).
