package rocks.zipcode.io.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Activity.
 */
@Entity
@Table(name = "activity")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Activity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "activityname")
    private String activityname;

    @Column(name = "activityid")
    private String activityid;

    @Column(name = "activitydate")
    private LocalDate activitydate;

    @Column(name = "starttime")
    private LocalDate starttime;

    @Column(name = "endtime")
    private LocalDate endtime;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getActivityname() {
        return activityname;
    }

    public Activity activityname(String activityname) {
        this.activityname = activityname;
        return this;
    }

    public void setActivityname(String activityname) {
        this.activityname = activityname;
    }

    public String getActivityid() {
        return activityid;
    }

    public Activity activityid(String activityid) {
        this.activityid = activityid;
        return this;
    }

    public void setActivityid(String activityid) {
        this.activityid = activityid;
    }

    public LocalDate getActivitydate() {
        return activitydate;
    }

    public Activity activitydate(LocalDate activitydate) {
        this.activitydate = activitydate;
        return this;
    }

    public void setActivitydate(LocalDate activitydate) {
        this.activitydate = activitydate;
    }

    public LocalDate getStarttime() {
        return starttime;
    }

    public Activity starttime(LocalDate starttime) {
        this.starttime = starttime;
        return this;
    }

    public void setStarttime(LocalDate starttime) {
        this.starttime = starttime;
    }

    public LocalDate getEndtime() {
        return endtime;
    }

    public Activity endtime(LocalDate endtime) {
        this.endtime = endtime;
        return this;
    }

    public void setEndtime(LocalDate endtime) {
        this.endtime = endtime;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Activity activity = (Activity) o;
        if (activity.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), activity.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Activity{" +
            "id=" + getId() +
            ", activityname='" + getActivityname() + "'" +
            ", activityid='" + getActivityid() + "'" +
            ", activitydate='" + getActivitydate() + "'" +
            ", starttime='" + getStarttime() + "'" +
            ", endtime='" + getEndtime() + "'" +
            "}";
    }
}
