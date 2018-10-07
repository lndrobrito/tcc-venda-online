package com.cliente.restful.controller;

import java.util.Arrays;
import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cliente.restful.model.Cliente;
import com.cliente.restful.model.Login;
import com.cliente.restful.service.ClienteService;

/**
 * 
 * @author BytesTree
 *
 */

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/cliente")
public class ClienteController {

	final static Logger logger = Logger.getLogger(ClienteController.class);

	@Autowired
	ClienteService cliService;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Cliente> addCliente(@RequestBody Cliente cliente) {
		cliService.save(cliente);
		logger.debug("Added:: " + cliente);
		return new ResponseEntity<Cliente>(cliente, HttpStatus.CREATED);
	}


	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> updateCliente(@RequestBody Cliente cliente) {
		System.out.println(cliente.toString());
		Cliente existingCli = cliService.getById(cliente.getId());
		if (existingCli == null) {
			logger.debug("Cliente with cpf " + cliente.getId() + " does not exists");
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		} else {
			cliService.save(cliente);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
	}


	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Cliente> getCliente(@PathVariable("id") Long id) {
		Cliente cliente = cliService.getById(id);
		if (cliente == null) {
			logger.debug("Cliente with id " + id + " does not exists");
			return new ResponseEntity<Cliente>(HttpStatus.NOT_FOUND);
		}
		logger.debug("Found Cliente:: " + cliente);
		return new ResponseEntity<Cliente>(cliente, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/search/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<Cliente>> findByName(@PathVariable("id") String id) {
		List<Cliente> clientes = cliService.findByName(id);
		if (clientes == null || clientes.isEmpty()) {
			logger.debug("Cliente with id " + id + " does not exists");
			return new ResponseEntity<List<Cliente>>(HttpStatus.NOT_FOUND);
		}
		logger.debug("Found Cliente:: " + clientes.toString());
		return new ResponseEntity<List<Cliente>>(clientes, HttpStatus.OK);
	}


	@RequestMapping(value = "/todos", method = RequestMethod.GET)
	public ResponseEntity<List<Cliente>> getAllClientes() {
		List<Cliente> clientes = cliService.getAll();
		if (clientes.isEmpty()) {
			logger.debug("Clientes does not exists");
			return new ResponseEntity<List<Cliente>>(HttpStatus.NO_CONTENT);
		}
		logger.debug("Found " + clientes.size() + " Clientes");
		logger.debug(Arrays.toString(clientes.toArray()));
		return new ResponseEntity<List<Cliente>>(clientes, HttpStatus.OK);
	}


	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteCliente(@PathVariable("id") Long id) {
		Cliente cliente = cliService.getById(id);
		if (cliente == null) {
			logger.debug("Cliente with id " + id + " does not exists");
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		} else {
			cliService.delete(id);
			logger.debug("Cliente with id " + id + " deleted");
			return new ResponseEntity<Void>(HttpStatus.GONE);
		}
	}
	
	/**
	 * validacao do login
	 * @param login
	 * @return
	 */
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public boolean realizaLogin(@RequestBody Login login) {
		return cliService.getClienteEmailSenha(login);

	}

}
