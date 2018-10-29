#Babel to compile javascript 

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

live-server public/

#Test playground
babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch

babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch

babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch


babel src/playground/counter-component.js --out-file=public/scripts/app.js --presets=env,react --watch


babel src/playground/visibilityToggle-component.js --out-file=public/scripts/app.js --presets=env,react --watch


babel src/playground/counter-default-props-component.js --out-file=public/scripts/app.js --presets=env,react --watch

babel src/playground/counter-localStorage.js--out-file=public/scripts/app.js --presets=env,react --watch


yarn run test -- --watch





