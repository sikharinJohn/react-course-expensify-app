#Git commands
git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

 git remote add origin git@github.com:sikharinJohn/react-course-expensify-app.git

 ls -a ~/.ssh
ssh-add -K ~/.ssh/github_rsa

https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/


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





