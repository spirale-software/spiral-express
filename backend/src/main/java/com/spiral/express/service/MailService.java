package com.spiral.express.service;

public interface MailService {

    void sendEmail(String to, String subject, String content);
}
