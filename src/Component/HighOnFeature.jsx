import { Card } from "primereact/card";
import { Image } from "primereact/image";
import React from "react";
const HighOnFeature = () => {
  return (
    <React.Fragment>
      <h2 className="title">High on feature</h2>
      <div className="grid ml-0 mr-0">
        <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4 className="m-2">Camera Quality</h4>
          </div>
          <div className="feature-image">
            <Card>
              <Image
                src="https://i.ytimg.com/vi/Ss9565LvOlw/maxresdefault.jpg"
                alt="Camera Quality"
                width="400"
                height="400"
                className="max-w-max"
              />
            </Card>
          </div>
        </div>

        <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4 className="m-2">Processor</h4>
          </div>
          <div className="feature-image">
            <Card>
              <Image
                src="https://th.bing.com/th/id/OIP.4sjwyNqXqjMjLgt0r9CISwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Processor"
                width="400"
                height="400"
                className="max-w-max"
              />
            </Card>
          </div>
        </div>

        <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4 className="m-2">Build Quality</h4>
          </div>
          <div className="feature-image">
            <Card>
              <Image
                src="https://th.bing.com/th/id/OIP.dFW9YUkRqscsgQIRVRT5qgHaHa?w=153&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Build Quality"
                width="400"
                height="400"
                className="max-w-max"
              />
            </Card>
          </div>
        </div>

        {/* <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4>Display</h4>
          </div>
          <div className="feature-image">
            <Image
              src="https://th.bing.com/th/id/OIP.27OJWP3SQxVzAzt2A73iPAHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Display"
              width="400"
              height="400"
              className="max-w-max"
            />
          </div>
        </div> */}
        <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4 className="m-2">Display</h4>
          </div>
          <div className="feature-image">
            <Card>
              <Image
                src="https://th.bing.com/th/id/OIP.27OJWP3SQxVzAzt2A73iPAHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Display"
                width="400"
                height="400"
                className="max-w-max"
              />
            </Card>
          </div>
        </div>

        <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4 className="m-2">Battery Backup</h4>
          </div>
          <div className="feature-image">
            <Card>
              <Image
                src="https://th.bing.com/th/id/OIP.10bHRQ9CoEZR2gZSvkrKrQHaDN?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Battery"
                width="400"
                height="400"
                className="max-w-max"
              />
            </Card>
          </div>
        </div>

        {/* <div className="col-12 lg:col-4 md:col-6 feature-parent">
          <div className="feature-heading">
            <h4>Storage</h4>
          </div>
          <div className="feature-image">
            <Image
              src="data:image/jpeg;base64,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"
              alt="Storage"
              width="400"
              height="400"
              className="max-w-max"
            />
          </div>
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default HighOnFeature;
