function(context, args) {//names:true

    var r = #fs.escrow.charge({cost:"20KGC", is_unlim:false});
    if (r && context.caller != "loosaz") return r;

    if (args === null && context.call != "loosaz") {
        let msg = "`DCHECK OUT` monka.s `DTO BREACH SOME TIER 1 LOCKS!!`\n `DMORE AT`: monka.public";
        #fs.chats.send({channel:"0000", msg:msg})
    }

        if(args.names) {
        var res = #fs.net.locs({locs:true, tier:1, type:"npc"});
        var n = "monka.s {t:[";

        for (let i = 0; i < 3; i++) {
            //return rn(JSON.stringify(res).match(/\b\w+\.\w+\b/g));
            n += ("#s." + rn(JSON.stringify(res).match(/\b\w+\.\w+\b/g)))
            if(i < 2) n +=", "
        }

        return n + "]}     \n\n`D:::MONKA COMMUNICATION:::` \n`Lselect and paste the above to your terminal.`";
    } else {

        for (let i = 0; i < args.t.length; i++) {
            hack(args.t[i]);
        }

        function hack (args){
            var LOCKS = ["EZ_21", "EZ_35", "EZ_40", "c001", "c002", "c003", "l0cket", "DATA_CHECK"]
                , COLORS = ["green", "lime", "yellow", "orange", "red", "purple", "blue", "cyan"]
                , EZ =  ["open", "release", "unlock"]
                , PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
                , KEYS = ["6hh8xw", "cmppiq", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "xwz7ja"]
                , Q = ["pattern ","device","more","humor","angie's","mallory's","che ","will","faythe","hack","pet","safety","service","fact","capture","friend","th3","provides i","gc","CAFE"]
                , A = ["fran_lee","robovac","sentience","sans_comedy","angels","minions","sisters","petra","fountain","helpdesk","bunnybat","get_level","weathernet","eve","resource","bo","heard","teach","outta_juice","poetry"]
                , loc = args
            let open_cnt = function(s) {
                return (s.match(/LOCK_UNLOCKED/g) || []).length
            }
            var locks = {}
                , hint = loc.call(locks)
                , i_err = hint.indexOf("LOCK_ERROR")
            while(true) {
                if(i_err == -1)
                    return [locks, hint]

                var lk = "";
                for(var i = 0; i < LOCKS.length; i++)
                    if(hint.indexOf(LOCKS[i]) > i_err)
                    {
                        lk = LOCKS[i]
                        break;
                    }
                var breached_locks = open_cnt(hint)
                for(var i = 0; true; i++) {
                    if(lk == "c001")
                    {
                        locks.c001 = COLORS[i%COLORS.length]
                        locks.color_digit = locks.c001.length
                    }
                    else if(lk == "c002")
                    {
                        locks.c002 = COLORS[i%COLORS.length]
                        locks.c002_complement = COLORS[(i+4)%COLORS.length]
                    }
                    else if(lk == "c003")
                    {
                        locks.c003 = COLORS[i%COLORS.length]
                        locks.c003_triad_1 = COLORS[(i+3)%COLORS.length]
                        locks.c003_triad_2 = COLORS[(i+5)%COLORS.length]
                    }
                    else if(lk == "EZ_21")
                        locks.EZ_21 = EZ[i%EZ.length]
                    else if(lk == "EZ_35")
                    {
                        if(hint.indexOf("digit") == -1)
                            locks.EZ_35 = EZ[i%EZ.length]
                        else
                            locks.digit = i%10
                    }
                    else if(lk == "EZ_40")
                    {
                        if(hint.indexOf("prime") == -1)
                            locks.EZ_40 = EZ[i%EZ.length]
                        else
                            locks.ez_prime = PRIMES[(i+25)%PRIMES.length]
                    }
                    else if(lk == "l0cket")
                    {
                        locks.l0cket = KEYS[i%KEYS.length]
                    }
                    else if(lk == "DATA_CHECK")
                    {
                        locks.DATA_CHECK=""
                        var q = args.call(locks).split("\n")
                        var ans = ""
                        q.forEach(pullAns)
                        locks.DATA_CHECK = ans
                    }
                    else
                        return { ok:false, state:locks, msg:hint}

                    hint = loc.call(locks);
                    i_err = hint.indexOf("LOCK_ERROR")
                    if(open_cnt(hint) > breached_locks || i_err == -1)
                    {
                        break;
                    }
                    function pullAns(q){
                        for(var i = 0; i < Q.length; i++){
                            if (q.includes(Q[i]))
                            {
                                ans += A[i]
                            }
                        }
                    }
                }
            }
        }

    }

    function rn(a) {
        //return Math.floor(Math.random() * array.length);
        let ia = Math.floor(Math.random() * a.length); // Gera um índice aleatório
        return a[ia]; // Retorna o elemento no índice aleatório
    }
}
