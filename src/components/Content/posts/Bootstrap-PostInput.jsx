import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import MakePublication from "./MakePublication-Bootstrap";
import ImageInput from "./ImageInput-Bootstrap";
import Card from "react-bootstrap/Card";

const PostInput = props => {
  return (
    <Card>
      <Card.Body>
        <Tabs defaultActiveKey="Make a publication">
          <Tab eventKey="Make a publication" title="Make a publication">
            <MakePublication onPostInput={props.onPostInput} />
          </Tab>
          <Tab eventKey="Images" title="Images">
            <ImageInput />
          </Tab>
          <div className="btn-toolbar justify-content-between">
            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                share
              </button>
            </div>
          </div>
        </Tabs>
      </Card.Body>

      <Card.Footer>
        <div className="btn-toolbar justify-content-between">
          <div className="btn-group">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={props.NewPost}
            >
              Поделиться
            </button>
          </div>
          <div className="btn-group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-link dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-globe"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="btnGroupDrop1"
            >
              <a className="dropdown-item" href="#">
                <i className="fa fa-globe"></i> Public
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-users"></i> Friends
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-user"></i> Just me
              </a>
            </div>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PostInput;
