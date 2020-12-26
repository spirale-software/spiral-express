package com.spiral.express.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "app_utilisateur")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Utilisateur  implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "login")
    private String login;

    @Column(name = "actif", columnDefinition = "boolean default true")
    private Boolean actif;

    @Column(name = "password")
    private String password;

    @OneToOne
    @JoinColumn(unique = true)
    private Personne personne;

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
