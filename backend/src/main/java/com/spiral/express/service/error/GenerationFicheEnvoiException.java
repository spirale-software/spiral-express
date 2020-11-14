package com.spiral.express.service.error;

public class GenerationFicheEnvoiException extends RuntimeException {
    private String message;

    public GenerationFicheEnvoiException(String message) {
        super(message);
        this.message = message;
    }
}
