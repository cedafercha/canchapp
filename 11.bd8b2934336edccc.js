(self.webpackChunkmf_booking=self.webpackChunkmf_booking||[]).push([[11],{7392:(dt,j,P)=>{P.r(j),P.d(j,{Calendar:()=>at,JsonRequestError:()=>a.ag,createPlugin:()=>O,formatDate:()=>lt,formatRange:()=>ot,globalLocales:()=>_,globalPlugins:()=>K,sliceEvents:()=>ut,version:()=>ct});var a=P(6681),g=P(2467);P(2912);const _=[],M={code:"en",week:{dow:0,doy:4},direction:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekText:"W",weekTextLong:"Week",closeHint:"Close",timeHint:"Time",eventHint:"Event",allDayText:"all-day",moreLinkText:"more",noEventsText:"No events to display"},N=Object.assign(Object.assign({},M),{buttonHints:{prev:"Previous $0",next:"Next $0",today:(t,e)=>"day"===e?"Today":`This ${t}`},viewHint:"$0 view",navLinkHint:"Go to $0",moreLinkHint:t=>`Show ${t} more event${1===t?"":"s"}`});function L(t){let e=t.length>0?t[0].code:"en",n=_.concat(t),r={en:N};for(let i of n)r[i.code]=i;return{map:r,defaultCode:e}}function x(t,e){return"object"!=typeof t||Array.isArray(t)?function ee(t,e){let n=[].concat(t||[]),r=function te(t,e){for(let n=0;n<t.length;n+=1){let r=t[n].toLocaleLowerCase().split("-");for(let i=r.length;i>0;i-=1){let l=r.slice(0,i).join("-");if(e[l])return e[l]}}return null}(n,e)||N;return U(t,n,r)}(t,e):U(t.code,[t.code],t)}function U(t,e,n){let r=(0,a.m)([M,n],["buttonText"]);delete r.code;let{week:i}=r;return delete r.week,{codeArg:t,codes:e,week:i,simpleNumberFormat:new Intl.NumberFormat(t),options:r}}function O(t){return{id:(0,a.g)(),name:t.name,premiumReleaseDate:t.premiumReleaseDate?new Date(t.premiumReleaseDate):void 0,deps:t.deps||[],reducers:t.reducers||[],isLoadingFuncs:t.isLoadingFuncs||[],contextInit:[].concat(t.contextInit||[]),eventRefiners:t.eventRefiners||{},eventDefMemberAdders:t.eventDefMemberAdders||[],eventSourceRefiners:t.eventSourceRefiners||{},isDraggableTransformers:t.isDraggableTransformers||[],eventDragMutationMassagers:t.eventDragMutationMassagers||[],eventDefMutationAppliers:t.eventDefMutationAppliers||[],dateSelectionTransformers:t.dateSelectionTransformers||[],datePointTransforms:t.datePointTransforms||[],dateSpanTransforms:t.dateSpanTransforms||[],views:t.views||{},viewPropsTransformers:t.viewPropsTransformers||[],isPropsValid:t.isPropsValid||null,externalDefTransforms:t.externalDefTransforms||[],viewContainerAppends:t.viewContainerAppends||[],eventDropTransformers:t.eventDropTransformers||[],componentInteractions:t.componentInteractions||[],calendarInteractions:t.calendarInteractions||[],themeClasses:t.themeClasses||{},eventSourceDefs:t.eventSourceDefs||[],cmdFormatter:t.cmdFormatter,recurringTypes:t.recurringTypes||[],namedTimeZonedImpl:t.namedTimeZonedImpl,initialView:t.initialView||"",elementDraggingImpl:t.elementDraggingImpl,optionChangeHandlers:t.optionChangeHandlers||{},scrollGridImpl:t.scrollGridImpl||null,listenerRefiners:t.listenerRefiners||{},optionRefiners:t.optionRefiners||{},propSetHandlers:t.propSetHandlers||{}}}function ie(t,e){return{premiumReleaseDate:se(t.premiumReleaseDate,e.premiumReleaseDate),reducers:t.reducers.concat(e.reducers),isLoadingFuncs:t.isLoadingFuncs.concat(e.isLoadingFuncs),contextInit:t.contextInit.concat(e.contextInit),eventRefiners:Object.assign(Object.assign({},t.eventRefiners),e.eventRefiners),eventDefMemberAdders:t.eventDefMemberAdders.concat(e.eventDefMemberAdders),eventSourceRefiners:Object.assign(Object.assign({},t.eventSourceRefiners),e.eventSourceRefiners),isDraggableTransformers:t.isDraggableTransformers.concat(e.isDraggableTransformers),eventDragMutationMassagers:t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),eventDefMutationAppliers:t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),dateSelectionTransformers:t.dateSelectionTransformers.concat(e.dateSelectionTransformers),datePointTransforms:t.datePointTransforms.concat(e.datePointTransforms),dateSpanTransforms:t.dateSpanTransforms.concat(e.dateSpanTransforms),views:Object.assign(Object.assign({},t.views),e.views),viewPropsTransformers:t.viewPropsTransformers.concat(e.viewPropsTransformers),isPropsValid:e.isPropsValid||t.isPropsValid,externalDefTransforms:t.externalDefTransforms.concat(e.externalDefTransforms),viewContainerAppends:t.viewContainerAppends.concat(e.viewContainerAppends),eventDropTransformers:t.eventDropTransformers.concat(e.eventDropTransformers),calendarInteractions:t.calendarInteractions.concat(e.calendarInteractions),componentInteractions:t.componentInteractions.concat(e.componentInteractions),themeClasses:Object.assign(Object.assign({},t.themeClasses),e.themeClasses),eventSourceDefs:t.eventSourceDefs.concat(e.eventSourceDefs),cmdFormatter:e.cmdFormatter||t.cmdFormatter,recurringTypes:t.recurringTypes.concat(e.recurringTypes),namedTimeZonedImpl:e.namedTimeZonedImpl||t.namedTimeZonedImpl,initialView:t.initialView||e.initialView,elementDraggingImpl:t.elementDraggingImpl||e.elementDraggingImpl,optionChangeHandlers:Object.assign(Object.assign({},t.optionChangeHandlers),e.optionChangeHandlers),scrollGridImpl:e.scrollGridImpl||t.scrollGridImpl,listenerRefiners:Object.assign(Object.assign({},t.listenerRefiners),e.listenerRefiners),optionRefiners:Object.assign(Object.assign({},t.optionRefiners),e.optionRefiners),propSetHandlers:Object.assign(Object.assign({},t.propSetHandlers),e.propSetHandlers)}}function se(t,e){return void 0===t?e:void 0===e?t:new Date(Math.max(t.valueOf(),e.valueOf()))}class S extends a.T{}function V(t,e,n,r){if(e[t])return e[t];let i=function le(t,e,n,r){let i=n[t],l=r[t],s=f=>i&&null!==i[f]?i[f]:l&&null!==l[f]?l[f]:null,o=s("component"),u=s("superType"),c=null;if(u){if(u===t)throw new Error("Can't have a custom view type that references itself");c=V(u,e,n,r)}return!o&&c&&(o=c.component),o?{type:t,component:o,defaults:Object.assign(Object.assign({},c?c.defaults:{}),i?i.rawOptions:{}),overrides:Object.assign(Object.assign({},c?c.overrides:{}),l?l.rawOptions:{})}:null}(t,e,n,r);return i&&(e[t]=i),i}function F(t){return(0,a.a)(t,oe)}function oe(t){let e="function"==typeof t?{component:t}:t,{component:n}=e;return e.content?n=B(e):n&&!(n.prototype instanceof a.B)&&(n=B(Object.assign(Object.assign({},e),{content:n}))),{superType:e.type,component:n,rawOptions:e}}function B(t){return e=>(0,g.n)(a.V.Consumer,null,n=>(0,g.n)(a.C,{elTag:"div",elClasses:(0,a.b)(n.viewSpec),renderProps:Object.assign(Object.assign({},e),{nextDayThreshold:n.options.nextDayThreshold}),generatorName:void 0,customGenerator:t.content,classNameGenerator:t.classNames,didMount:t.didMount,willUnmount:t.willUnmount}))}function ue(t,e,n,r){let i=F(t),l=F(e.views),s=function ae(t,e){let r,n={};for(r in t)V(r,n,t,e);for(r in e)V(r,n,t,e);return n}(i,l);return(0,a.a)(s,o=>function ce(t,e,n,r,i){let l=t.overrides.duration||t.defaults.duration||r.duration||n.duration,s=null,o="",u="",c={};if(l&&(s=function de(t){let e=JSON.stringify(t),n=z[e];return void 0===n&&(n=(0,a.d)(t),z[e]=n),n}(l),s)){let h=(0,a.c)(s);o=h.unit,1===h.value&&(u=o,c=e[o]?e[o].rawOptions:{})}let f=h=>{let d=h.buttonText||{},b=t.defaults.buttonTextKey;return null!=b&&null!=d[b]?d[b]:null!=d[t.type]?d[t.type]:null!=d[u]?d[u]:null},p=h=>{let d=h.buttonHints||{},b=t.defaults.buttonTextKey;return null!=b&&null!=d[b]?d[b]:null!=d[t.type]?d[t.type]:null!=d[u]?d[u]:null};return{type:t.type,component:t.component,duration:s,durationUnit:o,singleUnit:u,optionDefaults:t.defaults,optionOverrides:Object.assign(Object.assign({},c),t.overrides),buttonTextOverride:f(r)||f(n)||t.overrides.buttonText,buttonTextDefault:f(i)||t.defaults.buttonText||f(a.e)||t.type,buttonTitleOverride:p(r)||p(n)||t.overrides.buttonHint,buttonTitleDefault:p(i)||t.defaults.buttonHint||p(a.e)}}(o,l,e,n,r))}S.prototype.classes={root:"fc-theme-standard",tableCellShaded:"fc-cell-shaded",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active"},S.prototype.baseIconClass="fc-icon",S.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},S.prototype.rtlIconClasses={prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"},S.prototype.iconOverrideOption="buttonIcons",S.prototype.iconOverrideCustomButtonOption="icon",S.prototype.iconOverridePrefix="fc-icon-";let z={};function W(t){for(let e in t)if(t[e].isFetching)return!0;return!1}function G(t,e,n,r){let i={};for(let l of e)i[l.sourceId]=l;return n&&(i=k(i,n,r)),Object.assign(Object.assign({},t),i)}function k(t,e,n){return A(t,(0,a.h)(t,r=>function Ee(t,e,n){return q(t,n)?!n.options.lazyFetching||!t.fetchRange||t.isFetching||e.start<t.fetchRange.start||e.end>t.fetchRange.end:!t.latestFetchId}(r,e,n)),e,!1,n)}function A(t,e,n,r,i){let l={};for(let s in t){let o=t[s];l[s]=e[s]?Re(o,n,r,i):o}return l}function Re(t,e,n,r){let{options:i,calendarApi:l}=r,s=r.pluginHooks.eventSourceDefs[t.sourceDefId],o=(0,a.g)();return s.fetch({eventSource:t,range:e,isRefetch:n,context:r},u=>{let{rawEvents:c}=u;i.eventSourceSuccess&&(c=i.eventSourceSuccess.call(l,c,u.response)||c),t.success&&(c=t.success.call(l,c,u.response)||c),r.dispatch({type:"RECEIVE_EVENTS",sourceId:t.sourceId,fetchId:o,fetchRange:e,rawEvents:c})},u=>{let c=!1;i.eventSourceFailure&&(i.eventSourceFailure.call(l,u),c=!0),t.failure&&(t.failure(u),c=!0),c||console.warn(u.message,u),r.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:t.sourceId,fetchId:o,fetchRange:e,error:u})}),Object.assign(Object.assign({},t),{isFetching:!0,latestFetchId:o})}function Z(t,e){return(0,a.h)(t,n=>q(n,e))}function q(t,e){return!e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange}function Ce(t,e){switch(e.type){case"UNSELECT_DATES":return null;case"SELECT_DATES":return e.selection;default:return t}}function Se(t,e){switch(e.type){case"UNSELECT_EVENT":return"";case"SELECT_EVENT":return e.eventInstanceId;default:return t}}function De(t,e){let n;switch(e.type){case"UNSET_EVENT_DRAG":return null;case"SET_EVENT_DRAG":return n=e.state,{affectedEvents:n.affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return t}}function Oe(t,e){let n;switch(e.type){case"UNSET_EVENT_RESIZE":return null;case"SET_EVENT_RESIZE":return n=e.state,{affectedEvents:n.affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return t}}function ye(t,e,n,r,i){return{header:t.headerToolbar?$(t.headerToolbar,t,e,n,r,i):null,footer:t.footerToolbar?$(t.footerToolbar,t,e,n,r,i):null}}function $(t,e,n,r,i,l){let s={},o=[],u=!1;for(let c in t){let p=Ie(t[c],e,n,r,i,l);s[c]=p.widgets,o.push(...p.viewsWithButtons),u=u||p.hasTitle}return{sectionWidgets:s,viewsWithButtons:o,hasTitle:u}}function Ie(t,e,n,r,i,l){let s="rtl"===e.direction,o=e.customButtons||{},u=n.buttonText||{},c=e.buttonText||{},f=n.buttonHints||{},p=e.buttonHints||{},h=t?t.split(" "):[],d=[],b=!1;return{widgets:h.map(v=>v.split(",").map(m=>{if("title"===m)return b=!0,{buttonName:m};let R,T,w,y,C,D;if(R=o[m])w=E=>{R.click&&R.click.call(E.target,E,E.target)},(y=r.getCustomButtonIconClass(R))||(y=r.getIconClass(m,s))||(C=R.text),D=R.hint||R.text;else if(T=i[m]){d.push(m),w=()=>{l.changeView(m)},(C=T.buttonTextOverride)||(y=r.getIconClass(m,s))||(C=T.buttonTextDefault);let E=T.buttonTextOverride||T.buttonTextDefault;D=(0,a.k)(T.buttonTitleOverride||T.buttonTitleDefault||e.viewHint,[E,m],E)}else if(l[m])if(w=()=>{l[m]()},(C=u[m])||(y=r.getIconClass(m,s))||(C=c[m]),"prevYear"===m||"nextYear"===m){let E="prevYear"===m?"prev":"next";D=(0,a.k)(f[E]||p[E],[c.year||"year","year"],c[m])}else D=E=>(0,a.k)(f[m]||p[m],[c[E]||E,E],c[m]);return{buttonName:m,buttonClick:w,buttonIcon:y,buttonText:C,buttonHint:D}})),viewsWithButtons:d,hasTitle:b}}class Pe{constructor(e,n,r){this.type=e,this.getCurrentData=n,this.dateEnv=r}get calendar(){return this.getCurrentData().calendarApi}get title(){return this.getCurrentData().viewTitle}get activeStart(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)}get activeEnd(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)}get currentStart(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)}get currentEnd(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)}getOption(e){return this.getCurrentData().options[e]}}function Y(t,e){let n=(0,a.v)(e.getCurrentData().eventSources);if(1===n.length&&1===t.length&&Array.isArray(n[0]._raw)&&Array.isArray(t[0]))return void e.dispatch({type:"RESET_RAW_EVENTS",sourceId:n[0].sourceId,rawEvents:t[0]});let r=[];for(let i of t){let l=!1;for(let s=0;s<n.length;s+=1)if(n[s]._raw===i){n.splice(s,1),l=!0;break}l||r.push(i)}for(let i of n)e.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:i.sourceId});for(let i of r)e.calendarApi.addEventSource(i)}const K=[O({name:"array-event-source",eventSourceDefs:[{ignoreRange:!0,parseMeta:t=>Array.isArray(t.events)?t.events:null,fetch(t,e){e({rawEvents:t.eventSource.meta})}}]}),O({name:"func-event-source",eventSourceDefs:[{parseMeta:t=>"function"==typeof t.events?t.events:null,fetch(t,e,n){const{dateEnv:r}=t.context;(0,a.u)(t.eventSource.meta.bind(null,(0,a.l)(t.range,r)),l=>e({rawEvents:l}),n)}}]}),O({name:"json-event-source",eventSourceRefiners:{method:String,extraParams:a.n,startParam:String,endParam:String,timeZoneParam:String},eventSourceDefs:[{parseMeta:t=>!t.url||"json"!==t.format&&t.format?null:{url:t.url,format:"json",method:(t.method||"GET").toUpperCase(),extraParams:t.extraParams,startParam:t.startParam,endParam:t.endParam,timeZoneParam:t.timeZoneParam},fetch(t,e,n){const{meta:r}=t.eventSource,i=function je(t,e,n){let l,s,o,u,{dateEnv:r,options:i}=n,c={};return l=t.startParam,null==l&&(l=i.startParam),s=t.endParam,null==s&&(s=i.endParam),o=t.timeZoneParam,null==o&&(o=i.timeZoneParam),u="function"==typeof t.extraParams?t.extraParams():t.extraParams||{},Object.assign(c,u),c[l]=r.formatIso(e.start),c[s]=r.formatIso(e.end),"local"!==r.timeZone&&(c[o]=r.timeZone),c}(r,t.range,t.context);(0,a.r)(r.method,r.url,i).then(([l,s])=>{e({rawEvents:l,response:s})},n)}}]}),O({name:"simple-recurring-event",recurringTypes:[{parse(t,e){if(t.daysOfWeek||t.startTime||t.endTime||t.startRecur||t.endRecur){let r,n={daysOfWeek:t.daysOfWeek||null,startTime:t.startTime||null,endTime:t.endTime||null,startRecur:t.startRecur?e.createMarker(t.startRecur):null,endRecur:t.endRecur?e.createMarker(t.endRecur):null};return t.duration&&(r=t.duration),!r&&t.startTime&&t.endTime&&(r=(0,a.s)(t.endTime,t.startTime)),{allDayGuess:!t.startTime&&!t.endTime,duration:r,typeData:n}}return null},expand(t,e,n){let r=(0,a.o)(e,{start:t.startRecur,end:t.endRecur});return r?function Ne(t,e,n,r){let i=t?(0,a.f)(t):null,l=(0,a.q)(n.start),s=n.end,o=[];for(;l<s;){let u;(!i||i[l.getUTCDay()])&&(u=e?r.add(l,e):l,o.push(u)),l=(0,a.t)(l,1)}return o}(t.daysOfWeek,t.startTime,r,n):[]}}],eventRefiners:{daysOfWeek:a.n,startTime:a.d,endTime:a.d,duration:a.d,startRecur:a.n,endRecur:a.n}}),O({name:"change-handler",optionChangeHandlers:{events(t,e){Y([t],e)},eventSources:Y}}),O({name:"misc",isLoadingFuncs:[t=>W(t.eventSources)],propSetHandlers:{dateProfile:function Ue(t,e){e.emitter.trigger("datesSet",Object.assign(Object.assign({},(0,a.l)(t.activeRange,e.dateEnv)),{view:e.viewApi}))},eventStore:function Fe(t,e){let{emitter:n}=e;n.hasHandlers("eventsSet")&&n.trigger("eventsSet",(0,a.w)(t,e))}}})];class Be{constructor(e,n){this.runTaskOption=e,this.drainedOption=n,this.queue=[],this.delayedRunner=new a.D(this.drain.bind(this))}request(e,n){this.queue.push(e),this.delayedRunner.request(n)}pause(e){this.delayedRunner.pause(e)}resume(e,n){this.delayedRunner.resume(e,n)}drain(){let{queue:e}=this;for(;e.length;){let r,n=[];for(;r=e.shift();)this.runTask(r),n.push(r);this.drained(n)}}runTask(e){this.runTaskOption&&this.runTaskOption(e)}drained(e){this.drainedOption&&this.drainedOption(e)}}function ze(t,e,n){let r;return r=/^(year|month)$/.test(t.currentRangeUnit)?t.currentRange:t.activeRange,n.formatRange(r.start,r.end,(0,a.x)(e.titleFormat||function We(t){let{currentRangeUnit:e}=t;if("year"===e)return{year:"numeric"};if("month"===e)return{year:"numeric",month:"long"};let n=(0,a.y)(t.currentRange.start,t.currentRange.end);return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}(t)),{isEndExclusive:t.isRangeAllDay,defaultSeparator:e.titleRangeSeparator})}class Ge{constructor(e){this.computeCurrentViewData=(0,a.z)(this._computeCurrentViewData),this.organizeRawLocales=(0,a.z)(L),this.buildLocale=(0,a.z)(x),this.buildPluginHooks=function re(){let n,t=[],e=[];return(r,i)=>((!n||!(0,a.i)(r,t)||!(0,a.i)(i,e))&&(n=function ne(t,e){let n={},r={premiumReleaseDate:void 0,reducers:[],isLoadingFuncs:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:"",elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function i(l){for(let s of l){const o=s.name,u=n[o];void 0===u?(n[o]=s.id,i(s.deps),r=ie(r,s)):u!==s.id&&console.warn(`Duplicate plugin '${o}'`)}}return t&&i(t),i(e),r}(r,i)),t=r,e=i,n)}(),this.buildDateEnv=(0,a.z)(ke),this.buildTheme=(0,a.z)(Ze),this.parseToolbars=(0,a.z)(ye),this.buildViewSpecs=(0,a.z)(ue),this.buildDateProfileGenerator=(0,a.A)(qe),this.buildViewApi=(0,a.z)($e),this.buildViewUiProps=(0,a.A)(Xe),this.buildEventUiBySource=(0,a.z)(Ye,a.E),this.buildEventUiBases=(0,a.z)(Ke),this.parseContextBusinessHours=(0,a.A)(Qe),this.buildTitle=(0,a.z)(ze),this.emitter=new a.F,this.actionRunner=new Be(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.optionsForRefining=[],this.optionsForHandling=[],this.getCurrentData=()=>this.data,this.dispatch=h=>{this.actionRunner.request(h)},this.props=e,this.actionRunner.pause();let n={},r=this.computeOptionsData(e.optionOverrides,n,e.calendarApi),i=r.calendarOptions.initialView||r.pluginHooks.initialView,l=this.computeCurrentViewData(i,r,e.optionOverrides,n);e.calendarApi.currentDataManager=this,this.emitter.setThisContext(e.calendarApi),this.emitter.setOptions(l.options);let s=(0,a.G)(r.calendarOptions,r.dateEnv),o=l.dateProfileGenerator.build(s);(0,a.H)(o.activeRange,s)||(s=o.currentRange.start);let u={dateEnv:r.dateEnv,options:r.calendarOptions,pluginHooks:r.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData};for(let h of r.pluginHooks.contextInit)h(u);let c=function ge(t,e,n){let r=e?e.activeRange:null;return G({},function we(t,e){let n=(0,a.j)(e),r=[].concat(t.eventSources||[]),i=[];t.initialEvents&&r.unshift(t.initialEvents),t.events&&r.unshift(t.events);for(let l of r){let s=(0,a.p)(l,e,n);s&&i.push(s)}return i}(t,n),r,n)}(r.calendarOptions,o,u),f={dynamicOptionOverrides:n,currentViewType:i,currentDate:s,dateProfile:o,businessHours:this.parseContextBusinessHours(u),eventSources:c,eventUiBases:{},eventStore:(0,a.I)(),renderableEventStore:(0,a.I)(),dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(u).selectionConfig},p=Object.assign(Object.assign({},u),f);for(let h of r.pluginHooks.reducers)Object.assign(f,h(null,null,p));H(f,u)&&this.emitter.trigger("loading",!0),this.state=f,this.updateData(),this.actionRunner.resume()}resetOptions(e,n){let{props:r}=this;void 0===n?r.optionOverrides=e:(r.optionOverrides=Object.assign(Object.assign({},r.optionOverrides||{}),e),this.optionsForRefining.push(...n)),(void 0===n||n.length)&&this.actionRunner.request({type:"NOTHING"})}_handleAction(e){let{props:n,state:r,emitter:i}=this,l=function pe(t,e){return"SET_OPTION"===e.type?Object.assign(Object.assign({},t),{[e.optionName]:e.rawOptionValue}):t}(r.dynamicOptionOverrides,e),s=this.computeOptionsData(n.optionOverrides,l,n.calendarApi),o=function fe(t,e){return"CHANGE_VIEW_TYPE"===e.type&&(t=e.viewType),t}(r.currentViewType,e),u=this.computeCurrentViewData(o,s,n.optionOverrides,l);n.calendarApi.currentDataManager=this,i.setThisContext(n.calendarApi),i.setOptions(u.options);let c={dateEnv:s.dateEnv,options:s.calendarOptions,pluginHooks:s.pluginHooks,calendarApi:n.calendarApi,dispatch:this.dispatch,emitter:i,getCurrentData:this.getCurrentData},{currentDate:f,dateProfile:p}=r;this.data&&this.data.dateProfileGenerator!==u.dateProfileGenerator&&(p=u.dateProfileGenerator.build(f)),f=(0,a.J)(f,e),p=function he(t,e,n,r){let i;switch(e.type){case"CHANGE_VIEW_TYPE":return r.build(e.dateMarker||n);case"CHANGE_DATE":return r.build(e.dateMarker);case"PREV":if(i=r.buildPrev(t,n),i.isValid)return i;break;case"NEXT":if(i=r.buildNext(t,n),i.isValid)return i}return t}(p,e,f,u.dateProfileGenerator),("PREV"===e.type||"NEXT"===e.type||!(0,a.H)(p.currentRange,f))&&(f=p.currentRange.start);let h=function me(t,e,n,r){let i=n?n.activeRange:null;switch(e.type){case"ADD_EVENT_SOURCES":return G(t,e.sources,i,r);case"REMOVE_EVENT_SOURCE":return function be(t,e){return(0,a.h)(t,n=>n.sourceId!==e)}(t,e.sourceId);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return n?k(t,i,r):t;case"FETCH_EVENT_SOURCES":return A(t,e.sourceIds?(0,a.f)(e.sourceIds):Z(t,r),i,e.isRefetch||!1,r);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function Te(t,e,n,r){let i=t[e];return i&&n===i.latestFetchId?Object.assign(Object.assign({},t),{[e]:Object.assign(Object.assign({},i),{isFetching:!1,fetchRange:r})}):t}(t,e.sourceId,e.fetchId,e.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return t}}(r.eventSources,e,p,c),d=(0,a.K)(r.eventStore,e,h,p,c),I=W(h)&&!u.options.progressiveEventRendering&&r.renderableEventStore||d,{eventUiSingleBase:v,selectionConfig:m}=this.buildViewUiProps(c),R=this.buildEventUiBySource(h),w={dynamicOptionOverrides:l,currentViewType:o,currentDate:f,dateProfile:p,eventSources:h,eventStore:d,renderableEventStore:I,selectionConfig:m,eventUiBases:this.buildEventUiBases(I.defs,v,R),businessHours:this.parseContextBusinessHours(c),dateSelection:Ce(r.dateSelection,e),eventSelection:Se(r.eventSelection,e),eventDrag:De(r.eventDrag,e),eventResize:Oe(r.eventResize,e)},y=Object.assign(Object.assign({},c),w);for(let E of s.pluginHooks.reducers)Object.assign(w,E(r,e,y));let C=H(r,c),D=H(w,c);!C&&D?i.trigger("loading",!0):C&&!D&&i.trigger("loading",!1),this.state=w,n.onAction&&n.onAction(e)}updateData(){let{props:e,state:n}=this,r=this.data,i=this.computeOptionsData(e.optionOverrides,n.dynamicOptionOverrides,e.calendarApi),l=this.computeCurrentViewData(n.currentViewType,i,e.optionOverrides,n.dynamicOptionOverrides),s=this.data=Object.assign(Object.assign(Object.assign({viewTitle:this.buildTitle(n.dateProfile,l.options,i.dateEnv),calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},i),l),n),o=i.pluginHooks.optionChangeHandlers,u=r&&r.calendarOptions,c=i.calendarOptions;if(u&&u!==c){u.timeZone!==c.timeZone&&(n.eventSources=s.eventSources=function ve(t,e,n){let r=e?e.activeRange:null;return A(t,Z(t,n),r,!0,n)}(s.eventSources,n.dateProfile,s),n.eventStore=s.eventStore=(0,a.L)(s.eventStore,r.dateEnv,s.dateEnv),n.renderableEventStore=s.renderableEventStore=(0,a.L)(s.renderableEventStore,r.dateEnv,s.dateEnv));for(let f in o)(-1!==this.optionsForHandling.indexOf(f)||u[f]!==c[f])&&o[f](c[f],s)}this.optionsForHandling=[],e.onData&&e.onData(s)}computeOptionsData(e,n,r){if(!this.optionsForRefining.length&&e===this.stableOptionOverrides&&n===this.stableDynamicOptionOverrides)return this.stableCalendarOptionsData;let{refinedOptions:i,pluginHooks:l,localeDefaults:s,availableLocaleData:o,extra:u}=this.processRawCalendarOptions(e,n);X(u);let c=this.buildDateEnv(i.timeZone,i.locale,i.weekNumberCalculation,i.firstDay,i.weekText,l,o,i.defaultRangeSeparator),f=this.buildViewSpecs(l.views,this.stableOptionOverrides,this.stableDynamicOptionOverrides,s),p=this.buildTheme(i,l),h=this.parseToolbars(i,this.stableOptionOverrides,p,f,r);return this.stableCalendarOptionsData={calendarOptions:i,pluginHooks:l,dateEnv:c,viewSpecs:f,theme:p,toolbarConfig:h,localeDefaults:s,availableRawLocales:o.map}}processRawCalendarOptions(e,n){let{locales:r,locale:i}=(0,a.M)([a.e,e,n]),l=this.organizeRawLocales(r),o=this.buildLocale(i||l.defaultCode,l.map).options,u=this.buildPluginHooks(e.plugins||[],K),c=this.currentCalendarOptionsRefiners=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},a.N),a.O),a.P),u.listenerRefiners),u.optionRefiners),f={},p=(0,a.M)([a.e,o,e,n]),h={},d=this.currentCalendarOptionsInput,b=this.currentCalendarOptionsRefined,I=!1;for(let v in p)-1===this.optionsForRefining.indexOf(v)&&(p[v]===d[v]||a.Q[v]&&v in d&&a.Q[v](d[v],p[v]))?h[v]=b[v]:c[v]?(h[v]=c[v](p[v]),I=!0):f[v]=d[v];return I&&(this.currentCalendarOptionsInput=p,this.currentCalendarOptionsRefined=h,this.stableOptionOverrides=e,this.stableDynamicOptionOverrides=n),this.optionsForHandling.push(...this.optionsForRefining),this.optionsForRefining=[],{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:u,availableLocaleData:l,localeDefaults:o,extra:f}}_computeCurrentViewData(e,n,r,i){let l=n.viewSpecs[e];if(!l)throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);let{refinedOptions:s,extra:o}=this.processRawViewOptions(l,n.pluginHooks,n.localeDefaults,r,i);return X(o),{viewSpec:l,options:s,dateProfileGenerator:this.buildDateProfileGenerator({dateProfileGeneratorClass:l.optionDefaults.dateProfileGeneratorClass,duration:l.duration,durationUnit:l.durationUnit,usesMinMaxTime:l.optionDefaults.usesMinMaxTime,dateEnv:n.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:s.slotMinTime,slotMaxTime:s.slotMaxTime,showNonCurrentDates:s.showNonCurrentDates,dayCount:s.dayCount,dateAlignment:s.dateAlignment,dateIncrement:s.dateIncrement,hiddenDays:s.hiddenDays,weekends:s.weekends,nowInput:s.now,validRangeInput:s.validRange,visibleRangeInput:s.visibleRange,fixedWeekCount:s.fixedWeekCount}),viewApi:this.buildViewApi(e,this.getCurrentData,n.dateEnv)}}processRawViewOptions(e,n,r,i,l){let s=(0,a.M)([a.e,e.optionDefaults,r,i,e.optionOverrides,l]),o=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},a.N),a.O),a.P),a.R),n.listenerRefiners),n.optionRefiners),u={},c=this.currentViewOptionsInput,f=this.currentViewOptionsRefined,p=!1,h={};for(let d in s)s[d]===c[d]||a.Q[d]&&a.Q[d](s[d],c[d])?u[d]=f[d]:(s[d]===this.currentCalendarOptionsInput[d]||a.Q[d]&&a.Q[d](s[d],this.currentCalendarOptionsInput[d])?d in this.currentCalendarOptionsRefined&&(u[d]=this.currentCalendarOptionsRefined[d]):o[d]?u[d]=o[d](s[d]):h[d]=s[d],p=!0);return p&&(this.currentViewOptionsInput=s,this.currentViewOptionsRefined=u),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:h}}}function ke(t,e,n,r,i,l,s,o){let u=x(e||s.defaultCode,s.map);return new a.S({calendarSystem:"gregory",timeZone:t,namedTimeZoneImpl:l.namedTimeZonedImpl,locale:u,weekNumberCalculation:n,firstDay:r,weekText:i,cmdFormatter:l.cmdFormatter,defaultSeparator:o})}function Ze(t,e){return new(e.themeClasses[t.themeSystem]||S)(t)}function qe(t){return new(t.dateProfileGeneratorClass||a.U)(t)}function $e(t,e,n){return new Pe(t,e,n)}function Ye(t){return(0,a.a)(t,e=>e.ui)}function Ke(t,e,n){let r={"":e};for(let i in t){let l=t[i];l.sourceId&&n[l.sourceId]&&(r[i]=n[l.sourceId])}return r}function Xe(t){let{options:e}=t;return{eventUiSingleBase:(0,a.W)({display:e.eventDisplay,editable:e.editable,startEditable:e.eventStartEditable,durationEditable:e.eventDurationEditable,constraint:e.eventConstraint,overlap:"boolean"==typeof e.eventOverlap?e.eventOverlap:void 0,allow:e.eventAllow,backgroundColor:e.eventBackgroundColor,borderColor:e.eventBorderColor,textColor:e.eventTextColor,color:e.eventColor},t),selectionConfig:(0,a.W)({constraint:e.selectConstraint,overlap:"boolean"==typeof e.selectOverlap?e.selectOverlap:void 0,allow:e.selectAllow},t)}}function H(t,e){for(let n of e.pluginHooks.isLoadingFuncs)if(n(t))return!0;return!1}function Qe(t){return(0,a.X)(t.options.businessHours,t)}function X(t,e){for(let n in t)console.warn(`Unknown option '${n}'`+(e?` for view '${e}'`:""))}class Je extends a.B{render(){let e=this.props.widgetGroups.map(n=>this.renderWidgetGroup(n));return(0,g.n)("div",{className:"fc-toolbar-chunk"},...e)}renderWidgetGroup(e){let{props:n}=this,{theme:r}=this.context,i=[],l=!0;for(let s of e){let{buttonName:o,buttonClick:u,buttonText:c,buttonIcon:f,buttonHint:p}=s;if("title"===o)l=!1,i.push((0,g.n)("h2",{className:"fc-toolbar-title",id:n.titleId},n.title));else{let h=o===n.activeButton,d=!n.isTodayEnabled&&"today"===o||!n.isPrevEnabled&&"prev"===o||!n.isNextEnabled&&"next"===o,b=[`fc-${o}-button`,r.getClass("button")];h&&b.push(r.getClass("buttonActive")),i.push((0,g.n)("button",{type:"button",title:"function"==typeof p?p(n.navUnit):p,disabled:d,"aria-pressed":h,className:b.join(" "),onClick:u},c||(f?(0,g.n)("span",{className:f,role:"img"}):"")))}}if(i.length>1){let s=l&&r.getClass("buttonGroup")||"";return(0,g.n)("div",{className:s},...i)}return i[0]}}class Q extends a.B{render(){let i,l,{model:e,extraClassName:n}=this.props,r=!1,s=e.sectionWidgets,o=s.center;return s.left?(r=!0,i=s.left):i=s.start,s.right?(r=!0,l=s.right):l=s.end,(0,g.n)("div",{className:[n||"","fc-toolbar",r?"fc-toolbar-ltr":""].join(" ")},this.renderSection("start",i||[]),this.renderSection("center",o||[]),this.renderSection("end",l||[]))}renderSection(e,n){let{props:r}=this;return(0,g.n)(Je,{key:e,widgetGroups:n,title:r.title,navUnit:r.navUnit,activeButton:r.activeButton,isTodayEnabled:r.isTodayEnabled,isPrevEnabled:r.isPrevEnabled,isNextEnabled:r.isNextEnabled,titleId:r.titleId})}}class et extends a.B{constructor(){super(...arguments),this.state={availableWidth:null},this.handleEl=e=>{this.el=e,(0,a.Y)(this.props.elRef,e),this.updateAvailableWidth()},this.handleResize=()=>{this.updateAvailableWidth()}}render(){let{props:e,state:n}=this,{aspectRatio:r}=e,l="",s="";return r?null!==n.availableWidth?l=n.availableWidth/r:s=1/r*100+"%":l=e.height||"",(0,g.n)("div",{"aria-labelledby":e.labeledById,ref:this.handleEl,className:["fc-view-harness",r||e.liquid||e.height?"fc-view-harness-active":"fc-view-harness-passive"].join(" "),style:{height:l,paddingBottom:s}},e.children)}componentDidMount(){this.context.addResizeHandler(this.handleResize)}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}updateAvailableWidth(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})}}class tt extends a.Z{constructor(e){super(e),this.handleSegClick=(n,r)=>{let{component:i}=this,{context:l}=i,s=(0,a._)(r);if(s&&i.isValidSegDownEl(n.target)){let o=(0,a.$)(n.target,".fc-event-forced-url"),u=o?o.querySelector("a[href]").href:"";l.emitter.trigger("eventClick",{el:r,event:new a.a0(i.context,s.eventRange.def,s.eventRange.instance),jsEvent:n,view:l.viewApi}),u&&!n.defaultPrevented&&(window.location.href=u)}},this.destroy=(0,a.a1)(e.el,"click",".fc-event",this.handleSegClick)}}class nt extends a.Z{constructor(e){super(e),this.handleEventElRemove=n=>{n===this.currentSegEl&&this.handleSegLeave(null,this.currentSegEl)},this.handleSegEnter=(n,r)=>{(0,a._)(r)&&(this.currentSegEl=r,this.triggerEvent("eventMouseEnter",n,r))},this.handleSegLeave=(n,r)=>{this.currentSegEl&&(this.currentSegEl=null,this.triggerEvent("eventMouseLeave",n,r))},this.removeHoverListeners=(0,a.a2)(e.el,".fc-event",this.handleSegEnter,this.handleSegLeave)}destroy(){this.removeHoverListeners()}triggerEvent(e,n,r){let{component:i}=this,{context:l}=i,s=(0,a._)(r);(!n||i.isValidSegDownEl(n.target))&&l.emitter.trigger(e,{el:r,event:new a.a0(l,s.eventRange.def,s.eventRange.instance),jsEvent:n,view:l.viewApi})}}class rt extends a.a3{constructor(){super(...arguments),this.buildViewContext=(0,a.z)(a.a4),this.buildViewPropTransformers=(0,a.z)(st),this.buildToolbarProps=(0,a.z)(it),this.headerRef=(0,g._3)(),this.footerRef=(0,g._3)(),this.interactionsStore={},this.state={viewLabelId:(0,a.a5)()},this.registerInteractiveComponent=(e,n)=>{let r=(0,a.a6)(e,n),s=[tt,nt].concat(this.props.pluginHooks.componentInteractions).map(o=>new o(r));this.interactionsStore[e.uid]=s,a.a7[e.uid]=r},this.unregisterInteractiveComponent=e=>{let n=this.interactionsStore[e.uid];if(n){for(let r of n)r.destroy();delete this.interactionsStore[e.uid]}delete a.a7[e.uid]},this.resizeRunner=new a.D(()=>{this.props.emitter.trigger("_resize",!0),this.props.emitter.trigger("windowResize",{view:this.props.viewApi})}),this.handleWindowResize=e=>{let{options:n}=this.props;n.handleWindowResize&&e.target===window&&this.resizeRunner.request(n.windowResizeDelay)}}render(){let o,{props:e}=this,{toolbarConfig:n,options:r}=e,i=this.buildToolbarProps(e.viewSpec,e.dateProfile,e.dateProfileGenerator,e.currentDate,(0,a.a8)(e.options.now,e.dateEnv),e.viewTitle),l=!1,s="";e.isHeightAuto||e.forPrint?s="":null!=r.height?l=!0:null!=r.contentHeight?s=r.contentHeight:o=Math.max(r.aspectRatio,.5);let u=this.buildViewContext(e.viewSpec,e.viewApi,e.options,e.dateProfileGenerator,e.dateEnv,e.theme,e.pluginHooks,e.dispatch,e.getCurrentData,e.emitter,e.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent),c=n.header&&n.header.hasTitle?this.state.viewLabelId:void 0;return(0,g.n)(a.V.Provider,{value:u},n.header&&(0,g.n)(Q,Object.assign({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:n.header,titleId:c},i)),(0,g.n)(et,{liquid:l,height:s,aspectRatio:o,labeledById:c},this.renderView(e),this.buildAppendContent()),n.footer&&(0,g.n)(Q,Object.assign({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:n.footer,titleId:""},i)))}componentDidMount(){let{props:e}=this;this.calendarInteractions=e.pluginHooks.calendarInteractions.map(r=>new r(e)),window.addEventListener("resize",this.handleWindowResize);let{propSetHandlers:n}=e.pluginHooks;for(let r in n)n[r](e[r],e)}componentDidUpdate(e){let{props:n}=this,{propSetHandlers:r}=n.pluginHooks;for(let i in r)n[i]!==e[i]&&r[i](n[i],n)}componentWillUnmount(){window.removeEventListener("resize",this.handleWindowResize),this.resizeRunner.clear();for(let e of this.calendarInteractions)e.destroy();this.props.emitter.trigger("_unmount")}buildAppendContent(){let{props:e}=this,n=e.pluginHooks.viewContainerAppends.map(r=>r(e));return(0,g.n)(g.FK,{},...n)}renderView(e){let{pluginHooks:n}=e,{viewSpec:r}=e,i={dateProfile:e.dateProfile,businessHours:e.businessHours,eventStore:e.renderableEventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isHeightAuto:e.isHeightAuto,forPrint:e.forPrint},l=this.buildViewPropTransformers(n.viewPropsTransformers);for(let o of l)Object.assign(i,o.transform(i,e));return(0,g.n)(r.component,Object.assign({},i))}}function it(t,e,n,r,i,l){let s=n.build(i,void 0,!1),o=n.buildPrev(e,r,!1),u=n.buildNext(e,r,!1);return{title:l,activeButton:t.type,navUnit:t.singleUnit,isTodayEnabled:s.isValid&&!(0,a.H)(e.currentRange,i),isPrevEnabled:o.isValid,isNextEnabled:u.isValid}}function st(t){return t.map(e=>new e)}class at extends a.a9{constructor(e,n={}){super(),this.isRendering=!1,this.isRendered=!1,this.currentClassNames=[],this.customContentRenderId=0,this.handleAction=r=>{switch(r.type){case"SET_EVENT_DRAG":case"SET_EVENT_RESIZE":this.renderRunner.tryDrain()}},this.handleData=r=>{this.currentData=r,this.renderRunner.request(r.calendarOptions.rerenderDelay)},this.handleRenderRequest=()=>{if(this.isRendering){this.isRendered=!0;let{currentData:r}=this;(0,a.aa)(()=>{(0,g.XX)((0,g.n)(a.ab,{options:r.calendarOptions,theme:r.theme,emitter:r.emitter},(i,l,s,o)=>(this.setClassNames(i),this.setHeight(l),(0,g.n)(a.ac.Provider,{value:this.customContentRenderId},(0,g.n)(rt,Object.assign({isHeightAuto:s,forPrint:o},r))))),this.el)})}else this.isRendered&&(this.isRendered=!1,(0,g.XX)(null,this.el),this.setClassNames([]),this.setHeight(""))},(0,a.ad)(e),this.el=e,this.renderRunner=new a.D(this.handleRenderRequest),new Ge({optionOverrides:n,calendarApi:this,onAction:this.handleAction,onData:this.handleData})}render(){let e=this.isRendering;e?this.customContentRenderId+=1:this.isRendering=!0,this.renderRunner.request(),e&&this.updateSize()}destroy(){this.isRendering&&(this.isRendering=!1,this.renderRunner.request())}updateSize(){(0,a.aa)(()=>{super.updateSize()})}batchRendering(e){this.renderRunner.pause("batchRendering"),e(),this.renderRunner.resume("batchRendering")}pauseRendering(){this.renderRunner.pause("pauseRendering")}resumeRendering(){this.renderRunner.resume("pauseRendering",!0)}resetOptions(e,n){this.currentDataManager.resetOptions(e,n)}setClassNames(e){if(!(0,a.i)(e,this.currentClassNames)){let{classList:n}=this.el;for(let r of this.currentClassNames)n.remove(r);for(let r of e)n.add(r);this.currentClassNames=e}}setHeight(e){(0,a.ae)(this.el,"height",e)}}function lt(t,e={}){let n=J(e),r=(0,a.x)(e),i=n.createMarkerMeta(t);return i?n.format(i.marker,r,{forcedTzo:i.forcedTzo}):""}function ot(t,e,n){let r=J("object"==typeof n&&n?n:{}),i=(0,a.x)(n),l=r.createMarkerMeta(t),s=r.createMarkerMeta(e);return l&&s?r.formatRange(l.marker,s.marker,i,{forcedStartTzo:l.forcedTzo,forcedEndTzo:s.forcedTzo,isEndExclusive:n.isEndExclusive,defaultSeparator:a.e.defaultRangeSeparator}):""}function J(t){let e=x(t.locale||"en",L([]).map);return new a.S(Object.assign(Object.assign({timeZone:a.e.timeZone,calendarSystem:"gregory"},t),{locale:e}))}function ut(t,e){return(0,a.af)(t.eventStore,t.eventUiBases,t.dateProfile.activeRange,e?t.nextDayThreshold:null).fg}const ct="6.1.15"}}]);