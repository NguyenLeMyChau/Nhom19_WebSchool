
// import React, { useState } from 'react';
// import './navbar.css'; // Import stylesheet
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const NavigationBar = ({ className }) => {
//   const [selectedNavItem, setSelectedNavItem] = useState(null);

//   // Dữ liệu cho mỗi mục con của sub navbar
//   const hocTapItems = [
//     { title: "Kết quả học tập", value: "AcademicResult" },
//     { title: "Lịch theo tuần", value: "WeeklySchedule" },
//     { title: "Lịch theo tiến độ", value: "progress-schedule" },
//     { title: "Lịch học lớp danh nghĩa", value: "class-schedule" }
//   ];

//   const dangKyHocPhanItems = [
//     { title: "Chương trình khung", value: "framework-program" },
//     { title: "Đăng ký học phần", value: "CourseRegistration" }
//   ];

//   const hocPhiItems = [
//     { title: "Tra cứu công nợ", value: "CheckDebt" },
//     { title: "Phiếu thu tổng hợp", value: "consolidated-receipt" }
//   ];

//   const handleNavItemClick = (item) => {
//     setSelectedNavItem(selectedNavItem === item ? null : item);
//   };

//   return (
//     // <div>
//     <div className="navbar">
//       <ul>
//         <li><Link to="/">Trang chủ</Link></li>
//         <li><Link to="/general-information">Thông tin chung</Link></li>
//         <li className={selectedNavItem === "Học tập" ? "selected" : ""}>
//           <Link to="#" onClick={() => handleNavItemClick("Học tập")}>Học tập</Link>
//           {selectedNavItem === "Học tập" && (
//             <ul className="sub-navbar">
//               {hocTapItems.map((item, index) => (
//                 <li key={index}><Link to={`/${item.value}`}>{item.title}</Link></li>
//               ))}
//             </ul>
//           )}
//         </li>
//         <li className={selectedNavItem === "Đăng ký học phần" ? "selected" : ""}>
//           <Link to="#" onClick={() => handleNavItemClick("Đăng ký học phần")}>Đăng ký học phần</Link>
//           {selectedNavItem === "Đăng ký học phần" && (
//             <ul className="sub-navbar">
//               {dangKyHocPhanItems.map((item, index) => (
//                 <li key={index}><Link to={`/${item.value}`}>{item.title}</Link></li>
//               ))}
//             </ul>
//           )}
//         </li>
//         <li className={selectedNavItem === "Học phí" ? "selected" : ""}>
//           <Link to="#" onClick={() => handleNavItemClick("Học phí")}>Học phí</Link>
//           {selectedNavItem === "Học phí" && (
//             <ul className="sub-navbar">
//               {hocPhiItems.map((item, index) => (
//                 <li key={index}><Link to={`/${item.value}`}>{item.title}</Link></li>
//               ))}
//             </ul>
//           )}
//         </li>
//       </ul>
//     </div>
//     // </div>
//   );
// }

// NavigationBar.propTypes = {
//   className: PropTypes.string,
// }

// export default NavigationBar;


import React, { useState } from 'react';
import './navbar.css'; // Import stylesheet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faDisplay, faBook, faPencilSquare, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const NavigationBar = ({ className }) => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const hocTapItems = [
    { title: "Kết quả học tập", value: "AcademicResult" },
    { title: "Lịch theo tuần", value: "WeeklySchedule" },
    { title: "Lịch theo tiến độ", value: "progress-schedule" },
    { title: "Lịch học lớp danh nghĩa", value: "class-schedule" }
  ];

  const dangKyHocPhanItems = [
    { title: "Chương trình khung", value: "framework-program" },
    { title: "Đăng ký học phần", value: "CourseRegistration" }
  ];

  const hocPhiItems = [
    { title: "Tra cứu công nợ", value: "CheckDebt" },
    { title: "Phiếu thu tổng hợp", value: "consolidated-receipt" }
  ];

  const handleNavItemClick = (item) => {
    setSelectedNavItem(selectedNavItem === item ? null : item);
  };

  return (
    <div className="navbar">
      <ul>
        <li><Link to="/"><FontAwesomeIcon icon={faHome} /> Trang chủ</Link></li>
        <li><Link to="/general-information"><FontAwesomeIcon icon={faDisplay} /> Thông tin chung</Link></li>
        <li className={selectedNavItem === "Học tập" ? "selected" : ""}>
          <Link to="#" onClick={() => handleNavItemClick("Học tập")}><FontAwesomeIcon icon={faBook} /> Học tập</Link>
          {selectedNavItem === "Học tập" && (
            <ul className="sub-navbar">
              {hocTapItems.map((item, index) => (
                <li key={index}><Link to={`/${item.value}`}>{item.title}</Link></li>
              ))}
            </ul>
          )}
        </li>
        <li className={selectedNavItem === "Đăng ký học phần" ? "selected" : ""}>
          <Link to="#" onClick={() => handleNavItemClick("Đăng ký học phần")}><FontAwesomeIcon icon={faPencilSquare} /> Đăng ký học phần</Link>
          {selectedNavItem === "Đăng ký học phần" && (
            <ul className="sub-navbar">
              {dangKyHocPhanItems.map((item, index) => (
                <li key={index}><Link to={`/${item.value}`}>{item.title}</Link></li>
              ))}
            </ul>
          )}
        </li>
        <li className={selectedNavItem === "Học phí" ? "selected" : ""}>
          <Link to="#" onClick={() => handleNavItemClick("Học phí")}><FontAwesomeIcon icon={faMoneyBill} /> Học phí</Link>

          {selectedNavItem === "Học phí" && (
            <ul className="sub-navbar">
              {hocPhiItems.map((item, index) => (
                <li key={index}><Link to={`/${item.value}`}>{item.title}</Link></li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavigationBar;


