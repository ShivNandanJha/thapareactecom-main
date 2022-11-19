import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <div>
      <Wrapper>
        <section class="page_404">
          <div class="container">
          <h1 class="text-center "> Error 404</h1>
            <div class="row">
              <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                  <div class="four_zero_four_bg">
                    
                  </div>

                  <div class="contant_box_404">
                    <h3 class="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>
                    <NavLink to="/">
                      <Button>Go to Home</Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  /*======================
404 page
=======================*/

  .page_404 {
    padding: 40px 0;
    background: #fff;
    font-family: "Arvo", serif;
    text-align:center;
  
  }
h1, h3 , p{
  text-align: center;
}
h3{
  font-size: 3rem
}

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 400px;
    background-position: center;
  }

  .four_zero_four_bg h1 {
    font-size: 80px;
  }

  .four_zero_four_bg h3 {
    font-size: 80px;
  }

  .link_404 {
    color: #fff !important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;
  }
  .contant_box_404 {
    margin-top: -50px;
  }
`;

export default ErrorPage;
