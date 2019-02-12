package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Student entity.
 */
@SuppressWarnings("unused")
@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query("select student from Student student where student.user.login = ?#{principal.username}")
    List<Student> findByUserIsCurrentUser();

    @Query(value = "select distinct student from Student student left join fetch student.students",
        countQuery = "select count(distinct student) from Student student")
    Page<Student> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct student from Student student left join fetch student.students")
    List<Student> findAllWithEagerRelationships();

    @Query("select student from Student student left join fetch student.students where student.id =:id")
    Optional<Student> findOneWithEagerRelationships(@Param("id") Long id);

}
