/**
 * 
 */
package net.calibration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.calibration.model.EmployeeRole;

/**
 * @author surya
 *
 */
@Repository
public interface EmployeeRoleRepo extends JpaRepository<EmployeeRole, Long> {

}
