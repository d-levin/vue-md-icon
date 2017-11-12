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
> Material Design Icons stylesheet must be added for this component to work
##### Browser
```html
<link href="path-to-material-design-icons" rel="stylesheet">
<script src="path-to-vue.js"></script>
<script src="v-icon.min.js"></script>
<script>
  Vue.use(VIcon);
</script>
```

##### Module
```javascript
import VIcon from 'vue-md-icon';
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
| Prop | Required | Type | Options | Example |
| ---- | -------- | ---- | ------- | ------- |
| `name`      | Yes | `String` | Any valid Material Design icon name (separate words with _ (underscore) | `face`, `exit_to_app`    |
| `color`     | No  | `String` | Any valid CSS color                                                     | `red`, `#fff`, `#cc9900` |
| `size`      | No  | `String` | `small`, `medium` (default), `large`, `largest`                         | `small`                  |
| `rotateDeg` | No  | `Number` | Integer value                                                           | `45`, `180`              |
