# tryout-react
Build a simple React App


# Creating a new React Project

1. Install WebStorm via https://www.jetbrains.com/webstorm/download/ (there is a 30 day free evaluation)
2. Select New Project and choose React App.  In the Location field, type over the 'untitled' text to give your new project the name  e.g. 'tryout-react' (note: it has to be in lower case).  Select the Create TypeScript Project checkbox.

Click on Create. This will download and install NodeJS and setup a simple react project.

3. Click on terminal and type `npm start`.  If you haven't got `npm` (the NodeJS package manager) already installed it will prompt you to install it - just run the command it suggests before retrying `npm start`.

4. When you run `npm start` it will start a development server running on your local machine which defaults to port 3000.  This will live-compile the application so any edits you make to it will be reflected immediately in the browser.

You can try this now: just open the App.tsx file and change the message between the `<p></p>` tags.  Hit Ctrl-S (or Cmd-S) to save the file and it will imediately update in the browser.

This uses Babel (A transpiler for ES6/JSX to regular JavaScript) to do compilation 'on the fly' on the development machine and then serve this to the browser.  In this mode any changes to your source files are detected by a file watcher process which triggers a re-compile and reload in the browser. 

It is also possilbe to use Babel to do compilation in the browser itself but this is very slow and so is rarely used.

For production, you need to pre-compile and package (bundle) your code using a package bundler such as webpack. This also does other clever stuff like 'minifying' your bundled code and eliminating 'dead code' by 'tree-shaking'.


