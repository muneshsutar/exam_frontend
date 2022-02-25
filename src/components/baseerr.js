import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class
    extends Component {
    static propTypes = { second: third }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light ml-auto bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><b>PrimeScore</b></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Learn More
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" th:href="@{/teacher/}">Teacher</a>
                                        <a class="dropdown-item" th:href="@{/student/}">Student</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Parent</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Getting Started</a>
                                </li>
                            </ul>
                            <div>
                                <a th:href="@{/choosesignup}" class="btn btn-outline-dark mx-sm-2 mr-2" type="submit">Sign Up</a>
                                <a th:href="@{/loginchoose}" class="btn btn-outline-dark mx-sm-2 mr-2" type="submit">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
