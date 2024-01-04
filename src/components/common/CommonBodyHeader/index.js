import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

const BodyHeader = (props) => {
  const { title } = props
  
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);
  
    useEffect(() => {
      const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');
      const breadcrumbsArray = pathSegments.map((segment, index) => ({
        path: `/${pathSegments.slice(0, index + 1).join('/')}`,
        label: segment, // You can customize how you want to display the label
      }));
      setBreadcrumbs(breadcrumbsArray);
    }, [location]);

  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{title}</h1>
          </div>
          <div className="col-sm-6">
        

            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              {breadcrumbs.map((breadcrumb, index) => (
                <li className="breadcrumb-item active">
                  {index !== breadcrumbs.length - 1 ? (
              <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyHeader;
