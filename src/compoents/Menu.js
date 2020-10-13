import React from "react";

import ToggleButton from "./buttons";
import "./Menus.css";

function Menu({ handleSection, ...otherProps }) {
  const { viral, handleSort, handleWindow, onToggle } = otherProps;
  return (
    <section className="grid-demo">
      <h2 className="section-title">
        <span>Image of the Day</span>
      </h2>
      <ToggleButton isOn={viral} onToggle={onToggle} />
      <div className="controls cf">
        <div className="control search">
          <input
            className="control-field search-field form-control "
            type="text"
            name="search"
            placeholder="Search..."
          />
          <div className="control-icon">
            <i className="material-icons">&#xE8B6;</i>
          </div>
        </div>

        <div className="control filter">
          <div className="control-icon">
            <i className="material-icons">&#xE152;</i>
          </div>
          <div className="select-arrow">
            <i className="material-icons">&#xE313;</i>
          </div>
          <select
            className="control-field filter-field form-control"
            onChange={handleSection}
          >
            <option value="">Select Section</option>
            <option value="hot">hot</option>
            <option value="top">top</option>
            <option value="user">user</option>
          </select>
        </div>

        <div className="control layout">
          <div className="control-icon">
            <i className="material-icons">&#xE871;</i>
          </div>
          <div className="select-arrow">
            <i className="material-icons">&#xE313;</i>
          </div>
          <select
            className="control-field layout-field form-control"
            onChange={handleWindow}
          >
            <option value="">Select Date</option>
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
            <option value="all">All</option>
          </select>
        </div>

        <div className="control sort">
          <div className="control-icon">
            <i className="material-icons">&#xE164;</i>
          </div>
          <div className="select-arrow">
            <i className="material-icons">&#xE313;</i>
          </div>
          <select
            className="control-field filter-field form-control"
            onChange={handleSort}
          >
            <option value="">Sort</option>
            <option value="top">top</option>
            <option value="time">time</option>
            <option value="rising">rising</option>
            <option value="user">user</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default Menu;
