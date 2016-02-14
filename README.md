# sidhree-com

> Source code for [Sidhree.com][1]. Free to use according to [MIT license](LICENSE).

![Sidhree.com](https://raw.githubusercontent.com/dreamyguy/sidhree-com/master/src/base/img/do-not-compile/sidhree-com-github.png "Sidhree.com as just after release v0.0.2")

I created this project as a way to give back some of what I've learned to the open-source community. It was about time I put up a simple page with my details, so why not share.

## :sparkles: Installing

This project requires you to run `bower install` and `npm install` from the project's root. It requires [NodeJS][4] to be previously installed in your system.

If you're new to either [Bower][3] or [Gulp][2] you might want to install it globally:

```shell
$ npm install gulp-cli -g
$ npm install bower -g
```

## :horse_racing: Running it

Once installation is complete, you will have to compile the static files and start the server before you can view anything.

Run this to compile static files:

```shell
$ gulp
```

To view the project's page you will have to start-up the server. The command below will start the server on `localhost:3000`:

```shell
$ gulp serve
```

You can change the port number on [serve.js](https://github.com/dreamyguy/sidhree-com/blob/master/gulp/tasks/serve.js), but you'll have to check [browser-sync](https://github.com/Browsersync/browser-sync)'s documentation on how to do it.

## :surfer: Developing

Once your server is up and running, you will want to have `gulp` run by itself whenever you make a change. That way you can enjoy the full benefit of [BrowserSync](https://www.browsersync.io/), that will refresh the page automatically for you once you've saved your change. To trigger `gulp` to run when you save changes, open a new terminal window, browse to the project's root and run:

```shell
$ gulp watch
```

You can get _BrowserSync_ to load your site on several devices. Check [their documentation](https://www.browsersync.io/docs/) out.

## :cupid: Making it your own

To make this app **your very own**, you can change some or all of these configs:

:zap: [package.json](https://github.com/dreamyguy/sidhree-com/blob/master/package.json)  
The most important config. Leave untouched if you're not familiar with it.

:zap: [gulp/paths.json](https://github.com/dreamyguy/sidhree-com/blob/master/gulp/paths.json)  
Important config that helps you keep crucial paths in one place. Keep intact if you're not changing folder structure.

:zap: [gulp/config-template.json](https://github.com/dreamyguy/sidhree-com/blob/master/gulp/config-template.json)  
Important config that helps you keep paths related to `gulp` tasks in one place. Keep intact if you're not changing folder structure.

:zap: [gulp/options/jade.js](https://github.com/dreamyguy/sidhree-com/blob/master/gulp/options/jade.js)  
Handy for changing information that's compiled along with `jade` (which is done through the _templates_ task). Change values here and tada! :tada:

:zap: [.editorconfig](https://github.com/dreamyguy/sidhree-com/blob/master/.editorconfig)  
Just my personal editor's preferences.

There are some images used as favicons and open-graph resources. You will want to replace those with your own.

:camera: [src/base/favicons/icon.png](https://github.com/dreamyguy/sidhree-com/blob/master/src/base/favicons/icon.png)  
Change this image with another one of same dimensions and run the task `gulp favicons`. Favicons for various platforms will be generated and their markup will also be updated. Run `gulp` to get the icons and markup to compile into the page (as `gulp-favicons` is not a task included in the default `gulp` task).

:camera: [src/base/img/fluidicon/fluidicon.png](https://github.com/dreamyguy/sidhree-com/blob/master/src/base/img/fluidicon/fluidicon.png)  
Change this image with another one of same dimensions and run `gulp`. The image will compile to the default `dist/img` folder.

:camera: [src/base/img/og-images](https://github.com/dreamyguy/sidhree-com/blob/master/src/base/img/og-images)  
Change these images with others of same dimensions and run `gulp`. The images will compile to the default `dist/img` folder. If you change their names you'll need to edit their names on [gulp/options/jade.js](https://github.com/dreamyguy/sidhree-com/blob/master/gulp/options/jade.js) as well.

## :balloon: Publishing it as your website

You only need to upload the directories `dist` and `templates` to the `public_html` folder on your server.

If you have trouble to point your domain to `templates` on your server, just take the content of the `templates` folder and move it to root. At this point `templates` contains only one file: **index.html**.

If you do use it I'd love to see it! :thumbsup:

## :star2: License

I've never really bothered with licenses, but this time I think there's a lot of good work on this one. You're free to use it AS IS as long as you stick to the [MIT license](LICENSE).

## :rocket: Release History

 * 2016-02-14   v0.0.3   Updated README file and we're finally ready to take off.
 * 2016-02-14   v0.0.2   The project as it was published on [Sidhree.com][1].

---

A BIG thanks to the node community and all those who taught me to be a better programmer. You know who you are. :blush:

  [1]: http://sidhree.com
  [2]: http://gulpjs.com/
  [3]: http://bower.io/
  [4]: http://nodejs.org/