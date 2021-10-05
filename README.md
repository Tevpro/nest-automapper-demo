# NestJS Automapper Reference Implementation

[![Build](https://github.com/Tevpro/nest-automapper-demo/actions/workflows/build.yaml/badge.svg)](https://github.com/Tevpro/nest-automapper-demo/actions/workflows/build.yaml)

This implementation shows how [Automapper](https://automapperts.netlify.app/) can be used to convert between [Data Transfer Objects (DTO)](https://en.wikipedia.org/wiki/Data_transfer_object) and other classes. Automapper allows for the code that performs the transformation to be abstracted away from the controllers and services.

## Installation

Required:

```bash
npm install @automapper/{core, classes, nestjs}, class-transformer class-validator
npm install --save-dev @automapper/types
```

## StackBlitz

If you are running this on StackBlitz ([https://stackblitz.com/github/Tevpro/nest-automapper-demo](https://stackblitz.com/github/Tevpro/nest-automapper-demo)) you will need to execute the following commands and access the URL below to test.

```bash
nest start
```

Next append /api to the end of the url inside the StackBlitz browser panel to access swagger.

## Links

- Blog - [Understanding AutoMapper and it's use in a NestJS application](https://tevpro.com/blog/nestjs-and-automapper/)
- Website - [Tevpro - https://tevpro.com](https://tevpro.com)
- Author - [Keith Kikta](https://www.linkedin.com/in/keith-kikta-9621621a) [Blog](https://tevpro.com/author/keith/)
