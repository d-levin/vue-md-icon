<template>
  <i
    class="material-icons rotatable non-selectable"
    :class="`md-size-${size}`"
    :style="styles"
  >
    {{ name }}
  </i>
</template>

<script>
  const Size = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    LARGEST: 'largest',
  };

  export default {
    name: 'VIcon',
    props: {
      name: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: Size.MEDIUM,
        validator(value) {
          return Object.values(Size).includes(value);
        },
      },
      rotateDeg: Number,
      color: String,
    },
    computed: {
      rotateStyle() {
        if (this.rotateDeg) {
          const rotate = `rotate(${this.rotateDeg}deg)`;
          const styles = [
            `-ms-transform: ${rotate};`,
            `-webkit-transform: ${rotate};`,
            `transform: ${rotate};`,
          ];
          return styles.join(' ');
        }
        return null;
      },
      colorStyle() {
        return this.color ? `color: ${this.color};` : null;
      },
      styles() {
        return [
          this.rotateStyle,
          this.colorStyle,
        ].join(' ');
      },
    },
  };
</script>

<style lang="stylus" scoped>
  /* Sizes in pixels */
  sizes = {
    small: 18,
    medium: 24,
    large: 36,
    largest: 48
  }

  .rotatable
    will-change transform

  .non-selectable
    -webkit-user-select none
    -moz-user-select none
    -ms-user-select none
    user-select none

  .material-icons
    for key, value in sizes
      &.md-size-{key}
        font-size (value)px
</style>
