function A(){
  this.b='foo'
}
let a=new A();
console.log(a)
let b=JSON.parse(JSON.stringify(a));
console.log(b)