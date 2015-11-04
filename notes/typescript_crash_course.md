# Typescript

TypeScript to nadzbiór języka JavaScript, który pozwala na (opcjonalne) statyczne typowanie oraz wykorzystanie modelu dziedziczenia opartego na klasach i interfejsach.
Zespół Angular2 wybrał go ze względu na to, że wykorzystanie typów zmniejsza ilość błędów oraz umożliwia zaimplementowanie prostszego *Dependency Injection*. 
W najnowszych wersjach tego języka (1.5+) możemy również korzystać z elementów składni ES6 (lub ES2015) i ES7.

## Typy

TypeScript umożliwia skorzystanie z 3 typów prostych:

* number
* string
* boolean

Typ zmiennych określamy w momencie deklaracji:
```typescript
var a: number;
var b: string;
var c: boolean;

a = 42 // ok
b = 42 // błąd!
```

Oprócz tego możemy korzystać z typów złożonych, które oferuje JavaScript:

* Object
* Function
* Array

Przykład:

```typescript
var fn: Function;
var arrayOfNumbers: Array<number>;

fn = function() { console.log("hello!"); };
arrayOfNumbers = [1, 2, 3];
```

Typy możemy zastosować również do argumentów oraz wartości zwracanych przez funkcję:

```typescript
var fn = function (a: number, b: number): string {
    return `${a} i ${b} to liczby!`;
}
```

Warto przeczytać:

* [Basic types](http://www.typescriptlang.org/Handbook#basic-types)
* [Generics](http://www.typescriptlang.org/Handbook#generics

## Klasy

Zamiast polegać wyłącznie na typach wbudowanych możemy tworzyć swoje przy pomocy klas. 
Klasa to definicja typu, która zwykle składa się z konstruktora, deklaracji atrybutów oraz metod:

```typescipt
class Person {
    public name: string;
    public age: number;
    
    private secret: string;
     
    constructor (name: string, age: number) {
        
        this.secret = makeSecret();
        this.name = name;
        this.age = age;
    } 
}

var person = new Person("Jan", 28);
person.name; // => Jan 
person.secret; // => błąd! Nie można korzystać z prywatnych pól poza metodami klasy
person.lastName = "Kowalski"; // => błąd! 'lastName' nie zostało zadeklarowane jako atrybut typu 'Person'
```

Jeżeli, tak jak powyżej, w konstruktorze type przypisujesz przekazane argumenty do odpowiednich atrybutów, możemy skorzystać ze skróconego zapisu:
 
```typescipt
class Person {
    private secret: string;
     
    constructor (public name: string, public age: number) {
        this.secret = makeSecret();
    } 
}
```

Warto przeczytać:

* [Classes](http://www.typescriptlang.org/Handbook#classes)
* [Interfaces](http://www.typescriptlang.org/Handbook#interfaces)


## Dekorator

Dekoratory to wzorzec programowania pozwalający 'opakować' klasę, wzbogacając ją o dodatkową funkcjonalość i właściwości. 
Angular2 wykorzystuje dekoratory między innymi do definiowania komponentów, filtrów (*pipe*) oraz Dependency Injection:


```typescript
@Component({
    ...
})
class App {
    ...
    constructor( @Inject(Service) service ) {
        service.hello();
    }
}
```

W powyższym przykładzie korzystamy z dekoratora `Component`, żeby wzbogacić klasę `App` o właściwoścu typowe dla komponentów: `template`, `directives`, itp.
Skorzystaliśmy też z dekoratora `@Inject`, który pozwala na skorzystanie z Dependency Injection i wstrzyknięcie odpowieniego obiektu do konstruktora.

Warto przeczytać:

* [Decorators](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#decorators)
## Warto poczytać

* [Writing Angular2 in Typescript](http://victorsavkin.com/post/123555572351/writing-angular-2-in-typescript)