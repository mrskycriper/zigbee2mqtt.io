"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7330],{621993:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-f9539178","path":"/devices/DIO-300Z.html","title":"ShinaSystem DIO-300Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem DIO-300Z control via MQTT","description":"Integrate your ShinaSystem DIO-300Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-03-31T18:43:56.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Di status (enum)","slug":"di-status-enum","link":"#di-status-enum","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Di type (enum)","slug":"di-type-enum","link":"#di-type-enum","children":[]},{"level":3,"title":"Do type (enum)","slug":"do-type-enum","link":"#do-type-enum","children":[]},{"level":3,"title":"Di do link (enum)","slug":"di-do-link-enum","link":"#di-do-link-enum","children":[]},{"level":3,"title":"Do pulse time (numeric)","slug":"do-pulse-time-numeric","link":"#do-pulse-time-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1714074228000},"filePathRelative":"devices/DIO-300Z.md"}')},158848:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const d=(0,i._)("h1",{id:"shinasystem-dio-300z",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#shinasystem-dio-300z","aria-hidden":"true"},"#"),(0,i.Uk)(" ShinaSystem DIO-300Z")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"DIO-300Z")],-1),s=(0,i._)("td",null,"Vendor",-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"SiHAS DI/DO Module")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"di_status, switch (state), di_type, do_type, di_do_link, do_pulse_time, action, linkquality")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DIO-300Z.png",alt:"ShinaSystem DIO-300Z"})])],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),r=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="di-status-enum" tabindex="-1"><a class="header-anchor" href="#di-status-enum" aria-hidden="true">#</a> Di status (enum)</h3><p>Indicates whether the DI(Digital Input) is open or closed. Value can be found in the published state on the <code>di_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;di_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>Close</code>, <code>Open</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="di-type-enum" tabindex="-1"><a class="header-anchor" href="#di-type-enum" aria-hidden="true">#</a> Di type (enum)</h3><p>Set the DI(Digital Input) type to either a button or door sensor(latch) type. Value can be found in the published state on the <code>di_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;di_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;di_type&quot;: NEW_VALUE}</code>. The possible values are: <code>Button</code>, <code>Door</code>.</p><h3 id="do-type-enum" tabindex="-1"><a class="header-anchor" href="#do-type-enum" aria-hidden="true">#</a> Do type (enum)</h3><p>Set the DO(Digital Output) type to either a pulse or latch type. Value can be found in the published state on the <code>do_type</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;do_type&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;do_type&quot;: NEW_VALUE}</code>. The possible values are: <code>Pulse</code>, <code>Latch</code>.</p><h3 id="di-do-link-enum" tabindex="-1"><a class="header-anchor" href="#di-do-link-enum" aria-hidden="true">#</a> Di do link (enum)</h3><p>Configure DO linkage according to DI status. When set to ON, DO is output according to the DI input.. Value can be found in the published state on the <code>di_do_link</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;di_do_link&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;di_do_link&quot;: NEW_VALUE}</code>. The possible values are: <code>Off</code>, <code>On</code>.</p><h3 id="do-pulse-time-numeric" tabindex="-1"><a class="header-anchor" href="#do-pulse-time-numeric" aria-hidden="true">#</a> Do pulse time (numeric)</h3><p>When the DO output is set to pulse type, you can set the DO pulse time. The unit is milliseconds.. Value can be found in the published state on the <code>do_pulse_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;do_pulse_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;do_pulse_time&quot;: NEW_VALUE}</code>. The minimal value is <code>100</code> and the maximum value is <code>3000</code>. The unit of this value is <code>ms</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>long</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[s,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,i.w5)((()=>[(0,i.Uk)("ShinaSystem")])),_:1})])]),u,c,l])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),r])}]])}}]);