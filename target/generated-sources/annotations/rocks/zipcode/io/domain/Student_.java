package rocks.zipcode.io.domain;

import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Student.class)
public abstract class Student_ {

	public static volatile SingularAttribute<Student, String> studentid;
	public static volatile SingularAttribute<Student, String> studentname;
	public static volatile SetAttribute<Student, Activity> students;
	public static volatile SingularAttribute<Student, Long> id;
	public static volatile SingularAttribute<Student, User> user;

}

