import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const path = `/`;
    navigate(path);
  };

  return (
    <div className="notFoundHolder">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button onClick={handleClick} type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
