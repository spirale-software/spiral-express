package com.spiral.express.domain;

public class Utilisateur {

    private Personne personne;
    private String login;
    private String password;

    public Utilisateur() {
    }

    public Utilisateur(Personne personne, String login, String password) {
        this.personne = personne;
        this.login = login;
        this.password = password;
    }

    public Personne getPersonne() {
        return personne;
    }

    public void setPersonne(Personne personne) {
        this.personne = personne;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
