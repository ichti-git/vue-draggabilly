Draggabilly directive for VueJS.
http://draggabilly.desandro.com/

No options dragging:
```html
<div v-draggabilly></div>
```

With options:
```html
<div v-draggabilly="{axis: 'x', handle: '.handle'}"></div>
```

Event registering:
v-draggabilly-on:eventName="callbackFunction"
v-draggabilly-once:eventName="callbackFunction"
```html
<div v-draggabilly v-draggabilly-on:dragStart="dragstart"></div>
```


Methods not included.