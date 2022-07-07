#JSON-TO-TypeScript

### Convert json to typescript quickly. Use this tool to generate your models quickly so that you can focus on the bigger stuff.

## Quick Setup

```aidl
npm install
```

## Drop Sample JSON File into the input directory

```aidl
npm start
```

### The generated TypeScript will exist in the dist folder

```javascript
export interface Employee {
  name: string;
  salary: number;
  married: boolean;
}
```