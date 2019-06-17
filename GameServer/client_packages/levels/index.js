const hudComponentID = 19;
const rankBarColor = 116; // HUD_COLOUR_FREEMODE, https://wiki.rage.mp/index.php?title=Fonts_and_Colors

// credit: https://illusivetea.me/FiveM/scaleforms.html
mp.events.add("updateRankBar", (limit, nextLimit, previousXP) => {
    if (!mp.game.graphics.hasHudScaleformLoaded(hudComponentID)) {
        mp.game.graphics.requestHudScaleform(hudComponentID);
        while (!mp.game.graphics.hasHudScaleformLoaded(hudComponentID)) mp.game.wait(0);

        mp.game.graphics.pushScaleformMovieFunctionFromHudComponent(hudComponentID, "SET_COLOUR");
        mp.game.graphics.pushScaleformMovieFunctionParameterInt(rankBarColor);
        mp.game.graphics.popScaleformMovieFunctionVoid();
    }

    mp.game.graphics.pushScaleformMovieFunctionFromHudComponent(hudComponentID, "SET_RANK_SCORES");
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(limit);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(nextLimit);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(previousXP);
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(mp.players.local.getVariable("currentXP"));
    mp.game.graphics.pushScaleformMovieFunctionParameterInt(mp.players.local.getVariable("currentLevel"));
    mp.game.graphics.popScaleformMovieFunctionVoid();
});