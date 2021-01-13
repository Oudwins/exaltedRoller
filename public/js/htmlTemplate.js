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
            <tr v-for="message in messages" :style="{background: message.user.color.hex, color: message.user.color.text}">
              <th scope="row">{{message.user.name}}</th>
              <td colspan="2"> <strong>{{message.text}}<span style="color:green;">{{message.successes !== undefined ? '[' + message.successes + ']' : ''}}</span><span style="color:red;">{{message.fumbles !== undefined ? '[' + message.fumbles + ']' : ''}}</span> </strong>
              </td>
              <td>{{message.timeStamp}}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="btns">
        <button type="button" class="btn" :style="{color: user.color.text, background: user.color.hex}" :data-value="n" v-for="n in 12" @click.prevent="rollDice">{{ n < 10 ? '0' + n : n}}</button>
      </section>
</main>`;
