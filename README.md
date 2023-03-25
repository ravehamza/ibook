
# iBook

iBook is an Angular application that allows users to write documents and access information about specific words within the document. It also allows users to send the document to a friend by filling out a form.



## Demo

![](demo.gif)

## Features

- Double-clicking on a word in the document editor shows information about that word on the right side of the screen.
- Uses the ngx-quill rich text editor for document creation.
- Uses NgRx for maintaining local states of information.
- Uses the Word LookUp REST API to retrieve information about specific words.
- Allows users to view the document by filling out a form that collects the phone, name, city, and email address etc.
- Uses Reactive Forms and Directives.


## File Structure

```
ibook/
├── src/
│   ├── app/
│   │   ├── _shared/
│   │   │   ├── directive/
│   │   │   │   ├── hover-cursor.directive.ts
│   │   │   │   └── textstyle.directive.ts
│   │   │   ├── model/
│   │   │   │   └── model.ts
│   │   │   ├── pipe/
│   │   │   │   └── safehtml.pipe.ts
│   │   │   ├── services/
│   │   │   │    └── api.service.ts
│   │   ├── component/
│   │   │   ├── edit/
│   │   │   │   ├── edit.component.html
│   │   │   │   ├── edit.component.scss
│   │   │   │   └── edit.component.ts
│   │   │   ├── home/
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.component.ts
│   │   │   ├── view/
│   │   │   │   ├── view.component.html
│   │   │   │   ├── view.component.scss
│   │   │   │   └── view.component.ts
│   │   ├── store/
│   │   │   │   ├── user.actions.ts
│   │   │   │   └── user.reducer.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   └── tsconfig.json
├── angular.json
├── package-lock.json
├── package.json
└── README.md
```
## Installation & Requirements

To run the iBook application, you'll need to have the following installed on your computer:
- Node.js
- Angular CLI

To install iBook, follow these steps:

- Clone the repository.
- Navigate to the project directory in the terminal.
- Run the command `npm install` to install the project dependencies.
- Run the command `ng serve` to start the development server.
- Open your web browser and navigate to `http://localhost:4200/`
