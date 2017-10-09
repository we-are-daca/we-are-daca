import React from 'react';
import Loading from 'react-loading-bar';
import 'react-loading-bar/dist/index.css';
import Info from '../common/Info';
import '../App.css';

class Luis extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          show: false,
          name: 'Luis',
          occupation: 'Software Engineer',
          timeSinceArrival: '15',
          country: 'Mexico',
          image: 'luis_portrait_2.jpg',
          interviewDate: 'September 30, 2017'
        }

        setTimeout(() => {
            this.setState({ show: true });
        }, 1);
    }

    imageLoaded = () => {
        setTimeout(() => {
            this.setState({ show: false })
        }, 500);
    }

    componentWillMount = () => {
        window.scrollTo(0, 0);
    }


    render() {
        console.log(this.state);    
        return (
            <div className="participant">
            <Loading
                color={'blue'}
                show={this.state.show}
                showSpinner={false}
            />
            <div className="container">
                <ul className="row site-navigation">
            
                    <li className="col-12 col-sm-4 push-sm-4 logo">
                    <Link to={'/'}>
                        {'Faces of Daca'}
                    </Link>
                    </li>
                    <li className="col-6 col-sm-2 pull-sm-2 about-daca">
                    <a className="">About DACA</a>
                    </li>
                    <li className="col-6 col-sm-2 push-sm-2 about-site">
                    <a className="">How to help</a>
                    </li>
              </ul> 
                <div className="row">
                    <div className="portrait col-md-12">
                        <img src={`https://dwistynbcri9g.cloudfront.net/${this.state.image}`} alt={this.state.name}
                            onLoad={this.imageLoaded} 
                        /> 
                    </div>
                </div>
                <div className="row">
                    <div className="dacamentor-name col-md-12">
                        {`${this.state.name}'s Journey`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dacamentor-border-container">
                        <div className="dacamentor-border"></div>
                    </div>
                </div>
                <div className="row info">
                    <div className="info-container">
                        <Info
                            years={this.state.timeSinceArrival}
                            date={this.state.interviewDate}
                            occupation={this.state.occupation}
                            country={this.state.country}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dacamentor-endborder-container">
                        <div className="dacamentor-endborder"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 dacamentor-interview">
                    <p>
                        <b>
                            {'Tell me a bit about your early years and where you come from.'}
                        </b>
                    </p>
                    <p>
                      <span className="dacamentor-response">
                        {'eofinwoinfowaenf;ow weofnawe;ofn;iowefn;owe ;oefnoawenfo;iwen'}
                      </span>
                    </p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Luis;