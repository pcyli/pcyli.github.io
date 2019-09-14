define(['./config', 'jquery'], function (config, $) {
    function scoreBarEffect(cell, combatant, index, type, topScoreCombatant) {
        var tank = config.tank.classes,
            dps = config.dps.classes,
            heal = config.heal.classes,
            topScoreProp = config[type].topScoreProp,
            jobClass, score, percentScore, tableRow;

        // 色指定
        var job = combatant["Job"];

        if (dps.indexOf(job) > -1) {
            jobClass = config.dps;
        } else if (tank.indexOf(job) > -1) {
            jobClass = config.tank;
        } else if (heal.indexOf(job) > -1) {
            jobClass = config.heal;
        } else {
            jobClass = 'base';
        }

        var topScore = topScoreCombatant[topScoreProp];

        score = combatant[topScoreProp];
        percentScore = (parseInt(score)/ parseInt(topScore) * 100) || 0;

        tableRow = cell.parentNode;
        tableRow.style.background =  "-webkit-linear-gradient(left, " + jobClass.color+ " 0%," + jobClass.color + (percentScore-1) +"%,rgba(125,185,232,0) " + percentScore + "%)";
            //"-webkit-gradient(linear, left top,right top, color-stop(0.95," + jobClass.color + "), to(rgba(24,24,24,0.0)))";
        //tableRow.style.backgroundSize = (parseInt(score)/ parseInt(topScore)*100) + "% 100%";
        tableRow.style.backgroundAttachment = "fixed";
        tableRow.style.backgroundRepeat = "no-repeat";
    }

    function redTextEffect(cell) {
        var num = parseInt(cell.innerText);

        if (num > 0) {
            $(cell).addClass("textred");
        }
    }

    function myCharacterEffect(cell, combatant, index) {
        var myname = "YOU";

        if (myname == combatant["name"]) {
            $(cell).parents("tr").addClass("mc");
        }
    }

    function jobColorEffect(cell, combatant, index) {
        $(cell).parents("tr").addClass(combatant["Job"]);
    }

    function insertCommaEffect(cell) {
        cell.innerText = cell.innerText.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    }

    function graphEffect(cell) {
        $(cell).addClass("graphCell");
    }

    return {
        scoreBarEffect: scoreBarEffect,
        redTextEffect: redTextEffect,
        myCharacterEffect: myCharacterEffect,
        jobColorEffect: jobColorEffect,
        insertCommaEffect: insertCommaEffect,
        graphEffect: graphEffect
    };
});