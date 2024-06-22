// : Explain how you can format a JSON string with proper indentation for readability.
const data = '{"firstName": "John" ,"lastName": "Smith", "isAlive": true,"age": 25}';
console.log(JSON.stringify(JSON.parse(data), null, 2));
export {};
