package com.spiral.express.service;

import com.twilio.rest.api.v2010.account.Message;

public interface SmsService {

    Message sendSms(String to, String content);
}
