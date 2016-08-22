# ghostdance

Ghost Dance theme for [HubPress](https://github.com/HubPress/hubpress.io) blogging engine.

It also can be transformed in a [Ghost](https://github.com/TryGhost/Ghost) [blogging engine] theme with little or no efforts.

## Due Credits

This is a variation of **Purple Slimer** Ghost template which is itself a variation of **GhostScroll** template also for Ghost.

[GhostScroll](https://github.com/grmmph/GhostScroll)

[Purple Slimer](https://github.com/zebheone/GhostScroll)

## Demo or it didn't happen!

I am currently using `ghostdance` on my blog at github.io, [The Leet Crafting](https://iacchus.github.io/).

## Installation

1. HubPress runs on a GitHub repo, right? After you have your copy of HubPress up and running at GitHub, clone your fork of it to your local computer.
2. Enter the `themes/` directory which exists on the HubPress repository root, and
3. Clone the `ghostdance` template in there, so that the root of the `ghostdance` clone is inside themes (*ie*., `themes/ghostdance`):

    ```sh
    cd themes/
    git clone https://github.com/iacchus/ghostdance.git
    ```
4. Enter `ghostdance` subdirectory and remove the hidden `.git` repository. This makes it easier to commit changes to hubpress after editing the theme's template. Because you will be inside your HubPress repository and not inside a `ghostdance` repository.

    ```sh
    cd ghostdance/
    rm -rf .git/
    ```
5. Go back to the root your fork of your HubPress repository, commit the changes and push:

    ```sh
    git add . # note that this command has a dot at the end meaning 'track everything in current directory'
    git commit -a -m 'ghostdance Theme added to my HupPress repo'
    git pull --rebase
    git push
    ```
6. Go to the admin panel of your blog at https://*username*.github.io**/hubpress**, go to `Settings` -> `Site` and set ghostdance as your template; save the changes.

And you are all ready. :)

### Alternative Install

Alternatively you can [download the zip tarball](https://github.com/iacchus/ghostdance/archive/master.zip) from GitHub and unzip it inside themes, (following from point 3. above)

## How to Change the Cover Image of your Blog

1. Put the image you want to set as cover inside your **HubPress** `images/` directory, which exists on the root directory of it. 
2. Commit the changes and push to your GitHub repo

    ```sh
    cp ~/cover_filename.png images/
    git add . # note that this command has a dot at the end meaning 'track everything in current directory'
    git commit -a -m 'Added cover_filename.png to my HupPress repo'
    git pull --rebase
    git push
    ```
3. Go to the admin panel of your blog at https://*username*.github.io**/hubpress**, go to `Settings` -> `Site` and set `Cover Image` as in the example to `images/cover_filename.png` as your template; save the changes. 

## How to Edit this Theme

The HupPress themes are developed alike [Ghost](https://github.com/TryGhost/Ghost) themes, and Ghost Themes documentation should be enough to get you started. Also it uses Handlebars markup to render templates.

[Ghost Themes documentation](http://themes.ghost.org/) is here.

Why don't you also give a look at [Handlebars website](http://handlebarsjs.com/)...

## ABC Musical Notation to Sheet Music

This theme allows you to generate sheet music by using [abc musical notation](http://abcnotation.com/), writing a markdown GitHub-like code block with `abc` as syntax (three bacticks plus abc: \`\`\`abc).

Example, for embedding Morrison's jig score you can create a abc notation code block this way:

    ```abc
    X: 1
    T: Morrison's
    R: jig
    M: 6/8
    L: 1/8
    K: Edor
    |:E3 B3|EBE AFD|EDE B3|dcB AFD|
    E3 B3|EBE AFD|G3 FGA|dAG FED:|
    Bee fee|aee fee|Bee fee|a2g fed|
    Bee fee|aee fee|gfe d2A|BAG FGA|
    Bee fee|aee fee|Bee fee|faf def|
    g3 gfe|def g2d|edc d2A|BAG FED|
    ```

For this it uses [ABCJS](https://github.com/paulrosen/abcjs) script.

## Jupyter / iPython Notebook (html) Embed

This theme allows to embed iPython Notebooks (exported as `.html`)

1. At your HubPress blog repo **root directory**, create a directory name `ipynb-html/`.
2. Put there the notebooks you want to embed, as you would do with images. Commit and push to GitHub.
3. To embed it in your posts, create an **iframe with the class ".ipynb-embed"** and **an `data-filename` attribute with the filename**. Like this, let's suppose the filename is `Untitled3.html`:

    ```
++++
<iframe class="ipynb-embed" data-filename="Untitled3.html"></iframe>
++++
```

The stylesheet `assets/css/ipynb-custom.css` is injected (appended) to that iframe's body, so you can use it to style the notebooks.

## Philosophy

When I made this I had in mind an clear and simple template for showing articles, with very little or no egotrip.

## Support

You can talk what you want or need at this [repo issues](https://github.com/iacchus/ghostdance/issues), we are not picky on that.

## What is Coming Next? (To Do)

* It is needed to develop the links partial, but I am not going to for now as I don't use it.

* It is needed to supply more decoration for asciidoc elements, the template is ready to use.

## License

```
The MIT License (MIT)

Copyright (c) 2016 Iacchus Mercurius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See [LICENSE](https://github.com/iacchus/ghostdance/blob/master/LICENSE).
