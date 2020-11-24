package com.spiral.express.service.impl;

import com.spiral.express.service.SmsService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsServiceImpl implements SmsService {
    private Logger log = LoggerFactory.getLogger(getClass());
    public static final String ACCOUNT_SID = "AC76125ec69b9076d4d65427cefe5c4346";
    public static final String AUTH_TOKEN = "75599ca2fe260e0adef42aa5388cedad";

    private String accountSid;
    private String authThoken;
    private String phoneNumber;

    public void sendSms() {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message message = Message.creator(new PhoneNumber("+32485211120"),
                new PhoneNumber("+13518881502"),
                "ça fonctionne! Yes").create();

        System.out.println(message.getSid());
    }

    @Override
    public Message sendSms(String to, String content) {
        log.info("Envoi d'un sms à {}, avec pour contenu: {}", to, content);

        Twilio.init(accountSid, authThoken);

        return Message.creator(
                new PhoneNumber(to),
                new PhoneNumber(phoneNumber),
                content
        ).create();
    }
}
