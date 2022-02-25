import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class 
 extends Component {
  static propTypes = {second: third}

  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" th:href="@{/}">Primescore</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" th:href="@{/}"> <span class="fas fa-house-user"></span>&nbsp; Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><span class="fas fa-school"></span>&nbsp;Class</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-comments"></i>&nbsp;Messages</a>
              </li>  
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-align-justify"></i>&nbsp;Performances</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fas fa-pencil-alt"></i>&nbsp;Tests</a>
              </li>
            </ul>   
            <a class="nav-link " href="#"><i class="fas fa-user-circle fa-2x text-dark"></i></a>
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" th:href="@{/logout}"><b><i class="fas fa-sign-out-alt"></i>Logout</b></a>
              </li>
            </ul>   
        </div>
      </nav>
      <div class="container">
          <div class="row">
              <div class="col-sm-3">
                  <div class="card shadow mt-3 mb-5">
                      <div class="card-body">
                        <h5><span class="fas fa-user-circle fa-lg"></span>&nbsp;<span class="text-uppercase" th:text="${student.name}"></span></h5> 
                        <a class="ml-5" href="#">VIEW PROFILE</a>
                      </div>
                  </div>
                  <div class="card shadow mt-3 mb-5 mt-5">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                              <span>MY CLASSES</span>
                            </div>
                            <div>
                             
                              <div class="dropdown">

                                
                               
                                <a  type="button" id="dropdownMenu2" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                                  
                              
                                
                                <div class="dropdown-menu dropdown-primary">
                                  <a class="dropdown-item" th:href="@{/student/joinclass}">+ JOIN CLASS</a>
                                  <a class="dropdown-item" href="joinschool.html">+ JOIN SCHOOL</a>

                                </div>
                              </div>
                              
                            </div>
                        </div>
                        <hr/>
                        <div class="text-uppercase" th:each="c:${student.classes}">
                        <a style="text-decoration: none;color: black;" th:href="@{'/student/class/'+${c.classcode}}"><span th:text="${c.name}"></span></a>
                        <hr/>
                        </div>
                        

                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="card shadow-sm mt-5" style="width: 11rem;height: 4rem;">
                <div class="card-body text-center">
                <h6>Parent code: <span th:text="${student.parentcode}"></span></h6>
                </div>
                </div>
                
              </div>
              <div class="col-sm-6">
                <div class="card mt-3 shadow">
                  <img class="card-img-top" th:src="@{/img/card.jpg}" alt="Card image cap"/>
                  <div class="card-body">
                    <p> join an existing class of a teacher and start communicating with your teachers and parents, and perform quizzes, and many more.</p>
                    <div class="text-center">
                      
                      <a class="btn btn-warning btn-block" th:href="@{/student/joinclass}">JOIN CLASS</a>
                    </div>
                  </div>
                </div>
               
                <div class="card shadow mt-3">
                  <div class="text-center bg-light">
                  <img class="card-img-top" th:src="@{/img/ask.png}" style="width: 150px;" alt="Card image cap"/>
                </div>
                  <div class="card-body">
                    <p>take test by your teacher you will see the tast post when your teacher created one test</p>
                    <div class="text-center">
                      <a href="QuizCreation.html" class="btn btn-warning btn-block">VIEW TESTS</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-3 mt-5">
                
                <div class="mt-1">
                  <small>
                    <p>&nbsp;&nbsp;<a href="#">About</a>&nbsp;<b>.</b>&nbsp;<a href="#">Contact us<br/></a>&nbsp;<b>.</b>&nbsp;<a href="#">Facebook</a>&nbsp;<b>.</b>&nbsp;<a href="#">Twitter</a>&nbsp;<b>.</b>&nbsp;<a href="#">Instagram</a></p>
                  </small>
                </div>
                <small class="mt-2"><p>&nbsp;&nbsp;Primescore Ⓒ 2020</p></small>
              </div>
          </div>
      </div>
      
      </div>
    )
  }
}
