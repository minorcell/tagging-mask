# Demo of tagging + mask

The highlight demo of mask elements is realized by semantic annotation.

## What's tagging?

The tagging is a way to mark the HTML element with a unique key, which is used to identify the element in the future.

```html
<!-- like those two elements -->
<button data-tag="step1">按钮 1</button>
<img data-tag="step2" src="..." alt="..." />

```

## About This demo

- Tagging class: Returns the class of an HTML element based on a custom unique key value
- Mask component: A mask UI component that highlights semantically annotated parts
- Mock Node Task Player: Simulate the completion of multiple steps, this is only a mock call, not part of the demo
