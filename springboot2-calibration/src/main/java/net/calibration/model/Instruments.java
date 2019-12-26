/**
 * 
 */
package net.calibration.model;

import java.io.Serializable;

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
@Table(name ="Instruments")
public class Instruments implements Serializable{
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "inst_Id")
	Long instId;
	@Column(name = "inst_name")
	String instName;
	
	@Column(name = "inst_desc")
	String instDesc;

	public Instruments() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Instruments(Long instId, String instName, String instDesc) {
		super();
		this.instId = instId;
		this.instName = instName;
		this.instDesc = instDesc;
	}

	public Long getInstId() {
		return instId;
	}

	public void setInstId(Long instId) {
		this.instId = instId;
	}

	public String getInstName() {
		return instName;
	}

	public void setInstName(String instName) {
		this.instName = instName;
	}

	public String getInstDesc() {
		return instDesc;
	}

	public void setInstDesc(String instDesc) {
		this.instDesc = instDesc;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((instDesc == null) ? 0 : instDesc.hashCode());
		result = prime * result + ((instId == null) ? 0 : instId.hashCode());
		result = prime * result + ((instName == null) ? 0 : instName.hashCode());
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
		Instruments other = (Instruments) obj;
		if (instDesc == null) {
			if (other.instDesc != null)
				return false;
		} else if (!instDesc.equals(other.instDesc))
			return false;
		if (instId == null) {
			if (other.instId != null)
				return false;
		} else if (!instId.equals(other.instId))
			return false;
		if (instName == null) {
			if (other.instName != null)
				return false;
		} else if (!instName.equals(other.instName))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Instruments [instId=" + instId + ", instName=" + instName + ", instDesc=" + instDesc + "]";
	}
	
	
	

}
