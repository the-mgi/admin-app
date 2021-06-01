import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import ProductsComponent from "../products/prodcuts.component";
import EmployeesComponent from "../employees/employees.component";
import OrdersComponent from "../orders/orders.component";


const BottomNavigationComponent = () => {
	const [index, setIndex] = React.useState(0);

	const routes = [
		{key: 'products', title: 'Products', icon: 'bag-personal-outline'},
		{key: 'employees', title: 'Employees', icon: 'account'},
		{key: 'orders', title: 'Orders', icon: 'cart-outline'},
	];

	const renderScene = BottomNavigation.SceneMap({
		products: ProductsComponent,
		employees: EmployeesComponent,
		orders: OrdersComponent
	});

	return (
		<BottomNavigation
			navigationState={{index, routes}}
			onIndexChange={setIndex}
			renderScene={renderScene}
			barStyle={{backgroundColor: "royalblue"}}
		/>
	);
};

export default BottomNavigationComponent;
