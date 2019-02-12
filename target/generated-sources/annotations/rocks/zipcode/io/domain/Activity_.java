package rocks.zipcode.io.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Activity.class)
public abstract class Activity_ {

	public static volatile SingularAttribute<Activity, String> activityid;
	public static volatile SingularAttribute<Activity, LocalDate> activitydate;
	public static volatile SingularAttribute<Activity, LocalDate> endtime;
	public static volatile SingularAttribute<Activity, Long> id;
	public static volatile SingularAttribute<Activity, String> activityname;
	public static volatile SingularAttribute<Activity, LocalDate> starttime;

}

