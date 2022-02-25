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

				<div class="container">
					<div class="row mt-3">
						<div class="col-sm-6 offset-sm-3">
							<div class="card bg-white shadow mb-3">
								<div class="card-body">
									<h4 align="center">SIGNUP AS A TEACHER</h4>
									<br />
									<form class="signup" action="#" th:action="@{/register-teacher}"
										th:object="${user}" method="post">
										<div class="alert text-center" th:if="${session.message}" th:classappend="${session.message.type}" role="alert">
											<p th:text="${session.message.content}"></p></div>
										<div class="form-group">
											<label for="Name">Name:</label> <input type="text"
												class="form-control" name="name" th:value="${user.name}"
												placeholder="Enter Name"
												th:classappend="${#fields.hasErrors('name') ? 'is-invalid' : ''}" />
										</div>
										<div class="invalid-feedback"
											th:each="e:${#fields.errors('name')}" th:text="${e}"></div>
										<div class="form-group">
											<label for="email">Email:</label> <input type="email"
												class="form-control" name="email" th:value="${user.email}"
												placeholder="Enter Email Address"
												th:classappend="${#fields.hasErrors('email') ? 'is-invalid' : ''}" />
										</div>
										<div class="invalid-feedback"
											th:each="e:${#fields.errors('email')}" th:text="${e}"></div>
										<div class="form-group">
											<label for="Password">Password:</label> <input type="password"
												class="form-control" th:value="${user.password}"
												name="password" placeholder="Enter Password"
												th:classappend="${#fields.hasErrors('password') ? 'is-invalid' : ''}" />
										</div>
										<div class="invalid-feedback"
											th:each="e:${#fields.errors('password')}" th:text="${e}"></div>
										<div class="form-group">
											<div class="checkbox">
												<label> <input type="checkbox" name="agreement" />
													Please accept the <a href="#">terms and conditions</a> to
													proceed with your request.
												</label>
											</div>
										</div>
										<div class="form-group">
											<button type="submit" class="btn btn-warning btn-lg btn-block">Register</button>
											<br />
											<p align="center">
												Alredy have an account ?<a th:href="@{/loginchoose}">login here</a>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
