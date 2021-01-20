package com.spiral.express.utils;

import com.spiral.express.domain.enumeration.Pays;

public class CodePaysUtils {

    public static String getCodePays(Pays pays) {
        String codeTel = null;
        switch (pays) {
            case CAMEROUN: codeTel = "+237";
            break;
            case RWANDA: codeTel = "+250";
            break;
            case CONGO_BRAZZAVILLE: codeTel = "+242";
            break;
            case BURKINA_FASO: codeTel = "+226";
            break;
            case BELGIQUE: codeTel = "+32";
            break;
            case FRANCE: codeTel = "+33";
            break;
            case ALLEMAGNE: codeTel = "+49";
            break;
            case LUXEMBOURG: codeTel = "+352";
        }
        return codeTel;
    }
}
