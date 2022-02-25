import React from 'react'

const Login = () => {
  return (
	<div>
		<div>
				<div class="container-fluid text-center bg-light pt-2 pb-3 shadow">
					<h4>
						<b><a href="#" style="color: black;">PRIME SCORE</a></b>
					</h4>
				</div>

				<div class="container">
					<div class="row mt-3">
						<div class="col-sm-6 offset-sm-3">
							<div class="card bg-white shadow mb-3">
								<div class="card-body">
									<h4 align="center">Login</h4>
									<br />
									<form class="signin" method="post">
										<div class="alert alert-danger text-center">
											<b>invalid username and password</b>
										</div>

										<div  class="alert alert-success text-center">
											<b>you have been logged out!!</b>
										</div>
										<div class="form-group">
											<label for="Name">Email</label> <input type="email"
												class="form-control" name="username"
												placeholder="Enter UserName" />
										</div>

										<div class="form-group">
											<label for="password">Password</label> <input type="password"
												class="form-control" name="password" placeholder="password" />
										</div>
										<div class="form-group">
											<div class="d-flex justify-content-between">
												<div class="checkbox">
													<label> <input type="checkbox" name="agreement" />
														Remamber me
													</label>
												</div>
												<div>
													<a href="#"> Forgot password ?</a>
												</div>
											</div>

										</div>
										<div class="form-group">
											<button type="submit" class="btn btn-warning btn-lg btn-block">Login</button>
											<br />
											<p align="center">
												Not have an account ?<a href="">Register here</a>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

	</div>
  )
}

export default Login