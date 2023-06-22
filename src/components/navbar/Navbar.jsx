import "./navbar.css";
import { useEffect } from "react";
export default function Navbar() {
  useEffect(() => {
    function test() {
      var tabsNewAnim = document.getElementById("navbarSupportedContent");
      //   var selectorNewAnim = document
      //     .getElementById("navbarSupportedContent")
      //     .querySelectorAll("li").length;
      var activeItemNewAnim = tabsNewAnim.querySelector(".active");
      var activeWidthNewAnimHeight = activeItemNewAnim.offsetHeight;
      var activeWidthNewAnimWidth = activeItemNewAnim.offsetWidth;
      var itemPosNewAnimTop = activeItemNewAnim.offsetTop;
      var itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
      document.querySelector(".hori-selector").style.cssText =
        "top:" +
        itemPosNewAnimTop +
        "px; left:" +
        itemPosNewAnimLeft +
        "px; height:" +
        activeWidthNewAnimHeight +
        "px; width:" +
        activeWidthNewAnimWidth +
        "px;";

      document
        .getElementById("navbarSupportedContent")
        .addEventListener("click", function (e) {
          var target = e.target;
          var isAnchor = target.tagName.toLowerCase() === "a";
          if (isAnchor) {
            var parentLi = target.parentElement;
            var allNavItems = document
              .getElementById("navbarSupportedContent")
              .querySelectorAll("li");
            allNavItems.forEach(function (navItem) {
              navItem.classList.remove("active");
            });
            parentLi.classList.add("active");
            var activeWidthNewAnimHeight = parentLi.offsetHeight;
            var activeWidthNewAnimWidth = parentLi.offsetWidth;
            var itemPosNewAnimTop = parentLi.offsetTop;
            var itemPosNewAnimLeft = parentLi.offsetLeft;
            document.querySelector(".hori-selector").style.cssText =
              "top:" +
              itemPosNewAnimTop +
              "px; left:" +
              itemPosNewAnimLeft +
              "px; height:" +
              activeWidthNewAnimHeight +
              "px; width:" +
              activeWidthNewAnimWidth +
              "px;";
          }
        });
    }

    test();

    window.addEventListener("resize", function () {
      setTimeout(function () {
        test();
      }, 500);
    });

    // Add active class on another-page move
    var path = window.location.pathname.split("/").pop();
    if (path === "") {
      path = "index.html";
    }
    var target = document.querySelector(
      '#navbarSupportedContent ul li a[href="' + path + '"]'
    );
    if (target) {
      target.parentElement.classList.add("active");
    }
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-custom navbar-mainbg"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* <a className="navbar-brand navbar-logo" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li className="nav-item active">
              <a className="nav-link" href="javascript:void(0);">
                <i className="fas fa-tachometer-alt"></i>Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="javascript:void(0);">
                <i className="far fa-address-book"></i>About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0);">
                <i className="far fa-clone"></i>Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
