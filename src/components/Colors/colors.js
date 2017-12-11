import Vue from 'vue';
import colorsData from '!json-loader!../../dataset/colors.json';

export default Vue.extend({
  template: `
  <div>
  heyyyy
    <div v-for="c in colors">
      <b>Color:</b> {{c.color}}
      <b>Category:</b> {{c.category}}
      <b>Type:</b> {{c.type}}
      <h1>Code</h1>
      <b>RGBA:</b> {{c.code.rgba}}
      <b>Hex:</b> {{c.code.hex}}
    </div>
  </div>`,

  data() {
    return {
      colors: colorsData.colors
    }
  },
});
