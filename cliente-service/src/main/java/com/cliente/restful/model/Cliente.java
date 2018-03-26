package com.cliente.restful.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 
 * @author BytesTree
 *
 */

@Entity
@Table(name = "cliente")
public class Cliente implements java.io.Serializable {

	private static long serialVersionUID = 4910225916550731446L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	@Column(name = "id", unique = true, nullable = false)
	private Long id;
	
	@Column(name = "nome", length = 50)
	private String nome;

	@Column(name = "CPF", length = 50)
	private String CPF;

	@Column(name = "endereco", length = 50)
	private String endereco;

	@Column(name = "estado", length = 20)
	private String estado;

	@Column(name = "municipio", length = 20)
	private String municipio;
	
	@Column(name = "telefone", length = 20)
	private String telefone;
	
	@Column(name = "email", length = 20)
	private String email;
	
	@Column(name = "senha", length = 20)
	private String senha;

	public Cliente() {
	}
	
	public Cliente(Long id) {
		this.id = id;
	}

	public Cliente(String nome) {
		this.nome = nome;
	}


	public Cliente(Long id, String nome, String cPF, String endereco, String estado, String municipio, String telefone,
			String email, String senha) {
		this.id = id;
		this.nome = nome;
		this.CPF = cPF;
		this.endereco = endereco;
		this.estado = estado;
		this.municipio = municipio;
		this.telefone = telefone;
		this.email = email;
		this.senha = senha;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	/**
	 * @return the nome
	 */
	public String getNome() {
		return nome;
	}

	/**
	 * @param nome the nome to set
	 */
	public void setNome(String nome) {
		this.nome = nome;
	}

	/**
	 * @return the cPF
	 */
	public String getCPF() {
		return CPF;
	}

	/**
	 * @param cPF the cPF to set
	 */
	public void setCPF(String cPF) {
		CPF = cPF;
	}

	/**
	 * @return the endereco
	 */
	public String getEndereco() {
		return endereco;
	}

	/**
	 * @param endereco the endereco to set
	 */
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	/**
	 * @return the estado
	 */
	public String getEstado() {
		return estado;
	}

	/**
	 * @param estado the estado to set
	 */
	public void setEstado(String estado) {
		this.estado = estado;
	}

	/**
	 * @return the municipio
	 */
	public String getMunicipio() {
		return municipio;
	}

	/**
	 * @param municipio the municipio to set
	 */
	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	/**
	 * @return the telefone
	 */
	public String getTelefone() {
		return telefone;
	}

	/**
	 * @param telefone the telefone to set
	 */
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the senha
	 */
	public String getSenha() {
		return senha;
	}

	/**
	 * @param senha the senha to set
	 */
	public void setSenha(String senha) {
		this.senha = senha;
	}

	@Override
	public String toString() {
		StringBuffer sb = new StringBuffer();
		sb.append("Cpf: ").append(this.CPF).append(", Nome: ").append(this.nome).append(", Endereco: ")
				.append(this.endereco).append(", Municipio: ").append(this.municipio).append(", Telefone: ")
				.append(this.telefone);
		return sb.toString();
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (CPF == null || obj == null || getClass() != obj.getClass())
			return false;
		Cliente toCompare = (Cliente) obj;
		return CPF.equals(toCompare.CPF);
	}

	@Override
	public int hashCode() {
		return CPF == null ? 0 : CPF.hashCode();
	}

}
