# Angular Material Lecture  

This README provides a comprehensive guide for understanding, installing, and using **Angular Material** in your Angular project. It covers everything from installation to utilizing various Angular Material components like buttons, navbar, cards, forms, icons, sidebar, tables, and lists.

---

## **1. Overview of Angular Material**

Angular Material is a UI component library for Angular developers. It provides a collection of reusable, well-tested, and accessible UI components based on Google’s Material Design principles.

---

## **2. Prerequisites**

Ensure you have the following installed:  
- **Node.js** (v12 or higher)  
- **Angular CLI** (v12 or higher)

Check installation with:  
```bash
    node -v  
    ng version
```

---

## **3. Installing Angular Material**

To add Angular Material to your Angular project:

1. Run the installation command:
   ```bash
        ng add @angular/material
   ```

   This command:  
   - Installs Angular Material, Angular CDK, and Angular Animations.  
   - Configures your project to use Material Design typography and themes.  
   - Updates your `angular.json` to include Material styles.

2. Choose a prebuilt theme when prompted (e.g., **Indigo/Pink**).  

3. Verify successful installation by checking the package in your `package.json`:
   ```json
   "@angular/material": "^<version>"
   ```

---

## **4. Setting Up Angular Material in Your Project**

1. **Import Angular Material Modules that you need in your component**:  
   For example, open `src/app/app.component.ts` and add the following:  
   ```typescript
    import { Component } from '@angular/core';
    import { RouterOutlet } from '@angular/router';

    import { MatButtonModule } from '@angular/material/button';
    import { MatIconModule } from '@angular/material/icon';
    import { MatToolbarModule } from '@angular/material/toolbar';
    import { MatCardModule } from '@angular/material/card';
    import { MatSidenavModule } from '@angular/material/sidenav';
    import { MatListModule } from '@angular/material/list';
    import { MatTableModule } from '@angular/material/table';
    import { MatInputModule } from '@angular/material/input';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { CommonModule } from '@angular/common';

    @Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatTableModule,
        MatInputModule,
        MatFormFieldModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    })
   ```

---

## **5. Using Angular Material Components**

Here’s how you can use specific Angular Material components in your project:

### **a. Buttons**
```html
<button mat-button>Basic Button</button>
<button mat-raised-button color="primary">Raised Button</button>
<button mat-icon-button aria-label="Example icon button">
  <mat-icon>favorite</mat-icon>
</button>
```

### **b. Navbar**
```html
<mat-toolbar color="primary">
  <span>My Navbar</span>
  <span class="spacer"></span>
  <button mat-button>Home</button>
  <button mat-button>About</button>
</mat-toolbar>
```

Add CSS for spacing in your component.css:
```css
.spacer {
  flex: 1 1 auto;
}
```

### **c. Cards**
```html
<mat-card>
  <mat-card-header>
    <mat-card-title>Card Title</mat-card-title>
    <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
  </mat-card-header>
  <mat-card-content>
    This is some card content.
  </mat-card-content>
  <mat-card-actions>
    <button mat-button>Action</button>
  </mat-card-actions>
</mat-card>
```

### **d. Forms**
```html
<mat-form-field appearance="fill">
  <mat-label>Enter your name</mat-label>
  <input matInput placeholder="John Doe">
</mat-form-field>
```

### **e. Icons**
```html
<mat-icon>home</mat-icon>
<mat-icon color="primary">favorite</mat-icon>
```

Ensure `MatIconModule` is imported, and add Material icons to your `index.html` if it doesn't exist:  
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

### **f. Sidebar**
```html
<mat-sidenav-container>
  <mat-sidenav mode="side" opened>
    <mat-nav-list>
      <a mat-list-item>Link 1</a>
      <a mat-list-item>Link 2</a>
    </mat-nav-list>
  </mat-sidenav>
  <mat-sidenav-content>
    <h1>Main Content</h1>
  </mat-sidenav-content>
</mat-sidenav-container>
```

### **g. Tables**
```html
<mat-table [dataSource]="nameOfListToLoopThroughIt" class="mat-elevation-z8">
  <ng-container matColumnDef="firstColumnInYourList">
    <th mat-header-cell *matHeaderCellDef> 1st Column Name </th>
    <td mat-cell *matCellDef="let element"> {{element.firstColumnInYourList}} </td>
  </ng-container>
  
  <ng-container matColumnDef="secondColumnInYourList">
    <th mat-header-cell *matHeaderCellDef> 2n Column Name </th>
    <td mat-cell *matCellDef="let element"> {{element.secondColumnInYourList}} </td>
  </ng-container>
    <!-- you have to create an array in you component containing the names of the columns that you want to display -->
  <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
  <tr mat-row *matRowDef="let row; columns: columnsToDisplay;"></tr>
</mat-table>
```

### **h. Lists**
```html
<mat-list>
  <mat-list-item *ngFor="let item of items">{{ item }}</mat-list-item>
</mat-list>
```

---

## **6. Styling**

Angular Material provides built-in styles, but you can customize your theme or override styles using your global or component-level CSS/SCSS files.

---

## **7. Best Practices**

1. **Use Prebuilt Themes**: Start with prebuilt themes and customize them later.  
2. **Lazy Load Modules**: Import only the required Material modules in feature modules to optimize performance.  
3. **Responsive Design**: Use Angular Flex Layout or CSS Grid alongside Angular Material for responsive layouts.  

---

## **8. Resources**

- **Official Documentation**: [Angular Material](https://material.angular.io/components/categories)  
