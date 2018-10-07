package com.cliente.restful.model;


public class Login {

	public String email;
    public String password;
    
    public Login() {}	
    
    
	public Login(String email, String password) {		
		this.email = email;
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setSenha(String password) {
		this.password = password;
	}
}