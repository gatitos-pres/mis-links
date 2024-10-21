# React + TypeScript + Vite

This is a personal React project working in [Vite](https://github.com/vitejs/vite-plugin-react-swc)-[SWC](https://swc.rs/) with HMR and some ESLint rules.

- This is the current live [live page](https://gatitos-presidenciales.github.io/mis-links/)

## Building, running and deploying

### Building
If you are using pnpm as package manager, to build de application before running you need to use the command:
```bash
pnpm run predeploy
```
if you are using npm just run
```bash
npm run build
```

### Running locally
To run the application in your local machine you need to run this command in pnpm:
```bash
pnpm run dev
```
or this in npm:
```bash
npm run dev
```

### Deploying the changes to github pages
To publish the changes in github pages, you'll need to run:
```bash
pnpm run deploy
```
if you are using pnpm, or:
```bash
npm run predeploy
```
if you using npm.