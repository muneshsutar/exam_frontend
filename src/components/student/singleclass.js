import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class
    extends Component {
    static propTypes = { second: third }

    render() {
        return (
            <div>
                <section th:object="${classes}">
                    <div class="container mb-3">
                        <div class="row mt-5">
                            <div class="col-sm-2 p-3" >
                                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active" id="one" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Posts</a>
                                    <a class="nav-link" id="two" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Assignment</a>
                                    <a class="nav-link" id="three" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Members</a>
                                </div>
                            </div>
                            <div class="col-sm-10">
                                <div class=" " id="div1">
                                    <div class="bg-white p-4 shadow">
                                        <h3 class="text-uppercase"><span th:text="${classes.name}"></span></h3>
                                        <h6 class="text-uppercase"><span th:text="${classes.teacher.name}"></span>&nbsp;||&nbsp;<span th:text="${classes.standrad}"></span></h6>
                                        <p th:text="'-'+${classes.descrip}"></p>
                                    </div>
                                    <h5 class="mt-2">QUIZES:</h5>
                                    <div class="mt-3" th:each="q:${classes.quiz_schedule}">
                                        <div class="card text-center shadow-sm">
                                            <div class="card-header">
                                                <h5 class="text-uppercase" th:text="${q.quiz.name}"></h5>
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">Special title treatment</h5>
                                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <a th:href="@{'/student/showquiz/'+${q.quiz.id}}" id="fullscreen_button" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                            <div class="card-footer text-muted">
                                                2 days ago
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                <div id="div2">
                                    <div class="bg-white p-2">
                                        <h5 class="text-uppercase">|| <span th:text="${classes.name}"></span></h5>
                                    </div>
                                    <div class="bg-white mt-2 p-2">
                                        <h5>ASSIGNMENTS</h5>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">SL-NO</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Given Date</th>
                                                    <th scope="col">Perform</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr th:each="a:${classes.assignments}">
                                                    <th th:text="${a.id}" scope="row"></th>
                                                    <td th:text="${a.name}"></td>
                                                    <td th:text="${a.uploadDate}"></td>
                                                    <td><a th:href="@{'/student/download/'+${a.path}}" class="btn btn-success">download</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>




                                <div id="div3">
                                    <div class="bg-white p-2">
                                        <h5 class="text-uppercase">|| <span th:text="${classes.name}"></span></h5>
                                    </div>

                                    <div class="bg-white mt-2 p-2">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">NO</th>
                                                    <th scope="col">NAME</th>
                                                    <th scope="col">EMAIL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr th:each="s:${classes.student}">
                                                    <th scope="row" th:text="${s.studId}"></th>
                                                    <td th:text="${s.name}"></td>
                                                    <td th:text="${s.email}"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
