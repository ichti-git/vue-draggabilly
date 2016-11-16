Draggabilly directive for VueJS.
http://draggabilly.desandro.com/
See the site for all options and events.


Using it:
```html
var VueDraggabilly = require('vue-draggabilly');
Vue.use(VueDraggabilly);
```

No options dragging:
```html
<div v-draggabilly></div>
```

With options:
```html
<div v-draggabilly="{axis: 'x', handle: '.handle'}"></div>
```

Event registering:\n
v-draggabilly-on:eventName="callbackFunction"\n
v-draggabilly-once:eventName="callbackFunction"\n
```html
<div v-draggabilly v-draggabilly-on:dragStart="dragstart"></div>
```


Methods not included.