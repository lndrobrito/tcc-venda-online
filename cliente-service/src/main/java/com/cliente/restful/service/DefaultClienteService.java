package com.cliente.restful.service;

import java.io.Serializable;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cliente.restful.model.Cliente;
import com.cliente.restful.repository.ClienteRepository;

/**
 * 
 * @author BytesTree
 *
 */
@Service
public class DefaultClienteService implements ClienteService {
	
	final static Logger logger = Logger.getLogger(DefaultClienteService.class);


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
	
    @Transactional(readOnly = true)
    @Override
    public List<Cliente> findByName(String searchTerm) {
    	logger.debug("Finding todo entries by search term: {} and page request: {}"+ searchTerm);

        List<Cliente> searchResultPage = clienteRepository.findByName(searchTerm);

        logger.debug("Found {"+searchResultPage.size()+"} todo entries");

        return searchResultPage;
    }

}
