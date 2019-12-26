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

import net.calibration.model.Instruments;
import net.calibration.repository.InstrumentsRepo;

/**
 * @author surya
 *
 */

@RestController
@RequestMapping("/api/v1/instruments")
@CrossOrigin(origins = "http://localhost:4200")
public class InstrumentsController {
	
	private final static Logger Log = LoggerFactory.getLogger(InstrumentsController.class);
	
	@Autowired
	private InstrumentsRepo instrumentRepo;
	
	@GetMapping("/instrumentList")
	public List<Instruments> getAllInstruments(){
		Log.info("Entering getAllInstruments method of InstrumentsController");
		return instrumentRepo.findAll();
	}
	
	@PostMapping("/newInstrument")
	public Instruments createInstrument(@Valid @RequestBody Instruments instruments)
	{
		Log.info("Entering createInstrument method of InstrumentsController parameter:{}", instruments.toString());
		return instrumentRepo.save(instruments);
	}
	

}
