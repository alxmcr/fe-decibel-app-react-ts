export default function App() {
  const x = 123;
  console.log('🚀 ~ App ~ x:', x);
  const myArray: string[] = ['hello', 'world'];
  const element1 = myArray[2];
  console.log(element1.length);
  console.log('🚀 ~ App ~ element1:', element1);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
