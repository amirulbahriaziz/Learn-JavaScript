# Boilerplate-React-Tailwind

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## References

- [Quentin Watt Tutorials](https://youtu.be/HDEVMozZhv8)
- [LogRocket](https://youtu.be/pnDsP3BbXPg)
- [Smashing Megazine](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)
- [Coding The Smart Way](https://medium.com/codingthesmartway-com-blog/using-tailwind-css-with-react-ced163d0e9e9)
- [Dave Ceddia](https://daveceddia.com/tailwind-create-react-app/)

## Get Started

Step 1 : Create the project.

```
npx create-react-app boilerplate-react-tailwind
```

<br>

Step 2 : Install the packages.

```
npm install tailwindcss postcss-cli autoprefixer -D
```

\
Step 3 : Create tailwind configuration file.

```
npx tailwindcss init --full
```

\
Step 4 : Configure PostCSS

```
touch postcss.config.js
```

\
Step 5 : Insert the following line to the `root/postcss.config.js`

```
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ],
};
```

\
Step 6 : Create `src/styles/tailwind.css`,then insert the following lines.

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```

\
Step 7 : Build scripts in `root/package.json`

```
"scripts": {
    "start": "npm run build:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/styles/tailwind.css -o src/styles/main.css"
},
```

\
Step 8 : Insert the following line either in `App.js` / `index.js`

```
import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css"; // Change here..
import App from "./App";
```

\
Well done, you're good to go!
