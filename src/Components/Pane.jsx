// import React from 'react';
import PropTypes from 'prop-types';
import './PanesContainer.css';

const Pane = ({ image, icon, title, subtitle, additionalClass, onClick }) => {
  return (
    <div
      className={`pane ${additionalClass} cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-14 min-w-14 overflow-hidden relative rounded-3xl transition-all`}
      onClick={onClick}
      style={{
        backgroundImage: `url(/Studiophotos/${image})`, // נתיב לתמונה מתוך תיקיית public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    <div className="gradient-overlay"></div>
      <div className="label1">
        <div className={`icon bg-gray-900`}>
          <i className={`fas fa-${icon}`}></i>
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

Pane.propTypes = {
  image: PropTypes.string.isRequired, // הוסף את image לתוך propTypes
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  additionalClass: PropTypes.string,
  onClick: PropTypes.func,
};

Pane.defaultProps = {
  additionalClass: '',
  onClick: () => {},
};

export default Pane;
