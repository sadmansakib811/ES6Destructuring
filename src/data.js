const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" }
];
function useAnimals(anyname) {
  return [
    anyname.name,
    function () {
      console.log(anyname.sound);
    }
  ];
}
export default animals;
export { useAnimals };
