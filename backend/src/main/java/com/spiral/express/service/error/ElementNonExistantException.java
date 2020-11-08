package com.spiral.express.service.error;

public class ElementNonExistantException extends RuntimeException {

    public ElementNonExistantException(String message) {
        super(message);
    }
}
