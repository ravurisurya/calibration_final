/**
 * 
 */
package net.calibration.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.calibration.model.EmployeeRole;
import net.calibration.repository.EmployeeRoleRepo;

/**
 * @author surya
 *
 */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/role")
public class EmployeeRoleController {
	private final static Logger Log =  LoggerFactory.getLogger(EmployeeRoleController.class);
	@Autowired
	private EmployeeRoleRepo employeeRoleRepo;
	
	@GetMapping("/emproles")
	public List<EmployeeRole> getAllEmployees() {
		return employeeRoleRepo.findAll();
	}
	
	@PostMapping("/employeeroles")
	public EmployeeRole createEmpRole(@Valid @RequestBody EmployeeRole empRole) {
		return employeeRoleRepo.save(empRole);
	}
	

}
