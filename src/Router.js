import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
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
      </Scene>
    </Router>
  );
};

export default RouterComponent;
