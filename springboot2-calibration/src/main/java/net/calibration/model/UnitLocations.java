/**
 * 
 */
package net.calibration.model;

import java.io.Serializable;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author surya
 *
 */
@Entity
@Table(name = "Office_Locations")
public class UnitLocations implements Serializable{
	
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Unit_Id")
	Long unitId;
	@Column(name = "Unit_Name")
	String unitName;
	@Column(name = "Unit_City")
	String unitCity;
	@Column(name = "Unit_PinCode")
	String unitPinCode;
	
	public UnitLocations() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UnitLocations(Long unitId, String unitName, String unitCity, String unitPinCode) {
		super();
		this.unitId = unitId;
		this.unitName = unitName;
		this.unitCity = unitCity;
		this.unitPinCode = unitPinCode;
	}

	public Long getUnitId() {
		return unitId;
	}

	public void setUnitId(Long unitId) {
		this.unitId = unitId;
	}

	public String getUnitName() {
		return unitName;
	}

	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}

	public String getUnitCity() {
		return unitCity;
	}

	public void setUnitCity(String unitCity) {
		this.unitCity = unitCity;
	}

	public String getUnitPinCode() {
		return unitPinCode;
	}

	public void setUnitPinCode(String unitPinCode) {
		this.unitPinCode = unitPinCode;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((unitCity == null) ? 0 : unitCity.hashCode());
		result = prime * result + ((unitId == null) ? 0 : unitId.hashCode());
		result = prime * result + ((unitName == null) ? 0 : unitName.hashCode());
		result = prime * result + ((unitPinCode == null) ? 0 : unitPinCode.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UnitLocations other = (UnitLocations) obj;
		if (unitCity == null) {
			if (other.unitCity != null)
				return false;
		} else if (!unitCity.equals(other.unitCity))
			return false;
		if (unitId == null) {
			if (other.unitId != null)
				return false;
		} else if (!unitId.equals(other.unitId))
			return false;
		if (unitName == null) {
			if (other.unitName != null)
				return false;
		} else if (!unitName.equals(other.unitName))
			return false;
		if (unitPinCode == null) {
			if (other.unitPinCode != null)
				return false;
		} else if (!unitPinCode.equals(other.unitPinCode))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "UnitLocations [unitId=" + unitId + ", unitName=" + unitName + ", unitCity=" + unitCity
				+ ", unitPinCode=" + unitPinCode + "]";
	}
	
	
	
	

}
