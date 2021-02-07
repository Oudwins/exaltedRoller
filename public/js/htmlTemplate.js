export default `
<main id="app" v-if="loading">
<div class="spinner-border" role="status" style="margin: auto auto; height: 10rem; width:10rem;">
  <span class="sr-only" style="display:none">Loading...</span>
</div>
</main>   
<main id="app" v-else>
      <section class="msgs">
        <table class="table table-sm msgs-table" >
          <tbody ref="table">
            <tr v-for="message in messages" :style="{background: colors[message.user.color].hex, color: colors[message.user.color].text}">
              <th scope="row">{{message.user.name}}</th>
              <td colspan="2"> <strong>{{message.text}}<span class="r-success"> {{message.successes !== undefined ? '[' + message.successes + ']' : ''}}</span><span class="r-fumble">{{message.fumbles !== undefined ? '[' + message.fumbles + ']' : ''}}</span> </strong>
              <a v-if="message.successes" href="#" class="has-tooltip" data-bs-toggle="tooltip" data-bs-html="true" :title="message.rolls" style="font-size: 1.2rem; padding: 0 0.5rem"> ?
              </a>
              </td>
              <td>{{message.timeStamp}}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="btns">
        <button type="button" class="btn" :style="{color: colors[user.color].text,background: colors[user.color].hex}" :data-value="n" v-for="n in 12" @click.prevent="rollDice">{{ n < 10 ? '0' + n : n}}</button>
      </section>
</main>`;
