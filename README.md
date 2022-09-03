# RickAndMortyPedia

Bienvenid@, este es el proyecto frontend en Angular que consume  la API Rest Full (aunque también soporta GraphQL) [Rick And Morthy](https://rickandmortyapi.com/documentation)

## Información relevante
Esta es una API Rest Full desarrollada con con al versión estable de Node.js #14

* Desarrollado con Angular
* Desarrollado con TypeScript
* Desarrollado con CSS (Hojas de estilo en cascada).


## Descargar el repositorio
A continuación los pasos para la instalación de las dependencias con `git`

* Para descargar el repositorio en una carpeta con el mismo nombre del repositorio  

```markdown
git clone https://github.com/JesielPalacios/rick-and-morty-pedia
```

* Para descargar el repositorio en una carpeta actual  

```markdown
git clone https://github.com/JesielPalacios/rick-and-morty-pedia .
```

* Para descargar una rama específica del repositorio

```markdown
git clone https://github.com/JesielPalacios/rick-and-morty-pedia -b <nombredeLaRama>
```

* Para descargar una rama específica del repositorio en una carpeta actual  

```markdown
git clone https://github.com/JesielPalacios/rick-and-morty-pedia -b <nombredeLaRama> .
```


## Instalación de dependencias
* Para instalar todas las dependencias de nuestro proyecto debemos  ejecutar el siguiente comando: `npm i`

```markdown
npm i
```

ó también puede utiliza el comando referente:

```markdown
npm install
```

Y con esto ya habrás instalado todas las dependencias de nuetro proyecto y estarás listo para empeazar  ausarlo o modificarlo.

* Para instalar una nueva dependencia: `npm i <nombreDeLaDependencia>`

```markdown
npm i <nombreDeLaDependencia>
```

ó también puede utiliza el comando referente:

```markdown
npm install <nombreDeLaDependencia>
```

* Para instalar una nueva dependencia con una versión en específico: `npm i <nombreDeLaDependencia>@versión`

```markdown
npm i <nombreDeLaDependencia>@versión
```

ó también puede utiliza el comando referente:

```markdown
npm install <nombreDeLaDependencia>@versión
```



## Iniciar el servidor
* Para iniciar el servidor en modo de desarrollo se hace con el comando: `npm run dev`, por defecto el puerto de desarrollo es `3001` pero se le puede pasar una bandera (flag) `--port` en la que se puede configurar el puerto indicando el número deseado:

```markdown
npm start
```

Agregando una variable de entorno (también puede agregar una variable de entorno en el archivo `.env` sin necesidad de pasarla a cada rato por la terminal o la consola)

```markdown
--port=<númeroDePuertoDeseado> npm run start
```

ó también puede utiliza el comando referente:

```markdown
ng serve --port=<númeroDePuertoDeseado>
```

* Para deployar/despleguar la aplicación y poder cargarla en algún servidor o host en modo de producción se hace con el comando: `npm run build`

```markdown
npm run build
```




## Correr pruebas
* Para correr las diferentes pruebas del proyecto: `npm run tests`

```markdown
npm run tests
```



## Contacto
Esto ha sido todo por ahora, muchas gracias por tu interés en este proyecto, si necesitas alguna información adicional, soporte, reporte de errores, pull requests (PRs), donarme un cafesito puedes contactarme al correo: jesielvirtualsa@gmail.com

También puede visitarne en LinkedIn:
* https://www.linkedin.com/in/jesiel-palacios-co/

Y portafolio web de mis proyectos:
* https://jesielpalacios.github.io/


<br>
Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.

<br>
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 14.2.1.

## Servidor de desarrollo

Ejecute `ng serve` para un servidor de desarrollo. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.

## Andamiaje de código

Ejecute `ng generate component nombre-de-componente` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construir| Despliegue

Ejecute `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecutando pruebas unitarias

Ejecute `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecutar pruebas de extremo a extremo

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Para usar este comando, primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro.

## Más ayuda

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI](https://angular.io/cli)