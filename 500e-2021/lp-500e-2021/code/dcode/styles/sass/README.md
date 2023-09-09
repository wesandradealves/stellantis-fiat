# @dcode/styles/sass
> 

#### Using with .sassrc

```js
const path = require('path');
const cwd = process.cwd();

module.exports = {
  data: `@import
    "@dcode/styles/sass/data",
    "<project index>"
  ;`,
  includePaths: [
    path.resolve(cwd, 'node_modules'),
    path.resolve(cwd, 'src'),
  ],
};
```

[variable_exists-instance_method]: http://sass-lang.com/documentation/Sass/Script/Functions.html#variable_exists-instance_method
[global_variable_exists-instance_method]: http://sass-lang.com/documentation/Sass/Script/Functions.html#global_variable_exists-instance_method
