package com.spiral.express.service.impl;

import com.spiral.express.config.ApplicationProperties;
import com.spiral.express.service.SmsService;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class SmsServiceImpl implements SmsService {
    private Logger log = LoggerFactory.getLogger(getClass());

    private final ApplicationProperties applicationProperties;

    public SmsServiceImpl(ApplicationProperties applicationProperties) {
        this.applicationProperties = applicationProperties;
    }

    @Override
    public Message sendSms(String to, String content) {
        log.info("Envoi d'un sms à {}, avec pour contenu: {}", to, content);

        Twilio.init(
                applicationProperties.getTwilio().getAccountSid(),
                applicationProperties.getTwilio().getAuthToken()
        );

        return Message.creator(
                new PhoneNumber(to),
                new PhoneNumber(applicationProperties.getTwilio().getPhoneNumber()),
                content
        ).create();
    }
}
