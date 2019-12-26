package net.calibration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.calibration.model.UnitLocations;

@Repository
public interface UnitLocationsRepo extends JpaRepository<UnitLocations, Long> {

}
