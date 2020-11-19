package com.spiral.express.config;

import com.spiral.express.security.AppUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter;
import org.springframework.web.filter.CorsFilter;

//@EnableWebSecurity
public class SecurityConfigurer /*extends WebSecurityConfigurerAdapter */{
//
//    @Autowired
//    private AppUserDetailService appUserDetailService;
//
//    @Autowired
//    private CorsFilter corsFilter;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(appUserDetailService);
//    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return NoOpPasswordEncoder.getInstance();
//    }
//
//    @Override
//    public void configure(HttpSecurity http) throws Exception {
//        // @formatter:off
//        http
//                .csrf()
//                .disable()
//                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)
//                .headers()
////                .contentSecurityPolicy("default-src 'self'; frame-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://storage.googleapis.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:")
////                .and()
////                .referrerPolicy(ReferrerPolicyHeaderWriter.ReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN)
////                .and()
////                .featurePolicy("geolocation 'none'; midi 'none'; sync-xhr 'none'; microphone 'none'; magnetometer 'none'; gyroscope 'none'; speaker 'none'; fullscreen 'self'; payment 'none'")
////                .and()
////                .frameOptions()
////                .deny()
////                .and()
////                .sessionManagement()
////                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
////        .and()
////            .authorizeRequests()
////            .antMatchers("/api/authenticate").permitAll()
////            .antMatchers("/api/register").permitAll()
////            .antMatchers("/api/activate").permitAll()
////            .antMatchers("/api/account/reset-password/init").permitAll()
////            .antMatchers("/api/account/reset-password/finish").permitAll()
////            .antMatchers("/api/**").authenticated()
////            .antMatchers("/management/health").permitAll()
////            .antMatchers("/management/info").permitAll()
////            .antMatchers("/management/prometheus").permitAll()
////            .antMatchers("/management/**").hasAuthority(AuthoritiesConstants.ADMIN)
//                .and()
//                .httpBasic();
//    }
}
