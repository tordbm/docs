"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[55],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),k=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=k(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=k(n),d=a,u=m["".concat(o,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(u,l(l({ref:t},g),{},{components:n})):r.createElement(u,l({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var k=2;k<i;k++)l[k]=n[k];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>k});var r=n(7462),a=(n(7294),n(3905));const i={image:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/gravitee-logo.png",title:"Gravitee"},l=void 0,s={unversionedId:"datadeling/teknisk-plattform/gravitee",id:"datadeling/teknisk-plattform/gravitee",title:"Gravitee",description:"IntArk bruker Gravitee som API manager og API gateway.",source:"@site/docs/datadeling/teknisk-plattform/gravitee.md",sourceDirName:"datadeling/teknisk-plattform",slug:"/datadeling/teknisk-plattform/gravitee",permalink:"/docs/datadeling/teknisk-plattform/gravitee",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/datadeling/teknisk-plattform/gravitee.md",tags:[],version:"current",lastUpdatedAt:1677665381,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{image:"/prosjekter/datadeling/arbeidsomrader/integrasjonsarkitektur/dokumentasjon/img/gravitee-logo.png",title:"Gravitee"},sidebar:"datadeling",previous:{title:"Selvbetjening for RabbitMQ",permalink:"/docs/datadeling/teknisk-plattform/brom"},next:{title:"Infrastrukturen til IntArks tekniske plattform",permalink:"/docs/datadeling/teknisk-plattform/infrastruktur"}},o={},k=[{value:"Hva er Gravitee?",id:"hva-er-gravitee",level:2},{value:"Gravitee som API manager",id:"gravitee-som-api-manager",level:2},{value:"Gravitee som API gateway",id:"gravitee-som-api-gateway",level:2},{value:"Konsepter i Gravitee",id:"konsepter-i-gravitee",level:2},{value:"Eksempel p\xe5 bruk av Plans",id:"eksempel-p\xe5-bruk-av-plans",level:3},{value:"Mer teknisk om Gravitee",id:"mer-teknisk-om-gravitee",level:2},{value:"Se ogs\xe5",id:"se-ogs\xe5",level:2}],g={toc:k};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"IntArk bruker Gravitee som API manager og API gateway."),(0,a.kt)("h2",{id:"hva-er-gravitee"},"Hva er Gravitee?"),(0,a.kt)("p",null,"Gravitee er en open source plattform for \xe5 h\xe5ndtere dine API. Den inneholder\nbrukergrensesnitt som kan brukes av b\xe5de datatilbydere og konsumenter, og\nendepunt for integrasjoner. Gravitee var det produktet som var best egnet til \xe5\ndekke IntArk sine behov for en enklere og bedre datadeling."),(0,a.kt)("p",null,"Gravitee kan deles i to komponenter: ",(0,a.kt)("em",{parentName:"p"},"API manager")," er brukergrensesnittet der\ninstitusjonen forvalter API og tilganger til data, mens ",(0,a.kt)("em",{parentName:"p"},"API gateway")," h\xe5ndterer\ntilgangskontrollen til API. Alle tjenester m\xe5 hente data via API gateway."),(0,a.kt)("p",null,"Brukergrensesnittet til Gravitee kan igjen deles i to komponenter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"En API-katalog som gir oversikt over alle API-er. Du kan her sette opp\napplikasjoner som kan abonnere p\xe5 disse.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"En administrasjonsside hvor du setter opp og kan overv\xe5ke dine API. Du m\xe5 ha\nriktige rettigheter i Gravitee for \xe5 f\xe5 tilgang til denne siden."))),(0,a.kt)("h2",{id:"gravitee-som-api-manager"},"Gravitee som API manager"),(0,a.kt)("p",null,"Gravitee sin API manager er brukergrensesnittet der du administrerer b\xe5de dine\nAPI og dine tilganger til andres API. Som datatilbyder setter du opp ditt API i\nGravitee. N\xe5r dette er gjort, blir ditt API publisert i en API-katalog. Som\nkonsument kan du da lete etter API og s\xf8ke om tilgang til det. Hvis\ndatatilbyder godkjenner din s\xf8knad, vil du kunne hente ut dataene."),(0,a.kt)("p",null,"Noen funksjoner Gravitee sin API manager gir deg:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Datatilbydere kan publisere sine API"),(0,a.kt)("li",{parentName:"ul"},"Datatilbydere kan sette opp egne innstillinger for sine API, for eksempel\ncaching"),(0,a.kt)("li",{parentName:"ul"},"Datatilbydere kan behandle s\xf8knader om tilgang til sine data"),(0,a.kt)("li",{parentName:"ul"},"Datatilbydere f\xe5r oversikt over hvem som har tilgang til hvilke av sine data"),(0,a.kt)("li",{parentName:"ul"},"Datatilbydere kan se aktiviteten til sitt API, for eksempel hvem som belaster\ndet mest, og p\xe5 hvilke tidspunkt"),(0,a.kt)("li",{parentName:"ul"},"Datatilbydere kan avslutte en konsuments tilgang, for eksempel ved misbruk"),(0,a.kt)("li",{parentName:"ul"},"Konsumenter kan se tilgjengelige API i institusjonens API-katalog"),(0,a.kt)("li",{parentName:"ul"},"Konsumenter kan se dokumentasjonen til et API"),(0,a.kt)("li",{parentName:"ul"},"Konsumenter kan s\xf8ke om tilgang til data i et API"),(0,a.kt)("li",{parentName:"ul"},"Konsumenter kan, etter godkjent tilgang, hente ut en API-n\xf8kkel for \xe5 hente\nut dataene"),(0,a.kt)("li",{parentName:"ul"},"Konsumenter kan f\xe5 oversikt over sin aktivitet hos de ulike API-ene, for\neksempel p\xe5 hvilke tidspunkt det ble sendt feilmeldinger")),(0,a.kt)("h2",{id:"gravitee-som-api-gateway"},"Gravitee som API gateway"),(0,a.kt)("p",null,"Gravitee har egne komponenter som brukes som gateways. Disse styres av hva som\ner satt opp i API manager, men gateways kj\xf8rer uavhengig av API manager. All\ndatadeling m\xe5 g\xe5 gjennom Gravitee sin API gateway."),(0,a.kt)("p",null,"Som oftest brukes samme gateway foran flere API. En API Gateway er rent teknisk\nen smart HTTP-proxy: Gateway mottar en request, sjekker om du har lov til \xe5\nkontakte dette API-et og sender requesten videre til riktig API."),(0,a.kt)("p",null,"Gravitee sin API gateway har ogs\xe5 annen funksjonalitet, for eksempel caching.\nDette styres av hva du stiller inn i API manager. Selv om Gravitee sin API\ngateway st\xf8tter avanserte omskrivninger av data som overf\xf8res, s\xe5 anbefaler vi\nat dette styres mest mulig av API-et selv, for \xe5 redusere avhengigheten til\nGravitee."),(0,a.kt)("p",null,"En fordel med \xe5 bruke en API gateway, er at API-et selv kan overlate en del av\ntilgangskontrollen til Gravitee. Gravitee gis en bred tilgang til API-et, og s\xe5\nblir det API gateway som autentiserer hver konsument og sjekker at de skal ha\ntilgang, f\xf8r gatewayen ber om data fra API-et p\xe5 vegne av konsumenten."),(0,a.kt)("p",null,"API gateway har noen begrensninger i sin tilgangskontroll: den kan bare sjekke\nhva som er satt opp i API manager, og styrer prim\xe6rt etter ",(0,a.kt)("em",{parentName:"p"},"path")," i RESTfulle\nAPI. Tjenester som trenger mer fingranulert tilgangskontroll m\xe5 h\xe5ndtere dette\nselv, men kan la API gateway h\xe5ndtere autentiseringen og den mer grovkornete\ntilgangskontrollen."),(0,a.kt)("h2",{id:"konsepter-i-gravitee"},"Konsepter i Gravitee"),(0,a.kt)("p",null,"Gravitee bruker noen konsepter som er nyttige \xe5 forklare:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Et ",(0,a.kt)("strong",{parentName:"li"},"API")," er en datatilbyders tjeneste."),(0,a.kt)("li",{parentName:"ul"},"En ",(0,a.kt)("strong",{parentName:"li"},"Application")," er en konsuments tjeneste. N\xe5r du s\xf8ker om tilgang til et\nAPI, m\xe5 du registrere din ",(0,a.kt)("em",{parentName:"li"},"application")," som tilgangen knyttes til."),(0,a.kt)("li",{parentName:"ul"},"En ",(0,a.kt)("strong",{parentName:"li"},"Plan")," er et sett rettigheter og innstillinger (policies) for et API.\nFor eksempel kan et API ha en plan som bare gir lesetilgang til enkelte data\n(styrt av path), og en annen plan som ogs\xe5 gir skrivetilgang. En plan kan ogs\xe5\nsette p\xe5 ekstra headers eller rate-limiting.")),(0,a.kt)("p",null,"Et API kan ha en eller flere planer, og en applikasjon ",(0,a.kt)("strong",{parentName:"p"},"abonnerer")," p\xe5 planer.\nEn applikasjon kan abonnere p\xe5 flere planer, fra ett eller flere API, som er\ndet som styrer hva konsumenten f\xe5r tilgang til."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sammenhengen mellom API og planer",src:n(8228).Z,width:"669",height:"348"})),(0,a.kt)("h3",{id:"eksempel-p\xe5-bruk-av-plans"},"Eksempel p\xe5 bruk av Plans"),(0,a.kt)("p",null,"En datatilbyder kan v\xe6re ",(0,a.kt)("em",{parentName:"p"},"Felles Studentsystem"),". Tjenesteier hos institusjonen\nregistrerer FS som et API, og oppretter noen ",(0,a.kt)("em",{parentName:"p"},"Plans"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lesetilgang til EVU"),(0,a.kt)("li",{parentName:"ul"},"Lesetilgang til studenter"),(0,a.kt)("li",{parentName:"ul"},"Lesetilgang til undervisning"),(0,a.kt)("li",{parentName:"ul"},"Skrivetilgang til personer")),(0,a.kt)("p",null,"Tjenesteeier for en eksamenstjeneste ser dette, og s\xf8ker om tilgang til planen\nsom gir lesetilgang til studentene. Tjenesteeier for institusjonens IAM-l\xf8sning\n(IGA) \xf8nsker tilgang til \xe5 oppdatere personer i FS, og s\xf8ker om skrivetilgang\ntil personer."),(0,a.kt)("p",null,"Hvis en ny tjeneste dukker opp, som trenger andre tilganger enn det som er satt\nopp, kan API-et utvides med flere planer. Hvis en ekstern leverand\xf8r \xf8nsker\ntilgang til personopplysninger, m\xe5 tjenesteeier vurdere om lesetilgangen til\nstudenter gir tilgang til for mye data, og kan opprette en ny Plan som bare gir\ntilgang til akkurat de dataene leverand\xf8ren trenger. Det siste er riktignok\navhengig av hvor godt API-et er designet."),(0,a.kt)("h2",{id:"mer-teknisk-om-gravitee"},"Mer teknisk om Gravitee"),(0,a.kt)("p",null,"IntArk bruker open source versjonen av ",(0,a.kt)("a",{parentName:"p",href:"https://gravitee.io"},"Gravitee API\nmanagement"),". Vi kj\xf8rer kun komponenten som heter ",(0,a.kt)("em",{parentName:"p"},"API\nmanagement"),", ikke ",(0,a.kt)("em",{parentName:"p"},"Access Management")," eller ",(0,a.kt)("em",{parentName:"p"},"Alert Engine"),". Vi leverer versjon\n3 av gravitee."),(0,a.kt)("p",null,"Versjon 3 av Gravitee splitter opp administrasjonen av API-er og konsumenter p\xe5\nto forskjellige adresser. For \xe5 abonnere p\xe5 et API bruker du\n",(0,a.kt)("inlineCode",{parentName:"p"},"api-INSTITUSJON.intark.uh-it.no"),". For \xe5 opprette API m\xe5 du f\xf8rst ha f\xe5tt\nriktige rettigheter i din institusjons Gravitee, og deretter g\xe5 til\n",(0,a.kt)("inlineCode",{parentName:"p"},"api-mgmt-INSTITUSJON.intark.uh-it.no"),"."),(0,a.kt)("p",null,"Ved hjelp av ",(0,a.kt)("em",{parentName:"p"},"rolling upgrades")," vil Gravitee oppgraderes uten nedetid for ",(0,a.kt)("em",{parentName:"p"},"API\ngateway"),". Det betyr at integrasjoner ikke vil merke noe til oppgraderingene,\nselv om brukergrensesnittet vil kunne trenge noe nedetid."),(0,a.kt)("p",null,"For redundans kj\xf8rer vi 2 eller 3 av alle containere som Gravitee bruker."),(0,a.kt)("p",null,"Gravitee ble valgt som API manager og API gateway i IntArk fordi det er en av\nf\xe5 systemer som st\xf8tter distribuert tilgangsstyring av API-er, slik at du kan\nbestemme hvem som skal kunne administrere og hat tilgang til ditt API, og ikke\nalle hos institusjonen. I tillegg er den open source og har mindre lock in enn\nandre produkter."),(0,a.kt)("p",null,"Det er per i dag ikke st\xf8tte for \xe5 sette opp lokale API gateways. Dette vil\nkunne komme i fremtiden, etter m\xe5lbildet i referansearkitekturen som IntArk\nbaserer seg p\xe5."),(0,a.kt)("h2",{id:"se-ogs\xe5"},"Se ogs\xe5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gravitee.io/"},"Gravitee sine egne nettsider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.gravitee.io/"},"Gravitee sin dokumentasjon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/om/komponenter"},"IntArk sin definisjon av API manager og API\ngateway")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/api-manager/api-manager-registrere-enkelt-api"},"Veileder for \xe5 registrere et\nAPI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/api-manager/opprette-plan"},"Veileder for \xe5 opprette en\nPlan")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/datadeling/veiledere/"},"Alle veiledere"))))}p.isMDXComponent=!0},8228:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/planer-og-api-71021f66620b4e47660b84aafdb10816.png"}}]);