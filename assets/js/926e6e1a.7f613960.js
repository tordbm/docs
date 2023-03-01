"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[7313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),k=o(n),m=l,u=k["".concat(s,".").concat(m)]||k[m]||d[m]||a;return n?r.createElement(u,i(i({ref:t},g),{},{components:n})):r.createElement(u,i({ref:t},g))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>o});var r=n(7462),l=(n(7294),n(3905));const a={title:"Opprette plan"},i=void 0,p={unversionedId:"datadeling/veiledere/api-manager/opprette-plan",id:"datadeling/veiledere/api-manager/opprette-plan",title:"Opprette plan",description:"En plan kan sees p\xe5 som et sett med rettigheter til et API.",source:"@site/docs/datadeling/veiledere/api-manager/opprette-plan.md",sourceDirName:"datadeling/veiledere/api-manager",slug:"/datadeling/veiledere/api-manager/opprette-plan",permalink:"/docs/datadeling/veiledere/api-manager/opprette-plan",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/veiledere/api-manager/opprette-plan.md",tags:[],version:"current",lastUpdatedAt:1677665381,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{title:"Opprette plan"},sidebar:"datadeling",previous:{title:"Konfigurere autentisering via maskinporten ",permalink:"/docs/datadeling/veiledere/api-manager/maskinporten-autentisering"},next:{title:"Rettigheter, roller og grupper i API Manager",permalink:"/docs/datadeling/veiledere/api-manager/rettigheter-og-roller-i-api-manager"}},s={},o=[{value:"Opprette plan",id:"opprette-plan",level:2},{value:"Opprette plan med mange rettigheter",id:"opprette-plan-med-mange-rettigheter",level:2},{value:"Avslutte planer",id:"avslutte-planer",level:2},{value:"Opprette plan med f\xe5 rettigheter og begrensning av bruk",id:"opprette-plan-med-f\xe5-rettigheter-og-begrensning-av-bruk",level:2},{value:"Hvitelisting",id:"hvitelisting",level:3},{value:"Svartelisting",id:"svartelisting",level:3},{value:"Rate-Limiting",id:"rate-limiting",level:3}],g={toc:o};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"En plan kan sees p\xe5 som et sett med rettigheter til et API."),(0,l.kt)("p",null,"Det kan v\xe6re rettigheter for hvilke paths man har lov til \xe5 bruke, om man har bare leserrettigheter, eller b\xe5de lese- og skriverettigheter, eller hvor ofte du har lov til \xe5 sp\xf8rre mot API-et."),(0,l.kt)("h2",{id:"opprette-plan"},"Opprette plan"),(0,l.kt)("p",null,"Under APIs, g\xe5 f\xf8rst til Portal i den venstre sidemenyen og deretter Plans. Lag ny plan ved \xe5 trykke p\xe5 det bl\xe5 plusstegnet."),(0,l.kt)("p",null,"Du blir s\xe5 tatt gjennom veiviseren for \xe5 opprette/endre en plan. I eksemplene under lager vi planer for ",(0,l.kt)("a",{parentName:"p",href:"https://petstore3.swagger.io/"},"test-APIet petstore"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(5592).Z,width:"838",height:"374"})),(0,l.kt)("h2",{id:"opprette-plan-med-mange-rettigheter"},"Opprette plan med mange rettigheter"),(0,l.kt)("p",null,"P\xe5 f\xf8rste side, fyll inn navn og en beskrivelse."),(0,l.kt)("p",null,"I tillegg m\xe5 det gj\xf8res et par andre valg:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Auto validate subscription betyr at alle som ber om tilgang f\xe5r det\nautomatisk, men i motsetning til en \xe5pen plan m\xe5 de registrere applikasjonen"),(0,l.kt)("li",{parentName:"ul"},'Skru p\xe5 "Consumer must provide a comment" om du vil kreve at det blir skrevet\nen kommentar for \xe5 f\xe5 spurt om tilgang'),(0,l.kt)("li",{parentName:"ul"},'I tekstfeltet "Custom message to display to consumer" er det mulig \xe5 legge\ninn en kort tekst hvor man f.eks. kan be om spesifikk informasjon'),(0,l.kt)("li",{parentName:"ul"},'Under Characteristics kan man legge inn noen stikkord for \xe5 beskrive planen,\nf.eks. "\xe5pne data" om planen kun gir tilgang til det, "read only" om kun\nleserrettigheter, "read/write" om planen gir tilgang til \xe5 legge inn data i\nAPI-et o.l')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Illustrasjon av.. noko",src:n(5988).Z,width:"1103",height:"818"})),(0,l.kt)("p",null,"P\xe5 neste side velger man hvilken metode API-et skal v\xe6re sikret med, dersom dette er relevant."),(0,l.kt)("p",null,"Man kan velge \xe5 ha det helt \xe5pent,public/keyless, eller bruke API-n\xf8kkel, JWT eller OAuth 2."),(0,l.kt)("p",null,"I dette eksempelet brukes API n\xf8kkel. Man kan velge \xe5 sende API-n\xf8kkelen med videre til backend. Ikke valgt i dette eksempelet, headeren med api-n\xf8kkel blir derfor ikke fjernet."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Illustrasjon av.. noko",src:n(5831).Z,width:"538",height:"519"})),(0,l.kt)("p",null,"I neste skjermbilde kan man velge \xe5 legge restriksjoner p\xe5 hva man f\xe5r lov til \xe5 gj\xf8re med denne planen. ",(0,l.kt)("a",{parentName:"p",href:"#restrictions"},"Se lenger ned for eksempler"),"."),(0,l.kt)("p",null,'P\xe5 siste side kan man legge p\xe5 policyer p\xe5 enkeltplaner. Det anbefales ikke om man kan unng\xe5 det, men noen ganger er det n\xf8dvendig. Pr\xf8v i s\xe5 fall \xe5 ha s\xe5 f\xe5 som mulig her. Det er bare \xe5 velge policy, klikke p\xe5 "ADD" og konfigurere denne. Om man legger p\xe5 flere blir den neste lagt til p\xe5 slutten. Man kan ikke endre rekkef\xf8lge i etterkant slik som n\xe5r man endrer p\xe5 policyer for hele API-et.'),(0,l.kt)("p",null,'For \xe5 lagre planen, trykk p\xe5 "SAVE".'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4316).Z,width:"847",height:"288"})),(0,l.kt)("p",null,'Planer blir f\xf8rst opprettet i Staging-omr\xe5det. Det er da ikke mulig \xe5 abbonnere p\xe5 dem. P\xe5 denne m\xe5ten kan man opprette planer og dobbeltsjekke at de ble konfigurert riktig f\xf8r man publiserer dem. N\xe5r du oppretter en plan f\xf8r den er publisert vil du derfor kunne ikke se den. Klikk p\xe5 "Staging" for \xe5 se planer som ikke er publisert.'),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(4016).Z,width:"530",height:"497"})),(0,l.kt)("p",null,"For \xe5 gj\xf8re en plan tilgjengelig klikk p\xe5 det lille sky-ikonet med oppover-pil. ",(0,l.kt)("img",{src:n(6007).Z,width:"67",height:"28"})," Den er n\xe5 tilgjengelig i portalen og applikasjoner kan sp\xf8rre om tilgang. Det\xa0 er fremdeles ikke mulig \xe5 bruke planen Klikk p\xe5 deploy for \xe5 dytte ut konfigurasjonen av denne planen til gatewayen."),(0,l.kt)("p",null,"For \xe5 endre en plan, klikk p\xe5 blyant-ikonet for \xe5 redigere. Man m\xe5 g\xe5 gjennomhele veiviseren p\xe5 nytt, men du trenger kun \xe5 endre det som skal endres."),(0,l.kt)("h2",{id:"avslutte-planer"},"Avslutte planer"),(0,l.kt)("p",null,"For \xe5 gj\xf8re en plan utilgjengelig for nye abonneneter gj\xf8r man dem Deprecated. Eksisterende abonnenter vil fortsette \xe5 fungere, men nye applikasjoner som vil bruke API-et m\xe5 velge en annen plan. Ved \xe5 lukke planen vil eksisterende abonnement slutte \xe5 fungere."),(0,l.kt)("h2",{id:"opprette-plan-med-f\xe5-rettigheter-og-begrensning-av-bruk"},"Opprette plan med f\xe5 rettigheter og begrensning av bruk"),(0,l.kt)("p",null,"Trykk p\xe5 plusstegnet p\xe5 siden for Plans for \xe5 opprette ny plan."),(0,l.kt)("p",null,"Fyll inn navn, beskrivelse og velg autentiseringmetode p\xe5 de to f\xf8rste sidene."),(0,l.kt)("h3",{id:"hvitelisting"},"Hvitelisting"),(0,l.kt)("p",null,'P\xe5 side 3, Restrictions, huk av for Path Authorization. I dette eksempelet bruker vi fremdeles Pet Store-API-et, og vi vil bare tillate abonnenter \xe5 lese informasjon om kj\xe6ledyr. For \xe5 oppn\xe5 dette hvitelister vi en path. Trykk p\xe5 "+ Add" under whitelist for \xe5 lage en ny, og fyll inn path pattern og tillatte metoder. F.eks. /pet/',"*","*"," som path og huke av for GET for \xe5 gi leserettigheter til kj\xe6ledyr."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(2520).Z,width:"990",height:"517"})),(0,l.kt)("p",null,"Du kan legge p\xe5 s\xe5 mange path pattern i hvitelist som du vil. N\xe5r du har lagt inn en eller flere hvitelister vil alle andre paths v\xe6re svartelistet. Tilsvarende til alle endre v\xe6re godkjente om du svartelister en eller flere path."),(0,l.kt)("p",null,"Det fungerer ikke \xe5 kombinere svartelister og hvitelister. Om begge typer er definert vil kun hvitelistene fungere."),(0,l.kt)("p",null,"Methods som blir brukt her blir ogs\xe5 kalt HTTP verbs."),(0,l.kt)("p",null,"Path patterns som blir brukt er ",(0,l.kt)("a",{parentName:"p",href:"http://ant.apache.org/"},"Ant Path Patterns"),". De fungerer slik:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"? betyr et tegn (men ikke / )"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"betyr null eller flere tegn (men ikke / )"))),(0,l.kt)("li",{parentName:"ul"},"*","*"," betyr null eller flere mappe-segmenter")),(0,l.kt)("p",null,"Om du vil vite mer om Ant Patterns er ",(0,l.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/fisheye/pattern-matching-guide-960155410.html"},"denne veiledningen god,")," det finnes ogs\xe5 ",(0,l.kt)("a",{parentName:"p",href:"http://ant.apache.org/manual/dirtasks.html#patterns"},"offisiell dokumentasjon"),"."),(0,l.kt)("h3",{id:"svartelisting"},"Svartelisting"),(0,l.kt)("p",null,"I dette eksempelet har man lov til \xe5 bruke API-et s\xe5 mye man vil og man har tilgang til alle ressurser bortsett fra \xe5 slette ordre. Det er gjort ved \xe5 svarteliste path/store/order med http-method (HTTPS verb) DELETE. Om man vil svarteliste all tilgang til ordre huker man av alle."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1942).Z,width:"974",height:"603"})),(0,l.kt)("h3",{id:"rate-limiting"},"Rate-Limiting"),(0,l.kt)("p",null,"I tillegg til \xe5 begrense hvilke ressurser som er tilgengelig via API-et kan man\nogs\xe5 begrense hvor ofte en konsument kan kontakte et API. Det gj\xf8res med\nRate-limiting eller kvoter (Quota). Kvoter er mest brukt for API-er man betaler\nfor. Rate-limiting brukes ogs\xe5 ofte p\xe5 betal-API-er hvor det er mindre\nbegrensninger jo mer man betaler. Rate-limiting kan ogs\xe5 brukes for \xe5 beskytte\net API om backend-serveren har ytelsesproblemer."),(0,l.kt)("p",null,"Skjermbilde av eksempel hvor man tillater to foresp\xf8rsler per minutt:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(1478).Z,width:"955",height:"472"})))}d.isMDXComponent=!0},5592:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20200928124644-1-b1764559e7b57ce2198043795e54e56c.png"},5988:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20200928150931-1-b2011347466eb35da08f6ef633e87aa7.png"},5831:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20200928152040-3-ee8bbebbe3c5a75f231f40c3df064ca9.png"},4316:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20200928155158-6-4c445ae3447bd4cc2cba507e23addc72.png"},4016:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20200928155423-7-2dc2c7cdee2572daa61358b3e8a898e0.png"},6007:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAAAcCAYAAAA6EgJRAAAABHNCSVQICAgIfAhkiAAAA31JREFUWEftlk1ME0EUx/+0KkGlBTRW8CNWiG0CJfHgx0HkAhfBCJoQ4eZNvavx4NGLno1exJOQgAoGmsjBRAKGQA8mbSU2FipigRIRKNJCpdV9azZsd2e3A9QDZl/SNDv7Zt7Mb//vvclJJBK/YZhIwGRwWCdgwJCpwYDxr2EEAgF4PJ5tl4E7sr1jr9eL3t5ecdlIJIL6+nquECOh7/CHFxBPrKFwTy4OFezGaft+5O0yc83PhlPWYcg3RWCsViuqqqo09xpeiKF1IIgfy6synyWQrvr8YVw9Y0fl4ULN+dKLxecvEBscQfHjB5q+mXyyVjNCoRA6OztRXl6epoaVlRXNzc39XMWjt58UINbd47+SeDYYBAHLZLGBYUTbXmL6xm2mK4GYuXkHq96PSC0sMn2yogwC0dHRgWQyKf43NTWJwSYmJlBbW6sKHE8kEZyN4o1/CnRguZUeyMfY7FLaGCnn3sVK1TrygeInD8VHAkImV4gEIrfCiaPuNpgKrMy1crZ66aJi2d3dLYKQzG63i0DMZnW+B4WDtg58VkGguaeO7UPL2eOg+tE+HErb8LVzZVzpMn39FqLtr2BpuSIC4QVBwbakDALR1dWFVCrFJK0cpLTIBILmUOEkkwOhdHEJteP8CRvKBPVomVwha1+/CXVkGJkUIa21aWVogdBTxVPhQP5v86pzSIpQvmAphHx4VDJ5oRmx9yMwWS0o9b7TTA15zE0VUC0QDodDMz0o6NS8uhDm7TSjaG+uUD/CaSwIBHWYEqHFKu31h0nlUNqz2DUIhCUfqcUoInfv6/pLLzcMQw9EY2Mjs05IwdLb599RKqB9QiGln9wIBo1NMToJax1prrxGlPr6YWm+rNtl5DE3VDN8Ph/cbreqRpAiCITJpM+2pCBPOFyc6yttxolVLPW6jDIGN4zR0VH09PQo58PpdKKhoSEjCJpY7Tio6hLyBeWpMr+cUMWSBoqEG6rSWCAkH14g3DDGxsaU8UGK4AVBk6lLBCNReL7MqdaiAWWqMJ2EwUsnj6he0aVLr2tIQKRLF+uuwd1NSBWUJpK5XC7U1dVxKUK5c6oH/YGZDadMhdBaq3VaK90sWYeUx9fz4YYxNDSE8fFxcV2bzYaamhrlGbf9MzeMbX9SjgPol3+OBf4nFwOG7GsaMAwY7OQ2lGEow1AGm4ChDDaXPwhaqigoXamEAAAAAElFTkSuQmCC"},2520:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20200930180731-1-70b8a67a7c3eeb2737af02a431ae96af.png"},1478:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20201001125524-1-6b8823c320faa30bb835cac57619d503.png"},1942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20201001130341-3-fa8bd80def0416aa0cf48b91bd92fe0d.png"}}]);