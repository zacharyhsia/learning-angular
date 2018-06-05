# Angular 2 and TypeScript

## String interpolation

```javascript
<p>Server with Id {{ serverId }} is {{ serverStatus  }}</p>
```



## Property binding

``` javascript
<button class="btn btn-primary" [disabled]="!btnStatus"> Launch Nuclear Weapon </button>
```

## Event Binding

```javascript

```

## Two-Way-Binding

```javascript
For Two-Way-Binding to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 
```

## View Capsulation

```typescript
@Component({
    ...
    // default
    encapsulation: ViewEncapsulation.Emulated
    
    // remove encapsulation
    encapsulation: ViewEncapsulation.None
    
    // shadow DOM
    encapsulation: ViewEncapsulation.Native
})
```

### Local Reference

```html
<input type="text" class="form-control" #serverInput>
...
<button class="btn btn-primary" (click)="onAddServer(serverInput)">Add Server</button>
...

onAddServer(input: HTMLInputElement) {

}
```

Using `ViewChild` to get the HTML DOM

```html
<input type="text" class="form-control" #serverContent>
```

```typescript
@ViewChild('serverContent') serverContent;

this.serverContant.nativeElement.value;
```

