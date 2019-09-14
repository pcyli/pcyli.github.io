define(['./effects'], function (effects) {

    return {
        dps:  {
            headerConfig:
                [
                    {text: "Job", act_variable: 'JobOrName', width: "2em", align: "center"},
                    {text: "Name", act_variable: 'name', width: "9em", align: "center"},
                    {text: "DPS", act_variable: 'encdps', width: "4em", align: "center"},
                    {text: "DMG", act_variable: 'damage', width: "3.3em", align: "right"},
                    {text: "", act_variable: '', width: "3em", align: "left"},
                    {text: "Crit", act_variable: 'crithit%', width: "2.5em", align: "center"},
                    {text: "DHit", act_variable: 'DirectHitPct', width: "2.5em", align: "center"},
                    {text: "Best Hit", act_variable: 'maxhit', width: "10em", align: "center"}
                ],
            charConfig:
                [
                    {
                        html:   "<img src='./img/colorbg/{JobOrName}.png' onerror='$(this).attr(\"src\", \"./img/error.png\");' style='width=60%;height:60%;' />",
                        align:  "center",
                        effect: effects.scoreBarEffect
                    },
                    {text: "{name}", width: "", align: "center", effect: effects.myCharacterEffect},
                    {text: "{encdps}", width: "", align: "center"},
                    {text: "{damage}", width: "", align: "right"},
                    {text: "({damage%})", width: "", align: "left"},
                    {text: "{crithit%}", width: "", align: "center"},
                    {text: "{DirectHitPct}", width: "", align: "center"},
                    //{text: "{misses}", width: "", align: "center", effect: effects.redTextEffect},
                    {text: "{maxhit}", width: "", align: "center"}
                ]
        },
        tank: {
            headerConfig:
                [
                    {text: "Job", act_variable: 'JobOrName', width: "2em", align: "center"},
                    {text: "Name", act_variable: 'name', width: "9em", align: "center"},
                    {text: "DmgTkn", act_variable: 'damagetaken', width: "4em", align: "center"},
                    {text: "Block%", act_variable: 'BlockPct', width: "3.5em", align: "center"},
                    {text: "Parry%", act_variable: 'ParryPct', width: "3.5em", align: "center"},
                    {text: "Deaths", act_variable: 'deaths', width: "2.5em", align: "center"},
                    {text: "Best Hit", act_variable: 'maxhit', width: "8em", align: "center"}
                ],
            charConfig:
                [
                    {
                        html:   "<img src='./img/colorbg/{JobOrName}.png' onerror='$(this).attr(\"src\", \"./img/error.png\");' style='width=60%;height:60%;' />",
                        align:  "center",
                        effect: effects.scoreBarEffect
                    },
                    {text: "{name}", width: "", align: "center", effect: effects.myCharacterEffect},
                    {text: "{damagetaken}", width: "", align: "center"},
                    {text: "{BlockPct}", width: "", align: "center"},
                    {text: "{ParryPct}", width: "", align: "center"},
                    {text: "{deaths}", width: "", align: "center", effect: effects.redTextEffect},
                    {text: "{maxhit}", width: "", align: "center"}
                ]
        },
        heal: {
            headerConfig:
                [
                    {text: "Job", act_variable: 'JobOrName', width: "2em", align: "center"},
                    {text: "Name", act_variable: 'name', width: "9em", align: "center"},
                    {text: "EHPS", act_variable: 'enchps', width: "4em", align: "center"},
                    {text: "Effective Heal", act_variable: 'healed', width: "4em", align: "right"},
                    {text: "", act_variable: 'healed%', width: "2.5em", align: "left"},
                    {text: "OverHeal (%)", act_variable: 'OverHealPct', width: "5.5em", align: "center"},
                    {text: "Crit", act_variable: 'critheal%', width: "2.5em", align: "center"},
                    {text: "Best Heal", act_variable: 'maxheal', width: "8.5em", align: "center"}
                ],
            charConfig:
                [
                    {
                        html:   "<img src='./img/colorbg/{JobOrName}.png' onerror='$(this).attr(\"src\", \"./img/error.png\");' style='width=60%;height:60%;' />",
                        align:  "center",
                        effect: effects.scoreBarEffect
                    },
                    {text: "{name}", width: "", align: "center", effect: effects.myCharacterEffect},
                    {
                        text:  combatant => Math.floor(combatant.enchps * (1 - parseInt(combatant.OverHealPct) / 100) * 10) / 10,
                        width: "",
                        align: "center"
                    },
                    {
                        text:  combatant => Math.floor(combatant.healed * (1 - parseInt(combatant.OverHealPct) / 100)),
                        width: "",
                        align: "right"
                    },
                    {
                        text:  combatant => "(" + Math.floor(parseInt(combatant["healed%"]) * (1 - parseInt(combatant.OverHealPct) / 100)) + "%)",
                        width: "",
                        align: "left"
                    },
                    {text: "{OverHealPct}", width: "", align: "center", effect: effects.redTextEffect},
                    {text: "{critheal%}", width: "", align: "center"},
                    {text: "{maxheal}", width: "", align: "center"}
                ]
        }
    };
});