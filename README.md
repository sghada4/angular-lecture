
# TypeScript & Angular Project Guide

## TypeScript Basics for Angular Projects

### 1. **Types in TypeScript**
TypeScript offers static typing, which helps catch errors during development. Common types include:

- **Basic Types**: `string`, `number`, `boolean`, `any`, `void`, `null`, `undefined`
- **Arrays**: `number[]`, `string[]`, or using generic syntax `Array<number>`
- **Tuples**: Fixed-length arrays, e.g., `[string, number]`
- **Enums**: Used for named constants, e.g., 
  ```typescript
  enum Color { Red, Green, Blue }
  let c: Color = Color.Green;
  ```
- **Union Types**: A variable can hold multiple types, e.g., `string | number`.
  ```typescript
  id = string | number;
  ```

### 2. **Interfaces**
Interfaces define the structure of an object or class, ensuring type safety.

#### Example:
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
};
```

### 3. **Classes**
Classes in TypeScript are similar to those in ES6 but include typing and access modifiers.

#### Example:
```typescript
class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const person = new Person("Alice");
console.log(person.greet());
```

---
### 4. **Run TypeScript**
1. Install TypeScript:
   ```bash
    npm install -g typescript
   ```

2. Verify installation
   ```bash
    tsc --version
    ```
   
3. Compile the TypeScript File
  ```bash
    tsc fileName.ts
  ```

4. Run the JavaScript File
  ```bash
    node fileName.js
  ```

---
## Starting an Angular Project

### 1. **Create a New Angular Project**
1. Install Angular CLI if not already installed:
   ```bash
   npm install -g @angular/cli
   ```
2. Create a new Angular project:
   ```bash
   ng new my-angular-app
   ```
   - Follow the prompts to set up the project (e.g., routing and CSS framework).

3. Navigate to the project directory:
   ```bash
   cd my-angular-app
   ```
4. Start the development server:
   ```bash
   ng serve
   ```

   Open your browser at [http://localhost:4200](http://localhost:4200).

### 2. **Display Data in the App Component**
1. Open `src/app/app.component.ts` and modify the `title` property:
   ```typescript
   title = 'My Angular Application';
   ```
2. In `src/app/app.component.html`, bind the `title` property using Angular interpolation:
   ```html
   <h1>{{ title }}</h1>
   ```

### 3. **Create a New Component**
1. Generate a new component using Angular CLI:
   ```bash
   ng generate component my-component
   ```
   This will create:
   - `my-component.component.ts`
   - `my-component.component.html`
   - `my-component.component.css`
   - `my-component.component.spec.ts`

2. Open `my-component.component.ts` and add a new property:
   ```typescript
   export class MyComponentComponent {
     message = 'Welcome to My Component!';
   }
   ```

3. Bind the `message` property in `my-component.component.html`:
   ```html
   <p>{{ message }}</p>
   ```

### 4. **Display the New Component in the App Component**
1. Import `MyComponentComponent` in `src/app/app.component.ts`
  ```typescript
  @Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  })
  ```

2. Add the `<app-my-component>` selector to `app.component.html`:
   ```html
   <h1>{{ title }}</h1>
   <app-my-component></app-my-component>
   ```


### 5. **Display a list in the New Component**
1. Import `CommonModule` in `my-component.component.ts`
    ```typescript
    @Component({
    selector: 'app-my-component',
    imports: [CommonModule],
    templateUrl: './my-component.component.html',
    styleUrl: './my-component.component.css',
    })
    ```
    
2. Define a list of books in `my-component.component.ts`:
   ```typescript
   books = [
     { id: 1, name: 'Book 1', nbPages: 180 },
     { id: 2, name: 'Book 2', nbPages: 245 },
     { id: 3, name: 'Book 3', nbPages: 366 },
   ];
   ```

3. Display the books in a table in `my-component.component.html`:
   ```html
   <table>
     <thead>
       <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Number of Pages</th>
       </tr>
     </thead>
     <tbody>
       <tr *ngFor="let book of books">
         <td>{{ book.id }}</td>
         <td>{{ book.name }}</td>
         <td>{{ book.nbPages }}</td>
       </tr>
     </tbody>
   </table>
   ```

### 6. **Communicate Data Between Components**
#### Parent to Child
1. Modify `my-component.component.ts` to accept an input:
   ```typescript
   import { Component, Input } from '@angular/core';

   @Component({
     selector: 'app-my-component',
     templateUrl: './my-component.component.html',
     styleUrls: ['./my-component.component.css']
   })
   export class MyComponentComponent {
     @Input() parentMessage: string = '';
   }
   ```

2. Bind the input property in `app.component.html`:
   ```html
   <app-my-component [parentMessage]="title"></app-my-component>
   ```

3. Display the parent message in `my-component.component.html`:
   ```html
   <p>Message from parent: {{ parentMessage }}</p>
   ```

#### Child to Parent
1. Create interface for `Book`
   ```bash
    ng generate interface book
   ```

2. Add an `@Output` property in `my-component.component.ts`:
   ```typescript
   import { Component, EventEmitter, Output } from '@angular/core';
   import {Book} from "../book"
   
   @Component({
     selector: 'app-my-component',
     templateUrl: './my-component.component.html',
     styleUrls: ['./my-component.component.css']
   })
   export class MyComponentComponent {
     @Output() notifyParent = new EventEmitter<Book[]>();

     sendBooks() {
       this.notifyParent.emit(this.books);
     }
   }
   ```

3. Add a button in `my-component.component.html`:
   ```html
   <button (click)="sendBooks()">Send Books</button>
   ```

4. Handle the event in `app.component.html`:
   ```html
   <app-my-component (notifyParent)="onNotify($event)"></app-my-component>
   ```

5. Implement the `onNotify` method in `app.component.ts`:
   ```typescript
   import {Book} from "./book"
   allBooks: Book[]= []
   onNotify(books: Book[]) {
     this.allBooks= books
   }
   ```
Here are detailed assignments based on the provided lecture document:

---

### **Assignment 1: Building Your First Angular Component**
#### Objective:
Understand how to create and use components in Angular.

#### Tasks:
1. **Setup**:
   - Create a new Angular project named `student-app`.

2. **App Component**:
   - Modify the `title` property in `app.component.ts` to `Welcome to Student App!`
   - Display the title in `app.component.html`.

3. **Custom Component**:
   - Generate a new component named `student-list`.
   - In `student-list.component.ts`, add an array of students with the following structure:
     ```typescript
     students = [
       { id: 1, name: 'Alice', age: 22 },
       { id: 2, name: 'Bob', age: 24 },
       { id: 3, name: 'Charlie', age: 23 }
     ];
     ```
   - In `student-list.component.html`, display the list of students using an `*ngFor` directive.

4. **Integrate Component**:
   - Add the `<app-student-list>` selector to `app.component.html` to display the new component.

#### Submission:
Provide a link to the GitHub repository with the Angular project files.

---

### **Assignment 2: Parent-Child Component Communication**
#### Objective:
Learn how to pass data between parent and child components.

#### Tasks:
1. **Parent to Child**:
   - In the `student-list` component, add an `@Input` property named `course`.
   - Modify `student-list.component.html` to display the course name at the top.
   - Pass the course name (`"Full-Stack Development"`) from the parent `app.component.html`.

2. **Child to Parent**:
   - Add a button in `student-list.component.html` labeled `Notify Parent`.
   - Emit an event from `student-list` to `app.component` with the message: `"Student list has been updated!"`.
   - Handle the event in `app.component.ts` and log the message in the console.

#### Submission:
Submit the updated Angular project with the `student-list` component demonstrating both types of communication.

---

### **Assignment 3: Create a Product Dashboard**
#### Objective:
Build a simple product dashboard with multiple components.

#### Tasks:
1. **Setup**:
   - Create a new Angular project named `product-dashboard`.

2. **Components**:
   - Generate components for `product-list`, `product-details`, and `product-summary`.

3. **Product List**:
   - In `product-list.component.ts`, add a list of products with the following properties:
     - `id`, `name`, `price`, `description`
   - Use `*ngFor` to display the products in `product-list.component.html`.

4. **Product Details**:
   - Use `@Input` to pass a product from `product-list` to `product-details`.
   - Display detailed information about the selected product in `product-details.component.html`.

5. **Product Summary**:
   - Calculate the total number of products and their average price in `product-summary.component.ts`.
   - Display these statistics in `product-summary.component.html`.

6. **Integration**:
   - Include all three components in `app.component.html` and ensure they work together seamlessly.

#### Submission:
Provide a link to the GitHub repository containing the complete `product-dashboard` project.

---

# Angular Lecture: Routing and Handling Forms

---

### 1. Create Components
#### Command to Generate Components:
```bash
ng generate component home
ng generate component about
ng generate component contact
ng generate component form
ng generate component display
```

---

### 2. Configure Routing
#### Add Routing Module:
- Open the `app-routes.ts` file.
- Define routes for the components:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'form', component: FormComponent },
  { path: 'display', component: DisplayComponent },
];

```

#### Update `app.component.html`:
Add a navigation bar and `<router-outlet>` for routing.

```html
<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a> |
  <a routerLink="/contact">Contact</a> |
  <a routerLink="/form">Form</a>
</nav>

<router-outlet></router-outlet>
```

Import `RouterOutlet` and `RouterModule` in `app.component.ts`

```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

```

---

### 3. Create a Form Component
#### Add Form Controls:
- Open `form.component.html` and add a form:

```html
<form #dataForm="ngForm" (ngSubmit)="onSubmit(dataForm.value)">
  <label for="name">Name:</label>
  <input id="name" name="name" ngModel required>

  <label for="email">Email:</label>
  <input id="email" name="email" type="email" ngModel required>

  <button type="submit" [disabled]="dataForm.invalid">Submit</button>
</form>
```

#### Handle Form Data in `form.component.ts`:
Add a method to send form data to another component.

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private router: Router) {}

  onSubmit(formData: any) {
    this.router.navigate(['/display'], { state: { data: formData } });
  }
}
```

---

### 4. Display Submitted Data
#### Access Data in `display.component.ts`:
Retrieve and display the form data passed via the router's state.

```typescript
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  formData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras?.state?.['data'] || {};
  }
}
```

#### Display Data in `display.component.html`:
Render the submitted data.

```html
<h2>Submitted Data:</h2>
<p><strong>Name:</strong> {{ formData.name }}</p>
<p><strong>Email:</strong> {{ formData.email }}</p>
```
