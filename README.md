# RickAndMortyPedia

Bienvenid@, este es el proyecto frontend en Angular que consume  la API Rest Full de [Rick And Morthy](https://rickandmortyapi.com/documentation)

Podrás ver listados todos los personajes, así como información detallada de cada personaje, e información detallada de todas las ubicaciones y sus residentes.

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
* Para correr las diferentes pruebas del proyecto: `ng test`

```markdown
ng test
```



## Contacto
Esto ha sido todo por ahora, muchas gracias por su interés en este proyecto, si necesita alguna información adicional, soporte, reporte de errores, pull requests (PRs), donarme un cafesito puede contactarme al correo: jesielvirtualsa@gmail.com

También puede visitar mi perfil de LinkedIn:
* https://www.linkedin.com/in/jesiel-palacios-co/

Y portafolio web de mis proyectos:
* https://jesielpalacios.github.io/


<br>
Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 14.2.1.

<br>

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