package com.spiral.express.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "application", ignoreUnknownFields = false)
public class ApplicationProperties {
    private Twilio twilio;

    public Twilio getTwilio() {
        return twilio;
    }

    public void setTwilio(Twilio twilio) {
        this.twilio = twilio;
    }

    public static class Twilio {
        private String accountSid;
        private String authToken;
        private String phoneNumber;

        public String getAccountSid() {
            return accountSid;
        }

        public void setAccountSid(String accountSid) {
            this.accountSid = accountSid;
        }

        public String getAuthToken() {
            return authToken;
        }

        public void setAuthToken(String authToken) {
            this.authToken = authToken;
        }

        public String getPhoneNumber() {
            return phoneNumber;
        }

        public void setPhoneNumber(String phoneNumber) {
            this.phoneNumber = phoneNumber;
        }
    }
}
