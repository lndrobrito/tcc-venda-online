package com.cliente.restful.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cliente.restful.model.Cliente;
/**
 * 
 * @author BytesTree
 *
 */

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {

	@Query("SELECT c FROM Cliente c where LOWER(c.nome) like :key%")
    public List<Cliente> findByName(@Param("key") String key);
}
