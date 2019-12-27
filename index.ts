export default function mergeRefs<
  T extends HTMLElement | null = HTMLDivElement
>(...args: (React.MutableRefObject<T> | React.Ref<T> | undefined)[]) {
  return (value: T) => {
    args.forEach(arg => {
      if (typeof arg === "function") {
        arg(value);
      } else if (arg) {
        (arg as React.MutableRefObject<T>).current = value;
      }
    });
  };
}
