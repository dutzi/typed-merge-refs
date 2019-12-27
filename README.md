# typed-merge-refs

A typed version of the useful merge-refs utility functions

```
yarn add typed-merge-refs
```

## Example

```
import { forwardRef } from 'react'
import mergeRefs from 'typed-merge-refs'

function Example(props, ref) {
  const wrapper = React.useRef()
  return <div ref={mergeRefs(ref, wrapper)} />
}

export default forwardRef(Example)
```

## License

MIT
