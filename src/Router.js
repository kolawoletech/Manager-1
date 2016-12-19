import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { clearForm } from './actions';

class RouterComponent extends Component {
  renderRouter() {
    return (
      <Router sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight }}>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' initial />
        </Scene>

        <Scene key='main'>
          <Scene 
            key='employeeList' 
            component={EmployeeList} 
            title='Employees' 
            rightTitle='Add'
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene key='employeeCreate' component={EmployeeCreate} title='Employee Create' />
          <Scene key='employeeEdit' component={EmployeeEdit} title='Edit / View Employee' onBack={() => { this.props.clearForm(); Actions.pop(); }} />
        </Scene>
      </Router>
    );
  }
  render() {
    return this.renderRouter();
  }

}



export default connect(null, { clearForm })(RouterComponent);
