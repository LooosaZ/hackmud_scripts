function(context, args) //info:false,target:#s.npc.loc,report:true,xfer:"loosaz"
{
    let
        rsp, lastrsp,
        lk,
        ez = ["open","release","unlock"],
        colors = "red,orange,yellow,lime,green,cyan,blue,purple".split(','),
        n1 = "is not the",
        l0cket = "sa23uw,tvfkyq,uphlaw,vc2c7q,xwz7ja,i874y3,72umy0,5c7e1r,hc3b69,nfijix,4jitu5,6hh8xw,9p65cu,j1aa4n,eoq6de,vthf6e".split(','),
        primes = [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,57,59,61,67,71,73,79,83,89,91,97],
        calls = {
            EZ:0,
            c00:0,
            DATA_CHECK:0,
            l0cket:0,
            magnara:0,
            sn_w_glock:0,
            CON_SPEC:0,
            acct_nt:0
        },
        rpt = {}, //rpt
        upgrades = #hs.sys.upgrades({full:true}),
        k3ys = [],
        caller = context.caller,
        lib = #fs.scripts.lib(),
        glock = [
            {magician:1089},
            {secret:7},
            {elite:1337},
            {monolithic:2001},
            {hunter:3006},
            {secure:443},
            {beast:666},
            {meaning:42},
            {special:38}
        ],
        bal = #ms.accts.balance()-7,
        kv = {
            EZ_21:"open",
            EZ_35:"open",
            digit:0,
            EZ_40:"open",
            ez_prime:2,
            c001:colors[0],
            color_digit:3,
            c002:colors[1],
            c002_complement:colors[5],
            c003:colors[2],
            c003_triad_1:colors[7],
            c003_triad_2:colors[5],
            DATA_CHECK:"",
            l0cket:"cmppiq",
            magnara:"stav",
            sn_w_glock:0,
            CON_SPEC:"LMN",
            acct_nt:0
        },
        correctKv = [],
        guessedKv = [],
        txs,
        skipRspC = false,
        acct_nt_guesses = [0],
        acct_nt_count = 0

    kv["CON_SPEC"] = {call:a=>a.s.split(a.d).length-1}//credit to dtr

    args=args||{}
    if(args.info || !lib.is_def(args.target)) {return "Input a target with target:#s.npc.loc\nxfer:\"user\" an alt user of yours to transfer your spare cash to\nreport:true (optional) to receive detailed feedback\n\nThis script works most of the time (provided you have the keys for l0ckbox) if it doesnt work, run it a few more times and make small transactions inbetween runs."}
    if (!lib.is_def(args.xfer)) return "Please pick an xfer:\"user\" to transfer excess funds to"

    bal>0?#ms.accts.xfer_gc_to({to:args.xfer,amount:bal}):0

    for (let u of upgrades)
    {
        if (u.k3y)
        {
            k3ys.push(u)
            if (u.loaded)
            {
                #ms.sys.manage({unload:u.i})
            }
        }
    }

    let lastCalls = 0, totalCalls = 0
    rspC()
    while (tmo(4e3))
    {
        if (!rsp)
        {
            rpt["msg"] = "error, target does not exist"
            break
        }
        if (rspI("chain your hardline") || rspI("kernel"))
        {
            return rsp
        }

        totalCalls += lastCalls, lastCalls = 0
        if (rspI("Connection terminated"))
        {
            rpt["success"] = true
            break
        } else {
            if (skipRspC) {skipRspC=false} else {rspC()}
        }
        if (rspI("Connection terminated"))
        {
            rpt["success"] = true
            break
        }

        if (rsp.includes(`\`NLOCK_UNLOCKED\``))
        {
            let temp = rsp.split("\n")
            for (let i of temp)
            {
                if (/LOCK_UNLOCKED/.test(i))
                {
                    let j = i.split(" ")[1]
                    if (!correctKv[j])
                    {
                        correctKv[j] = true
                    }
                }
            }
        }

        if (rspI(n1))
        {
            if (rspI("unlock command"))
            {
                calls.EZ++
                for (let i in kv)
                {
                    if (/EZ_/.test(i) && !correctKv[i])
                    {
                        kv[i] = ez[(ez.indexOf(kv[i])+1)%3]
                    }
                }
            }
            else if (/\bdigit\b/.test(rsp) && !correctKv["EZ_35"])
            {
                calls.EZ++
                kv.digit++
                kv.digit%=10
                guessedKv["EZ_35"] = true
            }
            else if (/\bcorrect prime\b/.test(rsp) && !correctKv["EZ_40"])
            {
                calls.EZ++
                let temp = primes.shift()
                primes.push(temp)
                kv["ez_prime"] = temp
                guessedKv["EZ_40"] = true
            }
            else if (/correct color/.test(rsp))
            {
                calls.c00++
                if (!correctKv["c001"])
                {
                    let temp = colors.indexOf(kv.c001)
                    kv.c001 = colors[(temp+1)%8]
                    kv.color_digit = colors[(temp+1)%8].length
                }
                if (!correctKv["c002"])
                {
                    let temp = colors.indexOf(kv.c002)
                    kv.c002 = colors[(temp+1)%8]
                    kv.c002_complement = colors[(temp+5)%8]
                }
                if (!correctKv["c003"])
                {
                    let temp = colors.indexOf(kv.c003)
                    kv.c003 = colors[(temp+1)%8]
                    kv.c003_triad_1 = colors[(temp+6)%8]
                    kv.c003_triad_2 = colors[(temp+4)%8]
                }

            }
            else if (/correct security k3y/.test(rsp))//l0cket
            {
                calls.l0cket++
                kv.l0cket = l0cket.shift()
            }
        }
        else if (/\+{6}/.test(rsp))//DATA_CHECL
        {
            let data_check = rsp.split("\n")
            if (data_check.length != 3)
            {
                rpt["msg"] = "error, DATA_CHECK error, less then 3 questions"
                break
            }
            let string = "";
            for (let i of data_check)
            {
                string += #fs.lore.data_check({lookup:i}).answer
            }
            kv["DATA_CHECK"] = string
            calls["DATA_CHECK"]++
        }
        else if (/balance/.test(rsp)) //sn_w_glock
        {
            calls["sn_w_glock"]++
            for (let i of glock)
            {
                for (let j in i)
                {
                    if (rspI(j))
                    {
                        #ms.accts.xfer_gc_to({amount:i[j]})
                        kv["acct_nt_1"] = kv.acct_nt
                        kv.acct_nt = 0
                        acct_nt_guesses = [0]
                        txs = undefined
                    }
                }
            }
        }
        else if (/(spent|earned|What was|withdrawal|deposit)/.test(rsp)) //acct_nt
        {
            let skipTxsCalc = true
            let count = 0
            if (!txs) txs = #hs.accts.transactions({count:25}).map(e =>
            {
                e.i = count++
                e["time"] = parseInt(lib.to_game_timestr(e.time).replace(".",""));
                (e.recipient==caller)?null:e["amount"]*=-1
                skipTxsCalc = false
                return e
            })

            if (/withdrawal|deposit/.test(rsp)) //only one transaction
            {
                let ts = parseInt(/(\d+\.\d+)/.exec(rsp)[1].replace(".",""))

                if (!skipTxsCalc)
                {
                    txs = txs.map(e=>
                    {
                        e.time = Math.abs(e.time-ts)
                        e.amount = Math.abs(e.amount)
                        return e
                    }).sort((a,b)=>{return b.time-a.time})

                    if (/withdrawal/.test(rsp))
                    {
                        txs = txs.filter(e=>
                        {
                            return e.recipient != caller
                        })
                    }
                    else
                    {
                        txs = txs.filter(e=>
                        {
                            return e.recipient == caller
                        })
                    }
                }

                let tempTx = txs.shift().amount
                if (acct_nt_guesses.indexOf(tempTx) == -1)
                {
                    kv["acct_nt"] = tempTx
                    acct_nt_guesses.push(tempTx)
                    rpt["acct_nt_guesses"] = acct_nt_guesses
                    calls["acct_nt"]++
                }
                else
                {
                    skipRspC = true
                }
            }
            else // many transactions evaluation
            {
                let ts = /(\d+\.\d+)\D+(\d+\.\d+)/.exec(rsp)
                ts.shift()
                ts = ts.map(e=>{return parseInt(e.replace(".",""))})

                if (!skipTxsCalc)
                {
                    txs = txs.filter(e=>{
                        return !(e.time<ts[0])&&!(e.time>ts[1])
                    })
                    if (!/ net /.test(rsp))
                    {
                        if (/with memos/.test(rsp))
                        {
                            txs = txs.filter(e=>{return e.memo})
                        }
                        else
                        {
                            txs = txs.filter(e=>{return !e.memo})
                        }
                    }
                }
                let numEarly = 0, numLate = 0

                numEarly = Math.floor(Math.random()*txs.length)
                numLate = Math.floor(Math.random()*(txs.length-numEarly))

                let guess = txs.slice(numLate,(-numEarly)||1e2)
                rpt["acct_nt_rangemin"] = numLate
                rpt["acct_nt_rangemax"] = numEarly

                guess = guess.reduce((a,o)=>{return a+o.amount},0)
                if (!/ net /.test(rsp)) guess = Math.abs(guess)
                if (acct_nt_guesses.indexOf(guess) == -1)
                {
                    acct_nt_guesses.push(guess)
                    rpt["acct_nt_guesses"] = acct_nt_guesses
                    kv["acct_nt"] = guess
                    calls["acct_nt"]++
                }
                else
                {
                    skipRspC = true
                }
                acct_nt_count++
            }
        }
        else if (rspI("next three letters"))
        {
            let az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), // a to z
                sq = /\w{3}(?=\n)/.exec(rsp)[0].split("").map(x=>az.indexOf(x)), // sequence
                nr = [sq[2]-sq[1],sq[1]-sq[0]]
            kv["CON_SPEC"] =
                az[sq[2]+nr[1]]					+
                az[sq[2]+nr[1]  +nr[0]] +
                az[sq[2]+nr[1]*2+nr[0]]
            calls["CON_SPEC"]++
        }
        else if (rspI("magnara"))
        {
            let letters = /\b\w+$/.exec(rsp)[0]
            let answers = #fs.dictionary.lookup({letters})
            kv["magnara"] = answers.msg[Math.floor(Math.random()*answers.msg.length)]
        }
        else if (rspI("To unlock, please load the appropriate k3y:"))
        {
            let reqK3y = /(......)$/.exec(rsp)[1]
            rpt["l0ckbox"] = reqK3y
            let error = true
            for (let i of k3ys)
            {
                if (i.k3y.includes(reqK3y))
                {
                    error = false
                    #ms.sys.manage({load:i.i})
                    break
                }
            }
            if (error)
            {
                rpt["msg"] = "error, l0ckbox requests absent key:"+reqK3y
                break
            }
        }
        else
        {
            rpt["msg"] = "error, unrecognized input, "+(lastCalls+totalCalls)
            break
        }
    }
    rpt["kv"] = kv
    rpt["rsp"] = rsp
    rpt["lock_calls"] = calls
    rpt["ms"] = Date.now()-_START
    rpt["calls"] = totalCalls+lastCalls
    rpt["timestamp"] = Date.now()
    rpt["caller"] = caller
    rpt["target"] = args.target.name
    rpt["xfer"] = args.xfer
    rpt["script"] = context.this_script

    if (args.report) return rpt

    function rspC()
    {
        lastrsp = rsp
        rsp = args.target.call(kv)
        lastCalls++
        return rsp
    }

    function rspI(x)
    {
        return rsp.includes(x)
    }

    function tmo(x)
    {//timeout checker
        x?0:x=3900 //npcs stop paying out after 4s of runtime
        return Date.now()-_START<x
    }

}