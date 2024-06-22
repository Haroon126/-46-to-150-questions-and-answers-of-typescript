// : Explain how this behaves differently in arrow functions compared to traditional functions.

interface myobj {
  value: number;
  method(this: myobj): void;
  method2(this: myobj): void;
}

const obj: myobj = {
  value: 10,
  method: function (this: myobj) {
    // this can access value
    console.log(this.value);
  },
  method2: () => {
    console.log(this.value); //  but in this arrow function this will represent global scope one step up
    // it will represent window object , browser
  },
};

obj.method();
