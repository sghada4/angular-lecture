
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
    ng generate interface user
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
