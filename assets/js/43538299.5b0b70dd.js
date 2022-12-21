"use strict";(self.webpackChunkdocs_sikt_no=self.webpackChunkdocs_sikt_no||[]).push([[7575],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},k=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),d=m(t),v=a,u=d["".concat(l,".").concat(v)]||d[v]||p[v]||o;return t?r.createElement(u,s(s({ref:n},k),{},{components:t})):r.createElement(u,s({ref:n},k))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=t(7462),a=(t(7294),t(3905));const o={title:"Xymon-integrasjon p\xe5 verkt\xf8ykasser",last_update:{date:new Date("2021-08-26T00:00:00.000Z"),author:"morten.brekkevold@sikt.no"}},s=void 0,i={unversionedId:"nettadministrasjon/xymon",id:"nettadministrasjon/xymon",title:"Xymon-integrasjon p\xe5 verkt\xf8ykasser",description:"Innledning",source:"@site/docs/nettadministrasjon/xymon.md",sourceDirName:"nettadministrasjon",slug:"/nettadministrasjon/xymon",permalink:"/docs/nettadministrasjon/xymon",draft:!1,editUrl:"https://github.com/sikt-no/docs/tree/master/docs/nettadministrasjon/xymon.md",tags:[],version:"current",lastUpdatedBy:"morten.brekkevold@sikt.no",lastUpdatedAt:1629936e3,formattedLastUpdatedAt:"Aug 26, 2021",frontMatter:{title:"Xymon-integrasjon p\xe5 verkt\xf8ykasser",last_update:{date:"2021-08-26T00:00:00.000Z",author:"morten.brekkevold@sikt.no"}},sidebar:"nettadministrasjon",previous:{title:"Brukerdokumentasjon Verkt\xf8ykasser",permalink:"/docs/nettadministrasjon/brukerdok"},next:{title:"Firewall builder",permalink:"/docs/nettadministrasjon/fwbuilder"}},l={},m=[{value:"Innledning",id:"innledning",level:2},{value:"Tjenester",id:"tjenester",level:2},{value:"Brukerdokumentasjon",id:"brukerdokumentasjon",level:2},{value:"Maskiner som overv\xe5kes med Xymon",id:"maskiner-som-overv\xe5kes-med-xymon",level:3},{value:"Overv\xe5king av grupper",id:"overv\xe5king-av-grupper",level:3},{value:"Overv\xe5king av maskiner",id:"overv\xe5king-av-maskiner",level:3},{value:"Installere xymon-client p\xe5 klienten",id:"installere-xymon-client-p\xe5-klienten",level:3},{value:"Varsling",id:"varsling",level:3},{value:"Kontaktadresser",id:"kontaktadresser",level:2}],k={toc:m};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"innledning"},"Innledning"),(0,a.kt)("p",null,"Xymon (tidl. ",(0,a.kt)("em",{parentName:"p"},"Hobbit"),") er et tjenesteoverv\xe5kningsverkt\xf8y som kj\xf8rer p\xe5\nverkt\xf8ykassen, og som er integrert med NAV-installasjonen der. Det er\nkun utstyr som legges inn i kategorien ",(0,a.kt)("inlineCode",{parentName:"p"},"SRV")," i NAV som blir automatisk\noverv\xe5ket av Xymon. For mer informasjon om Xymon, se ",(0,a.kt)("a",{parentName:"p",href:"https://xymon.sourceforge.io/"},"Xymons\nhjemmesider.")),(0,a.kt)("p",null,"Da Hobbit ble omd\xf8pt til Xymon, var det en del begrepsbruk og\nkonfigurasjonsfiler som ogs\xe5 endret seg. Dersom du er vant med de gamle\nfilene og begrepene, kan du lese\n",(0,a.kt)("a",{parentName:"p",href:"https://xymon.com/help/upgrade-to-430.txt"},"Xymons"),"\noppgraderingsnotater."),(0,a.kt)("h2",{id:"tjenester"},"Tjenester"),(0,a.kt)("p",null,"Det er Xymon og Apache som m\xe5 kj\xf8re for at tjenesten skal virke."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"xymon")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Daemon:"),(0,a.kt)("li",{parentName:"ul"},"Start/stop: ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/init.d/xymon {start/stop/restart}")),(0,a.kt)("li",{parentName:"ul"},"Configfiler: ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/xymon/"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"apache2")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Daemon: ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/sbin/apache2")),(0,a.kt)("li",{parentName:"ul"},"Start/stopp: ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/init.d/apache2 {start/stop/restart/reload}")),(0,a.kt)("li",{parentName:"ul"},"config: ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/apache2/sites-enabled/25-nav-secure.conf"))),(0,a.kt)("h2",{id:"brukerdokumentasjon"},"Brukerdokumentasjon"),(0,a.kt)("h3",{id:"maskiner-som-overv\xe5kes-med-xymon"},"Maskiner som overv\xe5kes med Xymon"),(0,a.kt)("p",null,"Hvert kvarter kj\xf8rer et script p\xe5 verkt\xf8ykassen som konfigurerer Xymon\ntil \xe5 overv\xe5ke alle maskiner fra ",(0,a.kt)("inlineCode",{parentName:"p"},"SRV"),"-kategorien i NAV. Dette gj\xf8r at\ndet er bare ett sted for \xe5 vedlikeholde listen over servere som skal\noverv\xe5kes i NAV og Xymon. N\xe5r en maskin registreres i NAV, kan den\nlegges inn i opptil flere grupper (",(0,a.kt)("em",{parentName:"p"},"device groups"),"). Disse gruppene blir\nogs\xe5 brukt som grupper i Xymon."),(0,a.kt)("h3",{id:"overv\xe5king-av-grupper"},"Overv\xe5king av grupper"),(0,a.kt)("p",null,"Man kan sette opp overv\xe5king av bestemte services for hver enkelt\ngruppe. Man kan f.eks overv\xe5ke SMTP for alle servere som ligger i\nmail-gruppa. Dette gj\xf8res ved \xe5 logge p\xe5 verkt\xf8ykassen med ssh. Man\nredigerer filen ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/nav/navsrv2hobbit.conf"),". Her er et eksempel p\xe5\nhvordan man kan gj\xf8re det:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[ALL]\nservices = ssh\n\n[MAIL]\nservices = smtp\n")),(0,a.kt)("p",null,"Her ser vi at ssh overv\xe5kes for samtlige maskiner, mens SMTP overv\xe5kes\nbare for den gruppen av maskiner som befinner seg i gruppen MAIL i NAV.\nSSH ligger som standardoverv\xe5king for samtlige maskiner."),(0,a.kt)("h3",{id:"overv\xe5king-av-maskiner"},"Overv\xe5king av maskiner"),(0,a.kt)("p",null,"Man kan sette opp bestemte overv\xe5kinger for hver enkelt maskin, ved \xe5\nlegge til sine egne konfigurasjonsfiler p\xe5 verkt\xf8ykassen, under\n",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/xymon/analysis.d/"),". Verkt\xf8ykassen overv\xe5ker seg selv med Xymon p\xe5\ndenne m\xe5ten, og konfigurasjonen som brukes her kan ses i filen ",(0,a.kt)("inlineCode",{parentName:"p"},"vk.cfg"),"."),(0,a.kt)("p",null,"Et eksempel p\xe5 en slik konfigurasjonsfil kan se slik ut:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HOST=testserver.uninett.no\nPROC        cfenvd 1 1 yellow\nPROC        cfservd 1 1 red\nPROC        munin-node 1 -1 red\nPROC        sshd\nPROC        ntpd 1 1 yellow\nDISK        /home 95 98\nDISK        /var/log 95 98\n")),(0,a.kt)("p",null,"Her ser vi hvilke bestemte prosesser som er satt opp til overv\xe5king med\nat det st\xe5r ",(0,a.kt)("inlineCode",{parentName:"p"},"PROC")," foran prosessnavnet. Bak hver prosess kan man ha et\ntall som angir hvor mange prosesser som kan kj\xf8res. P\xe5 prosessen\n",(0,a.kt)("inlineCode",{parentName:"p"},"cfenvd")," st\xe5r det f\xf8rst tallet ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", som betyr at det minimum m\xe5 v\xe6re \xe9n\nprosess (",(0,a.kt)("em",{parentName:"p"},"mincount"),") ved det navnet og bak tallet st\xe5r det ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\n(",(0,a.kt)("em",{parentName:"p"},"maxcount"),"). Dette betyr at det kan kun v\xe6re \xe9n (og bare \xe9n) prosess av\n",(0,a.kt)("inlineCode",{parentName:"p"},"cfenvd"),". Hvis ikke dette er oppfylt vil den blir markert som gul i\nXymon, i motsetning til ",(0,a.kt)("inlineCode",{parentName:"p"},"cfservd"),", der det vil bli markert som r\xf8dt. Man\nkan p\xe5 denne m\xe5ten angi hvor mange prosesser som skal kj\xf8re. I tillegg\nkan man bruke verdien ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),", som betyr at det kan v\xe6re uendelig mange\nprosesser som kj\xf8res."),(0,a.kt)("p",null,"I tillegg kan man sette opp overv\xe5king av disk-partisjoner. Hvis ",(0,a.kt)("inlineCode",{parentName:"p"},"/home"),"\n(som i eks. over) fylles opp til 95% vil den bli gul, mens kommer den p\xe5\n98% vil den flagges r\xf8d i Xymon."),(0,a.kt)("p",null,"Som standard p\xe5 samtlige servere st\xe5r det f\xf8lgende regler\n(",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/xymon/analysis.cfg"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DEFAULT\nUP      1h\nLOAD    5.0 10.0\nDISK    * 90 95\nMEMPHYS 100 101\nMEMSWAP 50 80\nMEMACT  90 97\n")),(0,a.kt)("h3",{id:"installere-xymon-client-p\xe5-klienten"},"Installere xymon-client p\xe5 klienten"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Programmet ",(0,a.kt)("strong",{parentName:"li"},"xymon-client")," m\xe5 installeres p\xe5 klienten som skal\noverv\xe5kes."),(0,a.kt)("li",{parentName:"ul"},"IP-adressen til verkt\xf8ykassen m\xe5 settes i\n",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/default/xymon-client"),", slik at xymon-client vet hvor den skal\nrapportere."),(0,a.kt)("li",{parentName:"ul"},"For Windows-maskiner som skal overv\xe5kes m\xe5\n",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("a",{parentName:"em",href:"http://bbwin.sourceforge.net/"},"BBWin"))," installeres p\xe5 klienten.")),(0,a.kt)("h3",{id:"varsling"},"Varsling"),(0,a.kt)("p",null,"Varsling fra Xymon er integrert med NAVs hendelses- og alarmsystem, og\nstyres gjennom din personlige alarmprofil i NAV. Her viser vi til\n",(0,a.kt)("a",{parentName:"p",href:"https://nav.readthedocs.io/",title:"G\xe5 til NAVs\ndokumentasjon"},"dokumentasjon om NAV"),"."),(0,a.kt)("h2",{id:"kontaktadresser"},"Kontaktadresser"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:kontakt@sikt.no"},"kontakt@sikt.no"))))}p.isMDXComponent=!0}}]);