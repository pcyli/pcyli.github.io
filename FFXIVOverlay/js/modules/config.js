define({
    petShading: ['YOU', "Limit Break", "Ifrit", "Titan", "Garuda", "Eos", "Selene", "emerald", "topaz", "Chocobo"],
    tank: {
        classes: ["Gla", "Pld", "Mrd", "War", "Drk", "Gnb"],
        color: 'rgba(41,112,243,0.5)',
        topScoreProp: 'damagetaken'
    },
    dps: {
        classes: ["Pgl", "Mnk", "Lnc", "Drg", "Arc", "Brd", "Rog", "Nin", "Acn", "Smn", "Thm", "Blm", "Mch", "Sam", "Rdm", "Dnc"],
        color: 'rgba(200,3,8,0.5)',
        topScoreProp: 'encdps'
    },
    heal: {
        classes: ["Cnj", "Whm", "Sch", "Ast"],
        color: 'rgba(107,240,86,0.5)',
        topScoreProp: 'enchps'
    },
    base: {
        color: 'rgba(128,0,255,0.5)',
        defaultView: 'dps',
        baselineText: "Time:<span class='enc'>{duration}</span> &nbsp;&nbsp;&nbsp;Total DPS:<span class='enc'>{dps}</span> &nbsp;&nbsp;&nbsp;Best Hit:<span class='enc'>{maxhit}</span>"
    }
});