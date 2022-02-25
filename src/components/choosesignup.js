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
                <div class="text-center">Choose an account type with whome you
                    want to sign up</div>
                <br />
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-sm-6 offset-sm-3">
                            <div class="card bg-light">
                                <div class="card-body">
                                    <br />
                                    <div class="form-group">
                                        <a class="btn btn-warning btn-lg btn-block"
                                            th:href="@{/signup-student}">SIGN UP AS
                                            STUDENT</a>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <a class="btn btn-warning btn-lg btn-block"
                                            th:href="@{/signup-teacher}">SIGN UP AS
                                            TEACHER</a>
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <a class="btn btn-warning btn-lg btn-block"
                                            th:href="@{/signup-parent}">SIGN UP AS
                                            PARENT</a>
                                    </div>
                                    <br />
                                    <p align="center">
                                        Alredy have an account ? <a th:href="@{/loginchoose}">login here</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
