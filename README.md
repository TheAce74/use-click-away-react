# use-click-away-react

A custom React hook that triggers a callback when a user clicks outside a specified element. Perfect for handling interactions like closing dropdowns, modals, or popups when the user clicks away.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)
- [TypeScript](#typescript)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package using npm or yarn:

```bash
npm install use-click-away-react
```

or

```bash
yarn add use-click-away-react
```

## Usage

Import the `useClickAway` hook and use it in your functional components. Pass a callback function that will be called when a click outside the target element is detected, and optionally, an array of class names to exclude from triggering the callback.

```typescript
import React from "react";
import { useClickAway } from "use-click-away-react";

function Example() {
  const { clickAwayRef } = useClickAway(() => {
    alert("Clicked outside!");
  }, ["exclude-class"]);

  return (
    <div>
      <div ref={clickAwayRef}>
        Click outside this element to trigger the callback.
      </div>
      <div className="exclude-class">
        Clicking on this element will not trigger the callback.
      </div>
    </div>
  );
}

export default Example;
```

## API

### `useClickAway`

#### Arguments

- `callback: () => void` - A callback function to be invoked when a click outside the target element is detected.
- `excludeClasses?: string[]` - An optional array of class names. Clicking on elements with these class names will not trigger the callback.

#### Returns

- An object with a single property:
  - `clickAwayRef: RefObject<HTMLElement | null>` - A React ref object to be assigned to the target element.

## Example

Here's a complete example using the `useClickAway` hook:

```typescript
import { useClickAway } from "use-click-away-react";

function Dropdown() {
  const { clickAwayRef } = useClickAway(() => {
    console.log("Dropdown closed");
  });

  return (
    <div
      ref={clickAwayRef}
      style={{ border: "1px solid black", padding: "10px" }}
    >
      Click outside this dropdown to close it.
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Click Away Hook Example</h1>
      <Dropdown />
    </div>
  );
}

export default App;
```

## TypeScript

The package is written in TypeScript and includes type definitions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

MIT
