package com.cliente.restful.service;

import java.io.Serializable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cliente.restful.model.Cliente;
import com.cliente.restful.repository.ClienteRepository;

/**
 * 
 * @author BytesTree
 *
 */
@Service
public class DefaultClienteService implements ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	@Override
	public Cliente save(Cliente entity) {
		return clienteRepository.save(entity);
	}

	@Override
	public Cliente getById(Serializable id) {
		return clienteRepository.findOne((Long) id);
	}

	@Override
	public List<Cliente> getAll() {
		return clienteRepository.findAll();
	}

	@Override
	public void delete(Serializable id) {
		clienteRepository.delete((Long) id);
	}

}
