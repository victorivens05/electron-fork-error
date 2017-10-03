Simple project to show problem with child_process.fork

```
git clone https://github.com/victorivens05/electron-fork-error
cd electron-fork-error
npm install
npm start
```

It should run an Electron App and start an Express server listening on `http://localhost:3003`

To test, run `npm run dist`, an installer will be created to the folder `dist`.
The installed program doesn't get the Express server running if it's started with `child_process.fork`