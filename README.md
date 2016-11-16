Draggabilly directive for VueJS.<br />
http://draggabilly.desandro.com/<br />
See the site for all options and events.<br />


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

Event registering:<br />
v-draggabilly-on:eventName="callbackFunction"<br />
v-draggabilly-once:eventName="callbackFunction"<br />
```html
<div v-draggabilly v-draggabilly-on:dragStart="dragstart"></div>
```


Methods not included.