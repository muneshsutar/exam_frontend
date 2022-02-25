import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class
    extends Component {
    static propTypes = { second: third }

    render() {
        return (
            <div>
                <div class="container-fluid text-center bg-light pt-2 pb-3 shadow">
                    <h4>
                        <b><a th:href="@{/}" style="color: black;">PRIME SCORE</a></b>
                    </h4>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-4 offset-sm-4 bg-white shadow">
                        <form class="mt-3 px-4 py-4" th:action="@{/student/dojoin}" method="POST">
                            <div class="alert text-center" th:if="${session.messageclass}" th:classappend="${session.messageclass.type}" role="alert">
                                <p th:text="${session.messageclass.content}"></p></div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Class code</label>
                                <input type="text" required="required" class="form-control" name="classcode" placeholder="Enter class code" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-warning">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="text-center mt-5">
                                <a th:href="@{/student/}"><i class="fas fa-arrow-circle-left fa-3x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
