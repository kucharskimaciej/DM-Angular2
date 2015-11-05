# Walidacja

Sprawdzanie poprawności formularzy w Angular2 znacznie różni się od tego, który znamy z Angular 1. 
Zamiast definiować reguły przy pomocy dyrektyw w HTML, określamy je na poziomie komponentu, korzystając z obiektu `Validators`. 
Moduł ten zawiera podstawowe reguły walidacji (`required`, `minLength`, `maxLength`) oraz metodę `Validators.compose`, która pozwala na połączenie kilku walidacji - na przykład:
nazwa użytkownika powinna być nie krótsza niż 3 znaki i nie dłuższa niż 12 znaków.


## Prosta walidacja

Żeby skorzystać z walidatorów, musimy podać wybrane reguły do definicji obiektu `Control`:
 
```typescript
import {Validators} from 'angular2/angular2';

// w klasie komponentu
this.usernameControl = new Control('username', Validators.required);
```

Jeżeli pole, któremu odpowiada obiekt `usernameControl` będzie puste, 
zostanie na tym obiekcie ustawiona flaga `valid` z wartością `false`. 
Jeżeli `usernameControl` jest częścią formularza lub grupy (`ControlGroup`), flaga ta zostanie ustawiona również na nich.

Dostępny w `usernameControl` będzie również obiekt `errors`, którego klucze odpowiadają błędom walidacji.

```html
<div class="form-group"
    [class.has-error]="!todoForm.controls.title.valid && todoForm.controls.title.touched">

    <label class="control-label">Username</label>
    <input type="text" ng-control="username" class="form-control"/>
    <span *ng-if="form.controls.username.touched && !form.controls.username.valid">
        <span class="help-block" *ng-if="form.controls.username.errors.required">
            Title is required
        </span>
    </span>
</div>
```

## Łączenie walidacji

Żeby określić więcej niż jedną regułę walidacji, musimy skorzystać z `Validators.compose`:
 
```typescript
this.usernameControl = new Control('username', Validators.compose([
    Validators.minLength(3),
    Validators.maxLength(12)
]));
```

## Własny walidator

Walidator to funkcja, która jako argument przyjmuje obiekt typu `Control`, 
a zwraca `undefined` jeżeli nie ma błędów lub obiekt z błędami, jeżeli takie wystąpią. Obiekt ten możemy opisać następującym interfejsem:

```typescript
interface IError {
    [errorName: string]: boolean
}
```

Przykład walidatora:
```typescript
function isAnswerToLifeTheUniverseAndEverything(control: AbstractControl): IError|void {
    if(control.value != 42) {
        return {
            wrongAnswer: true
        };
    }
}
```
