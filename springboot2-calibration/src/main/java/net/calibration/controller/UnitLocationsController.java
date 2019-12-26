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

import net.calibration.model.UnitLocations;
import net.calibration.repository.UnitLocationsRepo;

/**
 * @author surya
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/office")
public class UnitLocationsController {
	private final static Logger Log =  LoggerFactory.getLogger(UnitLocationsController.class);
	
	@Autowired
	private UnitLocationsRepo unitLocationRepo;
	
	@PostMapping("/newUnit")
	public UnitLocations createNewUnit(@Valid @RequestBody UnitLocations unitLocation) {
		return unitLocationRepo.save(unitLocation);
	}
	
	@GetMapping("/unitList")
	public List<UnitLocations> getAllUnits() {
		return unitLocationRepo.findAll();
	}

	
}
