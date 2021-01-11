import Qs from 'qs';
import htmlTemplate from './htmlTemplate';
// vue methods
import newMessage from './methods/newMessage';
import setColor from './methods/setColor';
import toggleLoading from './methods/toggleLoading';
import getUser from './methods/getUser';
import rollDice from './methods/rollDice';

const socket = io();

const { name, room } = Qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

const data = {
  user: {
    name,
    room,
  },
  loading: true,
  messages: [],
  socket,
};

const vm = new Vue({
  el: '#app',
  data,
  template: htmlTemplate,
  methods: {
    newMessage,
    toggleLoading,
    setColor,
    getUser,
    rollDice,
  },
  updated() {
    // scroll down to last messages
    if (this.$refs.table) {
      this.$refs.table.scrollTop = this.$refs.table.scrollHeight * 2;
    }
  },
});

export default vm;
