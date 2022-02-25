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
                    want to sign in</div>
                <br />
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-sm-6 offset-sm-3">
                            <div class="card bg-light">
                                <div class="card-body">
                                    <br />
                                    <form action="" th:action="@{/select-login}" method="GET">
                                        <div class="form-group">
                                            <button class="btn btn-warning btn-lg btn-block"
                                                type="submit" name="type" value="student" >LOGIN AS STUDENT</button>
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <button class="btn btn-warning btn-lg btn-block"
                                                name="type" value="teacher" type="submit" >LOGIN AS TEACHER</button>
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <button class="btn btn-warning btn-lg btn-block"
                                                name="type" value="parent" type="submit" >LOGIN AS PARENT</button>
                                        </div>
                                    </form>
                                    <br />
                                    <p align="center">
                                        did not have an account ? <a th:href="@{/choosesignup}">Register here</a>
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
