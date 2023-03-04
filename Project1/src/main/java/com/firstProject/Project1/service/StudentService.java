package com.firstProject.Project1.service;

import java.util.List;

import com.firstProject.Project1.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);
	public List<Student> getAllStudents();
}
