/**
 * 
 */
package net.calibration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.calibration.model.Instruments;

/**
 * @author surya
 *
 */
@Repository
public interface InstrumentsRepo extends JpaRepository<Instruments, Long> {

}
