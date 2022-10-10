# Project Four - Tesla Reimagined

![Tesla-Reimagined-Preview](https://user-images.githubusercontent.com/108159910/194674105-026485d9-96bd-47c3-91cd-f3c294f7f918.png)

Version 2.0 
Prepared by Brendon Van

General Assembly SEIR-725ec | Unit 4 Capstone Project
October 17 2022

[![Netlify Status](https://api.netlify.com/api/v1/badges/4b33aefe-a449-4fba-9d5d-0b96db0b064c/deploy-status)](https://app.netlify.com/sites/legendary-sunburst-8800a7/deploys)
https://tesla-reimagined.netlify.app/


## Project Description
Tesla Clone but with UI/UX inspired by Nickelfox & Kushanthi Hasinika. 
Full-stack application with Spring boot and React.js., JUNIT Tests , RESTful API.

---
# Wireframes
## Home Page
![HomePageWireframe](https://user-images.githubusercontent.com/108159910/194674573-5ad7ea15-415a-47c5-a6dd-bf262038b473.png)


## Design Page
![DesignPageWireframe](https://user-images.githubusercontent.com/108159910/194674580-937259e5-e243-42bb-ac19-85f0033cbecd.png)

# MVP User Stories

***MVP User Stories***

- *As a User, I want to select a model I desire to start customizing my car, so that I can order a customized car. *

- *As a User, I want to see all the options for customizing my car so that I can order my dream car. *

- *As a User, I want to see my custom changes live so that I can visibly see what I am ordering. *

- *As a User, I want to see my total price after customizing my car so that I can check if I can afford it. *

- *As a User, I want to create an account so that I can save all my customized cars, and place an order. *

***Post MVP Stretch Goals***

- *As a user, I can swipe the 3D previewed car so that I can see custom changes made live. *

---
# ERD
![Tesla-Reimagined-ERD](https://user-images.githubusercontent.com/108159910/194731829-0a010ba1-df7b-4fd8-b87d-8e970d0eaa21.png)

---
# Feasibility Study 

## Proof CRUD Code w/ MySQL Database (Might switch to PostgreSQL in future)

## Create:
```json
package com.luv2code.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.luv2code.hibernate.demo.entity.Student;

public class CreateStudentDemo {

	public static void main(String[] args) {

		// create session factory
		SessionFactory factory = new Configuration()
								.configure("hibernate.cfg.xml")
								.addAnnotatedClass(Student.class)
								.buildSessionFactory();
		
		// create session
		Session session = factory.getCurrentSession();
		
		try {			
			// create a student object
			System.out.println("Creating new student object...");
			Student tempStudent = new Student("Paul", "Doe", "paul@luv2code.com");
			
			// start a transaction
			session.beginTransaction();
			
			// save the student object
			System.out.println("Saving the student...");
			session.save(tempStudent);
			
			// commit transaction
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		finally {
			factory.close();
		}
	}

}






```

## Read:
```json
package com.luv2code.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.luv2code.hibernate.demo.entity.Student;

public class ReadStudentDemo {

	public static void main(String[] args) {

		// create session factory
		SessionFactory factory = new Configuration()
								.configure("hibernate.cfg.xml")
								.addAnnotatedClass(Student.class)
								.buildSessionFactory();
		
		// create session
		Session session = factory.getCurrentSession();
		
		try {			
			// create a student object
			System.out.println("Creating new student object...");
			Student tempStudent = new Student("Daffy", "Duck", "daffy@luv2code.com");
			
			// start a transaction
			session.beginTransaction();
			
			// save the student object
			System.out.println("Saving the student...");
			System.out.println(tempStudent);
			session.save(tempStudent);
			
			// commit transaction
			session.getTransaction().commit();
			
			// MY NEW CODE
			
			// find out the student's id: primary key
			System.out.println("Saved student. Generated id: " + tempStudent.getId());
			
			// now get a new session and start transaction
			session = factory.getCurrentSession();
			session.beginTransaction();
			
			// retrieve student based on the id: primary key
			System.out.println("\nGetting student with id: " + tempStudent.getId());
			
			Student myStudent = session.get(Student.class, tempStudent.getId());
			
			System.out.println("Get complete: " + myStudent);
			
			// commit the transaction
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		finally {
			factory.close();
		}
	}

}






```

## Update:
```json
package com.luv2code.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.luv2code.hibernate.demo.entity.Student;

public class UpdateStudentDemo {

	public static void main(String[] args) {

		// create session factory
		SessionFactory factory = new Configuration()
								.configure("hibernate.cfg.xml")
								.addAnnotatedClass(Student.class)
								.buildSessionFactory();
		
		// create session
		Session session = factory.getCurrentSession();
		
		try {								
			int studentId = 1;
			
			// now get a new session and start transaction
			session = factory.getCurrentSession();
			session.beginTransaction();
			
			// retrieve student based on the id: primary key
			System.out.println("\nGetting student with id: " + studentId);
			
			Student myStudent = session.get(Student.class, studentId);
			
			System.out.println("Updating student...");
			myStudent.setFirstName("Scooby");
			
			// commit the transaction
			session.getTransaction().commit();

			// NEW CODE
			
			session = factory.getCurrentSession();
			session.beginTransaction();
			
			// update email for all students
			System.out.println("Update email for all students");
			
			session.createQuery("update Student set email='foo@gmail.com'")
				.executeUpdate();
						
			// commit the transaction
			session.getTransaction().commit();

			
			System.out.println("Done!");
		}
		finally {
			factory.close();
		}
	}

}






```

## Delete:
```json
package com.luv2code.hibernate.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.luv2code.hibernate.demo.entity.Student;

public class DeleteStudentDemo {

	public static void main(String[] args) {

		// create session factory
		SessionFactory factory = new Configuration()
								.configure("hibernate.cfg.xml")
								.addAnnotatedClass(Student.class)
								.buildSessionFactory();
		
		// create session
		Session session = factory.getCurrentSession();
		
		try {								
			int studentId = 1;
			
			// now get a new session and start transaction
			session = factory.getCurrentSession();
			session.beginTransaction();
			
			// retrieve student based on the id: primary key
			System.out.println("\nGetting student with id: " + studentId);
			
			Student myStudent = session.get(Student.class, studentId);
			
			// delete the student
			// System.out.println("Deleting student: " + myStudent);
			// session.delete(myStudent);
			
			// delete student id=2
			System.out.println("Deleting student id=2");
			
			session.createQuery("delete from Student where id=2").executeUpdate();
			
			// commit the transaction
			session.getTransaction().commit();
			
			System.out.println("Done!");
		}
		finally {
			factory.close();
		}
	}

}






```

# Contributors

1. Brendon Van [Github Profile](https://github.com/brendonvan)
