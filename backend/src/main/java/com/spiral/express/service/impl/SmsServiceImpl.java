package com.spiral.express.service.impl;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.stereotype.Service;

@Service
public class SmsServiceImpl {
    public static final String ACCOUNT_SID = "AC76125ec69b9076d4d65427cefe5c4346";
    public static final String AUTH_TOKEN = "75599ca2fe260e0adef42aa5388cedad";

    public void sendSms() {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message message = Message.creator(new PhoneNumber("+32485211120"),
                new PhoneNumber("+13518881502"),
                "ça fonctionne! Yes").create();

        System.out.println(message.getSid());
    }
}
