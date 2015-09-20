import React from 'react';
import Header from '../Header';
import { Link } from 'react-router';


export default class Application extends React.Component {
  render() {
    return (
      <div>
        <Header />
      
        <div className="layout">
      
          <div className="layout__item u-1/5">
            <nav>
              <ul className="list-group">
                <li className="list-group-item"><Link to={`/buttons`}>Buttons</Link></li>
                <li className="list-group-item"><Link to={`/alerts`}>Alerts</Link></li>
                <li className="list-group-item"><Link to={`/breadcrumb`}>Breadcrumbs</Link></li>
                <li className="list-group-item"><Link to={`/form`}>Form</Link></li>
                <li className="list-group-item"><Link to={`/inputs`}>Inputs</Link></li>
                <li className="list-group-item"><Link to={`/labels`}>Labels</Link></li>
                <li className="list-group-item"><Link to={`/listgroup`}>List Group</Link></li>
                <li className="list-group-item"><Link to={`/pagination`}>Pagination</Link></li>
                <li className="list-group-item"><Link to={`/panel`}>Panel</Link></li>
                <li className="list-group-item"><Link to={`/progressbar`}>Progressbar</Link></li>
                <li className="list-group-item"><Link to={`/tables`}>Tables</Link></li>
                <li className="list-group-item"><Link to={`/tabs`}>Tabs</Link></li>
                <li className="list-group-item"><Link to={`/typography`}>Typography</Link></li>
              </ul>
            </nav>
          </div>
      
          <div role="main" className="layout__item u-4/5">
            {this.props.children}
          </div>
      
        </div>
      </div>
    );
  }
}
