import snabbdom from 'snabbdom'
const patch = snabbdom.init([ // Init patch function with chosen modules
  require('snabbdom/modules/class'), // makes it easy to toggle classes
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/style') // handles styling on elements with support for animations  
])
import h from 'snabbdom/h'
import hyperx from 'hyperx'
const hx = hyperx(h)

const title = 'world'
const wow = [1,2,3]
const tree = hx`<div>
  <h1 y="ab${1+2}cd">hello ${title}!</h1>
  ${hx`<i>cool</i>`}
  wow
  ${wow.map((w, i) => {
    return hx`<b>${w}</b>\n`
  })}
</div>`

patch(document.body, tree)