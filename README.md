# vue-md-icon

> A Vue.js wrapper for Material Design Icons

```bash
# build component
npm run build

# lint
npm run lint
```

### Installation
```bash
npm i -S vue-md-icon
```

### Installation
##### Browser
```html
<script src="path-to-vue.js"></script>
<script src="v-icon.min.js"></script>
<script>
  Vue.use(VIcon);
</script>
```

##### Module
```javascript
import VIcon from 'v-icon';
```

### Usage
The component can be used in a template with:
```html
<v-icon></v-icon>
```
or
```html
<VIcon/>
```

### Props
| Prop | Type | Options | Example |
| ---- | ---- | ------- | ------- |
| `name`      | `String` | Any valid Material Design icon name (separate words with _ (underscore) | `face`, `exit_to_app`    |
| `color`     | `String` | Any valid CSS color                                                     | `red`, `#fff`, `#cc9900` |
| `size`      | `String` | `small`, `medium` (default), `large`, `largest`                         | `small`                  |
| `rotateDeg` | `Number` | Integer value                                                           | `45`, `180`              |
