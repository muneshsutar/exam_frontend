import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class
	extends Component {
	static propTypes = { second: third }

	render() {
		return (
			<div>
				<section th:object="${quiz}">
					<div class="container mb-5">
						<div class="row mt-5">
							<div class="col-sm-12">
								<div class="alert alert-success" role="alert">
									<h3 class="text-center text-uppercase"><span th:text="${quiz.name}+'-Quiz'"></span></h3>
								</div>
								<form th:action="@{/student/submitquiz}" method="POST">
									<ol type="1" class="shadow">
										<li th:each="q:${quiz.questions}" class="p-1">
											<h6><span th:text="${q.content}"></span></h6>
											<input type="hidden" name="questionId" th:value="${q.id}" />
											<ol type="a">
												<li th:each="a:${q.answers}">
													<input type="radio" required="required" th:name="@{'question_'+${q.id}}" th:value="${a.id}" />
													<span th:text="${a.answerContent}"></span>
												</li>
											</ol>
										</li>
									</ol>
									<div class="text-center">
										<button type="submit" class="btn btn-success">SUBMIT</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
