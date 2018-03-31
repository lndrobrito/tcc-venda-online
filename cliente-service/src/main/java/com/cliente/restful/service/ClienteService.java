package com.cliente.restful.service;

import java.util.List;

import com.cliente.restful.model.Cliente;

/**
 * 
 * @author BytesTree
 *
 */
public interface ClienteService extends CRUDService<Cliente> {
	
	List<Cliente> findByName(String searchTerm);


}
