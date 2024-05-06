function(e,t){//info:false,target:#s.npc.loc,report:true,xfer:"loosaz"

//	[["open","release","unlock"],[3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,57,59,61,67,71,73,79,83,89,91,97],{"EZ":0,"c00":0,"DATA_CHECK":0,"l0cket":0,"magnara":0,"sn_w_glock":0,"CON_SPEC":0,"acct_nt":0},{"full":true},[{"magician":1089},{"secret":7},{"elite":1337},{"monolithic":2001},{"hunter":3006},{"secure":443},{"beast":666},{"meaning":42},{"special":38}],[0],"now","includes","target","call","red,orange,yellow,lime,green,cyan,blue,purple","split","is not the","sa23uw,tvfkyq,uphlaw,vc2c7q,xwz7ja,i874y3,72umy0,5c7e1r,hc3b69,nfijix,4jitu5,6hh8xw,9p65cu,j1aa4n,eoq6de,vthf6e","caller","EZ_21","open","EZ_35","digit","EZ_40","ez_prime","c001","color_digit","c002","c002_complement","c003","c003_triad_1","c003_triad_2","DATA_CHECK","l0cket","cmppiq","magnara","stav","sn_w_glock","CON_SPEC","LMN","acct_nt","length","info","is_def","Input a target with target:#s.npc.loc\nxfer:\"user\" an alt user of yours to transfer your spare cash to\nreport:true (optional) to receive detailed feedback\n\nThis script works most of the time (provided you have the keys for l0ckbox) if it doesnt work, run it a few more times and make small transactions inbetween runs.","xfer","Please pick an xfer:\"user\" to transfer excess funds to","amount","k3y","push","loaded","unload","msg","error, target does not exist","chain your hardline","kernel","Connection terminated","success","`NLOCK_UNLOCKED`","\n","test","unlock command","indexOf","shift","c00","error, DATA_CHECK error, less then 3 questions","lookup","answer","acct_nt_1","count","map","time","to_game_timestr","replace","recipient",null,"exec","abs","sort","filter","acct_nt_guesses","memo","floor","random","slice","acct_nt_rangemin","acct_nt_rangemax","reduce","next three letters","ABCDEFGHIJKLMNOPQRSTUVWXYZ","letters","To unlock, please load the appropriate k3y:","l0ckbox","load","error, l0ckbox requests absent key:","error, unrecognized input, ","kv","rsp","lock_calls","ms","calls","timestamp","name","script","this_script","report"]	
let $,i,[r,l,n,f,s,a,o,c,b,x,S,k,w,d,g,I,T,u,C,j,z,P,U,p,B,R,_,h,y,D,E,m,Z,L,N,O,v,K,q,J,M,W,X,A,F,G,H,Q,V,Y,ee,te,$e,ie,re,le,ne,fe,se,ae,oe,ce,be,xe,Se,ke,we,de,ge,Ie,Te,ue,Ce,je,ze,Pe,Ue,pe,Be,Re,_e,he,ye,De,Ee,me,Ze,Le,Ne,Oe,ve,Ke,qe,Je,Me,We,Xe,Ae,Fe,Ge,He,Qe]=JSON.parse(#ms.scripts.quine().split`	`[1]),Ve=Math,Ye=parseInt,rspI=e=>$[c](e),rspC=()=>{$=t[b][x](xt)
dt++
return $},et=r,tt=S[k](","),$t=w,it=d[k](","),rt=l,lt=n,nt={},ft=#ms.sys.upgrades(f),st=[],at=e[g],ot=#ms.scripts.lib(),ct=s,bt=#ms.accts.balance()-7,xt={[I]:T,[u]:T,[C]:0,[j]:T,[z]:2,[P]:tt[0],[U]:3,[p]:tt[1],[B]:tt[5],[R]:tt[2],[_]:tt[7],[h]:tt[5],[y]:"",[D]:E,[m]:Z,[L]:0,[N]:O,[v]:0},St=[],kt=!1,wt=a
xt[N]={[x](e){return e.s[k](e.d)[K]-1}}
if((t=t||{})[q]||!ot[J](t[b]))return M
if(!ot[J](t[W]))return X
bt>0&&#ms.accts.xfer_gc_to({to:t[W],[A]:bt})
for(let e of ft)if(e[F]){st[G](e)
e[H]&&#ms.sys.manage({[Q]:e.i})}let dt=0,gt=0
rspC()
for(;4e3>Date[o]()-_ST;){if(!$){nt[V]=Y
break}if(rspI(ee)||rspI(te))return $
gt+=dt,dt=0
if(rspI($e)){nt[ie]=!0
break}kt?kt=!1:rspC()
if(rspI($e)){nt[ie]=!0
break}if($[c](re)){let e=$[k](le)
for(let t of e)if(/LOCK_UNLOCKED/[ne](t)){let e=t[k](" ")[1]
St[e]||(St[e]=!0)}}if(rspI($t)){if(rspI(fe)){lt.EZ++
for(let e in xt)/EZ_/[ne](e)&&!St[e]&&(xt[e]=et[(et[se](xt[e])+1)%3])}else if(/\bdigit\b/[ne]($)&&!St[u]){lt.EZ++
xt[C]++
xt[C]%=10}else if(/\bcorrect prime\b/[ne]($)&&!St[j]){lt.EZ++
let e=rt[ae]()
rt[G](e)
xt[z]=e}else if(/correct color/[ne]($)){lt[oe]++
if(!St[P]){let e=tt[se](xt[P])
xt[P]=tt[(e+1)%8]
xt[U]=tt[(e+1)%8][K]}if(!St[p]){let e=tt[se](xt[p])
xt[p]=tt[(e+1)%8]
xt[B]=tt[(e+5)%8]}if(!St[R]){let e=tt[se](xt[R])
xt[R]=tt[(e+1)%8]
xt[_]=tt[(e+6)%8]
xt[h]=tt[(e+4)%8]}}else if(/correct security k3y/[ne]($)){lt[D]++
xt[D]=it[ae]()}}else if(/\+{6}/[ne]($)){let e=$[k](le)
if(3!=e[K]){nt[V]=ce
break}let t=""
for(let $ of e)t+=#ms.lore.data_check({[be]:$})[xe]
xt[y]=t
lt[y]++}else if(/balance/[ne]($)){lt[L]++
for(let e of ct)for(let t in e)if(rspI(t)){#ms.accts.xfer_gc_to({[A]:e[t]})
xt[Se]=xt[v]
xt[v]=0
wt=[0]
i=void 0}}else if(/(spent|earned|What was|withdrawal|deposit)/[ne]($)){let e=!0,t=0
i||(i=#ms.accts.transactions({[ke]:25})[we]($=>{$.i=t++
$[de]=Ye(ot[ge]($[de])[Ie](".",""))
$[Te]==at||($[A]*=-1)
e=!1
return $}))
if(/withdrawal|deposit/[ne]($)){let t=Ye(/(\d+\.\d+)/[Ce]($)[1][Ie](".",""))
if(!e){i=i[we](e=>{e[de]=Ve[je](e[de]-t)
e[A]=Ve[je](e[A])
return e})[ze]((e,t)=>t[de]-e[de])
i=/withdrawal/[ne]($)?i[Pe](e=>e[Te]!=at):i[Pe](e=>e[Te]==at)}let r=i[ae]()[A]
if(-1==wt[se](r)){xt[v]=r
wt[G](r)
nt[Ue]=wt
lt[v]++}else kt=!0}else{let t=/(\d+\.\d+)\D+(\d+\.\d+)/[Ce]($)
t[ae]()
t=t[we](e=>Ye(e[Ie](".","")))
if(!e){i=i[Pe](e=>!(e[de]<t[0]||e[de]>t[1]));/ net /[ne]($)||(i=/with memos/[ne]($)?i[Pe](e=>e[pe]):i[Pe](e=>!e[pe]))}let r=0,l=0
r=Ve[Be](Ve[Re]()*i[K])
l=Ve[Be](Ve[Re]()*(i[K]-r))
let n=i[_e](l,-r||100)
nt[he]=l
nt[ye]=r
n=n[De]((e,t)=>e+t[A],0);/ net /[ne]($)||(n=Ve[je](n))
if(-1==wt[se](n)){wt[G](n)
nt[Ue]=wt
xt[v]=n
lt[v]++}else kt=!0}}else if(rspI(Ee)){let e=me[k](""),t=/\w{3}(?=\n)/[Ce]($)[0][k]("")[we](t=>e[se](t)),i=[t[2]-t[1],t[1]-t[0]]
xt[N]=e[t[2]+i[1]]+e[t[2]+i[1]+i[0]]+e[t[2]+2*i[1]+i[0]]
lt[N]++}else if(rspI(m)){let e=/\b\w+$/[Ce]($)[0],t=#ms.dictionary.lookup({[Ze]:e})
xt[m]=t[V][Ve[Be](Ve[Re]()*t[V][K])]}else{if(!rspI(Le)){nt[V]=Ke+(dt+gt)
break}{let e=/(......)$/[Ce]($)[1]
nt[Ne]=e
let t=!0
for(let $ of st)if($[F][c](e)){t=!1
#ms.sys.manage({[Oe]:$.i})
break}if(t){nt[V]=ve+e
break}}}}nt[qe]=xt
nt[Je]=$
nt[Me]=lt
nt[We]=Date[o]()-_ST
nt[Xe]=gt+dt
nt[Ae]=Date[o]()
nt[g]=at
nt[b]=t[b][Fe]
nt[W]=t[W]
nt[Ge]=e[He]
return t[Qe]?nt:void 0}