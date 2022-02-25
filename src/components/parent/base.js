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
            <li class="nav-item">
              <a class="nav-link" th:href="@{/}"> <span class="fas fa-house-user"></span>&nbsp; Home </a>
            </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa fa-align-justify"></i>&nbsp;Results</a>
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
      </div>
    )
  }
}
