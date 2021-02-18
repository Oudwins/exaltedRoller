import Qs from 'qs';
import htmlTemplate from './htmlTemplate';
// vue methods
import newMessage from './methods/newMessage';
import setColor from './methods/setColor';
import getUser from './methods/getUser';
import rollDice from './methods/rollDice';
import getColor from './methods/getColor';
import updateUser from './methods/updateUser';
import updateMessages from './methods/updateMessages';
import toggleLoading from './methods/toggleLoading';
// colors array
import colors from './data/colors';

const socket = io();

const { name, room, create } = Qs.parse(window.location.search, {
  ignoreQueryPrefix: true,
});

const data = {
  user: {
    id: -1,
    name,
    room,
    creator: create,
    color: -1,
  },
  colors,
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
    setColor,
    getUser,
    rollDice,
    getColor,
    updateUser,
    updateMessages,
    toggleLoading,
  },
  updated() {
    // scroll down to last messages
    if (this.$refs.table) {
      this.$refs.table.scrollTop = this.$refs.table.scrollHeight * 2;
    }
  },
});

export default vm;
