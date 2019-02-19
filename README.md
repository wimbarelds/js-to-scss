# js-to-scss

This is a simple module that will flatten down a javascript object into a
string. You can inject that string inside your Sass engine, via the
[data option](https://github.com/sass/node-sass#data)

## Example:

```js
import jsToScss from "js-to-scss";

const color= {
    black: '#000000',
    white: '#ffffff'
}
jsToScss(color);
```

will return:

```scss
$black: #000000;
$white: #ffffff;
```

## Extras

This module will convert arrays in Sass-list-like string and will go recursively
down to your object. Example:

```js
const settings = {
  color: {
    primary: {
      light: "#2ecc71",
      normal: "#27ae60",
      dark: "#16a085"
    }
  },
  remSize: ["14px", "16px", "18px"]
};
```

```scss
$color: (
  primary: (
    light: #2ecc71,
    normal: #27ae60,
    dark: #16a085,
  )
);
$remSize: (
  14px,
  16px,
  18px
);
```
### Why that?

I like to have a config file with all tha design option configuration: color,
breakpoints, typography etc... So I can use that across all the application
(breakpoint are really useful in your template engine if you use Elements
Queries)

### Why not a Webpack loader / Gulp plugin / Whatelse?

I wanted something simple importable in every node based project I have around
