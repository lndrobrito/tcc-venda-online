package com.cliente.restful.service;

import java.util.List;

import com.cliente.restful.model.Cliente;
import com.cliente.restful.model.Login;

/**
 * 
 * @author BytesTree
 *
 */
public interface ClienteService extends CRUDService<Cliente> {
	
	List<Cliente> findByName(String searchTerm);
	
	/**
	 * Verifica se cliente esta cadastrado 
	 * @param login
	 * @return
	 */
	public boolean getClienteEmailSenha(Login login);


}
